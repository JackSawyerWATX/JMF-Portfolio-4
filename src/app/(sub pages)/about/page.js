import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
// import Jwst from "@/components/models/Jwst";
import dynamic from "next/dynamic";

const Jwst = dynamic(() => import("@/components/models/Jwst"), { ssr: false });

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-75" />

      <div className='w-full xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-3/4 left-0'>
        <RenderModel>
          <Jwst />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center -translate-x-1/3 justify-center">
        <div className="absolute flex flex-col items-center top-1/2 sm:top-[50%] left-1/2 -translate-y-1/4 -translate-x-1/5">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Jack Sawyer</h1>
          <p className="font-light text-foreground -translate-x-1/2 text-xl py-9">Meet the Mission Specialist.</p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
