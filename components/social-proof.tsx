'use client'

import { Star } from 'lucide-react'

import { AnimatedSection } from '@/components/animated-section'

const CASES = [
  {
    metric: '11 days',
    metricLabel: 'to signed audit opinion post-fieldwork',
    quote:
      'Thorne closed our first full GAAP audit ahead of our Series C wire. Diligence was a non-event because the file was already institutional.',
    name: 'CFO',
    company: 'Northbridge Robotics (fictional)',
  },
  {
    metric: '$240M',
    metricLabel: 'acquisition cleared with zero requalifications',
    quote:
      'The acquirer&apos;s auditors accepted our workpapers without a single restatement request. That is the whole ballgame in an M&A close.',
    name: 'VP Finance',
    company: 'Vertex Labs (fictional)',
  },
  {
    metric: 'S-1 ready',
    metricLabel: 'PCAOB-grade files delivered pre-IPO',
    quote:
      'We walked into IPO readiness with three years of clean, PCAOB-aligned opinions. Underwriter counsel called it the smoothest file they had seen.',
    name: 'Controller',
    company: 'Meridian Compute (fictional)',
  },
]

export function SocialProof() {
  return (
    <AnimatedSection
      aria-label="Corporate transaction success"
      className="w-full border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Corporate Transaction Success
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Assurance that survives real scrutiny
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASES.map((item) => (
            <figure
              key={item.company}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mt-5 text-3xl font-bold tracking-tight text-primary">
                {item.metric}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.metricLabel}
              </p>
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-muted-foreground">, {item.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Illustrative engagements. Client identities and metrics are fictional
          and shown for demonstration purposes only.
        </p>
      </div>
    </AnimatedSection>
  )
}
