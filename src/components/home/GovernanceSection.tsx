'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SHARIAH_SCHOLARS, TRUSTEES } from '@/data/siteData';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';

export const GovernanceSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-mist border-t border-brand-royal/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-navy text-xs font-cairo font-bold">
            <IslamicEmblem size="sm" glow={false} />
            <span>Fiduciary Integrity & Shariah Rigour</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-brand-navy">
            Governed by Distinguished Scholars & Trustees
          </h2>
          <p className="text-slate-600 text-sm">
            Our dual-governance model pairs seasoned financial and infrastructure trustees with leading Islamic jurisprudence jurists to guarantee unconditional Shariah compliance.
          </p>
        </div>

        {/* Shariah Supervisory Board Card Row */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <div>
              <h3 className="font-cairo font-bold text-lg text-brand-navy flex items-center gap-2">
                <ShieldCheck size={20} className="text-brand-sky" />
                <span>Shariah Supervisory Board (الهيئة الشرعية)</span>
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">Independent AAOIFI-certified religious oversight.</p>
            </div>
            <Link
              href="/about#shariah"
              className="text-xs font-cairo font-bold text-brand-royal hover:text-brand-royal-light flex items-center gap-1"
            >
              <span>View Shariah Fatwas</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHARIAH_SCHOLARS.map((scholar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col justify-between card-hover-lift"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-brand-royal/15">
                      <Image
                        src={scholar.imageUrl}
                        alt={scholar.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-cairo font-bold text-sm text-brand-navy leading-snug">
                        {scholar.name}
                      </h4>
                      <div className="text-[11px] font-cairo text-brand-sky font-semibold">
                        {scholar.titleArabic}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {scholar.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {scholar.bio}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Award size={14} className="text-brand-gold flex-shrink-0" />
                  <span className="truncate">{scholar.specialization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Trustees Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <div>
              <h3 className="font-cairo font-bold text-lg text-brand-navy flex items-center gap-2">
                <ShieldCheck size={20} className="text-brand-royal" />
                <span>Board of Trustees (مجلس الأمناء)</span>
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">Corporate governance, legal fiduciary, and asset stewardship.</p>
            </div>
            <Link
              href="/about#trustees"
              className="text-xs font-cairo font-bold text-brand-royal hover:text-brand-royal-light flex items-center gap-1"
            >
              <span>Full Board Biographies</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUSTEES.map((trustee, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col justify-between card-hover-lift"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-brand-royal/15">
                      <Image
                        src={trustee.imageUrl}
                        alt={trustee.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-cairo font-bold text-sm text-brand-navy leading-snug">
                        {trustee.name}
                      </h4>
                      <div className="text-[11px] font-cairo text-brand-royal font-semibold">
                        {trustee.roleArabic}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {trustee.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {trustee.bio}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {trustee.credentials.map((cred, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-cairo font-medium">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
