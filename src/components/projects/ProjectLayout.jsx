import { ArrowRight } from "lucide-react";
export default function ProjectLayout({
  name,
  description,
  date,
  demoLink,
  index
}) {
  return <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-card"><div className="project-card-top"><span>MISSION {String(index + 1).padStart(2, "0")}</span><ArrowRight size={21} /></div><h2>{name}</h2><p>{description}</p><div className="project-card-bottom"><span>{date.slice(0, 4)}</span><span>VIEW PROJECT</span></div></a>;
}
