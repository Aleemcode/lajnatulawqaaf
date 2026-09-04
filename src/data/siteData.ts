// ============================================================================
// SINGLE SOURCE OF TRUTH for all site content and figures.
//
// ⚠️ FIGURES_ARE_ILLUSTRATIVE: every number, valuation, beneficiary count and
// named person below is PLACEHOLDER / demo content pending verification by an
// authorised trustee. Do NOT present any of it as fact on the live site until
// verified. While this flag is true, the site shows an "illustrative figures"
// notice (see components/common/IllustrativeNotice.tsx). Set to false only once
// Aleem confirms real, audited values — and replace the placeholders first.
// See docs/REVAMP/03-SECURITY-AUDIT.md §C2/§C3.
//
// Currency: NAIRA-FIRST. Lead with ₦; add USD only as a clearly-labelled
// secondary for diaspora donors.
// ============================================================================

export const FIGURES_ARE_ILLUSTRATIVE = true;

export interface Project {
  id: string;
  title: string;
  titleArabic: string;
  category: 'real-estate' | 'education' | 'water' | 'healthcare';
  categoryLabel: string;
  location: string;
  valuation: string;
  annualYield: string;
  beneficiaries: string;
  summary: string;
  description: string;
  perpetuityModel: string;
  targetFund?: string;
  raisedFund?: string;
  progressPercent?: number;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface Trustee {
  name: string;
  role: string;
  roleArabic: string;
  bio: string;
  credentials: string[];
  imageUrl: string;
}

export interface ShariahScholar {
  name: string;
  role: string;
  titleArabic: string;
  bio: string;
  specialization: string;
  imageUrl: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  sublabel: string;
  change?: string;
}

export const SITE_CONFIG = {
  name: "Lajnatul Awqaaf Wassadaqaat",
  nameArabic: "لجنة الأوقاف والصدقات",
  // Balanced: everyday giving (Sadaqah/Zakat) AND lasting Waqf.
  tagline: "Give today. Give forever.",
  description:
    "A Nigerian Islamic charity for Sadaqah, Zakat, and Waqf. Give once for immediate relief, or start a Waqf that turns your gift into lasting assets — property, boreholes, schools — whose earnings help people every year. Scholar-guided and openly audited.",
  registrationNo: "CAC/IT/NO 142981",
  address: "Central Business District, Abuja, Nigeria", // TODO: confirm full verified address
  email: "contact@lajnatulawqaaf.org",
  phone: "+234 (0) 9 461 8000", // TODO: confirm verified phone
  socials: {
    twitter: "https://twitter.com/lajnahawqaaf",
    linkedin: "https://linkedin.com/company/lajnatulawqaaf",
    facebook: "https://facebook.com/lajnahawqaaf",
  },
};

// ---------------------------------------------------------------------------
// CENTRAL STATS — every headline number lives here once. Naira-first.
// Components must import from here; never hardcode these numbers in JSX.
// (Illustrative until verified — see FIGURES_ARE_ILLUSTRATIVE above.)
// ---------------------------------------------------------------------------
export const STATS = {
  assetsUnderManagement: "₦4.8B+",
  peopleHelped: "170,000+",
  activeProjects: "63",
  donorFamilies: "1,200+",
  shariahCompliance: "100%",
  adminCapPercent: "12%",
};

// The two ways to give — keep BOTH visible everywhere (balance).
export const GIVING_MODES = [
  {
    id: "give-now",
    label: "Give now",
    tagline: "A one-off gift — Sadaqah or Zakat",
    description:
      "Give any amount today and it goes straight to people in need — food, water, medical bills, school fees.",
  },
  {
    id: "start-waqf",
    label: "Start a Waqf",
    tagline: "A gift that keeps giving forever",
    description:
      "We keep your gift safe, invest it in assets that earn, and give away only the earnings — again and again. That's Sadaqah Jariyah.",
  },
];

export const IMPACT_METRICS: ImpactStat[] = [
  {
    value: STATS.assetsUnderManagement,
    label: "Held in lasting assets",
    sublabel: "Your gift is never spent down",
    change: "Naira-denominated",
  },
  {
    value: STATS.peopleHelped,
    label: "People helped so far",
    sublabel: "Clean water, health & schooling",
    change: "Across 6 states",
  },
  {
    value: STATS.shariahCompliance,
    label: "Scholar-approved",
    sublabel: "Checked every year by independent auditors",
    change: "Annual public report",
  },
  {
    value: STATS.activeProjects,
    label: "Projects running now",
    sublabel: "Shops, solar boreholes & schools",
    change: "More on the way",
  },
];

export const WAQF_PILLARS = [
  {
    id: "real-estate",
    title: "Property that funds care",
    titleArabic: "الأوقاف الاستثمارية العقارية",
    icon: "Building2",
    description:
      "We build and rent out shops and offices. The rent pays for orphans, healthcare, and relief — every month, for good.",
    stat: "₦2.4B endowed",
    accent: "brand-sky",
  },
  {
    id: "education",
    title: "Schools & scholarships",
    titleArabic: "وقف التعليم والدعوة",
    icon: "GraduationCap",
    description:
      "Endowed schools and full scholarships, so a child's education is paid for permanently.",
    stat: "1,200+ students",
    accent: "brand-gold",
  },
  {
    id: "water",
    title: "Clean water that lasts",
    titleArabic: "وقف المياه والبنية التحتية",
    icon: "Droplets",
    description:
      "Solar-powered boreholes that keep pumping clean water for 25+ years — with a fund set aside for repairs.",
    stat: "50 solar boreholes",
    accent: "brand-sky",
  },
  {
    id: "healthcare",
    title: "Health & emergency help",
    titleArabic: "وقف الرعاية الصحية والإغاثة",
    icon: "HeartPulse",
    description:
      "Dialysis, mobile clinics, and subsidised treatment for families who can't afford care.",
    stat: "3,200+ treatments/yr",
    accent: "brand-gold",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "al-barakah-tower",
    title: "Al-Barakah Commercial Tower",
    titleArabic: "برج البركة الوقفي التجاري",
    category: "real-estate",
    categoryLabel: "Commercial property",
    location: "Central Business District, Abuja",
    valuation: "₦2.4B",
    annualYield: "₦180M / year",
    beneficiaries: "450+ orphans supported permanently",
    summary:
      "A 7-storey office building. The rent it earns pays orphan stipends and school fees — every year, without touching your original gift.",
    description:
      "Al-Barakah Tower gives orphan welfare a steady income so support never stops. The building stays about 98% occupied. 85% of the rent goes straight to living stipends and school fees; 15% is kept for upkeep and reserves.",
    perpetuityModel:
      "Your gift is kept whole. Only the rent is shared out, twice a year, under Board oversight.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "al-kawthar-water",
    title: "Al-Kawthar Solar Water Network",
    titleArabic: "شبكة الكوثر للآبار الارتوازية بالطاقة الشمسية",
    category: "water",
    categoryLabel: "Clean water",
    location: "Kano, Kaduna & Niger (rural north)",
    valuation: "₦750M",
    annualYield: "38 built · 12 under way",
    beneficiaries: "170,000+ rural residents daily",
    summary:
      "Solar-powered deep boreholes with 20,000-litre tanks, giving whole communities clean water that keeps flowing.",
    description:
      "Each borehole has heavy-duty solar pumps, automatic filtering, and a repair fund set aside — so it keeps working for 25+ years, not just until the first breakdown.",
    perpetuityModel:
      "A trained community committee runs each site, with a dedicated maintenance fund.",
    targetFund: "₦180M",
    raisedFund: "₦142M",
    progressPercent: 78,
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "nur-al-hikmah",
    title: "Nur Al-Hikmah Institute & Library",
    titleArabic: "معهد ومكتبة نور الحكمة الإسلامية",
    category: "education",
    categoryLabel: "Education",
    location: "Ilorin, Kwara State",
    valuation: "₦1.1B",
    annualYield: "620 full scholarships",
    beneficiaries: "620 students & 2,500 community readers",
    summary:
      "A modern learning centre with 12 classrooms, a digital library, and an eco-friendly masjid.",
    description:
      "Free schooling in both STEM and Islamic studies. The endowment covers tuition, uniforms, textbooks, and teachers' pay — for good.",
    perpetuityModel: "A permanent education trust, registered with the CAC.",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "al-shifa-dialysis",
    title: "Al-Shifa Community Dialysis Centre",
    titleArabic: "مركز الشفاء الوقفي لغسيل الكلى",
    category: "healthcare",
    categoryLabel: "Healthcare",
    location: "Zaria, Kaduna State",
    valuation: "₦620M",
    annualYield: "3,200+ dialysis sessions subsidised",
    beneficiaries: "350+ kidney patients",
    summary:
      "An 8-bed dialysis unit offering free and subsidised kidney care to people who can't afford hospital rates.",
    description:
      "Kidney failure can push a family into crippling debt. Al-Shifa gives dignified, modern dialysis, with an endowment covering supplies and round-the-clock solar backup power.",
    perpetuityModel: "A medical Waqf run at zero profit.",
    targetFund: "₦120M",
    raisedFund: "₦85M",
    progressPercent: 71,
    imageUrl:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "bustan-al-khair",
    title: "Bustan Al-Khair Farm",
    titleArabic: "مزرعة بستان الخير الوقفية الزراعية",
    category: "real-estate",
    categoryLabel: "Farming",
    location: "Keffi, Nasarawa State",
    valuation: "₦450M",
    annualYield: "₦55M / harvest",
    beneficiaries: "Feeds 1,000+ families in Ramadan and hard times",
    summary:
      "A 120-hectare palm oil and grain farm that earns an income while growing food.",
    description:
      "Food security and steady income in one. The farm sells in-demand produce and puts the profit into the community's emergency food reserve.",
    perpetuityModel: "A permanent land endowment under certified farm management.",
    imageUrl:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
];

// NOTE: The people below are ILLUSTRATIVE placeholders pending verification.
// Do not present as real named individuals on the live site until confirmed.
export const SHARIAH_SCHOLARS: ShariahScholar[] = [
  {
    name: "Dr. Ahmad Bello Sanusi",
    role: "Chairman, Shariah Supervisory Board",
    titleArabic: "رئيس الهيئة الشرعية",
    bio: "PhD in Islamic Jurisprudence (Islamic University of Madinah). Certified Shariah Advisor & Auditor (CSAA), with over 20 years structuring Islamic endowments.",
    specialization: "Islamic commercial law (Fiqh al-Mu'amalat) & Waqf",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sheikh Muhammad Al-Mukhtar",
    role: "Senior Member, Shariah Board",
    titleArabic: "عضو الهيئة الشرعية الأول",
    bio: "Respected jurist and former Chief Justice of the Shariah Court of Appeal. Author of several works on modern Waqf governance.",
    specialization: "Waqf rulings & estate dedication",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ustadh Ibrahim Harun",
    role: "Head of Shariah Compliance & Audit",
    titleArabic: "رئيس الرقابة والتدقيق الشرعي",
    bio: "Specialist in Shariah governance and financial compliance. Oversees day-to-day screening and the annual Shariah certification.",
    specialization: "Shariah auditing & earnings screening",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

// NOTE: ILLUSTRATIVE placeholders pending verification — see note above.
export const TRUSTEES: Trustee[] = [
  {
    name: "Alhaji Mustapha K. Daura",
    role: "Chairman, Board of Trustees",
    roleArabic: "رئيس مجلس الأمناء",
    bio: "Senior investment banker with 35+ years leading financial institutions, and a committed philanthropist building modern Waqf across Africa.",
    credentials: ["Fellow, Chartered Institute of Bankers", "Former MD, Premier Bank"],
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Amina Yusuf-Ali",
    role: "Trustee, Healthcare & Social Development",
    roleArabic: "عضو مجلس الأمناء للشؤون الصحية",
    bio: "Consultant public-health physician who has led maternal healthcare and community medical programmes across 14 countries.",
    credentials: ["MBBS, MPH (Johns Hopkins)", "Member, Global Health Philanthropy Council"],
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Engr. Farooq Abdur-Rahman",
    role: "Trustee, Infrastructure & Project Delivery",
    roleArabic: "عضو مجلس الأمناء للمشاريع والبنية التحتية",
    bio: "Chartered civil engineer and developer, responsible for build quality, durability, and upkeep across all endowment assets.",
    credentials: ["FNSE, COREN Registered", "CEO, Horizon Infrastructure Partners"],
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export const FAQS = [
  {
    question: "What's the difference between normal Sadaqah and a Waqf?",
    answer:
      "Normal Sadaqah is spent once — like buying food for a family today. A Waqf is different: your gift is kept safe and invested, and only the earnings are given away. So it keeps helping people again and again — that's Sadaqah Jariyah, a reward that continues for you even after you pass, insha'Allah.",
  },
  {
    question: "How do you make sure everything is Shariah-compliant?",
    answer:
      "Every endowment deed, asset purchase, investment, and payout is checked by our independent Shariah board using international (AAOIFI) standards. We publish a Shariah report every year during Ramadan.",
  },
  {
    question: "Can I set up a Waqf in my family's name?",
    answer:
      "Yes. If you give property, funds, or a specific facility, you can set up your own Waqf with named beneficiaries you choose — once the Shariah board approves it. This is called Waqf Dhurri (family Waqf).",
  },
  {
    question: "How are running costs covered?",
    answer:
      "Following classical Islamic rules, running and maintenance costs are kept low — never more than 12%, and only ever taken from the earnings, never from your original gift.",
  },
];
