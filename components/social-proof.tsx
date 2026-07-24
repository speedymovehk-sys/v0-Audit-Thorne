'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Star } from 'lucide-react'

import { AnimatedSection } from '@/components/animated-section'
import { Language } from '@/lib/translations'

interface SocialProofProps {
  lang: Language
}

const CATEGORIES_EN = [
  'All Sectors',
  'Robotics & GBA Tech',
  'FinTech & B2B',
  'HK Family Office',
  'Local F&B / Retail Group',
]

const CATEGORIES_ZH = [
  '所有行業',
  '機器人與大灣區科技',
  '金融科技與B2B',
  '香港家族辦公室',
  '本地餐飲/零售集團',
]

const CASES = [
  {
    category: 'Robotics & GBA Tech',
    metric: '11 Days',
    metricLabel: 'to signed HKFRS opinion post-fieldwork',
    metricLabelZH: '從實地審計到簽發HKFRS審計意見書',
    quote:
      'Thorne closed our statutory audit ahead of our Series C financing wire. The cross-border GBA transfer pricing review was handled cleanly by their partners.',
    quoteZH:
      'Thorne 在我們的C輪融資電匯前完成了法定審計。他們的合夥人乾淨利落地處理了大灣區跨境轉讓定價的審閱。',
    name: 'David Vance',
    role: 'Chief Financial Officer',
    company: 'Northbridge GBA Tech',
    avatar: '/images/avatar_hk_cfo.png',
  },
  {
    category: 'FinTech & B2B',
    metric: '0 Queries',
    metricLabel: 'cleared with zero IRD tax audit adjustments',
    metricLabelZH: '稅務局審計零調整',
    quote:
      'The Inland Revenue Department accepted our Profits Tax computations without a single query. Thorne\'s tax computation was extremely thorough.',
    quoteZH:
      '稅務局在沒有任何查詢的情況下接受了我們的利得稅計算。Thorne 的稅務計算極為嚴謹。',
    name: 'Elena Rostova',
    role: 'VP of Finance',
    company: 'Vertex Financial',
    avatar: '/images/avatar_hk_director.png',
  },
  {
    category: 'HK Family Office',
    metric: 'Cap. 622 Ready',
    metricLabel: 'statutory files delivered for compliance',
    metricLabelZH: '符合《公司條例》的法定文件交付',
    quote:
      'We consolidated our offshore entities (BVI/Cayman) and HK subsidiaries into a clean audited file. Their certified partners were exceptional.',
    quoteZH:
      '我們將離岸實體（BVI/開曼群島）及香港子公司整合為一份完整的審計文件。他們的認證合夥人表現出色。',
    name: 'Marcus Chen',
    role: 'Corporate Controller',
    company: 'Meridian Wealth Office',
    avatar: '/images/avatar_hk_controller.png',
  },
  {
    category: 'Local F&B / Retail Group',
    metric: 'HK$1.2M Saved',
    metricLabel: 'via optimized tax & offshore claim structures',
    metricLabelZH: '透過優化稅務及離岸利得稅申索架構節省',
    quote:
      'Their certified true copies and banking support helped us structure our new retail branches and clear corporate bank compliance in under a week.',
    quoteZH:
      '他們的認證文件副本及銀行支援協助我們構建新零售分支並在一週內完成企業銀行合規。',
    name: 'Agnes Wong',
    role: 'Managing Director',
    company: 'Golden Jade Group',
    avatar: '/images/avatar_hk_partner.png',
  },
]

export function SocialProof({ lang }: SocialProofProps) {
  const categories = lang === 'EN' ? CATEGORIES_EN : CATEGORIES_ZH
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const reduceMotion = useReducedMotion()

  const filteredCases =
    selectedCategory === categories[0]
      ? CASES
      : CASES.filter(
          (c) =>
            c.category ===
            CATEGORIES_EN[categories.indexOf(selectedCategory)]
        )

  return (
    <AnimatedSection
      aria-label="Corporate transaction success"
      className="w-full border-b border-border py-20 md:py-28 bg-[#f9f8f6] relative overflow-hidden"
    >
      {/* Subtle warm texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {lang === 'EN' ? 'Corporate Transaction Success' : '企業交易成功案例'}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {lang === 'EN'
                ? 'Assurance that survives real scrutiny'
                : '經得起真正審查考驗的鑑證服務'}
            </h2>
            <p className="mt-2 text-pretty text-muted-foreground">
              {lang === 'EN'
                ? 'Proven results across local Profits Tax returns, cross-border corporate restructurings, and statutory audit compliance cycles.'
                : '在本地利得稅申報、跨境企業重組及法定審計合規週期中取得的實證成果。'}
            </p>
          </div>

          {/* Sector Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'bg-card border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredCases.map((item, idx) => (
            <motion.figure
              key={item.company}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-b border-border pb-5">
                  <p className="text-2xl font-bold tracking-tight text-primary font-mono">
                    {item.metric}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {lang === 'EN' ? item.metricLabel : item.metricLabelZH}
                  </p>
                </div>

                <blockquote className="mt-5 text-pretty leading-relaxed text-foreground text-sm">
                  &ldquo;{lang === 'EN' ? item.quote : item.quoteZH}&rdquo;
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-foreground">{item.name}</span>
                  <span className="text-muted-foreground">
                    {item.role}, <strong className="font-medium text-foreground">{item.company}</strong>
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          {lang === 'EN'
            ? 'Illustrative engagements. Client identities and metrics are shown for demonstration purposes.'
            : '案例僅供說明用途。客戶身份及數據僅作示範之用。'}
        </p>
      </div>
    </AnimatedSection>
  )
}
