'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/siteData';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { MapPin, ArrowRight } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);
  const featured = PROJECTS.slice(0, 2);

  return (
    <section className="border-b border-brand-royal/10 bg-brand-mist relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 5): Intro, Photo, Volunteer Facepile, CTA */}
        <div className="lg:col-span-5 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold shadow-sm">
              <span>Our Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cairo text-slate-400 leading-snug">
              Support the endowments that build{' '}
              <span className="text-brand-navy">permanent community self-reliance.</span>
            </h2>
          </div>

          {/* Emotional Photo Card */}
          <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-clay border border-brand-royal/10">
            <Image
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
              alt="Community Support Hands"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Volunteers Stack & Text */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
                ].map((src, i) => (
                  <div key={i} className="relative w-7 h-7 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                    <Image src={src} alt="Volunteer" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold font-cairo text-brand-navy">10+ Field Officers</div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              We run on-the-ground endowment programs focused on solar water grids, commercial real estate, and healthcare.
            </p>
          </div>

          <div>
            <GlassButton
              href="/endowments"
              variant="royal"
              size="md"
              direction="right"
            >
              See All Endowments
            </GlassButton>
          </div>
        </div>

        {/* Right Column (Span 7): Stacked Rich Endowment Cards */}
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 bg-white/40">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col space-y-5 card-hover-lift group"
            >
              {/* Floating Pill Header */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-brand-mist border border-slate-200/80 text-brand-navy text-xs font-cairo font-bold">
                  {proj.valuation} Valuation
                </span>
                <span className="text-xs font-cairo text-brand-royal font-bold flex items-center gap-1">
                  <MapPin size={12} className="text-brand-sky" /> {proj.location}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-cairo font-bold text-lg text-brand-navy leading-snug">
                {proj.title}
              </h3>

              {/* Photo */}
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
                    <span>Raised: {proj.raisedFund}</span>
                    <span>Target: {proj.targetFund}</span>
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
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-cairo text-slate-500">
                  Annual Social Yield: <strong className="text-brand-navy">{proj.annualYield}</strong>
                </span>
                <button
                  onClick={() => setPledgeOpen(true)}
                  className="w-9 h-9 rounded-full bg-brand-royal text-white flex items-center justify-center shadow-md hover:bg-brand-sky hover:text-brand-navy transition-all group-hover:scale-110"
                  title="Pledge Share"
                >
                  <ArrowRight size={16} />
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
