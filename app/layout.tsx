import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
// import './globals.css' // Static export disables CSS imports in layout

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mohd Mohsin | Web Developer & AI Enthusiast',
  description: 'Portfolio of Mohd Mohsin - B.Tech Computer Science student, Web Developer, and AI/ML Enthusiast',
  keywords: ['developer', 'portfolio', 'web developer', 'AI', 'ML', 'Mohd Mohsin'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-space bg-background text-white antialiased">
        {children}
      </body>
    </html>
  )
}
