import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
const SaturnV = dynamic(() => import("@/components/models/SaturnV"), {
  ssr: false
});
export const metadata = {
  title: "Projects | Jonathan Fausset"
};
export default function Projects() {
  return <div><Image priority sizes="100vw" src={bg} alt="" className="interior-background" /><section className="projects-hero"><div><p className="eyebrow">03 / SELECTED EXPLORATIONS</p><h1>Ideas into<br /><span>orbit.</span></h1><p className="page-intro">A collection of websites, applications, and experiments. Each project, a new perspective.</p></div><div className="rocket-stage"><RenderModel><SaturnV /></RenderModel></div></section><div className="section-label"><span>MISSION ARCHIVE</span><span>{projectsData.length} PROJECTS</span></div><ProjectList projects={projectsData} /></div>;
}
