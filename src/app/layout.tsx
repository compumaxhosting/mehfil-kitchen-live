import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-josefin',
})

export const metadata = {
  title: 'Mehfil Kitchen Skokie - Hyderabadi Biryani, Kabobs & Catering Services',
  description:
    'Mehfil Kitchen serves the Best Indian Restaurant Skokie IL experience with authentic Hyderabadi Biryani Skokie, Chicken Biryani Near Me, and delicious Chicken Kabob Skokie dishes. Serving Hyderabadi Biryani, Kabobs & Catering in Skokie, Glenview, Evanston, Niles & nearby.',
  keywords: [
    'Hyderabadi Biryani Skokie',
    'Chicken Biryani Near Me',
    'Mutton Biryani Skokie',
    'Indian Catering Skokie',
    'Best Indian Restaurant Skokie',
    'Indian Food Delivery Skokie',
    'Authentic Indian Cuisine Skokie',
    'Chicken Kabob Skokie',
    'Indian Party Catering Skokie',
    'Butter Chicken Skokie',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={josefin.variable}>
      <body>{children}</body>
    </html>
  )
}
