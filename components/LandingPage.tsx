
import React from 'react';
import Button from './ui/Button';
import { useLocalization } from '../context/LocalizationContext';
import LanguageSwitcher from './LanguageSwitcher';

interface LandingPageProps {
  onLogin: () => void;
  onSignUp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onSignUp }) => {
    const { t } = useLocalization();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-4">
      <div className="absolute top-4 end-4">
        <LanguageSwitcher />
      </div>
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-teal-700 mb-2" style={{ fontFamily: "'Cairo', sans-serif"}}>{t('app_name')}</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12">{t('app_subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onLogin} className="w-full sm:w-auto text-lg">
            {t('log_in')}
          </Button>
          <Button onClick={onSignUp} variant="secondary" className="w-full sm:w-auto text-lg">
            {t('sign_up')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
