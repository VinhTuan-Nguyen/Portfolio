import Image from "next/image";

export default function Project() {
  return (
    <div className="container w-full mx-auto flex flex-col items-center px-2 sm:px:5 md:px-10 lg:px-20">
      <div className="p-20">
        <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-[1000] text-center">
          My Project
          <div className="absolute -z-1 -bottom-12 w-[110%] h-[110%] left-1/2 transform -translate-x-1/2">
            <Image src='/images//svg/page-header-glow.svg' width={290} height={85} alt="Header glow" />
          </div>
        </h1>
      </div>
    </div>
  );
}
