import type { Metadata } from "next"
import FinancingClientPage from "./FinancingClientPage"

export const metadata: Metadata = {
  title: "Financing Options",
  description:
    "Flexible financing options for your HVAC installation, repair, and maintenance needs. Make your comfort affordable with Rancho Air's financing solutions.",
  keywords: "HVAC Financing, AC Financing, Heating Financing, HVAC Payment Plans, Affordable HVAC",
}

export default function FinancingPage() {
  return <FinancingClientPage />
}
