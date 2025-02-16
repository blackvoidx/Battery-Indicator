import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Battery Check',
  description: 'Simple web app for checking battery',
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Rock-paper-scissor"],
  authors: [
    { name: "Mohammad" },
    {
      name: "Mohammad",
      url: "https://github.com/blackvoidx",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "/icon-512x512.png" },
    { rel: "icon", url: "/icon-512x512.png" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='select-none'>{children}</main>
      </body>
    </html>
  )
}
