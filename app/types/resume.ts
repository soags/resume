import type { Work } from "./work";

export type Resume = {
  basics: Basics;
  techStack: TechStack;
  highlights: string[];
  work: Work[];
  education: Education;
  certificates: Certification[];
  promotions: Promotion[];
};

export type Basics = {
  updatedAt: string;
  name: string;
  label: string;
  summary: string;
  // github: string;
  // zenn: string;
};

export type TechStack = {
  frontend: string[];
  backend: string[];
  infrastructure: string[];
  tools: string[];
};

export type Education = {
  institution: string;
  area: string;
  startDate: string;
  endDate: string;
};

export type Certification = {
  name: string;
  year: number;
};

export type Promotion = {
  title: string;
  description: string;
};
