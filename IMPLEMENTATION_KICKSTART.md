# IMPLEMENTATION KICKSTART

## Thorne Assurance & Advisory — Ultra-Premium Financial Auditing Landing Page

**Lead Architect:** Marcus Thorne, CPA
**Niche:** Precision Auditing, Regulatory Compliance, and M&A/IPO Readiness for high-growth mid-market enterprises and VC-backed tech corporations.
**Aesthetic:** Ultra-clean, authoritative financial light-mode with elite editorial layout — soft off-white canvas, deep institutional blue accent, and generous whitespace.

---

## 1. Design Token Document

A strict **60-30-10** color distribution governs the entire interface.

### 1.1 Color Tokens

| Token | Hex | Role | Distribution |
| --- | --- | --- | --- |
| `--background` (Off-White Canvas) | `#f8fafc` | Main canvas background | **60%** |
| `--card` / `--surface` (Pure White) | `#ffffff` | Sections & cards | **30%** |
| `--border` (Soft Slate) | `#e2e8f0` | 1px card & section borders | Structural |
| `--accent` (Assurance Blue) | `#1d4ed8` | CTAs, slider tracks, active metrics, focus rings | **10%** |
| `--accent-muted` (Blue Tint) | `#eff6ff` | CTA hover wash, active slider fill bg, icon chips | Accent family |
| `--foreground` (Deep Navy Ink) | `#0f172a` | Primary headers | Text |
| `--muted-foreground` (Slate) | `#64748b` | Secondary/body copy | Text |
| `--muted-foreground-strong` | `#334155` | Emphasized subheadings | Text |

> **Rule:** Assurance Blue (`#1d4ed8`) is applied **only** to interactive buttons, slider tracks, active metric strings, and focus triggers. Never as a large background fill. The Blue Tint (`#eff6ff`) is the only permitted soft/large-area use of the accent family — reserved for CTA hover washes, active slider fill backgrounds, and icon chips — so the page stays warm rather than clinical without breaking the 10% rule. Headline text stays Deep Navy Ink for maximum contrast on the light canvas.

### 1.2 `globals.css` `@theme` mapping (Tailwind v4)

```css
@import "tailwindcss";

@theme inline {
  --color-background: #f8fafc;   /* Off-White Canvas — 60% */
  --color-foreground: #0f172a;   /* Deep Navy Ink headers */
  --color-card: #ffffff;         /* Pure white surfaces — 30% */
  --color-card-foreground: #0f172a;
  --color-border: #e2e8f0;       /* Soft slate 1px */
  --color-input: #e2e8f0;
  --color-muted: #f1f5f9;
  --color-muted-foreground: #64748b;
  --color-accent: #1d4ed8;       /* Assurance Blue — 10% */
  --color-accent-foreground: #ffffff; /* white text on blue */
  --color-accent-muted: #eff6ff; /* Blue tint — hover/fill/chips */
  --color-ring: #1d4ed8;

  --font-sans: "Geist", "Geist Fallback";
  --font-mono: "Geist Mono", "Geist Mono Fallback";

  --radius: 0.5rem;
}
```

### 1.3 Typography Tokens

| Level | Element | Style |
| --- | --- | --- |
| H1 | Hero headline | `text-foreground font-bold tracking-tight` (4xl → 6xl) |
| H2 | Section titles | `text-foreground font-bold tracking-tight` (3xl → 4xl) |
| H3 | Card titles | `text-foreground font-semibold tracking-tight` (xl) |
| Body | Paragraphs | `text-muted-foreground leading-relaxed` (`#64748b`) |
| Emphasis | Subheadings | `text-[#334155]` |
| Metric | Big numbers | `text-accent font-bold` (massive scale) |

- **Max 2 font families:** Geist (sans) for everything, Geist Mono for metric/credential monospaced accents.
- Line height `leading-relaxed` (1.4–1.6) on all body copy.

---

## 2. Architecture Rules

1. **Max file length:** Main file (`app/page.tsx`) stays **under 600 lines**. Split into modular components.
2. **Routing via state, not Next routes:** Single `const [view, setView] = useState<"landing" | "contact">("landing")` toggle. No multi-file page routing.
3. **Single-action conversion paradigm:** Every CTA opens the global state-controlled shadcn `Dialog`. No inline email capture blocks.
4. **Back to Top:** Programmatic `window.scrollTo({ top: 0, behavior: "smooth" })`.
5. **Edge-to-edge layout:** `w-full`, `max-w-none` wrappers. No container boxing.

### 2.1 State Ownership (lifted to `app/page.tsx`)

| State | Type | Purpose |
| --- | --- | --- |
| `view` | `"landing" \| "contact"` | Swaps center canvas |
| `modalOpen` | `boolean` | Controls Centralized Action Dialog |
| `mobileMenuOpen` | `boolean` | Controls mobile Sheet drawer |
| `revenueStep` | `1 \| 2 \| 3` | Audit Scope Estimator slider |
| `submitting` | `boolean` | Contact form pending/spinner state (owned in `contact-view.tsx`) |

CTA handler `openModal()` and `setView` are passed down as props to every section.

---

## 3. File / Component Structure

```
app/
  layout.tsx           # Fonts (Geist), metadata, <html className="bg-background text-foreground">
  globals.css          # Design tokens (@theme)
  page.tsx             # Orchestrator: state, view switch, renders sections (<600 lines)
components/
  site-header.tsx      # Sticky nav + mobile Sheet drawer
  hero-section.tsx     # H1, CTA, inline SVG portal asset, logo cloud
  portal-visual.tsx    # Audit Progression Radial Ring ONLY (simple inline SVG — one animated progress circle + percentage). NO hand-built "data graph"; anything data-like uses the charts skill (Recharts).
  scope-estimator.tsx  # Interactive revenue slider card
  catalyst-method.tsx  # 3-column method grid
  social-proof.tsx     # Transaction success testimonials
  engagement-strip.tsx # Executive Assurance Mandate credential card
  faq-section.tsx      # shadcn Accordion
  contact-view.tsx     # Contact form view state
  action-modal.tsx     # Centralized Dialog overlay
  site-footer.tsx      # Final Nudge footer + Back to Top
  mobile-cta-bar.tsx   # Fixed bottom CTA panel (mobile only)
components/ui/          # shadcn: button, dialog, sheet, accordion, select, slider, input, label
```

### 3.1 shadcn components to install

`dialog`, `sheet`, `accordion`, `select`, `slider`, `input`, `label` (`button` pre-installed).

### 3.2 Dependencies to add

`motion` (the current package — import from `motion/react`, **not** the deprecated `framer-motion`), `lucide-react` (icons: `Check`, `Menu`, `Database`, `Users`, `ShieldAlert`, `CheckCircle`, `ArrowUp`, `ArrowLeft`, `Loader2`, `Star`).

---

## 4. Section Build Order & CTA Placement

CTAs (all open the global Dialog) placed **at least 3×**, actually distributed **6+ times** across the page:

| # | Section | CTA(s) |
| --- | --- | --- |
| 1 | **Nav Header** | `Schedule Audit` (desktop) + mobile drawer full-width CTA |
| 2 | **Hero** | `Initiate Scope Assessment` |
| 3 | **Scope Estimator** | `Lock In This Scope` |
| 4 | **Catalyst Method** | (structural, no CTA) |
| 5 | **Social Proof** | (structural, no CTA) |
| 6 | **Engagement Strip** | `Request The Mandate` |
| 7 | **FAQ** | `Still Have Questions? Talk to Marcus` |
| 8 | **Footer** | `Schedule Audit` + Back to Top |
| — | **Mobile Fixed Bar** | Persistent `Schedule Audit` |
| — | **Contact View** | Form submit → opens Dialog |

### 4.1 Section detail checklist

- **Header:** `THORNE` + thin vertical divider + `ASSURANCE` wordmark (drop the `//` dev motif for a cleaner, more institutional mark), `hidden md:flex` nav (Our Methodology, FAQ, Contact Us→`setView("contact")`), sticky `bg-background/80 backdrop-blur-md border-b border-border`. Mobile: `md:hidden` `Menu` icon → shadcn `Sheet` from right.
- **Hero:** `grid-cols-1 md:grid-cols-2 py-24 gap-12`. H1 "Institutional-Grade Audits. Frictionless Execution." Right column simple radial-ring portal visual (see `portal-visual.tsx` scope note). Grayscale **fictional** text logo cloud under label "COMPLIANCE INFRASTRUCTURE TRUSTED BY:".
- **Scope Estimator:** `border-border` white card with soft shadow, slider with 3 discrete steps, conditional ternary output (Revenue / Delivery Window / Compliance Tier), massive Assurance Blue numbers. **Slider track:** inactive portion uses `--border` (never a muted blue); active/filled portion uses solid `--accent` so contrast and the 10% rule are both preserved.
- **Catalyst Method:** 3-col `gap-8`, thin `border-border` on white cards with subtle `shadow-sm`, Lucide `Database`, `ShieldAlert`, `Users` in `--accent-muted` icon chips.
- **Social Proof:** "Corporate Transaction Success", 3 white `border-border shadow-sm` cards with Lucide `Star` rating icons (never hand-drawn SVG) + blue metric accents. **All company names, logos, and metrics are fictional/illustrative** — include a small `text-xs text-muted-foreground` note ("Illustrative engagements. Client identities are fictional.") to avoid implying real endorsements.
- **Engagement Strip:** White (or Deep Navy Ink) card with a thin left `--accent` rule instead of an offset "sticker" outline frame (more institutional, less startup-playful), 5 `Check`-list criteria, uppercase credential ribbon.
- **FAQ:** `max-w-3xl`, shadcn `Accordion`, 3 Q&As.
- **Contact View:** Back button → `setView("landing")`, fields (Full Name, Corporate Email, Firm Infrastructure Designation, Select with 4 engagement types), submit opens Dialog. **Add a `submitting` pending state** (`Loader2` spinner + disabled button for ~1s simulated latency) before opening the Dialog so the form feels real, plus basic required-field validation.
- **Action Modal:** white surface, green `CheckCircle`, header "Audit Briefing Initiated", confirmation copy, close button.
- **Footer:** top border `#e2e8f0`, `pb-24`, brand + tagline left, Back to Top + blue CTA right, legal meta strip.

---

## 5. Interaction & Animation

- **Motion (`motion/react`):** scroll-triggered `fade-in-up` (`whileInView`, snappy damping) on every section. Card hover → border color shift to accent + subtle `--accent-muted` wash.
- **Mobile:** fixed horizontal CTA bar anchored to viewport base (`fixed bottom-0`), hidden on `md+`.
- **Reduced motion:** respect `prefers-reduced-motion`.

---

## 6. SEO & Accessibility

- `layout.tsx` metadata: title, description, Open Graph for "Thorne Assurance & Advisory".
- Semantic hierarchy: single H1 → H2 sections → H3 cards, no skips.
- `<html className="bg-background text-foreground">`, semantic `<header>`, `<main>`, `<section>`, `<footer>`.
- ARIA labels on icon-only buttons (hamburger, back to top), `sr-only` text where needed.
- Only valid Lucide icons — no abstract asset libraries.

---

## 7. Build Sequence (execution order)

1. Install deps (`motion`, `lucide-react`) + shadcn components.
2. Write `globals.css` design tokens + `layout.tsx` fonts/metadata.
3. Build shared `action-modal.tsx` + reusable animated section wrapper.
4. Build `site-header.tsx` (with Sheet drawer) + `mobile-cta-bar.tsx`.
5. Build landing sections in vertical order (hero → footer).
6. Build `contact-view.tsx`.
7. Wire everything in `page.tsx` with the state architecture.
8. Verify in browser (desktop + mobile), confirm CTAs, view toggle, modal, drawer, smooth scroll.

---

**Ready to implement.** This document is the single source of truth for tokens, structure, and section behavior.
