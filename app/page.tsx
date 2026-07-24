'use client'

import { useState } from 'react'

import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { PracticeServices } from '@/components/practice-services'
import { AuditTimeline } from '@/components/audit-timeline'
import { ComparisonMatrix } from '@/components/comparison-matrix'
import { CatalystMethod } from '@/components/catalyst-method'
import { SocialProof } from '@/components/social-proof'
import { EngagementStrip } from '@/components/engagement-strip'
import { FaqSection } from '@/components/faq-section'
import { ContactView } from '@/components/contact-view'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { ActionModal } from '@/components/action-modal'
import { MeetOurPeople } from '@/components/meet-our-people'
import { FloatingCta } from '@/components/floating-cta'
import { Language } from '@/lib/translations'

type View = 'landing' | 'contact'

export default function Page() {
  const [view, setView] = useState<View>('landing')
  const [modalOpen, setModalOpen] = useState(false)
  const [lang, setLang] = useState<Language>('EN')

  const openModal = () => setModalOpen(true)
  const goContact = () => {
    setView('contact')
    window.scrollTo({ top: 0 })
  }
  const goLanding = () => {
    setView('landing')
    window.scrollTo({ top: 0 })
  }

  const handleNav = (href: string) => {
    if (view !== 'landing') {
      setView('landing')
    }
    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const toggleLang = (newLang: Language) => setLang(newLang)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader
        lang={lang}
        onLangChange={toggleLang}
        onSchedule={openModal}
        onContact={goContact}
        onNav={handleNav}
      />

      <main className="flex-1">
        {view === 'landing' ? (
          <>
            <HeroSection lang={lang} onSchedule={openModal} />
            <PracticeServices lang={lang} />
            <AuditTimeline lang={lang} />
            <ComparisonMatrix lang={lang} />
            <CatalystMethod lang={lang} />
            <SocialProof lang={lang} />
            <MeetOurPeople lang={lang} />
            <EngagementStrip lang={lang} onSchedule={openModal} />
            <FaqSection lang={lang} onSchedule={openModal} />
          </>
        ) : (
          <ContactView onBack={goLanding} onSuccess={openModal} />
        )}
      </main>

      <SiteFooter lang={lang} onSchedule={openModal} />
      <MobileCtaBar onSchedule={openModal} />
      <FloatingCta lang={lang} onSchedule={openModal} />
      <ActionModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  )
}
