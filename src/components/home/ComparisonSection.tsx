'use client';

import React from 'react';
import Link from 'next/link';
import { GlassButton } from '@/components/common/GlassButton';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="why-us" className="border-b border-brand-royal/10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 4): Intro & CTA */}
        <div className="lg:col-span-4 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-mist border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold shadow-sm">
              <span>Why us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cairo text-brand-navy leading-snug">
              We deliver real help with transparency, speed, and dignity.
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              See what makes our Shariah-governed endowment model distinct from consumable, single-use philanthropy.
            </p>
          </div>

          <div className="space-y-6">
            <GlassButton
              href="/transparency"
              variant="royal"
              size="md"
              direction="right"
            >
              Read Our Governance Charter
            </GlassButton>

            <div className="pt-4 border-t border-slate-200/60 flex items-center gap-6 text-slate-400 text-xs font-cairo font-bold uppercase">
              <span>AAOIFI Certified</span>
              <span>SCIA Recognised</span>
            </div>
          </div>
        </div>

        {/* Right Column (Span 8): Side-by-Side Comparison Card */}
        <div className="lg:col-span-8 p-8 sm:p-12 bg-brand-mist/50 flex items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {/* Card 1: Lajnatul Awqaaf (Royal/Sky Blue Theme) */}
            <div className="bg-white rounded-3xl p-6 border border-brand-sky/30 shadow-clay space-y-5 flex flex-col justify-between">
              <div>
                {/* Header Banner */}
                <div className="p-3.5 rounded-2xl bg-brand-sky-soft border border-brand-sky/20 flex items-center justify-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-brand-royal text-white flex items-center justify-center text-xs font-bold font-cairo">
                    ل
                  </div>
                  <span className="font-cairo font-bold text-sm text-brand-navy">Lajnatul Awqaaf</span>
                </div>

                <div className="border-t border-dashed border-slate-200 my-4" />

                {/* Checked Points */}
                <ul className="space-y-3 text-xs text-slate-700">
                  {[
                    '100% Principal Preserved Inviolable',
                    'Direct On-Ground Asset Title & Escrow',
                    'Transparent Annual Audits & Fatwas',
                    'Programs with Measurable Yields',
                    'Shariah-Governed Asset Allocation',
                    'Zero Corpus Administrative Dilution',
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-brand-sky-soft text-brand-royal flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                        ✓
                      </span>
                      <span className="text-slate-800 font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-royal hover:bg-brand-royal-light text-white text-xs font-cairo font-bold flex items-center justify-between transition-all"
                >
                  <span>Learn More About Us</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-sky animate-pulse" />
                </Link>
              </div>
            </div>

            {/* Card 2: Others / Traditional Consumable Charity (Beige Theme) */}
            <div className="bg-[#FBF9F4] rounded-3xl p-6 border border-amber-900/10 shadow-sm space-y-5 flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
              <div>
                {/* Header Banner */}
                <div className="p-3.5 rounded-2xl bg-amber-100/60 border border-amber-200/60 flex items-center justify-center gap-2 mb-4">
                  <span className="font-cairo font-bold text-sm text-amber-900">Traditional Charity</span>
                </div>

                <div className="border-t border-dashed border-amber-900/10 my-4" />

                {/* Cross Points */}
                <ul className="space-y-3 text-xs text-slate-500">
                  {[
                    'Capital is consumed immediately',
                    'Delayed or opaque yield reporting',
                    'Few measurable long-term updates',
                    'Generic campaigns without asset backing',
                    'High administrative overhead',
                    'Zero multi-generational perpetuity',
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                        ✕
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-center text-[11px] font-cairo text-slate-400">
                <span>Single-Use Consumption Model</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
