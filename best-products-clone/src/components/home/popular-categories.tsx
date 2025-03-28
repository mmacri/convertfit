import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'Computers & accessories',
    image: 'https://ext.same-assets.com/2651616194/3622592620.jpeg',
    href: '/search/computers-accessories'
  },
  {
    id: 2,
    name: 'Home & kitchen',
    image: 'https://ext.same-assets.com/1193823511/2166500063.jpeg',
    href: '/search/home-kitchen'
  },
  {
    id: 3,
    name: 'Cell phones & accessories',
    image: 'https://ext.same-assets.com/105716399/4182124987.jpeg',
    href: '/search/cell-phones-accessories'
  },
  {
    id: 4,
    name: 'Automotive',
    image: 'https://ext.same-assets.com/3004907062/3003578169.jpeg',
    href: '/search/automotive'
  },
  {
    id: 5,
    name: 'Sports & fitness',
    image: 'https://ext.same-assets.com/3000214433/4137400454.jpeg',
    href: '/search/sports-fitness'
  },
  {
    id: 6,
    name: 'Home improvement',
    image: 'https://ext.same-assets.com/1148592906/3299873942.jpeg',
    href: '/search/home-improvement'
  },
  {
    id: 7,
    name: 'Best health & household',
    image: 'https://ext.same-assets.com/1782631279/2734196142.jpeg',
    href: '/search/health-household'
  },
  {
    id: 8,
    name: 'Appliances',
    image: 'https://ext.same-assets.com/1315866954/22745270.jpeg',
    href: '/search/appliances'
  },
  {
    id: 9,
    name: 'Beauty & personal care',
    image: 'https://ext.same-assets.com/582727345/1694866675.jpeg',
    href: '/search/beauty-personal-care'
  },
  {
    id: 10,
    name: 'Outdoor recreation',
    image: 'https://ext.same-assets.com/1926866596/1251873443.jpeg',
    href: '/search/outdoor-recreation'
  },
  {
    id: 11,
    name: 'Toys & games',
    image: 'https://ext.same-assets.com/1919703170/2065083688.jpeg',
    href: '/search/toys-games'
  },
  {
    id: 12,
    name: 'Furniture',
    image: 'https://ext.same-assets.com/3500428281/3395427636.jpeg',
    href: '/search/furniture'
  }
];

export function PopularCategories() {
  return (
    <section className="py-10 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-1 h-6 bg-[#52a5c6]"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2b2c36]">Popular categories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="rounded-lg overflow-hidden relative h-[150px] hover:shadow-md transition-shadow group">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  priority={category.id <= 4} // Only prioritize first 4 images
                  className="object-cover z-0 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <p className="text-white font-medium text-center text-sm sm:text-base px-2">
                    {category.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
