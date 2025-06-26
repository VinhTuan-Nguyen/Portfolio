import Image from "next/image";

export default function Project() {
  return (
    <div className="container w-full mx-auto flex flex-col items-center px-[2%]">
      <div className="py-20">
        <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-[1000] text-center">
          About Me
          <div className="absolute -z-1 top-[80%] w-[140%] h-[140%] left-1/2 transform -translate-x-1/2">
            <Image className="object-cover" src='/images/svg/page-header-glow.svg' fill={true} alt="Header glow" />
          </div>
        </h1>
      </div>
    </div>
  );
}
