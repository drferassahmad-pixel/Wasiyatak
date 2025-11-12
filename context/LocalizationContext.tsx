import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { translations, Translations } from '../lib/translations';
import { languages, currencies } from '../constants';

interface Currency {
    code: string;
    name: string;
}

type Language = string;

interface LocalizationContextType {
  locale: Language;
  setLocale: (locale: Language) => void;
  t: (key: string, options?: any) => string;
  dir: 'ltr' | 'rtl';
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatCurrency: (value: number) => string;
  languageName: string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>(currencies[0]); // Default to USD

  const dir = ['ar', 'ur', 'fa'].includes(language) ? 'rtl' : 'ltr';

  const currentTranslations = useMemo(() => {
    return translations[language] || translations['en'];
  }, [language]);

  const t = useCallback((key: string, options?: any): string => {
      let translation = key.split('.').reduce((acc: any, currentKey: string) => {
          if (acc && typeof acc === 'object' && acc[currentKey]) {
              return acc[currentKey];
          }
          // Fallback to English if key not found in current language, then to key itself
          const fallbackTranslation = key.split('.').reduce((fallbackAcc: any, k: string) => (fallbackAcc && fallbackAcc[k]) ? fallbackAcc[k] : key, translations['en']);
          return fallbackTranslation; 
      }, currentTranslations) as string;

      if (typeof translation === 'string' && options) {
          Object.keys(options).forEach(optionKey => {
              translation = translation.replace(`{${optionKey}}`, String(options[optionKey]));
          });
      }
      
      return typeof translation === 'string' ? translation : key;
  }, [currentTranslations]);

  
  const setLocale = (lang: string) => {
    setLanguage(lang);
  };

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat(language, {
        style: 'currency',
        currency: currency.code,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
  }, [language, currency.code]);

  const languageName = languages.find(l => l.code === language)?.name || 'English';

  return (
    <LocalizationContext.Provider value={{
        locale: language,
        setLocale,
        t,
        dir,
        currency,
        setCurrency,
        formatCurrency,
        languageName,
    }}>
      <div dir={dir} className="bg-slate-50 text-slate-800 min-h-screen font-sans">
        {children}
      </div>
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};