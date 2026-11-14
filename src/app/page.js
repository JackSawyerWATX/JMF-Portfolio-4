import Link from "next/link";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
import { ArrowRight, Orbit, UserRound } from "lucide-react";
import { BtnList } from "./data";
import FooterIcon from "@/components/FooterIcon";
const Satellite = dynamic(() => import("@/components/models/Satellite"), {
  ssr: false
});
export default function Home() {
  return <main className="home-page"><div className="home-nebula" style={{
      backgroundImage: `url(${bg.src})`
    }} /><section className="home-hero"><div className="hero-copy"><h1>Engineering the<br /><span>intelligent frontier.</span></h1><p className="hero-description">I’m Jonathan Fausset, a web developer and software engineer. I turn ambitious ideas into thoughtful digital experiences.</p><div className="hero-actions"><Link href="/projects" className="primary-link"><Orbit size={17} aria-hidden="true" />Explore My Work <ArrowRight size={17} aria-hidden="true" /></Link><Link href="/about" className="text-link"><UserRound size={17} aria-hidden="true" />Meet the Developer</Link></div></div><div className="satellite-stage"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="stage-coordinate">01 / ORBITAL PERSPECTIVE</span><div className="satellite-canvas"><RenderModel><Satellite /></RenderModel></div></div><div className="hero-stack"><span>MY TOOLS</span><p>JavaScript · React · Next.js · Three.js · Python · Java · SQL · AWS · API design · AI · Agentic AI · RAG · LLM integration · AI evaluation</p></div></section><footer className="home-footer"><div>{BtnList.filter(b => b.newTab).map(b => <a key={b.label} href={b.link} target="_blank" rel="noopener noreferrer"><FooterIcon label={b.label} />{b.label}</a>)}</div></footer></main>;
}
