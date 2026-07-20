'use client'

import { useState } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ContactViewProps {
  onBack: () => void
  onSuccess: () => void
}

const ENGAGEMENT_TYPES = [
  { value: 'review', label: 'Review Engagement' },
  { value: 'audit', label: 'Full GAAP Audit' },
  { value: 'ipo', label: 'IPO / PCAOB Readiness' },
  { value: 'ma', label: 'M&A Diligence Support' },
]

export function ContactView({ onBack, onSuccess }: ContactViewProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')
  const [engagement, setEngagement] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [touched, setTouched] = useState(false)

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const errors = {
    name: !name.trim(),
    email: !emailValid,
    designation: !designation.trim(),
    engagement: !engagement,
  }
  const hasErrors = Object.values(errors).some(Boolean)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (hasErrors || submitting) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      onSuccess()
    }, 1000)
  }

  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-20 md:py-28">
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="mb-8 text-muted-foreground"
      >
        <ArrowLeft data-icon="inline-start" />
        Back to home
      </Button>

      <span className="font-mono text-xs uppercase tracking-widest text-primary">
        Confidential Intake
      </span>
      <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Request a scope assessment
      </h1>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
        Tell us a little about your firm. A senior partner will respond within
        one business day. Everything you share is privileged.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-sm md:p-9"
      >
        <FieldGroup>
          <Field data-invalid={touched && errors.name ? true : undefined}>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              aria-invalid={touched && errors.name ? true : undefined}
            />
            {touched && errors.name && (
              <FieldError>Please enter your name.</FieldError>
            )}
          </Field>

          <Field data-invalid={touched && errors.email ? true : undefined}>
            <FieldLabel htmlFor="email">Corporate email</FieldLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@company.com"
              aria-invalid={touched && errors.email ? true : undefined}
            />
            {touched && errors.email && (
              <FieldError>Please enter a valid corporate email.</FieldError>
            )}
          </Field>

          <Field
            data-invalid={touched && errors.designation ? true : undefined}
          >
            <FieldLabel htmlFor="designation">
              Firm infrastructure designation
            </FieldLabel>
            <Input
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="e.g. CFO, Controller, VP Finance"
              aria-invalid={touched && errors.designation ? true : undefined}
            />
            {touched && errors.designation && (
              <FieldError>Please enter your role.</FieldError>
            )}
          </Field>

          <Field data-invalid={touched && errors.engagement ? true : undefined}>
            <FieldLabel htmlFor="engagement">Engagement type</FieldLabel>
            <Select value={engagement} onValueChange={setEngagement}>
              <SelectTrigger id="engagement" className="w-full">
                <SelectValue placeholder="Select an engagement type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ENGAGEMENT_TYPES.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {touched && errors.engagement && (
              <FieldError>Please choose an engagement type.</FieldError>
            )}
          </Field>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <Loader2 data-icon="inline-start" className="animate-spin" />
                Submitting
              </>
            ) : (
              'Request Assessment'
            )}
          </Button>
        </FieldGroup>
      </form>
    </section>
  )
}
