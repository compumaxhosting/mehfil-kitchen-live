// app/menu/layout.tsx
import React from 'react'

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

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
