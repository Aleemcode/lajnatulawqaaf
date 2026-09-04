'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { GlassButton } from '@/components/common/GlassButton';
import { PhoneCall } from 'lucide-react';
import { PledgeModal } from '@/components/common/PledgeModal';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';

type GivingMode = 'give-now' | 'start-waqf';

export const CTASection: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);
  const [mode, setMode] = useState<GivingMode>('give-now');

  const openPledge = (m: GivingMode) => {
    setMode(m);
    setPledgeOpen(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-4xl bg-gradient-to-r from-brand-royal via-brand-royal-dark to-brand-navy text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-white/15">
        <OrganicBlobs variant="dark" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 text-brand-gold text-xs font-cairo font-bold backdrop-blur-sm shadow-sm">
            <IslamicEmblem size="sm" glow={false} />
            <span>Sadaqah Jariyah — a reward that never stops</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-cairo text-white leading-tight tracking-tight drop-shadow-sm">
            Give today. Keep rewarding, forever.
          </h2>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-sans max-w-xl mx-auto">
            Give a gift today for someone who needs it now — or start a Waqf that gives on your behalf for years to
            come. Any amount counts, and the reward keeps coming to you and those you love.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <GlassButton onClick={() => openPledge('give-now')} variant="sky" size="lg" indicator="arrow">
              Give now
            </GlassButton>

            <button
              onClick={() => openPledge('start-waqf')}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-cairo font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
            >
              Start a Waqf
            </button>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 border border-white/20 text-white font-cairo font-semibold text-sm transition-all flex items-center gap-2"
            >
              <PhoneCall size={16} />
              <span>Talk to us first</span>
            </Link>
          </div>
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} initialMode={mode} />
    </section>
  );
};
