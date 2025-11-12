import React, { useState, useContext } from 'react';
import { Will } from '../../types';
import { WillFormContext } from '../../context/WillFormProvider';
import StepIndicator from './StepIndicator';
import Step1PersonalDetails from './Step1PersonalDetails';
import Step2Beneficiaries from './Step2Beneficiaries';
import Step3Debts from './Step3Debts';
import Step4Assets from './Step4Assets';
import Step5WillContent from './Step5WillContent';
import Step6Media from './Step6Media';
import Step7Legal from './Step7Legal';
import Step8Instructions from './Step8Instructions';
import Button from '../ui/Button';
import { useLocalization } from '../../context/LocalizationContext';
import AppHeader from '../AppHeader';

interface WillFormProps {
  onReview: (data: Will) => void;
  onBack: () => void;
}

const WillForm: React.FC<WillFormProps> = ({ onReview, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { willState } = useContext(WillFormContext)!;
  const { t } = useLocalization();

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 8));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const handleStepClick = (step: number) => setCurrentStep(step);

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1PersonalDetails />;
      case 2: return <Step2Beneficiaries />;
      case 3: return <Step3Debts />;
      case 4: return <Step4Assets />;
      case 5: return <Step5WillContent />;
      case 6: return <Step6Media />;
      case 7: return <Step7Legal />;
      case 8: return <Step8Instructions />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
       <AppHeader onBack={onBack} title={t('app_name')} titleClassName="text-2xl md:text-3xl" />

      <StepIndicator currentStep={currentStep} onStepClick={handleStepClick} />
      <div className="mt-8">
        {renderStep()}
      </div>
      <div className="mt-10 flex justify-between">
        <Button onClick={prevStep} disabled={currentStep === 1} variant="secondary">
          {t('back')}
        </Button>
        {currentStep < 8 ? (
          <Button onClick={nextStep}>
            {t('next')}
          </Button>
        ) : (
          <Button onClick={() => onReview(willState)}>
            {t('review_your_will')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default WillForm;