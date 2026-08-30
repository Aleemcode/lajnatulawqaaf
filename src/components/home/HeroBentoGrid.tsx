'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { BrandWatermark } from '@/components/common/BrandWatermark';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const HeroBentoGrid: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <OrganicBlobs />
      <BrandWatermark position="top-right" opacity={0.03} size="xl" />

      {/* Editorial Hero Statement */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-4">
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
          We preserve 100% of your charitable principal in revenue-generating commercial assets, dedicating pure annual yields to education, clean water, and healthcare across Nigeria.
        </p>

        {/* Action Button with Hover Slide Animation */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <GlassButton
            onClick={() => setPledgeOpen(true)}
            size="lg"
            variant="royal"
            indicator="arrow"
          >
            Establish Waqf Today
          </GlassButton>
        </div>
      </div>

      {/* 6-Card Creative Mosaic Grid (3x2 Layout) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* Card 1: 85% Direct Yield Allocation (Dark Royal) */}
        <div className="bg-gradient-to-br from-brand-royal via-brand-royal-dark to-brand-navy text-white rounded-3xl p-6 border border-white/10 shadow-clay flex flex-col justify-between relative overflow-hidden card-hover-lift group min-h-[220px]">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-cairo text-brand-gold">85%</div>
              <p className="text-white/80 text-xs leading-relaxed max-w-[180px]">
                of every annual yield goes directly to clean water, medical aid, and scholarships.
              </p>
            </div>
            {/* Botanical / Islamic Geometry Line Art */}
            <div className="w-16 h-16 opacity-80 group-hover:scale-110 transition-transform text-brand-sky">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-full h-full">
                <circle cx="32" cy="32" r="10" />
                <path d="M32 12C32 20 22 24 22 32C22 40 32 44 32 52C32 44 42 40 42 32C42 24 32 20 32 12Z" />
                <path d="M12 32C20 32 24 22 32 22C40 22 44 32 52 32C44 32 40 42 32 42C24 42 20 32 12 32Z" />
              </svg>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => setPledgeOpen(true)}
              className="text-[11px] font-cairo font-bold text-white/90 group-hover:text-white flex items-center gap-1.5"
            >
              <span>Pledge Yield Share</span>
              <span className="w-4 h-4 rounded-full bg-emerald-400 text-brand-navy flex items-center justify-center text-[10px]">✓</span>
            </button>
          </div>
        </div>

        {/* Card 2: Join 1,200+ Donors (Cream Parchment) */}
        <div className="bg-[#F6F4EB] rounded-3xl p-6 border border-amber-900/10 shadow-sm flex flex-col justify-between card-hover-lift group min-h-[220px]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-cairo text-brand-navy">
                Join 1,200+ Donors
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Be part of an eternal community creating permanent, verifiable social dignity.
              </p>
            </div>
            {/* Illustrated community artwork */}
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/60 border border-amber-900/10 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
                alt="Community Donors"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-amber-900/10 flex items-center justify-between">
            <Link
              href="/about"
              className="text-[11px] font-cairo font-bold text-brand-navy hover:text-brand-royal flex items-center gap-1.5"
            >
              <span>Join the Community</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </Link>
          </div>
        </div>

        {/* Card 3: 63+ Endowments (Dark Royal) */}
        <div className="bg-gradient-to-br from-brand-royal via-brand-royal-dark to-brand-navy text-white rounded-3xl p-6 border border-white/10 shadow-clay flex flex-col justify-between relative overflow-hidden card-hover-lift group min-h-[220px]">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-cairo text-brand-sky">63+</div>
              <p className="text-white/80 text-xs leading-relaxed max-w-[180px]">
                Commercial properties, solar water grids, and dialysis centres active.
              </p>
            </div>
            {/* Geometric line art flowers/architecture */}
            <div className="w-16 h-16 opacity-80 group-hover:scale-110 transition-transform text-brand-gold">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-full h-full">
                <rect x="18" y="18" width="28" height="28" rx="6" />
                <path d="M32 8L32 56M8 32L56 32" />
                <circle cx="32" cy="32" r="6" />
              </svg>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/endowments"
              className="text-[11px] font-cairo font-bold text-white/90 group-hover:text-white flex items-center gap-1.5"
            >
              <span>Explore Portfolios</span>
              <span className="w-4 h-4 rounded-full bg-emerald-400 text-brand-navy flex items-center justify-center text-[10px]">→</span>
            </Link>
          </div>
        </div>

        {/* Card 4: ₦4.8B+ Assets (Cream Parchment) */}
        <div className="bg-[#F6F4EB] rounded-3xl p-6 border border-amber-900/10 shadow-sm flex flex-col justify-between card-hover-lift group min-h-[220px]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-cairo text-brand-navy">
                ₦4.8B+
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Assets Under Management preserved inviolable across Nigeria.
              </p>
            </div>
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/60 border border-amber-900/10 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80"
                alt="Endowment Assets"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-amber-900/10 flex items-center justify-between text-[11px] font-cairo text-slate-500">
            <span>100% Capital Preserved</span>
            <span className="font-bold text-emerald-700 font-mono">Zero Dilution</span>
          </div>
        </div>

        {/* Card 5: 24/7 Shariah Governance (Dark Royal) */}
        <div className="bg-gradient-to-br from-brand-royal via-brand-royal-dark to-brand-navy text-white rounded-3xl p-6 border border-white/10 shadow-clay flex flex-col justify-between relative overflow-hidden card-hover-lift group min-h-[220px]">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-cairo text-white">24/7</div>
              <p className="text-white/80 text-xs leading-relaxed max-w-[180px]">
                AAOIFI-certified Shariah Board oversight and escrow monitoring.
              </p>
            </div>
            {/* Scholar/Shield Icon line art */}
            <div className="w-16 h-16 opacity-80 group-hover:scale-110 transition-transform text-brand-sky">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-full h-full">
                <path d="M32 8L48 16V32C48 44 32 54 32 54C32 54 16 44 16 32V16L32 8Z" />
                <path d="M26 32L30 36L38 28" />
              </svg>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/about#shariah"
              className="text-[11px] font-cairo font-bold text-white/90 group-hover:text-white flex items-center gap-1.5"
            >
              <span>Read Shariah Charter</span>
              <span className="w-4 h-4 rounded-full bg-emerald-400 text-brand-navy flex items-center justify-center text-[10px]">✓</span>
            </Link>
          </div>
        </div>

        {/* Card 6: Perpetual Sadaqah Jariyah (Cream Parchment) */}
        <div className="bg-[#F6F4EB] rounded-3xl p-6 border border-amber-900/10 shadow-sm flex flex-col justify-between card-hover-lift group min-h-[220px]">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold font-cairo text-brand-navy leading-snug">
                Perpetual Sadaqah
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Charity that outlives generations and continues blessing your scale forever.
              </p>
            </div>
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/60 border border-amber-900/10 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80"
                alt="Smiling Children Beneficiaries"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-amber-900/10 flex items-center justify-between">
            <button
              onClick={() => setPledgeOpen(true)}
              className="text-[11px] font-cairo font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1.5"
            >
              <span>Dedicate Waqf Sahm</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
