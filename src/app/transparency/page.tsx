'use client';

import React from 'react';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { SITE_CONFIG } from '@/data/siteData';
import { ShieldCheck, FileText, Download, Lock, CheckCircle2, Scale, RefreshCw, ArrowRight } from 'lucide-react';

export default function TransparencyPage() {
  const reports = [
    {
      title: "2024 Annual Audited Financial Statement",
      type: "External Financial Audit",
      date: "Published Ramadan 1446 / March 2025",
      size: "2.4 MB · PDF",
      auditor: "Independent Tier-1 Chartered Accountants",
    },
    {
      title: "2024 Shariah Supervisory Board Annual Certification",
      type: "Shariah Fatwa & Compliance Audit",
      date: "Published Shawwal 1446 / April 2025",
      size: "1.8 MB · PDF",
      auditor: "AAOIFI Certified Shariah Committee",
    },
    {
      title: "Al-Kawthar Solar Water Grid Network Impact Assessment",
      type: "Field Impact Report",
      date: "Published Dhul Hijjah 1445 / June 2024",
      size: "3.1 MB · PDF",
      auditor: "Community Impact Evaluation Board",
    },
    {
      title: "2023 Annual Audited Financial Statement",
      type: "External Financial Audit",
      date: "Published Ramadan 1445 / April 2024",
      size: "2.1 MB · PDF",
      auditor: "Independent Tier-1 Chartered Accountants",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-royal/5 border border-brand-royal/15 text-brand-royal text-xs font-cairo font-bold mb-4">
          <ShieldCheck size={14} />
          <span>Radical Transparency & Shariah Assurance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-cairo text-brand-navy max-w-3xl mx-auto leading-tight">
          Uncompromising Accountability for Eternal Endowments
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          The Islamic law of Waqf places the highest fiduciary burden on trustees (*Nuzar*). We publish full external financial audits, Shariah compliance certifications, and impact metrics annually.
        </p>
      </section>

      {/* 100% Principal Protection Core Policy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-brand-royal via-brand-royal-dark to-brand-navy text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/15 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-cairo font-bold">
              <Lock size={14} />
              <span>The Principal Inviolability Covenant</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-white">
              The 100% Principal Preserved Principle
            </h2>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              When you establish a Waqf with {SITE_CONFIG.name}, 100% of your capital is invested into physical, title-deeded assets (commercial real estate, agricultural hubs, and solar infrastructure) or AAOIFI-compliant instruments. The principal cannot be gifted, liquidated, or consumed. Only recurring net yields are distributed to beneficiaries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-xl font-bold font-cairo text-brand-gold">0%</div>
                <div className="text-xs font-semibold text-white/90 mt-0.5">Corpus Erosion</div>
                <div className="text-[10px] text-white/60">Original capital remains untouched.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-xl font-bold font-cairo text-brand-sky">85%</div>
                <div className="text-xs font-semibold text-white/90 mt-0.5">Direct Social Yield</div>
                <div className="text-[10px] text-white/60">Orphan welfare, education, clean water.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-xl font-bold font-cairo text-white">15%</div>
                <div className="text-xs font-semibold text-white/90 mt-0.5">Asset Reinvestment</div>
                <div className="text-[10px] text-white/60">Property repairs & emergency reserve.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Audited Reports Library */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
          <div>
            <h3 className="font-cairo font-bold text-xl text-brand-navy">
              Public Audit Archive & Shariah Fatwas
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">
              Download complete, unredacted annual financial and Shariah audit statements.
            </p>
          </div>
          <span className="text-xs font-bold font-cairo text-brand-royal bg-brand-mist px-3 py-1.5 rounded-full border border-slate-200">
            Official Disclosure Portal
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((rep, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col justify-between card-hover-lift"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-brand-mist border border-slate-200 text-brand-navy text-[10px] font-bold font-cairo uppercase">
                    {rep.type}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{rep.size}</span>
                </div>
                <h4 className="font-cairo font-bold text-base text-brand-navy leading-snug mb-2">
                  {rep.title}
                </h4>
                <p className="text-slate-500 text-xs flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>Audited by: {rep.auditor}</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-cairo">{rep.date}</span>
                <button
                  onClick={() => alert(`Downloading ${rep.title}... (Demo File)`)}
                  className="px-4 py-2 rounded-xl bg-brand-royal hover:bg-brand-royal-light text-white font-cairo font-bold text-xs shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shariah Charter Compliance Principles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-brand-mist rounded-3xl p-8 border border-brand-royal/15">
          <h3 className="font-cairo font-bold text-lg text-brand-navy mb-4 text-center">
            Key Shariah Governance Commitments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
              <div className="font-cairo font-bold text-xs text-brand-navy flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-sky" />
                <span>Zero Interest (Riba) Principle</span>
              </div>
              <p className="text-slate-500 text-xs">
                No conventional interest-bearing debt is ever placed on Waqf assets. All transactions utilize asset-backed Shariah modes.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
              <div className="font-cairo font-bold text-xs text-brand-navy flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-sky" />
                <span>Beneficiary Ring-Fencing</span>
              </div>
              <p className="text-slate-500 text-xs">
                Yields generated from education Waqf can never be diverted to general admin—strictest adherence to donor conditions (*Shart al-Waqif*).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5">
              <div className="font-cairo font-bold text-xs text-brand-navy flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-sky" />
                <span>Dual External Auditing</span>
              </div>
              <p className="text-slate-500 text-xs">
                Financial numbers audited by certified chartered accountants; religious compliance audited independently by Shariah jurists.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
