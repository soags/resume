import { cn } from '~/lib/utils'

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  title?: string
}

export function Section({
  title,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(className, 'mt-6')} {...props}>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      {children}
    </section>
  )
}
