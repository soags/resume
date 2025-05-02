import type { Work } from "./work";

type Resume = {
  basics: Basics;
  techStack: TechStack;
  highlights: string[];
  work: Work[];
  certificates: Certification[];
  promotions: Promotion[];
};

type Basics = {
  updatedAt: string;
  name: string;
  label: string;
  summary: string;
  // github: string;
  // zenn: string;
};

type TechStack = {
  frontend: string[];
  backend: string[];
  infrastructure: string[];
  tools: string[];
};

type Certification = {
  name: string;
  year: number;
};

type Promotion = {
  title: string;
  description: string;
};

export type { Resume, TechStack, Certification, Promotion };
