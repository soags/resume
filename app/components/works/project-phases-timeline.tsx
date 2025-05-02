import { cn } from "~/lib/utils";
import { projectPhaseNames, type ProjectPhases } from "~/types/project";

function ProjectPhasesTimeline({ phases }: { phases: ProjectPhases }) {
  return (
    <div className="flex mb-2 items-center">
      <div className="w-24 font-medium pr-2">担当工程</div>
      <div className="flex items-center text-sm space-x-1">
        {Object.entries(phases).map(([key, value]) => {
          const phaseKey = key as keyof ProjectPhases;
          return (
            <div
              key={key}
              className={cn(
                "w-24 border text-center rounded-lg py-1",
                value ? "bg-blue-300" : "bg-gray-50 border-gray-300"
              )}
            >
              {projectPhaseNames[phaseKey]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ProjectPhasesTimeline };
