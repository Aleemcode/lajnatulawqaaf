'use client';

import React from 'react';
import { GlassButton } from '@/components/common/GlassButton';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { BrandWatermark } from '@/components/common/BrandWatermark';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { PledgeModal } from '@/components/common/PledgeModal';
import { SITE_CONFIG } from '@/data/siteData';
import { FileText, Shield, Download, Target, PieChart, Activity, Lock, Search } from 'lucide-react';

export default function TransparencyPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-brand-mist overflow-hidden pt-24 font-inter text-brand-navy">
      <OrganicBlobs />
      <BrandWatermark />

      <main className="relative z-10">
        {/* Section 1: Header & Fiduciary Covenant */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-4 p-8 border-r border-brand-royal/10 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-royal/5 border border-brand-royal/20 rounded-full text-sm font-medium text-brand-royal">
                <Shield className="w-4 h-4" />
                <span>Audits & Shariah Assurance</span>
              </div>
              <p className="text-sm text-brand-navy/60 font-medium">
                Certified in accordance with AAOIFI governance and compliance frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-brand-royal/10 rounded-full text-xs font-semibold text-brand-royal">
                  0% Corpus Erosion
                </span>
                <span className="px-3 py-1 bg-white border border-brand-royal/10 rounded-full text-xs font-semibold text-brand-royal">
                  85% Social Yield
                </span>
                <span className="px-3 py-1 bg-white border border-brand-royal/10 rounded-full text-xs font-semibold text-brand-royal">
                  15% Asset Reserve
                </span>
              </div>
            </div>
            <div className="md:col-span-8 p-12 lg:p-16 flex flex-col justify-center items-start space-y-8 bg-white/50 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cairo text-brand-navy leading-tight">
                Uncompromising transparency and mathematical accountability for eternal endowments.
              </h1>
              <GlassButton onClick={() => console.log('Download Annual Reports')} icon={<Download className="w-5 h-5" />}>
                Download Annual Reports
              </GlassButton>
            </div>
          </div>
        </section>

        {/* Section 2: Public Audit Archive */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto p-8 lg:p-16">
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-cairo text-brand-navy mb-4">Public Audit Archive</h2>
              <p className="text-brand-navy/70 max-w-2xl">
                Access our independently verified financial statements, impact reports, and Shariah compliance fatwas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 border border-brand-royal/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-royal/5 rounded-xl flex items-center justify-center text-brand-royal">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-brand-royal/60 px-2 py-1 bg-brand-mist rounded-md">3.2 MB PDF</span>
                </div>
                <h3 className="text-xl font-bold font-cairo mb-2">2024 Financial Statement</h3>
                <div className="text-sm text-brand-navy/60 mb-6 space-y-1">
                  <p>Auditor: Deloitte & Touche</p>
                  <p>Date: Q1 2024</p>
                </div>
                <GlassButton className="w-full justify-center group-hover:bg-brand-royal group-hover:text-white transition-colors" icon={<Download className="w-4 h-4" />}>
                  Download PDF
                </GlassButton>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 border border-brand-royal/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-royal/5 rounded-xl flex items-center justify-center text-brand-royal">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-brand-royal/60 px-2 py-1 bg-brand-mist rounded-md">1.1 MB PDF</span>
                </div>
                <h3 className="text-xl font-bold font-cairo mb-2">2024 Shariah Fatwa</h3>
                <div className="text-sm text-brand-navy/60 mb-6 space-y-1">
                  <p>Auditor: Shariah Supervisory Board</p>
                  <p>Date: Q1 2024</p>
                </div>
                <GlassButton className="w-full justify-center group-hover:bg-brand-royal group-hover:text-white transition-colors" icon={<Download className="w-4 h-4" />}>
                  Download PDF
                </GlassButton>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 border border-brand-royal/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-royal/5 rounded-xl flex items-center justify-center text-brand-royal">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-brand-royal/60 px-2 py-1 bg-brand-mist rounded-md">5.4 MB PDF</span>
                </div>
                <h3 className="text-xl font-bold font-cairo mb-2">Solar Grid Impact Report</h3>
                <div className="text-sm text-brand-navy/60 mb-6 space-y-1">
                  <p>Auditor: Impact Verification Ltd.</p>
                  <p>Date: Q4 2023</p>
                </div>
                <GlassButton className="w-full justify-center group-hover:bg-brand-royal group-hover:text-white transition-colors" icon={<Download className="w-4 h-4" />}>
                  Download PDF
                </GlassButton>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 border border-brand-royal/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-royal/5 rounded-xl flex items-center justify-center text-brand-royal">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-brand-royal/60 px-2 py-1 bg-brand-mist rounded-md">2.8 MB PDF</span>
                </div>
                <h3 className="text-xl font-bold font-cairo mb-2">2023 Financial Statement</h3>
                <div className="text-sm text-brand-navy/60 mb-6 space-y-1">
                  <p>Auditor: Deloitte & Touche</p>
                  <p>Date: Q1 2023</p>
                </div>
                <GlassButton className="w-full justify-center group-hover:bg-brand-royal group-hover:text-white transition-colors" icon={<Download className="w-4 h-4" />}>
                  Download PDF
                </GlassButton>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The 100% Principal Protection Covenant */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto p-8 lg:p-16">
            <div className="bg-gradient-to-br from-brand-navy to-brand-royal rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-xl border border-brand-royal/20">
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                <IslamicEmblem className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-4">The 100% Principal Protection Covenant</h2>
                <p className="text-white/80 text-lg">
                  Every Waqf contribution is treated as an inviolable trust (Amanah). The principal corpus is permanently protected and invested in low-risk, Shariah-compliant physical assets, ensuring sustainable yields for generations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <PieChart className="w-8 h-8 text-brand-sky mb-4" />
                  <h4 className="text-xl font-bold font-cairo mb-2">100% Retained</h4>
                  <p className="text-sm text-white/70">Waqf principal is never spent, ensuring perpetual endowment longevity.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <Activity className="w-8 h-8 text-brand-amber mb-4" />
                  <h4 className="text-xl font-bold font-cairo mb-2">Halal Yields</h4>
                  <p className="text-sm text-white/70">Investments are restricted to real estate, agriculture, and ethical sukuk.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <Lock className="w-8 h-8 text-brand-sky mb-4" />
                  <h4 className="text-xl font-bold font-cairo mb-2">Legal Trust</h4>
                  <p className="text-sm text-white/70">Governed by an irrevocable trust deed protecting beneficiary rights.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Key Shariah Governance Commitments */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto p-8 lg:p-16">
            <h2 className="text-3xl font-bold font-cairo text-brand-navy mb-12 text-center">Key Governance Commitments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col space-y-4 p-6 border-l-2 border-brand-royal/20 hover:border-brand-royal transition-colors">
                <div className="w-10 h-10 bg-brand-royal/5 rounded-full flex items-center justify-center text-brand-royal">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-cairo text-brand-navy">Zero Riba Principle</h3>
                <p className="text-sm text-brand-navy/70">
                  Absolute prohibition of interest-bearing instruments. All financial operations are rigorously screened to exclude Riba, Gharar (uncertainty), and Maysir (gambling).
                </p>
              </div>

              <div className="flex flex-col space-y-4 p-6 border-l-2 border-brand-royal/20 hover:border-brand-royal transition-colors">
                <div className="w-10 h-10 bg-brand-royal/5 rounded-full flex items-center justify-center text-brand-royal">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-cairo text-brand-navy">Beneficiary Ring-Fencing</h3>
                <p className="text-sm text-brand-navy/70">
                  Waqf yields are strictly allocated to designated causes. Operational expenses are capped and transparently funded from separate administrative reserves.
                </p>
              </div>

              <div className="flex flex-col space-y-4 p-6 border-l-2 border-brand-royal/20 hover:border-brand-royal transition-colors">
                <div className="w-10 h-10 bg-brand-royal/5 rounded-full flex items-center justify-center text-brand-royal">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-cairo text-brand-navy">Dual Independent Auditing</h3>
                <p className="text-sm text-brand-navy/70">
                  Simultaneous financial auditing by top-tier global accounting firms and Shariah compliance verification by an independent board of eminent scholars.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <PledgeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
