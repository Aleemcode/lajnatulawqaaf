# 03 — Security & Trust Audit

**Lens:** Senior application-security & trust auditor, reviewing a charity that solicits money and personal data online.
**Scope:** the Next.js app in this repo as of 2026-09-04. Findings are ranked by severity. For a fundraising charity, **trust and data-integrity issues are security issues** — they're included here alongside classic app-sec.

> Severity key: **CRITICAL** (fix before any promotion) · **HIGH** (fix before international launch) · **MEDIUM** · **LOW**.

---

## CRITICAL

### C1. Hardcoded, unverifiable bank account numbers on a donation site
`src/app/contact/page.tsx` renders fixed account numbers (`000 123 4567` / `000 987 6543`) with one-click copy, under "Jaiz Bank Plc (NGN)" and "Lotus Bank (USD)". These are clearly placeholders.

**Why it's critical:** on a charity site, bank details are the highest-trust element and the #1 target for tampering/phishing. If a wrong or stale number ships — or if an attacker who gains repo/deploy access swaps one digit — donations flow to the wrong account and the charity's reputation is destroyed.

**Fix:**
- Replace with the **real, verified** account details, confirmed by an authorised trustee (not from memory).
- Keep them in `siteData.ts` (single source), not scattered in JSX.
- Add a governance note in the repo: who is allowed to change these and how they're verified.
- Consider showing them as an image *plus* text, or behind a "reveal" that logs intent — and add a visible "Always confirm our account details by calling +234… before transferring" line to defend against phishing clones.

### C2. Presenting unverified figures as fact (data integrity / donor honesty)
Impact numbers, valuations, beneficiary counts, named trustees, and named Shariah scholars are **placeholder/demo content** (confirmed with Aleem) yet are presented as real, audited fact ("$4.8M+ … 100% Capital Corpus Preserved", "320,000+ Perpetual Beneficiaries", real-looking names with bios). Soliciting donations against fabricated impact figures is a legal and reputational risk (misrepresentation), independent of the tech.

**Fix (until verified):**
- Do **not** publish any figure or named person as fact until Aleem confirms it.
- Where illustrative content must stay during development, mark it visibly (e.g. a banner or `Illustrative figures — pending audit` label) and gate the site behind noindex/staging.
- Establish one verified dataset in `siteData.ts`; see C3 for the consistency defect.

### C3. Contradictory numbers across the site
The same fact shows different values in different components (full table in `02-COPY-REVIEW.md`): AUM `₦4.8B` vs `$4.8M`; beneficiaries `320,000` / `195,000` / `170,000` / `100k`; endowments `54` vs `63`; scholars `1,200` vs `100`. This is both a trust failure and a maintenance defect (values are duplicated in `siteData.ts`, `HeroBentoGrid.tsx`, and `Footer.tsx`).

**Fix:** single source of truth in `siteData.ts`, Naira-first, imported everywhere. Remove all hardcoded numbers from components.

---

## HIGH

### H1. Known dependency vulnerabilities
`npm audit` (2026-09-04): **1 high + 1 moderate.**
- **`postcss` <= 8.5.22 — HIGH** (XSS via unescaped `</style>`; arbitrary `.map` file read via attacker-controlled `sourceMappingURL`). Pulled in transitively under `next`.
- **`next` (bundled)** depends on the vulnerable `postcss`.

Additionally, **Next.js `15.1.7` is outdated** and 15.x has had notable advisories (e.g. the March 2025 middleware auth-bypass, plus cache/SSRF fixes in later patches). This app ships no custom middleware, which lowers exposure, but running an old release is unnecessary risk.

**Fix:**
- Upgrade to the latest patched Next.js and let its lockfile pull a fixed `postcss`. Test the build (React 19 + Tailwind 3 should carry over). If staying on the 15.x line, take the newest 15.x patch; if moving to 16.x, treat it as a tested upgrade, not `audit fix --force` on autopilot.
- Re-run `npm audit` until clean; add it to CI (see H5).

### H2. Forms are non-functional and unhardened
- `contact/page.tsx` `handleSubmit` only `console.log`s the data (also a minor info-leak in the browser console). **Nothing is sent anywhere** — a donor who "Submits Inquiry to Board of Trustees" reaches no one.
- `PledgeModal.tsx` `handleSubmit` just sets `submitted = true` — no data captured or transmitted.

**Why it matters:** beyond the broken UX, the moment these are wired to a backend they become the app's main attack surface.

**Fix (when you wire them — donations stay out of scope, but contact/pledge should actually work):**
- Handle submission in a **Next.js Route Handler / Server Action**, never trust the client.
- **Validate & sanitize** server-side (e.g. `zod`): types, lengths, email/phone format; reject oversized payloads.
- **Anti-spam:** honeypot field + Cloudflare Turnstile (or hCaptcha); rate-limit by IP (e.g. Upstash) — charity contact forms attract spam and abuse.
- Send via a reputable email/API (Resend, Postmark) with the key in a **server env var**, never in client code.
- Escape/encode all user input anywhere it's later displayed; set an explicit success/error state (don't optimistically show success as the modal does now).
- Remove the `console.log(formData)`.

### H3. No security headers
Neither `next.config.mjs` nor `vercel.json` sets any security headers. Missing: **Content-Security-Policy**, `Strict-Transport-Security`, `X-Frame-Options`/`frame-ancestors`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

**Fix:** add a `headers()` block in `next.config.mjs`. Starter (tighten CSP to your real asset hosts and test — Framer Motion/inline styles may need care):

```js
// next.config.mjs
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "img-src 'self' data: https://images.unsplash.com https://framerusercontent.com https://i.pravatar.cc",
      "script-src 'self' 'unsafe-inline'",          // narrow once you audit inline scripts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [ /* ...existing... */ ] },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
export default nextConfig;
```

Moving fonts to `next/font` (see Design §5) and self-hosting images lets you drop the Google/Unsplash CSP exceptions and tighten further. Verify the result at securityheaders.com after deploy.

### H4. SEO/metadata is broken on 4 of 5 pages (reach + shareability)
About, Endowments, Transparency, and Contact are all `'use client'`, so they **cannot export `metadata`** — only `layout.tsx` sets it, meaning every route shares one title/description. There is **no `sitemap`, no `robots` sitemap reference, no web manifest, no favicon, no canonical URLs, and no per-page Open Graph image.** For a site meant to reach international donors and rank in search, this is a launch blocker.

**Fix:**
- Refactor each page so the **route** is a Server Component that exports `metadata` (or `generateMetadata`) and renders a small `'use client'` child for the interactive parts (form, filters). Don't make the whole page a client component.
- Add `src/app/sitemap.ts` and `src/app/robots.ts` (reference the sitemap; set the canonical host).
- Add `src/app/manifest.ts`, `icon`/`apple-icon`, and per-page `opengraph-image`.
- Set `metadataBase` and canonical URLs in `layout.tsx`.
- Add JSON-LD structured data (`Organization` + `NGO`) — the `searchfit-seo:schema-markup` skill can generate this.

### H5. No CI safety net
No lint/build/audit gate before deploy; Vercel auto-deploys `main`. One bad merge ships to donors.

**Fix:** GitHub Actions on PRs to `main`: `npm ci`, `npm run lint`, `npm run build`, `npm audit --omit=dev`. Protect `main` (require the check + review). Work on `revamp/*` branches.

---

## MEDIUM

### M1. Collecting personal data with no privacy policy / consent (NDPR)
The forms collect name, email, phone, and message. Nigeria's **NDPA/NDPR** (and GDPR for EU/UK diaspora donors) require a privacy notice, a lawful basis, and usually consent. The footer "Privacy & Fiduciary Policy" link points to `/transparency`, which is not a privacy policy.

**Fix:** publish a real Privacy Policy page; add a consent checkbox + link on both forms; state retention and contact for data requests. (Not legal advice — have counsel review.)

### M2. Third-party image hotlinking
`next.config.mjs` allows `images.unsplash.com`, `framerusercontent.com`, `i.pravatar.cc`. Hotlinked third-party images leak referrer data to those hosts, can break, and (with `i.pravatar.cc` random avatars implying real donors) misrepresent supporters. Self-host real images in `/public` or a controlled CDN; drop unused remote patterns.

### M3. `console.log` of user data
`contact/page.tsx` logs the full form object. Remove before launch — avoid writing user PII to the browser console.

### M4. Client-side clipboard write without feedback/label
The bank "Copy" buttons call `navigator.clipboard.writeText(...)` with no success feedback and no `aria-label`. Add both; also handle the promise rejection (clipboard can throw in insecure contexts).

---

## LOW

- **L1.** No `security.txt` (`/.well-known/security.txt`) for vulnerability reports — nice-to-have for an institution.
- **L2.** Footer social links go to bare domains (`https://twitter.com`) — not a vuln, but wire to real, verified handles (`SITE_CONFIG.socials`) so users aren't sent to a generic page (mild phishing-confusion risk).
- **L3.** `reactStrictMode` on (good). No secrets committed; `.gitignore` correctly excludes `.env*.local` and `*.pem` (good). Keep it that way — never commit keys for the future email/payment integrations.
- **L4.** Add an error boundary / `not-found.tsx` / `error.tsx` so failures don't expose stack traces.

---

## Security & trust checklist (hand to Antigravity)

- [ ] **C1** Replace bank details with real, trustee-verified values in `siteData.ts` + anti-phishing note
- [ ] **C2** Remove/label all unverified figures & named people until confirmed; noindex staging
- [ ] **C3** Single source of truth for all numbers, Naira-first
- [ ] **H1** Upgrade Next.js + postcss; `npm audit` clean
- [ ] **H2** Wire forms to a validated, rate-limited, spam-protected server endpoint (or clearly disable); remove console.log
- [ ] **H3** Add security headers + CSP in `next.config.mjs`; verify on securityheaders.com
- [ ] **H4** Server-component routes with per-page metadata; sitemap, robots, manifest, favicon, OG images, JSON-LD
- [ ] **H5** CI: lint + build + audit on PRs; protect `main`
- [ ] **M1** Privacy Policy + consent on forms (NDPR)
- [ ] **M2** Self-host images; drop unused remote patterns
- [ ] **M3/M4** Remove PII logging; label + handle clipboard buttons
- [ ] **L1–L4** security.txt, real socials, error/not-found pages
