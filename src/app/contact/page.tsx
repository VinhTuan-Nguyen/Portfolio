"use client";
import { useLanguage } from "@/hooks/useLanguage";
import { PORTFOLIO } from "@/lib/contants/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const { lang, transform } = useLanguage();

  const contactSection = [
    {
      // Email Section
      sectionName: 'contact.email.header',
      icon: '/images/svg/mail-icon.svg',
      value: PORTFOLIO[lang].contact?.email
    },
    {
      // Phone Section
      sectionName: 'contact.phone.header',
      icon: '/images/svg/phone-icon.svg',
      value: PORTFOLIO[lang].contact?.phone
    },
    {
      // Location Section
      sectionName: 'contact.location.header',
      icon: '/images/svg/map-pin-icon.svg',
      value: PORTFOLIO[lang].contact?.location
    }
  ]

  return (
    <div className="container w-full mx-auto flex flex-col items-center px-[2%]">
      <div className="py-5 md:py-20">
        <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-[1000] text-center">
          {transform("contact.header")}
          <div className="absolute -z-1 top-[80%] w-[140%] h-[140%] left-1/2 transform -translate-x-1/2">
            <Image className="object-cover" src='/images/svg/page-header-glow.svg' fill={true} alt="Header glow" />
          </div>
        </h1>
      </div>
      <p className="font-thin text-xs md:text-xl">{transform("contact.description")}</p>
      <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-2 items-start pt-5 md:pt-10 lg:pt-20 gap-10 md:gap-20 lg:gap-10 xl:gap-30 2xl:gap-50">
        <div className="w-full col-span-1 rounded-4xl border-custom border-1 bg-linear-65 from-custom-gray-thin/40 to-custom-gray-bold/60">
          <div className="w-full h-full p-10 sm:p-11 md:p-12 lg:p-14">
            <div className="border-b-custom-gray-thin border-b-[0.5px] pb-10">
              <h2 className="font-medium text-center lg:text-left text-xl sm:text-2xl xl:text-3xl pb-10">
                {transform("contact.card.header")}
              </h2>
              <div className="space-y-14">
                {contactSection.map(section => (
                  <div key={section.sectionName} className="flex items-center space-x-4 md:space-x-7 xl:space-x-10">
                    <div className="relative w-10 h-10 sm:w-13 sm:h-13 xl:w-15 xl:h-15 bg-custom/30 rounded-full">
                      <div className="relative w-1/2 h-1/2 mx-auto top-1/2 transform -translate-y-1/2">
                        <Image src={section.icon} fill={true} alt={`${section.sectionName} Icon`} />
                      </div>
                    </div>
                    <div className="space-y-0.5 sm:space-y-1 xl:space-y-1.5">
                      <h3 className="text-custom-gray-thin text-sm sm:text-xl xl:text-2xl">{transform(section.sectionName)}</h3>
                      <p className="font-thin text-sm sm:text-xl xl:text-2xl">{section.value || ''}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-5 md:pt-8 lg:pt-10">
              <Link href="#" >
                <div className="relative w-8 h-8 sm:w-13 sm:h-13 xl:w-15 xl:h-15">
                  <Image src='/images/svg/linkedin-icon.svg' fill={true} alt="Linkedin Link" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-1">
          <form action="" className="w-full h-full">
            <div className="w-full h-full flex flex-col space-y-5 md:space-y-10">
              <div className="grid grid-rows-3 gap-5 md:gap-10">
                <div className="row-span-1 grid grid-cols-2 gap-5 md:gap-10 lg:gap-5 xl:gap-10">
                  <div className="col-span-1 flex flex-col space-y-0.5 md:space-y-1">
                    <label htmlFor="" className="text-sm md:text-md lg:text-xl pl-2">{transform("contact.input.name")}</label>
                    <input type="text" className="w-full h-[35px] md:h-[45px] lg:h-[50px] text-sm md:text-md lg:text-xl bg-custom-gray/50 rounded-lg text-custom-dark p-1.5" />
                  </div>
                  <div className="col-span-1 flex flex-col space-y-0.5 md:space-y-1">
                    <label htmlFor="" className="text-sm md:text-md lg:text-xl pl-2">{transform("contact.input.company")}</label>
                    <input type="text" className="w-full h-[35px] md:h-[45px] lg:h-[50px] text-sm md:text-md lg:text-xl bg-custom-gray/50 rounded-lg text-custom-dark p-1.5" />
                  </div>
                </div>
                <div className="row-span-1 grid grid-cols-2 gap-5 md:gap-10 lg:gap-5 xl:gap-10">
                  <div className="col-span-1 flex flex-col space-y-0.5 md:space-y-1">
                    <label htmlFor="" className="text-sm md:text-md lg:text-xl pl-2">{transform("contact.input.email")}</label>
                    <input type="text" className="w-full h-[35px] md:h-[45px] lg:h-[50px] text-sm md:text-md lg:text-xl bg-custom-gray/50 rounded-lg text-custom-dark p-1.5" />
                  </div>
                  <div className="col-span-1 flex flex-col space-y-0.5 md:space-y-1">
                    <label htmlFor="" className="text-sm md:text-md lg:text-xl pl-2">{transform("contact.input.phone")}</label>
                    <input type="text" className="w-full h-[35px] md:h-[45px] lg:h-[50px] text-sm md:text-md lg:text-xl bg-custom-gray/50 rounded-lg text-custom-dark p-1.5" />
                  </div>
                </div>
                <div className="row-span-1 flex flex-col space-y-1">
                  <label htmlFor="" className="text-sm md:text-md lg:text-xl pl-2">{transform("contact.input.subject")}</label>
                  <input type="text" className="w-full h-[35px] md:h-[45px] lg:h-[50px] text-sm md:text-md lg:text-xl bg-custom-gray/50 rounded-lg text-custom-dark p-1.5" />
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="" className="text-sm md:text-md lg:text-xl pl-2">{transform("contact.input.message")}</label>
                <textarea name="" id="" className="w-full min-h-[100px] lg:min-h-[150px] bg-custom-gray/50 rounded-lg text-custom-dark p-1.5" ></textarea>
              </div>
              <button className="bg-custom w-[120px] md:w-[150px] lg:w-[200px] h-[40px] md:h-[45px] lg:h-[50px] mx-auto rounded-xl text-xl text-center shadow-[0_0_30px_#A238FF]">{transform("contact.input.btn.submit")}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
