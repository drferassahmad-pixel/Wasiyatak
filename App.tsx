import React, { useState, useEffect } from 'react';
// Removed unused AppProvider import to resolve build issues
import { AuthProvider, useAuth } from './context/AuthContext';
import { LocalizationProvider, useLocalization } from './context/LocalizationContext';
import WillFormProvider from './context/WillFormProvider';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import WillForm from './components/will-form/WillForm';
import ReviewWill from './components/ReviewWill';
import Spinner from './components/ui/Spinner';
import * as types from './types';
import type { Will } from './types';
import PrivacyButton from './components/PrivacyButton';
import CopyrightButton from './components/CopyrightButton';
import Card from './components/ui/Card';
import LegalInfoModal from './components/LegalInfoModal';

// Inlined ApiKeyMissingScreen component to fix build resolution issues.
const ApiKeyMissingScreen: React.FC = () => {
    const { t } = useLocalization();

    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50 p-4">
            <Card className="w-full max-w-2xl border-2 border-red-200">
                <h1 className="text-2xl font-bold text-red-700 mb-4">{t('api_key_missing.title')}</h1>
                <p className="text-slate-600 mb-6">{t('api_key_missing.explanation')}</p>
                <ol className="list-decimal list-inside space-y-4 text-slate-700">
                    <li>{t('api_key_missing.step1')}</li>
                    <li>
                        {t('api_key_missing.step2')}
                        <pre className="bg-slate-100 p-3 rounded-md my-2 text-sm text-slate-800 font-mono" dir="ltr">
                            GEMINI_API_KEY=YOUR_API_KEY_HERE
                        </pre>
                    </li>
                    <li>{t('api_key_missing.step3')}</li>
                </ol>
                <p className="mt-6 text-sm text-slate-500">
                    {t('api_key_missing.get_key_prompt')}{' '}
                    <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                        {t('api_key_missing.get_key_link')}
                    </a>.
                </p>
            </Card>
        </div>
    );
};


// Define the initial state for a new will.
const initialWill: Will = {
    personalDetails: {
        fullName: '',
        gender: types.Gender.MALE,
        religion: types.Religion.MUSLIM,
        countryOfResidence: 'United States',
        maritalStatus: types.MaritalStatus.NOT_MARRIED,
        fatherAlive: 'No',
        motherAlive: 'No',
        sonsCount: 0,
        daughtersCount: 0,
        paternalGrandfatherAlive: 'No',
        paternalGrandmotherAlive: 'No',
        maternalGrandmotherAlive: 'No',
        sonSonsCount: 0,
        sonDaughtersCount: 0,
        siblings: {
            fullBrothers: 0,
            fullSisters: 0,
            paternalBrothers: 0,
            paternalSisters: 0,
            maternalSiblings: 0
        }
    },
    beneficiaries: [],
    debtsOwedToTestator: [],
    debtsOwedByTestator: [],
    assets: [],
    complexAssets: [],
    willContent: '',
    mediaMessage: { audio: null, video: null, url: '' },
    legal: {
        lawyer: { id: 'lawyer', name: '', phone: '', email: '' },
        witnesses: []
    },
    finalInstructions: {
        reminders: '1-year',
        notificationEmails: [''],
        burialLocation: '',
        instructions: ''
    }
};

/**
 * Safely merges saved will data with the default structure to prevent crashes from outdated schemas.
 * It creates a deep copy of the default structure and then populates it with values from the saved data.
 * This ensures all properties expected by the current application code exist.
 * @param savedData The potentially outdated will data object parsed from localStorage.
 * @param defaults The complete, up-to-date initialWill object structure.
 * @returns A complete will object that is safe to use in the application state.
 */
const safeMergeWill = (savedData: any, defaults: Will): Will => {
    // Create a deep copy of the defaults to avoid mutating the original object.
    const merged = JSON.parse(JSON.stringify(defaults));

    // A recursive function to apply saved values to the default structure.
    const applySavedValues = (target: any, source: any) => {
        // Iterate over keys in the target (default structure) to ensure we don't add extra keys.
        for (const key in target) {
            if (source && typeof source === 'object' && Object.prototype.hasOwnProperty.call(source, key) && source[key] !== undefined) {
                const targetValue = target[key];
                const sourceValue = source[key];
                
                // If both are non-array objects, recurse.
                if (typeof targetValue === 'object' && targetValue !== null && !Array.isArray(targetValue) && typeof sourceValue === 'object' && sourceValue !== null && !Array.isArray(sourceValue)) {
                    applySavedValues(targetValue, sourceValue);
                } 
                // Otherwise, use the source value (handles primitives, arrays, null).
                else {
                    target[key] = sourceValue;
                }
            }
        }
    };
    
    applySavedValues(merged, savedData);
    return merged;
};


// The main application component that sets up all context providers.
const App: React.FC = () => {
    return (
        <LocalizationProvider>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </LocalizationProvider>
    );
};

// This component handles the actual UI rendering based on application state.
// It's separated so it can access the contexts provided by App.
const AppContent: React.FC = () => {
    // Check for API Key at the very top. If it's missing, render the instructions and stop.
    if (!process.env.API_KEY) {
        return <ApiKeyMissingScreen />;
    }

    const { currentUser, login, signup } = useAuth();
    const [appStatus, setAppStatus] = useState<types.AppStatus>(types.AppStatus.LOADING);
    
    // willData holds the will being created or reviewed.
    const [willData, setWillData] = useState<Will | null>(null);
    
    // 'view' controls which part of the authenticated app is shown.
    type AuthenticatedView = 'dashboard' | 'form' | 'review';
    const [view, setView] = useState<AuthenticatedView>('dashboard');

    const [legalModalState, setLegalModalState] = useState<{
        isOpen: boolean;
        initialTab: 'privacy' | 'copyright';
    }>({ isOpen: false, initialTab: 'privacy' });

    // Effect to handle changes in authentication status and load data.
    useEffect(() => {
        if (currentUser === null && appStatus === types.AppStatus.LOADING) {
             // Finished loading, no user, go to landing
            setAppStatus(types.AppStatus.LANDING);
        } else if (currentUser) {
            setAppStatus(types.AppStatus.AUTHENTICATED);
            const savedWill = localStorage.getItem('wasiyatakWill');
            if (savedWill) {
                try {
                    const parsedWill = JSON.parse(savedWill);
                    // MIGRATE DATA: Safely merge the loaded data with the initial state
                    // to ensure compatibility and prevent crashes from old data structures.
                    const migratedWill = safeMergeWill(parsedWill, initialWill);
                    setWillData(migratedWill);
                    setView('review');
                } catch (e) {
                    console.error("Failed to parse or migrate will data from localStorage. Clearing for safety.", e);
                    localStorage.removeItem('wasiyatakWill'); // Clear corrupted data
                    setWillData(null);
                    setView('dashboard');
                }
            } else {
                setWillData(null);
                setView('dashboard');
            }
        } else if (currentUser === null && appStatus === types.AppStatus.AUTHENTICATED) {
            // This handles the user logging out.
            setAppStatus(types.AppStatus.LANDING);
            setWillData(null);
            setView('dashboard');
        }
    }, [currentUser, appStatus]);
    
    const openLegalModal = (tab: 'privacy' | 'copyright') => {
        setLegalModalState({ isOpen: true, initialTab: tab });
    };

    const closeLegalModal = () => {
        setLegalModalState({ isOpen: false, initialTab: 'privacy' });
    };

    const handleBackToDashboard = () => {
        const savedWill = localStorage.getItem('wasiyatakWill');
        if (savedWill) {
            try {
                const parsedWill = JSON.parse(savedWill);
                const migratedWill = safeMergeWill(parsedWill, initialWill);
                setWillData(migratedWill);
                setView('review'); // Go back to review if will exists
            } catch (e) {
                localStorage.removeItem('wasiyatakWill');
                setWillData(null);
                setView('dashboard');
            }
        } else {
            setWillData(null);
            setView('dashboard');
        }
    };
    
    const handleReturnToDashboard = () => {
        setView('dashboard');
    }

    const handleCreateNew = () => {
        setWillData(initialWill);
        setView('form');
    };


    const handleEdit = () => {
        setView('form');
    };

    const handleReview = (data: Will) => {
        setWillData(data);
        setView('review');
    };

    const renderContent = () => {
        switch (appStatus) {
            case types.AppStatus.LOADING:
                return (
                    <div className="flex items-center justify-center min-h-screen">
                        <Spinner size="lg" />
                    </div>
                );
            
            case types.AppStatus.LANDING:
                return <LandingPage onLogin={() => setAppStatus(types.AppStatus.LOGGING_IN)} onSignUp={() => setAppStatus(types.AppStatus.SIGNING_UP)} />;
            
            case types.AppStatus.LOGGING_IN:
                return <LoginPage onLoginAttempt={login} onSwitchToSignUp={() => setAppStatus(types.AppStatus.SIGNING_UP)} />;

            case types.AppStatus.SIGNING_UP:
                return <SignUpPage onSignUpAttempt={signup} onSwitchToLogin={() => setAppStatus(types.AppStatus.LOGGING_IN)} />;

            case types.AppStatus.AUTHENTICATED:
                switch (view) {
                    case 'dashboard':
                        return <Dashboard willExists={!!willData} onCreateNew={handleCreateNew} onEdit={handleEdit} />;
                    case 'form':
                        // The WillFormProvider is wrapped here to ensure it gets the correct initial data.
                        return (
                            <WillFormProvider initialData={willData || initialWill}>
                                <WillForm onReview={handleReview} onBack={handleBackToDashboard} />
                            </WillFormProvider>
                        );
                    case 'review':
                        if (willData) {
                            return <ReviewWill willData={willData} onEdit={handleEdit} onBack={handleReturnToDashboard} />;
                        }
                        // If willData is somehow null, go back to dashboard.
                        setView('dashboard');
                        return null;
                    default:
                        return <Dashboard willExists={!!willData} onCreateNew={handleCreateNew} onEdit={handleEdit} />;
                }

            default:
                return null; // Should not be reached
        }
    }

    return (
        <>
            {renderContent()}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm shadow-md rounded-lg overflow-hidden border border-slate-200/80">
                <PrivacyButton onClick={() => openLegalModal('privacy')} />
                <div className="w-px h-4 bg-slate-300" aria-hidden="true" />
                <CopyrightButton onClick={() => openLegalModal('copyright')} />
            </div>
            <LegalInfoModal 
                isOpen={legalModalState.isOpen}
                initialTab={legalModalState.initialTab}
                onClose={closeLegalModal}
            />
        </>
    );
};

export default App;