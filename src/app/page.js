low-hiddenimport Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import MovingStars from "@/components/MovingStars";
// import Satellite from "@/components/models/Satellite";
import dynamic from "next/dynamic";

const Satellite = dynamic(() => import("@/components/models/Satellite"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between relative overflow-hidden">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background image"
        fill
        className="bg-image -z-50 w-full h-full object-cover object-center opacity-75"
      />

      <div className="h-full h-screen relative z-10">
        {/* {Navigation and 3D model component} */}
        <Navigation />
        <RenderModel>
          <Satellite />
        </RenderModel>
          <MovingStars />
      </div>
    </main>
  );
}
