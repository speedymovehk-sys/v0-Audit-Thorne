'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'section' | 'div'
  id?: string
  'aria-label'?: string
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  as = 'section',
  id,
  'aria-label': ariaLabel,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = as === 'section' ? motion.section : motion.div

  return (
    <MotionTag
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
