"use client"
  
import type { ReactNode } from "react"
import { useInView } from "../hooks/use-in-view"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
  className?: string
}

export function AnimatedCard({ children, delay = 0, direction = "up", className = "" }: AnimatedCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isInView) {
      switch (direction) {
        case "up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "down":
          return `${baseClasses} opacity-0 -translate-y-8`
        case "left":
          return `${baseClasses} opacity-0 translate-x-8`
        case "right":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "scale":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
