'use client'

import React from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'Authentic Indian & Hyderabadi Menu in Skokie | Mehfil Kitchen',
  description:
    "Explore Mehfil Kitchen's menu featuring Hyderabadi biryanis, flavorful kebabs, and classic Indian dishes in Skokie, IL. Perfect for dine-in or catering.",
  keywords: [
    'Indian restaurant Skokie',
    'Hyderabadi Biryani Skokie',
    'Chicken Biryani near me',
    'Mutton Biryani delivery',
    'Hyderabadi Dum Biryani',
    'Chicken Reshmi Kabob Skokie',
    'Indian kebabs Skokie',
    'Butter Chicken Skokie',
    'Best Indian food Skokie',
    'Skokie Indian catering',
  ],
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Mehfil Kitchen",
  "image": "https://www.mehfilkitchen.com/logo2.png",
  "@id": "https://www.mehfilkitchen.com/",
  "url": "https://www.mehfilkitchen.com/",
  "telephone": "+1-786-763-4000",
  "email": "info@mehfilkitchen.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5264 Lincoln Ave",
    "addressLocality": "Skokie",
    "addressRegion": "IL",
    "postalCode": "60077",
    "addressCountry": "US"
  },
  "priceRange": "$$",
  "servesCuisine": ["Indian", "Pakistani", "Desi", "Halal"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/mehfilkitchen/",
    "https://www.instagram.com/kitchen.mehfil/?igsh=ejNmNzJkbG56bmxj#/"
  ]
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="menu-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}
