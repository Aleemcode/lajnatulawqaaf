'use client';

import React, { useState } from 'react';
import { GlassButton } from '@/components/common/GlassButton';
import { PledgeModal } from '@/components/common/PledgeModal';

export const HowItWorksGrid: React.FC = () => {
  const [pledgeOpen, setPledgeOpen] = useState(false);

  const steps = [
    {
      num: '1',
      title: 'Identify the Cause',
      desc: 'We work with trusted scholars and local communities to identify critical needs for water grids, schools, and clinics.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-emerald-800">
          <circle cx="28" cy="28" r="14" />
          <path d="M38 38L52 52" strokeLinecap="round" />
          <path d="M28 20C24 20 22 23 22 26C22 31 28 34 28 34C28 34 34 31 34 26C34 23 32 20 28 20Z" fill="currentColor" fillOpacity="0.15" />
        </svg>
      ),
    },
    {
      num: '2',
      title: 'Fund the Endowment',
      desc: 'Donations are pooled into high-yield commercial real estate and solar infrastructure governed under AAOIFI standards.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-emerald-800">
          <rect x="14" y="24" width="36" height="26" rx="4" />
          <path d="M24 24V16C24 13 27 10 32 10C37 10 40 13 40 16V24" />
          <circle cx="32" cy="37" r="4" fill="currentColor" fillOpacity="0.2" />
        </svg>
      ),
    },
    {
      num: '3',
      title: 'Deploy & Generate Yields',
      desc: 'Our fiduciary team manages the assets to produce continuous annual returns while 100% of the principal corpus remains untouched.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-emerald-800">
          <path d="M32 10C32 10 18 26 18 36C18 44 24 50 32 50C40 50 46 44 46 36C46 26 32 10 32 10Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M32 26V40M26 34H38" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '4',
      title: 'Create Lasting Impact',
      desc: 'Recurring social yields fund water networks, scholarships, and healthcare across generations with zero dilution.',
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-emerald-800">
          <path d="M32 54V32M32 32C32 20 20 18 16 12C26 12 32 22 32 32ZM32 32C32 20 44 18 48 12C38 12 32 22 32 32Z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="border-b border-brand-royal/10 bg-white/70 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 4): Section Title & CTA */}
        <div className="lg:col-span-4 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-mist border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold shadow-sm">
              <span>How it works</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-cairo text-brand-navy leading-snug">
              Your support becomes eternal reward in the real world.
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              Unlike traditional charities that consume donations immediately, modern Waqf preserves your principal and distributes yields forever.
            </p>
          </div>

          <div>
            <GlassButton
              onClick={() => setPledgeOpen(true)}
              variant="royal"
              size="md"
              indicator="arrow"
            >
              Establish Waqf
            </GlassButton>
          </div>
        </div>

        {/* Right Column (Span 8): 2x2 Numbered Step Cards */}
        <div className="lg:col-span-8 p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-brand-mist/50">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col justify-between space-y-5 card-hover-lift group"
            >
              <div className="space-y-4">
                {/* Step Pill Header */}
                <div className="flex items-center gap-2.5 bg-brand-mist/80 p-1.5 pr-4 rounded-full border border-slate-200/60 w-fit">
                  <span className="w-7 h-7 rounded-full bg-white text-brand-navy font-bold font-cairo text-xs flex items-center justify-center shadow-sm">
                    {step.num}
                  </span>
                  <span className="font-cairo font-bold text-xs text-brand-navy">{step.title}</span>
                </div>

                {/* Cream Parchment Illustration Box */}
                <div className="h-32 rounded-2xl bg-[#F6F4EB] border border-amber-900/10 flex items-center justify-center p-4 group-hover:scale-[1.02] transition-transform">
                  {step.icon}
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
