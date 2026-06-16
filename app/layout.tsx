import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'OmahSelada',
  description: 'Sayur selada segar dan sehat langsung dari kebun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700','800']
})