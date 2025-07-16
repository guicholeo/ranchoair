"use client"

import Link from "next/link"
import Image from "next/image"
import ReviewsSection from "@/components/ReviewsSection"

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Expert HVAC Solutions for Your Comfort</h1>
          <p>Providing quality heating, ventilation, and air conditioning services for 10 years</p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="services" id="home-services">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-description">Comprehensive HVAC solutions for residential and commercial properties</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-bg">
                <Image
                  src="/pics/installation.jpg"
                  alt="HVAC Installation Service"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-content">
                <h3>Installation</h3>
                <p>We expertly install HVAC systems tailored to your needs, ensuring optimal performance.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-bg">
                <Image
                  src="/pics/outside4.jpg"
                  alt="HVAC Service and Maintenance"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="service-content">
                <h3>Service</h3>
                <p>Our reliable team provides timely service to keep your system running smoothly year-round.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-bg">
                <Image src="/pics/repair2.jpg" alt="HVAC Repair Service" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="service-content">
                <h3>Repairs</h3>
                <p>Count on us for fast and effective repairs to address any issues and restore comfort.</p>
              </div>
            </div>
          </div>

          <div className="view-all-services">
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="company-mission">
        <div className="container">
          <div className="mission-content">
            <p>
              At Rancho Air, we're dedicated to ensuring your indoor comfort year-round. With our team of experienced
              professionals and top-of-the-line equipment, we guarantee efficient installations, reliable repairs, and
              proactive maintenance requests.
            </p>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="call-now">
        <div className="container">
          <h2>Give us a call today</h2>
          <a href="tel:5129491447" className="phone-number">
            512-949-1447
          </a>
          <p>We're available 24/7 for emergency services</p>
        </div>
      </section>
    </>
  )
}
