import React from 'react';
import Button from './ui/Button';
import { useLocalization } from '../context/LocalizationContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '../context/AuthContext';

interface DashboardProps {
  willExists: boolean;
  onCreateNew: () => void;
  onEdit: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ willExists, onCreateNew, onEdit }) => {
    const { t } = useLocalization();
    const { logout } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
        <div className="absolute top-4 end-4 flex items-center gap-4">
            <LanguageSwitcher />
            <Button onClick={logout} variant="secondary" className="!px-3 !py-1.5 !text-xs">
                {t('logout')}
            </Button>
        </div>
        <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{t('dashboard_title')}</h1>
            <p className="text-md md:text-lg text-slate-500 mb-10">{t('dashboard_subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {willExists ? (
                <Button onClick={onEdit} className="text-lg px-8 py-4">
                    {t('edit_existing_will')}
                </Button>
            ) : (
                <Button onClick={onCreateNew} className="text-lg px-8 py-4">
                    {t('create_new_will')}
                </Button>
            )}
            </div>
      </div>
    </div>
  );
};

export default Dashboard;