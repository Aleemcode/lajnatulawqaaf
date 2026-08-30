'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { HeartHandshake, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { PledgeModal } from '@/components/common/PledgeModal';

export const CTASection: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-4xl bg-gradient-to-r from-brand-royal via-brand-royal-dark to-brand-navy text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-white/15">
        {/* Background glow and decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs font-cairo font-bold">
            <IslamicEmblem size="sm" glow={false} />
            <span>Sadaqah Jariyah That Never Ceases</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-cairo leading-tight tracking-tight">
            Leave a Legacy of Eternal Blessing
          </h2>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans">
            Whether dedicating a named commercial property, endowing a rural solar borehole network, or pledging a $50 fractional share—your reward continues for generations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setPledgeOpen(true)}
              className="px-7 py-3.5 rounded-full bg-brand-sky hover:bg-brand-sky-light text-brand-navy font-cairo font-bold text-sm shadow-sky hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <HeartHandshake size={18} />
              <span>Establish Your Waqf Now</span>
              <ArrowRight size={16} />
            </button>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-cairo font-semibold text-sm transition-all flex items-center gap-2"
            >
              <PhoneCall size={16} />
              <span>Speak to an Advisor</span>
            </Link>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
