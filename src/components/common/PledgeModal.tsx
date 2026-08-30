'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { WAQF_PILLARS } from '@/data/siteData';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PledgeModal: React.FC<PledgeModalProps> = ({ isOpen, onClose }) => {
  const [selectedPillar, setSelectedPillar] = useState('real-estate');
  const [pledgeType, setPledgeType] = useState<'share' | 'asset' | 'custom'>('share');
  const [amount, setAmount] = useState('100');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-brand-royal/10 overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-brand-royal via-brand-royal-dark to-brand-navy p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-2 font-cairo">
            <ShieldCheck size={14} /> Shariah-Compliant Waqf Pledge
          </div>
          <h3 className="font-cairo text-2xl font-bold">Dedicate an Eternal Endowment</h3>
          <p className="text-white/80 text-sm mt-1">
            Establish your perpetual Sadaqah Jariyah. 100% of your capital is preserved in perpetuity.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle size={36} />
            </div>
            <h4 className="font-cairo text-2xl font-bold text-brand-navy">Jazakallahu Khayran!</h4>
            <p className="text-slate-600 text-sm max-w-md">
              Your Waqf pledge inquiry has been received. A dedicated Trustee from our endowment committee will reach out to guide your deed documentation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-brand-royal text-white rounded-full font-cairo font-semibold text-sm hover:bg-brand-royal-light transition-all"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Select Waqf Pillar */}
            <div>
              <label className="block text-xs font-bold font-cairo uppercase text-slate-500 tracking-wider mb-2">
                1. Select Endowment Portfolio
              </label>
              <div className="grid grid-cols-2 gap-2">
                {WAQF_PILLARS.map((pillar) => (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setSelectedPillar(pillar.id)}
                    className={`p-3 text-left rounded-2xl border text-xs font-medium transition-all ${
                      selectedPillar === pillar.id
                        ? 'border-brand-royal bg-brand-royal/5 text-brand-royal font-semibold ring-1 ring-brand-royal'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-cairo font-bold">{pillar.title}</div>
                    <div className="text-[10px] text-slate-500 truncate mt-0.5">{pillar.stat}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Contribution Method */}
            <div>
              <label className="block text-xs font-bold font-cairo uppercase text-slate-500 tracking-wider mb-2">
                2. Contribution Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'share', label: 'Fractional Share', sub: 'From $50' },
                  { id: 'asset', label: 'Real Property / Land', sub: 'Named Waqf' },
                  { id: 'custom', label: 'Institutional Grant', sub: 'Custom Deed' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setPledgeType(type.id as any)}
                    className={`p-2.5 text-center rounded-2xl border transition-all ${
                      pledgeType === type.id
                        ? 'border-brand-royal bg-brand-royal text-white font-semibold'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold font-cairo">{type.label}</div>
                    <div className={`text-[10px] ${pledgeType === type.id ? 'text-white/80' : 'text-slate-400'}`}>
                      {type.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount selector if share */}
            {pledgeType === 'share' && (
              <div>
                <label className="block text-xs font-bold font-cairo uppercase text-slate-500 tracking-wider mb-2">
                  Share Value (USD / NGN Equivalent)
                </label>
                <div className="flex gap-2">
                  {['50', '100', '250', '500', '1000'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                        amount === amt
                          ? 'border-brand-sky bg-brand-sky text-white ring-1 ring-brand-sky'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold font-cairo uppercase text-slate-500 tracking-wider">
                3. Donor Contact Information
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name / Family Title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number / WhatsApp (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-royal to-brand-royal-dark text-white font-cairo font-bold text-sm shadow-lg shadow-brand-royal/25 hover:shadow-brand-royal/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <HeartHandshake size={18} />
              Confirm Waqf Pledge Inquiry
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
