'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { ShieldCheck, MapPin, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export const HeroBentoGrid: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <OrganicBlobs />

      {/* Editorial Hero Statement */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-4">
        {/* Shariah Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-royal/15 text-brand-royal text-xs font-cairo font-bold tracking-wide shadow-sm select-none">
          <IslamicEmblem size="sm" glow={false} />
          <span>Shariah-Governed Islamic Endowment Fund</span>
          <span className="text-brand-gold font-bold">· AAOIFI Standards</span>
        </div>

        {/* Headline with Embedded Emblem */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-cairo text-brand-navy leading-[1.12] tracking-tight">
          Empowering Communities{' '}
          <span className="inline-flex items-baseline align-middle mx-1">
            <IslamicEmblem size="md" />
          </span>{' '}
          Through Perpetual Waqf
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans font-normal">
          We preserve 100% of your charitable principal in revenue-generating commercial assets, dedicating pure annual yields to education, clean water, and healthcare across Nigeria.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <GlassButton
            onClick={() => setPledgeOpen(true)}
            size="lg"
            variant="royal"
            direction="right"
          >
            Establish Waqf Today
          </GlassButton>
        </div>
      </div>

      {/* Architectural 3-Column Asymmetric Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Column 1 (Left / Span 4): High-Impact Fiduciary Card */}
        <div className="lg:col-span-4 surface-dark-card rounded-3xl p-7 text-white flex flex-col justify-between space-y-6 relative overflow-hidden group">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-sky text-[11px] font-cairo font-bold tracking-wider uppercase">
              <Lock size={12} />
              <span>Fiduciary Covenant</span>
            </div>

            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold font-cairo text-brand-gold leading-none">
                85%
              </div>
              <p className="text-xs font-cairo font-bold text-white/90 uppercase tracking-wide pt-1">
                Direct Annual Social Yield
              </p>
            </div>

            <p className="text-xs text-white/75 leading-relaxed font-sans">
              Distributed directly to verified clean water grids, dialysis treatments, and student scholarships with zero corpus depletion.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-white/70 font-cairo">
              <span>Capital Preservation</span>
              <span className="font-bold text-brand-sky">100% Inviolable</span>
            </div>
            <button
              onClick={() => setPledgeOpen(true)}
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-cairo font-bold flex items-center justify-between transition-all"
            >
              <span>Pledge a Share</span>
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
              alt="Landmark Commercial Waqf Building"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />

            {/* Floating Top Pills */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-cairo font-bold shadow-sm">
                ₦1.2B Landmark Waqf
              </span>
              <span className="px-2.5 py-1 rounded-full bg-brand-navy/80 backdrop-blur-md text-white text-[10px] font-cairo font-bold flex items-center gap-1">
                <MapPin size={10} className="text-brand-sky" /> Abuja Central
              </span>
            </div>

            {/* Bottom Title on Image */}
            <div className="absolute bottom-3 inset-x-3 text-white">
              <p className="text-xs font-cairo font-bold leading-tight drop-shadow-sm">
                Al-Hikmah Plaza Waqf (Commercial Real Estate)
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
                Annual Yield: <strong className="text-brand-navy">₦102M / yr</strong>
              </span>
              <Link
                href="/endowments"
                className="text-[11px] font-cairo font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1"
              >
                <span>View Project</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>

        {/* Column 3 (Right / Span 4): 2 Stacked Modern Cards */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Card 3A: ₦4.8B+ Inviolable AUM (Parchment Card) */}
          <div className="surface-parchment rounded-3xl p-6 flex-1 flex flex-col justify-between space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold font-cairo text-brand-navy">
                  ₦4.8B+
                </div>
                <p className="text-xs font-cairo font-semibold text-slate-600">
                  Total Assets Under Management
                </p>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-white border border-amber-900/10 text-brand-royal text-[10px] font-cairo font-bold">
                63+ Endowments
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-amber-900/10">
              <div className="flex -space-x-2 overflow-hidden">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
                ].map((src, i) => (
                  <div key={i} className="relative w-7 h-7 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                    <Image src={src} alt="Donor" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-cairo font-bold text-brand-navy">
                1,200+ Donors & Families
              </span>
            </div>
          </div>

          {/* Card 3B: 24/7 Shariah Supervisory Oversight */}
          <div className="surface-card rounded-3xl p-6 flex-1 flex flex-col justify-between space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-cairo font-bold text-brand-royal">
                  <ShieldCheck size={16} className="text-brand-sky" />
                  <span>AAOIFI Certified Oversight</span>
                </div>
                <h3 className="text-base font-bold font-cairo text-brand-navy">
                  Independent Shariah Board
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Every asset acquisition and social yield distribution is audited by eminent Islamic jurisprudence scholars.
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/about#shariah"
                className="text-[11px] font-cairo font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1"
              >
                <span>Read Shariah Charter</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
