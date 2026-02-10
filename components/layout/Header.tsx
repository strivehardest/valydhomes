"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
  { name: 'Diaspora', href: '/diaspora' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
]


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${scrolled
            ? 'bg-white'
            : 'bg-transparent'}
        `}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 py-5">
          <div className="flex items-center justify-between w-full">
            {/* Left - Hamburger Menu */}
            <div className="flex items-center gap-4 w-[48px] md:w-[120px]">
              <button
                type="button"
                className={`flex flex-col gap-1.5 p-1 transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <span className={`block w-6 h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                <span className={`block w-6 h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
              </button>
            </div>
            {/* Center - Brand Logo */}
            <Link 
              href="/" 
              className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
              style={{height: '56px'}}
            >
              <img
                src="/logo.png"
                alt="VALYD Homes & Property Logo"
                className={`h-10 w-auto md:h-20 ${!scrolled ? 'filter brightness-0 invert' : ''}`}
                style={{maxHeight: '80px'}}
              />
            </Link>
            {/* Right - Contact Button */}
            <div className="flex items-center justify-end w-[48px] md:w-[120px]">
              <Link
                href="/contact"
                className={`
                  px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-300 border
                  ${scrolled
                    ? 'bg-gray-900 text-white border-gray-900 hover:bg-white hover:text-gray-900'
                    : 'bg-white text-gray-900 border-white hover:bg-transparent hover:text-white'}
                `}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Menu Overlay - Kempinski Style */}
      <div 
        className={`
          fixed inset-0 z-[100] bg-[#1a1a1a] transform transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 md:px-10 py-5">
            {/* Close Button */}
            <button
              type="button"
              className="flex flex-col gap-1.5 p-1 text-white hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Brand */}
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute left-1/2 transform -translate-x-1/2 text-white"
            >
              <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase font-medium">
                VALYD HOMES & PROPERTY
              </span>
            </Link>

            {/* Placeholder for balance */}
            <div className="w-6"></div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto">
            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-start px-6 md:px-10 lg:px-20 py-10 pt-6 lg:pt-16">
              <nav className="space-y-0">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group block py-4 border-b border-white/10 first:border-t"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ 
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.5s ease ${index * 0.05 + 0.2}s, transform 0.5s ease ${index * 0.05 + 0.2}s`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-4xl md:text-5xl lg:text-6xl font-heading text-white group-hover:text-white/60 transition-colors duration-300">
                        {item.name}
                      </span>
                      <ArrowRight className="h-6 w-6 text-white/30 transform translate-x-0 group-hover:translate-x-2 group-hover:text-white transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info Sidebar */}
            <div 
              className="lg:w-[400px] bg-[#111] p-6 md:p-10 lg:p-12 flex flex-col justify-center"
              style={{ 
                opacity: mobileMenuOpen ? 1 : 0,
                transition: 'opacity 0.5s ease 0.4s'
              }}
            >
              <div className="space-y-10">
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-6">Contact</p>
                  <div className="space-y-4">
                    <a href="tel:+233508474041" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                      <Phone className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      <span className="text-sm">+233 50 847 4041</span>
                    </a>
                    <a href="tel:+233248582353" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                      <Phone className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      <span className="text-sm">+233 24 858 2353</span>
                    </a>
                    <a href="mailto:info@valydhomes.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group">
                      <Mail className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      <span className="text-sm">info@valydhomes.com</span>
                    </a>
                    <div className="flex items-start gap-4 text-white/60">
                      <MapPin className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Accra, Ghana</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-6">Follow</p>
                  <div className="flex gap-6">
                    <a href="https://instagram.com/valydhomes" className="text-white/60 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                    <a href="https://tiktok.com/@valydhomes" className="text-white/60 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                      TikTok
                    </a>
                  </div>
                </div>

                <Link
                  href="/properties"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-gray-900 font-medium text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-colors"
                >
                  Explore Properties
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}