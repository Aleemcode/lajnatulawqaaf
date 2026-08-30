import React from 'react';
import Image from 'next/image';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { SHARIAH_SCHOLARS, TRUSTEES, SITE_CONFIG } from '@/data/siteData';
import { ShieldCheck, Target, Eye, Award, CheckCircle, Scale, ScrollText } from 'lucide-react';

export const metadata = {
  title: `About Us & Governance — ${SITE_CONFIG.name}`,
  description: 'Learn about our institutional vision, prophetic Waqf philosophy, Board of Trustees, and AAOIFI-certified Shariah Supervisory Board.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-royal/5 border border-brand-royal/15 text-brand-royal text-xs font-cairo font-bold mb-4">
          <IslamicEmblem size="sm" glow={false} />
          <span>Fiduciary Stewardship & Islamic Governance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-cairo text-brand-navy max-w-3xl mx-auto leading-tight">
          Reviving the Prophetic Institution of Perpetual Waqf
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Lajnatul Awqaaf Wassadaqaat is dedicated to institutionalizing Islamic endowments in Africa—transforming voluntary philanthropy into permanent, self-sustaining community assets governed by strict Shariah and fiduciary standards.
        </p>
      </section>

      {/* Vision, Mission & Values Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-brand-royal/10 shadow-clay flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-sky-soft text-brand-royal flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>
              <h3 className="font-cairo font-bold text-xl text-brand-navy mb-3">Our Vision</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To be the premier Shariah-governed Islamic endowment institution in Africa, creating multi-generational prosperity and dignity through perpetual Waqf assets.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] font-cairo text-brand-sky font-bold">
              رؤيتنا: الريادة في إحياء سنة الوقف
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-brand-royal/10 shadow-clay flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-gold-soft text-brand-gold flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="font-cairo font-bold text-xl text-brand-navy mb-3">Our Mission</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Mobilizing, managing, and distributing Islamic endowments with world-class financial integrity, rigorous Shariah oversight, and measurable socio-economic impact.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] font-cairo text-brand-royal font-bold">
              رسالتنا: الأمانة في التنمية والاستدامة
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-gradient-to-br from-brand-royal to-brand-navy text-white rounded-3xl p-8 shadow-clay flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-gold flex items-center justify-center mb-6">
                <Scale size={24} />
              </div>
              <h3 className="font-cairo font-bold text-xl text-white mb-3">The 4 Pillars of Integrity</h3>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-sky" />
                  <span><strong>Amanah:</strong> Fiduciary Trust over assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-sky" />
                  <span><strong>Ihsan:</strong> Excellence in execution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-sky" />
                  <span><strong>Istidama:</strong> 100% Capital Preservation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-sky" />
                  <span><strong>Shaffafiyyah:</strong> Radical Transparency</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-white/15 text-[11px] font-cairo text-brand-gold font-bold">
              قيمنا: الأمانة والإحسان والاستدامة والشفافية
            </div>
          </div>
        </div>
      </section>

      {/* Shariah Supervisory Board Detailed Section */}
      <section id="shariah" className="py-16 bg-white border-y border-brand-royal/10 mb-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold font-cairo text-brand-sky uppercase tracking-widest">
              Religious Authority & Oversight
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-brand-navy mt-1">
              Shariah Supervisory Board (الهيئة الشرعية)
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Our independent Shariah Board comprises esteemed scholars in Islamic Commercial Jurisprudence (*Fiqh al-Muamalat*). They review and audit every Waqf deed (*Hujjah*), investment contract, and social yield distribution against AAOIFI and classical Shariah benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SHARIAH_SCHOLARS.map((scholar, idx) => (
              <div
                key={idx}
                className="bg-brand-mist rounded-3xl p-6 border border-brand-royal/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-200 mb-5 border border-brand-royal/15">
                    <Image
                      src={scholar.imageUrl}
                      alt={scholar.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs font-cairo font-bold text-brand-sky">
                    {scholar.titleArabic}
                  </div>
                  <h3 className="font-cairo font-bold text-lg text-brand-navy mt-0.5">
                    {scholar.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mb-3">
                    {scholar.role}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {scholar.bio}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-brand-navy font-cairo font-semibold flex items-center gap-1.5">
                  <Award size={16} className="text-brand-gold" />
                  <span>{scholar.specialization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees Detailed Section */}
      <section id="trustees" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold font-cairo text-brand-royal uppercase tracking-widest">
            Fiduciary Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-cairo text-brand-navy mt-1">
            Board of Trustees (مجلس الأمناء)
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            The Board of Trustees provides strategic direction, asset growth oversight, and risk management—ensuring that all endowed properties, solar water grids, and educational facilities maintain top institutional standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRUSTEES.map((trustee, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-brand-royal/10 shadow-clay flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-200 mb-5 border border-brand-royal/15">
                  <Image
                    src={trustee.imageUrl}
                    alt={trustee.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs font-cairo font-bold text-brand-royal">
                  {trustee.roleArabic}
                </div>
                <h3 className="font-cairo font-bold text-lg text-brand-navy mt-0.5">
                  {trustee.name}
                </h3>
                <div className="text-xs text-slate-500 font-medium mb-3">
                  {trustee.role}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {trustee.bio}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {trustee.credentials.map((cred, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-brand-mist border border-slate-200/80 text-slate-700 text-[10px] font-cairo font-semibold"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Registration Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-brand-mist border border-brand-royal/15 flex flex-col md:flex-row items-center justify-between gap-6">
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
      </section>
    </div>
  );
}
