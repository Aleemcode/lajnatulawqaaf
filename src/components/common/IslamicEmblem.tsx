import React from 'react';

interface IslamicEmblemProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glow?: boolean;
}

export const IslamicEmblem: React.FC<IslamicEmblemProps> = ({
  size = 'md',
  className = '',
  glow = true,
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <div
      className={`inline-flex items-center justify-center relative rounded-full ${sizeClasses[size]} ${className}`}
    >
      {/* Outer Glow */}
      {glow && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-sky/40 to-brand-gold/40 blur-md -z-10 animate-pulse" />
      )}

      {/* Glossy Clay Disc */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-royal via-brand-royal-dark to-brand-navy border border-white/20 shadow-clay flex items-center justify-center relative overflow-hidden">
        {/* Top Glint */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-full pointer-events-none" />

        {/* Golden Diamond Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/2 h-1/2 text-brand-gold drop-shadow-[0_2px_4px_rgba(239,172,2,0.5)]"
        >
          <path
            d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
            fill="#EFAC02"
          />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" fillOpacity="0.9" />
        </svg>
      </div>
    </div>
  );
};
