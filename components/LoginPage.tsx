import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';
import { useLocalization } from '../context/LocalizationContext';
import LanguageSwitcher from './LanguageSwitcher';
import Spinner from './ui/Spinner';

interface LoginPageProps {
    onLoginAttempt: (email: string, password: string) => Promise<boolean>;
    onSwitchToSignUp: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginAttempt, onSwitchToSignUp }) => {
    const { t } = useLocalization();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        const success = await onLoginAttempt(email, password);
        setIsLoading(false);
        if (!success) {
            setError(t('invalid_credentials'));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-4">
             <div className="absolute top-4 end-4">
                <LanguageSwitcher />
            </div>
            <Card className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">{t('log_in_to_your_account')}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input id="email" name="email" type="email" label={t('email')} placeholder={t('placeholders.email')} value={email} onChange={e => setEmail(e.target.value)} required />
                    <Input id="password" name="password" type="password" label={t('password')} placeholder={t('placeholders.password')} value={password} onChange={e => setPassword(e.target.value)} required />
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <Button type="submit" className="w-full flex items-center justify-center" disabled={isLoading}>
                        {isLoading ? <Spinner size="sm" /> : t('log_in')}
                    </Button>
                </form>
                <p className="text-center text-sm text-slate-600 mt-6">
                    {t('dont_have_account')}{' '}
                    <button onClick={onSwitchToSignUp} className="font-medium text-teal-600 hover:underline">
                        {t('sign_up')}
                    </button>
                </p>
            </Card>
        </div>
    );
};

export default LoginPage;