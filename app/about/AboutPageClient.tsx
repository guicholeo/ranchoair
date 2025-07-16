"use client"

import ReviewsSection from "@/components/ReviewsSection"
import Link from "next/link"

export default function AboutPageClient() {
  return (
    <>
      <section className="page-header hero smaller-hero">
        <div className="hero-content">
          <h1>About Rancho Air</h1>
          <p>Your trusted partner for HVAC solutions</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Rancho Air Conditioning & Heating was founded with a simple mission: to provide reliable, high-quality
                HVAC services to our community. What started as a small family operation has grown into a trusted name
                in the industry, serving residential and commercial clients throughout the Austin area.
              </p>

              <p>
                Our team consists of technicians with years of experience in the field. We pride ourselves on staying
                up-to-date with the latest technologies and techniques to ensure we provide the best service possible.
              </p>

              <div className="founder-story">
                <h3>A Message From Our Founder</h3>
                <div className="founder-content">
                  <p>
                    I've always been fascinated by HVAC systems and their impact on our daily comfort. Growing up, I was
                    that curious kid who wanted to understand how everything worked—especially the magic behind keeping
                    homes cool in Texas summers and warm during those chilly winter nights.
                  </p>

                  <p>
                    After spending 10 years in the industry, I noticed something missing: a service that truly put
                    people first. Too many companies were offering quick fixes instead of lasting solutions, leaving
                    homeowners frustrated and out of pocket.
                  </p>

                  <p>
                    That's why I started Rancho Air. I wanted to build something different—a company where honesty and
                    quality craftsmanship come first. We don't just fix your systems; we take the time to explain what's
                    happening, help you understand your options, and make sure you're comfortable with every decision.
                  </p>

                  <p>
                    To me, HVAC isn't just about technical skills—it's about creating relationships and environments
                    where families can thrive. There's something incredibly rewarding about leaving a home knowing the
                    family inside will be comfortable, whether it's during the hottest day of summer or the coldest
                    night of winter.
                  </p>

                  <p>
                    When you choose Rancho Air, you're not just getting a service provider—you're getting a partner who
                    genuinely cares about your comfort and well-being. That's my promise to every customer we serve.
                  </p>
                </div>
              </div>

              <h2>Our Approach</h2>
              <p>
                At Rancho Air Conditioning & Heating, we believe in doing things right the first time. We take a
                thorough, systematic approach to every job, whether it's a simple repair or a complete system
                installation. We understand that your comfort is important, and we work diligently to ensure your
                satisfaction.
              </p>

              <div className="values">
                <div className="value-item">
                  <h3>Quality</h3>
                  <p>We never compromise on the quality of our work or the products we install.</p>
                </div>
                <div className="value-item">
                  <h3>Reliability</h3>
                  <p>When you schedule service with us, you can count on us to be there on time and ready to work.</p>
                </div>
                <div className="value-item">
                  <h3>Integrity</h3>
                  <p>We provide honest recommendations and transparent pricing with no hidden fees.</p>
                </div>
                <div className="value-item">
                  <h3>Expertise</h3>
                  <p>
                    Our technicians are highly skilled, experienced, and continuously trained on the latest
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="expertise">
        <div className="container">
          <h2>Our Expertise</h2>
          <div className="expertise-content">
            <p>
              With over a decade of hands-on experience in the HVAC industry, our team has developed specialized
              knowledge in all aspects of heating, ventilation, and air conditioning systems. We're proud to be fully
              licensed and insured (TACLA137377C), giving you peace of mind when we work on your property.
            </p>

            <div className="expertise-grid">
              <div className="expertise-item">
                <i className="fas fa-tools"></i>
                <h3>Technical Proficiency</h3>
                <p>
                  Our technicians are skilled in servicing all major brands and stay current with the latest HVAC
                  technologies and techniques.
                </p>
              </div>

              <div className="expertise-item">
                <i className="fas fa-house-user"></i>
                <h3>Residential Specialists</h3>
                <p>
                  From single-family homes to multi-unit properties, we understand the unique cooling and heating needs
                  of Texas residences.
                </p>
              </div>

              <div className="expertise-item">
                <i className="fas fa-building"></i>
                <h3>Commercial Solutions</h3>
                <p>
                  We provide tailored HVAC services for businesses of all sizes, ensuring comfortable environments for
                  employees and customers.
                </p>
              </div>

              <div className="expertise-item">
                <i className="fas fa-leaf"></i>
                <h3>Energy Efficiency</h3>
                <p>
                  Our team specializes in optimizing systems for maximum efficiency, helping you save on energy costs
                  while reducing environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Experience the Rancho Air Difference?</h2>
          <p>Contact us today to schedule service or request a free estimate.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn">
              Get in Touch
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
