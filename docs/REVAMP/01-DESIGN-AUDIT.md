# 01 — Design & Frontend Audit

**Lens:** Senior product/frontend designer, international non-profit standard.
**Verdict:** The foundation is genuinely strong — a coherent brand palette (royal / sky / gold / navy), tactile custom surfaces (`surface-card`, `surface-dark-card`, `surface-parchment`), glass CTAs, a floating capsule navbar, and a confident bento hero. This is already above the average Nigerian NGO site. The gap to *international* standard is not decoration — it's **credibility signals, real content, consistency, accessibility, and restraint.** Below, most-impactful first.

---

## 1. Visual credibility (the biggest gap)

### 1.1 Replace placeholder stock imagery with real assets
Every image is Unsplash (`images.unsplash.com/...`) — generic buildings, water, and stock "donor" faces in the hero and footer avatar stacks. International donors and philanthropists decide in seconds whether an organisation is real. Stock photos of strangers presented as "1,200+ Donors & Families" read as fabricated.

- **Action:** Commission or collect real photography — actual boreholes, schools, the dialysis unit, project sites, staff, beneficiaries (with consent). Until then, use **honest, neutral illustration or the brand emblem**, not stock faces implying real donors.
- Standardise images through `next/image` (already used widely — good) with correct `sizes`, `priority` only on the hero image, and blur placeholders.
- Add real project photos to `PROJECTS` in `siteData.ts` and host them in `/public` or a proper CDN rather than hotlinking Unsplash (also a reliability + privacy win — see Security §CSP).

### 1.2 Logo & favicon
There is **no favicon, app icon, or OG image** anywhere (`src/app` has no `icon`/`favicon`; `public/` has none). A tab with a blank icon looks unfinished. Add `src/app/icon.png` (or `favicon.ico`), `apple-icon.png`, and a branded `opengraph-image.png` (1200×630). See `03-SECURITY-AUDIT.md` §SEO.

---

## 2. Consistency & correctness

### 2.1 Undefined color token — visible bug
`text-brand-amber` is used in `src/app/contact/page.tsx` (the Non-Interest Waqf Escrows card, `<Shield>`) and the `uppercase` labels, but the Tailwind config defines **`brand-gold`**, not `brand-amber`. The class produces no color and the text falls back to its inherited color.

- **Fix:** replace `brand-amber` → `brand-gold` (grep the whole `src/` tree: `grep -rn "brand-amber" src`). Also `border-amber-900/10` in the Hero parchment card is a stray default-palette amber; switch to a brand token for consistency.

### 2.2 One spacing / max-width system
The site mixes `max-w-6xl` (home sections, footer) with `max-w-4xl` (navbar) and `max-w-6xl` (contact). That's fine, but confirm a single content rhythm: pick a container width + vertical section padding scale (e.g. `py-16 sm:py-20 lg:py-28`) and apply it consistently so pages feel like one system, not eight separately-built screens.

### 2.3 Footer defects (design-side)
- `@{SITE_CONFIG.name} {year}` → should be `© {year} {SITE_CONFIG.name}`.
- Social pills link to bare `https://twitter.com` etc. — wire them to `SITE_CONFIG.socials` (which already holds real handles) and match the platforms (the config has twitter/linkedin/facebook; the footer shows X/Instagram/YouTube — reconcile which are real).
- "FAQ" under **Help** links to `/contact`, and "Privacy & Fiduciary Policy" + "Shariah Fatwa Terms" both point to `/transparency`. Either build those destinations (an anchor or a real page) or relabel. Broken/mislabelled links read as neglect on a trust-critical site.

---

## 3. Accessibility (required for "international" / institutional donors)

International NGOs and grant-makers frequently require WCAG 2.1 AA. Current gaps:

- **Contrast:** `text-white/60` and `text-white/50` on the navy/gradient footer and dark cards fall below 4.5:1 for body text. Raise secondary text to `text-white/75`+ and check with a contrast tool.
- **Unlabeled controls:** the "Copy" buttons on the Contact bank cards have no `aria-label` (e.g. `aria-label="Copy account number"`). The pledge `+` button in the navbar is decorative text inside a labelled button — OK, but verify screen-reader output.
- **Focus visibility:** inputs have focus rings (good). Ensure **all** interactive elements (nav links, footer links, icon buttons) have a visible `:focus-visible` state.
- **Skip link:** add a "Skip to content" link before the fixed navbar; the fixed header otherwise traps keyboard users at the top.
- **Motion:** the organic blob animations (`blob-drift*`) and the grain overlay run unconditionally. Wrap them in `@media (prefers-reduced-motion: reduce)` and disable transforms/animation for users who opt out. Framer Motion animations should respect `useReducedMotion()`.
- **Language of Arabic text:** wrap Arabic strings (e.g. `لجنة الأوقاف والصدقات`) in `<span lang="ar" dir="rtl">` so screen readers switch pronunciation and RTL rendering is correct.
- **Headings:** confirm one `<h1>` per page and a logical heading order (the client pages use `h1`→`h3` jumps in places).

*(A deeper pass is available via the `design:accessibility-review` skill once implementation starts.)*

---

## 4. Layout & UX refinements

- **Hero:** strong. The single primary CTA ("Establish Waqf Today") is good — keep one primary action. Consider a secondary quiet link ("See how Waqf works") for donors not ready to pledge. The embedded emblem inside the `<h1>` is elegant but verify it doesn't break line-wrapping on small screens (test 320px width).
- **Contact page** is dense: a 7/5 split with a form, secretariat info, *and* bank escrows all above the fold is a lot. Consider moving bank details to a dedicated, clearly-verified "Ways to Give" section rather than sitting beside a contact form (also a security/trust improvement).
- **Endowments filtering** ("No endowments found / Try adjusting your filters") is a nice touch — ensure empty states and loading states are styled, and that filter state is reflected in the URL (the footer already deep-links `?cat=water`).
- **Mobile:** test the bento hero, comparison table, and contact 7/5 grid at 320–390px. Tables and multi-column grids are the usual break points.

---

## 5. Motion & performance

- Framer Motion + multiple blurred blobs + a fixed grain overlay + `backdrop-blur` on the navbar and cards is GPU-heavy, especially on mid-range Android phones common in Nigeria. **Budget it:** limit `backdrop-blur` layers, cap blob count on mobile, and lazy-mount below-the-fold motion.
- Fonts: Cairo + Inter are loaded via a Google Fonts `@import` in `globals.css`. Prefer `next/font` (self-hosted, no layout shift, no third-party request — also a CSP/privacy win). Load only the weights actually used.
- Run **Lighthouse on mobile** and target ≥ 90 across the board. Watch Largest Contentful Paint (the hero image) and Total Blocking Time (Framer Motion).

---

## 6. Design system hygiene (for maintainability + Antigravity)

- The custom surface/CTA classes live in `globals.css` and the palette in `tailwind.config.js` — good separation. Document the intended use of each surface (`surface-card` = light content, `surface-dark-card` = emphasis, `surface-parchment` = warm/heritage) in a short comment block so Antigravity applies them consistently.
- Extract repeated section scaffolding (badge pill + heading + subhead) into a shared `SectionHeader` component to stop copy drift between pages.
- Consider a Design canvas / tokens pass with the `design:design-system` skill when you formalise this.

---

## Design checklist (hand to Antigravity)

- [ ] Replace all Unsplash images with real, consented photography (or neutral brand art); stop implying real donors with stock faces
- [ ] Add favicon, app icons, and OG image
- [ ] `brand-amber` → `brand-gold` everywhere; remove stray `amber-900` tokens
- [ ] Fix footer: `©`, real social links via `SITE_CONFIG.socials`, correct Help links
- [ ] Contrast ≥ 4.5:1 for body text; `aria-label`s on icon/copy buttons; skip link; `:focus-visible` everywhere
- [ ] Gate all animation behind `prefers-reduced-motion`; `lang="ar" dir="rtl"` on Arabic text
- [ ] Move to `next/font`; reduce blur/motion cost on mobile
- [ ] One container/spacing rhythm across all pages
- [ ] Lighthouse mobile ≥ 90 (Perf/SEO/A11y/Best-Practices)
