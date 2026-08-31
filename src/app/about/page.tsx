'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassButton } from '@/components/common/GlassButton';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { BrandWatermark } from '@/components/common/BrandWatermark';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { PledgeModal } from '@/components/common/PledgeModal';
import { TRUSTEES, SHARIAH_SCHOLARS, SITE_CONFIG } from '@/data/siteData';
import { ArrowRight, Play, CheckCircle2, Shield, ShieldCheck, Eye, Scale, Users, FileText, ChevronRight, BookOpen } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PILLARS = [
  {
    title: 'Amanah',
    subtitle: 'Fiduciary Trust',
    description: 'We hold and manage Waqf assets as a sacred trust, strictly adhering to the highest standards of Islamic fiduciary duty.',
    icon: Shield,
    color: 'bg-brand-royal',
    textColor: 'text-white',
    iconColor: 'text-brand-sky',
    accent: 'bg-brand-sky'
  },
  {
    title: 'Ihsan',
    subtitle: 'Excellence in Action',
    description: 'Maximizing the social and spiritual impact of every endowment through rigorous management and strategic allocation.',
    icon: Users,
    color: 'bg-brand-mist',
    textColor: 'text-brand-navy',
    iconColor: 'text-brand-royal',
    accent: 'bg-brand-royal'
  },
  {
    title: 'Istidama',
    subtitle: 'Perpetual Sustainability',
    description: 'Ensuring long-term preservation and growth of principal assets to generate continuous impact for generations.',
    icon: Scale,
    color: 'bg-brand-mist',
    textColor: 'text-brand-navy',
    iconColor: 'text-brand-royal',
    accent: 'bg-brand-royal'
  },
  {
    title: 'Shaffafiyyah',
    subtitle: 'Absolute Transparency',
    description: 'Radical openness in our operations, financial reporting, and impact measurement for all stakeholders.',
    icon: Eye,
    color: 'bg-brand-navy',
    textColor: 'text-white',
    iconColor: 'text-brand-gold',
    accent: 'bg-brand-gold'
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'trustees' | 'shariah'>('trustees');
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);

  const activeData = activeTab === 'trustees' ? TRUSTEES : SHARIAH_SCHOLARS;

  return (
    <div className="relative min-h-screen bg-white text-brand-navy selection:bg-brand-gold/30 selection:text-brand-navy">
      <OrganicBlobs />
      <BrandWatermark />

      <main className="relative z-10 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="sr-only">About Lajanah</h1>
          
          {/* Section 1: Hero Grid */}
          <section className="border-b border-brand-royal/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 pb-12 lg:pb-16 relative">
            <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] pointer-events-none" />
            
            {/* Left Col */}
            <div className="lg:col-span-4 lg:border-r border-brand-royal/10 lg:pr-12 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 bg-brand-royal/5 border border-brand-royal/10 rounded-full px-4 py-1.5 w-fit mb-8">
                <span className="text-xs font-semibold tracking-wider text-brand-royal uppercase">About & Governance</span>
              </div>
              
              <div className="mb-10">
                <div className="flex -space-x-3 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-mist flex items-center justify-center overflow-hidden z-10" style={{ zIndex: 10 - i }}>
                      <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Scholar" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-royal flex items-center justify-center text-xs font-bold text-white z-0">
                    +95
                  </div>
                </div>
                <p className="text-sm font-medium text-brand-navy">100+ Scholars & Trustees</p>
                <p className="text-xs text-slate-500 mt-1">Guiding our mission with wisdom</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold font-cairo text-brand-navy mb-1">₦4.8B+</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">Assets Under Management</p>
                </div>
                <div className="h-px bg-brand-royal/10 w-full" />
                <div>
                  <h3 className="text-3xl font-bold font-cairo text-brand-navy mb-1">63+</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">Active Endowments</p>
                </div>
                <div className="h-px bg-brand-royal/10 w-full" />
                <div>
                  <h3 className="text-3xl font-bold font-cairo text-brand-navy mb-1">320,000+</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide">Lives Impacted</p>
                </div>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-8 lg:pl-12 flex flex-col justify-between">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cairo leading-tight tracking-tight mb-8">
                Reviving the prophetic institution of perpetual <span className="text-brand-royal relative inline-block">Waqf
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gold rounded-full"></span></span> across Africa.
              </h2>
              
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 group shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Community impact" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/20 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                    <p className="text-white text-sm font-medium">Lajanah Documentary</p>
                    <p className="text-white/80 text-xs">Watch our journey (4:20)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-brand-royal/10">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-4 text-center lg:text-left">Trusted Partners & Regulators</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="font-bold text-xl text-brand-navy">Jaiz Bank</span>
                  <span className="font-bold text-xl text-brand-navy">Lotus Bank</span>
                  <span className="font-bold text-xl text-brand-navy">AAOIFI</span>
                  <span className="font-bold text-xl text-brand-navy">SCIA</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: The 4 Pillars of Integrity */}
          <section className="py-16 border-b border-brand-royal/10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <IslamicEmblem className="w-12 h-12 mx-auto text-brand-gold opacity-50 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-4">The Four Pillars of Integrity</h2>
              <p className="text-slate-600">The foundational principles that govern every decision, investment, and charitable allocation at Lajanah.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className={cn("p-8 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-sm", pillar.color, pillar.textColor)}>
                    <div className="absolute -right-12 -top-12 w-40 h-40 opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                       <Icon className="w-full h-full" />
                    </div>
                    
                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", "bg-white/10 backdrop-blur-sm")}>
                        <Icon className={cn("w-7 h-7", pillar.iconColor)} />
                      </div>
                      <span className="text-6xl font-bold font-cairo opacity-10">0{idx + 1}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold font-cairo mb-1 flex items-center">
                        {pillar.title}
                        <div className={cn("w-2 h-2 rounded-full ml-3", pillar.accent)} />
                      </h3>
                      <p className={cn("text-sm uppercase tracking-wider mb-4 opacity-80", pillar.textColor === 'text-white' ? 'text-white/70' : 'text-brand-royal')}>
                        {pillar.subtitle}
                      </p>
                      <p className={cn("text-base leading-relaxed opacity-90", pillar.textColor === 'text-white' ? 'text-white/90' : 'text-slate-700')}>
                        {pillar.description}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex items-center text-sm font-medium cursor-pointer group/link relative z-10 w-fit">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Section 3: Leadership Matrix */}
          <section className="py-16 border-b border-brand-royal/10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-4">Leadership & Governance</h2>
                <p className="text-slate-600">Guided by distinguished Islamic scholars and seasoned financial professionals ensuring strict compliance and strategic growth.</p>
              </div>
              
              <div className="inline-flex bg-brand-mist rounded-xl p-1 border border-brand-royal/10">
                <button 
                  onClick={() => setActiveTab('trustees')}
                  className={cn("px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200", 
                    activeTab === 'trustees' ? "bg-white text-brand-navy shadow-sm" : "text-slate-500 hover:text-brand-navy"
                  )}
                >
                  Board of Trustees
                </button>
                <button 
                  onClick={() => setActiveTab('shariah')}
                  className={cn("px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200", 
                    activeTab === 'shariah' ? "bg-white text-brand-navy shadow-sm" : "text-slate-500 hover:text-brand-navy"
                  )}
                >
                  Shariah Board
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
              {activeData.map((member, idx) => {
                const isHero = idx === 0;
                return (
                  <div 
                    key={member.name}
                    className={cn(
                      "group relative bg-white border border-brand-royal/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col",
                      isHero ? "lg:col-span-8 lg:row-span-2 md:flex-row" : "lg:col-span-4"
                    )}
                  >
                    <div className={cn("relative overflow-hidden bg-brand-mist flex-shrink-0", isHero ? "md:w-2/5 aspect-[3/4] md:aspect-auto" : "aspect-[4/3]")}>
                       <Image 
                        src={member.imageUrl || `https://i.pravatar.cc/600?u=${member.name}`}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-60 md:opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    </div>
                    
                    <div className={cn("p-6 md:p-8 flex flex-col flex-grow justify-center relative", isHero ? "md:w-3/5" : "")}>
                      {isHero && (
                        <div className="absolute top-8 right-8 text-brand-gold opacity-20">
                          <BookOpen className="w-16 h-16" />
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <p className="text-brand-sky text-sm font-bold tracking-wide uppercase mb-2">{member.role}</p>
                        <h3 className={cn("font-bold font-cairo text-brand-navy leading-tight", isHero ? "text-3xl md:text-4xl mb-2" : "text-2xl mb-1")}>
                          {member.name}
                        </h3>
                        {'roleArabic' in member && member.roleArabic ? (
                          <p className="text-sm font-cairo font-semibold text-brand-sky mb-2">{member.roleArabic}</p>
                        ) : 'titleArabic' in member && member.titleArabic ? (
                          <p className="text-sm font-cairo font-semibold text-brand-sky mb-2">{member.titleArabic}</p>
                        ) : null}
                      </div>
                      
                      {member.bio && (
                        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 text-xs sm:text-sm">
                          {member.bio}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                        {'credentials' in member && member.credentials ? (
                          member.credentials.map((cred) => (
                            <span key={cred} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-brand-mist text-brand-navy border border-brand-royal/10">
                              {cred}
                            </span>
                          ))
                        ) : 'specialization' in member && member.specialization ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-brand-mist text-brand-navy border border-brand-royal/10">
                            <ShieldCheck size={14} className="text-brand-gold" />
                            {member.specialization}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Section 4: CAC Certification & Fiduciary Charter Banner */}
          <section className="py-16">
            <div className="bg-brand-navy rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-brand-royal mix-blend-multiply opacity-50" />
               <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
               
               <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl" />
               <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl" />

               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-xl text-center md:text-left">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 w-fit mb-6">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      <span className="text-xs font-semibold tracking-wider text-white uppercase">Fully Registered & Compliant</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold font-cairo text-white mb-4">
                      Fiduciary Excellence Guaranteed
                    </h2>
                    
                    <p className="text-white/80 text-lg mb-8 leading-relaxed">
                      Lajanah is fully registered with the Corporate Affairs Commission (CAC) of Nigeria. Our operations are governed by strict ethical guidelines, quarterly Shariah audits, and annual financial reporting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <GlassButton href="/transparency" variant="sky" size="md" indicator="arrow">
                        Explore Full Transparency
                      </GlassButton>
                      <GlassButton href="/transparency" variant="dark" size="md" indicator="arrow">
                        Download Charter
                      </GlassButton>
                    </div>
                  </div>

                  <div className="w-full md:w-auto flex-shrink-0 flex justify-center">
                    <div className="relative w-64 h-64 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl">
                       <Shield className="w-20 h-20 text-brand-gold mb-6" strokeWidth={1.5} />
                       <div className="text-center">
                         <p className="text-white font-bold tracking-widest uppercase text-sm mb-1">CAC Reg No.</p>
                         <p className="text-brand-sky font-mono text-2xl font-bold">{SITE_CONFIG.registrationNo}</p>
                       </div>
                       <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-lg border-4 border-brand-navy">
                         <CheckCircle2 className="w-6 h-6 text-brand-navy" fill="currentColor" />
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </section>

        </div>
      </main>

      <PledgeModal isOpen={isPledgeModalOpen} onClose={() => setIsPledgeModalOpen(false)} />
    </div>
  );
}
