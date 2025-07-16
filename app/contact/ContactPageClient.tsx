"use client"

import ContactForm from "@/components/ContactForm"
import FAQSection from "@/components/FAQSection"
import Image from "next/image"

export default function ContactPageClient() {
  return (
    <>
      <section className="page-header hero smaller-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help with all your HVAC needs</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our services or want to schedule an appointment? Reach out to us through any of the
                following methods:
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:5129491447">512-949-1447</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:contact@ranchoair.com">contact@ranchoair.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Hours</h3>
                    <p>Monday - Friday: 7:30 AM - 7:00 PM</p>
                    <p>Saturday: 8:00 AM - 3:00 PM</p>
                    <p>Sunday: Closed (Emergency Services Available)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Service Area</h3>
                    <p>Austin, Elgin, Manor, Round Rock, Pflugerville & all surrounding areas</p>
                  </div>
                </div>
              </div>

              <div className="emergency-service">
                <h3>Emergency Service Available 24/7</h3>
                <p>For after-hours emergencies, please call our main number.</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <h2>Our Service Area</h2>
          <div className="map-container">
            <Image
              src="/pics/map.jpg"
              alt="Map of Austin, TX and surrounding areas including Elgin, Round Rock, Cedar Park, Georgetown, and Pflugerville"
              width={800}
              height={450}
              className="service-area-map"
            />
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
