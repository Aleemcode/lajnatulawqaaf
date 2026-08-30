'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS, Project, SITE_CONFIG } from '@/data/siteData';
import { MapPin, ShieldCheck, HeartHandshake, CheckCircle2, Building, Droplets, GraduationCap, HeartPulse, Search } from 'lucide-react';
import { PledgeModal } from '@/components/common/PledgeModal';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { BrandWatermark } from '@/components/common/BrandWatermark';

export default function EndowmentsPage() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pledgeOpen, setPledgeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'real-estate', label: 'Commercial Real Estate' },
    { id: 'water', label: 'Water & Solar Wells' },
    { id: 'education', label: 'Education & Da’wah' },
    { id: 'healthcare', label: 'Healthcare & Dialysis' },
  ];

  const filtered = PROJECTS.filter((p) => {
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* Header */}
      <section className="relative overflow-hidden max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-center py-8 rounded-3xl">
        <OrganicBlobs />
        <BrandWatermark position='top-right' opacity={0.03} size='lg' />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-sky-soft text-brand-royal text-xs font-cairo font-bold mb-4">
            <Building size={14} />
            <span>Active Endowments & Case Studies</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-cairo text-brand-navy max-w-3xl mx-auto leading-tight">
            Perpetual Assets Yielding Continuous Blessings
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Every project below is an established Islamic Waqf (*Waqf Sahih*). The capital corpus is held inviolable, producing perpetual yields dedicated to community upliftment.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by project name, state, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-full bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal shadow-sm"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-cairo font-semibold whitespace-nowrap transition-all ${
                  selectedCat === cat.id
                    ? 'bg-brand-royal text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-brand-royal/10 shadow-clay flex flex-col justify-between scroll-mt-28 group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-brand-sky text-brand-navy text-xs font-bold font-cairo uppercase shadow">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-cairo text-brand-sky font-semibold">
                      {project.titleArabic}
                    </div>
                    <h2 className="text-xl font-bold font-cairo leading-snug">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
                      <MapPin size={14} className="text-brand-gold" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-5">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Shariah Model Badge */}
                  <div className="p-3.5 rounded-2xl bg-brand-mist border border-brand-royal/10 flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-brand-royal flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold font-cairo text-brand-navy block">
                        Perpetuity & Governance Structure
                      </span>
                      <span className="text-[11px] text-slate-500 leading-snug block">
                        {project.perpetuityModel}
                      </span>
                    </div>
                  </div>

                  {/* Financial & Social Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-cairo">Endowment Value</span>
                      <span className="font-bold text-brand-navy font-mono text-sm">{project.valuation}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                      <span className="text-[10px] text-emerald-600 block font-cairo">Annual Net Yield</span>
                      <span className="font-bold text-emerald-700 font-cairo text-xs truncate block">{project.annualYield}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                      <span className="text-[10px] text-brand-royal block font-cairo">Direct Beneficiaries</span>
                      <span className="font-semibold text-brand-navy text-[11px] block truncate">{project.beneficiaries}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setPledgeOpen(true);
                  }}
                  className="flex-1 py-3 px-5 rounded-2xl bg-brand-royal hover:bg-brand-royal-light text-white font-cairo font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <HeartHandshake size={16} className="text-brand-sky" />
                  <span>Pledge / Sponsor a Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </div>
  );
}
