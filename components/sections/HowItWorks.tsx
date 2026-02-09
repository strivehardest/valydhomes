'use client'

import React from 'react';
import { Search, Phone, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'Browse our curated collection of premium properties tailored to your preferences and investment goals.',
  },
  {
    number: '02',
    icon: Phone,
    title: 'Connect',
    description: 'Schedule a consultation with our expert advisors who will guide you through every detail.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Acquire',
    description: 'Complete your transaction seamlessly with our end-to-end support and legal verification.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">The Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Your Journey to
              <br />
              <span className="italic font-normal text-gray-300">Ownership</span>
            </h2>
            <div className="w-16 h-px bg-white mb-8" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              We've simplified the property acquisition process into three seamless steps, 
              ensuring a premium experience from discovery to possession.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-white font-semibold text-sm uppercase tracking-wider"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

          {/* Right side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex gap-6 p-6 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <span className="text-4xl font-heading font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
