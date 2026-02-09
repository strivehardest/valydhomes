import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | VALYD Homes & Property',
  description: 'Learn how VALYD Homes & Property collects, uses, and protects your personal information.',
  keywords: 'privacy policy, VALYD Homes privacy, data protection Ghana, personal information, Valyd Homes and Properties',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section  */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-4 md:pt-6 pb-2">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
        
        </div>
        <div className="relative z-10 text-center px-6 -mt-20 md:-mt-32">
          <p className="text-white/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Privacy Policy
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

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              We collect information you provide directly to us, such as when you fill out a contact form, 
              request property information, or communicate with us via phone, email, or WhatsApp. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg space-y-2 mb-8">
              <li>Name and contact information (email address, phone number)</li>
              <li>Property preferences and requirements</li>
              <li>Location information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg space-y-2 mb-8">
              <li>Respond to your inquiries and provide property information</li>
              <li>Send you updates about properties that match your criteria</li>
              <li>Process transactions and provide our services</li>
              <li>Improve our website and services</li>
              <li>Communicate with you about our services, promotions, and news</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information with trusted partners who assist us in operating our website, conducting our business, 
              or servicing you, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">4. Data Security</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
              is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg space-y-2 mb-8">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">6. Contact Us</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
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
