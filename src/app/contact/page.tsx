'use client';

import React, { useState } from 'react';
import { GlassButton } from '@/components/common/GlassButton';
import { OrganicBlobs } from '@/components/common/OrganicBlobs';
import { SITE_CONFIG, WAQF_PILLARS } from '@/data/siteData';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Building2, Globe, Shield } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                  Initiate Your Eternal Legacy
                </h1>
                <p className="text-brand-navy/70 text-lg max-w-xl">
                  Connect with our Board of Trustees and Shariah advisors to structure your Waqf endowment or direct your inquiries.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-brand-navy">Full Name</label>
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
                    <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Email Address</label>
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
                    <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Phone Number</label>
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
                    <label htmlFor="category" className="text-sm font-semibold text-brand-navy">Inquiry Category</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-royal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-royal/30 focus:border-brand-royal transition-all appearance-none"
                    >
                      <option value="" disabled>Select a category...</option>
                      <option value="waqf_setup">Waqf Setup & Structuring</option>
                      <option value="general_inquiry">General Inquiry</option>
                      <option value="partnership">Partnership & Collaboration</option>
                      <option value="shariah_advisory">Shariah Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-brand-navy">Message details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-brand-royal/20 bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-royal/30 focus:border-brand-royal transition-all resize-none"
                    placeholder="How can we assist you in establishing your continuous charity?"
                  />
                </div>

                <div className="pt-4">
                  <GlassButton type="submit" className="w-full sm:w-auto" icon={<Send className="w-4 h-4" />}>
                    Submit Inquiry to Board of Trustees
                  </GlassButton>
                </div>
              </form>
            </div>

            {/* Right Column (Span 5) - Info & Escrows */}
            <div className="md:col-span-5 flex flex-col">
              <div className="p-8 lg:p-12 border-b border-brand-royal/10 bg-brand-royal/5 flex-grow">
                <h3 className="text-2xl font-bold font-cairo text-brand-navy mb-8">Office Secretariat</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-royal shadow-sm shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Headquarters</h4>
                      <p className="text-sm text-brand-navy/70 leading-relaxed">
                        Lajanah Trust Plaza<br />
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
                      <h4 className="font-semibold text-brand-navy mb-1">Direct Line</h4>
                      <p className="text-sm text-brand-navy/70">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-royal shadow-sm shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Electronic Mail</h4>
                      <p className="text-sm text-brand-navy/70">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-royal shadow-sm shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">Official Hours</h4>
                      <p className="text-sm text-brand-navy/70">
                        Mon - Fri: 9:00 AM - 5:00 PM (WAT)<br />
                        Closed on Public Holidays & Fridays (1:00 PM - 3:00 PM)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dedicated Non-Interest Waqf Bank Escrows Card */}
              <div className="p-8 lg:p-12 bg-brand-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                  <Building2 className="w-64 h-64" />
                </div>
                
                <h3 className="text-xl font-bold font-cairo mb-6 relative z-10 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-amber" />
                  Non-Interest Waqf Escrows
                </h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm">
                    <div className="text-xs font-semibold text-brand-amber uppercase tracking-wider mb-1">Local Endowment</div>
                    <h4 className="font-semibold text-lg mb-3">Jaiz Bank Plc (NGN)</h4>
                    <div className="flex justify-between items-center bg-black/20 rounded-lg p-3">
                      <span className="font-mono text-xl tracking-wider">000 123 4567</span>
                      <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded transition-colors" onClick={() => navigator.clipboard.writeText('0001234567')}>Copy</button>
                    </div>
                    <p className="text-xs text-white/60 mt-2">Account Name: Lajanah General Waqf Fund</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-5 border border-white/10 backdrop-blur-sm">
                    <div className="text-xs font-semibold text-brand-sky uppercase tracking-wider mb-1">Diaspora Endowment</div>
                    <h4 className="font-semibold text-lg mb-3">Lotus Bank (USD)</h4>
                    <div className="flex justify-between items-center bg-black/20 rounded-lg p-3">
                      <span className="font-mono text-xl tracking-wider">000 987 6543</span>
                      <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded transition-colors" onClick={() => navigator.clipboard.writeText('0009876543')}>Copy</button>
                    </div>
                    <p className="text-xs text-white/60 mt-2">Account Name: Lajanah USD Domiciliary Waqf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Physical Secretariat Visit & Advisory Booking */}
        <section className="border-b border-brand-royal/10 bg-white/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto p-8 lg:p-16 border-l border-r border-brand-royal/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-cairo text-brand-navy mb-4">
                  Schedule a Consultation
                </h2>
                <p className="text-brand-navy/70 text-lg mb-6 leading-relaxed">
                  Discuss your philanthropic vision with our dedicated Waqf specialists. We offer bespoke structuring for family endowments, real estate trusts, and corporate social responsibility funds.
                </p>
                <GlassButton 
                  onClick={() => window.open('https://wa.me/2348000000000', '_blank')}
                  icon={<MessageSquare className="w-5 h-5" />}
                  className="bg-brand-royal/5 border-brand-royal/20 hover:bg-brand-royal/10"
                >
                  Chat with Advisory via WhatsApp
                </GlassButton>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-brand-mist border border-brand-royal/10 flex items-center justify-center shadow-inner group">
                <Globe className="w-24 h-24 text-brand-royal/20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-royal/5 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-4 rounded-xl text-center text-sm font-medium text-brand-navy shadow-sm border border-brand-royal/10">
                  Virtual advisory available globally via Zoom or Microsoft Teams.
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
