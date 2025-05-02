import { cn } from "~/lib/utils";

type ProjectPhases = {
  requirements: boolean;
  design: boolean;
  development: boolean;
  testing: boolean;
  deployment: boolean;
  maintenance: boolean;
  others: boolean;
};

const phaseNames = {
  requirements: "要件定義",
  design: "設計",
  development: "実装",
  testing: "テスト",
  deployment: "導入",
  maintenance: "運用/保守",
  others: "その他",
};

function ProjectPhasesTimeline({ phases }: { phases: ProjectPhases }) {

  if (!phases) return null;

  return (
    <div className="flex mb-2 items-center">
      <div className="w-24 font-medium pr-2">担当工程</div>
      <div className="flex items-center text-sm space-x-1">
        {Object.keys(phases).map((phaseKey, index) => (
          <div
            key={index}
            className={cn(
              "w-24 border text-center rounded-lg py-1",
              phases[phaseKey as keyof ProjectPhases]
                ? "bg-blue-300"
                : "bg-gray-50 border-gray-300"
            )}
          >
            {phaseNames[phaseKey as keyof ProjectPhases]}
          </div>
        ))}
      </div>
    </div>
  );
}

export type { ProjectPhases };

export { ProjectPhasesTimeline };
