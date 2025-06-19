'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-[2%] flex flex-col items-center">
      <section
        id='hero-section'
        className="w-full flex flex-col-reverse md:flex-row justify-between items-center md:items-start py-10 md:py-20 lg:py-30 gap-10">
        <div className="space-y-5 flex flex-col items-center md:items-start">
          <h1 className="font-extrabold text-2xl/relaxed md:text-5xl/relaxed lg:text-6xl/normal text-center md:text-left">
            Nguyen Ngoc<br className="hidden md:block" /> Khanh Doan
          </h1>
          <p className="text-sm md:text-md lg:text-lg md:px-0 text-center md:text-left px-[5%] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure quasi laudantium suscipit voluptatem veritatis beatae
          </p>
          <div className="pt-6 flex space-x-6">
            <Link href="/about" className="border rounded-md text-custom p-1">Learn more about me</Link>
            <button className="flex items-center justify-center rounded-md bg-[#A238FF] p-1 shadow-lg shadow-purple-700/50 cursor-pointer">
              Download resume
            </button>
          </div>
        </div>
        {/* Avatar */}
        <div className="relative bg-white min-w-[250] h-[250] md:min-w-[300] md:h-[300] lg:min-w-[400] lg:h-[400] rounded-full custom-background"></div>
      </section>
      <Image src="/images/svg/page-break.svg" width={500} height={30} alt="Page break section" />
      <section className="w-full flex flex-col items-center">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl pt-2 pb-15">My Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap3 sm:gap-5 md:gap-7 w-full space-y-5 sm:space-y-0 px-5 sm:px-3">
          <div className="bg-white h-100 w-full rounded-2xl"></div>
          <div className="bg-white h-100 w-full rounded-2xl"></div>
          <div className="bg-white h-100 w-full rounded-2xl"></div>
          <div className="bg-white h-100 w-full rounded-2xl"></div>
          <div className="bg-white h-100 w-full rounded-2xl"></div>
          <div className="bg-white h-100 w-full rounded-2xl"></div>
          <div className="bg-white h-100 w-full rounded-2xl"></div>
          <div className="bg-white h-100 w-full rounded-2xl"></div>
        </div>
      </section>
    </div>
  );
}
