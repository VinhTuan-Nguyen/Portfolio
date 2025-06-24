'use client';
import { useLanguage } from "@/hooks/useLanguage";
import { PAGE_ROUTES } from "@/lib/contants/page-router";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const { transform } = useLanguage()

    return (
        <footer className="py-[5%]">
            <div className="flex flex-col items-center mx-auto container space-y-5 px-2 sm:px:5 md:px-10 lg:px-20">
                <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center md:items-end">
                    <div className="flex space-x-12">
                        <Link href="/#" className="relative w-[30px] h-[30px]">
                            <Image src='/images/svg/linkedin-icon.svg' alt="Linkedin icon" fill={true} />
                        </Link>
                        <Link href="/#" className="relative w-[30px] h-[30px]">
                            <Image src='/images/svg/mail-icon.svg' alt="Linkedin icon" fill={true} />
                        </Link>
                    </div>
                    <div className="space-x-10 pb-3 md:pb-0">
                        {PAGE_ROUTES.map((route) => (
                            <Link
                                key={route.order}
                                href={route.path}
                                className="text-lg md:text-xl inline-block font-extrabold hover:text-custom"
                            >
                                {transform(route.pageName)}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white"></div>
                <p>Copyright © 2025 | All Rights Reserved</p>
            </div>
        </footer>
    )
}