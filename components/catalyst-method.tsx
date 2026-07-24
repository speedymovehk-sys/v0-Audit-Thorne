'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Database, ShieldAlert, Users, CheckCircle2 } from 'lucide-react'

import { AnimatedSection } from '@/components/animated-section'
import { Language } from '@/lib/translations'

interface CatalystMethodProps {
  lang: Language
}

const PILLARS = [
  {
    step: '01',
    id: 'ingestion',
    icon: Database,
    titleEN: 'Data-Native Fieldwork',
    titleZH: '數據原生實地審計',
    shortBodyEN: 'Automated ledger ingestion with zero spreadsheet freezes for your accounting team.',
    shortBodyZH: '自動化帳簿導入，不會對您的會計團隊造成任何電子表格凍結。',
    descriptionEN:
      'We link securely to Xero, QuickBooks, NetSuite, and popular invoicing systems. Our automated pipelines extract ledger transactions and build standard workpapers continuously, saving weeks of manual listing preparation.',
    descriptionZH:
      '我們安全連接 Xero、QuickBooks、NetSuite 及其他主流發票系統。自動化管道持續提取帳簿交易並建立標準工作底稿，節省數週的人手準備時間。',
    image: '/images/method_data_ingestion.png',
    highlightsEN: ['Continuous Ledger Sync', 'No Accounting Interruption', 'Zero Manual PBC Lists'],
    highlightsZH: ['持續帳簿同步', '不中斷會計工作', '零人手 PBC 清單'],
  },
  {
    step: '02',
    id: 'scoping',
    icon: ShieldAlert,
    titleEN: 'HKFRS Risk Scoping',
    titleZH: 'HKFRS 風險範圍界定',
    iconColor: 'text-amber-500',
    shortBodyEN: 'Targeted materiality scoping focusing effort where HK regulators and IRD look.',
    shortBodyZH: '針對性的重要性範圍界定，聚焦於香港監管機構及稅務局的關注領域。',
    descriptionEN:
      'Every engagement kicks off with a robust HKFRS & Companies Ordinance risk map. We identify audit thresholds, concentration risks, and statutory tax adjustments upfront to concentrate effort on high-importance areas.',
    descriptionZH:
      '每項業務均以穩健的 HKFRS 及《公司條例》風險圖開展。我們預先識別審計門檻、集中風險及法定稅務調整，將精力集中於高重要性領域。',
    image: '/images/hero_hk_suite.png',
    highlightsEN: ['HKFRS Compliance Mapping', 'Cap. 622 Core Audit Check', 'Focused Materiality Scope'],
    highlightsZH: ['HKFRS 合規對照', '第622章核心審計檢查', '聚焦重要性範圍'],
  },
  {
    step: '03',
    id: 'partner',
    icon: Users,
    titleEN: 'Practising Partner Led',
    titleZH: '執業合夥人主導',
    shortBodyEN: 'Direct certified Practising Partner oversight on audit reviews and tax returns.',
    shortBodyZH: '由認證執業合夥人直接監督審計審閱及稅務申報。',
    descriptionEN:
      'A qualified HKICPA Practising Partner oversees your file from start to finish. You receive direct advisory and technical accounting decisions from experienced professionals without junior proxy relays.',
    descriptionZH:
      '具資格的 HKICPA 執業合夥人從頭到尾監督您的審計檔案。您可直接獲得資深專業人士的諮詢意見及技術會計決策，無需通過初級職員轉達。',
    image: '/images/boardroom_hk.png',
    highlightsEN: ['HKICPA Practising Sign-off', 'Senior Regulatory Judgement', 'No Junior Staff Rotations'],
    highlightsZH: ['HKICPA 執業簽署', '高級監管判斷', '無初級職員輪換'],
  },
]

export function CatalystMethod({ lang }: CatalystMethodProps) {
  const [activeStep, setActiveStep] = useState(0)
  const current = PILLARS[activeStep]

  return (
    <AnimatedSection
      id="methodology"
      aria-label="Our methodology"
      className="w-full border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {lang === 'EN' ? 'The Catalyst Method' : 'Catalyst 方法論'}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {lang === 'EN' ? 'Rigor without the drag on your team' : '嚴謹而不拖慢您的團隊'}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {lang === 'EN'
              ? 'Three core operating principles that compress audit timelines while maintaining strict HKICPA standards.'
              : '三項核心營運原則，在維持嚴格 HKICPA 標準的同時壓縮審計時間線。'}
          </p>
        </div>

        {/* Interactive Step Navigation Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const isActive = activeStep === index
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`group relative flex flex-col items-start rounded-2xl border p-6 text-left transition-all cursor-pointer ${
                  isActive
                    ? 'border-primary bg-card shadow-md ring-1 ring-primary'
                    : 'border-border bg-card/60 hover:border-foreground/30 hover:bg-card'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">
                    {lang === 'EN' ? 'PHASE' : '階段'} {pillar.step}
                  </span>
                  <span
                    className={`flex size-9 items-center justify-center rounded-xl transition-colors ${
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-accent text-primary group-hover:bg-primary/20'
                    }`}
                  >
                    <pillar.icon className="size-4" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                  {lang === 'EN' ? pillar.titleEN : pillar.titleZH}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {lang === 'EN' ? pillar.shortBodyEN : pillar.shortBodyZH}
                </p>
              </button>
            )
          })}
        </div>

        {/* Active Step Detailed Photo & Breakdown View */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content Area */}
            <div className="p-8 lg:col-span-7 flex flex-col justify-between lg:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/30 px-3 py-1 font-mono text-xs font-semibold text-primary">
                  <span>{lang === 'EN' ? 'Methodology Pillar' : '方法論支柱'} {current.step}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {lang === 'EN' ? current.titleEN : current.titleZH}
                </h3>

                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base">
                  {lang === 'EN' ? current.descriptionEN : current.descriptionZH}
                </p>

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                    {lang === 'EN' ? 'Pillar Deliverables & Guarantees:' : '支柱交付成果與保證：'}
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {(lang === 'EN' ? current.highlightsEN : current.highlightsZH).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-foreground font-medium">
                        <CheckCircle2 className="size-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Photo Visual Container */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-5 overflow-hidden border-t lg:border-t-0 lg:border-l border-border bg-muted">
              <Image
                src={current.image}
                alt={lang === 'EN' ? current.titleEN : current.titleZH}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
