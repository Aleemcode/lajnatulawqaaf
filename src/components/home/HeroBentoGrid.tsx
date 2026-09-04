'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { STATS } from '@/data/siteData';
import { ShieldCheck, MapPin, ArrowRight, Lock } from 'lucide-react';

type GivingMode = 'give-now' | 'start-waqf';

export const HeroBentoGrid: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);
  const [mode, setMode] = useState<GivingMode>('give-now');

  const openPledge = (m: GivingMode) => {
    setMode(m);
    setPledgeOpen(true);
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <OrganicBlobs />

      {/* Editorial Hero Statement */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-4">
        {/* Trust Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-royal/15 text-brand-royal text-xs font-cairo font-bold tracking-wide shadow-sm select-none">
          <IslamicEmblem size="sm" glow={false} />
          <span>Scholar-governed</span>
          <span className="text-brand-gold font-bold">· Independently audited</span>
        </div>

        {/* Headline with Embedded Emblem */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-cairo text-brand-navy leading-[1.12] tracking-tight">
          Give today{' '}
          <span className="inline-flex items-baseline align-middle mx-1">
            <IslamicEmblem size="md" />
          </span>{' '}
          Give forever
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans font-normal">
          Give once for immediate relief — Sadaqah or Zakat. Or start a Waqf: we keep your gift safe, invest it in
          things that earn, and use the earnings to fund clean water, healthcare, and schools across Nigeria — year
          after year.
        </p>

        {/* Action Buttons — both ways to give */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <GlassButton onClick={() => openPledge('give-now')} size="lg" variant="royal" direction="right">
            Give now
          </GlassButton>
          <button
            onClick={() => openPledge('start-waqf')}
            className="px-6 py-3.5 rounded-full bg-white border border-brand-royal/20 text-brand-royal font-cairo font-bold text-sm hover:bg-brand-royal/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-royal"
          >
            Start a Waqf
          </button>
          <Link
            href="/transparency"
            className="px-3 py-3.5 text-brand-royal/80 hover:text-brand-navy font-cairo font-semibold text-sm underline-offset-4 hover:underline"
          >
            See how it works
          </Link>
        </div>
      </div>

      {/* Architectural 3-Column Asymmetric Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Column 1 (Left / Span 4): High-Impact Trust Card */}
        <div className="lg:col-span-4 surface-dark-card rounded-3xl p-7 text-white flex flex-col justify-between space-y-6 relative overflow-hidden group">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-sky text-[11px] font-cairo font-bold tracking-wider uppercase">
              <Lock size={12} />
              <span>Our promise to you</span>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold font-cairo text-brand-gold leading-none">
                85%
              </div>
              <p className="text-xs font-cairo font-bold text-white/90 uppercase tracking-wide pt-1">
                Goes straight to people each year
              </p>
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-sans">
              Given straight to clean-water boreholes, dialysis treatments, and student scholarships — your original
              gift is never touched.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-white/75 font-cairo">
              <span>Your gift protected</span>
              <span className="font-bold text-brand-sky">100%, always</span>
            </div>
            <button
              onClick={() => openPledge('start-waqf')}
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-cairo font-bold flex items-center justify-between transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
            >
              <span>Give a share</span>
              <span className="w-5 h-5 rounded-full bg-brand-sky text-brand-navy flex items-center justify-center text-[10px] font-bold">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Column 2 (Center / Span 4): Landmark Active Endowment Spotlight */}
        <div className="lg:col-span-4 surface-card rounded-3xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden group">
          <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80"
              alt="Al-Hikmah Plaza, an income-earning commercial building"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />

            <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-cairo font-bold shadow-sm">
                ₦1.2B landmark
              </span>
              <span className="px-2.5 py-1 rounded-full bg-brand-navy/80 backdrop-blur-md text-white text-[10px] font-cairo font-bold flex items-center gap-1">
                <MapPin size={10} className="text-brand-sky" /> Abuja Central
              </span>
            </div>

            <div className="absolute bottom-3 inset-x-3 text-white">
              <p className="text-xs font-cairo font-bold leading-tight drop-shadow-sm">
                Al-Hikmah Plaza (income-earning property)
              </p>
            </div>
          </div>

          {/* Funding Progress Meter */}
          <div className="space-y-2 px-1">
            <div className="flex justify-between text-[11px] font-cairo font-semibold text-slate-500">
              <span>Raised: <strong className="text-brand-navy font-bold">₦850M</strong></span>
              <span>Target: <strong>₦1.2B</strong></span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-sky to-brand-royal rounded-full"
                style={{ width: '71%' }}
              />
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] font-cairo text-slate-500">
                Earns: <strong className="text-brand-navy">₦102M / yr</strong>
              </span>
              <Link
                href="/endowments"
                className="text-[11px] font-cairo font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1"
              >
                <span>View project</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        {/* Column 3 (Right / Span 4): 2 Stacked Modern Cards */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Card 3A: AUM (Parchment Card) */}
          <div className="surface-parchment rounded-3xl p-6 flex-1 flex flex-col justify-between space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-cairo text-brand-navy">
                  {STATS.assetsUnderManagement}
                </div>
                <p className="text-xs font-cairo font-semibold text-slate-600">
                  Held in lasting assets
                </p>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-white border border-brand-gold/20 text-brand-royal text-[10px] font-cairo font-bold">
                {STATS.activeProjects}+ projects
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-brand-gold/15">
              <div className="flex -space-x-2 overflow-hidden">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
                ].map((src, i) => (
                  <div key={i} className="relative w-7 h-7 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                    <Image src={src} alt="" aria-hidden fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-cairo font-bold text-brand-navy">
                {STATS.donorFamilies} donors &amp; families
              </span>
            </div>
          </div>

          {/* Card 3B: Shariah Oversight */}
          <div className="surface-card rounded-3xl p-6 flex-1 flex flex-col justify-between space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-cairo font-bold text-brand-royal">
                  <ShieldCheck size={16} className="text-brand-sky" />
                  <span>Independent scholars</span>
                </div>
                <h3 className="text-base font-bold font-cairo text-brand-navy">
                  Our Shariah board
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Every purchase and payout is checked by respected Islamic scholars.
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/about#shariah"
                className="text-[11px] font-cairo font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1"
              >
                <span>Read our Shariah promise</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} initialMode={mode} />
    </section>
  );
};
