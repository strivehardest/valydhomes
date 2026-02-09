'use client'

import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Kwame Mensah',
    location: 'London, UK',
    role: 'Diaspora Investor',
    text: 'As someone living in the UK, I was nervous about buying land in Ghana. VALYD made the entire process seamless. They verified everything, sent me regular updates with photos, and handled all the paperwork. I finally own land back home!',
  },
  {
    name: 'Akosua Boateng',
    location: 'New York, USA',
    role: 'Property Buyer',
    text: 'The diaspora support from VALYD is exceptional. They understood my concerns about investing from abroad and went above and beyond to ensure I was comfortable at every stage. Highly recommended!',
  },
  {
    name: 'Michael Owusu',
    location: 'Accra, Ghana',
    role: 'Homeowner',
    text: 'VALYD helped me find the perfect family home in East Legon. Their verification process gave me peace of mind, and their team was professional throughout. This is how real estate should be done in Ghana.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Client <span className="italic font-normal">Stories</span>
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto" />
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Large Quote */}
            <Quote className="w-12 h-12 text-gray-200 mx-auto mb-8" />
            
            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-heading leading-relaxed mb-10">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-xl font-heading font-bold mb-4">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-lg font-heading font-bold text-gray-900">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gray-900 text-gray-900" />
                ))}
              </div>
              <span className="text-gray-900 font-semibold ml-2">4.9/5</span>
              <span className="text-gray-500">Rating</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300" />
            <div className="text-gray-600">
              <span className="text-gray-900 font-semibold">200+</span> Verified Reviews
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300" />
            <div className="text-gray-600">
              <span className="text-gray-900 font-semibold">98%</span> Client Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}