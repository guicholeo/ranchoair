"use client"

import Link from "next/link"
import Image from "next/image"

export default function FinancingClientPage() {
  return (
    <>
      <section className="page-header hero smaller-hero">
        <div className="hero-content">
          <h1>Financing Options</h1>
          <p>Affordable solutions for your HVAC needs</p>
        </div>
      </section>

      <section className="financing-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Making Comfort Affordable</h2>
            <p>
              At Rancho Air Conditioning & Heating, we understand that investing in a new HVAC system or unexpected
              repairs can be a significant expense. That's why we offer flexible financing options to help make your
              comfort more affordable.
            </p>
            <p>
              Our financing solutions are designed to fit various budgets and needs, allowing you to get the HVAC
              services you need now while paying over time with manageable monthly payments.
            </p>
          </div>
        </div>
      </section>

      <section className="financing-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Benefits of Financing Your HVAC Project</h2>
              <ul className="benefits-list">
                <li>
                  <i className="fas fa-check"></i> Preserve your savings and emergency funds
                </li>
                <li>
                  <i className="fas fa-check"></i> Enjoy immediate comfort without waiting to save up
                </li>
                <li>
                  <i className="fas fa-check"></i> Upgrade to a more energy-efficient system that can save money on
                  utility bills
                </li>
                <li>
                  <i className="fas fa-check"></i> Manage your budget with predictable monthly payments
                </li>
                <li>
                  <i className="fas fa-check"></i> Potential tax benefits (consult your tax advisor)
                </li>
                <li>
                  <i className="fas fa-check"></i> Improve your home's value with modern, efficient HVAC equipment
                </li>
              </ul>
            </div>
            <div className="benefits-image">
              <Image
                src="/pics/finance.jpeg"
                alt="Family enjoying comfortable home with financed HVAC system"
                width={500}
                height={350}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="financing-apply">
        <div className="container">
          <h2>Ready to Apply?</h2>
          <p>Take the first step toward affordable comfort by applying for financing today.</p>
          <div className="apply-buttons">
            <a
              href="https://accreditservices.com/apply-for-credit/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn"
            >
              Apply for AC Credit
            </a>
            <Link href="/contact" className="btn btn-outline">
              Contact Us for More Information
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
