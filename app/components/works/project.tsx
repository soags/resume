import { ProjectTechTable, type ProjectTechs } from "./project-techs";

type Project = {
  name: string;
  from: string;
  to: string;
  description?: string;
  features?: string[];
  techs?: ProjectTechs;
};

function ProjectCard({
  name,
  from,
  to,
  description,
  features,
  techs,
}: Project) {
  return (
    <div className="border rounded-xl px-4 py-2 print:break-inside-avoid ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h4 className="font-medium mb-1">{name}</h4>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span>
            {from} 〜 {to}
          </span>
        </div>
      </div>

      <div className="flex">
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
        {techs && (
          <div className="w-3xs flex-none">
            <ProjectTechTable {...techs} />
          </div>
        )}
      </div>
    </div>
  );
}

export type { Project };

export { ProjectCard };
