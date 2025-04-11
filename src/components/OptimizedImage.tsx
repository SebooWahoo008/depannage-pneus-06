"use client";

import React, { useState, memo } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

// Optimisation du shimmer avec une taille réduite
const shimmer = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#f6f6f6"/>
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const blurUrl = `data:image/svg+xml;base64,${toBase64(shimmer)}`;

const OptimizedImage = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false 
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={blurUrl}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 