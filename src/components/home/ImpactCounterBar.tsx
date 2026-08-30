'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';

export const ImpactCounterBar: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  return (
    <section className="border-y border-brand-royal/10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 4): Impact Badge & Facepile */}
        <div className="lg:col-span-4 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-mist border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Impact Reach</span>
            </div>
            {/* Avatar Stack + 10k+ Count */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
                ].map((src, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                    <Image src={src} alt="Donor" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold font-cairo text-brand-navy">10k+ Donors</div>
            </div>
          </div>

          <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
            Trusted by individual donors, family trusts, and institutional partners across Nigeria and the diaspora.
          </p>
        </div>

        {/* Right Column (Span 8): Bold Statement & Glass CTA */}
        <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cairo text-slate-400 font-normal leading-snug">
            <span className="font-bold text-brand-navy">170,000+ lives empowered</span> and{' '}
            <span className="font-bold text-brand-navy">₦4.8B+ in permanent endowments</span> established —{' '}
            <span className="text-brand-navy font-bold">and you know what? We’re just getting started.</span>
          </h2>

          <div className="pt-2 flex items-center">
            <GlassButton
              onClick={() => setPledgeOpen(true)}
              variant="royal"
              size="md"
              indicator="arrow"
            >
              Pledge a Waqf Share
            </GlassButton>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
