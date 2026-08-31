'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/Logo';
import { Menu, X, Plus } from 'lucide-react';
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
    { name: 'About', href: '/about' },
    { name: 'Why Us', href: '/#why-us' },
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
        <div className="w-full max-w-4xl pointer-events-auto">
          {/* Floating White Frosted Capsule matching Oxira reference */}
          <nav className="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm border border-slate-200/80 flex items-center justify-between transition-all">
            {/* Left: Brand Icon + Divider */}
            <div className="flex items-center gap-3">
              <Logo variant="horizontal" height={30} />
              <div className="hidden sm:block h-4 w-px bg-slate-200" />
            </div>

            {/* Center: Clean Direct Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 rounded-full text-xs font-cairo font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-royal/10 text-brand-royal font-bold'
                        : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100/70'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right: Pledge Button & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPledgeModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 pl-4 pr-1.5 py-1 rounded-full bg-brand-royal hover:bg-brand-royal-light text-white text-xs font-cairo font-bold shadow-sm transition-all group"
              >
                <span>Pledge Waqf</span>
                <span className="w-6 h-6 rounded-full bg-brand-sky text-brand-navy flex items-center justify-center text-xs font-bold group-hover:scale-105 transition-transform">
                  +
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 text-slate-600 hover:text-brand-navy rounded-full bg-slate-100 hover:bg-slate-200 transition-all"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-xl space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-2xl text-sm font-cairo font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-royal/10 text-brand-royal font-bold'
                        : 'text-slate-700 hover:text-brand-navy hover:bg-slate-100'
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
                className="w-full mt-2 py-3 px-4 rounded-2xl bg-brand-royal text-white font-cairo font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Pledge Waqf Endowment</span>
                <Plus size={16} className="text-brand-sky" />
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
