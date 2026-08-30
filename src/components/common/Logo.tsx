import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'icon' | 'white';
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = 'horizontal',
  height = 36,
}) => {
  const isWhite = variant === 'white';
  const primaryColor = isWhite ? "#FFFFFF" : "#123788";
  const skyColor = isWhite ? "#33CCEC" : "#03BDE3";
  const goldColor = "#EFAC02";

  if (variant === 'icon') {
    return (
      <Link href="/" className={`inline-flex items-center gap-2 group ${className}`}>
        <svg
          height={height}
          viewBox="0 0 252 296"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:scale-105 duration-300"
        >
          {/* Inner Arch */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.2677 47.0032C66.5577 56.6167 83.9787 64.9081 100.912 72.8694C149.324 95.6307 178.366 145.708 174.914 199.383L170.452 268.733L125.943 295.006L125.759 295.113L0.176729 220.987L0 220.883V75.3117L0.174071 75.2068L47.2677 47.0032ZM21.5569 213.753L121.862 272.297L125.004 225.02C128.068 178.919 103.245 135.461 61.98 114.68L21.5569 94.3227V213.753Z"
            fill={primaryColor}
          />
          {/* Outer Dome */}
          <path
            d="M125.944 0.110289L186.995 36.6719C227.02 60.641 251.52 103.867 251.52 150.52V220.883L251.343 220.987L204.914 248.39L207.93 201.507C212.236 134.558 175.964 71.5952 114.989 42.9278C103.966 37.7451 92.7988 32.4488 81.076 26.7578L125.574 0.110289L125.759 0L125.944 0.110289Z"
            fill={primaryColor}
          />
          {/* Diamonds */}
          <path d="M71.134 185.355L100.774 197.559L88.5699 227.199L58.9299 214.995L71.134 185.355Z" fill={goldColor}/>
          <path d="M53.889 143.605L83.529 155.809L71.3249 185.449L41.6849 173.245L53.889 143.605Z" fill={goldColor}/>
        </svg>
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Icon */}
      <svg
        height={height}
        viewBox="0 0 252 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105 duration-300 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.2677 47.0032C66.5577 56.6167 83.9787 64.9081 100.912 72.8694C149.324 95.6307 178.366 145.708 174.914 199.383L170.452 268.733L125.943 295.006L125.759 295.113L0.176729 220.987L0 220.883V75.3117L0.174071 75.2068L47.2677 47.0032ZM21.5569 213.753L121.862 272.297L125.004 225.02C128.068 178.919 103.245 135.461 61.98 114.68L21.5569 94.3227V213.753Z"
          fill={primaryColor}
        />
        <path
          d="M125.944 0.110289L186.995 36.6719C227.02 60.641 251.52 103.867 251.52 150.52V220.883L251.343 220.987L204.914 248.39L207.93 201.507C212.236 134.558 175.964 71.5952 114.989 42.9278C103.966 37.7451 92.7988 32.4488 81.076 26.7578L125.574 0.110289L125.759 0L125.944 0.110289Z"
          fill={primaryColor}
        />
        <path d="M71.134 185.355L100.774 197.559L88.5699 227.199L58.9299 214.995L71.134 185.355Z" fill={goldColor}/>
        <path d="M53.889 143.605L83.529 155.809L71.3249 185.449L41.6849 173.245L53.889 143.605Z" fill={goldColor}/>
      </svg>

      {/* Typography Block */}
      <div className="flex flex-col text-left leading-tight">
        <span
          className="font-cairo font-semibold text-xs tracking-wider"
          style={{ color: skyColor }}
        >
          لجنة الأوقاف والصدقات
        </span>
        <span
          className="font-cairo font-bold tracking-tight text-sm uppercase"
          style={{ color: primaryColor }}
        >
          Lajnatul Awqaaf
        </span>
        <span
          className="font-cairo font-semibold tracking-wider text-[10px] uppercase opacity-90"
          style={{ color: primaryColor }}
        >
          Wassadaqaat
        </span>
      </div>
    </Link>
  );
};
