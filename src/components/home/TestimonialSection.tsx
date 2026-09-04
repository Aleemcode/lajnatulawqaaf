'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { ArrowRight, Quote } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  return (
    <section className="border-b border-brand-royal/10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 4): Intro & CTA */}
        <div className="lg:col-span-4 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="badge-pill bg-brand-mist border border-slate-200/80 text-brand-royal shadow-sm">
              <span>COMMUNITY VOICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-brand-navy leading-snug">
              Hear from those who experience the impact.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              From community leaders to donor families, discover how structured Waqf transforms lives across Nigeria.
            </p>
          </div>

          <div>
            <GlassButton
              onClick={() => setPledgeOpen(true)}
              variant="royal"
              size="md"
              direction="right"
            >
              Establish Waqf Today
            </GlassButton>
          </div>
        </div>

        {/* Right Column (Span 8): Editorial Quote & Attribution */}
        <div className="lg:col-span-8 p-8 sm:p-14 flex flex-col justify-between space-y-8 bg-brand-mist/30">
          <div className="space-y-4">
            <div className="text-5xl font-serif text-brand-sky font-extrabold leading-none select-none">
              “
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-cairo font-semibold text-slate-700 leading-relaxed">
              They operate with uncompromising <span className="text-brand-navy font-extrabold">Amanah, precision, and consistency.</span> The endowment yields reach our community's water networks without delay or friction.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between">
            <div>
              <div className="text-sm font-cairo font-bold text-brand-navy">Alhaji Muhammad Bello</div>
              <div className="text-xs text-slate-500 font-cairo">Regional Community Director · Kano Clean Water Hub</div>
            </div>

            {/* Avatar Stack + Forward Arrow Disc */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
                ].map((src, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden bg-slate-200">
                    <Image src={src} alt="Partner" fill className="object-cover" />
                  </div>
                ))}
              </div>

              <button
                onClick={() => setPledgeOpen(true)}
                className="w-10 h-10 rounded-full bg-brand-royal text-white flex items-center justify-center shadow-md hover:bg-brand-sky hover:text-brand-navy transition-all hover:scale-105"
                title="Pledge Support"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
