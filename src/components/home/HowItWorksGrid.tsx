'use client';

import React, { useState } from 'react';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';
import { Search, Building2, TrendingUp, HeartHandshake } from 'lucide-react';

export const HowItWorksGrid: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Community Needs Mapping',
      subtitle: 'Identify & Verify',
      desc: 'Our scholars and field engineers assess underserved regions across Nigeria to identify urgent needs for clean water grids, dialysis clinics, and schools.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Perpetual Capital Pooling',
      subtitle: '100% Capital Preserved',
      desc: 'Donor contributions are pooled into high-yield commercial real estate and solar utility infrastructure under strict AAOIFI Shariah underwriting standards.',
      icon: Building2,
    },
    {
      num: '03',
      title: 'Asset Yield Generation',
      subtitle: 'Continuous Halal Returns',
      desc: 'Our fiduciary management team operates the assets to produce recurring annual revenue streams while 100% of the endowed capital corpus remains untouched.',
      icon: TrendingUp,
    },
    {
      num: '04',
      title: 'Perpetual Social Impact',
      subtitle: 'Generational Sadaqah',
      desc: '85% of net yields fund operations of water plants, dialysis treatments, and student scholarships across generations with zero capital dilution.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="border-b border-brand-royal/10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 4): Section Title & CTA */}
        <div className="lg:col-span-4 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="badge-pill bg-brand-mist border border-slate-200/80 text-brand-royal shadow-sm">
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-cairo text-brand-navy leading-snug">
              Your charity becomes eternal reward in the physical world.
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              Unlike consumable donations that disappear after single use, modern Waqf preserves your principal forever and distributes annual social yields across generations.
            </p>
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

        {/* Right Column (Span 8): 2x2 Modern Process Cards */}
        <div className="lg:col-span-8 p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-brand-mist/50">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="surface-card rounded-3xl p-6 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-2xl bg-brand-sky-soft text-brand-royal flex items-center justify-center font-bold font-cairo text-xs shadow-sm group-hover:bg-brand-royal group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="font-cairo font-bold text-xs text-brand-navy">
                        {step.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {step.num}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-cairo text-slate-400">
                  <span>{step.subtitle}</span>
                  <span className="text-brand-royal font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
