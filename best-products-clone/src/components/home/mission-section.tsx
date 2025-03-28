import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, BarChart2, CheckCircle } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-1 h-6 bg-[#4F46E5]"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2b2c36]">Our Process</h2>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl text-[#2b2c36]">
            We're committed to providing you with the most reliable, data-driven recommendations for fitness recovery products.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-[#4F46E5]" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-[#2b2c36]">Research & Review</h3>
            <p className="text-gray-600">
              We gather data from thousands of customer reviews, expert opinions, and performance tests to identify top products in each recovery category.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <BarChart2 className="h-6 w-6 text-[#4F46E5]" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-[#2b2c36]">Analysis & Comparison</h3>
            <p className="text-gray-600">
              Our advanced algorithms compare quality, performance, durability, and value to generate objective product rankings tailored to different needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-[#4F46E5]" />
            </div>
            <h3 className="font-semibold text-xl mb-4 text-[#2b2c36]">Recommendations</h3>
            <p className="text-gray-600">
              We provide unbiased, evidence-based recommendations that help you find the perfect recovery products for your specific needs and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
