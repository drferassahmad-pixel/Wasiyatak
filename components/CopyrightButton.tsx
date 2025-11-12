import React from 'react';
import Button from './ui/Button';
import { useLocalization } from '../context/LocalizationContext';

interface CopyrightButtonProps {
    onClick: () => void;
}

const CopyrightButton: React.FC<CopyrightButtonProps> = ({ onClick }) => {
  const { t } = useLocalization();

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="text-[8px] !text-slate-600 !font-normal !shadow-none !px-2.5 !py-0.5 rounded-none hover:bg-slate-100/50"
    >
      {t('copyright.button_text')}
    </Button>
  );
};

export default CopyrightButton;