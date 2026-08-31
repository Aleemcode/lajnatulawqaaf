'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, CheckCircle2, TrendingUp, Lock, RefreshCw, ArrowRight } from 'lucide-react';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';

export const TransparencySnapshot: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-brand-royal/10 relative overflow-hidden">
      <OrganicBlobs />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Model Explanation */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-sky-soft text-brand-royal text-xs font-cairo font-bold">
              <Lock size={14} className="text-brand-royal" />
              <span>Capital Corpus Protection Guarantee</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-brand-navy leading-tight">
              The Perpetual Math of Modern Waqf
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unlike traditional charities that consume donations immediately, a Waqf locks your contribution into revenue-generating real estate and community assets. The original capital is never spent—only the generated returns fund social good forever.
            </p>

            {/* Value Props List */}
            <div className="space-y-3 pt-2">
              {[
                {
                  title: '100% Principal Inviolability',
                  desc: 'Capital assets cannot be sold, gifted, or liquidated under Islamic Law.',
                },
                {
                  title: 'Annual Independent External Audits',
                  desc: 'Full financial transparency verified by certified public accountants.',
                },
                {
                  title: 'Direct Shariah Certification',
                  desc: 'Fatwa compliance issued for every single distribution and investment vehicle.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={12} />
                  </div>
                  <div>
                    <h4 className="font-cairo font-bold text-xs text-brand-navy">{item.title}</h4>
                    <p className="text-slate-500 text-[11px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/transparency"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-royal hover:bg-brand-royal-light text-white font-cairo font-bold text-xs shadow-md transition-all"
              >
                <FileText size={14} className="text-brand-sky" />
                <span>Download Audited Financial Statements</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Distribution Flow Diagram */}
          <div className="lg:col-span-6 bg-brand-mist rounded-3xl p-6 sm:p-8 border border-brand-royal/10 shadow-clay relative">
            <h3 className="font-cairo font-bold text-base text-brand-navy mb-6 text-center">
              How Your Endowment Creates Perpetual Good
            </h3>

            <div className="space-y-4">
              {/* Step 1: Donor Contribution */}
              <div className="p-4 rounded-2xl bg-white border border-brand-royal/15 shadow-sm text-center">
                <div className="text-[10px] font-mono uppercase text-brand-sky font-bold">Inflow</div>
                <div className="font-cairo font-bold text-sm text-brand-navy">
                  Donor Endowment Contribution / Fractional Share
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-brand-royal">
                <TrendingUp size={20} className="rotate-90" />
              </div>

              {/* Step 2: Perpetual Capital Core */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-royal to-brand-royal-dark text-white text-center shadow-md relative overflow-hidden">
                <div className="absolute top-2 right-2 text-brand-gold">
                  <Lock size={16} />
                </div>
                <div className="text-[11px] font-cairo font-semibold text-brand-gold uppercase tracking-wider">
                  Asl Al-Waqf (Corpus)
                </div>
                <div className="font-cairo font-bold text-base">
                  100% Capital Preserved in Perpetuity
                </div>
                <div className="text-xs text-white/70 mt-1">
                  (Commercial Real Estate · Solar Farms · Shariah Sukuk)
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-brand-royal">
                <RefreshCw size={20} className="animate-spin duration-1000" />
              </div>

              {/* Step 3: Yield Distribution Split */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-2xl font-bold font-cairo text-emerald-700">85%</div>
                  <div className="text-xs font-bold font-cairo text-emerald-900 mt-0.5">
                    Direct Social Causes
                  </div>
                  <div className="text-[10px] text-emerald-700/80 mt-1">
                    Orphans · Boreholes · Scholarships · Dialysis
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                  <div className="text-2xl font-bold font-cairo text-brand-royal">15%</div>
                  <div className="text-xs font-bold font-cairo text-brand-royal mt-0.5">
                    Asset Reinvestment
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    Facility Maintenance & Corpus Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
