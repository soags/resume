import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router'
import { cn } from '~/lib/utils'

export function Link({ className, ...props }: RouterLinkProps) {
  return (
    <RouterLink
      className={cn('text-blue-600 hover:underline inline-block', className)}
      {...props}
    />
  )
}
