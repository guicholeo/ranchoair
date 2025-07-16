"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          background-color: var(--dark-gray);
          padding: 80px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo-img {
          max-height: 50px;
          width: auto;
          margin-bottom: 15px;
        }

        .footer-links h3,
        .footer-contact h3 {
          font-size: 18px;
          margin-bottom: 20px;
          position: relative;
        }

        .footer-links h3::after,
        .footer-contact h3::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50px;
          height: 2px;
          background: var(--gradient-hot-cold);
        }

        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .footer-links a:hover {
          color: var(--blue);
        }

        .footer-contact p {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-contact i {
          color: var(--blue);
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 14px;
          color: var(--text-secondary);
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background-color: var(--blue);
          transform: translateY(-3px);
        }

        .social-links a i {
          font-size: 16px;
        }

        @media (max-width: 576px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <footer>
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
    </>
  )
}
