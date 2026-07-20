'use client'

import { useState } from 'react'

import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ScopeEstimator } from '@/components/scope-estimator'
import { CatalystMethod } from '@/components/catalyst-method'
import { SocialProof } from '@/components/social-proof'
import { EngagementStrip } from '@/components/engagement-strip'
import { FaqSection } from '@/components/faq-section'
import { ContactView } from '@/components/contact-view'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { ActionModal } from '@/components/action-modal'

type View = 'landing' | 'contact'

export default function Page() {
  const [view, setView] = useState<View>('landing')
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const goContact = () => {
    setView('contact')
    window.scrollTo({ top: 0 })
  }
  const goLanding = () => {
    setView('landing')
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader onSchedule={openModal} onContact={goContact} />

      <main className="flex-1">
        {view === 'landing' ? (
          <>
            <HeroSection onSchedule={openModal} />
            <ScopeEstimator onSchedule={openModal} />
            <CatalystMethod />
            <SocialProof />
            <EngagementStrip onSchedule={openModal} />
            <FaqSection onSchedule={openModal} />
          </>
        ) : (
          <ContactView onBack={goLanding} onSuccess={openModal} />
        )}
      </main>

      <SiteFooter onSchedule={openModal} />
      <MobileCtaBar onSchedule={openModal} />
      <ActionModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  )
}
