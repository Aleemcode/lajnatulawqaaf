import React from 'react';
import { FIGURES_ARE_ILLUSTRATIVE } from '@/data/siteData';

/**
 * Honesty banner. While the site's figures and named people are placeholder /
 * demo content (FIGURES_ARE_ILLUSTRATIVE === true), this bar makes that clear
 * to any visitor. Remove nothing — just flip FIGURES_ARE_ILLUSTRATIVE to false
 * in siteData.ts once real, verified values replace the placeholders.
 * See docs/REVAMP/03-SECURITY-AUDIT.md §C2.
 */
export const IllustrativeNotice: React.FC = () => {
  if (!FIGURES_ARE_ILLUSTRATIVE) return null;

  return (
    <div
      role="note"
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-navy text-white/90 text-[11px] sm:text-xs font-cairo px-4 py-2 text-center border-t border-brand-gold/40 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.4)]"
    >
      <span className="inline-flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" aria-hidden />
        Figures and names on this site are <strong className="font-bold text-brand-gold">illustrative</strong> and pending verification. Not yet for public fundraising.
      </span>
    </div>
  );
};
