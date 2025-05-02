import { Table, TableBody, TableCell, TableHeader, TableRow } from "../table";
import { ProjectPhasesTimeline, type ProjectPhases } from "./project-phases";
import { ProjectTechTable, type ProjectTechs } from "./project-techs";

type Project = {
  name: string;
  from: string;
  to: string;
  description?: string;
  features?: string[];
  techs?: ProjectTechs;
  teamSize: number;
  teamSizeOffshore?: number;
  roles?: string[];
  phases: ProjectPhases;
};

function ProjectCard({
  name,
  from,
  to,
  description,
  features,
  techs,
  teamSize,
  teamSizeOffshore,
  roles,
  phases,
}: Project) {
  const rolesText = roles ? roles.join(" / ") : "";

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
          {features && (
            <div className="px-4">
              <ul className="list-disc pl-4 space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex mb-2 items-center">
        <div className="w-24 font-medium pr-2">役割</div>
        <div className="">{rolesText}</div>
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

      <ProjectTechList {...techs} />
    </div>
  );
}

function ProjectTechList({
  frontend,
  backend,
  database,
  server,
  others,
}: ProjectTechs) {
  const backendItems = [
    ...(backend ? backend : []),
    ...(database ? database : []),
  ];

  const frontendText = frontend ? frontend.join(" / ") : "";
  const backendText = backendItems ? backendItems.join(" / ") : "";
  const serverText = server ? server.join(" / ") : "";
  const othersText = others ? others.join(" / ") : "";

  return (
    <div className="mb-2">
      <div className="w-24 font-medium pr-2">使用技術</div>
      <div className="mt-1">
        <Table className="min-w-full divide-y divide-gray-300">
          <TableBody>
            {frontendText && (
              <TableRow>
                <TableCell className="text-sm font-medium">
                  フロントエンド
                </TableCell>
                <TableCell className="text-sm">{frontendText}</TableCell>
              </TableRow>
            )}
            {backendText && (
              <TableRow>
                <TableCell className="text-sm font-medium">
                  バックエンド
                </TableCell>
                <TableCell className="text-sm">{backendText}</TableCell>
              </TableRow>
            )}
            {serverText && (
              <TableRow>
                <TableCell className="text-sm font-medium">インフラ</TableCell>
                <TableCell className="text-sm">{serverText}</TableCell>
              </TableRow>
            )}
            {othersText && (
              <TableRow>
                <TableCell className="text-sm font-medium">その他</TableCell>
                <TableCell className="text-sm">{othersText}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export type { Project };

export { ProjectCard };
