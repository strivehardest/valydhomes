import ClientHero from './ClientHero';
import Link from 'next/link';
import {
  Shield,
  Video,
  FileCheck,
  MessageCircle,
  Globe,
  Clock,
  CheckCircle,
  Heart,
  UserX,
  AlertTriangle,
  FileX,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';


export const metadata = {
  title: 'Diaspora | VALYD Homes & Property',
  description: 'Specialized real estate services for the Ghanaian diaspora. Buy, verify, and manage property in Ghana with confidence, even from abroad.',
  keywords: 'diaspora property Ghana, buy home from abroad, Ghanaian diaspora real estate, virtual tours Ghana, property verification Ghana, Valyd Homes and Properties',
};

const challenges = [
  {
    icon: Globe,
    title: 'Distance & Uncertainty',
    description: 'Being thousands of miles away makes it difficult to verify properties and handle transactions safely.',
  },
  {
    icon: AlertTriangle,
    title: 'Fear of Fraud',
    description: 'Stories of land fraud and illegal sales create justified concerns about investing from abroad.',
  },
  {
    icon: FileX,
    title: 'Complex Documentation',
    description: "Navigating Ghana's property laws and paperwork from overseas can be overwhelming and confusing.",
  },
  {
    icon: UserX,
    title: 'Lack of Trust',
    description: 'Finding reliable representation on the ground who has your best interests at heart is challenging.',
  },
]

const solutions = [
  {
    icon: Video,
    title: 'Virtual Tours & Updates',
    description: 'We provide high-quality video tours, drone footage, and regular photo updates so you can see your property from anywhere in the world.',
  },
  {
    icon: Shield,
    title: 'Complete Verification',
    description: 'Every property undergoes thorough legal checks. We verify land titles, survey plans, and ensure all documentation is legitimate before you invest a single cedi.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Your dedicated VALYD representative is available via WhatsApp, video calls, and email. We keep you informed at every stage of the process.',
  },
  {
    icon: FileCheck,
    title: 'End-to-End Documentation',
    description: 'We handle all paperwork, from initial verification to final registration. You receive clear explanations in plain language, not legal jargon.',
  },
  {
    icon: Clock,
    title: 'Flexible Timelines',
    description: 'We understand you may need to coordinate with your schedule abroad. We work at your pace and accommodate different time zones.',
  },
  {
    icon: Heart,
    title: 'Post-Purchase Support',
    description: "Our relationship doesn't end at purchase. We offer property management, maintenance coordination, and ongoing advisory services.",
  },
]

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: "We discuss your needs, budget, and timeline via video call. No pressure, just honest conversation about what's possible.",
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Property Selection',
    description: 'We send you verified listings that match your criteria with detailed photos, videos, and location information.',
    icon: Globe,
  },
  {
    step: '03',
    title: 'Virtual Site Visit',
    description: 'We conduct live video tours of your shortlisted properties. Ask questions, request specific angles, see the neighborhood.',
    icon: Video,
  },
  {
    step: '04',
    title: 'Legal Verification',
    description: 'Our legal team conducts comprehensive due diligence. You receive a full verification report before making any commitment.',
    icon: FileCheck,
  },
  {
    step: '05',
    title: 'Secure Payment',
    description: 'We guide you through safe payment methods. Option for escrow services to protect your investment.',
    icon: Shield,
  },
  {
    step: '06',
    title: 'Documentation & Registration',
    description: 'We handle all paperwork and keep you updated throughout. You receive all original documents via secure courier.',
    icon: FileCheck,
  },
  {
    step: '07',
    title: 'Handover & Beyond',
    description: 'Once complete, we provide property management options or connect you with trusted partners for construction, maintenance, or rental management.',
    icon: Heart,
  },
]

const testimonials = [
  {
    name: 'Kwame Mensah',
    location: 'London, UK',
    text: 'I was skeptical about buying land from the UK, but VALYD changed everything. They sent me weekly video updates, handled all the verification, and I now own a beautiful plot in Oyarifa. Best decision I made.',
  },
  {
    name: 'Akosua Boateng',
    location: 'New York, USA',
    text: "Being in the US, I needed someone I could trust completely. VALYD was transparent about every cost, every document, every step. They treated my investment like their own family's.",
  },
  {
    name: 'Emmanuel Osei',
    location: 'Toronto, Canada',
    text: "The distance made me nervous, but VALYD's team was available on WhatsApp anytime. They answered all my questions, showed me everything via video, and made buying from Canada stress-free.",
  },
]

export default function DiasporaPage() {
  return (
    <div>
      {/* Hero Section (Client Component) */}
      <ClientHero />

      {/* Understanding Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Common Challenges
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              We Understand Your Concerns
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-6" />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Living abroad while trying to invest in Ghana comes with unique challenges. We've heard your stories, and we've built our services specifically to address them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="p-6 border border-gray-200 hover:border-gray-900 transition-colors text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-gray-900 text-gray-900">
                  <challenge.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-heading text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-base text-gray-600">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-heading text-white mb-4">
              At VALYD, We've Made It Our Mission to Change This
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between the diaspora and property ownership in Ghana. You deserve the same level of trust, transparency, and support as someone buying locally—and that's exactly what we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Our Solutions
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              How We Support Diaspora Investors
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-6" />
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive services designed specifically for Ghanaians and friends of Ghana living abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-white p-8 border border-gray-200 hover:border-gray-900 transition-colors">
                <div className="w-14 h-14 mb-5 flex items-center justify-center border border-gray-900 text-gray-900">
                  <solution.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-heading text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              The Process
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Your Journey to Property Ownership
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto mb-6" />
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A clear, transparent process from first contact to final handover—and beyond.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-900 text-white font-heading text-2xl font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1 border border-gray-200 p-6 hover:border-gray-900 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-gray-900" />
                      <h3 className="text-xl font-heading text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Single overlay, matches ClientHero */}
        <div className="absolute inset-0 z-0">
          <img src="/hero.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
              Testimonials
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
              Stories from the Diaspora
            </h2>
            <div className="w-16 h-px bg-white/40 mx-auto mb-6" />
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Real experiences from people who trusted VALYD to help them invest from abroad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-white" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white text-base">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VALYD Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Why Us
              </p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Why Choose VALYD for Your Diaspora Investment?
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto" />
            </div>
              
            <div className="space-y-4 mb-12">
              <div className="flex items-start space-x-3 p-4 border border-gray-200 hover:border-gray-900 transition-colors">
                <CheckCircle className="h-6 w-6 text-gray-900 shrink-0 mt-1" />
                <p className="text-gray-600 text-base md:text-lg">
                  <strong className="text-gray-900">Trusted Local Representation:</strong> We are your boots on the ground—Ghanaian professionals who understand both local and diaspora perspectives.
                </p>
              </div>
              <div className="flex items-start space-x-3 p-4 border border-gray-200 hover:border-gray-900 transition-colors">
                <CheckCircle className="h-6 w-6 text-gray-900 shrink-0 mt-1" />
                <p className="text-gray-600 text-base md:text-lg">
                  <strong className="text-gray-900">Transparent & Legal Transactions:</strong> Every property is thoroughly verified. We explain every document, every cost, every step in plain language.
                </p>
              </div>
              <div className="flex items-start space-x-3 p-4 border border-gray-200 hover:border-gray-900 transition-colors">
                <CheckCircle className="h-6 w-6 text-gray-900 shrink-0 mt-1" />
                <p className="text-gray-600 text-base md:text-lg">
                  <strong className="text-gray-900">Personalized Support:</strong> No two diaspora journeys are the same. We tailor our services to your specific needs, timeline, and concerns.
                </p>
              </div>
              <div className="flex items-start space-x-3 p-4 border border-gray-200 hover:border-gray-900 transition-colors">
                <CheckCircle className="h-6 w-6 text-gray-900 shrink-0 mt-1" />
                <p className="text-gray-600 text-base md:text-lg">
                  <strong className="text-gray-900">End-to-End Service:</strong> From property search to final handover and beyond—we're with you at every stage.
                </p>
              </div>
              <div className="flex items-start space-x-3 p-4 border border-gray-200 hover:border-gray-900 transition-colors">
                <CheckCircle className="h-6 w-6 text-gray-900 shrink-0 mt-1" />
                <p className="text-gray-600 text-base md:text-lg">
                  <strong className="text-gray-900">Our Promise:</strong> Your investment is protected, your voice is heard, and your dream of owning a home in Ghana is treated as our own.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-8 md:p-10 text-center mb-12">
              <h3 className="text-xl font-heading text-white mb-3">
                At VALYD, Relationships Matter More Than Transactions
              </h3>
              <p className="text-white/80 leading-relaxed">
                We don't just sell land or houses. We walk with you through the entire journey, from verification and documentation to ownership and beyond. We build with integrity, communicate honestly, and deliver what we promise.
              </p>
            </div>

            <div className="text-center space-y-6">
              <p className="text-gray-600 text-lg">
                Ready to start your property journey in Ghana?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0508474041"
                  className="px-8 py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Schedule a Call (0508474041)
                </a>
                <a
                  href="tel:0248582353"
                  className="px-8 py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Schedule a Call (0248582353)
                </a>
                <Link
                  href="mailto:info@valydhomes.com"
                  className="px-8 py-4 border-2 border-gray-900/60 text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                No pressure. No obligation. Just an honest conversation about your property dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Single overlay, matches ClientHero */}
        <div className="absolute inset-0 z-0">
          <img src="/hero.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
              Get Started
            </p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
              Your Home in Ghana Awaits
            </h2>
            <div className="w-16 h-px bg-white/40 mx-auto mb-8" />
            <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
              Join hundreds of diaspora investors who have successfully purchased property in Ghana with <span className="font-bold text-white">VALYD's trusted support</span>.
            </p>
            <Link
              href="/properties"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
            >
              View Available Properties
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}