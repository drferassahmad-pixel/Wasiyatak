import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { useLocalization } from '../context/LocalizationContext';

interface LegalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'privacy' | 'copyright';
}

type ActiveTab = 'privacy' | 'copyright';

const LegalInfoModal: React.FC<LegalInfoModalProps> = ({ isOpen, onClose, initialTab }) => {
  const { t } = useLocalization();
  const [activeTab, setActiveTab] = useState<ActiveTab>(initialTab);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const tabButtonClasses = (tabName: ActiveTab) => 
    `px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none ${
      activeTab === tabName 
      ? 'border-teal-600 text-teal-600' 
      : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
    }`;

  const PrivacyContent = () => (
    <div className="prose prose-sm prose-slate max-w-none text-xs space-y-4">
        <h4 className="font-bold">{t('privacy_and_security.summary_title')}</h4>
        <p>{t('privacy_and_security.summary_p1')}</p>
        <h4 className="font-bold pt-2 border-t">{t('privacy_and_security.privacy_title')}</h4>
        <p>{t('privacy_and_security.privacy_p1')}</p>
        <p>{t('privacy_and_security.privacy_p2')}</p>
        <p>{t('privacy_and_security.privacy_p3')}</p>
        <h4 className="font-bold pt-2 border-t">{t('privacy_and_security.storage_title')}</h4>
        <p>{t('privacy_and_security.storage_p1')}</p>
        <p>{t('privacy_and_security.storage_p2')}</p>
        <p>{t('privacy_and_security.storage_p3')}</p>
        <p><strong>{t('privacy_and_security.storage_p4')}</strong></p>
        <h4 className="font-bold pt-2 border-t">{t('privacy_and_security.disclaimer_title')}</h4>
        <p>{t('privacy_and_security.disclaimer_intro')}</p>
        <ul className="list-disc pl-5 rtl:pr-5 rtl:pl-0 space-y-2">
            <li><strong>{t('privacy_and_security.disclaimer_point1_title')}:</strong> {t('privacy_and_security.disclaimer_point1_text')}</li>
            <li><strong>{t('privacy_and_security.disclaimer_point2_title')}:</strong> {t('privacy_and_security.disclaimer_point2_text')}</li>
            <li><strong>{t('privacy_and_security.disclaimer_point3_title')}:</strong> {t('privacy_and_security.disclaimer_point3_text')}</li>
        </ul>
    </div>
  );

  const CopyrightContent = () => (
    <div className="prose prose-sm prose-slate max-w-none text-xs space-y-4">
        <h4 className="font-bold">{t('copyright.intellectual_property.title')}</h4>
        <p>{t('copyright.intellectual_property.p1')}</p>
        <p>{t('copyright.intellectual_property.p2')}</p>
        <h4 className="font-bold pt-2 border-t">{t('copyright.privacy_policy.title')}</h4>
        <p>{t('copyright.privacy_policy.p1')}</p>
        <h4 className="font-bold pt-2 border-t">{t('copyright.contact.title')}</h4>
        <p>{t('copyright.contact.p1', { email: 'wasiyatak@gmail.com' })}</p>
        <p className="pt-4 border-t text-center text-xs text-slate-500">{t('copyright.footer', { year: currentYear })}</p>
    </div>
  );

  return (
    <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
             <h2 id="legal-modal-title" className="text-xl font-bold text-slate-800">
                {activeTab === 'privacy' ? t('privacy_and_security.title') : t('copyright.title')}
             </h2>
             <Button onClick={onClose} variant="ghost" className="!p-2 h-8 w-8 !shadow-none">&times;</Button>
        </div>
        
        <div className="border-b">
            <nav className="flex -mb-px">
                <button className={tabButtonClasses('privacy')} onClick={() => setActiveTab('privacy')}>
                    {t('privacy_and_security.button_text')}
                </button>
                <button className={tabButtonClasses('copyright')} onClick={() => setActiveTab('copyright')}>
                    {t('copyright.button_text')}
                </button>
            </nav>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
            {activeTab === 'privacy' ? <PrivacyContent /> : <CopyrightContent />}
        </div>
        
        <div className="p-4 border-t flex justify-end">
          <Button onClick={onClose}>
            {t('close')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LegalInfoModal;