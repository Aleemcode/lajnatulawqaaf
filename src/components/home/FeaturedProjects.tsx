'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/siteData';
import { MapPin, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PledgeModal } from '@/components/common/PledgeModal';

export const FeaturedProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [pledgeOpen, setPledgeOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Endowments' },
    { id: 'real-estate', label: 'Commercial Real Estate' },
    { id: 'water', label: 'Solar Water Grids' },
    { id: 'education', label: 'Education & Da’wah' },
    { id: 'healthcare', label: 'Healthcare & Dialysis' },
  ];

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <span className="text-xs font-bold font-cairo text-brand-sky uppercase tracking-widest">
          Active Case Studies
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-brand-navy">
          Perpetual Assets Yielding Continuous Good
        </h2>
        <p className="text-slate-600 text-sm">
          Discover our real estate, infrastructure, and institutional endowments generating sustainable social dividends across Nigeria.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-cairo font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-brand-royal text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl overflow-hidden border border-brand-royal/10 shadow-clay flex flex-col justify-between card-hover-lift group"
          >
            <div>
              {/* Media Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-brand-sky text-brand-navy text-[10px] font-bold font-cairo uppercase shadow">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-flex items-center gap-1 text-[11px] text-white/80">
                    <MapPin size={12} className="text-brand-gold" /> {project.location}
                  </span>
                  <h3 className="font-cairo font-bold text-base leading-snug truncate mt-0.5">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 space-y-4">
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Progress bar if campaign active */}
                {project.progressPercent !== undefined && (
                  <div className="space-y-1.5 p-3 rounded-2xl bg-brand-mist border border-slate-200/60">
                    <div className="flex justify-between text-xs font-cairo font-bold">
                      <span className="text-slate-500">Fundraising Share Progress</span>
                      <span className="text-brand-royal">{project.progressPercent}% Funded</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-sky to-brand-royal rounded-full"
                        style={{ width: `${project.progressPercent}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>Raised: {project.raisedFund}</span>
                      <span>Target: {project.targetFund}</span>
                    </div>
                  </div>
                )}

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-cairo">Endowment Valuation</span>
                    <span className="font-bold text-brand-navy font-mono">{project.valuation}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-cairo">Annual Social Yield</span>
                    <span className="font-bold text-emerald-600 font-cairo text-[11px] truncate block">
                      {project.annualYield}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Action Footer */}
            <div className="p-5 pt-0 flex items-center justify-between gap-2">
              <button
                onClick={() => setPledgeOpen(true)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-brand-royal hover:bg-brand-royal-light text-white font-cairo font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <HeartHandshake size={14} className="text-brand-sky" />
                <span>Pledge Share</span>
              </button>
              <Link
                href={`/endowments#${project.id}`}
                className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-brand-royal transition-all"
                title="View Full Case Study"
              >
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <PledgeModal isOpen={pledgeOpen} onClose={() => setPledgeOpen(false)} />
    </section>
  );
};
