import { Translations } from "../lib/translations";
import * as types from "../types";

// Helper function to dynamically import and initialize the Gemini client,
// ensuring the @google/genai module is not loaded on initial app startup.
async function getInitializedGemini() {
    if (!process.env.API_KEY) {
        // This should be caught by the UI, but as a safeguard, we throw.
        throw new Error("API Key not found. Please set it in your environment.");
    }
    // Dynamically import the module only when needed
    const { GoogleGenAI, Type } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    return { ai, Type };
}

export const getConversionRate = async (from: string, to: string): Promise<number | null> => {
    if (from === to) return 1;
    const prompt = `What is the numerical exchange rate from ${from} to ${to}? Provide the answer in JSON.`;
    try {
        const { ai, Type } = await getInitializedGemini(); // Await the client here
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
        const result = JSON.parse(text.trim());
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

export const calculateIslamicInheritance = async (deceasedFamilyDetails: string, residuaryEstate: number, language: string): Promise<types.InheritanceResult[]> => {
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
        const { ai, Type } = await getInitializedGemini(); // Await the client here
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
        const result = JSON.parse(text.trim());
        return result;

    } catch (error) {
        console.error("Error calculating Islamic inheritance:", error);
        throw new Error("Failed to calculate inheritance distribution.");
    }
};
