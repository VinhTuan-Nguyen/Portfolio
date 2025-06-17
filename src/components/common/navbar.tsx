'use client'
import { PAGE_ROUTES } from "@/lib/contants/page-router";
import { Menu, Settings, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    return (
        <header className="w-full shadow-md py-5">
            <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link href="/" className="text-xl md:text-2xl font-bold transition-colors duration-300">Digital Marketing</Link>
                {/* Navigation Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {PAGE_ROUTES.map((route) => (
                        <Link
                            key={route.order}
                            href={route.path}
                            className="group relative inline-block font-extrabold transition-all duration-300 px-1.5"
                        >
                            {
                                location === route.path && (
                                    <Image
                                        src={`/images/svg/${route.pageName.toLowerCase()}-blur.svg`}
                                        alt={`${route.pageName} blur effect`}
                                        fill={true}
                                        objectFit="cover"
                                    />
                                )
                            }
                            <span className={`relative
                                ${location === route.path
                                    ? 'text-hover-gradient'
                                    : 'group-hover:text-hover-gradient'
                                }
                            `}>
                                {route.pageName}
                            </span>
                        </Link>
                    ))}
                    <Settings className="w-5 h-5 transition-colors duration-300 hover:text-hover-gradient" />
                </div>


                <div className="md:hidden flex items-center space-x-3 z-3">
                    <Settings className="w-5 h-5 transition-colors duration-300 hover:text-hover-gradient" />
                    <button
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className="p-2 rounded-full transition-colors duration-300 hover:text-hover-gradient"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {/* <div
                className={`absolute mt-20 md:hidden inset-0 z-2 transition-transform duration-300 ease-in-out
                    ${isMenuOpen
                        ? 'transform translate-x-0'
                        : 'transform translate-x-full'
                    }`
                }
            >
                <div className="container mx-auto px-6 py-4 flex flex-col space-y-8">
                    {PAGE_ROUTES.map((route) => (
                        <Link
                            key={route.order}
                            href={route.path}
                            className="group relative inline-block font-extrabold transition-all duration-300 px-1.5"
                        >
                            <Image
                                src={`/images/svg/${route.pageName.toLowerCase()}-blur.svg`}
                                alt={`${route.pageName} blur effect`}
                                fill={true}
                                objectFit="cover"
                                className="relative inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <span className="relative group-hover:text-hover-gradient">{route.pageName}</span>
                        </Link>
                    ))}
                </div>
            </div> */}
        </header>
    );
}