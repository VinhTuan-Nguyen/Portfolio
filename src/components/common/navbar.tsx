'use client'
import DropDownSimple, { DropDownSimpleProps, initDropDownSimpleProps } from "@/components/ui/dropdown-simple";
import { PAGE_ROUTES } from "@/lib/contants/page-router";
import { Menu, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function buildNavDropDownList(location: string): DropDownSimpleProps {
    const props = initDropDownSimpleProps
    // Config Button
    props.button.icon = <Menu className="h-6 w-6" />
    props.button.classes = ['hover:text-custom']

    // Create Menu List
    props.menu.menuList = PAGE_ROUTES.map((route, index) => (
        <Link
            id={`menu-item-${++index}`}
            key={route.order}
            href={route.path}
            role="menuitem"
            tabIndex={-1}
            className="relative inline-block font-extrabold"
        >
            <span className={`relative px-1.5
                ${location === route.path
                    ? 'text-custom'
                    : 'hover:text-custom'}
            `}>
                {route.pageName}
                {location === route.path && (
                    <Image
                        src={`/images/svg/${route.filter}`}
                        alt={`${route.pageName} blur effect`}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        className="relative"
                    />
                )}
            </span>
        </Link>
    ))
    return props
}

export default function Navbar() {
    const location = usePathname()
    const dropDownList = buildNavDropDownList(location);

    return (
        <header className="fixed md:absolute w-full max-w-[1024px] shadow-md py-5 px-[2%] xl:px-0">
            <nav className=" mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl md:text-2xl font-bold transition-colors duration-300">Digital Marketing</Link>
                <div className="flex items-center space-x-3">
                    {/* Navigation Menu */}
                    <div className="hidden md:flex space-x-5">
                        {PAGE_ROUTES.map((route) => (
                            <Link
                                key={route.order}
                                href={route.path}
                                className="group relative inline-block font-extrabold transition-all duration-300 px-1.5"
                            >
                                <span className={`relative
                                    ${location === route.path
                                        ? 'text-custom'
                                        : 'group-hover:text-custom'
                                    }
                                `}>
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
                    <div className="flex md:hidden">{DropDownSimple(dropDownList)}</div>
                    <Settings className="w-5 h-5 transition-colors duration-300 hover:text-custom" />
                </div>
            </nav>
        </header>
    );
}