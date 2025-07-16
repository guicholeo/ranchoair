import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Rancho Air for all your HVAC needs in Elgin, Austin, and surrounding areas. Get a free estimate, schedule service, or request emergency repairs. Available 24/7.",
  keywords: "Contact HVAC, Emergency HVAC Service, Free HVAC Estimate, Schedule HVAC Service",
}

export default function ContactPage() {
  return <ContactPageClient />
}
