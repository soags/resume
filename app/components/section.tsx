import { cn } from "~/lib/utils";

type SectionProps = {
  title: string;
} & React.ComponentPropsWithoutRef<"section">;

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={cn(className)}>
      <h2 className="text-xl font-medium mb-2 border-b pb-2">{title}</h2>
      {children}
    </section>
  );
}
