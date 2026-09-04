'use client';

import React from 'react';
import Link from 'next/link';
import { GlassButton } from '@/components/common/GlassButton';
import { ShieldCheck, Check, X } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="why-us" className="border-b border-brand-royal/10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 4): Intro & CTA */}
        <div className="lg:col-span-4 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="badge-pill bg-brand-mist border border-slate-200/80 text-brand-royal shadow-sm">
              <span>WHY LAJNATUL AWQAAF</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-brand-navy leading-snug">
              Permanent institutional stewardship vs single-use charity.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              Compare how our perpetual Shariah-governed endowment structure protects your principal and delivers generational social yield.
            </p>
          </div>

          <div className="space-y-6">
            <GlassButton
              href="/transparency"
              variant="royal"
              size="md"
              direction="right"
            >
              Read Governance Charter
            </GlassButton>

            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-5 text-slate-400 text-xs font-cairo font-bold uppercase tracking-wider">
              <span>AAOIFI Certified</span>
              <span>·</span>
              <span>SCIA Recognised</span>
            </div>
          </div>
        </div>

        {/* Right Column (Span 8): High-Contrast Fiduciary Matrix */}
        <div className="lg:col-span-8 p-8 sm:p-12 bg-brand-mist/50 flex items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
            {/* Card 1: Lajnatul Awqaaf Perpetual Waqf (Deep Royal Accent) */}
            <div className="surface-card rounded-3xl p-6 border-brand-royal/20 shadow-clay flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Header Banner */}
                <div className="p-3.5 rounded-2xl bg-brand-royal/5 border border-brand-royal/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-royal text-white flex items-center justify-center text-xs font-bold font-cairo">
                      ل
                    </div>
                    <span className="font-cairo font-bold text-xs text-brand-navy">Lajnatul Awqaaf</span>
                  </div>
                  <span className="text-[10px] font-cairo font-bold text-brand-royal bg-white px-2 py-0.5 rounded-full border border-brand-royal/10">
                    Perpetual Model
                  </span>
                </div>

                {/* Checked Points */}
                <ul className="space-y-3 text-xs text-slate-700 font-sans">
                  {[
                    '100% Principal Preserved Inviolable in Asset Title',
                    'Direct Commercial Rental & Solar Yield Distribution',
                    'Published Annual Audits & Shariah Fatwa Certifications',
                    'Generational Multi-Decade Recurring Impact',
                    'Zero Administrative Dilution of Charitable Capital',
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-brand-sky-soft text-brand-royal flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                        <Check size={10} className="stroke-[3]" />
                      </span>
                      <span className="text-slate-800 font-medium leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/about"
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-royal hover:bg-brand-royal-light text-white text-xs font-cairo font-bold flex items-center justify-between transition-all shadow-sm"
                >
                  <span>Explore Our Fiduciary Code</span>
                  <span className="w-2 h-2 rounded-full bg-brand-sky animate-pulse" />
                </Link>
              </div>
            </div>

            {/* Card 2: Traditional Consumable Charity (Parchment Accent) */}
            <div className="surface-parchment rounded-3xl p-6 flex flex-col justify-between space-y-5 opacity-85 hover:opacity-100 transition-opacity">
              <div className="space-y-4">
                {/* Header Banner */}
                <div className="p-3.5 rounded-2xl bg-amber-100/60 border border-amber-200/60 flex items-center justify-between">
                  <span className="font-cairo font-bold text-xs text-amber-900">Conventional Charity</span>
                  <span className="text-[10px] font-cairo font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded-full">
                    Single-Use
                  </span>
                </div>

                {/* Cross Points */}
                <ul className="space-y-3 text-xs text-slate-500 font-sans">
                  {[
                    'Donated capital is consumed immediately upon deployment',
                    'No ongoing revenue stream or future asset backing',
                    'Opaque or delayed post-campaign yield reporting',
                    'Requires continuous donor re-solicitation every year',
                    'Significant administrative overhead deducted from donation',
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                        <X size={10} className="stroke-[2.5]" />
                      </span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-amber-900/10 text-center text-[11px] font-cairo text-slate-400">
                <span>Capital Exhaustion Lifecycle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
