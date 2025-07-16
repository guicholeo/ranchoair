"use client"
import Link from "next/link"
import Image from "next/image"

export default function ServicesClientPage() {
  return (
    <>
      <style jsx>{`
        .services-detail {
          background-color: var(--dark-gray);
        }

        .service-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
          align-items: center;
        }

        .service-item.reverse {
          direction: rtl;
        }

        .service-item.reverse .service-info {
          direction: ltr;
        }

        .service-image {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          height: 0;
          padding-bottom: 56.25%;
          position: relative;
        }

        .service-info h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .service-features {
          margin: 20px 0;
        }

        .service-features li {
          margin-bottom: 10px;
          position: relative;
          padding-left: 25px;
        }

        .service-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .all-services {
          background-color: var(--medium-gray);
          padding: 80px 0;
        }

        .all-services h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .service-category {
          background-color: var(--dark-gray);
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: var(--transition-standard);
        }

        .service-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .service-category h3 {
          font-size: 20px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .service-category ul {
          list-style: none;
          padding: 0;
        }

        .service-category li {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .service-category li i {
          color: var(--blue);
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 14px;
        }

        @media (max-width: 992px) {
          .service-item {
            grid-template-columns: 1fr;
          }

          .service-item.reverse {
            direction: ltr;
          }

          .service-image {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 768px) {
          .services-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="page-header hero smaller-hero">
        <div className="hero-content">
          <h1>Our HVAC Services</h1>
          <p>Comprehensive heating and cooling solutions for your home or business</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <div id="installation" className="service-item">
            <div className="service-image">
              <Image
                src="/pics/installation.jpg"
                alt="Professional HVAC Installation by Rancho Air technicians"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="service-info">
              <h2>Installation</h2>
              <p>
                We expertly install HVAC systems tailored to your needs, ensuring optimal performance. Our team of
                certified technicians ensures proper sizing, efficient operation, and meticulous installation of your
                new system.
              </p>
              <ul className="service-features">
                <li>Expert system selection and sizing</li>
                <li>Professional installation</li>
                <li>Energy efficiency optimization</li>
                <li>Post-installation testing</li>
              </ul>
              <Link href="/contact" className="btn">
                Schedule Installation
              </Link>
            </div>
          </div>

          <div id="service" className="service-item reverse">
            <div className="service-image">
              <Image
                src="/pics/outside4.jpg"
                alt="Rancho Air technician performing HVAC service maintenance"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="service-info">
              <h2>Service</h2>
              <p>
                Our reliable team provides timely service to keep your system running smoothly year-round. Regular
                service helps identify potential issues before they become major problems, saving you time and money in
                the long run.
              </p>
              <ul className="service-features">
                <li>Comprehensive system inspections</li>
                <li>Performance optimization</li>
                <li>Filter replacement</li>
                <li>Preventative maintenance</li>
              </ul>
              <Link href="/contact" className="btn">
                Schedule Service
              </Link>
            </div>
          </div>

          <div id="repair" className="service-item">
            <div className="service-image">
              <Image
                src="/pics/repair2.jpg"
                alt="HVAC repair service by Rancho Air technician"
                fill
                style={{ objectFit: "cover", objectPosition: "center 60%" }}
              />
            </div>
            <div className="service-info">
              <h2>Repairs</h2>
              <p>
                Count on us for fast and effective repairs to address any issues and restore comfort. Our skilled
                technicians can diagnose and fix problems quickly, using quality parts and providing honest
                recommendations.
              </p>
              <ul className="service-features">
                <li>24/7 emergency service</li>
                <li>Accurate diagnosis</li>
                <li>Quality parts and labor</li>
                <li>Upfront pricing</li>
              </ul>
              <Link href="/contact" className="btn">
                Request Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="all-services" id="all-services">
        <div className="container">
          <h2>Our Complete Service Offerings</h2>
          <p className="section-description">
            At Rancho Air Conditioning & Heating, we provide a comprehensive range of HVAC services to meet all your
            heating and cooling needs.
          </p>

          <div className="services-list">
            <div className="service-category">
              <h3>Air Conditioning Services</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> A/C System Maintenance
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> A/C System Repair
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> A/C Filter Replacement
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> A/C System Dismantlement
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> A/C System Vent Cleaning
                </li>
              </ul>
            </div>

            <div className="service-category">
              <h3>Heating Services</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> Heating System Installation
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Heating System Maintenance
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Heating System Repair
                </li>
              </ul>
            </div>

            <div className="service-category">
              <h3>Ventilation Services</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> Ventilated Ceiling Repairs
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Ventilated Ceiling Installations
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Air Quality Assessment
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Ventilation System Optimization
                </li>
              </ul>
            </div>

            <div className="service-category">
              <h3>Controls & Accessories</h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> Thermostat Repair
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Thermostat Installation
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> And Many More
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Need HVAC Service?</h2>
          <p>Take advantage of our no-obligation free estimates to plan and budget for your HVAC needs.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn">
              Get a Free Estimate
            </Link>
            <Link href="/financing" className="btn btn-secondary">
              Financing Options
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
