import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Science Behind Muscle Recovery',
    excerpt: 'Understand the physiological processes behind muscle recovery and how to optimize them for better results.',
    image: 'https://ext.same-assets.com/198595764/1658350751.jpeg',
    date: '03.15.2023',
    author: {
      name: 'Dr. Sarah Johnson',
      avatar: 'https://ext.same-assets.com/2783942035/2491380635.jpeg'
    },
    url: '/blog/science-behind-muscle-recovery'
  },
  {
    id: 2,
    title: 'How to Choose the Right Massage Gun',
    excerpt: 'Discover the key features to consider when selecting a massage gun for your specific recovery needs.',
    image: 'https://ext.same-assets.com/1926211595/4269912841.jpeg',
    date: '05.03.2023',
    author: {
      name: 'Mike Trainer',
      avatar: 'https://ext.same-assets.com/2783942035/2491380635.jpeg'
    },
    url: '/blog/choose-the-right-massage-gun'
  },
  {
    id: 3,
    title: 'Essential Recovery Routines for Runners',
    excerpt: 'Follow these research-backed recovery routines to enhance performance and prevent common running injuries.',
    image: 'https://ext.same-assets.com/3962596208/3301349755.jpeg',
    date: '06.21.2023',
    author: {
      name: 'Emma Walker',
      avatar: 'https://ext.same-assets.com/2783942035/2491380635.jpeg'
    },
    url: '/blog/recovery-routines-for-runners'
  },
  {
    id: 4,
    title: 'Foam Rolling Techniques for Every Muscle Group',
    excerpt: 'Learn the proper techniques for foam rolling each major muscle group to maximize your recovery benefits.',
    image: 'https://ext.same-assets.com/3643112882/751857337.jpeg',
    date: '07.10.2023',
    author: {
      name: 'Alex Chen',
      avatar: 'https://ext.same-assets.com/2783942035/2491380635.jpeg'
    },
    url: '/blog/foam-rolling-techniques'
  }
];

export function LatestArticles() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-1 h-6 bg-[#4F46E5]"></div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#2b2c36]">Latest Recovery Tips</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={article.url}>
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
                <div className="relative h-[160px] w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    unoptimized
                    priority
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2 text-[#2b2c36]">{article.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                    <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-gray-500">
                    {article.author.name} | {article.date}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="text-sm text-[#4F46E5] border-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-colors">
            View All Articles
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
