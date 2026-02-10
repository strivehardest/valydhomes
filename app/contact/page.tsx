import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | VALYD Homes & Property',
  description: 'Get in touch with VALYD Homes & Property for property inquiries, consultations, and support. Serving Ghana and the diaspora.',
  keywords: 'contact VALYD Homes, Ghana real estate contact, property inquiry Ghana, diaspora property support, Valyd Homes and Properties',
};
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Kempinski Style */}
      <section className="relative flex items-center justify-center min-h-[240px] sm:min-h-[300px] md:min-h-[400px] h-[32vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Contact VALYD Homes"
            className="w-full h-full object-cover object-center sm:object-center md:object-center lg:object-center"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-3 sm:px-8 py-6 sm:py-10 md:py-0 text-center">
          <p className="text-black/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4">Get In Touch</p>
          <h1 className="text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Contact Us
          </h1>
          <div className="w-16 h-px bg-black/20 mx-auto mt-5 sm:mt-8" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Information */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Reach Out</p>
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-8">
                We'd Love to<br />Hear from You
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                Whether you're looking to buy property in Ghana, need verification services, 
                or have questions about our offerings, our team is here to help.
              </p>

              <div className="space-y-6 mb-10">
                <a href="tel:+233508474041" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Phone</p>
                    <p className="text-gray-900 text-lg font-medium">+233 50 847 4041</p>
                  </div>
                </a>
                <a href="tel:+233248582353" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Phone</p>
                    <p className="text-gray-900 text-lg font-medium">+233 24 858 2353</p>
                  </div>
                </a>

                <a href="mailto:info@valydhomes.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300">
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Email</p>
                    <p className="text-gray-900 text-lg font-medium">info@valydhomes.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-gray-200 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-gray-900 text-lg font-medium">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href="https://instagram.com/valydhomes" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://tiktok.com/@valydhomes" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300">
                    <FaTiktok className="h-4 w-4" />
                  </a>
                  <a href="https://wa.me/233270721345" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300">
                    <FaWhatsapp className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12">
              <h3 className="text-2xl font-heading text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2" htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-gray-900 focus:ring-0 transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2" htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-gray-900 focus:ring-0 transition-colors" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-gray-900 focus:ring-0 transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2" htmlFor="phone">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-gray-900 focus:ring-0 transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 focus:border-gray-900 focus:ring-0 transition-colors resize-none" 
                    required 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gray-900 text-white text-sm uppercase tracking-[0.2em] py-4 hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          title="VALYD Homes Location"
          width="100%"
          height="100%"
          className="border-0 w-full h-full grayscale"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Accra%2C%20Ghana&z=14&output=embed"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
