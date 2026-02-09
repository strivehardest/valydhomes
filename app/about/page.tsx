import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Globe,
  Home,
  Handshake,
  Star,
  FileCheck2,
  TrendingUp,
  HeartHandshake,
  Eye,
  Target,
  PhoneCall,
  MapPin,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    title: "Value",
    description: "We help you make safe, informed, and confident property decisions that hold long-term value.",
    icon: Star,
  },
  {
    title: "Assurance",
    description: "Transparent processes, verified documents, and clear communication at every step.",
    icon: ShieldCheck,
  },
  {
    title: "Legitimacy",
    description: "Every property is properly verified, registered, and clear of encumbrances before it reaches you.",
    icon: FileCheck2,
  },
  {
    title: "Yield",
    description: "Projects selected for long-term growth, livability, and strong resale strength.",
    icon: TrendingUp,
  },
  {
    title: "Development",
    description: "We walk with you—from verification and documentation to ownership and beyond, with human service.",
    icon: HeartHandshake,
  },
];

const strengths = [
  {
    title: "Verified land and titles",
    description: "We clear every property through rigorous legal and planning checks before it reaches you.",
    icon: FileCheck2,
  },
  {
    title: "End-to-end project care",
    description: "From site selection to keys-in-hand, we orchestrate the details so you can decide with confidence.",
    icon: Home,
  },
  {
    title: "On-the-ground assurance",
    description: "Our team stands in for you—inspections, media, and reporting you can trust.",
    icon: MapPin,
  },
  {
    title: "Relationship over transaction",
    description: "We build long-term partnerships that outlast a single deal.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px] h-[40vh] md:h-[50vh] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="About VALYD"
            className="w-full h-full object-cover"
          />
          {/* Overlay removed for a lighter hero */}
        </div>
        <div className="container mx-auto px-4 sm:px-8 pt-0 -mt-28 lg:mt-0 lg:pt-20 pb-6 md:py-0 relative z-10 flex flex-col items-center justify-center text-center">
          <p className="text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4">About Us</p>
          <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 leading-tight max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            We Protect Your Investment and Deliver Homes You Are Proud to Own
          </h1>
          <div className="w-12 sm:w-16 h-px bg-white/30 mx-auto mb-4 sm:mb-6" />
          {/* Company description moved below hero */}
          {/* CTAs removed as requested */}
        </div>
      </section>

      {/* Company description below hero removed as requested */}
      {/* Values Section */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Our Values
            </p>
            <h2 className="text-2xl md:text-4xl font-heading text-gray-900 mb-4">
              Your Eyes and Assurance on the Ground
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our name stands for Value, Assurance, Legitimacy, Yield, and Development—the principles that guide every project. We combine legal rigor, human service, and practical execution so you never have to guess what is happening with your investment.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 border border-gray-200 hover:border-gray-900 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-gray-900 text-gray-900">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-heading text-gray-900 mb-3">{value.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Built for Diaspora and Local Families
            </p>
            <h2 className="text-2xl md:text-4xl font-heading text-gray-900 mb-4">
              We Turn Uncertainty Into Clarity
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Buying from abroad—or even across town—can be stressful. We step in as your trusted team: verifying land, managing development partners, and keeping you informed with evidence, not promises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((item) => (
              <div key={item.title} className="bg-white p-8 border border-gray-200 hover:border-gray-900 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-gray-900 text-gray-900 flex-shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-gray-900 pt-2">{item.title}</h3>
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              Mission & Vision
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="p-8 border border-gray-200 hover:border-gray-900 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="h-8 w-8 text-gray-900" />
                <h3 className="font-heading text-2xl md:text-3xl text-gray-900">Vision</h3>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                To be Ghana's most trusted partner for safe, valuable, and joyful home ownership—especially for the diaspora—while uplifting the communities we build in.
              </p>
            </div>

            <div className="p-8 border border-gray-200 hover:border-gray-900 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <Target className="h-8 w-8 text-gray-900" />
                <h3 className="font-heading text-2xl md:text-3xl text-gray-900">Mission</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                  <div className="mt-2 h-2 w-2 bg-gray-900 flex-shrink-0" />
                  <span>Ensure all properties are properly verified and legally sound.</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                  <div className="mt-2 h-2 w-2 bg-gray-900 flex-shrink-0" />
                  <span>Offer end-to-end support from land acquisition to home ownership.</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                  <div className="mt-2 h-2 w-2 bg-gray-900 flex-shrink-0" />
                  <span>Bridge the gap between the diaspora and property ownership in Ghana.</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                  <div className="mt-2 h-2 w-2 bg-gray-900 flex-shrink-0" />
                  <span>Deliver developments that reflect quality, value, and long-term growth.</span>
                </li>
                <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed">
                  <div className="mt-2 h-2 w-2 bg-gray-900 flex-shrink-0" />
                  <span>Build lasting trust through honesty, professionalism, and service.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 p-8 md:p-10 text-center">
            <h4 className="text-lg md:text-xl font-heading text-white mb-3">Our Promise</h4>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              We treat your investment as our own—protecting your interests, communicating clearly, and delivering with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Luxury property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
              Assurance That Holds Up
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Ready to See How VALYD Safeguards Your Next Move?
            </h3>
            <div className="w-16 h-px bg-white/40 mx-auto mb-8" />
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's walk your journey together—from due diligence to handover. We will show you the evidence, not just the brochure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Book a Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/diaspora"
                className="px-8 py-4 border-2 border-white/60 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                For Diaspora Clients
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}