import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Shubh Pundir's Portfolio",
  description: "Portfolio website for Shubh Pundir",
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

