'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import {
  FileText,
  FileSignature,
  FileSpreadsheet,
  Building,
  Globe2,
  Stamp,
  ArrowRight,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Language, TRANSLATIONS } from '@/lib/translations'

interface PracticeServicesProps {
  lang: Language
}

export function PracticeServices({ lang }: PracticeServicesProps) {
  const t = TRANSLATIONS[lang]
  const reduceMotion = useReducedMotion()

  const SERVICES = [
    {
      icon: FileText,
      title: t.service1Title,
      body: t.service1Body,
      link: '#contact',
    },
    {
      icon: FileSignature,
      title: t.service2Title,
      body: t.service2Body,
      link: '#contact',
    },
    {
      icon: Building,
      title: t.service3Title,
      body: t.service3Body,
      link: '#contact',
    },
    {
      icon: FileSpreadsheet,
      title: t.service4Title,
      body: t.service4Body,
      link: '#contact',
    },
    {
      icon: Globe2,
      title: t.service5Title,
      body: t.service5Body,
      link: '#contact',
    },
    {
      icon: Stamp,
      title: t.service6Title,
      body: t.service6Body,
      link: '#contact',
    },
  ]

  return (
    <AnimatedSection
      id="services"
      aria-label="Our practice services"
      className="w-full border-b border-border py-20 md:py-28 bg-card relative overflow-hidden"
    >
      {/* Subtle Dot Grid Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(var(--border) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        {/* Left Border Headline Accent */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-8 w-1 bg-primary rounded-full shrink-0 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                {t.servicesSubtitle}
              </span>
            </div>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.servicesTitle}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.servicesBody}
            </p>
          </div>
        </div>

        {/* Wide Photo Banner — reusing existing boardroom image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 w-full rounded-2xl border border-border overflow-hidden relative aspect-[21/6] max-h-[220px] shadow-sm"
        >
          <Image
            src="/images/executive_boardroom.png"
            alt="Thorne professional advisory boardroom"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center px-8 md:px-12">
            <p className="text-sm md:text-base font-medium text-foreground max-w-md leading-relaxed">
              {lang === 'EN'
                ? 'Partner-led delivery across every service line — from statutory audit to corporate restructuring.'
                : '每項服務均由合夥人親自主導 — 從法定審計到企業重組。'}
            </p>
          </div>
        </motion.div>

        {/* Service Cards Grid with Staggered Animations */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-background p-8 shadow-sm transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
            >
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent-muted text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary group-hover:underline"
                >
                  {t.servicesEnquire}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
