import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    "Comprehensive HVAC services in Elgin, Austin, and surrounding areas. Installation, repair, maintenance, and 24/7 emergency service for residential and commercial properties.",
  keywords: "HVAC Services, AC Installation, Heating Repair, HVAC Maintenance, Emergency HVAC Service",
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
