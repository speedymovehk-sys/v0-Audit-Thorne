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

interface SiteHeaderProps {
  onSchedule: () => void
  onContact: () => void
}

const NAV_LINKS = [
  { label: 'Our Methodology', href: '#methodology' },
  { label: 'Assurance', href: '#assurance' },
  { label: 'FAQ', href: '#faq' },
]

function Wordmark() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-foreground"
    >
      <span>THORNE</span>
      <span aria-hidden className="h-4 w-px bg-border" />
      <span className="text-muted-foreground">ASSURANCE</span>
    </a>
  )
}

export function SiteHeader({ onSchedule, onContact }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Wordmark />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onContact}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:block">
          <Button size="lg" onClick={onSchedule}>
            Schedule Audit
          </Button>
        </div>

        <div className="md:hidden">
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
              <nav className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
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
                      className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    />
                  }
                >
                  Contact
                </SheetClose>
              </nav>
              <div className="mt-auto p-4">
                <SheetClose
                  render={
                    <Button
                      size="lg"
                      className="w-full"
                      onClick={onSchedule}
                    />
                  }
                >
                  Schedule Audit
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
