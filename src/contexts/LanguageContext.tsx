
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../constants/siteData';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (translations: { en: string; hi: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  // Translation helper function
  const t = (translations: { en: string; hi: string }) => {
    return translations[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
