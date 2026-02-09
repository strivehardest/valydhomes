import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | VALYD Homes & Property',
  description: 'Read the terms and conditions for using VALYD Homes & Property services and website.',
  keywords: 'terms of service, VALYD Homes terms, real estate terms Ghana, service agreement, Valyd Homes and Properties',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-4 md:pt-6 pb-2">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Terms of Service"
            className="w-full h-full object-cover"
          />
        
        </div>
        <div className="relative z-10 text-center px-6 -mt-20 md:-mt-32">
          <p className="text-white/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Terms of Service
          </h1>
          <div className="w-16 h-px bg-white/40 mx-auto mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Last updated: February 2026
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              By accessing and using the VALYD Homes & Property website and services, you accept and agree to be 
              bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">2. Our Services</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              VALYD Homes & Property provides real estate services including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg space-y-2 mb-8">
              <li>Property sales and acquisition assistance</li>
              <li>Land verification and due diligence</li>
              <li>Legal documentation support</li>
              <li>Property management advisory</li>
              <li>Virtual tours and property showcasing</li>
              <li>Diaspora-focused real estate services</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">3. Property Information</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              While we strive to provide accurate property information, all details including prices, availability, 
              and specifications are subject to change without notice. We recommend verifying all information 
              directly with our team before making any decisions.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg space-y-2 mb-8">
              <li>Provide accurate and truthful information</li>
              <li>Use the website and services lawfully</li>
              <li>Respect intellectual property rights</li>
              <li>Not engage in fraudulent activities</li>
              <li>Maintain confidentiality of any account credentials</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              All property transactions are subject to separate purchase agreements. Payment terms, including 
              deposits, installment plans, and final payments, will be clearly outlined in individual contracts. 
              We recommend reviewing all payment terms carefully before proceeding.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              VALYD Homes & Property shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from the use of our services. Our total liability shall not exceed the amount paid 
              for the specific service in question.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              All content on this website, including text, images, logos, and design elements, is the property 
              of VALYD Homes & Property and is protected by copyright and trademark laws. Unauthorized use is 
              strictly prohibited.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">8. Governing Law</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              These Terms of Service shall be governed by and construed in accordance with the laws of the 
              Republic of Ghana. Any disputes arising from these terms shall be subject to the exclusive 
              jurisdiction of the courts of Ghana.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              immediately upon posting to the website. Continued use of our services after changes constitutes 
              acceptance of the updated terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
              <strong>Email:</strong> info@valydhomes.com<br />
              <strong>Phone:</strong> +233 27 072 1345<br />
              <strong>Address:</strong> Accra, Ghana
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
