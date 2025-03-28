import React from 'react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{
          backgroundImage: `url(https://ext.same-assets.com/3818724682/950604013.jpeg)`
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover the Best Home Fitness Recovery Products</h1>
          <p className="text-lg opacity-90 max-w-xl">
            Home fitness recovery is essential for athletes, fitness enthusiasts, and anyone looking to enhance their wellbeing. The right recovery tools can significantly reduce muscle soreness, improve flexibility, and boost overall performance.
          </p>
          <p className="text-base mt-4 text-indigo-100">
            We curate and compare top products based on quality, user reviews, and price to help you make informed decisions.
          </p>
          <Link href="#products" className="mt-6 bg-white text-[#4F46E5] hover:bg-opacity-90 transition-colors font-medium px-6 py-3 rounded-md w-fit text-center">
            Explore Top Picks
          </Link>
        </div>
      </div>

      {/* Disclosure */}
      <div className="absolute bottom-0 left-0 w-full bg-black/20 backdrop-blur-sm py-2">
        <div className="container mx-auto px-4">
          <p className="text-xs text-white">Affiliate Disclosure: We may earn commissions from qualifying purchases at no cost to you.</p>
        </div>
      </div>
    </div>
  );
}
