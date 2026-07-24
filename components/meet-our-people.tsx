'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { UserCheck, ShieldAlert, X, Award, Briefcase } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { Language, TRANSLATIONS } from '@/lib/translations'

interface MeetOurPeopleProps {
  lang: Language
}

interface Partner {
  id: string
  nameEN: string
  nameZH: string
  roleEN: string
  roleZH: string
  subRoleEN: string
  subRoleZH: string
  avatar: string
  service: 'audit' | 'tax' | 'secretarial'
  industry: 'gba' | 'fintech' | 'familyoffice'
  bioEN: string
  bioZH: string
  qualifications: string[]
}

const PARTNERS: Partner[] = [
  {
    id: 'andrew',
    nameEN: 'Andrew Lam',
    nameZH: '林偉賢',
    roleEN: 'Managing Partner',
    roleZH: '管理合夥人',
    subRoleEN: 'International Liaison & Practice Director',
    subRoleZH: '國際聯絡與執業董事',
    avatar: '/images/avatar_hk_cfo.png',
    service: 'audit',
    industry: 'gba',
    bioEN: 'Andrew has over 20 years of professional auditing experience in Hong Kong and cross-border GBA transactions. He is a Practising Certified Public Accountant (HKICPA) and has advised multiple technology enterprises on HKEX listings and corporate restructurings.',
    bioZH: '林先生在香港法定審計以及大灣區跨境交易領域擁有超過20年的專業會計實務經驗。他是香港資深執業會計師 (FCPA)，曾協助多家高成長科技企業成功辦理香港聯交所 (HKEX) 上市審計及集團重組。',
    qualifications: ['HKICPA Practising Member', 'FCCA', 'ACA'],
  },
  {
    id: 'cecilia',
    nameEN: 'Cecilia Yam',
    nameZH: '任婉儀',
    roleEN: 'Director',
    roleZH: '執業董事',
    subRoleEN: 'Head of Risk Management & Compliance',
    subRoleZH: '風險管理與合規部主管',
    avatar: '/images/avatar_hk_director.png',
    service: 'audit',
    industry: 'familyoffice',
    bioEN: 'Cecilia specializes in statutory regulatory audits under the Hong Kong Companies Ordinance (Cap. 622). She leads the internal quality control and risk management audits for family offices and financial asset management institutions.',
    bioZH: '任女士專精於香港《公司條例》(第622章) 下的各項法定合規與監管審計工作。她負責擬定事務所的合規政策，並主導多個大型家族辦公室與金融資產管理機構的內部審計與合規覆核。',
    qualifications: ['HKICPA Practising Member', 'Chartered Accountant (CA)', 'CIA'],
  },
  {
    id: 'ringo',
    nameEN: 'Ringo Chiu',
    nameZH: '趙家榮',
    roleEN: 'Director - Tax Services',
    roleZH: '稅務服務董事',
    subRoleEN: 'Head of IRD Corporate Tax Division',
    subRoleZH: '稅務局企業稅務部主管',
    avatar: '/images/avatar_hk_controller.png',
    service: 'tax',
    industry: 'fintech',
    bioEN: 'Ringo is a leading corporate tax tax specialist. He advises HK local and multinational fintech companies on Profits Tax computation, offshore tax exemption claims, and has a proven track record representing clients in complex IRD field audits.',
    bioZH: '趙先生是本港資深的企業稅務專家，常年為本地及跨國金融科技 (FinTech) 公司提供利得稅計算、離岸利得稅豁免申請 (Offshore Claim) 等策略諮詢，並在代表客戶應對稅務局實地審核與稅務調查方面擁有豐富經驗。',
    qualifications: ['HKICPA Member', 'CTA (Hong Kong)', 'FTIHK'],
  },
  {
    id: 'wing',
    nameEN: 'Wing Chan',
    nameZH: '陳永德',
    roleEN: 'Director',
    roleZH: '執業董事',
    subRoleEN: 'Head of China & Cross-Border Practice Team',
    subRoleZH: '中國與大灣區跨界實務部主管',
    avatar: '/images/avatar_hk_partner.png',
    service: 'secretarial',
    industry: 'gba',
    bioEN: 'Wing leads the China Desk, specializing in company formations, BVI/Cayman offshore entities, and company secretarial services. He works closely with mainland businesses looking to set up representative offices in Hong Kong.',
    bioZH: '陳先生主要負責中國及跨境業務，專注於大灣區公司成立、海外註冊 (BVI/開曼群島) 及公司秘書合規運作。他與尋求在香港開拓國際業務的內地及跨國企業有著長期的合作關係。',
    qualifications: ['HKICPA Member', 'HKACG', 'CGP'],
  },
]

export function MeetOurPeople({ lang }: MeetOurPeopleProps) {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)
  const [serviceFilter, setServiceFilter] = useState<string>('all')
  const [industryFilter, setIndustryFilter] = useState<string>('all')
  const t = TRANSLATIONS[lang]

  // Filtered partners
  const filteredPartners = PARTNERS.filter((partner) => {
    const serviceMatch = serviceFilter === 'all' || partner.service === serviceFilter
    const industryMatch = industryFilter === 'all' || partner.industry === industryFilter
    return serviceMatch && industryMatch
  })

  return (
    <AnimatedSection
      id="people"
      aria-label="Our leadership team"
      className="w-full border-b border-border py-20 md:py-28 bg-card"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-8 w-1 bg-primary rounded-full shrink-0" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {t.peopleSubtitle}
              </span>
            </div>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.peopleTitle}
            </h2>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              {t.peopleBody}
            </p>
          </div>

          {/* Filtering Chips */}
          <div className="flex flex-wrap gap-3">
            <div>
              <span className="font-mono text-[10px] uppercase text-muted-foreground block mb-1">{t.peopleFilterService}</span>
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground cursor-pointer focus:outline-none focus:border-primary"
              >
                <option value="all">{lang === 'EN' ? 'All Services' : '所有專業服務'}</option>
                <option value="audit">{lang === 'EN' ? 'Statutory Audit' : '法定審計'}</option>
                <option value="tax">{lang === 'EN' ? 'Tax Filing' : '稅務申報'}</option>
                <option value="secretarial">{lang === 'EN' ? 'Company Secretarial' : '公司秘書'}</option>
              </select>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase text-muted-foreground block mb-1">{t.peopleFilterIndustry}</span>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground cursor-pointer focus:outline-none focus:border-primary"
              >
                <option value="all">{lang === 'EN' ? 'All Industries' : '所有行業別'}</option>
                <option value="gba">{lang === 'EN' ? 'GBA Tech' : '大灣區科技'}</option>
                <option value="fintech">{lang === 'EN' ? 'FinTech' : '金融科技'}</option>
                <option value="familyoffice">{lang === 'EN' ? 'Family Office' : '家族辦公室'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/20"
            >
              {/* Circular Avatar */}
              <div className="relative size-32 overflow-hidden rounded-full border-2 border-border bg-muted">
                <Image
                  src={partner.avatar}
                  alt={partner.nameEN}
                  fill
                  sizes="128px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Name & Titles */}
              <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground">
                {lang === 'EN' ? partner.nameEN : partner.nameZH}
              </h3>
              <p className="mt-1 font-mono text-xs font-bold text-primary">
                {lang === 'EN' ? partner.roleEN : partner.roleZH}
              </p>
              <p className="mt-2 text-xs leading-normal text-muted-foreground min-h-[40px] px-2">
                {lang === 'EN' ? partner.subRoleEN : partner.subRoleZH}
              </p>

              {/* View Bio Button */}
              <div className="mt-6 w-full">
                <button
                  type="button"
                  onClick={() => setSelectedPartner(partner)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 font-mono text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-accent-muted/40 cursor-pointer transition-colors"
                >
                  <UserCheck className="size-3.5 text-primary" />
                  {t.peopleBtnBio}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Modal Overlay */}
        <AnimatePresence>
          {selectedPartner && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPartner(null)}
                className="absolute inset-0 bg-black/40 backdrop-blur-xs"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl p-6 md:p-8"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPartner(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="size-5" />
                </button>

                <div className="flex flex-col gap-6">
                  {/* Portrait & Core Title */}
                  <div className="flex items-center gap-4">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border">
                      <Image
                        src={selectedPartner.avatar}
                        alt={selectedPartner.nameEN}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {lang === 'EN' ? selectedPartner.nameEN : selectedPartner.nameZH}
                      </h4>
                      <p className="font-mono text-xs font-bold text-primary">
                        {lang === 'EN' ? selectedPartner.roleEN : selectedPartner.roleZH}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                        {lang === 'EN' ? selectedPartner.subRoleEN : selectedPartner.subRoleZH}
                      </p>
                    </div>
                  </div>

                  {/* Biography text */}
                  <div className="border-t border-border pt-4">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider flex items-center gap-1.5">
                      <Briefcase className="size-3.5 text-primary" />
                      Professional Biography
                    </span>
                    <p className="mt-2.5 leading-relaxed text-sm text-foreground">
                      {lang === 'EN' ? selectedPartner.bioEN : selectedPartner.bioZH}
                    </p>
                  </div>

                  {/* Qualifications */}
                  <div className="border-t border-border pt-4">
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider flex items-center gap-1.5">
                      <Award className="size-3.5 text-primary" />
                      Credentials &amp; Memberships
                    </span>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {selectedPartner.qualifications.map((qual) => (
                        <span
                          key={qual}
                          className="rounded-md bg-accent-muted px-2.5 py-1 font-mono text-[10px] font-bold text-primary border border-primary/10"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button variant="outline" onClick={() => setSelectedPartner(null)}>
                    {t.peopleClose}
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
