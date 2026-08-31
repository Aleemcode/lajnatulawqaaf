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
        {/* Single prominent blob for modals — bottom-left positioned */}
        <div
          className="absolute -bottom-16 -left-16 w-80 h-80"
          style={{
            background: 'radial-gradient(circle, rgba(3, 189, 227, 0.18) 0%, rgba(3, 189, 227, 0) 70%)',
            borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
            animation: 'blob-drift-slow 25s ease-in-out infinite',
            filter: 'blur(50px)',
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
          className="absolute -top-24 -right-24 w-[450px] h-[450px]"
          style={{
            background: 'radial-gradient(circle, rgba(3, 189, 227, 0.16) 0%, rgba(3, 189, 227, 0) 70%)',
            borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
            animation: 'blob-drift 25s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        {/* Gold blob */}
        <div
          className="absolute -bottom-20 -left-20 w-[380px] h-[380px]"
          style={{
            background: 'radial-gradient(circle, rgba(239, 172, 2, 0.12) 0%, rgba(239, 172, 2, 0) 70%)',
            borderRadius: '40% 60% 50% 50% / 60% 40% 55% 45%',
            animation: 'blob-drift-reverse 30s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
      </div>
    );
  }

  // Light variant — prominent, clearly visible organic shaders with brand Sky Blue & Gold
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Sky Blue blob — top right */}
      <div
        className="absolute -top-24 -right-24 w-[520px] h-[520px]"
        style={{
          background: 'radial-gradient(circle, rgba(3, 189, 227, 0.20) 0%, rgba(3, 189, 227, 0) 70%)',
          borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%',
          animation: 'blob-drift 25s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />
      {/* Amber Gold blob — bottom left */}
      <div
        className="absolute -bottom-20 -left-20 w-[440px] h-[440px]"
        style={{
          background: 'radial-gradient(circle, rgba(239, 172, 2, 0.16) 0%, rgba(239, 172, 2, 0) 70%)',
          borderRadius: '40% 60% 50% 50% / 60% 40% 55% 45%',
          animation: 'blob-drift-reverse 30s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />
      {/* Royal Blue subtle depth blob — center left */}
      <div
        className="absolute top-1/3 -left-28 w-[360px] h-[360px]"
        style={{
          background: 'radial-gradient(circle, rgba(18, 55, 136, 0.10) 0%, rgba(18, 55, 136, 0) 70%)',
          borderRadius: '55% 45% 50% 50% / 45% 55% 50% 50%',
          animation: 'blob-drift-slow 35s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
};
