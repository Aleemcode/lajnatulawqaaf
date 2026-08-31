'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/common/Logo';
import { SITE_CONFIG } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-mist py-12 px-4 sm:px-6 relative overflow-hidden border-t border-brand-royal/10">
      <div className="max-w-6xl mx-auto">
        {/* Nested Rounded Dark Card Footer */}
        <div className="bg-gradient-to-br from-[#0B245B] via-[#0B1B3D] to-[#081734] text-white rounded-[2.5rem] p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          <OrganicBlobs variant="dark" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand & Avatar Stack */}
            <div className="md:col-span-5 space-y-5">
              <Logo variant="white" height={38} />
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
                Through our Shariah-governed endowment foundation, we have helped empower over 170,000+ people across Nigeria through perpetual real estate and solar water infrastructure.
              </p>

              {/* Avatar Stack + 100k+ */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
                  ].map((src, i) => (
                    <div key={i} className="relative w-8 h-8 rounded-full ring-2 ring-brand-navy overflow-hidden bg-slate-200">
                      <Image src={src} alt="Supporter" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold font-cairo text-white">100k+ Beneficiaries</span>
              </div>
            </div>

            {/* Col 2: Donate */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="font-cairo font-bold text-xs uppercase tracking-wider text-brand-sky">
                Donate
              </h4>
              <ul className="space-y-2.5 text-xs text-white/75 font-cairo">
                <li><Link href="/endowments?cat=water" className="hover:text-white transition-all">Solar Water Grids</Link></li>
                <li><Link href="/endowments?cat=healthcare" className="hover:text-white transition-all">Dialysis & Healthcare</Link></li>
                <li><Link href="/endowments?cat=education" className="hover:text-white transition-all">Education Support Drive</Link></li>
                <li><Link href="/endowments?cat=real-estate" className="hover:text-white transition-all">Commercial Real Estate</Link></li>
              </ul>
            </div>

            {/* Col 3: Help & Governance */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="font-cairo font-bold text-xs uppercase tracking-wider text-brand-sky">
                Help
              </h4>
              <ul className="space-y-2.5 text-xs text-white/75 font-cairo">
                <li><Link href="/contact" className="hover:text-white transition-all">FAQ</Link></li>
                <li><Link href="/transparency" className="hover:text-white transition-all">Privacy & Fiduciary Policy</Link></li>
                <li><Link href="/transparency" className="hover:text-white transition-all">Shariah Fatwa Terms</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-all">Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 4: Sections */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-cairo font-bold text-xs uppercase tracking-wider text-brand-sky">
                Sections
              </h4>
              <ul className="space-y-2.5 text-xs text-white/75 font-cairo">
                <li><Link href="/about" className="hover:text-white transition-all">About Us</Link></li>
                <li><Link href="/endowments" className="hover:text-white transition-all">Endowments (Causes)</Link></li>
                <li><Link href="/about#shariah" className="hover:text-white transition-all">Shariah Supervisory Board</Link></li>
                <li><Link href="/transparency" className="hover:text-white transition-all">Why Us & Audits</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media Glass Pill Buttons with Sky Blue Hover Indicator */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
            {[
              { platform: 'X / Twitter', url: 'https://twitter.com' },
              { platform: 'Instagram', url: 'https://instagram.com' },
              { platform: 'YouTube', url: 'https://youtube.com' },
            ].map((soc) => (
              <a
                key={soc.platform}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-sky" />
                  <span className="text-xs font-cairo font-medium text-white/80 group-hover:text-white">
                    {soc.platform}
                  </span>
                </div>
                {/* Arrow disc with contextual right-out / left-in motion */}
                <div className="w-6 h-6 rounded-full bg-white/10 text-brand-sky flex items-center justify-center overflow-hidden relative group-hover:bg-brand-sky group-hover:text-brand-navy transition-all">
                  <span className="inline-flex transition-transform duration-300 group-hover:translate-x-4">
                    <ArrowRight size={12} />
                  </span>
                  <span className="absolute inline-flex -translate-x-4 transition-transform duration-300 group-hover:translate-x-0">
                    <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Copyright */}
          <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-cairo">
            <p>@{SITE_CONFIG.name} {new Date().getFullYear()} · All Rights Reserved</p>
            <div className="flex items-center gap-4">
              <span className="text-brand-gold">CAC Registration: {SITE_CONFIG.registrationNo}</span>
              <span>·</span>
              <span className="text-white/80">لجنة الأوقاف والصدقات</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
