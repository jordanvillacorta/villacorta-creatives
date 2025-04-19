import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ImageWithFallback({
  src,
  alt,
  fallback = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&q=80',
  className = '',
  width,
  height
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={`${className} transition-opacity duration-300`}
      width={width}
      height={height}
      loading="lazy"
      onError={() => setError(true)}
      style={{ 
        opacity: 1,
        objectFit: 'cover'
      }}
    />
  );
}