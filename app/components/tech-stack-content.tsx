import type { TechStack } from "~/types/resume";
import { Badge } from "./ui/badge";

function TechStackContent({ techStack }: { techStack: TechStack }) {
  const { frontend, backend, infrastructure, tools } = techStack;

  return (
    <div className="space-y-2">
      <TechStackRow title="フロントエンド" items={frontend} />
      <TechStackRow title="バックエンド" items={backend} />
      <TechStackRow title="インフラ" items={infrastructure} />
      <TechStackRow title="ツール" items={tools} />
    </div>
  );
}

function TechStackRow({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="font-medium">{title}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {items.map((item) => (
          <Badge key={item} variant="outline" className="bg-sky-900 text-white text-sm font-medium">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export { TechStackContent };
