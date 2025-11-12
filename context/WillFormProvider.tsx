import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { Will, PersonalDetails, Beneficiary, Debt, Asset, MediaMessage, LegalDetails, FinalInstructions, ComplexAsset } from '../types';

type Action =
  | { type: 'UPDATE_PERSONAL'; payload: PersonalDetails }
  | { type: 'UPDATE_BENEFICIARIES'; payload: Beneficiary[] }
  | { type: 'UPDATE_DEBTS_TO'; payload: Debt[] }
  | { type: 'UPDATE_DEBTS_BY'; payload: Debt[] }
  | { type: 'UPDATE_ASSETS'; payload: Asset[] }
  | { type: 'UPDATE_COMPLEX_ASSETS'; payload: ComplexAsset[] }
  | { type: 'UPDATE_CONTENT'; payload: string }
  | { type: 'UPDATE_MEDIA'; payload: MediaMessage }
  | { type: 'UPDATE_LEGAL'; payload: LegalDetails }
  | { type: 'UPDATE_INSTRUCTIONS'; payload: FinalInstructions };

interface WillFormContextType {
  willState: Will;
  dispatch: React.Dispatch<Action>;
}

export const WillFormContext = createContext<WillFormContextType | null>(null);

const willReducer = (state: Will, action: Action): Will => {
  switch (action.type) {
    case 'UPDATE_PERSONAL':
      return { ...state, personalDetails: action.payload };
    case 'UPDATE_BENEFICIARIES':
      return { ...state, beneficiaries: action.payload };
    case 'UPDATE_DEBTS_TO':
      return { ...state, debtsOwedToTestator: action.payload };
    case 'UPDATE_DEBTS_BY':
        return { ...state, debtsOwedByTestator: action.payload };
    case 'UPDATE_ASSETS':
        return { ...state, assets: action.payload };
    case 'UPDATE_COMPLEX_ASSETS':
        return { ...state, complexAssets: action.payload };
    case 'UPDATE_CONTENT':
        return { ...state, willContent: action.payload };
    case 'UPDATE_MEDIA':
        return { ...state, mediaMessage: action.payload };
    case 'UPDATE_LEGAL':
        return { ...state, legal: action.payload };
    case 'UPDATE_INSTRUCTIONS':
        return { ...state, finalInstructions: action.payload };
    default:
      return state;
  }
};

interface WillFormProviderProps {
  children: ReactNode;
  initialData: Will;
}

const WillFormProvider: React.FC<WillFormProviderProps> = ({ children, initialData }) => {
  const [willState, dispatch] = useReducer(willReducer, initialData);

  // Auto-save to localStorage whenever willState changes
  useEffect(() => {
    localStorage.setItem('wasiyatakWill', JSON.stringify(willState));
  }, [willState]);

  return (
    <WillFormContext.Provider value={{ willState, dispatch }}>
      {children}
    </WillFormContext.Provider>
  );
};

export default WillFormProvider;