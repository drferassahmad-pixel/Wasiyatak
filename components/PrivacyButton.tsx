import React from 'react';
import Button from './ui/Button';
import { useLocalization } from '../context/LocalizationContext';

interface PrivacyButtonProps {
  onClick: () => void;
}

const PrivacyButton: React.FC<PrivacyButtonProps> = ({ onClick }) => {
  const { t } = useLocalization();

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="text-[8px] !text-slate-600 !font-normal !shadow-none !px-2.5 !py-0.5 rounded-none hover:bg-slate-100/50"
    >
      {t('privacy_and_security.button_text')}
    </Button>
  );
};

export default PrivacyButton;