'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Language, TRANSLATIONS } from '@/lib/translations'

interface SiteHeaderProps {
  lang: Language
  onLangChange: (lang: Language) => void
  onSchedule: () => void
  onContact: () => void
  onNav?: (href: string) => void
}

function Wordmark({ onNav }: { onNav?: (href: string) => void }) {
  return (
    <a
      href="#top"
      onClick={(e) => {
        if (onNav) {
          e.preventDefault()
          onNav('#top')
        }
      }}
      className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-foreground cursor-pointer"
    >
      <span>THORNE</span>
      <span aria-hidden className="h-4 w-px bg-border" />
      <span className="text-muted-foreground">ASSURANCE</span>
    </a>
  )
}

export function SiteHeader({
  lang,
  onLangChange,
  onSchedule,
  onContact,
  onNav,
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = TRANSLATIONS[lang]

  const NAV_LINKS = [
    { label: t.navMethodology, href: '#methodology' },
    { label: t.navServices, href: '#services' },
    { label: t.navTimeline, href: '#timeline' },
    { label: t.navPeople, href: '#people' },
    { label: t.navFAQ, href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Wordmark onNav={onNav} />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (onNav) {
                  e.preventDefault()
                  onNav(link.href)
                }
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onContact}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            {t.navContact}
          </button>
        </nav>

        {/* Desktop Right items */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={() => onLangChange(lang === 'EN' ? 'ZH' : 'EN')}
            className="text-xs font-mono font-bold tracking-tight rounded-lg border border-border px-3 py-1.5 hover:border-foreground/30 cursor-pointer transition-colors"
          >
            {lang === 'EN' ? '繁體中文' : 'English'}
          </button>
          <Button size="lg" onClick={onSchedule}>
            {t.btnSchedule}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          <Button size="sm" onClick={onSchedule} className="text-[11px] font-semibold h-8 px-2.5 cursor-pointer">
            {t.btnSchedule}
          </Button>

          <button
            type="button"
            onClick={() => onLangChange(lang === 'EN' ? 'ZH' : 'EN')}
            className="text-xs font-mono font-bold tracking-tight rounded-lg border border-border h-8 px-2 hover:border-foreground/30 cursor-pointer transition-colors"
          >
            {lang === 'EN' ? '繁' : 'EN'}
          </button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="font-mono tracking-tight">
                  THORNE ASSURANCE
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 mt-6">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (onNav) {
                            e.preventDefault()
                            onNav(link.href)
                          }
                        }}
                        className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <button
                      type="button"
                      onClick={onContact}
                      className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
                    />
                  }
                >
                  {t.navContact}
                </SheetClose>
              </nav>
              <div className="mt-auto p-4 flex flex-col gap-3">
                <SheetClose
                  render={
                    <button
                      type="button"
                      onClick={onSchedule}
                      className="w-full rounded-lg bg-primary px-4 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
                    />
                  }
                >
                  {t.btnSchedule}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
