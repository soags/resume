export type Work = {
  company: string
  from: string
  to: string
  position: string
  projects: Project[]
}

export type Project = {
  name: string
  from: string
  to: string
  description?: string
  highlights: string[]
  roles: string[]
  teamSize: number
  teamSizeOffshore?: number
  phases: ProjectPhases
  techStack: ProjectTechStack
}

export type ProjectPhases = {
  requirements: boolean
  design: boolean
  development: boolean
  testing: boolean
  deployment: boolean
  maintenance: boolean
  others: boolean
}

export const projectPhaseNames: Record<keyof ProjectPhases, string> = {
  requirements: '要件定義',
  design: '設計',
  development: '実装',
  testing: 'テスト',
  deployment: '導入',
  maintenance: '運用/保守',
  others: 'その他',
}

export type ProjectTechStack = {
  frontend?: string[]
  backend?: string[]
  infrastructure?: string[]
}
