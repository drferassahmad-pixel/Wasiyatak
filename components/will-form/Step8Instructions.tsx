import React, { useContext } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import * as constants from '../../constants';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Card from '../ui/Card';
import { useLocalization } from '../../context/LocalizationContext';
import Button from '../ui/Button';

const Step8Instructions: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t } = useLocalization();
  const { finalInstructions } = willState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_INSTRUCTIONS',
      payload: { ...finalInstructions, [e.target.name]: e.target.value },
    });
  };
  
  const handleEmailChange = (index: number, value: string) => {
    const updatedEmails = [...finalInstructions.notificationEmails];
    updatedEmails[index] = value;
    dispatch({
        type: 'UPDATE_INSTRUCTIONS',
        payload: { ...finalInstructions, notificationEmails: updatedEmails },
    });
  };

  const handleAddEmail = () => {
      const updatedEmails = [...finalInstructions.notificationEmails, ''];
      dispatch({
          type: 'UPDATE_INSTRUCTIONS',
          payload: { ...finalInstructions, notificationEmails: updatedEmails },
      });
  };

  const handleRemoveEmail = (index: number) => {
      const updatedEmails = finalInstructions.notificationEmails.filter((_, i) => i !== index);
      dispatch({
          type: 'UPDATE_INSTRUCTIONS',
          payload: { ...finalInstructions, notificationEmails: updatedEmails },
      });
  };


  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{t('final_instructions')}</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">{t('notifications_reminders')}</h3>
          <Select
            label={t('update_will_every')}
            id="reminders"
            name="reminders"
            value={finalInstructions.reminders}
            onChange={handleChange}
          >
            {constants.reminderOptions.map(opt => <option key={opt.value} value={opt.value}>{t(opt.key)}</option>)}
          </Select>
        </div>
         <div>
          <h3 className="text-xl font-semibold mb-2">{t('notification_email_label')}</h3>
          <p className="text-sm text-slate-500 mb-4">{t('notification_email_description')}</p>
          <div className="space-y-3">
            {finalInstructions.notificationEmails.map((email, index) => (
                <div key={index} className="flex items-center gap-2">
                    <Input
                        label={t('email_label', { index: index + 1 })}
                        id={`notificationEmail-${index}`}
                        name={`notificationEmail-${index}`}
                        type="email"
                        value={email}
                        onChange={(e) => handleEmailChange(index, e.target.value)}
                        placeholder={t('placeholders.notification_email')}
                    />
                    <Button
                        onClick={() => handleRemoveEmail(index)}
                        variant="ghost"
                        className="!p-2 h-10 w-10 mt-6 text-red-500 hover:bg-red-100"
                        aria-label={t('remove')}
                    >
                        &times;
                    </Button>
                </div>
            ))}
            </div>
            <Button onClick={handleAddEmail} variant="secondary" className="mt-4">{`+ ${t('add_email')}`}</Button>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">{t('burial_location')}</h3>
          <Input
            label={t('burial_location')}
            id="burialLocation"
            name="burialLocation"
            value={finalInstructions.burialLocation}
            onChange={handleChange}
            placeholder={t('placeholders.burial_location')}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">{t('final_wishes')}</h3>
          <textarea
            id="instructions"
            name="instructions"
            rows={8}
            className="block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            value={finalInstructions.instructions}
            onChange={handleChange}
            placeholder={t('placeholders.final_wishes')}
          />
        </div>
      </div>
    </Card>
  );
};

export default Step8Instructions;