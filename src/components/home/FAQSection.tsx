'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/siteData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { BrandWatermark } from '@/components/common/BrandWatermark';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-brand-mist relative overflow-hidden">
      <OrganicBlobs />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sky-soft text-brand-royal text-xs font-cairo font-bold">
            <HelpCircle size={14} />
            <span>Islamic Jurisprudence & Governance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-brand-navy">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about establishing a Shariah-compliant endowment.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-royal/10 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-cairo font-bold text-sm text-brand-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-brand-royal flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-sky' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
