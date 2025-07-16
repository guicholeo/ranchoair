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
            <option value="" disable>
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

      {showThankYou && (
        <div className="thank-you-popup" style={{ display: "flex" }}>
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
      )}
    </div>
  )
}
