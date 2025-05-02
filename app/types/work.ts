import type { Project } from "./project";

type Work = {
  company: string;
  from: string;
  to: string;
  position: string;
  projects: Project[];
};

export type { Work };