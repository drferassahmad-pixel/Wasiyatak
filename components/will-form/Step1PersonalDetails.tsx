import React, { useContext, useEffect } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import * as types from '../../types';
import type { PersonalDetails } from '../../types';
import * as constants from '../../constants';
import Select from '../ui/Select';
import Card from '../ui/Card';
import { useLocalization } from '../../context/LocalizationContext';
import ToggleSwitch from '../ui/ToggleSwitch';
import Input from '../ui/Input';

const Step1PersonalDetails: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t } = useLocalization();
  const { personalDetails } = willState;

  // Effect to reset religion-specific details when religion changes
  useEffect(() => {
    const defaultInheritanceState = {
        maritalStatus: types.MaritalStatus.NOT_MARRIED,
        muslimDetails: { wivesCount: 0 },
        fatherAlive: 'No' as 'No',
        motherAlive: 'No' as 'No',
        sonsCount: 0,
        daughtersCount: 0,
        paternalGrandfatherAlive: 'No' as 'No',
        paternalGrandmotherAlive: 'No' as 'No',
        maternalGrandmotherAlive: 'No' as 'No',
        sonSonsCount: 0,
        sonDaughtersCount: 0,
        siblings: {
            fullBrothers: 0,
            fullSisters: 0,
            paternalBrothers: 0,
            paternalSisters: 0,
            maternalSiblings: 0
        }
    };

    dispatch({
        type: 'UPDATE_PERSONAL',
        payload: {
            ...personalDetails,
            ...defaultInheritanceState
        }
    });
    // This effect should run ONLY when the religion field changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [personalDetails.religion, dispatch]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newPayload: Partial<PersonalDetails> = {};

    if (name === 'fullName' || name === 'gender' || name === 'religion' || name === 'countryOfResidence' || name === 'maritalStatus') {
        newPayload = { [name]: value };
    } else if (['sonsCount', 'daughtersCount', 'sonSonsCount', 'sonDaughtersCount', 'wivesCount'].includes(name)) {
        const numValue = parseInt(value, 10) || 0;
        if(name === 'wivesCount') {
            newPayload = { muslimDetails: { wivesCount: numValue } };
        } else {
            newPayload = { [name]: numValue };
        }
    }
    dispatch({ type: 'UPDATE_PERSONAL', payload: { ...personalDetails, ...newPayload } });
  };
  
  const handleToggleChange = (field: keyof PersonalDetails, enabled: boolean) => {
      const value = enabled ? 'Yes' : 'No';
      dispatch({ type: 'UPDATE_PERSONAL', payload: { ...personalDetails, [field]: value } });
  };
  
  const handleSiblingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const updatedSiblings = {
          ...personalDetails.siblings,
          [name]: parseInt(value, 10) || 0,
      };
      dispatch({ type: 'UPDATE_PERSONAL', payload: { ...personalDetails, siblings: updatedSiblings }});
  };

  const getReligionPromptKey = () => {
    switch (personalDetails.religion) {
        case types.Religion.MUSLIM: return 'islamic_inheritance_details_prompt';
        case types.Religion.JEWISH: return 'jewish_inheritance_prompt';
        case types.Religion.HINDU: return 'hindu_inheritance_prompt';
        case types.Religion.CHRISTIAN:
        case types.Religion.BUDDHIST:
        case types.Religion.ATHEIST:
        case types.Religion.OTHER:
            return 'civil_law_inheritance_prompt';
        default: return '';
    }
  }

  const renderInheritanceQuestions = () => {
    const { religion, gender, sonsCount, daughtersCount, fatherAlive, motherAlive } = personalDetails;
    const hasChildren = sonsCount > 0 || daughtersCount > 0;

    const commonParentQuestions = (
        <>
            <h4 className="text-lg font-semibold">{t('first_degree_relatives')}</h4>
            <div className="grid md:grid-cols-2 gap-6">
                <ToggleSwitch label={t('father_alive')} enabled={fatherAlive === 'Yes'} onChange={(e) => handleToggleChange('fatherAlive', e)} />
                <ToggleSwitch label={t('mother_alive')} enabled={motherAlive === 'Yes'} onChange={(e) => handleToggleChange('motherAlive', e)} />
            </div>
        </>
    );

    const commonGrandparentQuestions = (
        <div className="pt-4 mt-4 border-t">
            <h4 className="font-semibold">{t('grandparents_section')}</h4>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
                {fatherAlive === 'No' && <ToggleSwitch label={t('paternal_grandfather_alive')} enabled={personalDetails.paternalGrandfatherAlive === 'Yes'} onChange={(e) => handleToggleChange('paternalGrandfatherAlive', e)} />}
                <ToggleSwitch label={t('paternal_grandmother_alive')} enabled={personalDetails.paternalGrandmotherAlive === 'Yes'} onChange={(e) => handleToggleChange('paternalGrandmotherAlive', e)} />
                <ToggleSwitch label={t('maternal_grandmother_alive')} enabled={personalDetails.maternalGrandmotherAlive === 'Yes'} onChange={(e) => handleToggleChange('maternalGrandmotherAlive', e)} />
            </div>
        </div>
    );
    
    const commonChildrenQuestions = (
        <>
            <div className="grid md:grid-cols-2 gap-6 pt-4 mt-4 border-t">
                <Input label={t('number_of_sons')} id="sonsCount" name="sonsCount" type="number" min="0" value={sonsCount} onChange={handleChange}/>
                <Input label={t('number_of_daughters')} id="daughtersCount" name="daughtersCount" type="number" min="0" value={daughtersCount} onChange={handleChange}/>
            </div>
            {sonsCount > 0 && 
                <div className="pt-4 mt-4 border-t">
                    <h4 className="font-semibold">{t('grandchildren_via_son')}</h4>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <Input label={t('grand_sons')} id="sonSonsCount" name="sonSonsCount" type="number" min="0" value={personalDetails.sonSonsCount} onChange={handleChange}/>
                        <Input label={t('grand_daughters')} id="sonDaughtersCount" name="sonDaughtersCount" type="number" min="0" value={personalDetails.sonDaughtersCount} onChange={handleChange}/>
                    </div>
                </div>
            }
        </>
    );
    
    const commonSiblingsSection = (
        <div className="pt-4 mt-4 border-t transition-all duration-300">
            <h4 className="font-semibold">{t('siblings_section')}</h4>
            <p className="text-sm text-slate-500 mb-4">{t('siblings_prompt')}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Input label={t('full_brothers')} id="fullBrothers" name="fullBrothers" type="number" min="0" value={personalDetails.siblings?.fullBrothers || 0} onChange={handleSiblingChange}/>
                <Input label={t('full_sisters')} id="fullSisters" name="fullSisters" type="number" min="0" value={personalDetails.siblings?.fullSisters || 0} onChange={handleSiblingChange}/>
                <Input label={t('paternal_brothers')} id="paternalBrothers" name="paternalBrothers" type="number" min="0" value={personalDetails.siblings?.paternalBrothers || 0} onChange={handleSiblingChange}/>
                <Input label={t('paternal_sisters')} id="paternalSisters" name="paternalSisters" type="number" min="0" value={personalDetails.siblings?.paternalSisters || 0} onChange={handleSiblingChange}/>
                <Input label={t('maternal_siblings')} id="maternalSiblings" name="maternalSiblings" type="number" min="0" value={personalDetails.siblings?.maternalSiblings || 0} onChange={handleSiblingChange}/>
            </div>
        </div>
    );


    switch(religion) {
        case types.Religion.MUSLIM:
            return (
                <>
                    {gender === types.Gender.MALE 
                        ? <Input label={t('number_of_wives')} id="wivesCount" name="wivesCount" type="number" min="0" value={personalDetails.muslimDetails?.wivesCount ?? 0} onChange={handleChange} />
                        : <Select label={t('marital_status')} id="maritalStatus" name="maritalStatus" value={personalDetails.maritalStatus || ''} onChange={handleChange}>
                            {constants.maritalStatusOptions.map(o => <option key={o.value} value={o.value}>{t(o.key)}</option>)}
                          </Select>
                    }
                    {commonParentQuestions}
                    {commonGrandparentQuestions}
                    {commonChildrenQuestions}
                    {fatherAlive === 'No' && sonsCount === 0 && commonSiblingsSection}
                </>
            );
        
        case types.Religion.JEWISH:
             return (
                <>
                    <Select label={t('marital_status')} id="maritalStatus" name="maritalStatus" value={personalDetails.maritalStatus || ''} onChange={handleChange}>
                        {constants.maritalStatusOptions.map(o => <option key={o.value} value={o.value}>{t(o.key)}</option>)}
                    </Select>
                    <div className="pt-4 mt-4 border-t">
                        <Input label={t('number_of_sons')} id="sonsCount" name="sonsCount" type="number" min="0" value={sonsCount} onChange={handleChange}/>
                    </div>
                    {sonsCount === 0 && 
                        <>
                            <Input label={t('number_of_daughters')} id="daughtersCount" name="daughtersCount" type="number" min="0" value={daughtersCount} onChange={handleChange}/>
                            <div className="pt-4 mt-4 border-t">{commonParentQuestions}</div>
                            {fatherAlive === 'No' && commonSiblingsSection}
                        </>
                    }
                </>
            );

        case types.Religion.HINDU:
            return (
                <>
                     <Select label={t('marital_status')} id="maritalStatus" name="maritalStatus" value={personalDetails.maritalStatus || ''} onChange={handleChange}>
                        {constants.maritalStatusOptions.map(o => <option key={o.value} value={o.value}>{t(o.key)}</option>)}
                    </Select>
                    <div className="pt-4 mt-4 border-t">
                        <ToggleSwitch label={t('mother_alive')} enabled={motherAlive === 'Yes'} onChange={(e) => handleToggleChange('motherAlive', e)} />
                    </div>
                    {commonChildrenQuestions}
                </>
            );

        case types.Religion.CHRISTIAN:
        case types.Religion.BUDDHIST:
        case types.Religion.ATHEIST:
        case types.Religion.OTHER:
            return (
                <>
                    <Select label={t('marital_status')} id="maritalStatus" name="maritalStatus" value={personalDetails.maritalStatus || ''} onChange={handleChange}>
                        {constants.maritalStatusOptions.map(o => <option key={o.value} value={o.value}>{t(o.key)}</option>)}
                    </Select>
                    {commonChildrenQuestions}
                    {!hasChildren && <div className="pt-4 mt-4 border-t">{commonParentQuestions}</div>}
                    {!hasChildren && fatherAlive === 'No' && motherAlive === 'No' && commonSiblingsSection}
                </>
            )
        
        default: return null;
    }
  }


  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{t('personal_details')}</h2>
      <div className="space-y-6">
        
        {/* --- Basic Info --- */}
        <Input
            label={t('full_name')}
            id="fullName"
            name="fullName"
            value={personalDetails.fullName}
            onChange={handleChange}
            placeholder={t('placeholders.full_name')}
        />
        <div className="grid md:grid-cols-3 gap-4">
            <Select label={t('gender')} id="gender" name="gender" value={personalDetails.gender} onChange={handleChange}>
              {constants.genderSelectOptions.map(o => <option key={o.value} value={o.value}>{t(o.key)}</option>)}
            </Select>
            <Select label={t('religion')} id="religion" name="religion" value={personalDetails.religion} onChange={handleChange}>
              {constants.religionOptions.map(o => <option key={o.value} value={o.value}>{t(o.key)}</option>)}
            </Select>
             <Select label={t('country_of_residence')} id="countryOfResidence" name="countryOfResidence" value={personalDetails.countryOfResidence} onChange={handleChange}>
              {constants.countries.map(c => <option key={c.code} value={c.code}>{t(`countries.${c.key}`)}</option>)}
            </Select>
        </div>

        {/* --- Conditional Inheritance Section --- */}
        {personalDetails.religion && (
             <div className="space-y-6 pt-4 mt-6 border-t animate-fade-in">
                <h3 className="text-xl font-semibold text-teal-700">{t('inheritance_details_title')}</h3>
                <p className="text-sm text-slate-500 -mt-4">{t(getReligionPromptKey())}</p>
                {renderInheritanceQuestions()}
            </div>
        )}
      </div>
    </Card>
  );
};

export default Step1PersonalDetails;