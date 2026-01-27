"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StickyNavbar } from "@/components/sticky-navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function GeohydrologyPage() {
  return (
    <>
      <StickyNavbar />
      <main>
        {/* Header with Side Image */}
        <section className="relative overflow-hidden bg-neutral-950 pt-20">
          <div className="grid min-h-96 grid-cols-1 lg:grid-cols-2 lg:gap-12">
            {/* Left Content - Compact */}
            <div className="flex flex-col justify-center px-8 py-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl font-bold text-white md:text-4xl">
                  GeoHydrology & Hydraulic Studies
                </h1>
                <p className="mt-4 text-base text-neutral-400">
                  End-to-end subsurface investigation and water engineering solutions with advanced hydrological and hydraulic studies.
                </p>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="hidden h-96 lg:flex lg:items-center lg:justify-center">
              <img
                src="/images/service-geohydrology-side.jpg"
                alt="GeoHydrology & Hydraulic Studies"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section - Full Width */}
        <section className="bg-neutral-950 px-8 py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            {/* Services Grid */}
            <div className="mb-24 grid gap-16 md:grid-cols-2 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-8 text-3xl font-bold text-white">Our Expertise</h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Groundwater and surface water flow studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Hydrogeological modelling and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Contamination assessment and monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Groundwater prospecting and evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Flood risk assessment and mitigation</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="mb-8 text-3xl font-bold text-white">Technical Services</h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Permeability tests in soils and rocks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Water wells and boreholes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Hydraulic design and water-supply systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Dam design and water-risk assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Geophysical prospecting and surveys</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-8 text-center lg:p-12"
            >
              <h3 className="mb-4 text-2xl font-bold text-white">Need hydrological solutions?</h3>
              <p className="mb-8 text-neutral-300">Let us help you manage water resources effectively and sustainably.</p>
              <a href="/#contato">
                <Button className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-neutral-900 transition-all hover:bg-yellow-300">
                  Contact Us
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
