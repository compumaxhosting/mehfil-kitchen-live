// app/catering/layout.tsx
import React from 'react'

export const metadata = {
  title: 'Indian Catering Services in Skokie | Mehfil Kitchen for Events',
  description:
    'Mehfil Kitchen offers exceptional Indian and Hyderabadi catering services in Skokie, IL. Perfect for weddings, birthdays, corporate events, and parties.',
  keywords: [
    'Indian catering Skokie',
    'Hyderabadi catering Skokie',
    'Mehfil Kitchen catering',
    'Event catering Skokie',
    'Wedding catering Skokie IL',
    'Corporate catering Skokie',
    'Birthday catering Skokie',
    'Indian food catering Skokie',
    'Party catering Skokie',
    'Halal catering Skokie IL',
  ],
}

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
