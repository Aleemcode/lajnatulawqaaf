import React from 'react';

interface BrandWatermarkProps {
  position?: 'top-right' | 'bottom-left' | 'center-right' | 'top-left';
  opacity?: number;
  size?: 'md' | 'lg' | 'xl';
  className?: string;
}

export const BrandWatermark: React.FC<BrandWatermarkProps> = ({
  position = 'top-right',
  opacity = 0.03,
  size = 'lg',
  className = '',
}) => {
  const sizeMap = {
    md: 200,
    lg: 320,
    xl: 480,
  };

  const positionClasses = {
    'top-right': '-top-12 -right-12',
    'bottom-left': '-bottom-12 -left-12',
    'center-right': 'top-1/4 -right-16',
    'top-left': '-top-12 -left-12',
  };

  const dim = sizeMap[size];

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      style={{ width: dim, height: dim, opacity }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 252 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Inner Arch — from the Lajnah brand dome icon */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.2677 47.0032C66.5577 56.6167 83.9787 64.9081 100.912 72.8694C149.324 95.6307 178.366 145.708 174.914 199.383L170.452 268.733L125.943 295.006L125.759 295.113L0.176729 220.987L0 220.883V75.3117L0.174071 75.2068L47.2677 47.0032ZM21.5569 213.753L121.862 272.297L125.004 225.02C128.068 178.919 103.245 135.461 61.98 114.68L21.5569 94.3227V213.753Z"
          fill="currentColor"
        />
        {/* Outer Dome */}
        <path
          d="M125.944 0.110289L186.995 36.6719C227.02 60.641 251.52 103.867 251.52 150.52V220.883L251.343 220.987L204.914 248.39L207.93 201.507C212.236 134.558 175.964 71.5952 114.989 42.9278C103.966 37.7451 92.7988 32.4488 81.076 26.7578L125.574 0.110289L125.759 0L125.944 0.110289Z"
          fill="currentColor"
        />
        {/* Gold diamonds */}
        <path d="M71.134 185.355L100.774 197.559L88.5699 227.199L58.9299 214.995L71.134 185.355Z" fill="currentColor" />
        <path d="M53.889 143.605L83.529 155.809L71.3249 185.449L41.6849 173.245L53.889 143.605Z" fill="currentColor" />
      </svg>
    </div>
  );
};
