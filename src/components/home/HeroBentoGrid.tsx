'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { IMPACT_METRICS, PROJECTS } from '@/data/siteData';
import { ShieldCheck, ArrowRight, HeartHandshake, Building, Droplet, Sparkles, QrCode, CheckCircle2 } from 'lucide-react';
import { PledgeModal } from '@/components/common/PledgeModal';

export const HeroBentoGrid: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);
  const landmarkProject = PROJECTS[0]; // Al-Barakah Tower

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Editorial Hero Statement */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-4">
        {/* Shariah Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal/5 border border-brand-royal/15 text-brand-royal text-xs font-cairo font-bold tracking-wide shadow-sm">
          <IslamicEmblem size="sm" glow={false} />
          <span>Shariah-Governed Islamic Endowment Fund</span>
          <span className="text-brand-gold font-bold">· AAOIFI Standards</span>
        </div>

        {/* Headline with Embedded Emblem */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-cairo text-brand-navy leading-[1.15] tracking-tight">
          Empowering Communities{' '}
          <span className="inline-flex items-baseline align-middle mx-1">
            <IslamicEmblem size="md" />
          </span>{' '}
          Through Perpetual Waqf
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
          Transforming charitable capital into eternal, revenue-generating endowments. We preserve the principal corpus in perpetuity while directing yields to education, healthcare, and water infrastructure.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setPledgeOpen(true)}
            className="px-6 py-3 rounded-full bg-brand-royal hover:bg-brand-royal-light text-white font-cairo font-bold text-sm shadow-clay hover:shadow-clay-hover transition-all flex items-center gap-2"
          >
            <HeartHandshake size={16} className="text-brand-sky" />
            <span>Establish a Waqf Endowment</span>
            <ArrowRight size={16} />
          </button>
          <Link
            href="/about"
            className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-brand-navy border border-brand-royal/15 font-cairo font-semibold text-sm transition-all"
          >
            Explore Governance Charter
          </Link>
        </div>
      </div>

      {/* Bento Grid Mosaic */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
        {/* Card 1: Assets Under Management & Capital Preservation (Span 4) */}
        <div className="md:col-span-4 bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col justify-between relative overflow-hidden card-hover-lift">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/10 rounded-full blur-2xl -z-10" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 rounded-full bg-brand-sky-soft text-brand-royal text-[11px] font-bold font-cairo">
                Asset Stewardship
              </span>
              <span className="text-xs font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                100% Preserved
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-cairo text-brand-navy tracking-tight">
              {IMPACT_METRICS[0].value}
            </div>
            <p className="text-slate-600 text-xs mt-1 font-medium">
              {IMPACT_METRICS[0].label}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-cairo">Perpetual Model</span>
            <span className="font-bold text-brand-royal font-cairo flex items-center gap-1">
              <CheckCircle2 size={14} className="text-brand-sky" /> Zero Corpus Dilution
            </span>
          </div>
        </div>

        {/* Card 2: Landmark Project Spotlight (Span 5) */}
        <div className="md:col-span-5 bg-white rounded-3xl overflow-hidden border border-brand-royal/10 shadow-clay flex flex-col group card-hover-lift">
          <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
            <Image
              src={landmarkProject.imageUrl}
              alt={landmarkProject.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-full bg-brand-gold text-brand-navy text-[10px] font-bold font-cairo uppercase shadow">
                Featured Landmark Waqf
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="text-xs font-cairo opacity-80">{landmarkProject.location}</div>
              <div className="text-sm font-bold font-cairo truncate">{landmarkProject.title}</div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between bg-white text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Annual Yield Funding</span>
              <span className="font-bold text-brand-royal font-cairo">{landmarkProject.annualYield}</span>
            </div>
            <Link
              href="/endowments"
              className="inline-flex items-center gap-1 font-cairo font-bold text-brand-sky hover:text-brand-royal transition-all"
            >
              <span>View Portfolio</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Card 3: Shariah Supervisory Seal (Span 3) */}
        <div className="md:col-span-3 bg-gradient-to-br from-brand-royal via-brand-royal-dark to-brand-navy text-white rounded-3xl p-6 border border-white/15 shadow-clay flex flex-col justify-between relative overflow-hidden card-hover-lift">
          <div className="flex items-center justify-between">
            <IslamicEmblem size="sm" glow={false} />
            <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider font-semibold">
              Certified
            </span>
          </div>

          <div className="my-4">
            <div className="text-sm font-bold font-cairo text-white leading-snug">
              AAOIFI Shariah Governance
            </div>
            <p className="text-white/70 text-[11px] mt-1 leading-relaxed">
              Every endowment deed & distribution is vetted by our independent Shariah Jurists.
            </p>
          </div>

          <Link
            href="/about#shariah"
            className="text-[11px] font-cairo font-bold text-brand-sky hover:text-white flex items-center gap-1 transition-all"
          >
            <span>Read Shariah Charter</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Card 4: Direct Sadaqah Jariyah Fractional Share Card (Span 7) */}
        <div className="md:col-span-7 bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col sm:flex-row items-center justify-between gap-6 card-hover-lift">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-navy text-[11px] font-bold font-cairo">
              <Sparkles size={12} className="text-brand-gold" />
              <span>Fractional Waqf Sahm (Shares)</span>
            </div>
            <h4 className="text-lg font-bold font-cairo text-brand-navy">
              Invest in Perpetual Sadaqah Jariyah
            </h4>
            <p className="text-slate-500 text-xs max-w-md">
              Contribute a designated share starting from $50. Your principal is pooled into commercial & infrastructure endowments that yield social returns perpetually.
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
            <button
              onClick={() => setPledgeOpen(true)}
              className="w-full px-5 py-2.5 rounded-2xl bg-brand-sky hover:bg-brand-sky-light text-brand-navy font-cairo font-bold text-xs shadow-sky transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <HeartHandshake size={14} />
              <span>Pledge $50 Share</span>
            </button>
            <button
              onClick={() => setPledgeOpen(true)}
              className="w-full px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-cairo font-semibold text-xs transition-all whitespace-nowrap"
            >
              Custom Amount
            </button>
          </div>
        </div>

        {/* Card 5: Beneficiaries & Geographic Reach (Span 5) */}
        <div className="md:col-span-5 bg-gradient-to-br from-brand-mist to-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col justify-between card-hover-lift">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-cairo font-bold text-brand-royal">
              Active Community Impact
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-cairo text-brand-navy">
              {IMPACT_METRICS[1].value}
            </div>
            <p className="text-slate-500 text-xs mt-0.5">
              Individuals benefiting daily from solar boreholes, orphan stipends, and medical sponsorships.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
            <span>Operational Hubs</span>
            <span className="font-semibold text-brand-navy font-cairo">Abuja · Kano · Kaduna · Kwara · Niger</span>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
