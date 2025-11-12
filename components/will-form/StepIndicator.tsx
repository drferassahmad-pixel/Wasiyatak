import React from 'react';
import * as constants from '../../constants';
import { useLocalization } from '../../context/LocalizationContext';

interface StepIndicatorProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, onStepClick }) => {
  const { t } = useLocalization();
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8 md:rtl:space-x-reverse">
        {constants.willFormSteps.map((step, index) => {
            const isCompleted = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;
            
            let borderClasses = 'border-gray-200 group-hover:border-gray-400';
            if (isCurrent) borderClasses = 'border-teal-600';
            if (isCompleted) borderClasses = 'border-teal-600 group-hover:border-teal-700';

            let textClasses = 'text-gray-500 group-hover:text-gray-700';
            if (isCurrent) textClasses = 'text-teal-600';
            if (isCompleted) textClasses = 'text-teal-600';
            
            return (
              <li key={step.id} className="md:flex-1">
                <button
                    onClick={() => onStepClick(step.id)}
                    className="w-full text-left rtl:text-right focus:outline-none group"
                    aria-current={isCurrent ? 'step' : undefined}
                >
                    <div className={`flex flex-col border-l-4 rtl:border-r-4 rtl:border-l-0 py-2 pl-4 rtl:pr-4 rtl:pl-0 md:border-l-0 md:border-t-4 md:pb-0 md:pt-4 md:pl-0 transition-colors ${borderClasses}`}>
                        <span className={`text-sm font-medium ${textClasses}`}>{`${t('step_prefix')} ${step.id}`}</span>
                        <span className="text-sm font-medium text-slate-700">{t(step.titleKey)}</span>
                    </div>
                </button>
              </li>
            );
        })}
      </ol>
    </nav>
  );
};

export default StepIndicator;