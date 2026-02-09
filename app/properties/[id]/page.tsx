"use client";
import { notFound } from "next/navigation";
import PropertyCard from "@/components/properties/PropertyCard";
import propertiesData from "@/data/properties.json";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, MapPin, Home, ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { useCurrencyContext } from "@/lib/CurrencyContext";

export default function PropertyDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const property = propertiesData.properties.find(
    (p: any) => p.id === id
  );

  if (!property) {
    return notFound();
  }

  const relatedProperties = propertiesData.properties
    .filter((p: any) => p.id !== id)
    .slice(0, 2);

  const { currency, setCurrency, convert, SYMBOLS, SUPPORTED, loading } = useCurrencyContext();
  const basePriceUSD = property.price.usd;
  const displayPrice = currency === 'USD' ? basePriceUSD : convert(basePriceUSD, currency);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-20 pb-10 overflow-hidden">
        {/* Single hero image as background */}
        <img
          src={property.images?.[0] || "/hero.jpg"}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover object-center z-0 select-none pointer-events-none"
          aria-hidden="true"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Content */}
        <div className="container mx-auto px-6 md:px-8 relative z-20 text-center flex flex-col justify-center items-center">
          {/* Currency Selector */}
          <div className="mb-4 flex justify-center">
            <label htmlFor="currency" className="text-white/80 mr-2 font-medium">Currency:</label>
            <select
              id="currency"
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              className="rounded px-2 py-1 text-white bg-black/40"
            >
              {SUPPORTED.map(cur => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">
            Portfolio Project
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 leading-tight max-w-4xl mx-auto">
            {property.title}
          </h1>
          <div className="text-3xl md:text-5xl font-heading text-white font-bold mb-4">
            <span className="font-serif font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              $ {loading ? '...' : basePriceUSD.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
            {currency !== 'USD' && (
              <span className="text-lg md:text-2xl text-white ml-2 font-normal font-serif bg-yellow-100/80 text-gray-900 px-2 py-0.5 rounded">
                {SYMBOLS[currency]} {displayPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
            )}
            {currency === 'USD' && (
              <span className="text-lg md:text-2xl text-white ml-2 font-normal font-serif">USD</span>
            )}
          </div>
          <div className="w-16 h-px bg-white/40 mx-auto mb-6" />
          <p className="text-white/80 text-lg md:text-xl mb-4 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5" />
            {property.location.area}, {property.location.city}
          </p>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8">
            This home/project was built or renovated for a client. It is part of our portfolio and not for sale. Browse to see our quality and contact us for your own custom build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-white text-gray-900 font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-2"
            >
              Contact Us About Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* MAIN */}
          <div className="lg:col-span-2 space-y-12">
            {/* Back Link */}
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Link>

            {/* Description */}
            <div className="border-b border-gray-200 pb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                About This Project
              </p>
              <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mb-6">
                Project Description
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 pb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Features
              </p>
              <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mb-6">
                Project Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities?.map((a: string) => (
                  <li key={a} className="flex items-center text-base md:text-lg text-gray-600">
                    <span className="text-gray-900 mr-3">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            {property.images?.length > 1 && (
              <div className="border-b border-gray-200 pb-12">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                  Property Images
                </p>
                <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {property.images.slice(1).map((img: string) => (
                    <button
                      key={img}
                      onClick={() => setSelectedImage(img)}
                      className="focus:outline-none"
                    >
                      <img
                        src={img}
                        alt={property.title}
                        className="object-cover h-64 w-full border border-gray-200 hover:border-gray-900 transition-colors cursor-pointer"
                      />
                    </button>
                  ))}
                </div>
                {/* Modal/Lightbox */}
                {selectedImage && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="relative">
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-2 right-2 bg-white text-gray-900 rounded-full p-2 shadow-lg hover:bg-gray-200 focus:outline-none"
                        aria-label="Close"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <img
                        src={selectedImage}
                        alt={property.title}
                        className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl border border-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Related */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                More Portfolio
              </p>
              <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mb-8">
                Other Projects
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedProperties.map((rp: any) => (
                  <PropertyCard
                    key={rp.id}
                    {...rp}
                    image={rp.images?.[0] || "/hero.jpg"}
                    price={{
                      usd: rp.price.usd,
                      converted: currency === 'USD' ? rp.price.usd : convert(rp.price.usd, currency)
                    }}
                    currency={currency}
                    SYMBOLS={SYMBOLS}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 h-fit mt-10 lg:mt-0">
            <div className="border border-gray-200 p-6 sm:p-8 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl mx-2 sm:mx-0 mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Get In Touch
              </p>
              <h3 className="text-xl md:text-2xl font-heading text-gray-900 mb-6">
                Interested in Building With Us?
              </h3>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Contact our team to discuss your own custom home or renovation project. We build for clients across Accra and Ghana.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 rounded-xl"
                >
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Price Summary */}
            <div className="border border-gray-200 border-t-0 p-8 bg-gray-50">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
                Price Details
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Price</span>
                <span className="font-heading text-gray-900">
                  {SYMBOLS[currency]} {loading ? '...' : displayPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Location</span>
                <span className="font-heading text-gray-900">{property.location.city}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
