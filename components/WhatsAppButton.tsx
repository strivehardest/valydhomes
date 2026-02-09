'use client'


import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import React, { createContext, useContext } from 'react';

type WhatsAppButtonColor = 'footer' | 'default';
const WhatsAppButtonColorContext = createContext<WhatsAppButtonColor>('default');
export const WhatsAppButtonColorProvider = WhatsAppButtonColorContext.Provider;

export default function WhatsAppButton() {
  const colorContext = useContext(WhatsAppButtonColorContext);
  const whatsappNumber = '233270721345';
  const message = 'Hello VALYD Homes, I would like to schedule a consultation.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Set color based on context
  const colorClass = colorContext === 'footer'
    ? 'bg-white text-[#25D366] hover:bg-gray-100'
    : 'bg-gray-200 text-[#25D366] hover:bg-gray-300';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-50 bottom-32 right-6 sm:bottom-24 sm:right-8 rounded-full shadow-lg flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-colors duration-200 group ${colorClass}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 0.9, 1.05, 1], opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7, type: 'spring', bounce: 0.5 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 0 8px #25D36633' }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}