'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/common/Logo';
import { SITE_CONFIG } from '@/data/siteData';
import { ShieldCheck, Mail, MapPin, Phone, ArrowUpRight, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-royal-dark text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(#03BDE3_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="white" height={40} />
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.tagline}
            </p>
            <div className="pt-2 flex items-center gap-2 text-brand-gold text-xs font-semibold font-cairo">
              <ShieldCheck size={16} />
              <span>Registered Charity & Shariah-Governed Trust · {SITE_CONFIG.registrationNo}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/60 pt-2">
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} className="text-brand-sky" /> Abuja, Nigeria
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone size={14} className="text-brand-sky" /> {SITE_CONFIG.phone}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-cairo font-bold text-sm text-brand-sky uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-cairo">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-all">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-all">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link href="/about#shariah" className="hover:text-white hover:underline transition-all">
                  Shariah Board
                </Link>
              </li>
              <li>
                <Link href="/endowments" className="hover:text-white hover:underline transition-all">
                  Waqf Portfolios
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-white hover:underline transition-all">
                  Audits & Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-all">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Waqf Pillars */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-cairo font-bold text-sm text-brand-sky uppercase tracking-wider">
              Endowments
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-cairo">
              <li>
                <Link href="/endowments?cat=real-estate" className="hover:text-white transition-all">
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link href="/endowments?cat=education" className="hover:text-white transition-all">
                  Education & Da'wah
                </Link>
              </li>
              <li>
                <Link href="/endowments?cat=water" className="hover:text-white transition-all">
                  Solar Water Grids
                </Link>
              </li>
              <li>
                <Link href="/endowments?cat=healthcare" className="hover:text-white transition-all">
                  Dialysis & Healthcare
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-all text-brand-gold font-semibold">
                  Custom Family Waqf
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cairo font-bold text-sm text-brand-sky uppercase tracking-wider">
              Annual Impact Bulletin
            </h4>
            <p className="text-white/70 text-xs leading-relaxed">
              Subscribe for audited financial summaries, project dedications, and Ramadan impact disclosures.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to the Lajnah Annual Bulletin.'); }} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-brand-sky focus:bg-white/15"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-xl bg-brand-sky text-brand-navy font-cairo font-bold text-xs hover:bg-brand-sky-light transition-all flex items-center justify-center gap-1.5"
              >
                <Mail size={14} /> Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-cairo">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/transparency" className="hover:text-white transition-all">
              Shariah Charter
            </Link>
            <Link href="/transparency" className="hover:text-white transition-all">
              Privacy & Fiduciary Policy
            </Link>
            <span className="text-brand-gold">لجنة الأوقاف والصدقات</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
