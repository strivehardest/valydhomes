import React from "react";
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileCheck, Search, FileText, DollarSign, FileSignature, Building, Key } from "lucide-react";

export const metadata: Metadata = {
  title: 'Legal Process | VALYD Homes & Property',
  description: 'Understand the legal steps, documentation, and registration required to buy property in Ghana. Essential info for diaspora and local buyers.',
  keywords: 'Ghana property legal process, real estate law Ghana, property registration Ghana, legal steps home buying, diaspora property law, Valyd Homes and Properties',
};

const legalSteps = [
  {
    icon: Search,
    title: 'Title Search',
    description: 'Conduct a thorough search at the Lands Commission to verify ownership, check for encumbrances, and confirm the seller\'s right to sell.',
  },
  {
    icon: FileCheck,
    title: 'Due Diligence',
    description: 'Engage qualified legal professionals to verify all documentation, survey plans, and ensure compliance with planning regulations.',
  },
  {
    icon: FileText,
    title: 'Draft Sale Agreement',
    description: 'Prepare and review the sale agreement detailing terms, price, payment schedule, and conditions of the transaction.',
  },
  {
    icon: DollarSign,
    title: 'Payment & Receipt',
    description: 'Make payment as per the agreed terms and obtain official receipts. Consider using escrow services for added security.',
  },
  {
    icon: FileSignature,
    title: 'Transfer Documents',
    description: 'Prepare and execute transfer documents including the deed of assignment or conveyance, properly witnessed and notarized.',
  },
  {
    icon: Building,
    title: 'Lands Commission Registration',
    description: 'Submit documents for registration at the Lands Commission. This formalizes your ownership and updates public records.',
  },
  {
    icon: Key,
    title: 'Collect Documents & Keys',
    description: 'Receive your registered documents, original title certificate, and keys to your property. Keep all documents safe.',
  },
];

const documents = [
  'Valid identification (Passport or Ghana Card)',
  'Proof of address',
  'Sale/Purchase agreement',
  'Land title certificate',
  'Site plan and survey documents',
  'Tax clearance certificate',
  'Proof of payment receipts',
  'Transfer documents (deed of assignment)',
];

export default function LegalProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Kempinski Style */}
      <section className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Legal Process"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-8 pt-[72px] pb-10 md:py-0 text-center">
          <p className="text-black/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">Documentation & Law</p>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Legal Process
          </h1>
          <div className="w-16 h-px bg-black/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Legal Steps */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Understanding The Law</p>
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
              Legal Steps to Property Ownership
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Understanding Ghana's property laws and registration process is essential. 
              Here's what you need to know about the legal journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {legalSteps.map((step, index) => (
              <div 
                key={step.title}
                className="border border-gray-200 p-8 hover:border-gray-900 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs text-gray-400 font-medium">0{index + 1}</span>
                  <step.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Documentation</p>
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
                Required Documents
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Ensure you have these documents ready for a smooth transaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200"
                >
                  <div className="w-6 h-6 border border-gray-900 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-base">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <p className="text-gray-600 text-base md:text-lg mb-6">Need help with the legal process?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm tracking-wider uppercase hover:bg-gray-800 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
