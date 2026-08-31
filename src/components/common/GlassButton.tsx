'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'royal' | 'sky' | 'dark' | 'emerald' | 'primary' | 'secondary';
  indicator?: 'arrow' | 'dot' | 'arrow-up-right' | 'none';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'royal',
  indicator = 'arrow',
  icon,
  size = 'md',
  className = '',
  type = 'button',
  fullWidth = false,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-5 py-2.5 text-xs sm:text-sm gap-2.5',
    lg: 'px-6 py-3.5 text-sm sm:text-base gap-3',
  };

  const indicatorSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  const normalizedVariant = variant === 'primary' ? 'royal' : variant === 'secondary' ? 'sky' : variant;

  const variantStyles = {
    royal: 'glass-cta text-white',
    sky: 'glass-cta-sky text-brand-navy',
    dark: 'bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white border border-white/15 shadow-lg',
    emerald: 'bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white border border-emerald-400/20 shadow-lg',
  };

  const indicatorColors = {
    royal: 'bg-emerald-400 text-brand-navy shadow-sm',
    sky: 'bg-brand-navy text-brand-sky',
    dark: 'bg-emerald-400 text-brand-navy',
    emerald: 'bg-emerald-300 text-emerald-950',
  };

  const content = (
    <>
      <span className="font-cairo font-bold tracking-wide flex items-center gap-2">
        {children}
      </span>
      {indicator !== 'none' && (
        <span
          className={`relative overflow-hidden rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${indicatorSizes[size]} ${indicatorColors[normalizedVariant]}`}
        >
          {icon ? (
            <span className="relative w-full h-full flex items-center justify-center">
              <span className="inline-flex transition-transform duration-300 ease-out group-hover:-translate-y-5 group-hover:translate-x-5">
                {icon}
              </span>
              <span className="absolute inline-flex translate-y-5 -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:translate-x-0">
                {icon}
              </span>
            </span>
          ) : indicator === 'dot' ? (
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          ) : (
            <span className="relative w-full h-full flex items-center justify-center">
              {/* Primary icon that slides up on hover */}
              <span className="inline-flex transition-transform duration-300 ease-out group-hover:-translate-y-5 group-hover:translate-x-5">
                {indicator === 'arrow-up-right' ? (
                  <ArrowUpRight size={size === 'sm' ? 12 : 14} />
                ) : (
                  <ArrowRight size={size === 'sm' ? 12 : 14} />
                )}
              </span>
              {/* Duplicate icon entering from bottom-left on hover */}
              <span className="absolute inline-flex translate-y-5 -translate-x-5 transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:translate-x-0">
                {indicator === 'arrow-up-right' ? (
                  <ArrowUpRight size={size === 'sm' ? 12 : 14} />
                ) : (
                  <ArrowRight size={size === 'sm' ? 12 : 14} />
                )}
              </span>
            </span>
          )}
        </span>
      )}
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-between rounded-full transition-all duration-300 select-none ${sizeClasses[size]} ${variantStyles[normalizedVariant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
