// app/about/layout.tsx
import Script from 'next/script'

export const metadata = {
  title: 'Best Hyderabadi Biryani & Catering in Skokie | Mehfil Kitchen',
  description:
    'Enjoy the best Hyderabadi Biryani, kebabs & catering in Skokie, IL. Order delivery or catering for events like birthdays, weddings, and corporate meals!',
  keywords: [
    'Mutton Biryani Skokie IL',
    'Best Chicken Biryani near Skokie',
    'Hyderabadi Mutton Dum Biryani delivery',
    'Chicken Reshmi Kabob Skokie',
    'Event Catering Skokie',
    'Halal Mutton Biryani Skokie',
    'Chicken Malai Boti Skokie IL',
    'Corporate Meals Skokie',
    'Indian Catering Niles IL',
    'Mehfil Kitchen Catering',
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
