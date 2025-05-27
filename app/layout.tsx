import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'elhouch restaurant menu',
  description: 'Created with KHAIREDDINE',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
