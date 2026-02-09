'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Users, Home, Clock, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4 md:mb-6">Begin Your Journey</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
              Ready to Find Your <span className="italic font-normal">Dream Home?</span>
            </h2>
            <div className="w-16 h-px bg-white/40 mx-auto mb-6 md:mb-8" />
            <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
              Whether you're in Ghana or abroad, our dedicated team is here to guide you 
              through every step of your property journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 md:mb-20 px-4 sm:px-0">
              <Link
                href="/properties"
                className="group relative px-6 sm:px-8 py-4 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto sm:min-w-[200px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Properties
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-4 border-2 border-white/60 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 border-t border-white/20"
          >
            {[
              { number: '200+', label: 'Happy Clients', icon: Users },
              { number: '50+', label: 'Properties Sold', icon: Home },
              { number: '15+', label: 'Years Experience', icon: Clock },
              { number: '10+', label: 'Countries Served', icon: Globe },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-center flex flex-col items-center"
              >
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white/60 mb-3" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}