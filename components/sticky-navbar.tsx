"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    if (targetId && window.location.pathname === "/") {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-200 lg:px-16 ${
        isScrolled ? "bg-neutral-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo - Links to Home */}
      <a href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
        <img src="/images/geosmart-logo.png" alt="GeoSMART" className="h-10 w-auto" />
      </a>

      {/* Navigation Links */}
      <div className="hidden items-center gap-12 md:flex">
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
          className="text-base font-medium text-neutral-200 transition-colors hover:text-yellow-400"
        >
          Home
        </a>
        <a
          href="/#servicos"
          onClick={(e) => handleNavigation(e, "servicos")}
          className="text-base font-medium text-neutral-200 transition-colors hover:text-yellow-400"
        >
          Services
        </a>
        <a
          href="/#sobre"
          onClick={(e) => handleNavigation(e, "sobre")}
          className="text-base font-medium text-neutral-200 transition-colors hover:text-yellow-400"
        >
          About Us
        </a>
        <a
          href="/#contato"
          onClick={(e) => handleNavigation(e, "contato")}
        >
          <Button className="rounded-full bg-yellow-400 px-8 py-2 text-base font-semibold text-neutral-900 transition-all hover:bg-yellow-500 hover:shadow-lg">
            Contact
          </Button>
        </a>
      </div>
    </motion.nav>
  )
}
