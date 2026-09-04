'use client';

import React, { useState } from 'react';
import { GlassButton } from '@/components/common/GlassButton';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { SITE_CONFIG } from '@/data/siteData';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Building2, Globe, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
    company: '', // honeypot — real people leave this empty
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic anti-spam: ignore submissions where the hidden honeypot is filled.
    if (formData.company) return;
    // NOTE: not yet wired to a backend (see docs/REVAMP/03-SECURITY-AUDIT.md §H2).
    // When wired, POST to a validated, rate-limited server endpoint — never email
    // from the client, and never log user data to the console.
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen bg-brand-mist overflow-hidden pt-24 font-inter text-brand-navy">
      <OrganicBlobs />

      <main className="relative z-10">
        {/* Section 1: Header & Main Interactive Form Grid */}
        <section className="border-b border-brand-royal/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 border-l border-r border-brand-royal/10">

            {/* Left Column (Span 7) - Form */}
            <div className="md:col-span-7 p-8 lg:p-12 border-r border-brand-royal/10 bg-white/50 backdrop-blur-sm">
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold font-cairo text-brand-navy mb-4">
                  Let&apos;s talk about your gift
                </h1>
                <p className="text-brand-navy/70 text-lg max-w-xl">
                  Want to give, start a Waqf, ask a question, or partner with us? Send a message and the right person
                  will reply — usually within 2 working days.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle size={30} />
                  </div>
                  <h2 className="font-cairo text-2xl font-bold text-brand-navy">Message received</h2>
                  <p className="text-brand-navy/70 max-w-md">
                    Jazakallahu Khayran. We&apos;ll get back to you soon, insha&apos;Allah.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot (hidden from real users) */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-brand-navy">Full name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-royal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-royal/30 focus:border-brand-royal transition-all"
                        placeholder="Abdullah Ahmad"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-royal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-royal/30 focus:border-brand-royal transition-all"
                        placeholder="abdullah@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Phone number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-royal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-royal/30 focus:border-brand-royal transition-all"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-semibold text-brand-navy">What&apos;s it about?</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-royal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-royal/30 focus:border-brand-royal transition-all appearance-none"
                      >
                        <option value="" disabled>Choose one…</option>
                        <option value="give">Giving a gift (Sadaqah / Zakat)</option>
                        <option value="waqf_setup">Starting a Waqf</option>
                        <option value="general_inquiry">General question</option>
                        <option value="partnership">Partnership</option>
                        <option value="shariah_advisory">Shariah question</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-brand-navy">Your message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-brand-royal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-royal/30 focus:border-brand-royal transition-all resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="pt-4">
                    <GlassButton type="submit" className="w-full sm:w-auto" icon={<Send className="w-4 h-4" />}>
                      Send message
                    </GlassButton>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column (Span 5) - Info & Ways to Give */}
            <div className="md:col-span-5 flex flex-col">
              <div className="p-8 lg:p-12 border-b border-brand-royal/10 bg-brand-royal/5 flex-grow">
                <h2 className="text-2xl font-bold font-cairo text-brand-navy mb-8">Our office</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-royal shadow-sm shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-1">Address</h3>
                      <p className="text-sm text-brand-navy/70 leading-relaxed">
                        Central Business District<br />
                        Abuja, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-royal shadow-sm shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-1">Phone</h3>
                      <p className="text-sm text-brand-navy/70">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-royal shadow-sm shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-1">Email</h3>
                      <p className="text-sm text-brand-navy/70">{SITE_CONFIG.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-royal shadow-sm shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-1">Opening hours</h3>
                      <p className="text-sm text-brand-navy/70">
                        Mon – Fri: 9:00 AM – 5:00 PM (WAT)<br />
                        Closed on public holidays &amp; Friday 1:00 – 3:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Give directly by bank transfer */}
              <div className="p-8 lg:p-12 bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                  <Building2 className="w-64 h-64" />
                </div>

                <h3 className="text-xl font-bold font-cairo mb-6 relative z-10 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-gold" />
                  Give directly by bank transfer
                </h3>

                <div className="space-y-6 relative z-10">
                  {/* Bank details are PENDING VERIFICATION — do not publish placeholder
                      account numbers. See docs/REVAMP/03-SECURITY-AUDIT.md §C1. */}
                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm">
                    <div className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-1">For donors in Nigeria (₦)</div>
                    <h4 className="font-semibold text-lg mb-2">Non-interest (Islamic) account</h4>
                    <p className="text-sm text-white/70">Account details are being verified. Please contact us and we&apos;ll share them securely.</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm">
                    <div className="text-xs font-semibold text-brand-sky uppercase tracking-wider mb-1">For donors abroad (USD)</div>
                    <h4 className="font-semibold text-lg mb-2">Domiciliary account</h4>
                    <p className="text-sm text-white/70">Account details are being verified. Please contact us and we&apos;ll share them securely.</p>
                  </div>

                  <p className="flex items-start gap-2 text-xs text-brand-gold/90 bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-3">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Beware of fraud: always confirm our account details with us by phone before transferring any money.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Consultation & WhatsApp */}
        <section className="border-b border-brand-royal/10 bg-white/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto p-8 lg:p-16 border-l border-r border-brand-royal/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-cairo text-brand-navy mb-4">
                  Book a free consultation
                </h2>
                <p className="text-brand-navy/70 text-lg mb-6 leading-relaxed">
                  We&apos;ll help you set up a family Waqf, donate a property, or plan your company&apos;s giving —
                  whatever fits you.
                </p>
                <GlassButton
                  onClick={() => window.open('https://wa.me/2348000000000', '_blank')}
                  icon={<MessageSquare className="w-5 h-5" />}
                  className="bg-brand-royal/5 border-brand-royal/20 hover:bg-brand-royal/10"
                >
                  Chat with us on WhatsApp
                </GlassButton>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-brand-mist border border-brand-royal/10 flex items-center justify-center shadow-inner group">
                <Globe className="w-24 h-24 text-brand-royal/20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-royal/5 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-4 rounded-xl text-center text-sm font-medium text-brand-navy shadow-sm border border-brand-royal/10">
                  Talk to us from anywhere by Zoom or Microsoft Teams.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
