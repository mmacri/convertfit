import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const recoveryProducts = [
  {
    id: 1,
    title: 'Massage Guns',
    description: 'Powerful percussion therapy devices that provide deep tissue massage to relieve muscle soreness, improve blood flow, and accelerate recovery. Perfect for targeted relief and post-workout therapy.',
    image: 'https://ext.same-assets.com/1473042095/2097876052.jpeg',
    link: '/massage-guns'
  },
  {
    id: 2,
    title: 'Foam Rollers',
    description: 'Essential tools for myofascial release and self-massage that help relieve muscle tightness, increase blood flow, and improve flexibility. Ideal for preventing injuries and enhancing recovery.',
    image: 'https://ext.same-assets.com/2108554563/1470587620.jpeg',
    link: '/foam-rollers'
  },
  {
    id: 3,
    title: 'Fitness Bands',
    description: 'Versatile resistance tools that aid in strength training, mobility work, and active recovery. These bands help improve circulation, engage stabilizing muscles, and accelerate the recovery process.',
    image: 'https://ext.same-assets.com/2560824938/1799041335.jpeg',
    link: '/fitness-bands'
  },
  {
    id: 4,
    title: 'Compression Gear',
    description: 'Specially designed garments that apply pressure to your muscles, helping to improve blood circulation, reduce soreness, and speed up recovery between workouts.',
    image: 'https://ext.same-assets.com/3220712056/3156167785.jpeg',
    link: '/compression-gear'
  },
];

export function PopularComparisons() {
  return (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-1 h-6 bg-[#4F46E5]"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2b2c36]">Recovery Product Categories</h2>
        </div>

        <p className="text-gray-600 mb-8">Explore our top-rated fitness recovery tools to help you recover faster, reduce soreness, and improve your performance.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recoveryProducts.map((product) => (
            <Link key={product.id} href={product.link} className="group">
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    unoptimized
                    priority
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-xl mb-2 text-[#4F46E5]">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                  <div className="mt-2 text-[#4F46E5] text-sm font-medium flex items-center">
                    See our top picks
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="text-xs text-[#4F46E5] border-[#4F46E5]">
            Browse all categories <ChevronRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
