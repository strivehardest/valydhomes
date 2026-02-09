"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, 
  Globe, 
  FileCheck, 
  Clock, 
  Shield,
  Home,
  DollarSign,
  UserCheck,
  MapPin,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  Video,
  ArrowRight
} from "lucide-react";

const faqCategories = [
  {
    category: "General Information",
    icon: HelpCircle,
    faqs: [
      {
        question: "What is VALYD Homes & Property?",
        answer: "VALYD Homes & Property Ltd. is a trusted Ghanaian real estate company specializing in land acquisition, residential developments, property sales, and advisory services. We focus on helping diaspora and local clients make safe, informed property decisions through transparent processes and verified documentation.",
      },
      {
        question: "What does VALYD stand for?",
        answer: "VALYD stands for Value, Assurance, Legitimacy, Yield, and Development—the five core principles that guide every project we undertake. These values ensure you receive properties that are legally sound, valuable, and positioned for long-term growth.",
      },
      {
        question: "Where are your properties located?",
        answer: "Our properties are located in prime areas across Greater Accra, including East Legon, Oyarifa, Adenta, Tsopoli, and other strategic locations. We carefully select areas with strong infrastructure, accessibility, and growth potential.",
      }
    ]
  },
  {
    category: "Buying Process",
    icon: FileCheck,
    faqs: [
      {
        question: "What documents are needed to buy property?",
        answer: "You will need: a valid ID (passport or Ghana Card), proof of address, sale/purchase agreement, land title certificate, site plan, tax clearance certificate, and proof of payment. We guide you through every document and explain each requirement clearly.",
      },
      {
        question: "How long does the buying process take?",
        answer: "The typical timeline is 1-3 months, depending on due diligence complexity, documentation verification, and land registration processes. For diaspora clients, we provide regular updates and can work around different time zones to ensure smooth progress.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers (local and international), mobile money, cash payments, and offer flexible payment plans. For diaspora clients, we facilitate secure international transfers and can arrange escrow services for added protection.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes! We offer flexible payment plans tailored to your budget, including monthly installments over 6-24 months. We work with you to create a payment schedule that fits your financial situation without hidden fees or surprise charges.",
      }
    ]
  },
  {
    category: "For Diaspora Clients",
    icon: Globe,
    faqs: [
      {
        question: "Can foreigners buy property in Ghana?",
        answer: "Yes, foreigners can buy property in Ghana. Non-citizens typically acquire properties through leasehold arrangements (usually 50-99 years), which are legally recognized and renewable. We handle all documentation to ensure your rights are fully protected.",
      },
      {
        question: "Is it safe to buy property remotely from abroad?",
        answer: "Absolutely! We specialize in serving diaspora clients. We provide virtual tours, video updates, comprehensive verification reports, and can facilitate secure escrow payments. Our team acts as your eyes and hands on the ground, ensuring every step is transparent and secure.",
      },
      {
        question: "How do I verify property authenticity from overseas?",
        answer: "We conduct thorough legal verification including land title checks, survey plan verification, site inspections, and ownership confirmation. You receive detailed reports with photos, videos, and legal documentation. We also offer live video site visits so you can see everything in real-time.",
      },
      {
        question: "Do you provide property management services?",
        answer: "Yes! We offer comprehensive property management including maintenance coordination, rent collection (if renting out), security oversight, and regular property inspections. We keep you informed with monthly reports and photos.",
      }
    ]
  },
  {
    category: "Legal & Documentation",
    icon: Shield,
    faqs: [
      {
        question: "How do I verify land title authenticity?",
        answer: "We verify all land titles through the Lands Commission, conduct site inspections, review historical ownership records, and engage legal professionals for due diligence. You receive a comprehensive verification report before making any payment.",
      },
      {
        question: "What is the difference between freehold and leasehold?",
        answer: "Freehold means you own the land indefinitely (typically for Ghanaian citizens). Leasehold means you lease the land for a specified period (50-99 years for non-citizens), with renewal options. Both are legally recognized and we ensure proper documentation for either type.",
      },
      {
        question: "Are there additional costs beyond the property price?",
        answer: "Yes, budget for legal fees (1-2% of property value), registration fees, stamp duty, survey costs, and agent commission if applicable. We provide a detailed cost breakdown upfront so you know exactly what to expect—no surprises.",
      },
      {
        question: "How long does land registration take?",
        answer: "Land registration typically takes 2-6 months depending on the location and documentation completeness. We handle all submissions and follow-ups with the Lands Commission, keeping you updated throughout the process.",
      }
    ]
  },
  {
    category: "Support & Services",
    icon: HeartHandshake,
    faqs: [
      {
        question: "What post-purchase support do you provide?",
        answer: "We offer ongoing support including property management, maintenance coordination, construction oversight, tenant sourcing, and advisory services. Our relationship doesn't end at purchase—we're with you for the long term.",
      },
      {
        question: "Can you help with property development/construction?",
        answer: "Yes! We connect you with trusted architects, engineers, and contractors. We can oversee your construction project, conduct regular site inspections, and provide photo/video updates. We ensure quality control and timeline adherence.",
      },
      {
        question: "How do I schedule a consultation?",
        answer: "You can reach us via WhatsApp, phone, email, or through our website contact form. We offer free initial consultations via video call to discuss your needs, answer questions, and explain our process. No pressure, just honest conversation.",
      },
      {
        question: "Do you provide virtual property tours?",
        answer: "Yes! We provide high-quality video tours, drone footage, live video walkthroughs, and regular photo updates. You can request specific angles, ask questions in real-time, and get a comprehensive view of properties from anywhere in the world.",
      }
    ]
  }
];

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex items-center justify-between gap-4 hover:text-gray-600 transition-colors"
      >
        <h3 className="text-lg md:text-xl font-medium text-gray-900 pr-4">{faq.question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive */}
      <section className="relative flex items-center justify-center min-h-[220px] sm:min-h-[300px] md:min-h-[400px] h-[32vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="FAQs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-3 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-[72px] pb-6 sm:pb-10 md:py-0 text-center">
          <p className="text-black/70 text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase mb-3 sm:mb-4">Common Questions</p>
          <h1 className="text-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading leading-tight">
            FAQs
          </h1>
          <div className="w-12 sm:w-16 h-px bg-black/20 mx-auto mt-6 sm:mt-8" />
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Get Answers</p>
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Everything you need to know about buying, owning, and investing in 
              property in Ghana with VALYD.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-16">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-900">
                  <category.icon className="h-6 w-6 text-gray-900" />
                  <h2 className="text-xl md:text-2xl font-heading text-gray-900 uppercase tracking-wider">
                    {category.category}
                  </h2>
                </div>

                <div>
                  {category.faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-4">Need More Help?</p>
          <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10">
            Our team is here to help. Schedule a free consultation to discuss your 
            property needs and get personalized answers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
