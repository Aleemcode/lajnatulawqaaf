'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { ArrowRight } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  return (
    <section className="border-b border-brand-royal/10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 4): Intro & CTA */}
        <div className="lg:col-span-4 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-mist border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold shadow-sm">
              <span>Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cairo text-brand-navy leading-snug">
              Hear from those who’ve seen the impact.
            </h2>
          </div>

          <div>
            <GlassButton
              onClick={() => setPledgeOpen(true)}
              variant="royal"
              size="md"
              direction="right"
            >
              Establish Waqf
            </GlassButton>
          </div>
        </div>

        {/* Right Column (Span 8): Quote, Attribution, Avatar Stack, Arrow */}
        <div className="lg:col-span-8 p-8 sm:p-14 flex flex-col justify-between space-y-8 bg-brand-mist/30">
          <div className="space-y-4">
            <div className="text-4xl sm:text-5xl font-serif text-brand-sky font-bold leading-none">
              “
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-cairo font-medium text-slate-700 leading-relaxed">
              They work with unwavering <span className="text-brand-navy font-bold">respect, amanah, and consistency.</span> The endowment yields reach the right vulnerable families, without delays.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between">
            <div>
              <div className="text-xs font-cairo font-bold text-brand-navy">Alhaji Muhammad Bello</div>
              <div className="text-[11px] text-slate-500 font-cairo">Regional Community Partner · Kano Hub</div>
            </div>

            {/* Avatar Stack + Forward Arrow Disc in Royal Blue */}
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
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
