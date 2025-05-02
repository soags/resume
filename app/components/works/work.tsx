import { ProjectCard, type Project } from "./project";

type Work = {
  company: string;
  from: string;
  to: string;
  position: string;
  projects: Project[];
};

function WorkSection({ company, from, to, position, projects }: Work) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-bold">{company}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <span>
            {from} 〜 {to}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-2">{position}</p>

      <div className="flex flex-col space-y-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export type { Work };

export { WorkSection };
