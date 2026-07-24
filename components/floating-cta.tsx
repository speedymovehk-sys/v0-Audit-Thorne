'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { Language } from '@/lib/translations'

interface FloatingCtaProps {
  lang: Language
  onSchedule: () => void
}

export function FloatingCta({ lang, onSchedule }: FloatingCtaProps) {
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the viewport height (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.8, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={onSchedule}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 font-mono text-xs font-bold text-primary-foreground shadow-lg shadow-primary/25 cursor-pointer transition-colors hover:bg-primary/90 active:scale-95"
          aria-label={lang === 'EN' ? 'Enquire now' : '立即查詢'}
        >
          {/* Gentle pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 pointer-events-none" />
          <MessageCircle className="size-4 relative z-10" />
          <span className="relative z-10">
            {lang === 'EN' ? 'Enquire Now' : '立即查詢'}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
