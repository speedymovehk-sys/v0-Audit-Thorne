'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Check, X, ShieldCheck } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Language } from '@/lib/translations'

interface ComparisonMatrixProps {
  lang: Language
}

const COMPARISON_ROWS = [
  {
    featureEN: 'Signing Partner Direct Involvement', featureZH: '簽署合夥人直接參與',
    thorneEN: '100% (Direct partner sign-off)', thorneZH: '100%（合夥人直接簽署）',
    bigFourEN: '<10% (Associate-led fieldwork)', bigFourZH: '<10%（由助理主導審計）',
    regionalEN: 'Partial (Sign-off reviewer only)', regionalZH: '部分參與（僅核驗審閱）',
  },
  {
    featureEN: 'Audit & Tax Deadline Guarantees', featureZH: '審計與稅務截止日期保證',
    thorneEN: 'Guaranteed filing ahead of IRD deadlines', thorneZH: '保證於稅務局截止日前提交',
    bigFourEN: 'Prone to extension delays', bigFourZH: '容易延期',
    regionalEN: 'Filing bottlenecks during peak seasons', regionalZH: '旺季申報擁塞',
  },
  {
    featureEN: 'Data Ingestion & Ledger Sync', featureZH: '數据導入與賬帿同步',
    thorneEN: 'Direct ledger sync (Xero, QuickBooks, etc.)', thorneZH: '直接賬帿同步（Xero、QuickBooks 等）',
    bigFourEN: 'Manual PBC sample listing chains', bigFourZH: '人手 PBC 樣本清單鏈',
    regionalEN: 'Paper & spreadsheet voucher checks', regionalZH: '紙質及電子表格收據核實',
  },
  {
    featureEN: 'Pricing & Fee Structure', featureZH: '定價與費用結構',
    thorneEN: 'Transparent upfront fixed HKD fees', thorneZH: '遠明清晰的固定港元費用',
    bigFourEN: 'Hourly rates + unspecified overruns', bigFourZH: '按小時計費 + 不明超支',
    regionalEN: 'Low base fee + heavy change orders', regionalZH: '低基本費 + 大量變更訂單',
  },
  {
    featureEN: 'Target Specialization', featureZH: '目標專業領域',
    thorneEN: 'HK SMEs, GBA scaleups, & Family Offices', thorneZH: '香港中小機構、大灣區強勢企業及家族辦公室',
    bigFourEN: 'Multinational Listed Conglomerates', bigFourZH: '跨國上市大型集團',
    regionalEN: 'Traditional local retail & cash shops', regionalZH: '傳統本地零售及現金行業',
  },
]

export function ComparisonMatrix({ lang }: ComparisonMatrixProps) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatedSection
      aria-label="Institutional comparison matrix"
      className="w-full border-b border-border py-20 md:py-28 bg-[#f8fafc] relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {lang === 'EN' ? 'Market Comparison' : '市場比較'}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {lang === 'EN'
              ? 'Why Hong Kong enterprises choose Thorne'
              : '為何香港企業選擇 Thorne'}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {lang === 'EN'
              ? 'Compare local corporate compliance and audit delivery models side by side.'
              : '並列比較本地企業合規與審計交付模式。'}
          </p>
        </motion.div>

        {/* Photo Banner */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 w-full rounded-2xl border border-border overflow-hidden relative aspect-[21/6] max-h-[200px] shadow-sm"
        >
          <Image
            src="/images/boardroom_hk.png"
            alt="Professional boardroom meeting in Hong Kong"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Comparison Table with Row Animations */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm"
        >
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-muted/40 font-mono text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold text-muted-foreground w-1/3">
                  {lang === 'EN' ? 'Evaluation Dimension' : '評估維度'}
                </th>
                <th className="py-4 px-6 font-bold text-primary bg-accent/20 w-1/4">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-primary" />
                    Thorne CPA
                  </div>
                </th>
                <th className="py-4 px-6 font-medium text-muted-foreground w-1/4">
                  {lang === 'EN' ? 'Big Four HK' : '四大會計師事務所'}
                </th>
                <th className="py-4 px-6 font-medium text-muted-foreground w-1/6">
                  {lang === 'EN' ? 'Traditional CPA Sole Proprietors' : '傳統獨資會計師事務所'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <motion.tr
                  key={row.featureEN}
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={idx % 2 === 0 ? 'bg-card' : 'bg-muted/10'}
                >
                  <td className="py-4 px-6 font-semibold text-foreground">
                    {lang === 'EN' ? row.featureEN : row.featureZH}
                  </td>
                  <td className="py-4 px-6 font-bold text-foreground bg-accent/10 border-x border-border/50">
                    <div className="flex items-center gap-2">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3" />
                      </span>
                      {lang === 'EN' ? row.thorneEN : row.thorneZH}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <X className="size-4 text-muted-foreground/60 shrink-0" />
                      {lang === 'EN' ? row.bigFourEN : row.bigFourZH}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">
                    {lang === 'EN' ? row.regionalEN : row.regionalZH}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
