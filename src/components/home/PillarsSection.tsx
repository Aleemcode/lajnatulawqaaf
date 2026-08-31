'use client';

import React from 'react';
import Link from 'next/link';
import { WAQF_PILLARS } from '@/data/siteData';
import { Building2, GraduationCap, Droplets, HeartPulse, ArrowRight } from 'lucide-react';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';

export const PillarsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-brand-royal" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-brand-royal" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-brand-royal" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-brand-royal" />;
      default: return <Building2 className="w-6 h-6 text-brand-royal" />;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <OrganicBlobs />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold font-cairo text-brand-sky uppercase tracking-widest">
              Strategic Endowments
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-brand-navy">
              The Four Pillars of Eternal Impact
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Each portfolio is legally structured as a dedicated Shariah endowment (*Waqf Khas*), safeguarding the principal asset while distributing pure yields.
            </p>
          </div>
          <Link
            href="/endowments"
            className="inline-flex items-center gap-1.5 text-xs font-bold font-cairo text-brand-royal hover:text-brand-royal-light transition-all pb-1 border-b border-brand-royal/20"
          >
            <span>View All Active Portfolios</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WAQF_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-brand-mist rounded-3xl p-6 border border-brand-royal/10 shadow-sm flex flex-col justify-between card-hover-lift group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-brand-royal/15 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <div className="text-[11px] font-cairo font-semibold text-brand-sky mb-1">
                  {pillar.titleArabic}
                </div>
                <h3 className="font-cairo font-bold text-lg text-brand-navy mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-bold font-cairo px-2.5 py-1 rounded-full bg-white border border-slate-200 text-brand-navy shadow-sm">
                  {pillar.stat}
                </span>
                <Link
                  href={`/endowments?cat=${pillar.id}`}
                  className="text-xs font-cairo font-bold text-brand-royal group-hover:text-brand-sky transition-colors flex items-center gap-0.5"
                >
                  Explore <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
