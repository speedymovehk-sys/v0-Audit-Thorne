export type Language = 'EN' | 'ZH'

export const TRANSLATIONS = {
  EN: {
    // Header & Nav
    navMethodology: 'Our Methodology',
    navServices: 'Services',
    navTimeline: 'Audit Timeline',
    navFAQ: 'FAQ',
    navPeople: 'Our People',
    navContact: 'Contact',
    btnSchedule: 'Schedule Audit',
    logoAssurance: 'ASSURANCE',

    // Hero
    heroBadge: 'HKICPA Code of Ethics & Cap. 622 Compliant',
    heroTitle: 'Statutory Audits & Corporate Advisory for Hong Kong Enterprises.',
    heroBody: 'Certified HKICPA auditing services, Inland Revenue Department (IRD) tax computation, and complete company secretarial support tailored for local firms, GBA businesses, and family offices.',
    heroBtnConsult: 'Request Consultation',
    heroBtnServices: 'Our Services',

    // Services Grid
    servicesSubtitle: 'Our Practice Areas',
    servicesTitle: 'Statutory compliance and accounting solutions',
    servicesBody: 'A full suite of professional corporate and audit services tailored to navigate Hong Kong’s statutory framework.',
    servicesEnquire: 'Enquire Details',

    // Services Items
    service1Title: 'Statutory Audit & Assurance',
    service1Body: 'Annual audits of financial statements as legally required for all limited companies incorporated in Hong Kong. All audits are conducted in strict compliance with the HKFRS and the Hong Kong Companies Ordinance (Cap. 622).',
    service2Title: 'Tax Advisory & Compliance',
    service2Body: 'Comprehensive preparation and filing of Profits Tax Returns (BIR51/BIR52) and Employer’s Returns. Strategic tax computation, planning, and handling Inland Revenue Department (IRD) queries or field audit representation.',
    service3Title: 'Company Secretarial Services',
    service3Body: 'Fulfilling the legal mandate to appoint a resident Hong Kong Company Secretary. Managing Companies Registry statutory filing, Annual Return (Form NAR1) submission, and drafting board resolutions.',
    service4Title: 'Accounting & Bookkeeping',
    service4Body: 'Regular monthly, quarterly, or annual bookkeeping and voucher ledger maintenance. Compiling detailed management accounts and drafting trial balances to ensure audit readiness for your business.',
    service5Title: 'Company Formation & Offshore Setup',
    service5Body: 'Fast and convenient incorporation of Hong Kong limited companies, BVI, Cayman Islands, and Samoa entities. Comprehensive business development advisory and cross-border commercial setups.',
    service6Title: 'Certified True Copies & Bank Support',
    service6Body: 'CPA certification and endorsements of corporate documents (passport, BR, CI, and M&A) required by Hong Kong banks and regulatory authorities for corporate bank account opening.',

    // Timeline
    timelineSubtitle: 'Audit Timeline & Deadlines',
    timelineTitle: 'Never miss an Inland Revenue filing deadline',
    timelineBody: 'We compress statutory audits into a predictable 4-month pipeline, ensuring compliance with both Cap. 622 Companies Ordinance and IRD deadlines.',
    timelineSelect: 'Select your financial year-end:',
    timelineMar31: 'March 31',
    timelineDec31: 'December 31',
    timelineOther: 'Other Dates',
    timelineDeadlineLabel: 'IRD Submission Deadline',
    timelineMarNote: 'Under the IRD Block Extension Scheme (Code M), March 31 year-end accounts get extended filing privileges to avoid peak season rush.',
    timelineDecNote: 'Under the IRD Block Extension Scheme (Code D), December 31 year-end returns are extended to August 15 of the following calendar year.',
    timelineOtherNote: 'No automatic block extension applies (Code N) unless the company is loss-making. Returns are typically due within 1 month of the Profits Tax Return issue date.',
    timelineDeadlineMar: '15 November (Extended)',
    timelineDeadlineDec: '15 August (Extended)',
    timelineDeadlineOther: 'Within 1 Month of Issue',

    // Timeline steps
    step1Month: 'Month 0 – 1',
    step1Phase: 'Pre-Audit Preparation',
    step1Title: 'Digital Ingestion & Reconciliation',
    step1Body: 'We establish secure read-only integrations with your bookkeeping records. Our team reconciles trial balances, maps accounts to HKFRS, and prepares sample transaction registers.',
    step2Month: 'Month 1 – 2',
    step2Phase: 'Audit Fieldwork',
    step2Title: 'Fieldwork & Controls Verification',
    step2Body: 'We conduct substantive auditing tests, verify bank confirmations directly with HK financial institutions, audit stock count records, and verify ledger vouchers.',
    step3Month: 'Month 2 – 3',
    step3Phase: 'Draft HKFRS Report & Sign-off',
    step3Title: 'Report Compilation & Draft Opinion',
    step3Body: 'We compile the draft audited financial statements, review tax computation adjustments, and present the final draft report for Directors’ signature.',
    step4Month: 'Month 3 – 4',
    step4Phase: 'Final Filing',
    step4Title: 'Practising Partner Signature & IRD Submission',
    step4Body: 'A certified HKICPA Practising Partner signs the final statutory audit opinion. We compile Profits Tax Return Form BIR51/BIR52 and submit it alongside audited files to the IRD.',

    // Comparison
    compareSubtitle: 'Market Comparison',
    compareTitle: 'Why Hong Kong enterprises choose Thorne',
    compareBody: 'Compare local corporate compliance and audit delivery models side by side.',
    compareColThorne: 'Thorne CPA',
    compareColBig4: 'Big Four HK',
    compareColRegional: 'Traditional CPA Sole Proprietors',
    compareDim1: 'Signing Partner Direct Involvement',
    compareDim2: 'Audit & Tax Deadline Guarantees',
    compareDim3: 'Data Ingestion & Ledger Sync',
    compareDim4: 'Pricing & Fee Structure',
    compareDim5: 'Target Specialization',

    // Methodology
    methodSubtitle: 'The Catalyst Method',
    methodTitle: 'Rigor without the drag on your team',
    methodBody: 'Three core operating principles that compress audit timelines while maintaining strict HKICPA standards.',
    methodPillar1Title: 'Data-Native Fieldwork',
    methodPillar1Short: 'Automated ledger ingestion with zero spreadsheet freezes for your accounting team.',
    methodPillar1Desc: 'We link securely to Xero, QuickBooks, NetSuite, and popular invoicing systems. Our automated pipelines extract ledger transactions and build standard workpapers continuously, saving weeks of manual listing preparation.',
    methodPillar2Title: 'HKFRS Risk Scoping',
    methodPillar2Short: 'Targeted materiality scoping focusing effort where HK regulators and IRD look.',
    methodPillar2Desc: 'Every engagement kicks off with a robust HKFRS & Companies Ordinance risk map. We identify audit thresholds, concentration risks, and statutory tax adjustments upfront to concentrate effort on high-importance areas.',
    methodPillar3Title: 'Practising Partner Led',
    methodPillar3Short: 'Direct certified Practising Partner oversight on audit reviews and tax returns.',
    methodPillar3Desc: 'A qualified HKICPA Practising Partner oversees your file from start to finish. You receive direct advisory and technical accounting decisions from experienced professionals without junior proxy relays.',
    methodDeliverables: 'Pillar Deliverables & Guarantees:',

    // Social Proof
    socialSubtitle: 'Corporate Transaction Success',
    socialTitle: 'Assurance that survives real scrutiny',
    socialBody: 'Proven results across local Profits Tax returns, cross-border corporate restructurings, and statutory audit compliance cycles.',
    socialIllustrative: 'Illustrative engagements. Client identities and metrics are shown for demonstration purposes.',
    
    // Meet our people
    peopleSubtitle: 'Our Leadership Team',
    peopleTitle: 'Meet our senior certified partners',
    peopleBody: 'Experienced HKICPA Practising CPAs guiding you through audit cycles, tax compliance, and corporate transactions.',
    peopleFilterService: 'Filter by Service',
    peopleFilterIndustry: 'Filter by Industry',
    peopleOrderBy: 'Order by',
    peopleBtnBio: 'View Bio',
    peopleClose: 'Close Biography',

    // Engagement Strip
    engagementBadge: 'Limited Capacity Mandate',
    engagementTitle: 'Is your firm ready for statutory compliance?',
    engagementBody: 'We accept a selective quota of client engagements each quarter to preserve our commitment to direct partner-led delivery. Most client firms match the profile below.',
    engagementBtn: 'Request The Mandate',
    engagementCapTitle: 'Capacity Reservation',
    engagementCapStatus: 'Q3 HK Client Intake: 2 Slots Remaining',

    // FAQ
    faqSubtitle: 'FAQ',
    faqTitle: 'Questions, answered plainly',
    faqMarcus: 'Still have questions? Talk to Marcus.',
    faqBtnMarcus: 'Talk to Marcus',

    // Contact
    contactBack: 'Back to home',
    contactBadge: 'Confidential Intake',
    contactTitle: 'Request a service consultation',
    contactBody: 'Tell us a little about your firm. A senior CPA partner will respond within one business day. Everything you share is privileged.',
    contactFormName: 'Full name',
    contactFormEmail: 'Corporate email',
    contactFormRole: 'Firm infrastructure designation',
    contactFormType: 'Service type',
    contactFormSelect: 'Select a service type',
    contactFormSubmit: 'Request Consultation',
    contactFormSubmitting: 'Submitting',
    contactErrName: 'Please enter your name.',
    contactErrEmail: 'Please enter a valid corporate email.',
    contactErrRole: 'Please enter your role.',
    contactErrType: 'Please choose a service type.',

    // Modal
    modalTitle: 'Consultation Request Received',
    modalDesc: 'Thank you. A senior CPA partner will review your firm profile and reach out within one business day to schedule your confidential service consultation. No obligation, fully privileged.',
    modalBtnUnderstood: 'Understood',

    // Footer
    footerDesc: 'Institutional-grade audit and advisory for high-growth enterprises. Partner-led, systems-native, deadline-proof.',
    footerLegal: 'Thorne Assurance & Advisory, LLP.',
    footerCompliance: 'HKICPA-aligned methodology · Privileged & confidential',
    footerBtnBackTop: 'Back to top'
  },
  ZH: {
    // Header & Nav
    navMethodology: '審計方法',
    navServices: '專業服務',
    navTimeline: '審計時間表',
    navFAQ: '常見問題',
    navPeople: '合夥人團隊',
    navContact: '聯絡我們',
    btnSchedule: '預約會計師',
    logoAssurance: '執業會計師事務所',

    // Hero
    heroBadge: '符合香港會計師公會 (HKICPA) 道德守則及公司條例第622章',
    heroTitle: '為香港企業提供法定審計與企業諮詢服務。',
    heroBody: '提供香港會計師公會認證之法定審計報告、稅務局 (IRD) 利得稅計算及申報，以及全方位公司秘書合規支持，專為本地企業、大灣區商戶及家族辦公室設計。',
    heroBtnConsult: '預約專業諮詢',
    heroBtnServices: '我們的服務',

    // Services Grid
    servicesSubtitle: '專業執業領域',
    servicesTitle: '法定合規與會計解決方案',
    servicesBody: '全方位的專業企業及審計服務，協助您輕鬆應對香港法定的合規與申報框架。',
    servicesEnquire: '查詢詳情',

    // Services Items
    service1Title: '法定審計與認證',
    service1Body: '根據香港《公司條例》(第622章) 規定，所有在香港註冊成立的有限公司每年均須進行財務報表審計。本所審計工作嚴格遵循香港財務報告準則 (HKFRS)。',
    service2Title: '稅務諮詢與申報',
    service2Body: '全面處理利得稅申報表 (BIR51/BIR52) 及僱主報稅表。提供策略性稅務計算、規劃及應對稅務局 (IRD) 查詢與實地審核代表服務。',
    service3Title: '公司秘書服務',
    service3Body: '履行委任香港本地居民為公司秘書的法定要求。管理公司註冊處的法定申報、周年申報表 (Form NAR1) 提交及擬備董事決議案。',
    service4Title: '會計與簿記服務',
    service4Body: '提供定期每月、每季或年度的簿記及憑證分類賬維護。編製詳細的管理帳目及試算表，確保隨時準備好進行法定審計工作。',
    service5Title: '公司註冊與離岸設立',
    service5Body: '快速便捷地註冊香港有限公司，設立 BVI、開曼群島及薩摩亞等離岸實體。提供全面的業務拓展諮詢及跨境商業架構設計。',
    service6Title: '認證副本與銀行開戶支持',
    service6Body: '提供執業會計師 (CPA) 認證副本服務，對開戶及合規所需的身份證件、商業登記證 (BR)、公司註冊證明書 (CI) 及章程 (M&A) 進行簽署蓋章核證。',

    // Timeline
    timelineSubtitle: '審計時間表與申報限期',
    timelineTitle: '緊貼稅務局申報期限',
    timelineBody: '我們將法定審計流程壓縮至預期 4 個月之內，確保符合公司條例第622章及稅務局 (IRD) 的申報要求。',
    timelineSelect: '選擇您的財政年度結算日：',
    timelineMar31: '3月31日',
    timelineDec31: '12月31日',
    timelineOther: '其他日期',
    timelineDeadlineLabel: '稅務局最後申報期限',
    timelineMarNote: '在稅務局整體延期計劃 (代號 M) 下，3月31日年結的帳戶可獲得延期申報特權，避免報稅高峰期的混亂。',
    timelineDecNote: '在稅務局整體延期計劃 (代號 D) 下，12月31日年結的報稅表可獲延期至翌年8月15日提交。',
    timelineOtherNote: '除非公司處於虧損狀態，否則不適用自動整體延期 (代號 N)。報稅表通常須於發出日期起計 1 個月內提交。',
    timelineDeadlineMar: '11月15日 (已延期)',
    timelineDeadlineDec: '8月15日 (已延期)',
    timelineDeadlineOther: '報稅表發出後 1 個月內',

    // Timeline steps
    step1Month: '第 0 – 1 個月',
    step1Phase: '前期審計準備',
    step1Title: '數據對接與對帳',
    step1Body: '我們與您的簿記系統建立唯讀的安全對接，核對試算表，將會計科目映射至香港財務報告準則 (HKFRS)，並準備憑證抽樣清單。',
    step2Month: '第 1 – 2 個月',
    step2Phase: '審計外勤工作',
    step2Title: '外勤抽查與控制驗證',
    step2Body: '我們執行實質性審計測試，向香港各大金融機構發送銀行詢證函，抽查存貨盤點記錄，並審核各項分類賬憑證。',
    step3Month: '第 2 – 3 個月',
    step3Phase: '撰寫報告草案',
    step3Title: '報告編製與草案擬備',
    step3Body: '編製香港財務報告準則審計報告草案，核算各項稅務調整，並向董事會提交最終審計報告草案以供簽署確認。',
    step4Month: '第 3 – 4 個月',
    step4Phase: '最終申報',
    step4Title: '執業會計師簽署及報稅',
    step4Body: '由持有香港執業證書的會計師 (Practising Partner) 簽署法定審計意見書。編製利得稅計算表及 BIR51 表格，並與審計報告一同遞交稅務局。',

    // Comparison
    compareSubtitle: '市場定位對比',
    compareTitle: '為何香港企業選擇 Thorne 會計師事務所',
    compareBody: '一目了然對比不同會計師事務所的服務與交付模式。',
    compareColThorne: 'Thorne 執業會計師',
    compareColBig4: '四大會計師行 (HK)',
    compareColRegional: '傳統個人會計師事務所',
    compareDim1: '執業合夥人直接參與比例',
    compareDim2: '審計及稅務限期保證',
    compareDim3: '帳目對接及數據同步',
    compareDim4: '收費標準與價格透明度',
    compareDim5: '服務客群定位',

    // Methodology
    methodSubtitle: 'The Catalyst 審計方法',
    methodTitle: '高效審計，減輕您團隊的負擔',
    methodBody: '三大核心運作原則，旨在壓縮審計時間的同時，堅守香港會計師公會的嚴格專業標準。',
    methodPillar1Title: '數據化外勤工作',
    methodPillar1Short: '自動化對接賬目，避免影響您財務團隊的日常運作。',
    methodPillar1Desc: '我們安全對接 Xero, QuickBooks, NetSuite 等主流會計系統。我們的自動化管道持續提取交易明細並編製標準工作底稿，節省數周的手動準備時間。',
    methodPillar2Title: '香港準則風險評估',
    methodPillar2Short: '針對性重要性評估，集中精力在監管機構與稅務局重點審查項目。',
    methodPillar2Desc: '每項工作均從深入的香港財務報告準則 (HKFRS) 及公司條例風險評估開始。我們提前確定審計門檻及稅務調整，將工作重點集中在收入確認、關聯交易等關鍵領域。',
    methodPillar3Title: '執業合夥人親自督導',
    methodPillar3Short: '執業合夥人親自審閱賬目、簽署報告並指導稅務申報。',
    methodPillar3Desc: '由擁有香港執業證書的資深合夥人全程跟進您的案件。您將直接獲得豐富專業經驗的解答與技術意見，無需經過層層初級助理轉達。',
    methodDeliverables: '階段性成果與保障：',

    // Social Proof
    socialSubtitle: '客戶成功案例',
    socialTitle: '禁得起嚴格審查的合規報告',
    socialBody: '我們在本地利得稅申報、跨境公司重組及法定審計合規領域累積了豐富的成功經驗。',
    socialIllustrative: '案例僅供說明之用。客戶身份及數據經過虛擬化處理。',

    // Meet our people
    peopleSubtitle: '我們的合夥人團隊',
    peopleTitle: '會見資深執業合夥人',
    peopleBody: '由經驗豐富的香港執業會計師 (HKICPA Practising CPAs) 團隊為您把關，指導法定審計、稅務申報及企業交易。',
    peopleFilterService: '按服務篩選',
    peopleFilterIndustry: '按行業篩選',
    peopleOrderBy: '排序',
    peopleBtnBio: '查看簡歷',
    peopleClose: '關閉簡歷',

    // Engagement Strip
    engagementBadge: '每季限額承接',
    engagementTitle: '您的企業是否已準備好進行法定審計？',
    engagementBody: '我們每季度僅接受限額的新客戶委託，以確保合夥人親自督導與高水準的服務素質。本所多數客戶均符合以下特質。',
    engagementBtn: '申請預留席位',
    engagementCapTitle: '限額預留狀態',
    engagementCapStatus: '第三季度客戶招募：僅餘 2 個名額',

    // FAQ
    faqSubtitle: '常見問題',
    faqTitle: '為您解答合規疑問',
    faqMarcus: '還有其他疑問？立即與合夥人 Marcus 聯絡。',
    faqBtnMarcus: '與 Marcus 對話',

    // Contact
    contactBack: '返回首頁',
    contactBadge: '機密諮詢登記',
    contactTitle: '預約專業服務諮詢',
    contactBody: '請填寫您企業的簡要信息。我們的執業合夥人將在一個工作日內回覆。您分享的所有信息均受專業特權保護並絕對保密。',
    contactFormName: '聯絡人姓名',
    contactFormEmail: '公司電子郵箱',
    contactFormRole: '公司職位',
    contactFormType: '所需服務類型',
    contactFormSelect: '選擇服務項目',
    contactFormSubmit: '提交諮詢申請',
    contactFormSubmitting: '提交中',
    contactErrName: '請輸入聯絡人姓名。',
    contactErrEmail: '請輸入有效的公司電子郵箱。',
    contactErrRole: '請輸入您的公司職位。',
    contactErrType: '請選擇所需的服務類型。',

    // Modal
    modalTitle: '諮詢申請已成功提交',
    modalDesc: '非常感謝。我們的執業會計師合夥人將會審閱您的企業信息，並在一個工作日內與您聯絡，安排機密的專業服務諮詢。無任何約束性義務，且受特權保密保護。',
    modalBtnUnderstood: '我知道了',

    // Footer
    footerDesc: '為高成長企業提供香港法定標準的會計、審計及稅務諮詢服務。合夥人親自把關，數據化對接，保證申報期限。',
    footerLegal: 'Thorne Assurance & Advisory, LLP.',
    footerCompliance: '遵循香港會計師公會標準 · 機密與專業特權保護',
    footerBtnBackTop: '返回頁首'
  },
}
