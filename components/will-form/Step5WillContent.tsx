
import React, { useContext } from 'react';
import { WillFormContext } from '../../context/WillFormProvider';
import Card from '../ui/Card';
import { useLocalization } from '../../context/LocalizationContext';

const Step5WillContent: React.FC = () => {
  const { willState, dispatch } = useContext(WillFormContext)!;
  const { t } = useLocalization();
  const { willContent } = willState;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'UPDATE_CONTENT', payload: e.target.value });
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{t('will_content')}</h2>
      <div>
        <label htmlFor="willContent" className="block text-sm font-medium text-slate-600 mb-1">
            {t('will_free_text_label')}
        </label>
        <textarea
          id="willContent"
          name="willContent"
          rows={15}
          className="block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          value={willContent}
          onChange={handleChange}
          placeholder={t('will_free_text_placeholder')}
        />
      </div>
    </Card>
  );
};

export default Step5WillContent;
