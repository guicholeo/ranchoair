"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setShowThankYou(true)
        e.currentTarget.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx>{`
        .contact-form-container {
          backgroun-color: var(--medium-gray);
        }

        .contact-form {
          background-color: var(--medium-gray);
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--light-gray);
          border-radius: 4px;
          background-color: var(--black);
          color: var(--text-primary);
          transition: var(--transition-standard);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--blue);
          outline: none;
          box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.25);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group button {
          width: 100%;
        }

        .thank-you-popup {
          display: ${showThankYou ? "flex" : "none"};
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 1000;
          justify-content: center;
          align-items: center;
        }

        .thank-you-content {
          background-color: var(--dark-gray);
          border-radius: 8px;
          padding: 40px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: popupFadeIn 0.3s ease-out;
        }

        @keyframes popupFadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .thank-you-content i {
          font-size: 60px;
          color: #28a745;
          margin-bottom: 20px;
        }

        .thank-you-content h3 {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .thank-you-content p {
          margin-bottom: 25px;
        }

        .close-popup {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 24px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }

        .close-popup:hover {
          color: var(--text-primary);
        }

        .close-btn {
          padding: 10px 30px;
        }
      `}</style>

      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="hidden" name="access_key" value="17e932df-6fe2-4f12-a64e-a4098b3a27d6" />
          <input type="hidden" name="subject" value="New Contact Form Submission - Rancho Air Conditioning & Heating" />
          <input type="hidden" name="from_name" value="Rancho Air Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service" required>
              <option value="" disabled>
                Select a service
              </option>
              <option value="installation">Installation</option>
              <option value="service">Service</option>
              <option value="repair">Repair</option>
              <option value="maintenance">Maintenance</option>
              <option value="estimate">Free Estimate</option>
              <option value="other">Other (Please specify)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Message"}
            </button>
          </div>
        </form>

        <div className="thank-you-popup">
          <div className="thank-you-content">
            <span className="close-popup" onClick={() => setShowThankYou(false)}>
              &times;
            </span>
            <i className="fas fa-check-circle"></i>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
            <button className="btn close-btn" onClick={() => setShowThankYou(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
