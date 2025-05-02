import { cn } from "~/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  title?: string;
};

export function Section({ title, className, children, ...props }: SectionProps) {
  return (
    <section className={cn(className, "mt-8")} {...props}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}