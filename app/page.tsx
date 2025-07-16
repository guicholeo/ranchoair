"use client"

import Link from "next/link"
import Image from "next/image"
import ReviewsSection from "@/components/ReviewsSection"

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        /* Services Section */
        .services {
          background-color: var(--dark-gray);
          text-align: center;
        }

        .services h2 {
          font-size: 36px;
          margin-bottom: 10px;
        }

        .section-description {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .service-card {
          position: relative;
          background-color: var(--medium-gray);
          border-radius: 8px;
          height: 320px;
          overflow: hidden;
          transition: var(--transition-standard);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          text-align: center;
          display: block;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .service-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          transition: var(--transition-standard);
          z-index: 1;
        }

        .service-card:hover .service-bg {
          opacity: 0.8;
          transform: scale(1.05);
        }

        .service-bg::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(10, 10, 10, 0.2) 0%, rgba(10, 10, 10, 0.7) 100%);
        }

        .service-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          padding: 20px;
          z-index: 2;
          text-align: center;
          background-color: rgba(10, 10, 10, 0.25);
          border-radius: 4px;
        }

        .service-card h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: var(--white);
        }

        .service-card p {
          color: var(--text-primary);
          margin-bottom: 0;
        }

        .view-all-services {
          text-align: center;
          margin-top: 40px;
        }

        /* Company Mission Section */
        .company-mission {
          background-color: var(--medium-gray);
          border-radius: 8px;
          padding: 30px;
          margin: 40px 0;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-left: 4px solid;
          border-image: var(--gradient-hot-cold) 1;
        }

        .company-mission p {
          font-size: 18px;
          font-style: italic;
          line-height: 1.8;
          margin: 0;
          position: relative;
        }

        .company-mission p::before,
        .company-mission p::after {
          content: '"';
          font-size: 36px;
          line-height: 0;
          position: relative;
          color: var(--blue);
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Call Now Section */
        .call-now {
          background: var(--gradient-hot-cold);
          color: var(--white);
          text-align: center;
          padding: 60px 0;
        }

        .call-now h2 {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .phone-number {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 10px;
          display: block;
          color: var(--white);
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .company-mission p {
            font-size: 16px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }

          .service-card {
            height: 280px;
            margin-bottom: 20px;
            display: block;
          }

          .service-content {
            padding: 15px;
          }

          .service-card h3 {
            font-size: 22px;
            margin-bottom: 8px;
          }

          .service-card p {
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .services-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
          }

          .service-card {
            max-width: 100%;
            height: 250px;
            display: block;
          }

          .service-content {
            width: 90%;
          }

          .call-now h2 {
            font-size: 24px;
          }

          .phone-number {
            font-size: 32px;
          }
        }
      `}</style>

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
