// app/about/layout.tsx
import Script from 'next/script'

export const metadata = {
  title: 'Hyderabadi Cuisine Dine and Catering | Mehfil Kitchen, Skokie, IL',
  description:
    'Welcome to Mehfil Kitchen, your destination for authentic Hyderabadi cuisine in Skokie, IL. Born from a passion to share the true taste of Hyderabad with the community, we bring you dishes that celebrate rich traditions and bold flavors.',
  keywords: [
    'Mehfil Kitchen',
    'Hyderabadi cuisine',
    'Skokie',
    'Mutton Biryani',
    'Chicken Biryani',
    'Catering',
    'Hyderabadi biryani near me'
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}
