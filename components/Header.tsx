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
    <>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 15px 0;
          transition: var(--transition-standard);
        }

        header.scrolled {
          padding: 10px 0;
          background-color: rgba(10, 10, 10, 0.95);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-img {
          max-height: 50px;
          width: auto;
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          font-size: 16px;
          font-weight: 500;
          position: relative;
          padding: 5px 0;
          color: var(--text-primary);
          text-decoration: none;
        }

        .nav-links a:hover {
          color: var(--blue);
        }

        .nav-links a.active {
          color: var(--blue);
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-hot-cold);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 2px;
          background-color: var(--white);
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: ${isMobileMenuOpen ? "flex" : "none"};
            position: absolute;
            top: 70px;
            right: 0;
            width: 100%;
            flex-direction: column;
            align-items: center;
            background-color: var(--dark-gray);
            padding: 20px 0;
            gap: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>

      <header className={isScrolled ? "scrolled" : ""}>
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
              <ul className="nav-links">
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
    </>
  )
}
