import React from 'react'// Import client component
import SchemaScript from './SchemaScript'

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

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaScript />
      {children}
    </>
  )
}
