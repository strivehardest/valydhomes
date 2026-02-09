
"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PropertyCard from '@/components/properties/PropertyCard'
import { useCurrencyContext } from '@/lib/CurrencyContext'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

import propertiesData from "@/data/properties.json";

export default function FeaturedProperties() {
  const featuredProperties = propertiesData.properties
    .filter((property: any) => property.featured)
    .map((property: any) => ({
      ...property,
      image: property.images?.[0] || "/hero.jpg",
    }));

  const { currency, setCurrency, convert, loading, SYMBOLS, SUPPORTED } = useCurrencyContext();

  return (
    <section className="py-24 md:py-32 bg-[#f8f7f5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-200 to-transparent rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-0"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Featured <span className="italic font-normal">Projects</span>
            </h2>
            <div className="w-16 h-px bg-gray-900" />
            <p className="text-lg text-gray-600 max-w-2xl mt-4">
              These homes and properties were built or renovated for clients. Browse to see our work and contact us for your own custom project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/properties"
              className="group inline-flex items-center gap-3 text-gray-900 font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300"
            >
              View All Properties
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Currency Selector */}
        <div className="mb-8 flex justify-end">
          <label htmlFor="currency" className="text-gray-700 mr-2 font-medium">Currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            className="rounded px-2 py-1 border"
          >
            {SUPPORTED.map(cur => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-0 group"
            >
              <PropertyCard
                {...property}
                price={{
                  usd: property.price.usd,
                  converted: currency === 'USD' ? property.price.usd : convert(property.price.usd, currency)
                }}
                currency={currency}
                SYMBOLS={SYMBOLS}
                homepage
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
          >
            Request Custom Search
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}