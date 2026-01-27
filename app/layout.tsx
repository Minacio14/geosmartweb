import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GeoSMART - Engineering the Ground, Enabling Sustainability',
  description: 'Geotechnical, Hydrological & Environmental Solutions in Mozambique. Expert services in geotechnics, geohydrology, environmental studies, mining, and monitoring.',
  keywords: 'geotechnical, geohydrology, environmental, mining, monitoring, Mozambique, engineering, sustainability',
  authors: [{ name: 'GeoSMART' }],
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: 'any',
      },
      {
        url: '/GEOSMART LOGO.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
