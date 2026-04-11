'use client'

import { ElementType, ReactNode, RefObject } from "react"
import { cn } from "@/lib/utils"

// Passthrough stub — animations are handled by CSS/IntersectionObserver (Reveal)
// instead of a scroll-timeline library to keep bundle size down.

interface TimelineContentProps {
  children?: ReactNode
  className?: string
  as?: ElementType
  // Unused props accepted so callers compile without changes
  animationNum?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timelineRef?: RefObject<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customVariants?: Record<string, any>
}

export function TimelineContent({
  children,
  className,
  as: Tag = "div",
}: TimelineContentProps) {
  const Component = Tag as ElementType
  return <Component className={cn(className)}>{children}</Component>
}
