import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as types from '../types';
import type { Will, InheritanceResult, Asset, ComplexAsset, Debt, Beneficiary, Person } from '../types';
import Button from './ui/Button';
import Card from './ui/Card';
import { useLocalization } from '../context/LocalizationContext';
import { WillFormContext } from '../context/WillFormProvider';
import Spinner from './ui/Spinner';
import * as constants from '../constants';
import { getConversionRate, calculateIslamicInheritance } from '../services/geminiService';
import AppHeader from './AppHeader';

interface ReviewWillProps {
  willData: Will;
  onEdit: () => void;
  onBack: () => void;
}

const ReviewWill: React.FC<ReviewWillProps> = ({ willData, onEdit, onBack }) => {
    const { t, locale, languageName, currency, formatCurrency } = useLocalization();
    const [isCalculatingInheritance, setIsCalculatingInheritance] = useState(false);
    const [isConvertingCurrency, setIsConvertingCurrency] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [distribution, setDistribution] = useState<InheritanceResult[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [convertedTotals, setConvertedTotals] = useState({
        totalAssets: 0,
        totalCredits: 0,
        totalDebits: 0,
        netEstate: 0,
        assignedAssets: 0,
        residuaryEstate: 0,
    });

    const { personalDetails, beneficiaries, debtsOwedToTestator, debtsOwedByTestator, assets, complexAssets, willContent, mediaMessage, legal, finalInstructions } = willData;

    const allFinancialItems = useMemo(() => [...assets, ...complexAssets, ...debtsOwedToTestator, ...debtsOwedByTestator], [assets, complexAssets, debtsOwedToTestator, debtsOwedByTestator]);
    // FIX: Explicitly type the Set as Set<string> to ensure correct type inference downstream.
    const uniqueCurrencies = useMemo(() => new Set<string>(allFinancialItems.map(item => item.currency || currency.code)), [allFinancialItems, currency.code]);
    const hasMixedCurrencies = useMemo(() => uniqueCurrencies.size > 1, [uniqueCurrencies]);

    const convertAndCalculateTotals = useCallback(async () => {
        if (allFinancialItems.length === 0) {
            setConvertedTotals({ totalAssets: 0, totalCredits: 0, totalDebits: 0, netEstate: 0, assignedAssets: 0, residuaryEstate: 0 });
            return;
        }

        setIsConvertingCurrency(true);
        setError(null);
        
        const baseCurrency = currency.code;
        const rates: { [key: string]: number } = { [baseCurrency]: 1 };

        if (hasMixedCurrencies) {
            // FIX: Cast Array.from(uniqueCurrencies) to string[] to resolve type inference issue where elements were being treated as `unknown`.
            const currenciesToFetch = (Array.from(uniqueCurrencies) as string[]).filter(c => c !== baseCurrency);
            const ratePromises = currenciesToFetch.map(c => getConversionRate(c, baseCurrency));
            const resolvedRates = await Promise.all(ratePromises);
            
            let conversionFailed = false;
            resolvedRates.forEach((rate, index) => {
                const foreignCurrency = currenciesToFetch[index];
                if (rate !== null) {
                    rates[foreignCurrency] = rate;
                } else {
                    conversionFailed = true;
                }
            });

            if (conversionFailed) {
                setError(t('conversion_failed'));
            }
        }

        const convert = (amount: number, fromCurrency: string) => (amount || 0) * (rates[fromCurrency] || 0);

        const totalAssets = [...assets, ...complexAssets].reduce((sum, item) => sum + convert(item.estimatedValue, item.currency), 0);
        const totalCredits = debtsOwedToTestator.reduce((sum, item) => sum + convert(item.amount, item.currency), 0);
        const totalDebits = debtsOwedByTestator.reduce((sum, item) => sum + convert(item.amount, item.currency), 0);
        const assignedAssetsValue = assets.filter(a => a.beneficiaryId).reduce((sum, item) => sum + convert(item.estimatedValue, item.currency), 0);

        const netEstate = (totalAssets + totalCredits) - totalDebits;
        const residuaryEstate = netEstate - assignedAssetsValue;

        setConvertedTotals({
            totalAssets,
            totalCredits,
            totalDebits,
            netEstate,
            assignedAssets: assignedAssetsValue,
            residuaryEstate,
        });

        setIsConvertingCurrency(false);

    }, [allFinancialItems, currency.code, hasMixedCurrencies, uniqueCurrencies, t]);

    useEffect(() => {
        convertAndCalculateTotals();
    }, [convertAndCalculateTotals]);
    
    const runInheritanceCalculation = useCallback(async () => {
        if (personalDetails.religion !== types.Religion.MUSLIM || isConvertingCurrency || convertedTotals.residuaryEstate <= 0) {
            setDistribution([]);
            return;
        }

        setIsCalculatingInheritance(true);
        setError(null);
        setDistribution([]);
        
        try {
            const result = await calculateIslamicInheritance(willData, convertedTotals.residuaryEstate, languageName);
            setDistribution(result);
        } catch (err) {
            console.error("Inheritance calculation failed", err);
            setError(t('calculation_error'));
        } finally {
            setIsCalculatingInheritance(false);
        }
    }, [personalDetails.religion, isConvertingCurrency, convertedTotals.residuaryEstate, willData, languageName, t]);

    useEffect(() => {
        // Run calculation only after currency conversion is done
        if (!isConvertingCurrency) {
            runInheritanceCalculation();
        }
    }, [isConvertingCurrency, runInheritanceCalculation]);

    const handleExportPdf = async () => {
        const input = document.getElementById('will-content-to-export');
        if (!input) return;
        
        setIsExporting(true);
        try {
            const canvas = await html2canvas(input, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / pdfWidth;
            const imgHeight = canvasHeight / ratio;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;
            }
            pdf.save(`Wasiyatak_Will_${personalDetails.fullName.replace(/\s/g, '_')}.pdf`);
        } catch (error) {
            console.error("Error exporting PDF:", error);
            alert("Could not export to PDF.");
        } finally {
            setIsExporting(false);
        }
    };
    
    const Section: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
        <Card className="mb-6 break-inside-avoid">
            <h2 className="text-xl font-bold border-b pb-2 mb-4 text-slate-700">{title}</h2>
            {children}
        </Card>
    );

    const DataPair: React.FC<{ label: string, value?: any, className?: string, children?: React.ReactNode }> = ({ label, value, className = '', children }) => (
        <div className={`flex justify-between items-start py-2 border-b border-slate-100 ${className}`}>
            <span className="font-semibold text-slate-600">{label}:</span>
            <div className="text-end ms-2 text-slate-800 text-sm">{value || children}</div>
        </div>
    );
    
    const renderPerson = (person: Person) => (
        <div className="text-sm">
            {person.name && <p>{person.name}</p>}
            {person.phone && <p className="text-slate-500">{person.phone}</p>}
            {person.email && <p className="text-slate-500">{person.email}</p>}
        </div>
    );

    const reviewTitleString = t('review_your_will');
    const titleParts = reviewTitleString.split(' ');
    const titleNode = (
        <>
            {titleParts.map((part, index) => (
                <React.Fragment key={index}>
                    {part}
                    {index < titleParts.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    );

    return (
        <div className="container mx-auto p-4 md:p-8 bg-slate-50">
            <AppHeader
                onBack={onBack}
                title={titleNode}
                titleClassName="!text-base md:!text-lg"
                showLogoutButton={false}
                actions={
                    <>
                        <Button
                            onClick={handleExportPdf}
                            disabled={isExporting}
                            variant='secondary'
                            className="!px-2.5 !py-1 !text-xs"
                        >
                            {isExporting ? t('exporting') : t('export_to_pdf')}
                        </Button>
                        <Button onClick={onEdit} className="!px-2.5 !py-1 !text-xs">
                            {t('edit')}
                        </Button>
                    </>
                }
            />

            <main id="will-content-to-export" className="pt-8">
                {/* Personal & Financial */}
                <div className="md:columns-2 md:gap-6">
                    <Section title={t('personal_details')}>
                        <DataPair label={t('full_name')} value={personalDetails.fullName} />
                        <DataPair label={t('gender')} value={t(`gender_${personalDetails.gender.toLowerCase()}`)} />
                        <DataPair label={t('religion')} value={t(constants.religionOptions.find(r => r.value === personalDetails.religion)?.key || personalDetails.religion)} />
                        
                        {personalDetails.gender === types.Gender.MALE && personalDetails.religion === types.Religion.MUSLIM ? (
                            <DataPair label={t('number_of_wives')} value={personalDetails.muslimDetails?.wivesCount} />
                        ) : (
                            <DataPair label={t('marital_status')} value={personalDetails.maritalStatus ? t(`marital_status_${personalDetails.maritalStatus.toLowerCase().replace(/\s/g, '_')}`) : '-'} />
                        )}

                        <DataPair label={t('father_alive')} value={t(personalDetails.fatherAlive.toLowerCase())} />
                        <DataPair label={t('mother_alive')} value={t(personalDetails.motherAlive.toLowerCase())} />

                        <DataPair label={t('paternal_grandfather_alive')} value={t(personalDetails.paternalGrandfatherAlive.toLowerCase())} />
                        <DataPair label={t('paternal_grandmother_alive')} value={t(personalDetails.paternalGrandmotherAlive.toLowerCase())} />
                        <DataPair label={t('maternal_grandmother_alive')} value={t(personalDetails.maternalGrandmotherAlive.toLowerCase())} />

                        <DataPair label={t('number_of_sons')} value={personalDetails.sonsCount} />
                        <DataPair label={t('number_of_daughters')} value={personalDetails.daughtersCount} />

                        <DataPair label={t('grand_sons')} value={personalDetails.sonSonsCount} />
                        <DataPair label={t('grand_daughters')} value={personalDetails.sonDaughtersCount} />
                    </Section>

                    <Section title={t('financial_summary')}>
                        <div className="space-y-1">
                            {isConvertingCurrency && <div className="flex items-center gap-2 text-sm text-slate-500"><Spinner size="sm"/> {t('converting_currencies', { currency: currency.code })}</div>}
                            {error && !isConvertingCurrency && <p className="text-sm text-red-500">{error}</p>}
                             <DataPair label={t('total_assets_value')} value={formatCurrency(convertedTotals.totalAssets)}/>
                             <DataPair label={t('total_credits')} value={formatCurrency(convertedTotals.totalCredits)}/>
                             <DataPair label={t('total_debits')} className="text-red-600" value={formatCurrency(convertedTotals.totalDebits)}/>
                             <hr className="my-2"/>
                             <DataPair label={t('net_estate_value')} className="font-bold" value={formatCurrency(convertedTotals.netEstate)}/>
                             <DataPair label={t('assigned_assets_value')} className="text-blue-600" value={formatCurrency(convertedTotals.assignedAssets)}/>
                             <hr className="my-2"/>
                             <DataPair label={t('residuary_estate')} className="font-bold text-lg text-teal-700" value={formatCurrency(convertedTotals.residuaryEstate)}/>
                        </div>
                    </Section>
                </div>

                {/* Detailed Lists */}
                {beneficiaries.length > 0 && 
                    <Section title={t('beneficiaries')}>
                        {beneficiaries.map(b => (
                            <DataPair key={b.id} label={b.name}>
                                <div className="text-sm text-slate-500">
                                    {t(constants.beneficiaryRelationOptions.find(r => r.value === b.relation)?.key || b.relation)}
                                    {b.phone && ` | ${b.phone}`}
                                </div>
                            </DataPair>
                        ))}
                    </Section>
                }
                
                {debtsOwedToTestator.length > 0 &&
                     <Section title={t('debts_owed_to_you')}>
                        {debtsOwedToTestator.map(d => (
                            <DataPair key={d.id} label={d.person}>
                               {new Intl.NumberFormat(locale, { style: 'currency', currency: d.currency }).format(d.amount)}
                            </DataPair>
                        ))}
                    </Section>
                }
                 {debtsOwedByTestator.length > 0 &&
                     <Section title={t('debts_you_owe')}>
                        {debtsOwedByTestator.map(d => (
                            <DataPair key={d.id} label={d.person}>
                               {new Intl.NumberFormat(locale, { style: 'currency', currency: d.currency }).format(d.amount)}
                            </DataPair>
                        ))}
                    </Section>
                }

                {assets.length > 0 &&
                    <Section title={t('assets')}>
                        {assets.map(a => (
                            <DataPair key={a.id} label={a.description}>
                                {new Intl.NumberFormat(locale, { style: 'currency', currency: a.currency }).format(a.estimatedValue)}
                            </DataPair>
                        ))}
                    </Section>
                }
                
                 {complexAssets.length > 0 &&
                    <Section title={t('complex_assets_title')}>
                        {complexAssets.map(a => (
                            <DataPair key={a.id} label={a.description}>
                                {new Intl.NumberFormat(locale, { style: 'currency', currency: a.currency }).format(a.estimatedValue)}
                            </DataPair>
                        ))}
                    </Section>
                }
                
                {willContent &&
                    <Section title={t('will_content')}>
                         <pre className="whitespace-pre-wrap bg-slate-50 p-2 rounded-md font-sans text-sm">{willContent}</pre>
                    </Section>
                }
                
                <Section title={t('legal_and_witnesses')}>
                    <DataPair label={t('lawyer_details')}>{renderPerson(legal.lawyer)}</DataPair>
                    {legal.witnesses.map((w, i) => (
                         <DataPair key={w.id} label={`${t('witness_name')} ${i+1}`}>{renderPerson(w)}</DataPair>
                    ))}
                </Section>
                
                <Section title={t('final_instructions')}>
                    <DataPair label={t('burial_location')} value={finalInstructions.burialLocation || '-'} />
                    <DataPair label={t('final_wishes')} value={finalInstructions.instructions || '-'}/>
                </Section>


                {personalDetails.religion === types.Religion.MUSLIM && (
                    <Section title={t('islamic_inheritance_calculator')}>
                       {(isCalculatingInheritance || isConvertingCurrency) && <div className="flex items-center gap-2"><Spinner size="sm"/> <p className="text-slate-500">{t('calculating_distribution')}</p></div>}
                       {error && !isConvertingCurrency && <p className="text-red-500 mt-4">{error}</p>}
                       {distribution.length > 0 && !isCalculatingInheritance && !isConvertingCurrency && (
                            <div className="mt-2">
                                <h3 className="font-bold text-lg mb-2">{t('calculation_results')}</h3>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white border">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="py-2 px-4 border-b text-start">{t('heir_name')}</th>
                                                <th className="py-2 px-4 border-b text-start">{t('share_amount')}</th>
                                                <th className="py-2 px-4 border-b text-start">{t('share_percentage')}</th>
                                                <th className="py-2 px-4 border-b text-start">{t('reason')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {distribution.map((heir, index) => (
                                                <tr key={index} className="hover:bg-slate-50">
                                                    <td className="py-2 px-4 border-b">{heir.heirName}</td>
                                                    <td className="py-2 px-4 border-b">{formatCurrency(heir.shareAmount)}</td>
                                                    <td className="py-2 px-4 border-b">{heir.sharePercentage}</td>
                                                    <td className="py-2 px-4 border-b text-sm">{heir.reason}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        {convertedTotals.residuaryEstate <= 0 && !isCalculatingInheritance && !isConvertingCurrency && <p>{t('inheritanceNote')}</p>}
                    </Section>
                )}
            </main>
        </div>
    );
};

export default ReviewWill;