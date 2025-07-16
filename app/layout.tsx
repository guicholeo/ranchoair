import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rancho Air Conditioning & Heating LLC - Austin HVAC Services",
  description:
    "Professional HVAC services in Austin, TX. Air conditioning repair, heating installation, and maintenance services. Licensed and insured.",
  keywords: "HVAC, air conditioning, heating, Austin, Texas, repair, installation, maintenance",
  authors: [{ name: "Rancho Air Conditioning & Heating LLC" }],
  openGraph: {
    title: "Rancho Air Conditioning & Heating LLC - Austin HVAC Services",
    description:
      "Professional HVAC services in Austin, TX. Air conditioning repair, heating installation, and maintenance services.",
    url: "https://ranchoair.com",
    siteName: "Rancho Air Conditioning & Heating LLC",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rancho Air Conditioning & Heating LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rancho Air Conditioning & Heating LLC - Austin HVAC Services",
    description:
      "Professional HVAC services in Austin, TX. Air conditioning repair, heating installation, and maintenance services.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
