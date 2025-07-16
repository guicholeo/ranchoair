"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link href="/" aria-label="Rancho Air Conditioning & Heating Home">
              <Image
                src="/logo.png"
                alt="Rancho Air Conditioning & Heating Logo"
                width={200}
                height={80}
                className="footer-logo-img"
              />
            </Link>
            <p>Quality air solutions you can trust</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/5129491447" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="tel:5129491447" aria-label="Call Us">
                <i className="fas fa-phone"></i>
              </a>
              <a href="sms:5129491447" aria-label="Text Us">
                <i className="fas fa-sms"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/financing">Financing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:5129491447">512-949-1447</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:contact@ranchoair.com">contact@ranchoair.com</a>
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Austin, TX
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rancho Air Conditioning & Heating. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
