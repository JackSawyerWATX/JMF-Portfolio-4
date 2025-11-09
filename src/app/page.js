import Image from "next/image";
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
            <div 
                className="bg-orbital -z-50 opacity-75"
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            <div className="w-full h-screen relative z-10 pb-16 xxs:pb-20 xs:pb-0">
                {/* Navigation and 3D model component */}
                <Navigation />
                <div className="h-full w-full">
                    <RenderModel>
                        <Satellite />
                    </RenderModel>
                </div>
                <MovingStars />
            </div>
        </main>
    );
}
