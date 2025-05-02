import { cn } from "~/lib/utils";

export function Link({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a className={cn("text-blue-600 hover:underline", className)} {...props} />
  );
}
