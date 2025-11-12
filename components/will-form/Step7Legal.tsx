import React, { useContext } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import { Person } from '../../types';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useLocalization } from '../../context/LocalizationContext';

const Step7Legal: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t } = useLocalization();
  const { legal } = willState;

  const handleLawyerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_LEGAL',
      payload: { ...legal, lawyer: { ...legal.lawyer, [name]: value } },
    });
  };

  const handleAddWitness = () => {
    const newWitness: Person = { id: `witness-${Date.now()}`, name: '', phone: '', email: '' };
    dispatch({ type: 'UPDATE_LEGAL', payload: { ...legal, witnesses: [...legal.witnesses, newWitness] } });
  };
  
  const handleRemoveWitness = (id: string) => {
    dispatch({ type: 'UPDATE_LEGAL', payload: { ...legal, witnesses: legal.witnesses.filter(w => w.id !== id) } });
  };

  const handleWitnessChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = legal.witnesses.map(w => w.id === id ? { ...w, [name]: value } : w);
    dispatch({ type: 'UPDATE_LEGAL', payload: { ...legal, witnesses: updated } });
  };


  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{t('legal_and_witnesses')}</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">{t('lawyer_details')}</h3>
          <div className="space-y-4 p-4 border rounded-lg">
             <Input label={t('lawyer_name')} id="lawyerName" name="name" value={legal.lawyer.name} onChange={handleLawyerChange} />
             <Input label={t('phone')} id="lawyerPhone" name="phone" type="tel" value={legal.lawyer.phone} onChange={handleLawyerChange} />
             <Input label={t('email')} id="lawyerEmail" name="email" type="email" value={legal.lawyer.email} onChange={handleLawyerChange} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">{t('witness_details')}</h3>
          <div className="space-y-4">
            {legal.witnesses.map(witness => (
              <div key={witness.id} className="p-4 border rounded-lg space-y-4 relative">
                <Button onClick={() => handleRemoveWitness(witness.id)} variant="ghost" className="absolute top-2 end-2 !p-2 h-8 w-8 text-red-500 hover:bg-red-100" aria-label={t('remove')}>&times;</Button>
                <Input label={t('witness_name')} id={`witnessName-${witness.id}`} name="name" value={witness.name} onChange={(e) => handleWitnessChange(witness.id, e)} />
                <Input label={t('phone')} id={`witnessPhone-${witness.id}`} name="phone" type="tel" value={witness.phone} onChange={(e) => handleWitnessChange(witness.id, e)} />
                <Input label={t('email')} id={`witnessEmail-${witness.id}`} name="email" type="email" value={witness.email} onChange={(e) => handleWitnessChange(witness.id, e)} />
              </div>
            ))}
            <Button onClick={handleAddWitness} variant="secondary">{`+ ${t('add_witness')}`}</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Step7Legal;