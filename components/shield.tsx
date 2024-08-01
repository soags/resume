export type ShieldLinkProps = ShieldProps & {
  href: string;
}

export type ShieldProps = {
  alt: string;
  badgeContent: string;
  logo: string;
  logoColor: string;
}

export function ShieldLink({ alt, href, badgeContent, logo, logoColor  }: ShieldLinkProps) {
  return (
    <a href={href} target="_blank">
      <Shield 
        alt={alt}
        badgeContent={badgeContent}
        logo={logo}
        logoColor={logoColor}
      />
    </a>
  );
}

export function Shield({ alt, badgeContent, logo, logoColor  }: ShieldProps) {
  return (
    <img
      alt={alt}
      src={`https://img.shields.io/badge/${badgeContent}?&style=flat&logo=${logo}&logoColor=${logoColor}`}
    />
  );
}

