'use client'

import Link from 'next/link';
import { Instagram, ArrowUpRight, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { WhatsAppButtonColorProvider } from '../WhatsAppButton';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
  { name: 'Diaspora', href: '/diaspora' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default function Footer() {
  return (
    <WhatsAppButtonColorProvider value="footer">
      <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top - Always visible in footer */}
      <div className="w-full flex justify-center items-center py-6">
        <button
          onClick={scrollToTop}
          className="group p-3 text-white/60 hover:text-white transition-all duration-300 bg-gray-800 rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-10 h-10 transition-transform group-hover:-translate-y-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
          >
            <path d="M12 20V4M4 12l8-8 8 8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Logo & Brand Section */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <Link href="/" className="inline-block mb-8">
              <img 
                src="/logo.png" 
                alt="VALYD Homes & Property" 
                className="h-32 w-auto brightness-0 invert mx-auto" 
              />
            </Link>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-sm">
              Your trusted partner for premium real estate in Ghana. 
              Verified properties, transparent transactions, and dedicated 
              service for clients worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/valydhomes" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://tiktok.com/@valydhomes" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/233275847041" 
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/resources/blog" className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group">
                  Blog
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/resources/buying-guide" className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group">
                  Buying Guide
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/resources/legal-process" className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group">
                  Legal Process
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/resources/faqs" className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group">
                  FAQs
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Contact</h4>
            <div className="space-y-4 mb-8">
                <a href="tel:+233508474041" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-base md:text-lg">
                <Phone className="w-4 h-4 text-white/50" />
                +233508474041
              </a>
              <a href="tel:+233248582353" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-base md:text-lg">
                <Phone className="w-4 h-4 text-white/50" />
                +233248582353
              </a>
                <a href="mailto:info@valydhomes.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-base md:text-lg">
                <Mail className="w-4 h-4 text-white/50" />
                info@valydhomes.com
              </a>
                <div className="flex items-start gap-3 text-white/80 text-base md:text-lg">
                <MapPin className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" />
                <span>
                  Accra, Ghana
                </span>
              </div>
            </div>

            {/* Newsletter or CTA */}
            <div className="pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm md:text-base uppercase tracking-[0.15em] mb-4">Ready to find your home?</p>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300"
              >
                Explore Properties
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto text-center md:text-left">
              <div className="text-white/40 text-sm md:text-base">
                © {new Date().getFullYear()} VALYD Homes & Property Ltd. All rights reserved.
              </div>
            </div>
            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-white/40 hover:text-white/70 transition-colors text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Credits */}
            <div className="text-white/40 text-sm md:text-base">
              Crafted by{' '}
              <a
                href="https://celestialwebsolutions.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Celestial Web Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </WhatsAppButtonColorProvider>
  );
}