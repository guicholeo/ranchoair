// Common functionality for all pages
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

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show")
      this.classList.toggle("active")
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

  // Add floating animation function
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

})

