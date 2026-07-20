'use client'

import { useState } from 'react'

import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

interface ScopeEstimatorProps {
  onSchedule: () => void
}

type Step = 1 | 2 | 3

const TIERS: Record<
  Step,
  {
    band: string
    revenue: string
    window: string
    tier: string
    note: string
  }
> = {
  1: {
    band: 'Seed to Series A',
    revenue: '$2M–$15M',
    window: '4–6 weeks',
    tier: 'Review Engagement',
    note: 'Foundational assurance and investor-ready financials.',
  },
  2: {
    band: 'Series B to Growth',
    revenue: '$15M–$75M',
    window: '6–9 weeks',
    tier: 'Full GAAP Audit',
    note: 'Institutional-grade audit with controls attestation.',
  },
  3: {
    band: 'Pre-IPO / M&A',
    revenue: '$75M+',
    window: '9–14 weeks',
    tier: 'IPO Readiness + PCAOB',
    note: 'Transaction-grade assurance for public-market scrutiny.',
  },
}

const METRICS = (step: Step) => [
  { label: 'Estimated Revenue Band', value: TIERS[step].revenue },
  { label: 'Delivery Window', value: TIERS[step].window },
  { label: 'Compliance Tier', value: TIERS[step].tier },
]

export function ScopeEstimator({ onSchedule }: ScopeEstimatorProps) {
  const [step, setStep] = useState<Step>(2)

  return (
    <AnimatedSection
      id="assurance"
      aria-label="Audit scope estimator"
      className="w-full border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Scope Estimator
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Size your engagement in seconds
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Move the slider to your company&apos;s stage. We&apos;ll map the
            assurance tier, delivery window, and revenue band we typically
            engage at.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Company stage
            </span>
            <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-primary">
              {TIERS[step].band}
            </span>
          </div>

          <div className="mt-6">
            <Slider
              value={[step]}
              min={1}
              max={3}
              step={1}
              aria-label="Company stage"
              onValueChange={(value) => {
                const next = Array.isArray(value) ? value[0] : value
                setStep(next as Step)
              }}
            />
            <div className="mt-3 flex justify-between font-mono text-xs text-muted-foreground">
              <span>Seed–A</span>
              <span>Series B</span>
              <span>Pre-IPO</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {METRICS(step).map((metric) => (
              <div key={metric.label} className="bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-2 text-pretty text-xl font-bold tracking-tight text-primary">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {TIERS[step].note}
          </p>

          <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto" onClick={onSchedule}>
              Lock In This Scope
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
