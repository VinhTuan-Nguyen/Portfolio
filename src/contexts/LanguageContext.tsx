"use client";

import React, { createContext, useEffect, useState } from "react";
import EN from '@/dictionaries/en.json' assert { type: 'json' };
import VI from '@/dictionaries/vi.json' assert { type: 'json' };

export enum Language { EN = "en", VI = "vi" }

export const LANGCONTEXT = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGES = Object.values(Language)

interface LanguageContextType {
    lang: Language;
    transform: (key: string, replace?: { [index: string]: string }) => string;
    changeLanguage: (lang: Language) => void;
}

interface I18NFormat { [key: string]: string }

const dictionaries = { en: EN as I18NFormat, vi: VI as I18NFormat }

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

    const transform = (key: string, replace?: { [index: string]: string }): string => {
        let value = dictionaries[lang][key];

        if (!value) {
            console.warn(`dict missing for key: ${key} in language: ${lang}`);
            return key;
        }

        if (replace) {
            for (const key in replace) {
                value = value.replace(new RegExp(`{${key}}`, 'g'), replace[key]);
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