import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Roboto, Playfair_Display, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { ThemeCustomizer } from "@/components/theme/theme-customizer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ChainSupply - Blockchain Supply Chain Platform",
  description: "Connect manufacturers and retailers on a secure, transparent platform powered by blockchain technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${roboto.variable} ${playfair.variable} ${spaceGrotesk.variable} font-inter antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="chainsupply-theme">
          {children}
          <ThemeCustomizer />
        </ThemeProvider>
      </body>
    </html>
  )
}
