import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CurrentUser, UserRole, Language } from '../types';
import { dummyMigrant, dummyDoctor, dummyAdmins } from '../data/dummyData';

interface AuthContextType {
  isAuthenticated: boolean;
  user: CurrentUser;
  login: (role: UserRole) => void;
  logout: () => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<CurrentUser>(null);
  const [language, setLanguage] = useState<Language>(Language.EN);

  const login = (role: UserRole) => {
    // In a real app, this would involve an API call
    switch (role) {
      case UserRole.MIGRANT:
        setUser(dummyMigrant);
        break;
      case UserRole.DOCTOR:
        setUser(dummyDoctor);
        break;
      case UserRole.ADMIN:
        setUser(dummyAdmins[0]);
        break;
      default:
        setUser(null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, language, setLanguage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};