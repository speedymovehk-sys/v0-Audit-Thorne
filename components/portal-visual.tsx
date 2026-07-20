'use client'

import { motion, useReducedMotion } from 'motion/react'

const RADIUS = 78
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const PROGRESS = 0.94 // 94% audit readiness

const CHECKPOINTS = [
  { label: 'Ledger Reconciliation', value: 'Complete' },
  { label: 'Controls Testing', value: 'Complete' },
  { label: 'Disclosure Review', value: 'In progress' },
]

export function PortalVisual() {
  const reduceMotion = useReducedMotion()
  const offset = CIRCUMFERENCE * (1 - PROGRESS)

  return (
    <div className="relative rounded-2xl border border-border bg-card p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Engagement Status
          </span>
          <span className="text-sm font-semibold text-foreground">
            Q3 Assurance Cycle
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 font-mono text-xs font-medium text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Live
        </span>
      </div>

      <div className="flex items-center justify-center py-4">
        <div className="relative flex size-48 items-center justify-center">
          <svg
            className="size-48 -rotate-90"
            viewBox="0 0 180 180"
            role="img"
            aria-label="Audit readiness at 94 percent"
          >
            <circle
              cx="90"
              cy="90"
              r={RADIUS}
              fill="none"
              stroke="var(--border)"
              strokeWidth="10"
            />
            <motion.circle
              cx="90"
              cy="90"
              r={RADIUS}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: reduceMotion ? offset : CIRCUMFERENCE }}
              whileInView={{ strokeDashoffset: offset }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="font-mono text-4xl font-bold tracking-tight text-foreground">
              94%
            </span>
            <span className="text-xs text-muted-foreground">Audit Ready</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
        {CHECKPOINTS.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-mono text-xs font-medium text-foreground">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
