"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { useCurrencyContext } from "@/lib/CurrencyContext";
import type { Property } from "@/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import propertiesData from "@/data/properties.json";

// Help TypeScript infer the type
const typedPropertiesData = propertiesData as {
  properties: Property[];
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const { currency, setCurrency, convert, loading, SYMBOLS, SUPPORTED } = useCurrencyContext();

  useEffect(() => {
    setProperties(typedPropertiesData.properties);
  }, []);

  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>Properties | VALYD Homes & Property</title>
        <meta
          name="description"
          content="Browse our portfolio of homes and projects built for clients in Ghana. See our quality and expertise in past builds."
        />
        <meta
          name="keywords"
          content="Ghana portfolio, home builds Ghana, property showcase, construction Ghana, real estate projects Ghana"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Portfolio | VALYD Homes & Property" />
        <meta
          property="og:description"
          content="Explore our portfolio of homes and projects built for clients in Ghana."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Properties Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for desktop only */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center -mt-20 sm:-mt-16 md:-mt-24 lg:-mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4 md:mb-6">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-4 md:mb-6 px-4 drop-shadow-lg">
            Homes & Projects We've Built
          </h1>
          <div className="w-16 h-px bg-white/50 mx-auto mb-6 md:mb-8" />
          
          {/* Desktop: description and CTAs */}
          <p className="hidden md:block text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-12 px-4 leading-relaxed drop-shadow-md">
            Explore our portfolio of homes, renovations, and custom builds for clients in Accra and beyond. These are not for sale, but showcase our quality and expertise.
          </p>
          
          <div className="hidden md:flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#property-list"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
            >
              Browse Properties
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/80 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet: Clean white section with black text and CTAs */}
      <section className="block md:hidden bg-white py-12 px-6">
        <div className="container mx-auto max-w-lg text-center">
          <p className="text-base text-gray-800 mb-10 leading-relaxed">
            Explore our portfolio of homes, renovations, and custom builds for clients in Accra and beyond. These are not for sale, but showcase our quality and expertise.
          </p>
          
          <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
            <Link
              href="#property-list"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300"
            >
              Browse Properties
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 bg-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROPERTIES ================= */}
      <section id="property-list" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          {/* Currency Selector */}
          <div className="mb-8 flex justify-end">
            <label htmlFor="currency" className="text-gray-700 mr-2 font-medium">Currency:</label>
            <select
              id="currency"
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              className="rounded px-2 py-1 text-white bg-black/40 border"
            >
              {SUPPORTED.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Portfolio
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Past Projects
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These homes and properties were built or renovated for clients. Browse to see our work and contact us for your own custom project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-16">
                <p className="text-lg">No properties found at this moment.</p>
              </div>
            ) : (
              properties.map((property) => (
                <div key={property.id}>
                  <PropertyCard
                    {...property}
                    image={property.images?.[0] || "/hero.jpg"}
                    price={{
                      usd: property.price.usd,
                      converted: currency === 'USD' ? property.price.usd : convert(property.price.usd, currency)
                    }}
                    currency={currency}
                    SYMBOLS={SYMBOLS}
                  />
                </div>
              ))
            )}
          </div>

          <div className="flex justify-center mt-16">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300"
            >
              Contact Us for More Options
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}