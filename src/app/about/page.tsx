'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { GlassButton } from '@/components/common/GlassButton';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { PledgeModal } from '@/components/common/PledgeModal';
import { TRUSTEES, SHARIAH_SCHOLARS, SITE_CONFIG } from '@/data/siteData';
import { ArrowRight, ArrowLeft, Play, CheckCircle2, Shield, ShieldCheck, Eye, Scale, Users, BookOpen } from 'lucide-react';
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

  // Carousel ref and dragging states
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const activeData = activeTab === 'trustees' ? TRUSTEES : SHARIAH_SCHOLARS;

  // Scroll navigation
  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative min-h-screen bg-brand-mist text-brand-navy selection:bg-brand-gold/30 selection:text-brand-navy">
      <OrganicBlobs />

      <main className="relative z-10 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="sr-only">About Lajanah</h1>
          
          {/* Section 1: Hero Grid */}
          <section className="border-b border-brand-royal/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 pb-12 lg:pb-16 relative">
            <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] pointer-events-none" />
            
            {/* Left Col */}
            <div className="lg:col-span-4 lg:border-r border-brand-royal/10 lg:pr-12 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 bg-brand-royal/5 border border-brand-royal/10 rounded-full px-4 py-1.5 w-fit mb-8 shadow-sm">
                <span className="text-xs font-semibold tracking-wider text-brand-royal uppercase font-cairo">About & Governance</span>
              </div>
              
              <div className="mb-10">
                <div className="flex -space-x-3 mb-4">
                  {[
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
                    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
                  ].map((src, i) => (
                    <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white bg-brand-mist flex items-center justify-center overflow-hidden z-10" style={{ zIndex: 10 - i }}>
                      <Image src={src} alt="Scholar" fill className="object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-royal flex items-center justify-center text-xs font-bold text-white z-0 font-cairo">
                    +95
                  </div>
                </div>
                <p className="text-sm font-medium text-brand-navy font-cairo">100+ Scholars & Trustees</p>
                <p className="text-xs text-slate-500 mt-1">Guiding our mission with wisdom</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold font-cairo text-brand-navy mb-1">₦4.8B+</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-cairo">Assets Under Management</p>
                </div>
                <div className="h-px bg-brand-royal/10 w-full" />
                <div>
                  <h3 className="text-3xl font-bold font-cairo text-brand-navy mb-1">63+</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-cairo">Active Endowments</p>
                </div>
                <div className="h-px bg-brand-royal/10 w-full" />
                <div>
                  <h3 className="text-3xl font-bold font-cairo text-brand-navy mb-1">320,000+</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-cairo">Lives Impacted</p>
                </div>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-8 lg:pl-12 flex flex-col justify-between">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cairo leading-tight tracking-tight mb-8">
                Reviving the prophetic institution of perpetual <span className="text-brand-royal relative inline-block">Waqf
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-gold rounded-full"></span></span> across Africa.
              </h2>
              
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-100 group shadow-clay border border-brand-royal/10">
                <Image 
                  src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Community impact" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/20 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-brand-navy/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-brand-royal/80 hover:scale-110 transition-all duration-300 shadow-2xl">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-brand-navy/70 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl">
                    <p className="text-white text-sm font-medium font-cairo">Lajanah Documentary</p>
                    <p className="text-white/80 text-xs font-sans">Watch our journey (4:20)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-brand-royal/10">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-4 text-center lg:text-left font-cairo">Trusted Partners & Regulators</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="font-bold text-xl text-brand-navy font-cairo">Jaiz Bank</span>
                  <span className="font-bold text-xl text-brand-navy font-cairo">Lotus Bank</span>
                  <span className="font-bold text-xl text-brand-navy font-cairo">AAOIFI</span>
                  <span className="font-bold text-xl text-brand-navy font-cairo">SCIA</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: The 4 Pillars of Integrity */}
          <section className="py-16 border-b border-brand-royal/10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <IslamicEmblem className="w-12 h-12 mx-auto text-brand-gold opacity-50 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-4">The Four Pillars of Integrity</h2>
              <p className="text-slate-600 font-sans text-sm">The foundational principles that govern every decision, investment, and charitable allocation at Lajanah.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className={cn("p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 shadow-clay border", pillar.color, pillar.textColor, pillar.textColor === 'text-white' ? 'border-white/10' : 'border-brand-royal/10')}>
                    <div className="absolute -right-12 -top-12 w-40 h-40 opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                       <Icon className="w-full h-full" />
                    </div>
                    
                    <div className="flex items-start justify-between mb-8 relative z-10">
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm", "bg-white/10 backdrop-blur-sm")}>
                        <Icon className={cn("w-7 h-7", pillar.iconColor)} />
                      </div>
                      <span className="text-6xl font-bold font-cairo opacity-10">0{idx + 1}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold font-cairo mb-1 flex items-center">
                        {pillar.title}
                        <div className={cn("w-2 h-2 rounded-full ml-3", pillar.accent)} />
                      </h3>
                      <p className={cn("text-xs uppercase tracking-wider mb-4 font-cairo font-bold", pillar.textColor === 'text-white' ? 'text-white/70' : 'text-brand-royal')}>
                        {pillar.subtitle}
                      </p>
                      <p className={cn("text-sm leading-relaxed font-sans", pillar.textColor === 'text-white' ? 'text-white/90' : 'text-slate-700')}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 3: Leadership & Governance (Horizontal Drag-to-Scroll Standard Cards) */}
          <section className="py-16 border-b border-brand-royal/10">
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
              <div className="max-w-2xl">
                <div className="badge-pill bg-white border border-slate-200/80 text-brand-royal mb-3 shadow-sm">
                  <span>GOVERNANCE MATRIX</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-cairo text-brand-navy mb-2">
                  Leadership & Governance
                </h2>
                <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                  Guided by distinguished Islamic scholars and seasoned financial professionals ensuring strict AAOIFI compliance and fiduciary growth.
                </p>
              </div>
              
              {/* Tab Switcher + Left/Right Navigation Arrows */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <div className="inline-flex bg-white rounded-2xl p-1.5 border border-slate-200/80 shadow-sm">
                  <button 
                    onClick={() => setActiveTab('trustees')}
                    className={cn(
                      "px-5 py-2 rounded-xl text-xs font-cairo font-bold transition-all duration-200", 
                      activeTab === 'trustees' ? "bg-brand-royal text-white shadow-sm" : "text-slate-500 hover:text-brand-navy"
                    )}
                  >
                    Board of Trustees
                  </button>
                  <button 
                    onClick={() => setActiveTab('shariah')}
                    className={cn(
                      "px-5 py-2 rounded-xl text-xs font-cairo font-bold transition-all duration-200", 
                      activeTab === 'shariah' ? "bg-brand-royal text-white shadow-sm" : "text-slate-500 hover:text-brand-navy"
                    )}
                  >
                    Shariah Board
                  </button>
                </div>

                {/* Arrow Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleScroll('left')}
                    className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200/80 text-brand-navy flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95"
                    aria-label="Previous card"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={() => handleScroll('right')}
                    className="w-10 h-10 rounded-full bg-brand-royal hover:bg-brand-royal-light text-white flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95"
                    aria-label="Next card"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Standardized Card Carousel with Mouse Dragging */}
            <div 
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={cn(
                "flex gap-6 overflow-x-auto pb-6 pt-2 select-none scrollbar-none snap-x snap-mandatory cursor-grab",
                isDragging && "cursor-grabbing"
              )}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {activeData.map((member) => (
                <div 
                  key={member.name}
                  className="w-[310px] sm:w-[350px] flex-shrink-0 snap-start surface-card rounded-3xl p-5 flex flex-col justify-between space-y-4 group"
                >
                  {/* Portrait with uniform aspect ratio */}
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-slate-100">
                    <Image 
                      src={member.imageUrl || `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80`}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  </div>
                  
                  {/* Text Details */}
                  <div className="space-y-2 flex-grow">
                    <p className="text-brand-sky text-[11px] font-bold font-cairo tracking-wide uppercase">
                      {member.role}
                    </p>
                    <h3 className="text-lg font-bold font-cairo text-brand-navy leading-snug">
                      {member.name}
                    </h3>
                    {'roleArabic' in member && member.roleArabic ? (
                      <p className="text-xs font-cairo font-semibold text-brand-gold">
                        {member.roleArabic}
                      </p>
                    ) : 'titleArabic' in member && member.titleArabic ? (
                      <p className="text-xs font-cairo font-semibold text-brand-gold">
                        {member.titleArabic}
                      </p>
                    ) : null}

                    {member.bio && (
                      <p className="text-slate-600 text-xs leading-relaxed font-sans line-clamp-3 pt-1">
                        {member.bio}
                      </p>
                    )}
                  </div>

                  {/* Credentials / Specialization Badge at Bottom */}
                  <div className="pt-3 border-t border-slate-100">
                    {'credentials' in member && member.credentials ? (
                      <div className="flex flex-wrap gap-1.5">
                        {member.credentials.map((cred) => (
                          <span key={cred} className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-medium bg-brand-mist text-brand-navy border border-slate-200/80 font-cairo">
                            {cred}
                          </span>
                        ))}
                      </div>
                    ) : 'specialization' in member && member.specialization ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-medium bg-brand-mist text-brand-navy border border-slate-200/80 font-cairo">
                        <ShieldCheck size={14} className="text-brand-royal" />
                        {member.specialization}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Hint */}
            <div className="flex items-center justify-center gap-2 pt-4 text-xs font-cairo text-slate-400">
              <span>← Drag or use arrows to explore all leaders →</span>
            </div>
          </section>

          {/* Section 4: CAC Certification & Fiduciary Charter Banner */}
          <section className="py-16">
            <div className="surface-dark-card rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl text-white">
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-xl text-center md:text-left">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 w-fit mb-6">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      <span className="text-xs font-semibold tracking-wider text-white uppercase font-cairo">Fully Registered & Compliant</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold font-cairo text-white mb-4">
                      Fiduciary Excellence Guaranteed
                    </h2>
                    
                    <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed font-sans">
                      Lajanah is fully registered with the Corporate Affairs Commission (CAC) of Nigeria. Our operations are governed by strict ethical guidelines, quarterly Shariah audits, and annual financial reporting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <GlassButton href="/transparency" variant="sky" size="md" indicator="arrow">
                        Explore Full Transparency
                      </GlassButton>
                    </div>
                  </div>

                  <div className="w-full md:w-auto flex-shrink-0 flex justify-center">
                    <div className="relative w-64 h-64 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl">
                       <Shield className="w-20 h-20 text-brand-gold mb-6" strokeWidth={1.5} />
                       <div className="text-center">
                         <p className="text-white font-bold tracking-widest uppercase text-xs mb-1 font-cairo">CAC Reg No.</p>
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
