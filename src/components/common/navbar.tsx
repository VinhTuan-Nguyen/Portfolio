'use client'
import { Language } from "@/contexts/LanguageContext";
import { useLanguage } from "@/hooks/useLanguage";
import { PAGE_ROUTES } from "@/lib/contants/page-router";
import { Languages, Menu, Settings, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { lang, transform, changeLanguage } = useLanguage();
    const location = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);
    const [settingMenuOpen, setSettingMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleLanguage = () => {
        changeLanguage(lang === Language.EN ? Language.VI : Language.EN);
        setSettingMenuOpen(false)
    };

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 5);

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        setMenuOpen(false)
        setSettingMenuOpen(false)
    }, [location])

    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(true)
            setSettingMenuOpen(false)
        }
    }, [menuOpen])

    useEffect(() => {
        if (settingMenuOpen) {
            setMenuOpen(false)
            setSettingMenuOpen(true)
        }
    }, [settingMenuOpen])

    return (
        <header className={`w-full mx-auto fixed z-50 transition-all duration-300
            ${isScrolled
                ? 'shadow-xl shadow-custom/50 bg-custom-dark/95 py-1 md:py-6 lg:py-8 rounded-b-full'
                : 'bg-transparent py-4'
            }
        `}>
            <nav className={`container mx-auto flex justify-between items-center px-[5%]`}>
                <Link
                    href="/"
                    className={`md:text-3xl lg:text-4xl font-bold transition-all duration-300
                        ${isScrolled ? 'text-sm' : 'text-md'}
                    `}
                >
                    {transform("nav.logo")}
                </Link>
                <div className="flex items-center space-x-0 md:space-x-3">
                    {/* Navigation Menu */}
                    <div className="hidden md:flex space-x-5">
                        {PAGE_ROUTES.map((route) => (
                            <Link
                                key={route.order}
                                href={route.path}
                                className="sm:text-xs md:text-xl lg:text-2xl relative inline-block font-extrabold transition-all duration-300 px-1.5"
                            >
                                <span className={`relative
                                    ${location === route.path
                                        ? 'text-custom text-shadow-[0_0_6px_#A238FF]'
                                        : 'hover:text-custom'}
                                    `}
                                >
                                    {transform(route.pageName)}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className="relative inline-block text-center md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            id="menu-button"
                            type="button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            className={`inline-flex w-full justify-center px-3 py-2 hover:text-custom transition-colors duration-200`}
                        >
                            <Menu className={`w-6 h-6 ${menuOpen ? 'hidden' : ''}`}></Menu>
                            <X className={`w-6 h-6 ${!menuOpen ? 'hidden' : ''}`}></X>
                        </button>
                        <div
                            role="menu"
                            tabIndex={-1}
                            aria-orientation="horizontal"
                            aria-labelledby="menu-button"
                            className={`absolute origin-top-right transition transform right-0
                                ${isScrolled ? 'translate-y-2' : 'translate-x-0'}
                                ${menuOpen
                                    ? 'ease-in duration-150 opacity-100 scale-100'
                                    : 'ease-out duration-100 opacity-0 scale-30'
                                }
                            `}
                        >
                            <div className={`flex flex-col space-y-5 rounded-lg bg-custom-dark/95 p-5 w-max`} role="none">
                                {PAGE_ROUTES.map((route) => (
                                    <Link
                                        onClick={() => setMenuOpen(false)}
                                        key={route.order}
                                        href={route.path}
                                        className="text-sm md:text-xl relative inline-block transition-all duration-300"
                                    >
                                        <span className={`relative
                                                ${location === route.path
                                                ? 'text-custom text-shadow-[0_0_6px_#A238FF]'
                                                : 'hover:text-custom'}
                                            `}
                                        >
                                            {transform(route.pageName)}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Setting Menu */}
                    <div className="relative inline-block text-center">
                        <button
                            onClick={() => setSettingMenuOpen(!settingMenuOpen)}
                            id="setting-button"
                            type="button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            className={`inline-flex w-full justify-center px-3 py-2 hover:text-custom transition-colors duration-200`}
                        >

                            <Settings className={`w-6 h-6 ${settingMenuOpen ? 'hidden' : ''}`} />
                            <X className={`w-6 h-6 ${!settingMenuOpen ? 'hidden' : ''}`} />
                        </button>
                        <div
                            role="menu"
                            tabIndex={-1}
                            aria-orientation="vertical"
                            aria-labelledby="setting-button"
                            className={`absolute origin-top-right transition transform right-0 w-max
                                ${settingMenuOpen
                                    ? 'ease-in duration-150 opacity-100 scale-100'
                                    : 'ease-out duration-100 opacity-0 scale-30'
                                }
                                ${isScrolled
                                    ? 'translate-y-2 md:translate-y-7 lg:translate-y-9'
                                    : 'translate-x-0'
                                }
                            `}
                        >
                            <ul className="space-y-5 rounded-lg bg-custom-dark/95 p-5">
                                <li
                                    onClick={() => toggleLanguage()}
                                    className="text-sm md:text-xl cursor-pointer hover:text-custom flex items-center space-x-2"
                                >
                                    <Languages className="w-6 h-6" /><span>{lang === Language.EN ? 'Switch to Vi' : 'Chuyển sang En'}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}