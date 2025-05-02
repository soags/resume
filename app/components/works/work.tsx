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
      <h3 className="font-bold mb-1">{company}</h3>
      <p className="text-gray-600 text-sm mb-2">
        {from} 〜 {to} | {position}
      </p>
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
