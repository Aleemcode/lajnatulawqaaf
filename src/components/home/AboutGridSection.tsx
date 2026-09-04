'use client';

import React from 'react';
import Image from 'next/image';
import { GlassButton } from '@/components/common/GlassButton';
import { Play, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutGridSection: React.FC = () => {
  return (
    <section className="border-b border-brand-royal/10 bg-brand-mist relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 7): Spotlight Media & Partner Strip */}
        <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="badge-pill bg-white border border-slate-200/80 text-brand-royal shadow-sm">
              <span>ABOUT THE INSTITUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-cairo text-slate-400 leading-snug">
              Reviving the Prophetic institution of perpetual Waqf to build{' '}
              <span className="text-brand-navy">lasting infrastructure, education, and healthcare.</span>
            </h2>
          </div>

          {/* Large Video Spotlight with Frosted Glass Play Button */}
          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-clay group cursor-pointer border border-brand-royal/10">
            <Image
              src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=1000&q=80"
              alt="Community Waqf In Action"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-navy/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand-royal/80 transition-all">
                <Play size={24} className="fill-white translate-x-0.5 text-white" />
              </div>
            </div>
          </div>

          {/* Institutional Partner Recognition Strip */}
          <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-4 text-xs font-cairo font-bold text-slate-400 uppercase tracking-wider">
            <span>Jaiz Bank</span>
            <span>Lotus Bank</span>
            <span>AAOIFI Standards</span>
            <span>SCIA Recognised</span>
          </div>
        </div>

        {/* Right Column (Span 5): Stacked Frosted Cards & CTA */}
        <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between bg-white/40">
          <div className="space-y-5">
            {/* Frosted Card 1 */}
            <div className="surface-card rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-brand-sky-soft text-brand-royal flex items-center justify-center shadow-sm">
                  <HeartHandshake size={18} />
                </div>
                <h3 className="font-cairo font-bold text-base text-brand-navy">Direct Social Yield</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                We distribute 85% of net commercial rental, solar power, and agricultural yields directly to verified local community programs and families in need.
              </p>
            </div>

            {/* Frosted Card 2 */}
            <div className="surface-card rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-brand-gold-soft text-brand-gold flex items-center justify-center shadow-sm">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-cairo font-bold text-base text-brand-navy">Complete Transparency</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed font-sans">
                We publish unredacted audited financial statements and Shariah compliance fatwas annually, giving every donor verified proof of eternal impact.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <GlassButton
              href="/about"
              variant="royal"
              size="md"
              direction="right"
            >
              Learn More About Governance
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
};
