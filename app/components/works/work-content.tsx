import type { Project, Work } from "~/types/work";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar } from "lucide-react";
import { ProjectSection } from "./project-section";
import { Badge } from "../ui/badge";

function WorkContent({ work }: { work: Work }) {
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
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectContent key={project.name} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectContent({ project }: { project: Project }) {
  const {
    name,
    from,
    to,
    description,
    highlights,
    roles,
    teamSize,
    teamSizeOffshore,
    phases,
    techStack,
  } = project;

  const teamSizeText = teamSizeOffshore
    ? `${teamSize}名 (うち海外${teamSizeOffshore}名)`
    : `${teamSize}名`;

  const rolesText = roles.join(" / ");

  const techs = Object.entries(techStack)
    .filter(([_, value]) => value.length > 0)
    .map(([key, value]) => value)
    .flat();

  return (
    <div className="border-l-4 border-sky-900 pl-4 py-1 print:break-inside-avoid">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm mb-2">
        {from} - {to} | {teamSizeText} |{rolesText}
      </p>

      {/* 概要 */}
      <p className="text-gray-700 mb-3">{description}</p>

      {/* ハイライト */}
      <ul className="list-disc list-inside mt-3 text-gray-700">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      {/* 技術スタック */}
      <div className="flex flex-wrap gap-2 mt-3">
        {techs.map((tech) => (
          <Badge key={tech} className="bg-sky-900 text-white">{tech}</Badge>
        ))}
      </div>
    </div>
  );
}

export { WorkContent };
