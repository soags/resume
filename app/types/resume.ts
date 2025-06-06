import type { Work } from './work'

export type Resume = {
  basics: Basics
  techStack: TechStack
  highlights: string[]
  work: Work[]
  certificates: Certification[]
  promotions: Promotion[]
  sideProjects: SideProject[]
}

export type Basics = {
  updatedAt: string
  name: string
  label: string
  summary: string
  github: string
  zenn: string
}

export type TechStack = {
  frontend: string[]
  backend: string[]
  infrastructure: string[]
  tools: string[]
}

export type Certification = {
  name: string
  year: number
  month: number
}

export type Promotion = {
  title: string
  description: string
}

export type SideProject = {
  title: string
  url: string
  keywords: string[]
}
