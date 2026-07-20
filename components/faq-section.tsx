'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'

interface FaqSectionProps {
  onSchedule: () => void
}

const FAQS = [
  {
    q: 'How is Thorne different from a Big Four firm?',
    a: 'You get a signing partner on every engagement instead of a rotating team of associates, delivery timelines measured in weeks, and pricing built for growth-stage economics — without compromising on PCAOB-aligned rigor.',
  },
  {
    q: 'Can you meet an investor or acquisition deadline?',
    a: 'Yes. Risk-first scoping and direct system integrations let us compress fieldwork dramatically. We routinely deliver signed opinions ahead of financing wires and diligence deadlines.',
  },
  {
    q: 'What do you need from our finance team to start?',
    a: 'Read access to your ledger, billing, and cap-table systems, plus a single point of contact. We handle the reconciliation and workpaper build so your team can keep operating.',
  },
]

export function FaqSection({ onSchedule }: FaqSectionProps) {
  return (
    <AnimatedSection
      id="faq"
      aria-label="Frequently asked questions"
      className="w-full border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions, answered plainly
          </h2>
        </div>

        <Accordion openMultiple={false} className="mt-10">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-base">{faq.q}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <p className="text-pretty text-lg font-medium text-foreground">
            Still have questions? Talk to Marcus.
          </p>
          <Button size="lg" onClick={onSchedule}>
            Talk to Marcus
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
