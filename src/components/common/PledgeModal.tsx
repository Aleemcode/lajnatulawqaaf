'use client';

import React, { useState } from 'react';
import { X, CheckCircle, HeartHandshake } from 'lucide-react';
import { WAQF_PILLARS } from '@/data/siteData';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PledgeModal: React.FC<PledgeModalProps> = ({ isOpen, onClose }) => {
  const [cause, setCause] = useState('real-estate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-brand-royal/10 overflow-hidden">
        <OrganicBlobs variant="modal" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-all z-20"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="relative z-10 pt-8 px-6 text-center">
          <div className="text-brand-royal text-2xl mb-1">✻</div>
          <h3 className="font-cairo font-bold text-xl text-brand-navy">Dedicate an Endowment</h3>
          <p className="text-slate-600 text-sm mt-1">
            Every endowment brings hope, dignity, and perpetual blessings to communities
          </p>
        </div>

        {submitted ? (
          <div className="relative z-10 p-8 text-center flex flex-col items-center justify-center space-y-4">
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
          <form onSubmit={handleSubmit} className="relative z-10 p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1.5">
                Choose the Cause
              </label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white"
              >
                {WAQF_PILLARS.map((pillar) => (
                  <option key={pillar.id} value={pillar.id}>
                    {pillar.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-navy mb-1.5">
                Message (Optional)
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="glass-cta w-full py-3.5 px-6 rounded-full text-white font-cairo font-bold text-sm flex items-center justify-center gap-2"
            >
              <HeartHandshake size={18} />
              Submit Waqf Pledge Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
