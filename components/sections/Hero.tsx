'use client'

import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Brand Content*/}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Small Crest/Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <svg 
            width="72" 
            height="72" 
            viewBox="0 0 40 40" 
            fill="none" 
            className="text-white"
          >
            <path 
              d="M20 2L24 10L32 12L26 18L28 26L20 22L12 26L14 18L8 12L16 10L20 2Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-2"
        >
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading tracking-[0.15em] font-light">
            VALYD
          </h2>
        </motion.div>

        {/* Sub-brand Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white text-sm md:text-base tracking-[0.4em] uppercase mb-4"
        >
          HOMES AND PROPERTY
        </motion.p>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mb-4"
        >
          <div className="w-2 h-2 bg-white rotate-45" />
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-64 md:w-96 h-px bg-white/40 mb-4 origin-center"
        />

        {/* Location Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-white/70 text-[10px] md:text-xs tracking-[0.5em] uppercase"
        >
          ACCRA, GHANA
        </motion.p>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}