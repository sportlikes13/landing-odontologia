import type { Metadata } from 'next'
import { Inter, Krub } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const krub = Krub({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-krub',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Periodoncia Láser Bogotá | Tratamiento Especializado Sin Dolor',
  description: 'Recupera tus encías y conserva tus dientes con tecnología láser avanzada. +20 años de experiencia en periodoncia. Agenda tu valoración periodontal hoy.',
  keywords: 'periodoncia, láser, bogotá, encías, periodontitis, tratamiento dental, odontología',
  openGraph: {
    title: 'Periodoncia Láser Bogotá | Tratamiento Especializado Sin Dolor',
    description: 'Recupera tus encías y conserva tus dientes con tecnología láser avanzada. +20 años de experiencia en periodoncia.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#E44E9B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${krub.variable} bg-background`}>
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
