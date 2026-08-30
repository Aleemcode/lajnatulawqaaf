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
  tagline: "Nurturing Eternal Impact · Sustaining Generations Through Waqf & Sadaqah",
  description: "Premier Shariah-governed Islamic endowment institution mobilizing, managing, and distributing perpetual endowments with uncompromising integrity.",
  registrationNo: "CAC/IT/NO 142981",
  address: "Plot 842, Islamic Endowment Crescent, Central Business District, Abuja, Nigeria",
  email: "contact@lajnatulawqaaf.org",
  phone: "+234 (0) 9 461 8000",
  socials: {
    twitter: "https://twitter.com/lajnahawqaaf",
    linkedin: "https://linkedin.com/company/lajnatulawqaaf",
    facebook: "https://facebook.com/lajnahawqaaf",
  }
};

export const IMPACT_METRICS: ImpactStat[] = [
  {
    value: "$4.8M+",
    label: "Endowment Assets Under Management",
    sublabel: "100% Capital Corpus Preserved",
    change: "+18% YoY",
  },
  {
    value: "320,000+",
    label: "Perpetual Beneficiaries Served",
    sublabel: "Across Water, Health & Education",
    change: "Active in 6 States",
  },
  {
    value: "100%",
    label: "Shariah Compliant Operations",
    sublabel: "AAOIFI-Standard Audited & Certified",
    change: "Annual Fatwa Audit",
  },
  {
    value: "54+",
    label: "Active Endowment Facilities",
    sublabel: "Commercial Towers, Solar Wells & Schools",
    change: "12 In Progress",
  },
];

export const WAQF_PILLARS = [
  {
    id: "real-estate",
    title: "Commercial & Real Estate Awqaaf",
    titleArabic: "الأوقاف الاستثمارية العقارية",
    icon: "Building2",
    description: "Developing prime commercial properties where rental yields perpetually finance social relief, orphan sponsorships, and healthcare.",
    stat: "$2.4M Endowed",
    accent: "brand-sky",
  },
  {
    id: "education",
    title: "Educational & Da'wah Waqf",
    titleArabic: "وقف التعليم والدعوة",
    icon: "GraduationCap",
    description: "Endowed schools, full university scholarships, and research grants shaping future generations of ethical leaders.",
    stat: "1,200+ Scholars",
    accent: "brand-gold",
  },
  {
    id: "water",
    title: "Water & Community Infrastructure",
    titleArabic: "وقف المياه والبنية التحتية",
    icon: "Droplets",
    description: "Industrial-grade solar-powered boreholes and community water treatment hubs providing life-saving clean water.",
    stat: "50 Solar Grids",
    accent: "brand-sky",
  },
  {
    id: "healthcare",
    title: "Healthcare & Emergency Relief",
    titleArabic: "وقف الرعاية الصحية والإغاثة",
    icon: "HeartPulse",
    description: "Endowed dialysis centers, mobile clinics, and subsidized medical treatments for underprivileged families.",
    stat: "3,200+ Sessions/yr",
    accent: "brand-gold",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "al-barakah-tower",
    title: "Al-Barakah Commercial Tower Waqf",
    titleArabic: "برج البركة الوقفي التجاري",
    category: "real-estate",
    categoryLabel: "Commercial Real Estate",
    location: "Central Business District, Abuja",
    valuation: "$2,400,000",
    annualYield: "$180,000 / year",
    beneficiaries: "450+ Registered Orphans Permanently Funded",
    summary: "7-storey prime commercial office complex producing steady perpetual rental returns dedicated to orphan stipends and welfare.",
    description: "Al-Barakah Tower is a flagship real estate endowment designed to eliminate funding instability for orphan welfare. The building maintains 98% commercial occupancy. 85% of net revenues are channeled to living stipends and school fees, while 15% is reinvested into building reserves.",
    perpetuityModel: "100% Principal Preserved. Operating revenues distributed bi-annually under Board oversight.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "al-kawthar-water",
    title: "Al-Kawthar Solar Water Grid Network",
    titleArabic: "شبكة الكوثر للآبار الارتوازية بالطاقة الشمسية",
    category: "water",
    categoryLabel: "Water Infrastructure",
    location: "Northern Rural Corridors (Kano, Kaduna & Niger)",
    valuation: "$750,000",
    annualYield: "38 Completed · 12 Active Installations",
    beneficiaries: "195,000+ Rural Residents Daily",
    summary: "Solar-powered deep industrial boreholes with 20,000L overhead tanks, providing uninterrupted clean potable water.",
    description: "Water scarcity is transformed into perpetual abundance. Each solar borehole unit is equipped with heavy-duty submersible pumps, automated filtration, and a maintenance endowment reserve ensuring 25+ years of operational life.",
    perpetuityModel: "Community management committee trained with dedicated maintenance escrow fund.",
    targetFund: "$180,000",
    raisedFund: "$142,000",
    progressPercent: 78,
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "nur-al-hikmah",
    title: "Nur Al-Hikmah Islamic Institute & Library",
    titleArabic: "معهد ومكتبة نور الحكمة الإسلامية",
    category: "education",
    categoryLabel: "Education & Research",
    location: "Ilorin, Kwara State",
    valuation: "$1,100,000",
    annualYield: "620 Perpetual Full Scholarships",
    beneficiaries: "620 Students & 2,500 Community Readers",
    summary: "State-of-the-art educational complex featuring 12 classrooms, a digital research library, and an eco-friendly masjid.",
    description: "The institute provides free bilingual education in STEM and Islamic Sciences. Endowment proceeds cover tuition, uniforms, textbooks, and teacher compensation in perpetuity.",
    perpetuityModel: "Permanent educational trust registered with the Corporate Affairs Commission.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
  },
  {
    id: "al-shifa-dialysis",
    title: "Al-Shifa Community Dialysis Center",
    titleArabic: "مركز الشفاء الوقفي لغسيل الكلى",
    category: "healthcare",
    categoryLabel: "Healthcare & Welfare",
    location: "Zaria, Kaduna State",
    valuation: "$620,000",
    annualYield: "3,200+ Dialysis Sessions Subsidized",
    beneficiaries: "350+ Chronic Kidney Patients",
    summary: "8-bed modern hemodialysis unit offering subsidized and free renal care to patients who cannot afford commercial hospital rates.",
    description: "Renal failure often forces families into catastrophic debt. Al-Shifa Center provides dignified, state-of-the-art dialysis backed by an endowment fund covering medical consumables and continuous solar power backup.",
    perpetuityModel: "Medical Waqf endowment with zero-profit pricing model.",
    targetFund: "$120,000",
    raisedFund: "$85,000",
    progressPercent: 71,
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  },
  {
    id: "bustan-al-khair",
    title: "Bustan Al-Khair Agro-Waqf Farm",
    titleArabic: "مزرعة بستان الخير الوقفية الزراعية",
    category: "real-estate",
    categoryLabel: "Commercial Agriculture",
    location: "Keffi, Nasarawa State",
    valuation: "$450,000",
    annualYield: "$55,000 / harvest cycle",
    beneficiaries: "Feeds 1,000+ vulnerable families during Ramadan and crisis periods",
    summary: "120-hectare mechanized palm oil and grain farm operating as an income-generating agricultural Waqf.",
    description: "Combining food security with long-term financial yield, Bustan Al-Khair harvests high-demand produce, directing commercial profits to community emergency food reserves.",
    perpetuityModel: "Perpetual land deed with certified agricultural management.",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
  }
];

export const SHARIAH_SCHOLARS: ShariahScholar[] = [
  {
    name: "Dr. Ahmad Bello Sanusi",
    role: "Chairman, Shariah Supervisory Board",
    titleArabic: "رئيس الهيئة الشرعية",
    bio: "Holder of a PhD in Islamic Jurisprudence from the Islamic University of Madinah. Certified Shariah Advisor & Auditor (CSAA) by AAOIFI with over 20 years in Islamic endowment structuring.",
    specialization: "Islamic Commercial Jurisprudence (Fiqh al-Muamalat) & Waqf Law",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sheikh Muhammad Al-Mukhtar",
    role: "Senior Member, Shariah Board",
    titleArabic: "عضو الهيئة الشرعية الأول",
    bio: "Distinguished jurist and former Chief Justice of the Shariah Court of Appeal. Author of several authoritative treatises on contemporary Waqf governance.",
    specialization: "Judicial Waqf Adjudication & Estate Dedication",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ustadh Ibrahim Harun",
    role: "Head of Shariah Compliance & Audit",
    titleArabic: "رئيس الرقابة والتدقيق الشرعي",
    bio: "Specialist in Shariah governance frameworks and financial compliance. Oversees day-to-day transaction screening and annual Shariah compliance certification.",
    specialization: "Shariah Auditing & Yield Allocation Screening",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

export const TRUSTEES: Trustee[] = [
  {
    name: "Alhaji Mustapha K. Daura",
    role: "Chairman, Board of Trustees",
    roleArabic: "رئيس مجلس الأمناء",
    bio: "Senior Investment Banker and corporate executive with 35+ years leading financial institutions. Dedicated philanthropist committed to institutionalizing modern Waqf across Africa.",
    credentials: ["Fellow, Chartered Institute of Bankers", "Former Managing Director, Premier Bank"],
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Amina Yusuf-Ali",
    role: "Trustee, Healthcare & Social Development",
    roleArabic: "عضو مجلس الأمناء للشؤون الصحية",
    bio: "Consultant Public Health Physician and humanitarian leader who has spearheaded maternal healthcare and community medical interventions across 14 nations.",
    credentials: ["MBBS, MPH (Johns Hopkins)", "Member, Global Health Philanthropy Council"],
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Engr. Farooq Abdur-Rahman",
    role: "Trustee, Infrastructure & Project Delivery",
    roleArabic: "عضو مجلس الأمناء للمشاريع والبنية التحتية",
    bio: "Chartered Civil Engineer and real estate developer overseeing quality assurance, structural durability, and maintenance governance across all Waqf assets.",
    credentials: ["FNSE, COREN Registered", "CEO, Horizon Infrastructure Partners"],
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export const FAQS = [
  {
    question: "What is the difference between general Sadaqah and Waqf?",
    answer: "General Sadaqah is typically spent and consumed directly for immediate relief (e.g. food aid). A Waqf, on the other hand, preserves the capital corpus (Asl al-Waqf) in perpetuity and uses only the recurring returns or physical utility to fund social causes continuously, generating ongoing Sadaqah Jariyah for the donor."
  },
  {
    question: "How does Lajnatul Awqaaf ensure Shariah compliance?",
    answer: "All endowment deeds, asset acquisitions, investments, and distributions are audited by our independent Shariah Supervisory Board under AAOIFI standards. An annual public Shariah Report is released every Ramadan."
  },
  {
    question: "Can I establish a named family Waqf (Waqf Dhurri / Mushtarak)?",
    answer: "Yes. Donors contributing designated real estate, capital funds, or specialized facilities can establish customized Waqf charters with designated perpetual beneficiary directives, subject to Shariah Supervisory Board validation."
  },
  {
    question: "How are administrative expenses covered?",
    answer: "In strict accordance with Classical Islamic Waqf Jurisprudence, administrative and maintenance fees are drawn at a low, regulated percentage (under 12%) strictly from generated investment yields—never eroding the original capital corpus."
  }
];
