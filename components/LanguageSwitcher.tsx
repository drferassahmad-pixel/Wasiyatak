import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import * as constants from '../constants';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, t } = useLocalization();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <Globe className="absolute left-3 rtl:right-3 rtl:left-auto w-4 h-4 text-slate-500 pointer-events-none" />
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="appearance-none w-full bg-slate-100 border border-slate-200/80 text-slate-700 text-sm rounded-lg pl-9 rtl:pr-9 rtl:pl-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        aria-label={t('select_language')}
      >
        {constants.languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;