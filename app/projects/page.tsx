import type { Metadata } from "next"
import ProjectsGallery from "@/components/ProjectsGallery"
import ReviewsSection from "@/components/ReviewsSection"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View our portfolio of completed HVAC projects in Austin, Elgin, and surrounding areas. See our quality workmanship in residential and commercial installations.",
  keywords: "HVAC Projects, HVAC Installation Photos, Austin HVAC Work, Completed HVAC Jobs",
}

export default function ProjectsPage() {
  return (
    <>
      <section className="page-header hero smaller-hero">
        <div className="hero-content">
          <h1>Our Projects</h1>
          <p>See our quality work in action</p>
        </div>
      </section>

      <ProjectsGallery />

      <ReviewsSection />

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today to discuss your HVAC needs and get a free estimate.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn">
              Get a Free Estimate
            </Link>
            <a href="tel:5129491447" className="btn btn-outline">
              Call 512-949-1447
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
