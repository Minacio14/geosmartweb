"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-950 px-8 py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img src="/images/geosmart-logo.png" alt="GeoSMART" className="mb-6 h-12 w-auto" />
            <p className="text-sm font-light leading-relaxed text-neutral-400">
              Specialized consulting in geotechnics, geohydrology, geology, and environment.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-neutral-400 transition-colors hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/#servicos" className="text-sm text-neutral-400 transition-colors hover:text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/#sobre" className="text-sm text-neutral-400 transition-colors hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contato" className="text-sm text-neutral-400 transition-colors hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Areas of Expertise</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services/geotechnics" className="text-sm text-neutral-400 transition-colors hover:text-yellow-400">
                  Geotechnics & Geology
                </a>
              </li>
              <li>
                <a href="/services/geohydrology" className="text-sm text-neutral-400 transition-colors hover:text-yellow-400">
                  GeoHydrology & Hydraulics
                </a>
              </li>
              <li>
                <a href="/services/environment" className="text-sm text-neutral-400 transition-colors hover:text-yellow-400">
                  Environmental Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-neutral-400">Av. Ahmed Sekou Toure, nº 1432</li>
              <li className="text-sm text-neutral-400">Maputo, Moçambique</li>
              <li className="text-sm text-neutral-400">+258 85 353 535 2</li>
              <li>
                <a
                  href="mailto:info@geosmart-su.co.mz"
                  className="text-sm text-neutral-400 transition-colors hover:text-yellow-400"
                >
                  info@geosmart-su.co.mz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-neutral-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          {/* Copyright */}
          <p className="text-sm text-neutral-500">© 2025 GeoSMART, Lda. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 transition-colors hover:text-yellow-400" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 transition-colors hover:text-yellow-400" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 transition-colors hover:text-yellow-400" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 transition-colors hover:text-yellow-400" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
