# 02 — Copy Review (Muslim Expert Copywriter)

**Lens:** A Muslim copywriter who knows Waqf and Sadaqah, writes clean English for a Nigerian audience, and understands what makes local donors *and* diaspora/philanthropist donors give.
**Goal set with Aleem:** simple, converts, easy to understand for Nigerians and for donors/philanthropists. **Naira-first.**

---

## The core problem

The current copy is written like a **legal prospectus for an Islamic finance conference**, not like an invitation to give Sadaqah. It leans on jargon — "capital corpus (Asl al-Waqf)", "fiduciary stewardship", "Beneficiary Ring-Fencing", "Corpus Dilution", "Yield Distribution Mandate", "Sacred Fiduciary Covenant", "Initiate Your Eternal Legacy", "Electronic Mail". A market trader in Ilorin, a doctor in Abuja, and a Nigerian donor in London should *all* understand every sentence on first read. Right now none of them will.

Waqf **is** an unfamiliar concept to many Muslims — so the site's job is to *teach it simply and make giving feel easy and trustworthy*, not to prove the team's vocabulary.

### Seven rules for the rewrite

1. **Plain words.** "Your money is protected" not "100% capital corpus preservation". Explain a term the first time, then use it.
2. **Speak to "you".** "You give once. It keeps giving forever." not "Donors contributing designated real estate…".
3. **Naira-first, one set of numbers.** Every figure in ₦, USD in brackets only where diaspora matters. Fix the contradictions (see below).
4. **Lead with benefit + reward, back with proof.** The *why* (ongoing reward — Sadaqah Jariyah; real impact) comes before the *how* (governance, AAOIFI, audits).
5. **Warm, confident, humble.** Islamic warmth ("Jazakallahu Khayran") is good — keep it. Grand self-praise ("Premier", "uncompromising", "Sacred") — cut it. Let the proof speak.
6. **Every section ends with one clear action.** Give / See projects / Talk to us. No dead ends.
7. **Balance Waqf with Sadaqah — and the cause with the mechanism.** (See the callout below — the most important structural fix.)

### ⚖️ Balance: this is *Awqaaf wassadaqaat*, not a Waqf-only site

The organisation's own name is **Lajnatul Awqaaf *Wassadaqaat*** — the Committee of **Endowments *and* Charities.** The current copy (and my first-draft rewrites above) lean almost entirely on **Waqf**, which unbalances the site in two ways that cost donations:

1. **Waqf vs. everyday giving.** Setting up a Waqf is a big, considered act — most visitors aren't ready for it on day one, and many simply want to *give something today*. The site must offer **both paths with equal clarity**: a lasting **Waqf** *and* a simple **one-off Sadaqah / Zakat** gift (even ₦1,000). Leading only with "Establish your Waqf" turns away the majority of willing donors. Give them an easy "Give now" and let Waqf be the deeper commitment they grow into.
2. **Mechanism vs. cause.** Words like *Waqf, corpus, yield, endowment* describe **how** the money works. Donors give because of **who** it reaches — the orphan, the dialysis patient, the child in school, the family that now has clean water. **Lead with the human cause; use Waqf as the powerful "how" underneath it.** Every Waqf explanation should land on a face, not a financial structure.

Practically: wherever a CTA, heading, or card below says "Waqf" as the *only* option, add or pair it with a plain giving option and a human outcome. The rewrites below are updated to reflect this; keep the balance as you apply the rest.

---

## ⚠️ Fix the numbers before anything else (shared with Security)

The same facts appear with different values across the site. This is the fastest way to lose a donor's trust and it is a copy problem as much as a data problem.

| Fact | Where it disagrees |
|---|---|
| Assets under management | `₦4.8B+` (Hero) vs `$4.8M+` (Impact bar / siteData) |
| Beneficiaries | `320,000+` (Impact bar) vs `195,000+` (one project) vs `170,000+` (Footer text) vs `100k+` (Footer stat) |
| Active endowments | `54+` (Impact bar) vs `63+` (Hero) |
| Scholars/Trustees | `1,200+ Scholars` (pillars) vs `100+ Scholars & Trustees` (About) |

**Action:** decide the real, verified numbers with Aleem, put them **once** in `siteData.ts`, and render everywhere from there. Until verified, mark them illustrative (see Security §Data integrity). **Naira is the lead unit.**

---

## Page-by-page rewrites

Below, **Before → After.** After-copy is drafted to drop straight into `siteData.ts` and the components. Keep Islamic terms (Waqf, Sadaqah Jariyah) — just explain them once.

### Global / tagline (`SITE_CONFIG`)

- **Tagline —** Before: *"Nurturing Eternal Impact · Sustaining Generations Through Waqf & Sadaqah"* (note: the original at least named *both* Waqf and Sadaqah — keep that balance).
  → After: **"Give today. Give forever."** — one line that holds both an everyday Sadaqah gift *and* a lasting Waqf. (sub: *"Your gift feeds families, students, and patients now — and your Waqf keeps giving for good, insha'Allah."*) If you prefer the punchier Waqf-only line **"Give once. Keep giving forever."**, pair it on the page with a visible everyday-giving option so the site isn't Waqf-only.
- **Description —** Before: *"Premier Shariah-governed Islamic endowment institution mobilizing, managing, and distributing perpetual endowments with uncompromising integrity."*
  → After: **"A Nigerian Islamic charity for Sadaqah, Zakat, and Waqf. Give once for immediate relief, or start a Waqf that turns your gift into lasting assets — property, boreholes, schools — whose earnings help people every year. Scholar-guided and openly audited."**

### Homepage — Hero (`HeroBentoGrid.tsx`)

- **Badge —** *"Shariah-Governed Islamic Endowment Fund · AAOIFI Standards"* → keep, but shorten to **"Scholar-governed · Independently audited"** (AAOIFI means little to a lay donor; move it to the transparency page where you explain it).
- **Headline —** *"Empowering Communities Through Perpetual Waqf"* → **"Your gift that never stops giving."** (or keep "Waqf" with a one-line explainer beneath).
- **Subtitle —** Before: *"We preserve 100% of your charitable principal in revenue-generating commercial assets, dedicating pure annual yields to education, clean water, and healthcare across Nigeria."*
  → After: **"We keep 100% of your gift safe and invest it in things that earn — like shops and boreholes. Every year, the earnings pay for schools, clean water, and healthcare across Nigeria. Your gift stays; the good keeps flowing."**
- **CTA —** *"Establish Waqf Today"* → offer **two balanced paths**, not one: primary **"Give now"** (fast, any amount — Sadaqah/Zakat) and secondary **"Start a Waqf"** (the lasting commitment). Keep a quiet tertiary link: **"How Waqf works"**. Right now the hero pushes only the hardest ask.
- **Card labels —** *"Fiduciary Covenant"* → **"Our promise to you"**; *"Direct Annual Social Yield"* → **"Goes straight to people each year"**; *"Capital Preservation — 100% Inviolable"* → **"Your gift protected — 100%, always"**; *"Pledge a Share"* → **"Give a share"**.

### Homepage — Impact bar (`IMPACT_METRICS`)

Rewrite Naira-first and in human terms:
- *"Endowment Assets Under Management / 100% Capital Corpus Preserved"* → **"Held in lasting assets / Your gift is never spent down"** (value in ₦).
- *"Perpetual Beneficiaries Served / Across Water, Health & Education"* → **"People helped so far / Clean water, health & schooling"**.
- *"Shariah Compliant Operations / AAOIFI-Standard Audited & Certified"* → **"Scholar-approved / Checked every year by independent auditors"**.
- *"Active Endowment Facilities / Commercial Towers, Solar Wells & Schools"* → **"Projects running now / Shops, solar boreholes & schools"**.

### Homepage — Pillars (`WAQF_PILLARS`)

Titles are fine but wordy. Simplify:
- *"Commercial & Real Estate Awqaaf"* → **"Property that funds care"** — *"We build and rent out shops and offices. The rent pays for orphans, healthcare, and relief — every month, for good."*
- *"Educational & Da'wah Waqf"* → **"Schools & scholarships"** — *"Endowed schools and full scholarships, so a child's education is paid for permanently."*
- *"Water & Community Infrastructure"* → **"Clean water that lasts"** — *"Solar-powered boreholes that keep pumping clean water for 25+ years — with a fund set aside for repairs."*
- *"Healthcare & Emergency Relief"* → **"Health & emergency help"** — *"Dialysis, mobile clinics, and subsidised treatment for families who can't afford care."*

### Homepage — CTA section (`CTASection.tsx`)

- Badge *"Sadaqah Jariyah That Never Ceases"* → **"Sadaqah Jariyah — a reward that never stops"** (explain the term inline once).
- Headline *"Leave a Legacy of Eternal Blessing"* → **"Start a gift that keeps rewarding you — forever."**
- Body: *"Whether dedicating a named commercial property, endowing a rural solar borehole network, or pledging a fractional share—your reward continues for generations."* → **"Give a whole project in your family's name, fund a borehole, or add a share of any size. However you give, the reward keeps coming — for you and those you love — long after."**
- Buttons: *"Establish Your Waqf Now"* → **"Give now"**; *"Speak to an Advisor"* → **"Talk to us first"**.

### FAQ (`FAQS`)

Content is good and genuinely useful — just plain-language it. Example:
- *"General Sadaqah is typically spent and consumed directly… A Waqf, on the other hand, preserves the capital corpus (Asl al-Waqf) in perpetuity…"*
  → **"Normal Sadaqah is spent once — like buying food for a family today. A Waqf is different: your gift is kept safe and invested, and only the *earnings* are given away. So it keeps helping people again and again — that's Sadaqah Jariyah, a reward that continues for you even after you pass, insha'Allah."**
- Keep the family-Waqf, Shariah-compliance, and admin-cost questions — simplify "under 12% strictly from generated investment yields—never eroding the original capital corpus" → **"never more than 12%, and only ever taken from the earnings — never from your original gift."**

### Contact page (`contact/page.tsx`)

- Heading *"Initiate Your Eternal Legacy"* → **"Let's talk about your Waqf"**.
- Intro *"Connect with our Board of Trustees and Shariah advisors to structure your Waqf endowment or direct your inquiries."* → **"Want to start a Waqf, ask a question, or partner with us? Send a message and the right person will reply — usually within 2 working days."**
- Labels: *"Electronic Mail"* → **"Email"**; *"Official Hours"* → **"Opening hours"**; *"Office Secretariat"* → **"Our office"**; *"Direct Line"* → **"Phone"**.
- Submit button *"Submit Inquiry to Board of Trustees"* → **"Send message"**.
- *"Schedule a Consultation … bespoke structuring for family endowments, real estate trusts, and corporate social responsibility funds."* → **"Book a free consultation. We'll help you set up a family Waqf, donate a property, or plan your company's giving — whatever fits you."**
- **Bank details:** keep them plain and *verified* (see Security). Label clearly: **"Give directly by bank transfer"**, "For donors in Nigeria (₦)" / "For donors abroad (USD)". Add "Please send your name so we can send you a receipt and du'a."

### Pledge modal (`PledgeModal.tsx`)

**Balance:** this modal is currently Waqf-only. Add a simple choice at the top — **"Give a one-off gift"** vs **"Start a lasting Waqf"** — so the same flow serves both. Copy below assumes that choice exists.

- *"Dedicate an Endowment"* → **"Give / Start your Waqf"** (heading adapts to the choice above); *"Endowment Portfolio Cause"* → **"What would you like to support?"**; *"Message or Dedication Intent"* → **"Anything you'd like us to know? (optional)"**; *"Submit Waqf Pledge Request"* → **"Send my pledge"**.
- Success message is lovely ("Jazakallahu Khayran!") — keep. Simplify the follow-up: **"We've received your pledge. A member of our team will reach out to help you complete it. Jazakallahu Khayran."**

### Footer (`Footer.tsx`)

- *"Through our Shariah-governed endowment foundation, we have helped empower over 170,000+ people…"* → align the number with the rest of the site, and simplify: **"A Nigerian Waqf trust. So far we've helped [X] people through property, schools, and solar-powered clean water."**
- "Privacy & Fiduciary Policy" → **"Privacy Policy"**; "Shariah Fatwa Terms" → **"Shariah rulings"** (and make sure these pages exist — see Design/Security).

---

## Plain-language glossary (put this on the site, e.g. Transparency or a footer link)

Teaching the vocabulary *builds* trust instead of assuming it:

- **Waqf** — an Islamic endowment. You give an asset (or money to buy one); it's kept forever and only its earnings are spent on good causes.
- **Sadaqah Jariyah** — "ongoing charity." A reward that keeps reaching you even after death, because the good keeps happening.
- **Corpus / principal** — your original gift. We never spend it; we only spend what it earns.
- **Yield** — the earnings (rent, profit) your gift produces each year.
- **Shariah board** — the scholars who check that everything we do is permissible in Islam.
- **AAOIFI** — an international body that sets standards for Islamic finance; we follow their auditing rules.
- **Riba** — interest, forbidden in Islam. We keep all funds in non-interest (Islamic) accounts.

---

## Tone examples (house voice)

- ✅ "Your gift is safe. Only what it earns is given away — so it helps people again and again."
- ✅ "You can give a whole borehole, or add ₦5,000 to one. Both are Sadaqah Jariyah."
- ❌ "We preserve the capital corpus in perpetuity, dedicating pure annual yields to social causes."
- ❌ "Initiate your eternal legacy through our fiduciary covenant."

## Copy checklist (hand to Antigravity)

- [ ] **Balance Waqf with everyday Sadaqah/Zakat** — offer a "Give now" path everywhere, not only "Start a Waqf"; lead with the human cause, use Waqf as the "how"
- [ ] One verified set of numbers, Naira-first, in `siteData.ts`
- [ ] Rewrite `SITE_CONFIG` tagline/description, `IMPACT_METRICS`, `WAQF_PILLARS`, `FAQS`
- [ ] Rewrite Hero, CTA, Contact, Pledge modal, Footer strings per above
- [ ] Replace jargon site-wide ("corpus", "fiduciary", "perpetuity", "yield", "AAOIFI") with plain words or inline explanations
- [ ] Add the plain-language glossary page/section
- [ ] Every section ends in one clear action
