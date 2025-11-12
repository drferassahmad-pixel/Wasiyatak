import React from 'react';
import Button from './ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocalization } from '../context/LocalizationContext';
import { useAuth } from '../context/AuthContext';

interface AppHeaderProps {
  onBack?: () => void;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  leftActions?: React.ReactNode;
  className?: string;
  showLogoutButton?: boolean;
  titleClassName?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ onBack, title, actions, leftActions, className='', showLogoutButton = true, titleClassName = '' }) => {
  const { t } = useLocalization();
  const { logout } = useAuth();

  return (
    <header className={`relative flex items-center justify-center h-auto min-h-[5rem] py-2 ${className}`}>
      {/* Left side container */}
      <div className="absolute start-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {onBack && <Button onClick={onBack} variant="ghost">{t('back')}</Button>}
        {leftActions}
      </div>

      {/* Centered Title - with RTL adjustment for optical centering */}
      <div className="absolute start-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rtl:translate-x-[47%]">
         {title && <h1 className={`text-xl md:text-2xl font-bold text-slate-700 text-center ${titleClassName}`}>{title}</h1>}
      </div>

      {/* Right side container */}
      <div className="absolute end-0 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-4">
                <LanguageSwitcher />
                {showLogoutButton && (
                    <Button onClick={logout} variant="secondary" className="!px-3 !py-1.5 !text-xs">
                        {t('logout')}
                    </Button>
                )}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;