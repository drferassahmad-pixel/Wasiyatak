import React, { useContext } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import { Beneficiary, BeneficiaryRelation } from '../../types';
import * as constants from '../../constants';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useLocalization } from '../../context/LocalizationContext';

const Step2Beneficiaries: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t } = useLocalization();
  const { beneficiaries } = willState;

  const handleAdd = () => {
    const newBeneficiary: Beneficiary = {
      id: `beneficiary-${Date.now()}`,
      name: '',
      relation: BeneficiaryRelation.SPOUSE,
      phone: '',
      email: '',
    };
    dispatch({ type: 'UPDATE_BENEFICIARIES', payload: [...beneficiaries, newBeneficiary] });
  };

  const handleRemove = (id: string) => {
    dispatch({ type: 'UPDATE_BENEFICIARIES', payload: beneficiaries.filter(b => b.id !== id) });
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = beneficiaries.map(b => 
      b.id === id ? { ...b, [name]: value } : b
    );
    dispatch({ type: 'UPDATE_BENEFICIARIES', payload: updated });
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-2">{t('beneficiaries')}</h2>
      <p className="text-sm text-slate-500 mb-6">{t('beneficiaries_step_description')}</p>
      <div className="space-y-6">
        {beneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className="p-4 border rounded-lg space-y-4 relative">
             <Button 
                onClick={() => handleRemove(beneficiary.id)} 
                variant="ghost"
                className="absolute top-2 end-2 !p-2 h-8 w-8 text-red-500 hover:bg-red-100"
                aria-label={t('remove')}
             >
                &times;
             </Button>
            <Input
              label={t('beneficiary_name')}
              id={`name-${beneficiary.id}`}
              name="name"
              value={beneficiary.name}
              onChange={(e) => handleChange(beneficiary.id, e)}
            />
            <Select
              label={t('relation')}
              id={`relation-${beneficiary.id}`}
              name="relation"
              value={beneficiary.relation}
              onChange={(e) => handleChange(beneficiary.id, e)}
            >
              {constants.beneficiaryRelationOptions.map((opt) => <option key={opt.value} value={opt.value}>{t(opt.key)}</option>)}
            </Select>
            <Input
              label={t('phone')}
              id={`phone-${beneficiary.id}`}
              name="phone"
              type="tel"
              value={beneficiary.phone}
              onChange={(e) => handleChange(beneficiary.id, e)}
            />
            <Input
              label={t('email')}
              id={`email-${beneficiary.id}`}
              name="email"
              type="email"
              value={beneficiary.email}
              onChange={(e) => handleChange(beneficiary.id, e)}
            />
          </div>
        ))}
        <Button onClick={handleAdd} variant="secondary">{`+ ${t('add')}`}</Button>
      </div>
    </Card>
  );
};

export default Step2Beneficiaries;
