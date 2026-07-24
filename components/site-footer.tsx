'use client'

import { ArrowUp } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Language, TRANSLATIONS } from '@/lib/translations'

interface SiteFooterProps {
  lang?: Language
  onSchedule: () => void
}

export function SiteFooter({ lang = 'EN', onSchedule }: SiteFooterProps) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const t = TRANSLATIONS[lang]

  return (
    <footer className="w-full border-t border-border bg-background pb-24 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-foreground">
              <span>THORNE</span>
              <span aria-hidden className="h-4 w-px bg-border" />
              <span className="text-muted-foreground">ASSURANCE</span>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.footerDesc}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button size="lg" onClick={onSchedule}>
              {t.btnSchedule}
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToTop}>
              {t.footerBtnBackTop}
              <ArrowUp data-icon="inline-end" />
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {t.footerLegal}
          </span>
          <span>{t.footerCompliance}</span>
        </div>
      </div>
    </footer>
  )
}
