import React from "react";
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileCheck, ShieldCheck, HelpCircle, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Resources | VALYD Homes & Property',
  description: 'Access guides, articles, and tools to help you make informed property decisions in Ghana. Resources for buyers, investors, and diaspora clients.',
  keywords: 'Ghana property resources, real estate guides Ghana, property blog Ghana, legal process Ghana, buying guide Ghana, FAQs property Ghana, Valyd Homes and Properties',
};

const resources = [
  {
    title: 'Blog',
    description: 'Read articles and updates about Ghana\'s property market, tips, and news.',
    href: '/resources/blog',
    icon: BookOpen,
  },
  {
    title: 'Buying Guide',
    description: 'Step-by-step guide to buying property in Ghana, from search to ownership.',
    href: '/resources/buying-guide',
    icon: FileCheck,
  },
  {
    title: 'Legal Process',
    description: 'Understand the legal steps, documentation, and registration required.',
    href: '/resources/legal-process',
    icon: ShieldCheck,
  },
  {
    title: 'FAQs',
    description: 'Find answers to frequently asked questions about property in Ghana.',
    href: '/resources/faqs',
    icon: HelpCircle,
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Resources"
            className="w-full h-full object-cover"
          />
          {/* No overlay, show original image */}
        </div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8 pt-[72px] pb-10 md:py-0 text-center">
          <p className="text-black/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Knowledge Center</p>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Resources
          </h1>
          <div className="w-16 h-px bg-black/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Explore</p>
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Find everything you need to buy, own, and manage property in Ghana. 
              Start with our guides, legal process breakdown, and answers to common questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300"
              >
                <resource.icon className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mb-6" />
                <h3 className="text-xl md:text-2xl font-heading text-gray-900 mb-3 flex items-center gap-2">
                  {resource.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
