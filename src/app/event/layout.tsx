import React from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'Best Event Catering Services in Skokie, IL | Mehfil Kitchen',
  description:
    'Affordable Hyderabadi and Indian event catering in Skokie. Halal, fresh, and flavorful meals for any occasion from Mehfil Kitchen.',
  keywords: [
    'event catering Skokie IL',
    'Mehfil Kitchen catering',
    'Hyderabadi catering Skokie',
    'halal event catering',
    'Indian food catering',
    'corporate catering Skokie',
    'party catering',
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

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="catering-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}
