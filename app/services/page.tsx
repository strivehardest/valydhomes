import Head from "next/head";
import Link from "next/link";
import {
  ShieldCheck,
  Home,
  FileCheck2,
  HeartHandshake,
  Globe,
  Video,
  MessageSquare,
  Heart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Land Verification & Due Diligence",
    description:
      "We conduct rigorous legal and planning checks to ensure every property is legitimate, registered, and free of encumbrances.",
    icon: FileCheck2,
  },
  {
    title: "Residential & Commercial Sales",
    description:
      "Buy or sell homes, villas, and commercial spaces with confidence. All listings are verified and ready for you to move in.",
    icon: Home,
  },
  {
    title: "End-to-End Project Care",
    description:
      "From site selection to keys-in-hand, we orchestrate every detail so you can decide with confidence.",
    icon: HeartHandshake,
  },
  {
    title: "Diaspora Services",
    description:
      "Virtual tours, direct communication, and flexible timelines for clients abroad. We bridge the gap between Ghana and the diaspora.",
    icon: Globe,
  },
  {
    title: "Property Management & Advisory",
    description:
      "Ongoing support after purchase: property management, maintenance, and investment advisory.",
    icon: Heart,
  },
  {
    title: "Legal Documentation & Registration",
    description:
      "We handle all paperwork, from initial verification to final registration. You receive clear explanations and all original documents.",
    icon: ShieldCheck,
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your needs, budget, and timeline. Honest advice, no pressure.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Property Selection",
    description:
      "We send you verified listings that match your criteria with detailed photos, videos, and location info.",
    icon: Home,
  },
  {
    step: "03",
    title: "Virtual/Physical Site Visit",
    description:
      "Tour properties in person or via live video. Ask questions, see the neighborhood.",
    icon: Video,
  },
  {
    step: "04",
    title: "Legal Verification",
    description:
      "Our legal team conducts due diligence. You receive a full verification report before any commitment.",
    icon: FileCheck2,
  },
  {
    step: "05",
    title: "Secure Payment",
    description:
      "We guide you through safe payment methods. Escrow options available.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Documentation & Registration",
    description:
      "We handle all paperwork and keep you updated. You receive all original documents via secure courier.",
    icon: FileCheck2,
  },
  {
    step: "07",
    title: "Handover & Ongoing Support",
    description:
      "We deliver your keys and offer property management, maintenance, and advisory services.",
    icon: HeartHandshake,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ✅ SEO */}
      <Head>
        <title>Services | VALYD Homes & Property</title>
        <meta
          name="description"
          content="Explore our real estate services in Ghana: land verification, property sales, development, and diaspora support. Trusted by Ghanaians worldwide."
        />
        <meta
          name="keywords"
          content="Ghana real estate services, land verification Ghana, property sales Ghana, diaspora property support, home development Ghana"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Services | VALYD Homes & Property" />
        <meta
          property="og:description"
          content="Trusted real estate services in Ghana including land verification, property sales, and diaspora support."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.jpg"
              alt="Our Services - VALYD Homes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
              What We Do
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Our Services
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Discover the full range of real estate services we offer to help
              you achieve your property goals in Ghana and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Verified Properties
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Our Expertise
              </p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border border-gray-200 hover:border-gray-900 p-8 text-center transition-colors"
                >
                  <service.icon className="h-10 w-10 text-gray-900 mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Our Process
              </p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <div className="w-16 h-px bg-gray-300 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <div
                  key={step.step}
                  className="bg-white border border-gray-200 hover:border-gray-900 p-8 text-center transition-colors"
                >
                  <step.icon className="h-8 w-8 text-gray-900 mx-auto mb-3" />
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/hero.jpg" alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
                Get Started
              </p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
                Ready to Begin Your Property Journey?
              </h2>
              <div className="w-16 h-px bg-white/40 mx-auto mb-8" />
              <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
                Let us guide you through every step with transparency, expertise, and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
                >
                  Contact Us Today
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Browse Properties
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
