export function Paper({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
