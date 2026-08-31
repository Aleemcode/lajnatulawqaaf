'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlassButton } from '@/components/common/GlassButton';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { BrandWatermark } from '@/components/common/BrandWatermark';
import { PledgeModal } from '@/components/common/PledgeModal';
import { PROJECTS, Project, WAQF_PILLARS } from '@/data/siteData';
import { 
  MapPin, 
  Building, 
  Droplets, 
  GraduationCap, 
  HeartPulse, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

const CATEGORIES = [
  'All Portfolios',
  'Commercial Real Estate',
  'Water & Solar Wells',
  "Education & Da'wah",
  'Healthcare & Dialysis'
];

export default function EndowmentsPage() {
  const [activeCategory, setActiveCategory] = useState('All Portfolios');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on category and search query
  const filteredProjects = PROJECTS.filter((project: Project) => {
    const matchesCategory = activeCategory === 'All Portfolios' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProject = filteredProjects.length > 0 ? filteredProjects[0] : null;
  const remainingProjects = filteredProjects.slice(1);

  const handlePledge = (project: Project) => {
    setSelectedProject(project);
    setIsPledgeModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-brand-mist font-inter text-brand-navy overflow-hidden pt-24 pb-24">
      <OrganicBlobs />
      <BrandWatermark />
      
      {/* Container with grid lines */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section 1: Header & Filter Matrix */}
        <section className="border-b border-brand-royal/10 pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
            
            {/* Left col */}
            <div className="lg:col-span-4 lg:border-r border-brand-royal/10 lg:pr-8 flex flex-col justify-end space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-brand-royal/10 text-brand-royal text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
                  Active Endowments
                </span>
                <h3 className="font-cairo text-3xl font-bold text-brand-navy">
                  ₦4.8B+
                  <span className="block text-sm font-inter text-brand-navy/60 font-normal mt-1">Total AUM</span>
                </h3>
              </div>
              
              <div className="flex flex-col space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-4 py-3 text-sm font-medium transition-all ${
                      activeCategory === cat 
                        ? 'bg-brand-royal text-white rounded-md shadow-sm' 
                        : 'text-brand-navy/70 hover:bg-white/50 hover:text-brand-royal rounded-md'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Right col */}
            <div className="lg:col-span-8 lg:pl-12 flex flex-col justify-end">
              <h1 className="font-cairo text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-brand-navy mb-8">
                Perpetual assets generating <span className="text-brand-royal">sustainable social yields</span> every single day.
              </h1>
              
              <div className="relative max-w-xl group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-brand-navy/40 group-focus-within:text-brand-royal transition-colors" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search endowments by name, location, or focus..."
                  className="bg-white/40 backdrop-blur-md border border-brand-royal/20 text-brand-navy text-sm rounded-xl focus:ring-brand-royal focus:border-brand-royal block w-full pl-11 p-4 shadow-sm transition-all focus:bg-white"
                />
              </div>
            </div>
            
          </div>
        </section>

        {/* Section 2: Endowments Showcase Mosaic */}
        <section className="border-b border-brand-royal/10 pb-16 mb-16">
          
          {/* Featured Spotlight Card */}
          {featuredProject && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 bg-white/60 backdrop-blur-sm border border-brand-royal/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="lg:col-span-7 relative h-64 lg:h-auto min-h-[400px]">
                {featuredProject.imageUrl && (
                  <Image
                    src={featuredProject.imageUrl}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 flex space-x-2">
                  <span className="bg-white/90 backdrop-blur text-brand-royal text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                    ₦1.2B Landmark Waqf
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center text-sm font-medium text-white/80 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {featuredProject.location || 'Lagos, Nigeria'}
                  </div>
                  <h2 className="font-cairo text-3xl font-bold">{featuredProject.title}</h2>
                </div>
              </div>
              <div className="lg:col-span-5 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4 text-xs font-bold uppercase tracking-wider text-brand-sky">
                  <Building className="w-4 h-4" />
                  <span>Commercial Waqf</span>
                </div>
                <p className="text-brand-navy/70 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-brand-royal/5 p-4 rounded-xl border border-brand-royal/10">
                    <p className="text-xs text-brand-navy/60 uppercase tracking-wider font-semibold mb-1">Annual Yield</p>
                    <p className="font-cairo font-bold text-xl text-brand-royal">12-15%</p>
                  </div>
                  <div className="bg-brand-royal/5 p-4 rounded-xl border border-brand-royal/10">
                    <p className="text-xs text-brand-navy/60 uppercase tracking-wider font-semibold mb-1">Beneficiaries</p>
                    <p className="font-cairo font-bold text-xl text-brand-royal">15,000+</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-brand-royal/10">
                  <GlassButton onClick={() => handlePledge(featuredProject)} className="w-full justify-center">
                    Pledge a Share
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </GlassButton>
                </div>
              </div>
            </div>
          )}

          {/* Remaining Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remainingProjects.map((project) => (
              <div key={project.id} className="group bg-white/40 backdrop-blur-sm border border-brand-royal/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:bg-white/60 transition-all flex flex-col">
                <div className="relative h-56 w-full">
                  {project.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-royal text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                    Perpetual Waqf
                  </div>
                  <div className="absolute bottom-4 left-4 bg-brand-navy/80 backdrop-blur text-white text-xs px-2.5 py-1 rounded-md flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-brand-amber" />
                    {project.location || 'Multiple Locations'}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-cairo text-xl font-bold text-brand-navy mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-brand-navy/60 text-sm mb-6 line-clamp-2">{project.description}</p>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-brand-navy/50">Target / Value: <span className="text-brand-navy font-bold">{project.targetFund || project.valuation}</span></span>
                      <span className="text-brand-royal font-bold">{project.annualYield}</span>
                    </div>
                    
                    <div className="w-full bg-brand-royal/10 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-brand-royal h-full rounded-full transition-all duration-1000" 
                        style={{ width: `${project.progressPercent || 80}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-brand-royal/5">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-mist flex items-center justify-center">
                            <span className="text-[10px] text-brand-royal font-bold">+{i+1}</span>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => handlePledge(project)}
                        className="w-10 h-10 rounded-full bg-brand-royal text-white flex items-center justify-center shadow-md hover:bg-brand-navy hover:scale-105 transition-all"
                        aria-label="Pledge to project"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-16 text-center bg-white/40 border border-brand-royal/10 rounded-2xl border-dashed">
                <Search className="w-12 h-12 text-brand-navy/20 mx-auto mb-4" />
                <h3 className="text-lg font-cairo font-bold text-brand-navy mb-2">No endowments found</h3>
                <p className="text-brand-navy/60 text-sm">Try adjusting your filters or search query.</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Custom Named Family Waqf / Asset Dedication */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-royal/5 border border-brand-royal/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-royal/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-brand-royal/10 text-brand-royal text-xs font-bold uppercase tracking-wider rounded-sm mb-6 w-max">
                Asset Dedication
              </span>
              <h2 className="font-cairo text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
                Establish a Named Family Waqf <span className="text-brand-royal italic font-serif">(Waqf Dhurri)</span>
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-8 text-lg">
                Secure your family's legacy while generating perpetual rewards. We manage real estate and corporate assets on behalf of families, ensuring professional governance and sustainable distribution of yields to your chosen beneficiaries.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-royal mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-brand-navy/80"><strong className="text-brand-navy block mb-1">Asset Transfer & Valuation</strong> Complete legal transfer with professional market valuation.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-royal mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-brand-navy/80"><strong className="text-brand-navy block mb-1">Governance Structuring</strong> Board of Trustees setup with clear succession planning.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-royal mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-brand-navy/80"><strong className="text-brand-navy block mb-1">Yield Distribution Mandate</strong> Custom guidelines for distributing profits to family & charity.</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 bg-white border border-brand-royal/10 rounded-2xl p-8 shadow-sm flex flex-col">
              <h3 className="font-cairo text-2xl font-bold text-brand-navy mb-6">Dedicate Commercial Property</h3>
              <p className="text-sm text-brand-navy/60 mb-8">
                If you own income-generating property (residential complexes, office spaces, warehouses) or agricultural land, you can convert it into a Waqf.
              </p>
              
              <div className="space-y-6 mb-8 flex-grow">
                <div className="bg-brand-mist p-4 rounded-xl">
                  <p className="text-xs font-bold text-brand-royal uppercase tracking-wider mb-2">Minimum Requirements</p>
                  <ul className="text-sm text-brand-navy/70 space-y-2 list-disc list-inside">
                    <li>Clear C of O (Certificate of Occupancy)</li>
                    <li>Unencumbered asset (no mortgages/liens)</li>
                    <li>Minimum valuation of ₦50M</li>
                  </ul>
                </div>
              </div>
              
              <GlassButton className="w-full justify-center">
                <Building className="w-4 h-4 mr-2" />
                Dedicate Commercial Property
              </GlassButton>
            </div>
          </div>
        </section>

      </div>
      
      {/* Pledge Modal */}
      {selectedProject && (
        <PledgeModal
          isOpen={isPledgeModalOpen}
          onClose={() => setIsPledgeModalOpen(false)}
          project={selectedProject}
        />
      )}
    </main>
  );
}
