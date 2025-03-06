// Projects page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Projects page functionality with masonry layout
  const projectsContainer = document.getElementById("projectsContainer")

  if (projectsContainer) {
    // List of images from the pics folder
    const projectImages = [
      "commercial.jpg",
      "finance.jpeg",
      "inside.jpeg",
      "inside1.jpeg",
      "inside2.jpeg",
      "inside3.jpg",
      "inside4.jpeg",
      "inside5.jpeg",
      "insideroof.jpeg",
      "insideroof2.jpg",
      "insidework.jpg",
      "installation.jpg",
      "landing.jpeg",
      "maintance.jpg",
      "newconstruction.jpg",
      "outside1.jpeg",
      "outside2.jpeg",
      "outside3.jpeg",
      "outside4.jpg",
      "outside6.jpg",
      "outsiderepair.jpg",
      "outsidework2.jpg",
      "repair.jpeg",
      "repair2.jpg",
      "repair3.jpeg",
      "sales.jpg",
      "sales2.jpeg",
    ]

    // Create masonry layout
    projectImages.forEach((image, index) => {
      // Create the gallery image element
      const galleryImage = document.createElement("div")
      galleryImage.className = "gallery-image"

      // Create the image element
      const img = document.createElement("img")
      img.src = `pics/${image}`
      img.alt = `Project Image ${index + 1}`
      img.loading = "lazy" // Add lazy loading for better performance

      // Add the image to the gallery item
      galleryImage.appendChild(img)

      // Add the gallery item to the container
      projectsContainer.appendChild(galleryImage)

      // Add click event to view image
      galleryImage.addEventListener("click", () => {
        const galleryFocus = document.querySelector(".gallery-focus")
        const galleryOverlay = document.querySelector(".gallery-overlay")
        const focusImg = galleryFocus.querySelector("img")

        // Set the selected image
        focusImg.src = `pics/${image}`
        focusImg.alt = `Project Image ${index + 1}`

        // Show the gallery view
        galleryFocus.classList.add("active")
        galleryOverlay.classList.add("active")

        // Prevent scrolling on the body when lightbox is open
        document.body.style.overflow = "hidden"
      })
    })

    // Close gallery view when clicking the close button
    const galleryFocusClose = document.querySelector(".gallery-focus-close")
    const galleryFocus = document.querySelector(".gallery-focus")
    const galleryOverlay = document.querySelector(".gallery-overlay")

    if (galleryFocusClose) {
      galleryFocusClose.addEventListener("click", () => {
        galleryFocus.classList.remove("active")
        galleryOverlay.classList.remove("active")

        // Re-enable scrolling
        document.body.style.overflow = ""
      })
    }

    // Close when clicking outside the image
    if (galleryOverlay) {
      galleryOverlay.addEventListener("click", (e) => {
        // Only close if clicking directly on the overlay, not on the image
        if (e.target === galleryOverlay) {
          galleryFocus.classList.remove("active")
          galleryOverlay.classList.remove("active")

          // Re-enable scrolling
          document.body.style.overflow = ""
        }
      })
    }
  }

  // Reviews slider functionality (same as home page)
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

