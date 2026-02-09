import Hero from '@/components/sections/Hero'
import IntroSection from '@/components/sections/IntroSection'
import Features from '@/components/sections/Features'
import FeaturedProperties from '@/components/sections/FeaturedProperties'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VALYD Homes & Property - Premium Real Estate in Ghana',
  description: 'Discover exclusive verified properties, land, and luxury homes for sale in Ghana. Trusted real estate services for discerning clients and the diaspora.',
  keywords: 'Ghana luxury real estate, premium property Ghana, verified land Ghana, buy home Ghana, diaspora property investment Ghana, Valyd Homes and Properties',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <Features />
      <FeaturedProperties />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  )
}