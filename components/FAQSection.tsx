"use client"

import { useState } from "react"

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How often should I service my HVAC system?",
    answer:
      "We recommend servicing your HVAC system twice a year – once before the cooling season and once before the heating season. Regular maintenance helps ensure efficiency and can extend the life of your system.",
  },
  {
    id: 2,
    question: "How long does a typical HVAC system last?",
    answer:
      "With proper maintenance, a typical HVAC system can last 15-20 years. However, this can vary based on usage patterns, local climate, and the quality of the initial installation.",
  },
  {
    id: 3,
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer flexible financing options to help make your HVAC investment more manageable. Please contact our office for details on current promotions and financing plans.",
  },
  {
    id: 4,
    question: "What brands do you install and service?",
    answer:
      "We work with all major HVAC brands including Carrier, Trane, Lennox, Rheem, and many others. Our technicians are trained to install and service a wide range of equipment.",
  },
]

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <>
      <style jsx>{`
        .faq {
          background-color: var(--dark-gray);
        }

        .faq h2 {
          font-size: 28px;
          margin-bottom: 40px;
          text-align: center;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          cursor: pointer;
        }

        .faq-question h3 {
          font-size: 18px;
          margin-bottom: 0;
        }

        .faq-toggle {
          font-size: 24px;
          transition: transform 0.3s ease;
        }

        .faq-question.active .faq-toggle {
          transform: rotate(45deg);
        }

        .faq-answer {
          padding-bottom: 20px;
          display: ${activeId ? "block" : "none"};
        }
      `}</style>

      <section className="faq" id="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div
                  className={`faq-question ${activeId === faq.id ? "active" : ""}`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">+</span>
                </div>
                {activeId === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
