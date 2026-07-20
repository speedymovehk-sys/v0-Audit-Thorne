'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { PortalVisual } from '@/components/portal-visual'

interface HeroSectionProps {
  onSchedule: () => void
}

const TRUSTED_BY = [
  'NORTHBRIDGE',
  'VERTEX LABS',
  'MERIDIAN CO',
  'ALTUS GROUP',
  'CADENCE IO',
]

export function HeroSection({ onSchedule }: HeroSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="top" className="w-full border-b border-border">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs font-medium text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            PCAOB-aligned methodology
          </span>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Institutional-grade audits. Frictionless execution.
          </h1>

          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Precision auditing, regulatory compliance, and M&amp;A/IPO readiness
            for high-growth mid-market enterprises and VC-backed technology
            corporations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={onSchedule}>
              Initiate Scope Assessment
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" render={<a href="#methodology" />}>
              Our Methodology
            </Button>
          </div>

          <div className="mt-14 w-full">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Compliance infrastructure trusted by
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TRUSTED_BY.map((name) => (
                <span
                  key={name}
                  className="font-mono text-sm font-semibold tracking-tight text-muted-foreground/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <PortalVisual />
        </motion.div>
      </div>
    </section>
  )
}
