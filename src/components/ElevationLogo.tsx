import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

export default function ElevationLogo({ className = "", size = 42 }: LogoProps) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/logo/Gemini_Generated_Image_kawwovkawwovkaww-modified.png"
        alt="Elevation Engineering Logo"
        className="w-full h-full object-contain drop-shadow-xs"
      />
    </div>
  );
}
