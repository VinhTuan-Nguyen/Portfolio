"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export enum Language { EN = "en", VI = "vi" }

const LANGUAGES = Object.values(Language)

interface LanguageContextType {
    lang: Language;
    transform: (key: string, replace?: { [index: string]: string }) => Promise<string>;
    changeLanguage: (lang: Language) => void;
}

interface I18NFormat { [key: string]: string }

const LANGCONTEXT = createContext<LanguageContextType | undefined>(undefined);

const dictionaries = {
    en: (): Promise<I18NFormat> => import('@/dictionaries/en.json').then((module) => module.default as I18NFormat),
    vi: (): Promise<I18NFormat> => import('@/dictionaries/vi.json').then((module) => module.default as I18NFormat),
}

export const useLanguage = () => {
    const context = useContext(LANGCONTEXT);
    if (context !== undefined) return context;
    throw new Error('useLanguage must be used within a LanguageProvider');
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getInitialLanguage = (): Language => {
        if (typeof window === 'undefined') return Language.EN;

        const savedLanguage = localStorage.getItem('language') as Language;
        return savedLanguage && LANGUAGES.includes(savedLanguage)
            ? savedLanguage
            : Language.EN;
    };

    const [lang, setLang] = useState<Language>(getInitialLanguage());

    const changeLanguage = (lang: Language) => setLang(lang);

    const transform = async (key: string, replace?: { [key: string]: string }): Promise<string> => {
        const dict = await dictionaries[lang]();
        let value = dict[key];

        if (!value) {
            console.warn(`dict missing for key: ${key} in language: ${lang}`);
            return key;
        }

        if (replace) {
            for (const rKey in replace) {
                value = value.replace(new RegExp(`{${rKey}}`, 'g'), replace[rKey]);
            }
        }

        return value;
    };

    useEffect(() => {
        localStorage.setItem('language', lang);
        // Update document lang attribute
        document.documentElement.setAttribute('lang', lang);
    }, [lang]);

    return (
        <LANGCONTEXT.Provider value={{ lang, transform, changeLanguage }}>
            {children}
        </LANGCONTEXT.Provider>
    )
}