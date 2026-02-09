import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | VALYD Homes & Property',
  description: 'Learn how VALYD Homes & Property uses cookies and similar technologies on our website.',
  keywords: 'cookie policy, VALYD Homes cookies, website cookies Ghana, tracking technologies, Valyd Homes and Properties',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-4 md:pt-6 pb-2">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Cookie Policy"
            className="w-full h-full object-cover"
          />
        
        </div>
        <div className="relative z-10 text-center px-6 -mt-20 md:-mt-32">
          <p className="text-white/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Legal</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Cookie Policy
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

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Cookies are small text files that are placed on your computer or mobile device when you visit 
              a website. They are widely used to make websites work more efficiently and provide information 
              to the site owners.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              VALYD Homes & Property uses cookies to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg space-y-2 mb-8">
              <li>Ensure the website functions properly</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how visitors use our website</li>
              <li>Improve our website and services</li>
              <li>Provide relevant content and features</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl md:text-2xl font-heading text-gray-900 mt-8 mb-3">Essential Cookies</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              These cookies are necessary for the website to function and cannot be switched off. They are 
              usually set in response to actions you take, such as setting privacy preferences or filling 
              out forms.
            </p>

            <h3 className="text-xl md:text-2xl font-heading text-gray-900 mt-8 mb-3">Analytics Cookies</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              These cookies help us understand how visitors interact with our website by collecting and 
              reporting information anonymously. This helps us improve our website's performance and user 
              experience.
            </p>

            <h3 className="text-xl md:text-2xl font-heading text-gray-900 mt-8 mb-3">Functional Cookies</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              These cookies enable enhanced functionality and personalization, such as remembering your 
              preferences or the region you are in. They may be set by us or by third-party providers whose 
              services we have added to our pages.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Some cookies on our website are set by third-party services that appear on our pages, such 
              as embedded videos, social media buttons, or analytics tools. We do not control how these 
              third parties use cookies.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">5. Managing Cookies</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base md:text-lg space-y-2 mb-8">
              <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
              <li>Delete cookies: You can delete cookies already stored on your device</li>
              <li>Private browsing: Use incognito or private browsing mode</li>
              <li>Third-party tools: Use browser extensions to manage cookies</li>
            </ul>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Please note that disabling cookies may affect the functionality of our website and limit 
              your access to certain features.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">6. Updates to This Policy</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              We may update this Cookie Policy from time to time to reflect changes in technology, 
              legislation, or our data practices. We encourage you to periodically review this page 
              for the latest information.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mt-12 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
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
