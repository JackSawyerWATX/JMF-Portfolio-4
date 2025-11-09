import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
// import Jwst from "@/components/models/Jwst";
import dynamic from "next/dynamic";

const Jwst = dynamic(() => import("@/components/models/Jwst"), {
  ssr: false
});

export const metadata = { title: "About" };

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between relative overflow-hidden">
      {/* Background Image - fixed positioning to cover entire screen */}
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="About page background image of the Horsehead Nebula"
        className="bg-image -z-50 fixed top-0 left-0 w-screen h-screen object-cover object-center opacity-75 bg-fixed"
      />

      {/* Hero Content */}
      <div className="relative w-full h-50px xxs:h-40 sm:h-48 lg:h-56 xl:h-64 flex flex-col items-center justify-center px-4 z-20">
        <div className="flex flex-col items-center text-center xxs:text-left">
          <h1 className="font-bold text-xl xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-sky-300">
            Jonathan Fausset
          </h1>
          <p className="font-light text-foreground text-amber-200 text-center text-base xxs:text-lg sm:text-xl py-2 xxs:py-4 sm:py-6 max-w-xs xxs:max-w-none">
            Meet the Mission Specialist.
          </p>
        </div>
      </div>

      {/* 3D Model positioned directly under text */}
      <div className="relative w-full h-48 xxs:h-56 sm:h-64 lg:h-72 xl:h-80 mt-2 xxs:mt-3 sm:mt-4 mb-2 xxs:mb-3 sm:mb-4 mx-auto overflow-visible">
        <div className="absolute inset-0 w-full h-full transform -translate-x-40 overflow-visible" style={{ transform: 'translateX(-10rem)' }}>
          <RenderModel>
            <Jwst />
          </RenderModel>
        </div>
      </div>

      {/* About Details with API components */}
      <div className="relative z-30">
        <AboutDetails />
      </div>
    </main>
  );
}
