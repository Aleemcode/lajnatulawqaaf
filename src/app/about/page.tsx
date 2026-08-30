'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { BrandWatermark } from '@/components/common/BrandWatermark';
import { SHARIAH_SCHOLARS, TRUSTEES, SITE_CONFIG } from '@/data/siteData';
import { CheckCircle, ShieldCheck, ScrollText, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'trustees' | 'shariah'>('trustees');

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* SECTION A — Hero with Impact Stats */}
      <section className="relative overflow-hidden py-20">
        <OrganicBlobs variant="light" />
        <BrandWatermark position="top-right" opacity={0.03} size="xl" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-royal/5 border border-brand-royal/15 text-brand-royal text-xs font-cairo font-bold mb-6">
            <IslamicEmblem size="sm" glow={false} />
            <span>Fiduciary Stewardship & Islamic Governance</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold font-cairo text-brand-navy max-w-4xl mx-auto leading-tight">
            Reviving the Prophetic Institution of Perpetual Waqf
          </h1>
          
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Lajnatul Awqaaf Wassadaqaat is dedicated to institutionalizing Islamic endowments in Africa—transforming voluntary philanthropy into permanent, self-sustaining community assets governed by strict Shariah and fiduciary standards.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12 mb-16">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold font-cairo text-brand-royal">₦4.8B+</div>
              <div className="text-sm text-slate-500 font-medium mt-1">Total Waqf Assets</div>
            </div>
            <div className="hidden sm:block w-px bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold font-cairo text-brand-sky">63+</div>
              <div className="text-sm text-slate-500 font-medium mt-1">Active Endowments</div>
            </div>
            <div className="hidden sm:block w-px bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold font-cairo text-brand-gold">320,000+</div>
              <div className="text-sm text-slate-500 font-medium mt-1">Lives Impacted</div>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1609234656388-0ff363383899?w=1200&q=80" 
              alt="Community gathering" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION B — Mission */}
      <section className="relative overflow-hidden py-24">
        <OrganicBlobs variant="light" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold font-cairo text-brand-royal uppercase tracking-widest mb-2 block">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-cairo text-brand-navy mb-8">
                Our mission is to institutionalize Waqf in Africa
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-royal text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We mobilize, manage, and distribute Islamic endowments with world-class financial integrity
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-royal text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Every project is governed by rigorous Shariah oversight and independent audit
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-royal text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We transform voluntary philanthropy into permanent, self-sustaining community assets
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" 
                  alt="Community hands" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C — Vision */}
      <section className="relative overflow-hidden py-24 bg-brand-mist/30 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" 
                  alt="Islamic architecture" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-10">
              <span className="text-xs font-bold font-cairo text-brand-sky uppercase tracking-widest mb-2 block">Our Vision</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-cairo text-brand-navy mb-8">
                A future where no endowment is left behind
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                To be the premier Shariah-governed Islamic endowment institution, creating multi-generational prosperity and dignity through perpetual Waqf assets guided by our core pillars:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-sky" />
                  <span className="font-semibold text-brand-navy font-cairo text-lg">Amanah: Fiduciary Trust over assets</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-sky" />
                  <span className="font-semibold text-brand-navy font-cairo text-lg">Ihsan: Excellence in execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-sky" />
                  <span className="font-semibold text-brand-navy font-cairo text-lg">Istidama: 100% Capital Preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-sky" />
                  <span className="font-semibold text-brand-navy font-cairo text-lg">Shaffafiyyah: Radical Transparency</span>
                </div>
              </div>
              <Link href="/transparency" className="glass-cta px-6 py-3 rounded-full text-white font-cairo font-bold text-sm inline-flex items-center gap-2">
                Read Our Charter <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D — Impact Narrative */}
      <section className="relative overflow-hidden py-24">
        <BrandWatermark position="center-right" opacity={0.03} size="xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold font-cairo text-brand-gold uppercase tracking-widest mb-2 block">Our Approach</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-cairo text-brand-navy">
              How we create real impact, every day
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold font-cairo text-brand-navy mb-2">Sustainable Communities</h3>
                  <p className="text-slate-600 leading-relaxed">
                    By investing in long-term infrastructure, we build self-reliant communities. Our focus is on enduring projects rather than temporary relief, ensuring that your Waqf continues to benefit people for generations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-cairo text-brand-navy mb-2">Ethical Investments</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every asset we manage is invested in Shariah-compliant enterprises that yield ethical returns. These profits are then channeled back into vital social services, creating a perpetual cycle of good.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-cairo text-brand-navy mb-2">Data-Driven Philanthropy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We utilize advanced tracking and transparent reporting mechanisms so that every donor can see the exact impact of their endowment, bringing absolute clarity and trust to the philanthropic process.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80" 
                  alt="Person being served" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E — Leadership (Tabbed Bento Grid) */}
      <section className="relative overflow-hidden py-24 bg-slate-50">
        <OrganicBlobs variant="light" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold font-cairo text-brand-royal uppercase tracking-widest mb-2 block">Our Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-cairo text-brand-navy">
              Together, we steward with trust
            </h2>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-slate-200/50 p-1 rounded-full">
              <button
                onClick={() => setActiveTab('trustees')}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-cairo font-bold transition-all",
                  activeTab === 'trustees' ? "bg-white shadow-sm text-brand-navy" : "text-slate-500 hover:text-brand-navy"
                )}
              >
                Board of Trustees
              </button>
              <button
                onClick={() => setActiveTab('shariah')}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-cairo font-bold transition-all",
                  activeTab === 'shariah' ? "bg-white shadow-sm text-brand-navy" : "text-slate-500 hover:text-brand-navy"
                )}
              >
                Shariah Supervisory Board
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {(activeTab === 'trustees' ? TRUSTEES : SHARIAH_SCHOLARS).map((person, idx) => {
              const isLarge = idx === 0;
              const colSpan = isLarge ? 'lg:col-span-8 lg:row-span-2' : 'lg:col-span-4';
              
              return (
                <div key={idx} className={cn("bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col", colSpan)}>
                  <div className={cn("relative w-full rounded-2xl overflow-hidden bg-slate-200 mb-5", isLarge ? "h-80" : "h-48")}>
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs font-cairo font-bold text-brand-sky mb-1">
                      {'roleArabic' in person ? person.roleArabic : person.titleArabic}
                    </div>
                    <h3 className={cn("font-cairo font-bold text-brand-navy", isLarge ? "text-3xl mb-2" : "text-xl mb-1")}>
                      {person.name}
                    </h3>
                    <div className="text-sm text-brand-royal font-medium mb-4">
                      {person.role}
                    </div>
                    <p className={cn("text-slate-600 leading-relaxed", isLarge ? "text-base" : "text-sm")}>
                      {person.bio}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    {'credentials' in person ? (
                      <div className="flex flex-wrap gap-2">
                        {person.credentials.map((cred, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-[11px] font-cairo font-semibold border border-slate-100">
                            {cred}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-sm text-brand-navy font-cairo font-semibold flex items-center gap-2">
                        <ShieldCheck size={16} className="text-brand-gold" />
                        <span>{person.specialization}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION F — Testimonial/Quote */}
      <section className="relative overflow-hidden py-24 bg-brand-sky-soft">
        <OrganicBlobs variant="light" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-block px-3 py-1 rounded-full bg-white/50 text-brand-navy text-xs font-bold font-cairo mb-4 border border-white/60">
                ✻ Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-cairo text-brand-navy mb-6">
                Hear from those who've seen the impact.
              </h2>
              <Link href="/pledge" className="glass-cta px-6 py-3 rounded-full text-white font-cairo font-bold text-sm inline-flex items-center gap-2">
                Pledge Waqf <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-white">
                <div className="text-6xl text-brand-royal font-serif opacity-30 leading-none h-10">"</div>
                <p className="text-2xl sm:text-3xl text-brand-navy font-cairo italic font-medium leading-relaxed mb-6">
                  They work with trust and transparency. The endowment reaches the right communities, without delays.
                </p>
                <div className="text-brand-royal font-bold font-cairo">— Local Community Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G — CAC Registration Banner */}
      <section className="relative overflow-hidden py-16">
        <OrganicBlobs variant="light" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="p-8 rounded-3xl bg-brand-mist border border-brand-royal/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-left">
              <div className="font-cairo font-bold text-base text-brand-navy flex items-center gap-2">
                <ScrollText size={20} className="text-brand-royal" />
                <span>Corporate Affairs Commission (CAC) Registered Trust</span>
              </div>
              <p className="text-slate-600 text-xs max-w-xl">
                Registration Number: <strong>{SITE_CONFIG.registrationNo}</strong>. Operating under the Federal Republic of Nigeria Companies and Allied Matters Act (CAMA) and recognized by the Supreme Council for Islamic Affairs.
              </p>
            </div>
            <div className="flex items-center gap-2 font-cairo font-bold text-xs text-brand-royal whitespace-nowrap bg-white px-4 py-2 rounded-xl border border-brand-royal/20 shadow-sm">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Fully Certified & Compliant</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
