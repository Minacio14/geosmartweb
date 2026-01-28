"use client"

import { motion } from "framer-motion"

export function WhoWeAreSection() {
  return (
    <section id="sobre" className="bg-neutral-950 px-8 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src="/images/about-us-hero.jpg"
              alt="GeoSMART team collaboration"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
          </motion.div>

          {/* Right Column - Subtitle and Large Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-yellow-400">About Us</h2>
            <p className="text-pretty text-3xl font-light leading-relaxed text-neutral-200 lg:text-4xl">
              GeoSMART is a specialized consulting firm delivering <span className="font-normal text-white">innovative geotechnical, hydrological, and environmental solutions</span> grounded in technical excellence and sustainability commitment. We combine deep expertise with <span className="font-normal text-white">cutting-edge technology</span> to transform complex engineering challenges into sustainable results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
