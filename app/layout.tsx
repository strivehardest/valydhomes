
import * as React from 'react';
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { CurrencyProvider } from '@/lib/CurrencyContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VALYD Homes & Property - Your Trusted Real Estate Partner in Ghana',
  description: 'Find verified properties in Ghana. We specialize in land acquisition, residential developments, and secure property investments. Helping the diaspora build their dreams back home.',
  keywords: [
    'Ghana real estate',
    'property in Ghana',
    'land for sale Ghana',
    'diaspora property investment',
    'verified land Ghana',
    'Accra properties',
    'homes for sale Ghana',
    'apartments in Ghana',
    'houses for sale Accra',
    'luxury homes Ghana',
    'affordable housing Ghana',
    'real estate agent Ghana',
    'buy house Ghana',
    'rent house Ghana',
    'property listings Ghana',
    'estate developers Ghana',
    'residential properties Ghana',
    'commercial properties Ghana',
    'new homes Ghana',
    'investment property Ghana',
    'property management Ghana',
    'Ghana property market',
    'secure property Ghana',
    'modern homes Ghana',
    'family homes Ghana',
    'property consultancy Ghana',
    'land acquisition Ghana',
    'property for rent Ghana',
    'house and land Ghana',
    'real estate Ghana',
    'property sales Ghana',
    'property buying guide Ghana',
    'property investment Ghana',
    'property developers Ghana',
    'property deals Ghana',
    'property search Ghana',
    'property agency Ghana',
    'property solutions Ghana',
    'property advice Ghana',
    'property services Ghana',
    'property Ghana',
  ],
  authors: [{ name: 'VALYD Homes & Property Ltd.' }],
  openGraph: {
    title: 'VALYD Homes & Property - Your Trusted Real Estate Partner in Ghana',
    description: 'Find verified properties in Ghana. Helping you secure safe, valuable, and lasting homes.',
    type: 'website',
    locale: 'en_GH',
    url: 'https://valydhomes.com',
    siteName: 'VALYD Homes & Property',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}> 
      <body className="font-sans antialiased">
        <CurrencyProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </CurrencyProvider>
      </body>
    </html>
  )
}