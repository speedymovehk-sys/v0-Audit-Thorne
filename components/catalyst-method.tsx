'use client'

import { Database, ShieldAlert, Users } from 'lucide-react'

import { AnimatedSection } from '@/components/animated-section'

const PILLARS = [
  {
    icon: Database,
    title: 'Data-Native Fieldwork',
    body: 'We ingest directly from your ledger, billing, and cap-table systems. No spreadsheet marathons, no month-end freeze on your finance team.',
  },
  {
    icon: ShieldAlert,
    title: 'Risk-First Scoping',
    body: 'Every engagement opens with a materiality and controls map, so effort concentrates where regulators and acquirers actually look.',
  },
  {
    icon: Users,
    title: 'Partner-Led Throughout',
    body: 'A signing partner owns your file end to end. You get senior judgment on every call, never a rotating cast of first-year associates.',
  },
]

export function CatalystMethod() {
  return (
    <AnimatedSection
      id="methodology"
      aria-label="Our methodology"
      className="w-full border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            The Catalyst Method
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Rigor without the drag on your team
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Three operating principles let us deliver institutional assurance on
            a startup&apos;s timeline.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <pillar.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
