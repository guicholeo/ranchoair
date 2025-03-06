// Contact page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Form Submission with Web3Forms
  const contactForm = document.getElementById("contactForm")
  const thankYouPopup = document.getElementById("thankYouPopup")
  const closePopupButtons = document.querySelectorAll(".close-popup, .close-btn")

  // Reset the form when the page loads
  if (contactForm) {
    contactForm.reset()
  }

  // Add client-side validation for phone and email
  if (contactForm) {
    const phoneInput = document.getElementById("phone")
    const emailInput = document.getElementById("email")

    // Phone validation - ensure exactly 10 digits
    if (phoneInput) {
      phoneInput.addEventListener("input", function (e) {
        // Remove any non-digit characters
        this.value = this.value.replace(/\D/g, "")

        // Limit to 10 digits
        if (this.value.length > 10) {
          this.value = this.value.slice(0, 10)
        }

        // Update validation state
        if (this.value.length === 10) {
          this.setCustomValidity("")
        } else {
          this.setCustomValidity("Please enter a 10-digit phone number")
        }
      })
    }

    // Email validation
    if (emailInput) {
      emailInput.addEventListener("input", function (e) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (emailPattern.test(this.value)) {
          this.setCustomValidity("")
        } else {
          this.setCustomValidity("Please enter a valid email address")
        }
      })
    }
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault() // Prevent default form submission

      // Show loading state
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent
      submitButton.textContent = "Sending..."
      submitButton.disabled = true

      // Get form data
      const formData = new FormData(this)
      const object = Object.fromEntries(formData)
      const json = JSON.stringify(object)

      // Submit form data to Web3Forms
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then((response) => response.json())
        .then((data) => {
          // Show thank you popup
          thankYouPopup.classList.add("active")

          // Reset form
          contactForm.reset()

          // Reset button
          submitButton.textContent = originalText
          submitButton.disabled = false
        })
        .catch((error) => {
          console.error("Error:", error)
          alert("There was an error submitting the form. Please try again.")

          // Reset button
          submitButton.textContent = originalText
          submitButton.disabled = false
        })
    })
  }

  // Close thank you popup
  if (closePopupButtons) {
    closePopupButtons.forEach((button) => {
      button.addEventListener("click", () => {
        thankYouPopup.classList.remove("active")
      })
    })
  }

  // Close popup when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === thankYouPopup) {
      thankYouPopup.classList.remove("active")
    }
  })

  // Add FAQ functionality
  const faqQuestions = document.querySelectorAll(".faq-question")

  if (faqQuestions.length) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        this.classList.toggle("active")

        // Get the next element sibling which is the answer
        const answer = this.nextElementSibling

        // Toggle display of the answer
        if (answer.style.display === "block") {
          answer.style.display = "none"
        } else {
          answer.style.display = "block"
        }

        // Close other open FAQ items
        faqQuestions.forEach((item) => {
          if (item !== question && item.classList.contains("active")) {
            item.classList.remove("active")
            item.nextElementSibling.style.display = "none"
          }
        })
      })
    })
  }
})

