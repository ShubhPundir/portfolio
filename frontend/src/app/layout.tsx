import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import portfolioIcon from '../assets/portfolio.png'

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Shubh Pundir's Portfolio",
  description: "Portfolio website for Shubh Pundir",
  icons: {
    icon: [
      { url: portfolioIcon.src, type: 'image/png' },
    ],
    shortcut: portfolioIcon.src,
    apple: portfolioIcon.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

