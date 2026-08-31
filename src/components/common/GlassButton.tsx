'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, ArrowUpRight, ChevronDown } from 'lucide-react';

interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'royal' | 'sky' | 'dark' | 'gold' | 'primary' | 'secondary';
  indicator?: 'arrow' | 'dot' | 'arrow-up-right' | 'download' | 'chevron' | 'none';
  direction?: 'right' | 'down' | 'up' | 'none';
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
  direction,
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

  const iconSizes = size === 'sm' ? 12 : 14;

  const normalizedVariant = variant === 'primary' ? 'royal' : variant === 'secondary' ? 'sky' : variant;

  const variantStyles = {
    royal: 'glass-cta text-white',
    sky: 'glass-cta-sky text-brand-navy',
    dark: 'bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white border border-white/15 shadow-lg',
    gold: 'bg-gradient-to-r from-brand-gold via-amber-500 to-amber-600 text-brand-navy border border-white/20 shadow-gold',
  };

  // Strictly Brand Color Tokens (Sky Blue or Gold) - Zero Foreign Green
  const indicatorColors = {
    royal: 'bg-brand-sky text-brand-navy shadow-sm',
    sky: 'bg-brand-navy text-brand-sky',
    dark: 'bg-brand-sky text-brand-navy',
    gold: 'bg-brand-navy text-brand-gold',
  };

  // Infer motion direction contextually if not explicitly passed
  const effectiveDirection = direction || (
    indicator === 'download' || indicator === 'chevron' ? 'down' :
    indicator === 'arrow-up-right' ? 'up' : 'right'
  );

  const defaultIcon = (
    indicator === 'arrow-up-right' ? <ArrowUpRight size={iconSizes} /> :
    indicator === 'download' ? <Download size={iconSizes} /> :
    indicator === 'chevron' ? <ChevronDown size={iconSizes} /> :
    <ArrowRight size={iconSizes} />
  );

  const activeIcon = icon || defaultIcon;

  // Contextual Directional Animation Styles
  const getMotionClasses = () => {
    switch (effectiveDirection) {
      case 'down':
        return {
          primary: 'group-hover:translate-y-5',
          duplicate: '-translate-y-5 group-hover:translate-y-0',
        };
      case 'up':
        return {
          primary: 'group-hover:-translate-y-5',
          duplicate: 'translate-y-5 group-hover:translate-y-0',
        };
      case 'right':
      default:
        return {
          primary: 'group-hover:translate-x-5',
          duplicate: '-translate-x-5 group-hover:translate-x-0',
        };
    }
  };

  const motion = getMotionClasses();

  const content = (
    <>
      <span className="font-cairo font-bold tracking-wide flex items-center gap-2">
        {children}
      </span>
      {indicator !== 'none' && (
        <span
          className={`relative overflow-hidden rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${indicatorSizes[size]} ${indicatorColors[normalizedVariant]}`}
        >
          {indicator === 'dot' ? (
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          ) : (
            <span className="relative w-full h-full flex items-center justify-center">
              {/* Primary icon exiting contextually */}
              <span className={`inline-flex transition-transform duration-300 ease-out ${motion.primary}`}>
                {activeIcon}
              </span>
              {/* Duplicate icon entering contextually */}
              <span className={`absolute inline-flex transition-transform duration-300 ease-out ${motion.duplicate}`}>
                {activeIcon}
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
