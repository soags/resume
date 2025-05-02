import type { Work } from "~/types/work";
import { Calendar } from "lucide-react";
import { ProjectContent } from "./project-content";

export function WorkContent({ work }: { work: Work }) {
  const { company, from, to, position, projects } = work;

  return (
    <>
      <div className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{company}</h3>
            <p className="text-gray-600">{position}</p>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {from} - {to}
            </span>
          </div>
        </div>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectContent key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}
