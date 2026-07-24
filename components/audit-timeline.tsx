'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { Calendar, Clock, ClipboardCheck, Send, Check } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Language, TRANSLATIONS } from '@/lib/translations'

interface AuditTimelineProps {
  lang: Language
}

type YearEnd = 'mar31' | 'dec31' | 'other'

const DEADLINES: Record<YearEnd, {
  label: string; deadline: string; note: string
  labelZH: string; deadlineZH: string; noteZH: string
}> = {
  mar31: {
    label: 'March 31 Year-End',
    deadline: '15 November (Extended)',
    note: 'Under the IRD Block Extension Scheme (Code M), March 31 year-end accounts get extended filing privileges to avoid peak season rush.',
    labelZH: '3月31日財政年度結算',
    deadlineZH: '11月15日（延期）',
    noteZH: '根據稅務局整批延期計劃（代碼M），3月31日財政年度結算的公司可獲延期申報特權，以避免旺季擁塞。',
  },
  dec31: {
    label: 'December 31 Year-End',
    deadline: '15 August (Extended)',
    note: 'Under the IRD Block Extension Scheme (Code D), December 31 year-end returns are extended to August 15 of the following calendar year.',
    labelZH: '12月31日財政年度結算',
    deadlineZH: '8月15日（延期）',
    noteZH: '根據稅務局整批延期計劃（代碼D），12月31日財政年度結算的報稅表延期至翌年8月15日提交。',
  },
  other: {
    label: 'Other Year-End (e.g. June 30)',
    deadline: 'Within 1 Month of Issue',
    note: 'No automatic block extension applies (Code N) unless the company is loss-making. Returns are typically due within 1 month of the Profits Tax Return issue date.',
    labelZH: '其他結算日（如6月30日）',
    deadlineZH: '發出後1個月內',
    noteZH: '除非公司錄得虧損，否則不適用自動整批延期（代碼N）。報稅表通常須在利得稅報稅表發出後1個月內提交。',
  },
}

const STEPS = [
  {
    monthEN: 'Month 0 – 1', monthZH: '第0–1個月',
    phaseEN: 'Digital Ingestion & Reconciliation', phaseZH: '數碼化導入與對賬',
    icon: Calendar,
    titleEN: 'Pre-Audit Preparation', titleZH: '審計前期準備',
    bodyEN: 'We establish secure read-only integrations with your bookkeeping records. Our team reconciles trial balances, maps accounts to HKFRS, and prepares sample transaction registers.',
    bodyZH: '我們與您的賬目記錄建立安全的唯讀集成。我們的團隊對賬試算表、將賬目對映至 HKFRS，並準備樣本交易登記。',
  },
  {
    monthEN: 'Month 1 – 2', monthZH: '第1–2個月',
    phaseEN: 'Fieldwork & Controls Verification', phaseZH: '審計實地和控制驗證',
    icon: Clock,
    titleEN: 'Audit Fieldwork', titleZH: '審計實地工作',
    bodyEN: 'We conduct substantive auditing tests, verify bank confirmations directly with HK financial institutions, audit stock count records, and verify ledger vouchers.',
    bodyZH: '我們進行實貪審計測試，直接向香港金融機構尋求銀行確認函，審計存貨盘點記錄，并核實賬帿收據。',
  },
  {
    monthEN: 'Month 2 – 3', monthZH: '第2–3個月',
    phaseEN: 'Report Compilation & Draft Opinion', phaseZH: '報告編製與草擬意見',
    icon: ClipboardCheck,
    titleEN: 'Draft HKFRS Report & Sign-off', titleZH: 'HKFRS 報告草擬與簽署',
    bodyEN: 'We compile the draft audited financial statements, review tax computation adjustments, and present the final draft report for Directors\u2019 signature.',
    bodyZH: '我們編製已審計財務報表草擬，審閱稅務計算調整，並將最終草擬報告提交董事簽署。',
  },
  {
    monthEN: 'Month 3 – 4', monthZH: '第3–4個月',
    phaseEN: 'Tax Computation & Final Filing', phaseZH: '稅務計算與最終提交',
    icon: Send,
    titleEN: 'Practising Partner Signature & IRD Submission', titleZH: '執業合夥人簽署與稅務局提交',
    bodyEN: 'A certified HKICPA Practising Partner signs the final statutory audit opinion. We compile Profits Tax Return Form BIR51/BIR52 and submit it alongside audited files to the IRD.',
    bodyZH: '由認證 HKICPA 執業合夥人簽署最終法定審計意見。我們編製利得稅報稅表格式 BIR51/BIR52，并連同審計文件一併提交至稅務局。',
  },
]

export function AuditTimeline({ lang }: AuditTimelineProps) {
  const [selectedYearEnd, setSelectedYearEnd] = useState<YearEnd>('mar31')
  const reduceMotion = useReducedMotion()
  const activeDeadline = DEADLINES[selectedYearEnd]
  const t = TRANSLATIONS[lang]

  // Scroll-linked progress for the connector line
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: lineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.6'],
  })
  const lineScaleY = useTransform(lineProgress, [0, 1], [0, 1])

  return (
    <AnimatedSection
      id="timeline"
      aria-label="Statutory audit timeline"
      className="w-full border-b border-border py-20 md:py-28 bg-[#fafaf8] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="mx-auto w-full max-w-5xl px-6 relative z-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {lang === 'EN' ? 'Audit Timeline & Deadlines' : '審計時間表與截止日期'}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {lang === 'EN'
              ? 'Never miss an Inland Revenue filing deadline'
              : '絕不錯過稅務局的申報截止日期'}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {lang === 'EN'
              ? 'We compress statutory audits into a predictable 4-month pipeline, ensuring compliance with both Cap. 622 Companies Ordinance and IRD deadlines.'
              : '我們將法定審計壓縮為可預測的4個月流程，確保符合《公司條例》(第622章) 及稅務局的申報截止日期。'}
          </p>
        </motion.div>

        {/* Year End Selector */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {lang === 'EN' ? 'Select your financial year-end:' : '選擇您的財政年度結算日：'}
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {(Object.keys(DEADLINES) as YearEnd[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedYearEnd(key)}
                    className={`rounded-xl px-4 py-2 font-mono text-xs font-bold transition-all cursor-pointer ${selectedYearEnd === key
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-background border border-border text-muted-foreground hover:border-foreground/30'
                      }`}
                  >
                    {lang === 'EN'
                      ? (key === 'mar31' ? 'March 31' : key === 'dec31' ? 'December 31' : 'Other Dates')
                      : (key === 'mar31' ? '3月31日' : key === 'dec31' ? '12月31日' : '其他日期')}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full border-t border-border pt-6 md:w-auto md:border-t-0 md:pt-0 md:pl-6 md:border-l flex flex-col items-start md:min-w-[280px]">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                {lang === 'EN' ? 'IRD Submission Deadline' : '稅務局提交截止日期'}
              </span>
              <p className="mt-1.5 font-mono text-xl font-bold text-primary">
                {lang === 'EN' ? activeDeadline.deadline : activeDeadline.deadlineZH}
              </p>
              <p className="mt-2 text-xs leading-normal text-muted-foreground max-w-sm">
                {lang === 'EN' ? activeDeadline.note : activeDeadline.noteZH}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Steps Pipeline with Scroll Animations */}
        <div className="mt-16 relative" ref={timelineRef}>
          {/* Animated vertical connector line */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 md:left-1/2 md:-translate-x-1/2 overflow-hidden">
            {/* Static track */}
            <div className="absolute inset-0 bg-border" />
            {/* Animated fill */}
            <motion.div
              style={{ scaleY: reduceMotion ? 1 : lineScaleY, transformOrigin: 'top' }}
              className="absolute inset-0 bg-primary"
            />
          </div>

          <div className="flex flex-col gap-12">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={step.phaseEN}
                  className={`relative flex flex-col md:flex-row md:items-start ${isEven ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Animated Circle Indicator */}
                  <motion.div
                    initial={reduceMotion ? false : { scale: 0 }}
                    whileInView={reduceMotion ? undefined : { scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="absolute left-4 top-1.5 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm z-10 md:left-1/2"
                  >
                    <span className="font-mono text-xs font-bold text-primary">
                      {idx + 1}
                    </span>
                  </motion.div>

                  {/* Animated Card — slides in from alternating sides */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, x: isEven ? 50 : -50 }
                      }
                      whileInView={
                        reduceMotion ? undefined : { opacity: 1, x: 0 }
                      }
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={reduceMotion ? undefined : { y: -3 }}
                      className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/30 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary">
                          {lang === 'EN' ? step.monthEN : step.monthZH}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-muted px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary">
                          <Check className="size-3" />{' '}
                          {lang === 'EN' ? step.phaseEN : step.phaseZH}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                        {lang === 'EN' ? step.titleEN : step.titleZH}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {lang === 'EN' ? step.bodyEN : step.bodyZH}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right Spacer for Desktop Alignment */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}