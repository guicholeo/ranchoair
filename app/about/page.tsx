import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rancho Air Conditioning & Heating, your trusted HVAC partner in Austin and surrounding areas. Over 10 years of experience providing quality heating and cooling solutions.",
  keywords: "About Rancho Air, HVAC Company Austin, HVAC Experience, Professional HVAC Technicians",
}

export default function AboutPage() {
  return <AboutPageClient />
}
