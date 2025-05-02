import type { Project } from "~/types/project";
import { ProjectPhasesTimeline } from "./project-phases-timeline";
import { ProjectTechStackTable } from "./project-tech-stack-table";

function ProjectCard({ project }: { project: Project }) {
  const {
    name,
    from,
    to,
    highlights,
    roles,
    teamSize,
    teamSizeOffshore,
    phases,
    techStack,
  } = project;

  return (
    <div className="border rounded-xl px-4 py-2 print:break-inside-avoid ">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-medium">{name}</h4>
        <div className="text-sm text-gray-600">
          {from} 〜 {to}
        </div>
      </div>

      <div className="flex mb-4">
        <div className="grow pt-2">
          <div className="px-4">
            <ul className="list-disc pl-4 space-y-1">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex mb-2 items-center">
        <div className="w-24 font-medium pr-2">役割</div>
        <div className="">{roles.join(" / ")}</div>
      </div>

      <div className="flex mb-2 items-center">
        <div className="w-24 font-medium pr-2">チーム規模</div>
        <div className="">
          {teamSizeOffshore
            ? `${teamSize}名 (うち海外オフショア${teamSizeOffshore}名)`
            : `${teamSize}名`}
        </div>
      </div>

      <ProjectPhasesTimeline phases={phases} />

      <ProjectTechStackTable techStack={techStack} />
    </div>
  );
}

export { ProjectCard };
