"use client";

import { useEffect, useState } from "react";
import type { Property } from "@/types/index";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/properties/PropertyCard";
import { motion } from "framer-motion";
import propertiesData from "@/data/properties.json";

// Help TypeScript infer the type
const typedPropertiesData = propertiesData as { properties: Property[] };

export default function ClientPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setProperties(typedPropertiesData.properties);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image and overlays */}
        <div className="absolute inset-0 z-0">
          <img src="/hero.jpg" alt="Properties Hero" className="w-full h-full object-cover object-center" style={{minHeight: '60vh'}} />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        </div>
        <div className="container-custom relative z-10 py-20 flex justify-center items-center">
          <div className="max-w-4xl w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white drop-shadow-lg mt-8 md:mt-16">
                Find Your Dream Home
              </h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
                Discover the best properties for sale and rent in Accra and beyond. All listings are verified and ready for you to move in with peace of mind.
              </p>
              <Button 
                size="lg" 
                className="bg-accent-500 text-white font-bold hover:bg-black hover:text-white transition-colors px-8 py-4"
                asChild
              >
                <Link href="#property-list">
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>


      {/* Properties Section */}
      <section id="property-list" className="py-20 bg-white">
        <div className="container-custom mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 text-accent-500">
              Our Properties
            </h2>
            <p className="text-lg text-gray-600">
              Explore our full range of verified properties for sale and rent. Every listing is fully inspected and legally sound, so you can buy with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-16">
                <p className="text-lg">No properties found at this moment.</p>
              </div>
            ) : (
              properties.map((property: any, index: number) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PropertyCard {...property} image={property.images?.[0] || '/hero.jpg'} />
                </motion.div>
              ))
            )}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <Button 
              asChild 
              size="lg"
              className="bg-black text-white font-bold hover:bg-white hover:text-black transition-colors"
            >
              <Link href="/contact">
                Contact Us for More Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}