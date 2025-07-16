"use client"

import { useState, useEffect } from "react"

interface Review {
  id: number
  stars: number
  text: string
  author: string
  source: string
}

const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    text: "I can not say enough great things about Celso and his crew. He is always very responsive, honest and does the best work. I have been working with him for the last two years and keep passing his number out like candy. I trust him with my homes and always know he will be available when I call and do amazing work. I also want to comment his pricing is fair and honest, which is very important in this business!",
    author: "Dee",
    source: "Google Review",
  },
  {
    id: 2,
    stars: 5,
    text: "Celso has been great to work with. He has installed two huge minisplit systems at two garages. After seeing what a great work he does, he has been my top choice to call when my central AC at home is not working. From service to installation, he can do it all and with great quality.",
    author: "Jose",
    source: "Google Review",
  },
  {
    id: 3,
    stars: 5,
    text: "Rancho has been great to work with and very skilled with being able to fix any issues I've had with my AC units over the past year. What impressed me the most is how efficient they were and also quick to respond anytime I reached out about one of my properties. Highly recommend.",
    author: "Marcus",
    source: "Google Review",
  },
]

export default function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(reviews.length / 3)

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(autoScroll)
  }, [totalSlides])

  return (
    <section className="reviews" id="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="reviews-slider">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-stars" aria-label={`${review.stars} out of 5 stars`}>
                {[...Array(review.stars)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="review-avatar">
                  <i className="fab fa-google"></i>
                </div>
                <div className="review-info">
                  <h4>{review.author}</h4>
                  <p>{review.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews-nav" aria-label="Review Navigation">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`review-dot ${index === currentSlide ? "active" : ""}`}
              aria-label={`Page ${index + 1}`}
              role="button"
              tabIndex={0}
              onClick={() => setCurrentSlide(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentSlide(index)
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
