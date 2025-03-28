"use client";

import React from 'react';
import Image, { ImageProps } from 'next/image';

type SafeImageProps = Omit<ImageProps, 'onError'> & {
  fallbackSrc?: string;
};

/**
 * A wrapper around Next.js Image component that handles external images safely
 * by adding unoptimized prop and providing consistent behavior
 */
export function SafeImage({
  src,
  alt,
  fallbackSrc = '/placeholder.jpg',
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = React.useState(src);

  // Always set unoptimized for external URLs to avoid optimization issues
  const isExternalUrl = typeof src === 'string' && (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.includes('same-assets.com')
  );

  // Handle image load error
  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt || "Image"}
      unoptimized={isExternalUrl}
      onError={handleError}
      {...props}
    />
  );
}
