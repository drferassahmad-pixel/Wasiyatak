import React from 'react';
import { useLocalization } from '../../context/LocalizationContext';

interface ToggleSwitchProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange }) => {
  const { t } = useLocalization();
  const bgColor = enabled ? 'bg-teal-600' : 'bg-slate-300';
  const togglePosition = enabled ? 'translate-x-5 rtl:-translate-x-5' : 'translate-x-0';

  return (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-2">{label}</label>
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <span className={`text-sm ${!enabled ? 'text-slate-800 font-semibold' : 'text-slate-500'}`}>{t('no')}</span>
        <button
          type="button"
          className={`${bgColor} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
          role="switch"
          aria-checked={enabled}
          onClick={() => onChange(!enabled)}
        >
          <span
            aria-hidden="true"
            className={`${togglePosition} inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
          />
        </button>
        <span className={`text-sm ${enabled ? 'text-slate-800 font-semibold' : 'text-slate-500'}`}>{t('yes')}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
