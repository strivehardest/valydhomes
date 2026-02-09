"use client";

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClientHero() {
  return (
    <section className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] h-[40vh] md:h-[50vh] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Diaspora Hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for desktop only, matching other pages */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-8 pt-0 -mt-28 lg:mt-0 lg:pt-20 pb-6 md:py-0 relative z-10 flex flex-col items-center justify-center text-center">
        <p className="text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4">Diaspora</p>
        <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 leading-tight max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          Verified Homes & Land for the Diaspora
        </h1>
        <div className="w-12 sm:w-16 h-px bg-white/30 mx-auto mb-4 sm:mb-6" />
        <p className="hidden md:block text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-0 md:mb-8 lg:-mt-8 xl:-mt-12">
          Invest confidently from abroad—no guesswork, no stress. Trusted support for Ghanaians and friends of Ghana worldwide.
        </p>
      </div>
    </section>
  );
}
