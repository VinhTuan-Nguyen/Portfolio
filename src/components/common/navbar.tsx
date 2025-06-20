'use client'
import { PAGE_ROUTES } from "@/lib/contants/page-router";
import { Menu, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const location = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); }
    }, []);

    return (
        <header className={`w-full mx-auto fixed z-50 transition-all duration-300
            ${isScrolled
                ? 'shadow-xl shadow-custom/50 bg-custom-dark/95 py-5 md:py-6 lg:py-8 rounded-b-full'
                : 'bg-transparent py-4'
            }
        `}>
            <nav className="container mx-auto flex justify-between items-center px-10 md:px-10 lg:px-20">
                <Link href="/" className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold transition-colors duration-300">
                    Digital Marketing
                </Link>
                <div className="flex items-center space-x-3">
                    {/* Navigation Menu */}
                    <div className="hidden md:flex space-x-5">
                        {PAGE_ROUTES.map((route) => (
                            <Link
                                key={route.order}
                                href={route.path}
                                className="sm:text-xs md:text-xl lg:text-2xl relative inline-block font-extrabold transition-all duration-300 px-1.5"
                            >
                                <span className={`relative ${location === route.path ? 'text-custom' : 'hover:text-custom'}`}>
                                    {route.pageName}
                                </span>
                                {
                                    location === route.path && (
                                        <Image
                                            src={`/images/svg/${route.pageName.toLowerCase()}-blur.svg`}
                                            alt={`${route.pageName} blur effect`}
                                            fill={true}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    )
                                }
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div className="flex md:hidden">
                        <div className="relative inline-block text-left">
                            <button
                                onClick={() => toggleMenu()}
                                id="menu-button"
                                type="button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                className={`inline-flex w-full justify-center px-3 py-2`}
                            ><Menu className="w-6 h-6"></Menu></button>
                            {isMenuOpen && (
                                <div
                                    role="menu"
                                    tabIndex={-1}
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    className={`absolute mt-2 origin-top-right`}
                                >
                                    <div className={`absolute flex flex-col space-y-3 rounded-md text-center`} role="none">
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Settings className="w-5 h-5 transition-colors duration-300 hover:text-custom" />
                </div>
            </nav>
        </header>
    );
}