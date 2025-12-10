import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/cart-context"
import { IslamicHeader } from "@/components/islamic-header"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GenAlpha - Premium Shirts & Hoodies",
  description: "Shop premium quality shirts and hoodies at affordable prices. Fast delivery across Pakistan.",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/icon" }],
    apple: [{ url: "/apple-icon" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <CartProvider>
            <IslamicHeader />
            {children}
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
