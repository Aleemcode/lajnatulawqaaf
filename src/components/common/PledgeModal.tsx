'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, HeartHandshake } from 'lucide-react';
import { WAQF_PILLARS, GIVING_MODES, Project } from '@/data/siteData';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';

type GivingMode = 'give-now' | 'start-waqf';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project | null;
  initialPillar?: string;
  initialMode?: GivingMode;
}

export const PledgeModal: React.FC<PledgeModalProps> = ({
  isOpen,
  onClose,
  project,
  initialPillar,
  initialMode = 'give-now',
}) => {
  const [mode, setMode] = useState<GivingMode>(initialMode);
  const [cause, setCause] = useState('real-estate');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // A specific project is always a lasting-Waqf pledge for that project.
    if (project) setMode('start-waqf');
    else setMode(initialMode);
  }, [project, initialMode, isOpen]);

  useEffect(() => {
    if (project?.category) {
      setCause(project.category);
    } else if (initialPillar) {
      setCause(initialPillar);
    }
  }, [project, initialPillar]);

  if (!isOpen) return null;

  const isGiveNow = mode === 'give-now' && !project;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: no live payment/backend yet (donations out of scope this round).
    // When wired, submit to a validated, rate-limited server endpoint —
    // see docs/REVAMP/03-SECURITY-AUDIT.md §H2.
    setSubmitted(true);
  };

  const heading = project
    ? `Pledge: ${project.title}`
    : isGiveNow
    ? 'Give a gift'
    : 'Start your Waqf';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={heading}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-brand-royal/10 overflow-hidden">
        <OrganicBlobs variant="modal" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-all z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-royal"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="relative z-10 pt-8 px-6 text-center">
          <div className="text-brand-royal text-2xl mb-1" aria-hidden>✻</div>
          <h3 className="font-cairo font-bold text-xl text-brand-navy">{heading}</h3>
          <p className="text-slate-600 text-sm mt-1">
            {isGiveNow
              ? 'Your gift goes straight to families in need — Sadaqah or Zakat.'
              : 'Your gift is kept safe forever; only its earnings are given away — Sadaqah Jariyah.'}
          </p>
        </div>

        {submitted ? (
          <div className="relative z-10 p-8 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle size={36} />
            </div>
            <h4 className="font-cairo text-2xl font-bold text-brand-navy">Jazakallahu Khayran!</h4>
            <p className="text-slate-600 text-sm max-w-md">
              We&apos;ve received your {isGiveNow ? 'gift request' : 'pledge'}. A member of our team will reach
              out to help you complete it. Jazakallahu Khayran.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-brand-royal text-white rounded-full font-cairo font-semibold text-sm hover:bg-brand-royal-light transition-all"
            >
              Back to website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Balance toggle: everyday gift vs lasting Waqf (hidden for a specific project) */}
            {!project && (
              <div
                className="grid grid-cols-2 gap-1 p-1 rounded-2xl bg-slate-100"
                role="tablist"
                aria-label="How would you like to give?"
              >
                {GIVING_MODES.map((m) => {
                  const active = mode === (m.id as GivingMode);
                  return (
                    <button
                      key={m.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setMode(m.id as GivingMode)}
                      className={`py-2 px-3 rounded-xl text-xs font-cairo font-bold transition-all ${
                        active ? 'bg-white text-brand-royal shadow-sm' : 'text-slate-500 hover:text-brand-navy'
                      }`}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>
            )}

            <div>
              <label htmlFor="pledge-name" className="block text-sm font-medium text-brand-navy mb-1.5">
                Full name
              </label>
              <input
                id="pledge-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ibrahim Dan-Ali"
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white"
              />
            </div>

            <div>
              <label htmlFor="pledge-email" className="block text-sm font-medium text-brand-navy mb-1.5">
                Email address
              </label>
              <input
                id="pledge-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white"
              />
            </div>

            {isGiveNow && (
              <div>
                <label htmlFor="pledge-amount" className="block text-sm font-medium text-brand-navy mb-1.5">
                  Amount (₦) — any amount helps
                </label>
                <input
                  id="pledge-amount"
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="e.g. 5,000"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white"
                />
              </div>
            )}

            <div>
              <label htmlFor="pledge-cause" className="block text-sm font-medium text-brand-navy mb-1.5">
                What would you like to support?
              </label>
              <select
                id="pledge-cause"
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
              <label htmlFor="pledge-message" className="block text-sm font-medium text-brand-navy mb-1.5">
                Anything you&apos;d like us to know? (optional)
              </label>
              <textarea
                id="pledge-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A dedication name, a specific request, or a question…"
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="glass-cta w-full py-3.5 px-6 rounded-full text-white font-cairo font-bold text-sm flex items-center justify-center gap-2"
            >
              <HeartHandshake size={18} />
              {isGiveNow ? 'Send my gift' : 'Send my pledge'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
