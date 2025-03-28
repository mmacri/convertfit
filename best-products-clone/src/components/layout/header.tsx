import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const categories = [
  { name: 'Electronics', href: '/search/electronics' },
  { name: 'Home & Kitchen', href: '/search/kitchen' },
  { name: 'Computers', href: '/search/computers' },
  { name: 'Office Supplies', href: '/search/office' },
  { name: 'Toys & Games', href: '/search/toys' },
  { name: 'Sports & Fitness', href: '/search/sports' },
];

export function Header() {
  return (
    <header className="relative">
      <div className="bg-[#2b2c36] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#52a5c6] flex items-center justify-center rounded">
                  <span className="font-bold text-lg">BP</span>
                </div>
                <div>
                  <div className="font-bold text-sm">Best Products</div>
                  <div className="text-xs">Reviews</div>
                </div>
              </Link>
            </div>

            <div className="relative w-full md:w-64 lg:w-80">
              <Input
                placeholder="Search"
                className="pr-10 rounded-md bg-white text-black"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            <div className="flex gap-5 text-sm">
              <Link href="/categories" className="hover:text-[#52a5c6]">Categories</Link>
              <Link href="/blog" className="hover:text-[#52a5c6]">Online shopping blog</Link>
              <Link href="/deals" className="hover:text-[#52a5c6]">Today's deals</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="bg-white py-2 shadow-sm overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 pb-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="whitespace-nowrap"
              >
                <Badge variant="outline" className="px-4 py-1 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700">
                  {category.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
