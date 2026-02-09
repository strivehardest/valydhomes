import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Bed, Bath, Car, CheckCircle, ArrowUpRight } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface PropertyCardProps {
  id: string
  title: string
  location: {
    area: string
    city: string
  }
  price: {
    usd: number
    converted?: number
  }
  features: {
    bedrooms?: number
    bathrooms?: number
    parking?: number
  }
  image: string
  verified: boolean
  status: 'available' | 'sold' | 'reserved'
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  features,
  image,
  verified,
  status,
  currency,
  SYMBOLS,
  homepage,
}: PropertyCardProps & { currency?: string, SYMBOLS?: Record<string, string>, homepage?: boolean }) {
  return (
    <Link href={`/properties/${id}`} className="group block">
      <article className="bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Status Badge */}
          {status !== 'available' && (
            <div className="absolute top-4 left-4 bg-gray-900 text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              {status === 'sold' ? 'Sold' : 'Reserved'}
            </div>
          )}
          
          {/* Verified Badge */}
          {verified && (
            <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              <span>Verified</span>
            </div>
          )}

          {/* View Button - Appears on Hover */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 text-sm font-semibold">
              View
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-500 mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm uppercase tracking-wider">{location.area}, {location.city}</span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors">
            {title}
          </h3>

          {/* Features */}
          <div className="flex items-center gap-6 text-gray-600 mb-6 pb-6 border-b border-gray-100">
            {features.bedrooms && (
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{features.bedrooms} Beds</span>
              </div>
            )}
            {features.bathrooms && (
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{features.bathrooms} Baths</span>
              </div>
            )}
            {features.parking && (
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{features.parking} Cars</span>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-serif font-bold text-gray-900">
                {currency && currency !== 'USD'
                  ? `${SYMBOLS && SYMBOLS[currency]}${formatPrice(price.converted || 0, currency as any, { noSymbol: true })}`
                  : formatPrice(price.usd, 'USD')}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}