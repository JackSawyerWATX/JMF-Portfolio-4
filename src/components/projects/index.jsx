import ProjectLayout from "./ProjectLayout";
export default function ProjectList({
  projects
}) {
  return <div className="project-grid">{[...projects].sort((a, b) => b.date.localeCompare(a.date)).map((project, index) => <ProjectLayout key={project.id} {...project} index={index} />)}</div>;
}
