"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Page Not Found</h2>
      <p>We're sorry, but the page you're looking for doesn't exist or has been moved.</p>
      <p>Please check the URL or navigate to one of our main pages:</p>

      <div className="error-links">
        <Link href="/" className="btn">
          Home
        </Link>
        <Link href="/services" className="btn btn-outline">
          Services
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
