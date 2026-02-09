import React from "react";
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Blog | VALYD Homes & Property',
  description: 'Read expert articles, tips, and news about Ghana\'s property market, real estate trends, and home buying advice for diaspora and local clients.',
  keywords: 'Ghana property blog, real estate news Ghana, home buying tips, property market Ghana, diaspora property advice, Valyd Homes and Properties',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Kempinski Style */}
      <section className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8 pt-[72px] pb-10 md:py-0 text-center">
          <p className="text-black/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">Insights & News</p>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Blog
          </h1>
          <div className="w-16 h-px bg-black/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Latest Articles</p>
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
              Coming Soon
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10">
              Our blog is being prepared with expert advice, market updates, property tips, 
              and insights about Ghana's real estate landscape. Check back soon!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
            >
              Get Notified
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
