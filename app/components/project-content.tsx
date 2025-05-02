import type { Project } from "~/types/work";
import { Badge } from "./ui/badge";

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
    <div className="print:break-inside-avoid pt-8">
      <div className="border-l-4 border-sky-900 pl-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">
          {from} - {to} | {teamSizeText} |{rolesText}
        </p>

        {/* 概要 */}
        <p className="text-gray-700">{description}</p>

        {/* ハイライト */}
        <ul className="list-disc list-inside mt-3 text-gray-700">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        {/* 技術スタック */}
        <div className="flex flex-wrap gap-2 mt-3">
          {techs.map((tech) => (
            <Badge key={tech} className="bg-sky-900 text-white">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}