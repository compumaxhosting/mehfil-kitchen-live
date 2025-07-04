import React from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'Mehfil Kitchen Photo Gallery | Indian & Hyderabadi Cuisine in Skokie',
  description:
    'Browse Mehfil Kitchen’s gallery showcasing our mouthwatering Indian & Hyderabadi dishes, from biryanis to kebabs, all served in Skokie, IL.',
  keywords: [
    'Mehfil Kitchen gallery',
    'Indian food Skokie',
    'Hyderabadi cuisine Skokie',
    'Biryani Skokie photos',
    'Chicken kebabs Skokie',
    'Indian restaurant gallery',
    'Mehfil Kitchen dishes',
    'Skokie restaurant photos',
    'Best Indian food Skokie',
    'Hyderabadi Biryani pictures',
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

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="gallery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}
