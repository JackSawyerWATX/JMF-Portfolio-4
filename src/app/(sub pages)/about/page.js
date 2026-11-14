import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
const Jwst = dynamic(() => import("@/components/models/Jwst"), {
  ssr: false
});
export const metadata = {
  title: "About | Jonathan Fausset"
};
export default function About() {
  return <div><Image priority sizes="100vw" src={bg} alt="" className="interior-background" /><section className="about-hero"><div><p className="eyebrow">02 / THE EXPLORER</p><h1>Curiosity is<br />my <span>compass.</span></h1><p className="page-intro">I’m Jonathan Fausset. I build for the web, continuously learn and experiment with new technologies.</p></div><div className="about-model"><RenderModel><Jwst /></RenderModel><span className="model-label">JAMES WEBB SPACE TELESCOPE / A WIDER VIEW</span></div></section><AboutDetails /></div>;
}
