import type { Metadata } from 'next'
import '../styles/globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

