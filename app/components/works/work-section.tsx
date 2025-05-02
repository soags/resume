import type { Work } from "~/types/work";
import { ProjectCard } from "./project-card";

function WorkSection({ work }: { work: Work }) {
  const { company, from, to, position, projects } = work;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-medium">{company}</h3>
        <div className="flex items-center text-gray-600">
          <span>
            {from} 〜 {to}
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-2">{position}</p>

      <div className="flex flex-col space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export { WorkSection };
