# Lajanah Website — Revamp Guide (Overview & Ground Rules)

**Project:** Lajnatul Awqaaf Wassadaqaat (لجنة الأوقاف والصدقات) — Shariah-governed Islamic endowment (Waqf) charity, CAC-registered in Nigeria.
**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion · lucide-react · deployed on Vercel.
**Prepared by:** Design, Copy, and Security review (Claude, Cowork) — **2026-09-04**.
**Purpose of this document set:** an implementation-ready guide. **Antigravity** also works this folder and can execute these changes; Claude will review and correct that work in later sessions. Write changes so they are reviewable (small commits, clear messages).

---

## Ground rules for this revamp (agreed with Aleem)

1. **Audit & plan first.** This session produces the plan only — **no source code was changed.** Implementation happens after Aleem approves.
2. **Numbers and named people are PLACEHOLDER until verified.** Every impact figure, valuation, beneficiary count, trustee, and Shariah scholar in the repo is treated as demo content. **Do not present any of it as fact on the live site until Aleem confirms it.** Where a number is shown before verification, it must be visibly marked as illustrative. See §Data integrity in `03-SECURITY-AUDIT.md`.
3. **Naira-first.** Primary audience is Nigerian donors. Lead with **₦**; show **USD as secondary** for diaspora. Currency must be consistent everywhere.
4. **Donations are out of scope this round.** Do **not** wire a live payment processor. Keep the existing pledge/inquiry flow presentational, but fix the security gaps noted in the audit. A donation flow is a separate future task.
5. **Trust before polish.** This is a charity handling other people's money in the name of religion. Accuracy, consistency, and transparency outrank visual flourish. A beautiful site that shows three different AUM figures loses donors.

---

## The three reviews in this folder

| File | Lens | What it covers |
|---|---|---|
| `01-DESIGN-AUDIT.md` | Senior product/frontend designer | Visual system, layout, imagery, accessibility, responsiveness, motion, performance — bringing it to international-charity standard |
| `02-COPY-REVIEW.md` | Muslim expert copywriter | Whole-site copy: simplified for Nigerians + donors, Naira-first, conversion-focused, with before→after rewrites and a plain-language glossary |
| `03-SECURITY-AUDIT.md` | Senior security & trust auditor | Dependency vulnerabilities, forms, headers, the hardcoded bank-account trust risk, SEO/metadata, and site-wide data-integrity defects |

---

## Top issues at a glance (the "must-fix before international launch" list)

These are the highest-leverage problems. Full detail and file locations are in the three reviews.

**Blockers (fix first — credibility & security):**

1. **Contradictory numbers across the site.** AUM shows as `₦4.8B+` (Hero) *and* `$4.8M+` (Impact bar). Beneficiaries show as `320,000+`, `195,000+`, `170,000+`, and `100k+` in different places. Endowment count is `54+` vs `63+`. Donors `1,200+`. A donor who notices this stops trusting everything. **One source of truth in `siteData.ts`, Naira-first, used everywhere.** *(Copy + Security)*
2. **Hardcoded bank account numbers** (`000 123 4567`, `000 987 6543`) on the Contact page with clipboard-copy. On a charity site these are the single highest-trust element and a prime phishing target. Must be real, verified, and governed. *(Security)*
3. **High-severity dependency vulnerability** (`postcss`) and an outdated Next.js. `npm audit` reports 1 high + 1 moderate. *(Security)*
4. **Forms do nothing.** Contact form `console.log`s; Pledge modal just flips a state. No backend, validation, or spam protection. Users think they've reached the Board of Trustees; nobody receives it. *(Security + Design)*

**High priority (fix before launch — reach & conversion):**

5. **SEO is broken for 4 of 5 pages.** About, Endowments, Transparency, and Contact are all `'use client'`, so they **cannot export metadata** — no unique title/description for search or social sharing. No `sitemap`, no `manifest`, no favicon, no Open Graph image. An "international" site invisible to search is a contradiction. *(Security/SEO + Design)*
6. **Copy is too heavy.** "Sacred Fiduciary Covenant", "Beneficiary Ring-Fencing", "Corpus Dilution", "Initiate Your Eternal Legacy", "Electronic Mail". Ordinary Nigerian donors won't parse this. Simplify to a warm, plain, confident voice. *(Copy)*
7. **Placeholder stock imagery** (Unsplash) throughout. International donors expect to see the *actual* people, wells, schools, and buildings. *(Design)*

**Medium (polish & correctness):**

8. Undefined Tailwind color `text-brand-amber` used in Contact + Pledge (renders as inherited color — a visible bug; the token is `brand-gold`). *(Design)*
9. Footer uses `@` instead of `©`; footer "FAQ" links to `/contact`; social links point to bare `twitter.com`/`instagram.com`/`youtube.com`; `SITE_CONFIG.socials` is defined but unused. *(Design + Copy)*
10. Accessibility gaps: unlabeled "Copy" buttons, low-contrast `text-white/60` on dark, no skip link, motion not gated behind `prefers-reduced-motion`. *(Design/A11y)*

---

## Suggested implementation order (for Antigravity)

Work top-down; each block is a safe, self-contained commit.

1. **Branch off `main`** — e.g. `revamp/audit-fixes`. Never commit straight to `main`; the site auto-deploys from it on Vercel.
2. **Data integrity pass** — single source of truth in `siteData.ts`, Naira-first, mark unverified figures. (Unblocks Copy + Design.)
3. **Security pass** — upgrade deps, add security headers, wire forms to a real endpoint with validation + spam protection (or clearly disable them), remove/verify bank details.
4. **SEO/metadata pass** — split client pages so each route exports metadata; add `sitemap.ts`, `manifest`, favicon, OG image.
5. **Copy pass** — apply `02-COPY-REVIEW.md` rewrites page by page.
6. **Design pass** — fix the color-token bug, apply the layout/imagery/a11y recommendations, gate motion.
7. **Verify** — `npm run build` clean, `npm run lint` clean, Lighthouse (Performance/SEO/Best-Practices/Accessibility) ≥ 90 on mobile, and re-run `npm audit`.

## How Claude and Antigravity share this folder

- Treat `docs/REVAMP/*.md` as the spec. If a recommendation turns out to be wrong for the codebase, **update the doc** in the same commit so the two agents stay in sync.
- Keep commits small and message them by review item (e.g. `fix(data): single source of truth for impact metrics — see 03-SECURITY §Data integrity`).
- Do not touch live payment/bank details or publish unverified figures without Aleem's explicit go-ahead.
