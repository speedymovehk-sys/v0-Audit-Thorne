'use client'

import { Check } from 'lucide-react'

import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'

interface EngagementStripProps {
  onSchedule: () => void
}

const CRITERIA = [
  'Annual revenue between $2M and $250M+',
  'Venture-backed or preparing for an institutional round',
  'Approaching an audit, acquisition, or IPO milestone',
  'A finance team that wants senior judgment, not churn',
  'Systems-of-record we can connect to directly',
]

export function EngagementStrip({ onSchedule }: EngagementStripProps) {
  return (
    <AnimatedSection
      aria-label="Executive assurance mandate"
      className="w-full border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-l-4 border-primary p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                The Executive Mandate
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground">
                Is your firm ready for institutional assurance?
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                We take a limited number of engagements each quarter to protect
                partner-led delivery. Most firms we work with match the profile
                below.
              </p>
              <div className="mt-8">
                <Button size="lg" onClick={onSchedule}>
                  Request The Mandate
                </Button>
              </div>
            </div>

            <div className="bg-accent p-8 md:p-10">
              <ul className="flex flex-col gap-4">
                {CRITERIA.map((criterion) => (
                  <li key={criterion} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3" />
                    </span>
                    <span className="text-pretty leading-relaxed text-foreground">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
