import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import "../styles/components.css"
import "../styles/pages.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Rancho Air Conditioning & Heating | HVAC Services in Austin TX & Surrounding Areas",
    template: "%s | Rancho Air",
  },
  description:
    "Rancho Air provides top-notch air conditioning and heating services in Elgin, Austin, and surrounding areas. Professional HVAC installation, repair, and maintenance with 24/7 emergency service.",
  keywords:
    "Rancho Air, Air Conditioning Elgin TX, Heating Elgin TX, HVAC Elgin TX, Air Conditioning Austin TX, Heating Austin TX, HVAC Austin TX, Air Conditioning Services, Heating Services, HVAC Services, AC Repair, Heater Repair, HVAC Installation",
  authors: [{ name: "Rancho Air Conditioning & Heating" }],
  creator: "Rancho Air Conditioning & Heating",
  publisher: "Rancho Air Conditioning & Heating",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ranchoair.com",
    siteName: "Rancho Air Conditioning & Heating",
    title: "Rancho Air Conditioning & Heating | HVAC Services in Austin TX & Surrounding Areas",
    description:
      "Professional HVAC installation, repair, and maintenance services in Elgin, Austin, and surrounding areas. 24/7 emergency service available.",
    images: [
      {
        url: "/pics/landing.jpeg",
        width: 1200,
        height: 630,
        alt: "Rancho Air Conditioning & Heating Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rancho Air Conditioning & Heating | HVAC Services in Austin TX & Surrounding Areas",
    description:
      "Professional HVAC installation, repair, and maintenance services in Elgin, Austin, and surrounding areas. 24/7 emergency service available.",
    images: ["/pics/landing.jpeg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <GoogleAnalytics />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
