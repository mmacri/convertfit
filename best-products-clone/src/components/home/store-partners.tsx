import React from 'react';
import Image from 'next/image';

const partnerLogos = [
  {
    id: 1,
    name: 'Amazon',
    logo: 'https://ext.same-assets.com/3820534842/1135571697.svg+xml',
    alt: 'Amazon logo'
  },
  {
    id: 2,
    name: 'Ebay',
    logo: 'https://ext.same-assets.com/4226346562/1108852876.svg+xml',
    alt: 'Ebay logo'
  },
  {
    id: 3,
    name: 'Best Buy',
    logo: 'https://ext.same-assets.com/2748843239/2806461479.svg+xml',
    alt: 'Best Buy logo'
  },
  {
    id: 4,
    name: 'Walmart',
    logo: 'https://ext.same-assets.com/3492640081/2140349133.svg+xml',
    alt: 'Walmart logo'
  },
  {
    id: 5,
    name: 'Macys',
    logo: 'https://ext.same-assets.com/601799295/1150227489.svg+xml',
    alt: 'Macys logo'
  },
  {
    id: 6,
    name: 'Wayfair',
    logo: 'https://ext.same-assets.com/4158624715/4005519887.svg+xml',
    alt: 'Wayfair logo'
  }
];

export function StorePartners() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-1 h-6 bg-[#52a5c6]"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2b2c36]">
            Analyzing millions of products from leading online stores
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow h-24"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
