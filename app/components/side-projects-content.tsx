import { Github, Globe, TerminalSquare } from 'lucide-react'
import { Badge } from './ui/badge'
import { Link } from './ui/link'
import type { Basics, SideProject } from '~/types/resume'

export function SideProjectsContent({
  basics,
  sideProjects,
}: {
  basics: Basics
  sideProjects: SideProject[]
}) {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub */}
        <SideProjectCard icon={<Github className="h-5 w-5" />} title="GitHub">
          <Link to={basics.github} target="_blank">
            {basics.github}
          </Link>
        </SideProjectCard>

        {/* Zenn */}
        <SideProjectCard icon={<Globe className="h-5 w-5" />} title="Zenn">
          <Link to={basics.zenn} target="_blank">
            {basics.zenn}
          </Link>
        </SideProjectCard>
      </div>

      {/* 個人開発 */}
      <SideProjectCard
        icon={<TerminalSquare className="h-5 w-5" />}
        title="個人開発"
      >
        <div className="space-y-4">
          {sideProjects.map((project) => (
            <div key={project.title} className="pl-4 border-l-2 border-sky-900">
              <p className="font-medium">{project.title}</p>
              <Link to={project.url} target="_blank" className="mb-1">
                {project.url}
              </Link>
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((keyword) => (
                  <Badge className="bg-sky-900 text-white" key={keyword}>
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SideProjectCard>
    </div>
  )
}

function SideProjectCard({
  icon,
  title,
  children,
}: React.PropsWithChildren<{ icon: React.ReactNode; title: string }>) {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  )
}
