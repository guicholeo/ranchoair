"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/financing", label: "Financing" },
    { href: "/contact", label: "Contact" },
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <Link href="/" aria-label="Rancho Air Conditioning & Heating Home">
              <Image
                src="/logo.png"
                alt="Rancho Air Conditioning & Heating Logo"
                width={200}
                height={80}
                className="logo-img"
                priority
              />
            </Link>
          </div>
          <nav aria-label="Main Navigation">
            <ul className={`nav-links ${isMobileMenuOpen ? "show" : ""}`}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : ""}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
              aria-label="Menu Toggle"
              role="button"
              tabIndex={0}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
