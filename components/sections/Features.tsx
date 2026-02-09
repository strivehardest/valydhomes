'use client'

import React from 'react';
import { Home, Shield, Handshake, Globe, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Home,
    title: 'Curated Properties',
    description: 'Hand-selected premium properties vetted for quality, location, and investment potential.',
  },
  {
    icon: Shield,
    title: 'Verified & Secure',
    description: 'Every property undergoes rigorous legal verification ensuring complete peace of mind.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients worldwide with seamless remote property acquisition services.',
  },
  {
    icon: Handshake,
    title: 'Concierge Service',
    description: 'Dedicated personal advisors guiding you through every step of your journey.',
  },
  {
    icon: Award,
    title: 'Premium Standards',
    description: 'Uncompromising commitment to excellence in every transaction we facilitate.',
  },
  {
    icon: Clock,
    title: 'Efficient Process',
    description: 'Streamlined procedures ensuring swift and hassle-free property transactions.',
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            The VALYD <span className="italic font-normal">Difference</span>
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience real estate reimagined. We combine local expertise with 
            international standards to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-8 inline-flex">
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-gray-700 group-hover:text-gray-900 transition-colors duration-500" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-gray-100 group-hover:border-gray-300 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
