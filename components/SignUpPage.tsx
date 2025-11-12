import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';
import { useLocalization } from '../context/LocalizationContext';
import LanguageSwitcher from './LanguageSwitcher';
import { User } from '../types';
import Spinner from './ui/Spinner';

interface SignUpPageProps {
    onSignUpAttempt: (newUser: Omit<User, 'id'>) => Promise<{ success: boolean; message?: string }>;
    onSwitchToLogin: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUpAttempt, onSwitchToLogin }) => {
    const { t } = useLocalization();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError(t('passwords_do_not_match'));
            return;
        }
        setError('');
        setIsLoading(true);

        const result = await onSignUpAttempt({ fullName, email, phone, password });
        setIsLoading(false);

        if (!result.success && result.message) {
            setError(t(result.message));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 p-4">
             <div className="absolute top-4 end-4">
                <LanguageSwitcher />
            </div>
            <Card className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">{t('create_your_account')}</h2>
                
                {/* Password Recovery Warning */}
                <div className="bg-amber-50 border-l-4 rtl:border-r-4 rtl:border-l-0 border-amber-400 p-3 mb-6">
                    <p className="text-xs text-amber-800">
                        <strong>{t('privacy_and_security.storage_p4')}</strong>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input id="fullName" name="fullName" type="text" label={t('full_name')} placeholder={t('placeholders.full_name')} value={fullName} onChange={e => setFullName(e.target.value)} required />
                    <Input id="email" name="email" type="email" label={t('email')} placeholder={t('placeholders.email')} value={email} onChange={e => setEmail(e.target.value)} required />
                    <Input id="phone" name="phone" type="tel" label={t('phone_number')} placeholder={t('placeholders.phone')} value={phone} onChange={e => setPhone(e.target.value)} required />
                    <Input id="password" name="password" type="password" label={t('password')} placeholder={t('placeholders.password')} value={password} onChange={e => setPassword(e.target.value)} required />
                    <Input id="confirmPassword" name="confirmPassword" type="password" label={t('confirm_password')} placeholder={t('placeholders.password')} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <Button type="submit" className="w-full flex items-center justify-center" disabled={isLoading}>
                         {isLoading ? <Spinner size="sm" /> : t('sign_up')}
                    </Button>
                </form>
                <p className="text-center text-sm text-slate-600 mt-6">
                    {t('already_have_account')}{' '}
                    <button onClick={onSwitchToLogin} className="font-medium text-teal-600 hover:underline">
                        {t('log_in')}
                    </button>
                </p>
            </Card>
        </div>
    );
};

export default SignUpPage;