"use client"

import ContactForm from "@/components/ContactForm"
import FAQSection from "@/components/FAQSection"
import Image from "next/image"

export default function ContactPageClient() {
  return (
    <>
      <style jsx>{`
        .contact-content {
          background-color: var(--dark-gray);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact-info h2,
        .contact-form-container h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .contact-details {
          margin-top: 30px;
        }

        .contact-item {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
        }

        .contact-icon {
          font-size: 24px;
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          min-width: 30px;
        }

        .contact-text h3 {
          font-size: 18px;
          margin-bottom: 5px;
        }

        .emergency-service {
          margin-top: 40px;
          padding: 25px;
          background-color: var(--medium-gray);
          border-radius: 8px;
          border-left: 4px solid;
          border-image: var(--gradient-hot-cold) 1;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .emergency-service h3 {
          color: var(--red);
          margin-bottom: 10px;
        }

        .map {
          background-color: var(--medium-gray);
          text-align: center;
        }

        .map h2 {
          font-size: 28px;
          margin-bottom: 30px;
        }

        .map-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 30px 0;
        }

        .service-area-map {
          width: 800px;
          height: 450px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .service-area-map {
            width: 100%;
            height: 350px;
          }
        }
      `}</style>

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
