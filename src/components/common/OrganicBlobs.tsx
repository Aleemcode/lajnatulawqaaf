import React from 'react';

interface OrganicBlobsProps {
  variant?: 'light' | 'dark' | 'modal';
  className?: string;
}

export const OrganicBlobs: React.FC<OrganicBlobsProps> = ({
  variant = 'light',
  className = '',
}) => {
  if (variant === 'modal') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        {/* Single blob for modals — bottom-left positioned */}
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72"
          style={{
            background: 'radial-gradient(circle, rgba(3, 189, 227, 0.08) 0%, rgba(3, 189, 227, 0) 70%)',
            borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
            animation: 'blob-drift-slow 25s ease-in-out infinite',
            filter: 'blur(40px)',
          }}
        />
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        {/* Sky Blue blob */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96"
          style={{
            background: 'radial-gradient(circle, rgba(3, 189, 227, 0.07) 0%, rgba(3, 189, 227, 0) 70%)',
            borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
            animation: 'blob-drift 25s ease-in-out infinite',
            filter: 'blur(50px)',
          }}
        />
        {/* White/mist blob */}
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80"
          style={{
            background: 'radial-gradient(circle, rgba(248, 250, 252, 0.06) 0%, rgba(248, 250, 252, 0) 70%)',
            borderRadius: '40% 60% 50% 50% / 60% 40% 55% 45%',
            animation: 'blob-drift-reverse 30s ease-in-out infinite',
            filter: 'blur(50px)',
          }}
        />
      </div>
    );
  }

  // Light variant — for white/mist sections
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Sky Blue blob — top right area */}
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px]"
        style={{
          background: 'radial-gradient(circle, rgba(3, 189, 227, 0.08) 0%, rgba(3, 189, 227, 0) 70%)',
          borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
          animation: 'blob-drift 25s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />
      {/* Gold blob — bottom left area */}
      <div
        className="absolute -bottom-16 -left-16 w-[320px] h-[320px]"
        style={{
          background: 'radial-gradient(circle, rgba(239, 172, 2, 0.05) 0%, rgba(239, 172, 2, 0) 70%)',
          borderRadius: '40% 60% 50% 50% / 60% 40% 55% 45%',
          animation: 'blob-drift-reverse 30s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />
      {/* Third subtle blob — center left */}
      <div
        className="absolute top-1/3 -left-32 w-[280px] h-[280px]"
        style={{
          background: 'radial-gradient(circle, rgba(18, 55, 136, 0.04) 0%, rgba(18, 55, 136, 0) 70%)',
          borderRadius: '55% 45% 50% 50% / 45% 55% 50% 50%',
          animation: 'blob-drift-slow 35s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
};
