import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-[#4F46E5] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Recovery Tips & Exclusive Deals</h2>
          <p className="text-indigo-100 mb-8">
            Subscribe to our newsletter to receive the latest recovery tips, product recommendations,
            and exclusive deals straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white text-gray-800 border-none focus:ring-2 focus:ring-indigo-300"
            />
            <Button className="bg-indigo-800 hover:bg-indigo-900 text-white border-none whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs text-indigo-200 mt-4">
            By subscribing, you agree to our privacy policy. We'll never share your information.
          </p>
        </div>
      </div>
    </section>
  );
}
