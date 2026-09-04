'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/siteData';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { MapPin, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);
  const featured = PROJECTS.slice(0, 2);

  return (
    <section className="border-b border-brand-royal/10 bg-brand-mist relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 5): Intro, Photo, Field Officers, CTA */}
        <div className="lg:col-span-5 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="badge-pill bg-white border border-slate-200/80 text-brand-royal shadow-sm">
              <span>ACTIVE ENDOWMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-cairo text-slate-400 leading-snug">
              Support the physical assets that create{' '}
              <span className="text-brand-navy">permanent community self-reliance.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
              From commercial shopping arcades to solar micro-utility grids, each project is 100% asset-backed and structured for multi-generational yield distribution.
            </p>
          </div>

          {/* Emotional Photo Card */}
          <div className="relative h-52 sm:h-60 rounded-3xl overflow-hidden shadow-clay border border-brand-royal/10 group">
            <Image
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
              alt="Community Empowerment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-cairo font-bold">
              Direct community benefit with full fiduciary transparency
            </div>
          </div>

          <div>
            <GlassButton
              href="/endowments"
              variant="royal"
              size="md"
              direction="right"
            >
              Explore All Endowments
            </GlassButton>
          </div>
        </div>

        {/* Right Column (Span 7): Stacked Elevated Project Cards */}
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 bg-white/40">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="surface-card rounded-3xl p-6 flex flex-col space-y-5 group"
            >
              {/* Header Pill */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-brand-mist border border-slate-200/80 text-brand-navy text-xs font-cairo font-bold">
                  {proj.valuation} Asset Valuation
                </span>
                <span className="text-xs font-cairo text-brand-royal font-bold flex items-center gap-1.5">
                  <MapPin size={13} className="text-brand-sky" /> {proj.location}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="font-cairo font-bold text-lg text-brand-navy leading-snug">
                  {proj.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-sans line-clamp-2">
                  {proj.description}
                </p>
              </div>

              {/* Landscape Photo */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Progress & Target */}
              {proj.progressPercent && (
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-cairo font-semibold text-slate-500">
                    <span>Funded: <strong className="text-brand-navy font-bold">{proj.raisedFund}</strong></span>
                    <span>Target: <strong>{proj.targetFund}</strong></span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-sky to-brand-royal rounded-full"
                      style={{ width: `${proj.progressPercent}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Card Footer Button */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-cairo text-slate-500">
                  Annual Social Yield: <strong className="text-brand-navy font-bold">{proj.annualYield}</strong>
                </span>
                <button
                  onClick={() => setPledgeOpen(true)}
                  className="px-4 py-2 rounded-xl bg-brand-royal text-white text-xs font-cairo font-bold flex items-center gap-1.5 shadow-sm hover:bg-brand-royal-light transition-all"
                >
                  <span>Pledge Share</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
