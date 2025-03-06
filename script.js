// Add the startFloatingAnimation function that was missing
function startFloatingAnimation(element, index) {
  // Create unique animation name
  const animationName = `float-${index}`

  // Create random parameters for floating
  const duration = 15 + Math.random() * 10 // Between 15-25s
  const xDistance = 30 + Math.random() * 40 // Between 30-70px
  const yDistance = 30 + Math.random() * 40 // Between 30-70px
  const delay = Math.random() * 5 // Random delay up to 5s

  // Create keyframes for this specific animation
  const keyframes = `
    @keyframes ${animationName} {
      0% { transform: translate(0, 0); }
      25% { transform: translate(${xDistance}px, ${yDistance}px); }
      50% { transform: translate(${-xDistance}px, ${yDistance}px); }
      75% { transform: translate(${-xDistance}px, ${-yDistance}px); }
      100% { transform: translate(0, 0); }
    }
  `

  // Add the keyframes to the document
  const styleSheet = document.createElement("style")
  styleSheet.textContent = keyframes
  document.head.appendChild(styleSheet)

  // Apply the animation to the element
  element.style.animation = `${animationName} ${duration}s infinite ease-in-out ${delay}s`
}

// Fix the Projects page functionality by moving it outside the nested DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const header = document.querySelector("header")

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  }

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

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show")
      this.classList.toggle("active")
    })
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      this.classList.toggle("active")

      // Close other open FAQ items
      faqQuestions.forEach((item) => {
        if (item !== question) {
          item.classList.remove("active")
        }
      })
    })
  })

  // Form Submission with Web3Forms
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      // Don't prevent default as we want the form to submit to Web3Forms

      // Show loading state
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent
      submitButton.textContent = "Sending..."
      submitButton.disabled = true

      // The form will be handled by Web3Forms
      // We'll just add a timeout to reset the button if the page doesn't redirect
      setTimeout(() => {
        submitButton.textContent = originalText
        submitButton.disabled = false
      }, 8000)
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const target = document.querySelector(this.getAttribute("href"))

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Add animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".review-card, .cta-box")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.classList.add("animate")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on load

  // Update the Projects page functionality section
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
})

