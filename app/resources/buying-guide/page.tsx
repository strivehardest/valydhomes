import React from "react";
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Buying Guide | VALYD Homes & Property',
  description: 'Step-by-step guide to buying property in Ghana. Learn about the process, requirements, and tips for diaspora and local buyers.',
  keywords: 'Ghana property buying guide, how to buy property Ghana, real estate process Ghana, diaspora home buying, property tips Ghana, Valyd Homes and Properties',
};

const steps = [
  {
    number: '01',
    title: 'Define Your Requirements',
    description: 'Clarify your needs, budget, preferred location, and timeline. Consider whether you want land, a house, or an apartment.',
  },
  {
    number: '02',
    title: 'Browse Verified Listings',
    description: 'Explore our curated selection of verified properties or contact us directly with your criteria for personalized recommendations.',
  },
  {
    number: '03',
    title: 'Schedule a Site Visit',
    description: 'Visit properties in person or request a virtual tour with live video. See the neighborhood, ask questions, and get a feel for the area.',
  },
  {
    number: '04',
    title: 'Conduct Due Diligence',
    description: 'We perform thorough legal verification including title search, survey plan confirmation, and encumbrance checks.',
  },
  {
    number: '05',
    title: 'Negotiate & Agree Terms',
    description: 'Once satisfied, negotiate the price and payment terms. We help ensure fair dealing and clear communication.',
  },
  {
    number: '06',
    title: 'Make Secure Payment',
    description: 'Use secure payment methods. We recommend escrow services for added protection, especially for diaspora clients.',
  },
  {
    number: '07',
    title: 'Complete Documentation',
    description: 'Sign the sale agreement, transfer documents, and complete registration at the Lands Commission.',
  },
  {
    number: '08',
    title: 'Receive Keys & Ongoing Support',
    description: 'Collect your original documents, receive your keys, and enjoy our continued support for any future needs.',
  },
];

export default function BuyingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Kempinski Style */}
      <section className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Buying Guide"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8 pt-[72px] pb-10 md:py-0 text-center">
          <p className="text-black/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">Step by Step</p>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Buying Guide
          </h1>
          <div className="w-16 h-px bg-black/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">The Process</p>
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
              How to Buy Property in Ghana
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Buying property in Ghana doesn't have to be complicated. Follow our proven 
              8-step process for a smooth, secure transaction.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="flex gap-6 pb-12 last:pb-0 relative"
              >
                {/* Line connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-px h-full bg-gray-200" />
                )}
                
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 border border-gray-900 flex items-center justify-center text-sm font-medium text-gray-900 bg-white relative z-10">
                  {step.number}
                </div>
                
                {/* Step content */}
                <div className="pt-2">
                  <h3 className="text-xl md:text-2xl font-heading text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 pt-16 border-t border-gray-100">
            <p className="text-gray-600 text-base md:text-lg mb-6">Ready to start your property journey?</p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
            >
              Browse Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
