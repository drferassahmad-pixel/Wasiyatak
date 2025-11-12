import { GoogleGenAI, Type } from "@google/genai";
import { Translations } from "../lib/translations";
import * as types from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getConversionRate = async (from: string, to: string): Promise<number | null> => {
    if (from === to) return 1;
    const prompt = `What is the numerical exchange rate from ${from} to ${to}? Provide the answer in JSON.`;
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        rate: { 
                            type: Type.NUMBER,
                            description: "The numerical exchange rate."
                        }
                    },
                    required: ['rate']
                }
            }
        });

        const text = response.text;
        const result = JSON.parse(text);
        if (result && typeof result.rate === 'number') {
            return result.rate;
        }
        console.warn(`Unexpected JSON structure for conversion rate ${from} to ${to}:`, result);
        return null;
    } catch (error) {
        console.error(`Error fetching conversion rate for ${from} to ${to}:`, error);
        return null;
    }
};

export const calculateIslamicInheritance = async (will: types.Will, residuaryEstate: number, language: string): Promise<types.InheritanceResult[]> => {
    const { personalDetails } = will;

    if (personalDetails.religion !== types.Religion.MUSLIM) {
        return [];
    }
    
    let deceasedFamilyDetails = `The deceased is a ${personalDetails.gender.toLowerCase()}. The following relatives are alive:\n`;

    // Spouse(s)
    if (personalDetails.gender === types.Gender.FEMALE) {
        if (personalDetails.maritalStatus === types.MaritalStatus.MARRIED) {
            deceasedFamilyDetails += `- One husband\n`;
        }
    } else { // MALE
        const wives = personalDetails.muslimDetails?.wivesCount || 0;
        if (wives > 0) {
            deceasedFamilyDetails += `- ${wives} wife(s)\n`;
        }
    }
    
    // Parents
    if (personalDetails.fatherAlive === 'Yes') deceasedFamilyDetails += `- Father\n`;
    if (personalDetails.motherAlive === 'Yes') deceasedFamilyDetails += `- Mother\n`;

    // Grandparents
    if (personalDetails.paternalGrandfatherAlive === 'Yes') deceasedFamilyDetails += `- Paternal Grandfather (Father's Father)\n`;
    if (personalDetails.paternalGrandmotherAlive === 'Yes') deceasedFamilyDetails += `- Paternal Grandmother (Father's Mother)\n`;
    if (personalDetails.maternalGrandmotherAlive === 'Yes') deceasedFamilyDetails += `- Maternal Grandmother (Mother's Mother)\n`;

    // Children
    if (personalDetails.sonsCount > 0) deceasedFamilyDetails += `- ${personalDetails.sonsCount} son(s)\n`;
    if (personalDetails.daughtersCount > 0) deceasedFamilyDetails += `- ${personalDetails.daughtersCount} daughter(s)\n`;

    // Grandchildren (from son)
    if (personalDetails.sonSonsCount > 0) deceasedFamilyDetails += `- ${personalDetails.sonSonsCount} son's son(s)\n`;
    if (personalDetails.sonDaughtersCount > 0) deceasedFamilyDetails += `- ${personalDetails.sonDaughtersCount} son's daughter(s)\n`;

    // Siblings (only relevant if no father or son)
    if (personalDetails.fatherAlive === 'No' && personalDetails.sonsCount === 0 && personalDetails.siblings) {
        const { fullBrothers, fullSisters, paternalBrothers, paternalSisters, maternalSiblings } = personalDetails.siblings;
        if (fullBrothers > 0) deceasedFamilyDetails += `- ${fullBrothers} full brother(s)\n`;
        if (fullSisters > 0) deceasedFamilyDetails += `- ${fullSisters} full sister(s)\n`;
        if (paternalBrothers > 0) deceasedFamilyDetails += `- ${paternalBrothers} paternal brother(s)\n`;
        if (paternalSisters > 0) deceasedFamilyDetails += `- ${paternalSisters} paternal sister(s)\n`;
        if (maternalSiblings > 0) deceasedFamilyDetails += `- ${maternalSiblings} maternal sibling(s)\n`;
    }


    const prompt = `Calculate the Islamic inheritance shares based on the Sunni school of thought given the following details.
Provide the output in the specified JSON format, in the ${language} language.

Deceased's Living Family:
${deceasedFamilyDetails}
Financial Details:
- The total residuary estate to be distributed is ${residuaryEstate}.

Instructions:
1.  Identify all primary ("Quranic") and residuary ("Asaba") heirs from the list of living family.
2.  Apply the rules of exclusion ("Hajb"). For example, the father excludes all siblings except maternal siblings. The son excludes grandchildren and most siblings. The paternal grandfather is excluded by the father. The mother excludes all grandmothers.
3.  Determine and allocate the fixed Quranic share for each primary heir.
4.  Allocate the remaining estate to the residuary heirs according to their priority.
5.  Explain the reason for each heir's share (e.g., "Wife's share is 1/8 due to children").
6.  If an heir is excluded, state that and provide the reason (e.g., "Full Brother is excluded by the Father").
7.  The final output must be a JSON array of objects, with no other text before or after the array.
`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            heirName: { type: Type.STRING },
                            heirRelation: { type: Type.STRING },
                            shareAmount: { type: Type.NUMBER },
                            sharePercentage: { type: Type.STRING },
                            reason: { type: Type.STRING }
                        },
                        required: ['heirName', 'heirRelation', 'shareAmount', 'sharePercentage', 'reason']
                    }
                }
            }
        });
        
        const text = response.text;
        const result = JSON.parse(text);
        return result;

    } catch (error) {
        console.error("Error calculating Islamic inheritance:", error);
        throw new Error("Failed to calculate inheritance distribution.");
    }
};