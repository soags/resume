import type { Project } from "~/types/work";
import { Badge } from "./ui/badge";
import { ProjectPhasesTimeline } from "./project-phases-timeline";
import { Calendar, User, Users } from "lucide-react";

export function ProjectContent({ project }: { project: Project }) {
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
    <section>
      <div className="border-l-4 border-sky-900 pl-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        {/* <p className="text-gray-500 text-sm mb-2">
          {from} - {to} | {teamSizeText} |{rolesText}
        </p> */}

        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {from} - {to}
          </div>
          <div className="px-2">|</div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {teamSizeText}
          </div>
          <div className="px-2">|</div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {rolesText}
          </div>
        </div>

        {/* 概要 */}
        <p className="text-gray-800 mt-2">{description}</p>

        {/* ハイライト */}
        <ul className="list-disc list-inside mt-2 text-gray-800">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {/* フェーズ */}
        <div className="mt-3">
          <ProjectPhasesTimeline phases={phases} />
        </div>

        {/* 技術スタック */}
        <div className="flex flex-wrap gap-2 mt-3">
          {techs.map((tech) => (
            <Badge key={tech} className="bg-sky-900 text-white text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
