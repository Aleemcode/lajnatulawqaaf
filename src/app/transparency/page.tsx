'use client';

import React, { useState } from 'react';
import { GlassButton } from '@/components/common/GlassButton';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { PledgeModal } from '@/components/common/PledgeModal';
import { FileText, ShieldCheck, Download, PieChart, Activity, Lock, Search, Shield } from 'lucide-react';

const reports = [
  {
    title: '2024 Annual Audited Financial Statement',
    auditor: 'Independent Tier-1 Chartered Accountants',
    date: 'Published Ramadan 1446 / March 2025',
    size: '3.2 MB · PDF',
    type: 'Financial Audit',
  },
  {
    title: '2024 Shariah Supervisory Board Certification',
    auditor: 'AAOIFI Certified Shariah Committee',
    date: 'Published Shawwal 1446 / April 2025',
    size: '1.8 MB · PDF',
    type: 'Fatwa & Compliance',
  },
  {
    title: 'Al-Kawthar Solar Water Grid Impact Assessment',
    auditor: 'Community Impact Evaluation Board',
    date: 'Published Dhul Hijjah 1445 / June 2024',
    size: '4.1 MB · PDF',
    type: 'Field Impact Report',
  },
  {
    title: '2023 Annual Audited Financial Statement',
    auditor: 'Independent Tier-1 Chartered Accountants',
    date: 'Published Ramadan 1445 / April 2024',
    size: '2.8 MB · PDF',
    type: 'Financial Audit',
  },
];

export default function TransparencyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-mist overflow-hidden pt-28 sm:pt-36 pb-20 text-brand-navy">
      <OrganicBlobs />

      <main className="relative z-10">
        {/* Section 1: Header & Fiduciary Covenant */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-brand-royal/10 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-royal/5 border border-brand-royal/15 rounded-full text-xs font-cairo font-bold text-brand-royal w-fit shadow-sm">
                <ShieldCheck size={14} className="text-brand-sky" />
                <span>Audits & Shariah Assurance</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Certified in strict accordance with AAOIFI international Islamic endowment standards and audited by independent chartered accountants.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white border border-slate-200/80 rounded-full text-xs font-semibold text-brand-royal font-cairo shadow-sm">
                  0% Corpus Erosion
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200/80 rounded-full text-xs font-semibold text-brand-royal font-cairo shadow-sm">
                  85% Social Yield
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200/80 rounded-full text-xs font-semibold text-brand-royal font-cairo shadow-sm">
                  15% Asset Reserve
                </span>
              </div>
            </div>

            <div className="md:col-span-8 p-8 sm:p-14 flex flex-col justify-center items-start space-y-6 bg-white/40">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cairo text-brand-navy leading-tight">
                Uncompromising transparency and mathematical accountability for eternal endowments.
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                Every naira and dollar contributed into our endowments is audited, accounted for, and publicly reported with complete Shariah fatwa compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Public Audit Archive (2x2 Grid) */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto p-8 sm:p-14">
            <div className="mb-10 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold shadow-sm">
                <span>Official Disclosures</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-cairo text-brand-navy">
                Public Audit Archive & Shariah Certifications
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-2xl font-sans">
                Download complete, unredacted annual financial and Shariah audit statements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((rep, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 border border-brand-royal/10 rounded-3xl shadow-clay flex flex-col justify-between space-y-6 card-hover-lift group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-brand-sky-soft text-brand-royal text-[11px] font-bold font-cairo">
                        {rep.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-semibold px-2.5 py-1 bg-slate-100 rounded-lg">
                        {rep.size}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-cairo text-brand-navy leading-snug">
                      {rep.title}
                    </h3>
                    <div className="text-xs text-slate-500 space-y-1 pt-1 font-sans">
                      <p className="flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-brand-royal" />
                        <span>Auditor: <strong>{rep.auditor}</strong></span>
                      </p>
                      <p className="text-slate-400">{rep.date}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <GlassButton
                      onClick={() => alert(`Downloading ${rep.title}... (Verified PDF)`)}
                      variant="royal"
                      size="sm"
                      indicator="download"
                      direction="down"
                      fullWidth
                    >
                      Download Verified PDF Statement
                    </GlassButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: The 100% Principal Protection Covenant (Clean Dark Card) */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto p-8 sm:p-14">
            <div className="bg-gradient-to-br from-[#0B245B] via-[#0B1B3D] to-[#081734] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-white/10">
              <div className="relative z-10 max-w-3xl space-y-4 mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-sky text-xs font-cairo font-bold">
                  <Lock size={13} />
                  <span>Sacred Fiduciary Covenant</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-white leading-tight">
                  The 100% Principal Preserved Principle
                </h2>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans">
                  Every Waqf contribution is treated as an inviolable trust (Amanah). The capital corpus is permanently invested into physical, revenue-generating commercial real estate and solar infrastructure. The principal cannot be gifted, liquidated, or consumed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 relative z-10">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-2xl font-bold font-cairo text-brand-gold">0%</div>
                  <h4 className="text-sm font-bold font-cairo text-white">Corpus Dilution</h4>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    The original endowed capital remains untouched and inviolable forever.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-2xl font-bold font-cairo text-brand-sky">85%</div>
                  <h4 className="text-sm font-bold font-cairo text-white">Direct Social Yield</h4>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    Annual returns fund clean water grids, dialysis treatments, and student scholarships.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-2xl font-bold font-cairo text-white">15%</div>
                  <h4 className="text-sm font-bold font-cairo text-white">Asset Reinvestment</h4>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    Dedicated to property maintenance, capital appreciation, and reserve funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Key Shariah Governance Commitments */}
        <section>
          <div className="max-w-6xl mx-auto p-8 sm:p-14">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold shadow-sm">
                <span>Shariah Safeguards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-cairo text-brand-navy">
                Key Governance Commitments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay space-y-4 card-hover-lift">
                <div className="w-10 h-10 bg-brand-sky-soft rounded-2xl flex items-center justify-center text-brand-royal font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold font-cairo text-brand-navy">Zero Riba Principle</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Absolute prohibition of interest-bearing instruments. All investments utilize asset-backed Shariah modes such as Ijarah and Murabaha.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay space-y-4 card-hover-lift">
                <div className="w-10 h-10 bg-brand-gold-soft rounded-2xl flex items-center justify-center text-brand-gold font-bold">
                  <Lock size={20} />
                </div>
                <h3 className="text-base font-bold font-cairo text-brand-navy">Beneficiary Ring-Fencing</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Yields generated from education Waqf can never be diverted to general admin—strictest adherence to donor conditions (*Shart al-Waqif*).
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay space-y-4 card-hover-lift">
                <div className="w-10 h-10 bg-brand-sky-soft rounded-2xl flex items-center justify-center text-brand-sky font-bold">
                  <Search size={20} />
                </div>
                <h3 className="text-base font-bold font-cairo text-brand-navy">Dual Independent Auditing</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Financial numbers audited by certified chartered accountants; religious compliance audited independently by Shariah jurists.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PledgeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
