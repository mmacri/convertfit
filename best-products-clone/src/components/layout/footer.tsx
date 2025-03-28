import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const categories = [
  { name: 'Monitors', href: '/monitors' },
  { name: 'Cordless-Vacuums', href: '/cordless-vacuums' },
  { name: 'Drills', href: '/drills' },
  { name: 'Robotic-Vacuums', href: '/robotic-vacuums' },
  { name: 'Gaming-Chairs', href: '/gaming-chairs' },
  { name: 'Earbuds', href: '/earbuds' },
];

const contactLinks = [
  { name: 'Contact', href: '/page/contact' },
  { name: 'Privacy Policy', href: '/page/privacy-policy' },
  { name: 'Terms Of Service', href: '/page/terms-of-service' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/page/about' }
];

export function Footer() {
  return (
    <footer className="bg-[#2b2c36] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="text-gray-300 hover:text-white text-sm">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="text-gray-300 text-sm">Do not sell or share my personal data</li>
            </ul>
          </div>

          {/* Logo and Copyright */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#52a5c6] flex items-center justify-center rounded">
                <span className="font-bold text-lg">BP</span>
              </div>
              <div>
                <div className="font-bold text-sm">Best Products</div>
                <div className="text-xs">Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <button className="flex items-center gap-2 bg-transparent text-white border border-white/30 px-3 py-1 rounded">
                <Image
                  src="https://ext.same-assets.com/4243236498/1305895203.jpeg"
                  alt="United States"
                  width={20}
                  height={15}
                  className="object-cover"
                />
                United States
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-8">
              Amazon, Amazon Prime, the Amazon logo and Amazon Prime logo are trademarks of Amazon.com, Inc. or its affiliates
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Copyright © 2025 by BestProductsReviews.com
            </p>
          </div>
        </div>

        {/* Cookie Policy */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-xs text-gray-400 flex flex-col sm:flex-row justify-between gap-4">
          <p>
            We use cookies to enhance your experience with us. To learn more - please refer to our privacy policy.
          </p>
          <button className="bg-white text-black py-1 px-4 rounded text-xs sm:self-start">
            OK
          </button>
        </div>
      </div>
    </footer>
  );
}
