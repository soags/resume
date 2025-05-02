import { cn } from '~/lib/utils'
import { projectPhaseNames, type ProjectPhases } from '~/types/work'
import { CircleCheckBig } from 'lucide-react'

function ProjectPhasesTimeline({ phases }: { phases: ProjectPhases }) {
  return (
    <div className="flex items-center">
      {Object.entries(phases).map(([key, value], index) => {
        const phaseKey = key as keyof ProjectPhases
        const isActive = value === true
        const name = projectPhaseNames[phaseKey]
        const isFirst = index === 0
        const isLast = index === Object.keys(phases).length - 1
        return (
          <div
            key={key}
            className={cn(
              'w-20 px-2 border flex justify-center items-center flex-col pt-2 pb-1',
              isFirst && 'rounded-l-lg',
              isLast && 'rounded-r-lg'
            )}
          >
            <div className="h-6">
              {isActive ? (
                <CircleCheckBig className="h-6 w-6 text-sky-900" />
              ) : null}
            </div>
            <div className="mt-1 text-xs">{name}</div>
          </div>
        )
      })}
    </div>
  )
}

export { ProjectPhasesTimeline }
