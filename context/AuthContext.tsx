import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (newUser: Omit<User, 'id'>) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Use localStorage to simulate a user database and session management.
const USERS_STORAGE_KEY = 'wasiyatak_users';
const SESSION_STORAGE_KEY = 'wasiyatak_session';

const getStoredUsers = (): User[] => {
    try {
        const usersJson = localStorage.getItem(USERS_STORAGE_KEY);
        return usersJson ? JSON.parse(usersJson) : [];
    } catch (e) {
        return [];
    }
};

const setStoredUsers = (users: User[]) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        try {
            const userJson = localStorage.getItem(SESSION_STORAGE_KEY);
            return userJson ? JSON.parse(userJson) : null;
        } catch (e) {
            return null;
        }
    });

    // Persist session changes to localStorage.
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));
        } else {
            localStorage.removeItem(SESSION_STORAGE_KEY);
        }
    }, [currentUser]);


    const signup = async (newUser: Omit<User, 'id' | 'password'> & { password?: string }): Promise<{ success: boolean; message?: string }> => {
        const users = getStoredUsers();
        if (users.find(u => u.email === newUser.email)) {
            return { success: false, message: 'user_already_exists' };
        }
        const userWithId: User = { ...newUser, id: `user-${Date.now()}` };
        users.push(userWithId);
        setStoredUsers(users);
        setCurrentUser(userWithId); // Automatically log in after signup.
        return { success: true };
    };

    const login = async (email: string, password: string): Promise<boolean> => {
        const users = getStoredUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setCurrentUser(user);
            return true;
        }
        return false;
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const value = { currentUser, login, signup, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
