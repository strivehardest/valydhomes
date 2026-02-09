export interface Property {
  id: string
  title: string
  type: 'house' | 'villa' | 'land' | 'apartment'
  status: 'available' | 'sold' | 'reserved'
  price: {
    ghs: number
    usd: number
  }
  location: {
    area: string
    city: string
    region: string
    coordinates: [number, number]
  }
  features: {
    bedrooms?: number
    bathrooms?: number
    parking?: number
    landSize?: string
    yearBuilt?: number
    floorNumber?: number
  }
  images: string[]
  description: string
  amenities: string[]
  verified: boolean
  documents: string[]
  featured: boolean
}

export interface Testimonial {
  name: string
  location: string
  image: string
  rating: number
  text: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social?: {
    linkedin?: string
    twitter?: string
  }
}