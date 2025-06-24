import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="container w-full mx-auto flex flex-col items-center px-2 sm:px:5 md:px-10 lg:px-20">
      <div className="py-20">
        <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-[1000] text-center">
          Get In Touch
          <div className="absolute -z-1 top-[80%] w-[140%] h-[140%] left-1/2 transform -translate-x-1/2">
            <Image className="object-cover" src='/images/svg/page-header-glow.svg' fill={true} alt="Header glow" />
          </div>
        </h1>
      </div>
      <p className="font-thin text-xl">Have something in mind? Feel free to send me a message</p>
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pt-20">
        <div className="w-155 rounded-4xl border-custom border-1 bg-linear-65 from-gray-thin-custom/40 to-gray-bold-custom/60">
          <div className="w-full h-full p-14">
            <div className="border-b-gray-thin-custom border-b-[0.5px] pb-10">
              <h2 className="font-medium text-3xl pb-10">Contact me directly through</h2>
              <div className="space-y-14">
                {/* Email Section */}
                <div className="flex items-center space-x-10">
                  <div className="relative w-15 h-15 bg-custom/30 rounded-full">
                    <div className="relative w-1/2 h-1/2 mx-auto top-1/2 transform -translate-y-1/2">
                      <Image src='/images/svg/mail-icon.svg' fill={true} alt="Mail Icon" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-gray-thin-custom text-2xl">Email</h3>
                    <p className="font-thin text-2xl">khanhdoanfin316@gmail.com</p>
                  </div>
                </div>
                {/* Phone Section */}
                <div className="flex items-center space-x-10">
                  <div className="relative w-15 h-15 bg-custom/30 rounded-full">
                    <div className="relative w-1/2 h-1/2 mx-auto top-1/2 transform -translate-y-1/2">
                      <Image src='/images/svg/mail-icon.svg' fill={true} alt="Mail Icon" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-gray-thin-custom text-2xl">Phone</h3>
                    <p className="font-thin text-2xl">(+84) 837 441 911</p>
                  </div>
                </div>
                {/* Location Section */}
                <div className="flex items-center space-x-10">
                  <div className="relative w-15 h-15 bg-custom/30 rounded-full">
                    <div className="relative w-1/2 h-1/2 mx-auto top-1/2 transform -translate-y-1/2">
                      <Image src='/images/svg/mail-icon.svg' fill={true} alt="Mail Icon" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-gray-thin-custom text-2xl">Location</h3>
                    <p className="font-thin text-2xl">Can Tho</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <Link href="#" >
                <div className="relative w-15 h-15">
                  <Image src='/images/svg/linkedin-icon.svg' fill={true} alt="Linkedin Link" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-100 h-100 bg-amber-50"></div>
      </div>
    </div>
  );
}
