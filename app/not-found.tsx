"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <style jsx>{`
        .error-container {
          text-align: center;
          padding: 100px 20px;
          max-width: 800px;
          margin: 0 auto;
        }

        .error-code {
          font-size: 120px;
          font-weight: 700;
          color: var(--blue);
          margin: 0;
          line-height: 1;
          background: var(--gradient-hot-cold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .error-message {
          font-size: 24px;
          margin: 20px 0 40px;
        }

        .error-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .error-code {
            font-size: 80px;
          }

          .error-message {
            font-size: 20px;
          }
        }
      `}</style>

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
    </>
  )
}
