// Home page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Reviews slider functionality
  const reviewsSlider = document.querySelector(".reviews-slider")
  const reviewDots = document.querySelectorAll(".review-dot")

  if (reviewsSlider && reviewDots.length) {
    // Initialize the slider
    let currentSlide = 0
    const reviewCards = reviewsSlider.querySelectorAll(".review-card")
    const totalSlides = Math.ceil(reviewCards.length / 3)

    // Set up the dots
    reviewDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        updateSlider()
      })
    })

    function updateSlider() {
      // Update active dot
      reviewDots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })

      // Scroll to the current slide
      const slideWidth = reviewCards[0].offsetWidth + 30 // card width + gap
      reviewsSlider.scrollTo({
        left: currentSlide * slideWidth * 3,
        behavior: "smooth",
      })
    }

    // Auto-scroll functionality
    let autoScroll = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides
      updateSlider()
    }, 5000)

    // Pause auto-scroll on hover
    reviewsSlider.addEventListener("mouseenter", () => {
      clearInterval(autoScroll)
    })

    reviewsSlider.addEventListener("mouseleave", () => {
      autoScroll = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides
        updateSlider()
      }, 5000)
    })

    // Update on scroll
    reviewsSlider.addEventListener("scroll", () => {
      const slideWidth = reviewCards[0].offsetWidth + 30
      const scrollPosition = reviewsSlider.scrollLeft
      const newSlide = Math.round(scrollPosition / (slideWidth * 3))

      if (newSlide !== currentSlide) {
        currentSlide = newSlide

        reviewDots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      }
    })
  }
})

