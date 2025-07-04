'use client'

import React from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'Mehfil Kitchen +1 786-763-4000 | Indian Restaurant & Catering in Skokie, IL',
  description:
    'Get in touch with Mehfil Kitchen for inquiries, catering services, or feedback. Serving authentic Indian and Hyderabadi cuisine in Skokie, IL.',
  keywords: [
    'Contact Mehfil Kitchen',
    'Skokie restaurant contact',
    'Indian restaurant Skokie',
    'Catering inquiries Skokie',
    'Hyderabadi restaurant contact',
    'Mehfil Kitchen feedback',
    'Indian food Skokie',
    'Catering services Skokie IL',
    'Skokie restaurant information',
    'Mehfil Kitchen Skokie contact',
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}
