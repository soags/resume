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
  languages: string[];
  frameworks: string[];
  tools: string[];
}

type Certification = {
  name: string;
  year: number;
}

export type { Resume, TechStack, Certification };