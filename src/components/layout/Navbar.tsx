'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/Logo';
import { Menu, X, HeartHandshake, ShieldCheck } from 'lucide-react';
import { PledgeModal } from '@/components/common/PledgeModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pledgeModalOpen, setPledgeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About & Governance', href: '/about' },
    { name: 'Endowments', href: '/endowments' },
    { name: 'Transparency', href: '/transparency' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 flex justify-center px-4 py-3 sm:py-4 transition-all duration-300 pointer-events-none ${
          scrolled ? 'top-1' : 'top-2'
        }`}
      >
        <div className="w-full max-w-5xl pointer-events-auto">
          <nav className="glass-pill rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl flex items-center justify-between transition-all">
            {/* Brand Logo Lockup */}
            <Logo variant="white" height={32} />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-cairo font-semibold transition-all ${
                      isActive
                        ? 'bg-white/20 text-white shadow-inner font-bold'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setPledgeModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-cairo font-bold transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Pledge Waqf</span>
                <span className="w-4 h-4 rounded-full bg-emerald-400 text-brand-navy flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
                  +
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 text-white/90 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 p-4 bg-brand-royal-dark/95 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl text-white space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-2xl text-sm font-cairo font-semibold transition-all ${
                      isActive
                        ? 'bg-white/20 text-white font-bold'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPledgeModalOpen(true);
                }}
                className="w-full mt-2 py-3 px-4 rounded-2xl bg-brand-sky text-brand-navy font-cairo font-bold text-sm flex items-center justify-center gap-2 shadow-sky"
              >
                <HeartHandshake size={16} />
                Pledge Waqf Endowment
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Global Pledge Modal */}
      <PledgeModal
        isOpen={pledgeModalOpen}
        onClose={() => setPledgeModalOpen(false)}
      />
    </>
  );
};
