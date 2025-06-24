import { LANGCONTEXT } from "@/contexts/LanguageContext";
import { useContext } from "react";

export const useLanguage = () => {
    const context = useContext(LANGCONTEXT);
    if (context !== undefined) return context;
    throw new Error('useLanguage must be used within a LanguageProvider');
};