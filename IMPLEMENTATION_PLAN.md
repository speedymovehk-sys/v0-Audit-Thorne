# MASTER IMPLEMENTATION PLAN
## Thorne Assurance & Advisory — HK Localized CPA Audit & Practice Services Platform

This document serves as the consolidated master source of truth for the design tokens, architecture, positioning, component specifications, and implementation phases of the Thorne Assurance & Advisory platform.

---

## 1. Core Positioning & Terminology (Hong Kong Focus)

The platform is strictly oriented for the local Hong Kong corporate landscape (HKICPA Practising CPA firm positioning). All US/Overseas audit terminology has been removed and replaced with HK local statutory equivalents.

* **Adopted Standards:**
  * **HKICPA** (Hong Kong Institute of Certified Public Accountants) Practising Member status.
  * **HKFRS / HKAS** (Hong Kong Financial Reporting Standards / HK Accounting Standards).
  * **Hong Kong Companies Ordinance (Cap. 622)** statutory audit compliance.
  * **Inland Revenue Department (IRD)** Profits Tax Computation & Form BIR51 / BIR52 filing.
  * **HKEX** Main Board / GEM Listing & Diligence readiness.
  * **HK-Greater Bay Area (GBA)** Cross-border commerce & Transfer Pricing compliance.
* **Purged Terminology:**
  * PCAOB, US GAAP, S-1 Filing, SEC Compliance.

---

## 2. Design System & Style Tokens

A strict **60-30-10** color distribution governs the interface to present a high-end, authoritative financial editorial layout with generous whitespace.

### 2.1 Color Tokens

| Token | Hex | Role | Distribution |
| --- | --- | --- | --- |
| `--background` | `#f8fafc` | Main canvas background | **60%** |
| `--card` / `--surface` | `#ffffff` | Sections & cards | **30%** |
| `--border` | `#e2e8f0` | 1px card & section borders | Structural |
| `--accent` | `#1d4ed8` | CTAs, slider tracks, active metrics, focus rings | **10%** |
| `--accent-muted` | `#eff6ff` | CTA hover wash, active slider fill bg, icon chips | Accent family |
| `--foreground` | `#0f172a` | Primary headers | Text |
| `--muted-foreground` | `#64748b` | Secondary/body copy | Text |

### 2.2 Typography & Structure Accents
* **Font Families:** Geist (sans) for all body text, Geist Mono for metrics, numbers, and monospaced accents.
* **Alternating Canvas Tones:**
  * **Hero & Navigation:** Off-White Canvas (`#f8fafc`).
  * **Practice Services:** Pure White Surface (`#ffffff`) with subtle dot-grid overlay.
  * **Audit Timeline:** Warm Slate Canvas (`#fafaf8`).
  * **Market Comparison:** Soft Blue-Grey Wash (`#f8fafc`).
  * **Meet Our People:** Pure White Surface (`#ffffff`).
  * **Methodology & Social Proof:** Alternating light tones.
* **Left-Border Branding Accents:** Vertical primary accent line next to every section's subtitle/badge to ground the section layout.

---

## 3. Architecture Rules & State Management

1. **Max File Length:** Main file (`app/page.tsx`) stays under 600 lines. All sections are split into modular components in `/components`.
2. **State-Based View Routing:** Uses a single client-side state in `app/page.tsx`:
   `const [view, setView] = useState<'landing' | 'contact'>('landing')`
3. **Single-Action Conversion Paradigm:** All CTAs trigger the global state-controlled action dialog modal.
4. **Bilingual Translation Toggle:**
   * Centralized state: `const [lang, setLang] = useState<'EN' | 'ZH'>('EN')`
   * Translations defined in `lib/translations.ts`.

---

## 4. Component-by-Component Specifications

### 4.1 Site Header (`components/site-header.tsx`)
* **Navigation Links:** `Our Methodology` (`#methodology`) | `Services` (`#services`) | `Audit Timeline` (`#timeline`) | `Our People` (`#people`) | `FAQ` (`#faq`) | `Contact`.
* **Routing Integration:** Clicking any header nav link automatically switches the view back to `'landing'` and scrolls to the target anchor.
* **Wordmark Logo:** Clicking "THORNE | ASSURANCE" triggers `onNav('#top')`, resetting the view back to `'landing'` and scrolling to the top.
* **Language Switcher:** A toggle button (`EN / 繁` on mobile, `English / 繁體中文` on desktop) next to the CTA.
* **Mobile Schedule CTA:** Small Schedule Audit button in the mobile header controls to prevent overlap in the layout.

### 4.2 Hero Section (`components/hero-section.tsx` & `components/hero-visual.tsx`)
* **Editorial Stack Layout:** Large vertical typography layout, followed by a wide aspect-ratio (`21:9`) corporate office photo container showing Admiralty/Central office with subtle HK skyline.
* **Scroll Parallax Effect:** Image container uses Framer Motion `scrollYProgress` to implement a smooth parallax movement on scroll.
* **Trust Badges:** Minimalistic glass badge: `"HKICPA Practising Firm No. 19842"`.

### 4.3 Comprehensive HK Practice Services Grid (`components/practice-services.tsx`)
* **Six Service Pillars:**
  1. **Statutory Audit & Assurance:** Cap. 622 HK Companies Ordinance compliance, HKFRS financial statements audit & opinion.
  2. **Tax Advisory & IRD Compliance:** HK Profits Tax computation, BIR51 filing, Tax Field Audit defense, Offshore Profits Tax Exemption claims.
  3. **Company Secretarial & Incorporation:** HK Limited Company formation, Annual Return (Form NAR1) filing, Registered Office address, Company Secretary appointment.
  4. **Accounting & Bookkeeping BPO:** Monthly/Yearly bookkeeping, financial statement compilation, management accounts.
  5. **Corporate Advisory & Cross-Border:** China/Offshore (BVI/Cayman) company setup, HKEX listing diligence, M&A valuation.
  6. **Certified True Copies & Endorsement:** CPA endorsement & certified true copies for bank account opening & regulatory filings.

### 4.4 HK Statutory Audit & IRD Tax Timeline (`components/audit-timeline.tsx`)
* **4-Month Milestone Roadmap:**
  1. **Month 0–1 (Pre-Audit & Ingestion):** Trial balance review, HKFRS revenue recognition mapping, ledger connection.
  2. **Month 1–2 (Fieldwork & Substantive Testing):** Bank confirmations, inventory count, voucher sampling & controls.
  3. **Month 2–3 (Financial Statements & Draft Report):** Draft HKFRS financial statements build, audit adjustments, director signature.
  4. **Month 3–4 (Signed Audit Opinion & IRD Tax Filing):** HKICPA Practising Partner opinion signature, IRD Profits Tax Computation & Profits Tax Return (BIR51) submission ahead of IRD deadlines.
* **Interactive Year-End Deadline Selector:** Filter timeline by Financial Year End (*March 31*, *December 31*, *June 30*) showing IRD Block Extension scheme deadlines (e.g. Nov 15 for Mar 31 year-end).

### 4.5 Big Four vs. HK Local CPA Comparison Matrix (`components/comparison-matrix.tsx`)
* Reframed for Hong Kong enterprise CFOs.
* Compares Thorne HK Practising CPA vs. Big Four HK vs. Traditional Sole Proprietor CPA across partner access, IRD filing speed, data ingestion, and fee transparency.

### 4.6 Catalyst Methodology (`components/catalyst-method.tsx`)
* Localized 3-Pillar HK Audit Workflow:
  1. *01. Digital Voucher & Ledger Ingestion* (Xero, QuickBooks, Kingdee, NetSuite).
  2. *02. HKFRS & Cap. 622 Risk Scoping* (Targeted materiality on inventory, intercompany loans, & revenue).
  3. *03. HKICPA Practising Partner Sign-off* (Direct partner sign-off without associate delay).

### 4.7 "Meet Our People" Partner Directory (`components/meet-our-people.tsx`)
* **Profiles:**
  1. **Andrew Lam:** Managing Director & International Liaison Partner (avatar: `avatar_hk_cfo.png`).
  2. **Cecilia Yam:** Director & Head of Risk Management and Compliance Department (avatar: `avatar_hk_director.png`).
  3. **Ringo Chiu:** Director – Assurance Services & Head of Operations and Finance (avatar: `avatar_hk_controller.png`).
  4. **Wing Chan:** Director & Head of China Team (avatar: `avatar_hk_partner.png`).
* **Features:** Circular portrait avatars, animated entrance, and a detail drawer modal containing full CPA biography.

### 4.8 Social Proof & Testimonials (`components/social-proof.tsx`)
* Distinct non-duplicate HK professional avatars.
* **Hong Kong Sector Categories:** *HK Main Board / GEM Tech*, *GBA Cross-Border E-Commerce*, *HK Family Office & Asset Management*, *Local F&B / Retail Group*.
* Animated metric counters: Scroll-triggered counting effects.

### 4.9 Executive Mandate Strip (`components/engagement-strip.tsx`)
* Background image: modern Central / Tsim Sha Tsui executive boardroom with Victoria Harbour view.
* Target qualifications checklist for HK businesses ($5M–$300M+ HKD turnover).

### 4.10 FAQ Section (`components/faq-section.tsx`)
* Refined Q&A content regarding HK audit rules, block extension timelines, and data protection.

### 4.11 Contact Intake & Action Modal (`components/contact-view.tsx` & `components/action-modal.tsx`)
* Clean form fields (Name, Email, Role, Engagement type). Includes form validation, loading states, and a modal feedback sheet.

### 4.12 Site Footer (`components/site-footer.tsx`)
* Entirely localized through `TRANSLATIONS`.
* Left: Brand name `THORNE | ASSURANCE` and translated description.
* Right: "Back to top" and language-dependent compliance disclaimer.

---

## 5. Implementation & Verification Progress

### Phase 1: Core Foundation & Assets
- [x] Create localized asset maps & import modern corporate photography (`hero_hk_suite.png`, `boardroom_hk.png`).
- [x] Configure 4 distinct, non-duplicate local HK executive avatar headshots.
- [x] Purge PCAOB, US GAAP, and S-1 wording from all components and translations.

### Phase 2: Navigation & Hero Stack
- [x] Update header navigation labels & setup `view === 'contact'` back-navigation triggers.
- [x] Build vertical-stack hero layout with dynamic scroll parallax effects in `components/hero-section.tsx`.

### Phase 3: Practice Services & Timeline Section
- [x] Create `components/practice-services.tsx` grid mapping the 6 primary CPA services.
- [x] Create `components/audit-timeline.tsx` with dynamic year-end calendar block selectors.
- [x] Remove the obsolete `components/scope-estimator.tsx` from page flow.

### Phase 4: Core Components Integration & Localization
- [x] Implement the client-side language state switcher toggle inside the header and mobile navigation.
- [x] Map all UI copy, CTA copy, headers, and description blocks to a unified dictionary structure in `lib/translations.ts`.
- [x] Create the "Meet Our People" partner directory and biography overlay drawers.

### Phase 5: Verification & Quality Assurance
- [x] Verify complete translation toggling between EN and ZH versions without UI layout breaks.
- [x] Test mobile responsiveness on header navigation buttons and table layouts.
- [x] Run `npx tsc --noEmit` and `npm run build` to confirm compiler stability and clean project code execution.
