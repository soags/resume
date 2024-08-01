import { Shield, ShieldLink, ShieldLinkProps, ShieldProps } from "./shield";

export type PortfolioCardProps = {
  href: string;
  title: string;
  description: string;
  links: ShieldLinkProps[];
  techs: ShieldProps[];
}

export function PortfolioCard({
  href,
  title,
  description,
  links,
  techs,
}: PortfolioCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col space-y-2">
      <h3 className="text-lg font-bold">
        <a
          className="text-blue-500 underline"
          href={href}
          target="_blank"
        >
          {title}
        </a>
      </h3>

      <div className="grow">
        <p>{description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {links.map((link) => (
          <ShieldLink key={link.alt} {...link} />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {techs.map((tech) => (
          <Shield key={tech.alt} {...tech} />
        ))}
      </div>
    </div>
  );
}
