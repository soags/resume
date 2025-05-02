import type { Work } from "./work";

type Resume = {
  updatedAt: string;
  name: string;
  techStack: TechStack;
  highlights: string[];
  works: Work[];
  certifications: Certification[];
};

type TechStack = {
  frontend: string[];
  backend: string[];
  infrastructure: string[];
  tools: string[];
}

type Certification = {
  name: string;
  year: number;
}

export type { Resume, TechStack, Certification };