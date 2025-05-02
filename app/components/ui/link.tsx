import { cn } from "~/lib/utils";

export function Link({
  className,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn("text-blue-600 hover:underline", className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children ?? href}
    </a>
  );
}
