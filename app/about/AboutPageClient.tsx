"use client"

import ReviewsSection from "@/components/ReviewsSection"
import Link from "next/link"

export default function AboutPageClient() {
  return (
    <>
      <style jsx>{`
        .about-content {
          background-color: var(--dark-gray);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        .about-text h2 {
          font-size: 28px;
          margin-bottom: 20px;
          margin-top: 40px;
        }

        .about-text h2:first-child {
          margin-top: 0;
        }

        .founder-story {
          margin: 40px 0;
          background-color: var(--medium-gray);
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .founder-story h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .founder-content p {
          margin-bottom: 15px;
          line-height: 1.8;
        }

        .values {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          margin: 40px auto;
          perspective: 1000px;
        }

        .value-item {
          background: linear-gradient(145deg, var(--medium-gray), var(--dark-gray));
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
          width: 220px;
          flex: 0 0 auto;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transform-style: preserve-3d;
        }

        .value-item::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
          transform: rotate(30deg);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .value-item:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }

        .value-item:hover::before {
          opacity: 1;
        }

        .value-item h3 {
          font-size: 20px;
          margin-bottom: 15px;
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        .value-item h3::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: var(--gradient-hot-cold);
          transition: width 0.3s ease;
        }

        .value-item:hover h3::after {
          width: 60px;
        }

        .value-item p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 15px;
          transition: color 0.3s ease;
        }

        .value-item:hover p {
          color: var(--text-primary);
        }

        .expertise {
          background-color: var(--dark-gray);
          text-align: center;
          padding: 80px 0;
        }

        .expertise h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .expertise-content p {
          max-width: 800px;
          margin: 0 auto 40px;
          font-size: 17px;
          line-height: 1.7;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .expertise-item {
          background-color: var(--medium-gray);
          padding: 30px;
          border-radius: 8px;
          transition: var(--transition-standard);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .expertise-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .expertise-item i {
          font-size: 36px;
          margin-bottom: 15px;
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .expertise-item h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .expertise-item p {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .values {
            justify-content: space-around;
            perspective: none;
          }

          .value-item {
            width: calc(50% - 20px);
            min-width: 200px;
          }

          .expertise-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .expertise-item {
            padding: 20px;
          }
        }

        @media (max-width: 576px) {
          .value-item {
            width: 100%;
            transform: none !important;
          }

          .values {
            gap: 20px;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
