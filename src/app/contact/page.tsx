'use client';

import React, { useState } from 'react';
import { SITE_CONFIG, WAQF_PILLARS } from '@/data/siteData';
import { IslamicEmblem } from '@/components/common/IslamicEmblem';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, Building, HeartHandshake } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    portfolio: 'real-estate',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-royal/5 border border-brand-royal/15 text-brand-royal text-xs font-cairo font-bold mb-4">
          <Mail size={14} />
          <span>Fiduciary Inquiries & Asset Dedications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-cairo text-brand-navy max-w-3xl mx-auto leading-tight">
          Connect with Our Waqf Advisory Committee
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Whether establishing a designated family endowment (*Waqf Dhurri*), dedicating real property, or contributing fractional Sadaqah Jariyah shares, our advisors are here to assist.
        </p>
      </section>

      {/* Main Grid: Form + Office Coordinates */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Interactive Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-brand-royal/10 shadow-clay">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-cairo font-bold text-2xl text-brand-navy">
                  Inquiry Received with Thanks
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Jazakallahu Khayran. Your message has been routed to our Secretariat and Trustee Advisory Board. We will respond within 24–48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-brand-royal text-white rounded-full font-cairo font-semibold text-xs hover:bg-brand-royal-light transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-cairo font-bold text-lg text-brand-navy">
                    Waqf & Donation Inquiry Form
                  </h3>
                  <span className="text-[10px] font-mono text-brand-royal bg-brand-mist px-2.5 py-1 rounded-full border border-slate-200">
                    Confidential & Shariah-Governed
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-cairo text-slate-600 mb-1.5">
                      Full Name / Representative Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Usman Dan-Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-cairo text-slate-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold font-cairo text-slate-600 mb-1.5">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold font-cairo text-slate-600 mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal bg-white"
                    >
                      <option value="general">General Waqf Inquiry</option>
                      <option value="named-waqf">Establish Named Family Waqf</option>
                      <option value="real-estate">Real Estate & Land Dedication</option>
                      <option value="fractional-shares">Fractional Share Contribution</option>
                      <option value="institutional">Institutional Partnership / Grant</option>
                      <option value="shariah">Shariah Fatwa Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold font-cairo text-slate-600 mb-1.5">
                    Message / Dedication Specifics *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your endowment intent, asset location, or specific questions for the Board of Trustees..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-royal/20 focus:border-brand-royal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-brand-royal hover:bg-brand-royal-light text-white font-cairo font-bold text-sm shadow-clay hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Submit Inquiry to Board of Trustees</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Coordinates & Bank Details (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-royal/10 shadow-clay space-y-4">
              <div className="font-cairo font-bold text-base text-brand-navy flex items-center gap-2">
                <Building size={18} className="text-brand-royal" />
                <span>Headquarters & Secretariat</span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                <MapPin size={18} className="text-brand-sky flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone size={14} className="text-brand-royal" />
                  <span>{SITE_CONFIG.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail size={14} className="text-brand-royal" />
                  <span>{SITE_CONFIG.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock size={14} className="text-brand-royal" />
                  <span>Mon – Fri: 8:30 AM – 4:30 PM (WAT)</span>
                </div>
              </div>
            </div>

            {/* Direct Waqf Deposit Bank Coordinates */}
            <div className="bg-gradient-to-br from-brand-royal to-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-clay space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-cairo font-bold text-sm text-brand-gold flex items-center gap-2">
                  <ShieldCheck size={18} />
                  <span>Dedicated Waqf Escrow Accounts</span>
                </h4>
                <span className="text-[10px] font-mono text-white/70">Non-Interest Bank</span>
              </div>
              <div className="space-y-3 text-xs text-white/80">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                  <div className="text-[10px] text-brand-sky font-semibold font-cairo uppercase">
                    General Waqf Capital Account (NGN)
                  </div>
                  <div className="font-mono font-bold text-white text-sm mt-0.5">
                    1029482910 · Jaiz Bank Plc
                  </div>
                  <div className="text-[10px] text-white/60">Account Name: Lajnatul Awqaaf Wassadaqaat</div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                  <div className="text-[10px] text-brand-gold font-semibold font-cairo uppercase">
                    Dollar / Domiciliary Waqf Account (USD)
                  </div>
                  <div className="font-mono font-bold text-white text-sm mt-0.5">
                    5029102847 · Lotus Bank
                  </div>
                  <div className="text-[10px] text-white/60">SWIFT / Sort Code Available on Request</div>
                </div>
              </div>
              <p className="text-[11px] text-white/60 leading-tight">
                * Please notify our secretariat with transfer receipts for official Waqf Deed issuance and Shariah certificate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
