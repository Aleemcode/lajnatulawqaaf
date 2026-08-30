'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FAQS } from '@/data/siteData';
import { GlassButton } from '@/components/common/GlassButton';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-b border-brand-royal/10 bg-brand-mist relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Span 7): FAQ List & Contact Button */}
        <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-brand-royal/10 space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-brand-royal text-xs font-cairo font-bold shadow-sm">
              <span>FAQ’S</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cairo text-brand-navy leading-snug">
              Answers to common endowment questions.
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-white border-brand-royal/20 shadow-sm'
                      : 'bg-white/60 border-slate-200/70 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-cairo font-bold text-xs sm:text-sm text-brand-navy">
                      {faq.question}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen
                          ? 'bg-brand-navy text-emerald-400'
                          : 'bg-slate-200/80 text-slate-400'
                      }`}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <GlassButton
              href="/contact"
              variant="royal"
              size="md"
              indicator="arrow"
            >
              Contact Trustees
            </GlassButton>
          </div>
        </div>

        {/* Right Column (Span 5): Stacked Creative Illustration/Photo Cards */}
        <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 bg-white/40 flex flex-col justify-center">
          {/* Creative Card 1: Foil Smiley Sun Artwork */}
          <div className="bg-white rounded-3xl p-5 border border-brand-royal/10 shadow-clay space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-[#99CC33] flex items-center justify-center">
              {/* Illustrated Sun / Foil Artwork */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white/90">
                  <polygon
                    points="50,0 63,35 100,50 63,65 50,100 37,65 0,50 37,35"
                    fill="currentColor"
                    opacity="0.85"
                  />
                  <circle cx="50" cy="50" r="24" fill="#FFFFFF" />
                  <path d="M42 46H44M56 46H58M42 54C46 58 54 58 58 54" stroke="#123788" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed font-sans">
              Every share you endow is a step toward a healthier, safer, and self-reliant life for families in need.
            </p>
          </div>

          {/* Creative Card 2: Community Partner Photo */}
          <div className="bg-white rounded-3xl p-5 border border-brand-royal/10 shadow-clay space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                alt="Community Volunteer"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-slate-600 text-xs leading-relaxed font-sans">
              With local partners and certified jurists on the ground, we ensure support reaches the right people quickly and with dignity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
