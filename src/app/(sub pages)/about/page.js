import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
// import Jwst from "@/components/models/Jwst";
import dynamic from "next/dynamic";

const Jwst = dynamic(() => import("@/components/models/Jwst"), { 
    ssr: false, 
    loading: () => <div>Loading 3D Model...</div> });

export const metadata = { title: "About" };

export default function Home() {
    return (
        <>
            <Image
                priority
                sizes="(max-width: 768px) 100vw, 100vw"
                src={bg}
                alt="About page background image of the Horsehead Nebula"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-75"
            />

            <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/4 -translate-y-1/4 right-[-15%] z-10">
                <RenderModel>
                    <Jwst />
                </RenderModel>
            </div>

            <div className="relative w-full h-screen flex flex-col items-center -translate-x-1/3 justify-center">
                <div className="absolute flex flex-col items-center top-1/2 sm:top-[50%] left-1/2 -translate-y-1/4 -translate-x-1/5">
                    <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sky-300">
                        Jack Sawyer
                    </h1>
                    <p className="font-light text-foreground text-amber-200 text-center text-lg sm:text-xl py-4 sm:py-6">
                        Meet the Mission Specialist.
                    </p>
                </div>
            </div>

            <AboutDetails />
        </>
    );
}
