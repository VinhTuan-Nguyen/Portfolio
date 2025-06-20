import { PAGE_ROUTES } from "@/lib/contants/page-router";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-[5%] mx-auto w-full container space-y-5">
            <div className="flex flex-col sm:flex-rol justify-between items-end">
                <div className="flex space-x-12">
                    <Link href="/#" className="relative w-[30px] h-[30px]">
                        <Image src='/images/svg/linkedin-icon.svg' alt="Linkedin icon" fill={true} />
                    </Link>
                    <Link href="/#" className="relative w-[30px] h-[30px]">
                        <Image src='/images/svg/mail-icon.svg' alt="Linkedin icon" fill={true} />
                    </Link>
                </div>
                <div className="space-x-10">
                    {PAGE_ROUTES.map((route) => (
                        <Link
                            key={route.order}
                            href={route.path}
                            className="text-xl inline-block font-extrabold"
                        >
                            {route.pageName}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
            <p>Copyright © 2025 | All Rights Reserved</p>
        </footer>
    )
}