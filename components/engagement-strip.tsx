'use client'

import Image from 'next/image'
import { Check, ShieldCheck } from 'lucide-react'

import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { Language } from '@/lib/translations'

interface EngagementStripProps {
  lang: Language
  onSchedule: () => void
}

const CRITERIA_EN = [
  'Annual enterprise turnover between HK$10M and HK$1B+',
  'Subject to statutory audits under HK Companies Ordinance (Cap. 622)',
  'Finance teams seeking direct access to certified HKICPA Practising Partners',
  'Preparing for corporate bank account opening, listed audits, or GBA expansion',
  'Ready to connect core accounting records (Xero, QuickBooks, NetSuite)',
]

const CRITERIA_ZH = [
  '年營業額介乎港幣1,000萬至10億以上',
  '須根據香港《公司條例》(第622章) 進行法定審計',
  '財務團隊尋求直接接觸認證 HKICPA 執業合夥人',
  '準備開立企業銀行帳戶、上市審計或大灣區擴展',
  '準備連接核心會計記錄（Xero、QuickBooks、NetSuite）',
]

export function EngagementStrip({ lang, onSchedule }: EngagementStripProps) {
  const criteria = lang === 'EN' ? CRITERIA_EN : CRITERIA_ZH

  return (
    <AnimatedSection
      aria-label="Executive compliance mandate"
      className="w-full border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="p-8 lg:col-span-7 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1 font-mono text-xs font-semibold text-primary">
                  <ShieldCheck className="size-3.5" />
                  {lang === 'EN' ? 'Limited Capacity Mandate' : '限額客戶計劃'}
                </div>
                <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {lang === 'EN'
                    ? 'Is your firm ready for statutory compliance?'
                    : '您的公司是否準備好進行法定合規？'}
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
                  {lang === 'EN'
                    ? 'We accept a selective quota of client engagements each quarter to preserve our commitment to direct partner-led delivery. Most client firms match the profile below.'
                    : '我們每季度僅接受有限數量的客戶委聘，以維持由合夥人直接主導交付的承諾。大多數客戶公司符合以下特徵。'}
                </p>

                <ul className="mt-8 flex flex-col gap-3.5">
                  {criteria.map((criterion) => (
                    <li key={criterion} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {criterion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <Button size="lg" onClick={onSchedule}>
                  {lang === 'EN' ? 'Request The Mandate' : '申請服務名額'}
                </Button>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="relative min-h-[320px] lg:col-span-5 lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-border bg-muted">
              <Image
                src="/images/boardroom_hk.png"
                alt="Thorne Executive Boardroom overlooking Central, Hong Kong skyline"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent lg:bg-gradient-to-r" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border/80 bg-background/80 p-4 backdrop-blur-md">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block">
                  {lang === 'EN' ? 'Capacity Reservation' : '名額預約'}
                </span>
                <span className="mt-1 block text-xs font-semibold text-foreground">
                  {lang === 'EN'
                    ? 'Q3 HK Client Intake: 2 Slots Remaining'
                    : '第三季度香港客戶接納：剩餘2個名額'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
