import { Shield, ShieldProps } from "./shield";

export type ProjectCardProps = {
  title: string;
  description: string;
  teamSize: string;
  roles: string[];
  highlights: string[];
  techs: ShieldProps[];
};

export function ProjectCard({
  title,
  description,
  teamSize,  
  roles,
  highlights,
  techs,
}: ProjectCardProps) {
  return (
    <div className="border p-4 rounded-lg flex flex-col gap-2">
      <h5 className="font-bold text-lg py-1">{title}</h5>
      <p>{description}</p>
      <ul>
        {teamSize ? <li>{ `チーム: ${teamSize}` }</li> : null }
        {roles ? <li>{ `役割: ${ roles.join(' / ')} ` }</li> : null }
      </ul>
      <div>
        <h4 className="font-bold py-1">実現したこと</h4>
        <ul className="ml-6 list-disc [&>li]:mt-1">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 items-center py-2">
        {techs.map((tech) => (
          <Shield key={tech.alt} {...tech} />
        ))}
      </div>
    </div>
  );
}
