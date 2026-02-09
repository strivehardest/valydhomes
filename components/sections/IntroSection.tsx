'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function IntroSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-10">
        {/* Main Content Grid - Kempinski Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-gray-900 leading-[1.1] mb-8">
              VALYD Homes &<br />Property Accra
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Step into our world of premium real estate, conveniently serving clients 
              across Ghana and the diaspora. With carefully curated properties and 
              verified land investments, discover your pathway to property ownership 
              in the heart of Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="mailto:info@valydhomes.com"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@valydhomes.com</span>
              </a>
              <a 
                href="tel:+233270721345"
                className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+233 27 072 1345</span>
              </a>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-gray-900 font-medium text-sm uppercase tracking-[0.15em]"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

          {/* Right - Logo/Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center justify-center lg:justify-end"
          >
            <div className="text-center py-12 px-8 border-l border-gray-200">
              <img
                src="/logo.png"
                alt="VALYD Homes & Property"
                className="h-28 md:h-36 w-auto mx-auto mb-8"
              />
              <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase">
                Accra, Ghana
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
