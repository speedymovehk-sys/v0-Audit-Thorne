'use client'

import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { Language } from '@/lib/translations'

interface FaqSectionProps {
  lang: Language
  onSchedule: () => void
}

const FAQS_EN = [
  {
    q: 'How is Thorne different from a Big Four firm in Hong Kong?',
    a: 'You get direct involvement and signature from an experienced HKICPA Practising Partner instead of a rotating team of junior associates. Our timelines are measured in weeks rather than quarters, with transparent upfront pricing tailored for high-growth firms.',
  },
  {
    q: 'Can you meet tight IRD Profits Tax Return filing deadlines?',
    a: 'Yes. By utilizing data-native ledger ingestion and risk-focused scoping, we compress the traditional statutory audit timeline. We guarantee delivery of signed opinions and completed BIR51 Profits Tax Returns ahead of tax scheme deadlines.',
  },
  {
    q: 'What are the statutory audit requirements for HK companies under Cap. 622?',
    a: 'Under the Hong Kong Companies Ordinance (Cap. 622), all limited companies incorporated in Hong Kong are legally mandated to perform an annual statutory audit of their financial statements by a certified Practising CPA, regardless of company size.',
  },
]

const FAQS_ZH = [
  {
    q: 'Thorne 與四大會計師事務所有何不同？',
    a: '您可直接獲得資深 HKICPA 執業合夥人的參與及簽署，而非由初級助理輪替處理。我們的時間線以週計算而非按季度，定價透明且針對高成長企業度身訂造。',
  },
  {
    q: '你們能否滿足緊迫的稅務局利得稅申報截止日期？',
    a: '可以。透過數據原生帳簿導入及聚焦風險的範圍界定，我們壓縮了傳統法定審計的時間線。我們保證在稅務計劃截止日期前交付已簽署的審計意見書及已完成的 BIR51 利得稅報稅表。',
  },
  {
    q: '根據第622章，香港公司的法定審計要求是什麼？',
    a: '根據香港《公司條例》(第622章)，所有在香港註冊成立的有限公司均須由認證執業會計師對其財務報表進行年度法定審計，不論公司規模大小。',
  },
]

export function FaqSection({ lang, onSchedule }: FaqSectionProps) {
  const faqs = lang === 'EN' ? FAQS_EN : FAQS_ZH

  return (
    <AnimatedSection
      id="faq"
      aria-label="Frequently asked questions"
      className="w-full border-b border-border py-20 md:py-28 bg-[#fafaf8]"
    >
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {lang === 'EN' ? 'FAQ' : '常見問題'}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {lang === 'EN' ? 'Questions, answered plainly' : '常見問題，清晰解答'}
          </h2>
        </div>

        <Accordion multiple={false} className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-base text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex flex-col sm:flex-row">
            {/* Partner photo */}
            <div className="relative w-full sm:w-48 shrink-0 aspect-square sm:aspect-auto overflow-hidden bg-muted">
              <Image
                src="/images/avatar_hk_cfo.png"
                alt="Andrew Lam, Managing Partner"
                fill
                sizes="(max-width: 640px) 100vw, 192px"
                className="object-cover object-top"
              />
            </div>
            {/* Text + CTA */}
            <div className="flex flex-col justify-center gap-4 p-8">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                  {lang === 'EN' ? 'Managing Partner' : '管理合夥人'}
                </p>
                <p className="mt-1 text-lg font-bold text-foreground">
                  {lang === 'EN' ? 'Andrew Lam (HKICPA Practising Member)' : '林偉賢（香港會計師公會執業會員）'}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {lang === 'EN'
                    ? 'Still have questions? Talk directly to Andrew — no junior relay.'
                    : '仍有疑問？直接聯繫林偉賢，無需通過初級職員。'}
                </p>
              </div>
              <Button size="lg" onClick={onSchedule} className="w-fit">
                {lang === 'EN' ? 'Schedule a Consultation' : '預約諮詢'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
