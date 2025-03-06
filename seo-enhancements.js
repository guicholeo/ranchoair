// SEO and User Experience Enhancements

// Lazy loading for images
document.addEventListener("DOMContentLoaded", () => {
  // Check if browser supports IntersectionObserver
  if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]')

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.srcset = lazyImage.dataset.srcset
          lazyImage.classList.remove("lazy")
          imageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach((lazyImage) => {
      imageObserver.observe(lazyImage)
    })
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    let lazyLoadThrottleTimeout

    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout)
      }

      lazyLoadThrottleTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset
        const lazyImages = document.querySelectorAll('img[loading="lazy"]')

        lazyImages.forEach((lazyImage) => {
          if (lazyImage.offsetTop < window.innerHeight + scrollTop) {
            lazyImage.src = lazyImage.dataset.src
            lazyImage.srcset = lazyImage.dataset.srcset
            lazyImage.classList.remove("lazy")
          }
        })

        if (lazyImages.length === 0) {
          document.removeEventListener("scroll", lazyLoad)
          window.removeEventListener("resize", lazyLoad)
          window.removeEventListener("orientationChange", lazyLoad)
        }
      }, 20)
    }

    document.addEventListener("scroll", lazyLoad)
    window.addEventListener("resize", lazyLoad)
    window.addEventListener("orientationChange", lazyLoad)
  }

  // Add structured data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rancho Air Conditioning & Heating",
    image: "https://ranchoair.com/logo.svg",
    url: "https://ranchoair.com",
    telephone: "512-949-1447",
    email: "RanchoAirConditioning@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Elgin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.35,
      longitude: -97.75,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
  }

  // Add schema to page
  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.text = JSON.stringify(localBusinessSchema)
  document.head.appendChild(script)

  // Check if gtag is defined, if not, define a dummy function
  if (typeof gtag === "undefined") {
    window.gtag =
      window.gtag ||
      (() => {
        ;(gtag.q = gtag.q || []).push(arguments)
      })
    gtag.l = new Date()
  }

  // Track outbound links for analytics
  const trackOutboundLink = (url) => {
    gtag("event", "click", {
      event_category: "outbound",
      event_label: url,
      transport_type: "beacon",
    })
  }

  // Add tracking to all external links
  const links = document.querySelectorAll('a[href^="http"]')
  links.forEach((link) => {
    if (link.hostname !== window.location.hostname) {
      link.addEventListener("click", () => {
        trackOutboundLink(link.href)
      })
    }
  })

  // Add skip to content link for accessibility
  const skipLink = document.createElement("a")
  skipLink.href = "#main"
  skipLink.className = "skip-link"
  skipLink.textContent = "Skip to content"
  document.body.insertBefore(skipLink, document.body.firstChild)

  // Add ID to main content area if it doesn't exist
  const main = document.querySelector("main")
  if (main && !main.id) {
    main.id = "main"
  }
})

