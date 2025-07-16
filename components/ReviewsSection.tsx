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
    <>
      <style jsx>{`
        .reviews {
          background-color: var(--medium-gray);
          padding: 100px 0;
        }

        .reviews h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 50px;
        }

        .reviews-slider {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          padding: 20px 0;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .reviews-slider::-webkit-scrollbar {
          display: none;
        }

        .review-card {
          flex: 0 0 calc(33.333% - 20px);
          min-width: 300px;
          background-color: var(--dark-gray);
          border-radius: 8px;
          padding: 30px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: var(--transition-standard);
          scroll-snap-align: start;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .review-stars {
          color: #ffc107;
          font-size: 18px;
          margin-bottom: 15px;
        }

        .review-text {
          font-style: italic;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .review-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          background-color: var(--light-gray);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .review-avatar i {
          font-size: 24px;
          color: #4285f4;
        }

        .review-info h4 {
          font-size: 16px;
          margin-bottom: 5px;
        }

        .review-info p {
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
        }

        .reviews-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .review-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--light-gray);
          cursor: pointer;
          transition: var(--transition-standard);
        }

        .review-dot.active {
          background: var(--gradient-hot-cold);
          transform: scale(1.2);
        }

        @media (max-width: 992px) {
          .review-card {
            flex: 0 0 calc(50% - 15px);
          }
        }

        @media (max-width: 768px) {
          .review-card {
            flex: 0 0 calc(100% - 30px);
          }
        }
      `}</style>

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
    </>
  )
}
