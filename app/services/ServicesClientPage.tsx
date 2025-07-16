"use client"
import Link from "next/link"
import Image from "next/image"

export default function ServicesClientPage() {
  return (
    <>
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
