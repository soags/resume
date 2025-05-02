export function Paper({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={`px-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
