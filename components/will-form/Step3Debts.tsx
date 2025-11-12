import React, { useContext, ReactNode } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import { Debt } from '../../types';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { useLocalization } from '../../context/LocalizationContext';
import * as constants from '../../constants';

type DebtType = 'debtsOwedToTestator' | 'debtsOwedByTestator';

const DebtList: React.FC<{
    title: string;
    debts: Debt[];
    debtType: DebtType;
    dispatch: React.Dispatch<any>;
}> = ({ title, debts, debtType, dispatch }) => {
    const { t, currency } = useLocalization();
    const actionType = debtType === 'debtsOwedToTestator' ? 'UPDATE_DEBTS_TO' : 'UPDATE_DEBTS_BY';

    const handleAdd = () => {
        const newDebt: Debt = { id: `${debtType}-${Date.now()}`, person: '', amount: 0, description: '', currency: currency.code };
        dispatch({ type: actionType, payload: [...debts, newDebt] });
    };

    const handleRemove = (id: string) => {
        dispatch({ type: actionType, payload: debts.filter(d => d.id !== id) });
    };

    const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const updated = debts.map(d =>
            d.id === id ? { ...d, [name]: name === 'amount' ? parseFloat(value) || 0 : value } : d
        );
        dispatch({ type: actionType, payload: updated });
    };

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="space-y-4">
                {debts.map(debt => (
                    <div key={debt.id} className="p-4 border rounded-lg space-y-4 relative">
                        <Button
                            onClick={() => handleRemove(debt.id)}
                            variant="ghost"
                            className="absolute top-2 end-2 !p-2 h-8 w-8 text-red-500 hover:bg-red-100"
                            aria-label={t('remove')}
                        >
                            &times;
                        </Button>
                        <Input label={t('person_name')} id={`person-${debt.id}`} name="person" value={debt.person} onChange={e => handleChange(debt.id, e)} />
                        <div className="flex items-end gap-4">
                            <div className="flex-grow">
                                <Input label={t('amount')} id={`amount-${debt.id}`} name="amount" type="number" value={debt.amount} onChange={e => handleChange(debt.id, e)} />
                            </div>
                            <div className="w-28">
                                <Select label={t('currency')} id={`currency-${debt.id}`} name="currency" value={debt.currency} onChange={e => handleChange(debt.id, e)}>
                                    {constants.currencies.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                                </Select>
                            </div>
                        </div>
                        <Input label={t('description')} id={`description-${debt.id}`} name="description" value={debt.description} onChange={e => handleChange(debt.id, e)} />
                    </div>
                ))}
                <Button onClick={handleAdd} variant="secondary">{`+ ${t('add')}`}</Button>
            </div>
        </div>
    );
};

const Step3Debts: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t } = useLocalization();

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{t('debts')}</h2>
      <div className="space-y-8">
        <DebtList
            title={t('debts_owed_to_you')}
            debts={willState.debtsOwedToTestator}
            debtType="debtsOwedToTestator"
            dispatch={dispatch}
        />
         <DebtList
            title={t('debts_you_owe')}
            debts={willState.debtsOwedByTestator}
            debtType="debtsOwedByTestator"
            dispatch={dispatch}
        />
      </div>
    </Card>
  );
};

export default Step3Debts;