'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Language, TRANSLATIONS } from '@/lib/translations'

interface HeroSectionProps {
  lang: Language
  onSchedule: () => void
}

export function HeroSection({ lang, onSchedule }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const t = TRANSLATIONS[lang]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Subtle parallax on the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  // Fade out content as user scrolls away
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -40])

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Full-viewport Background Image with Parallax */}
      <motion.div
        style={{ y: reduceMotion ? 0 : bgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="/images/hero_hk_suite.png"
          alt="Thorne & Co. Financial Advisory Suite in Central, Hong Kong"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Gradient Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70 pointer-events-none" />

      {/* Content — Vertically & Horizontally Centered */}
      <motion.div
        style={{
          opacity: reduceMotion ? 1 : contentOpacity,
          y: reduceMotion ? 0 : contentY,
        }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 font-mono text-xs font-semibold text-white/90">
            <ShieldCheck className="size-3.5 text-white animate-pulse" />
            {t.heroBadge}
          </span>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl max-w-5xl leading-[1.1]">
            {t.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-white/80">
            {t.heroBody}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={onSchedule} className="shadow-lg shadow-primary/30">
              {t.heroBtnConsult}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#services" />}
              className="border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 backdrop-blur-sm"
            >
              {t.heroBtnServices}
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll-down Indicator */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
          {lang === 'EN' ? 'Scroll' : '向下捲動'}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
