"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StickyNavbar } from "@/components/sticky-navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

interface ServiceCard {
  title: string
  icon: string
  frontDescription: string
  backDetails: string[]
}

export default function GeotechnicsPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const services: ServiceCard[] = [
    {
      title: "Site Investigation",
      icon: "🔬",
      frontDescription: "Comprehensive geotechnical and geological site investigations.",
      backDetails: [
        "Soil and rock sampling and testing",
        "In-situ testing (SPT, CPT, pressuremeter)",
        "Geophysical surveys",
        "Geological mapping and interpretation",
        "Ground investigation reports",
      ],
    },
    {
      title: "Foundation Design",
      icon: "🏗️",
      frontDescription: "Expert foundation engineering and design solutions.",
      backDetails: [
        "Shallow and deep foundation design",
        "Bearing capacity analysis",
        "Settlement predictions",
        "Pile foundation design and testing",
        "Foundation improvement techniques",
      ],
    },
    {
      title: "Slope Stability",
      icon: "⛰️",
      frontDescription: "Slope stability analysis and landslide risk assessment.",
      backDetails: [
        "Slope stability analysis and modeling",
        "Landslide risk assessment",
        "Slope stabilization design",
        "Retaining wall design",
        "Erosion control solutions",
      ],
    },
    {
      title: "Rock Mechanics",
      icon: "🪨",
      frontDescription: "Advanced rock mechanics and engineering geology.",
      backDetails: [
        "Rock mass characterization",
        "Tunnel and cavern design support",
        "Rock slope engineering",
        "Blasting design and vibration control",
        "Mining geotechnics",
      ],
    },
  ]

  const additionalServices = [
    { icon: "📊", title: "Lab Testing" },
    { icon: "🛠️", title: "Instrumentation" },
    { icon: "🌍", title: "Geohazards" },
    { icon: "📐", title: "Engineering" },
  ]

  return (
    <>
      <StickyNavbar />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Header */}
        <section className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 px-8 py-24 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-white lg:text-5xl"
            >
              Geotechnics & Geology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto max-w-3xl text-lg text-neutral-300"
            >
              Comprehensive geotechnical engineering and geological consulting services.
            </motion.p>
          </div>
        </section>

        {/* Services Cards Grid */}
        <section className="bg-neutral-950 px-8 py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">Our Services</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group perspective-1000"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative h-96 w-full cursor-pointer transition-transform duration-700"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCard === index ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                    onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border-2 border-neutral-800 bg-neutral-900 p-8 text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="mb-6 text-6xl">{service.icon}</div>
                      <h3 className="mb-4 text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-sm text-neutral-400">{service.frontDescription}</p>
                      <div className="mt-6 text-xs text-yellow-400">Click to see details →</div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center rounded-lg border-2 border-yellow-400 bg-neutral-900 p-6"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <h3 className="mb-4 text-center text-lg font-bold text-yellow-400">{service.title}</h3>
                      <ul className="space-y-2">
                        {service.backDetails.map((detail, i) => (
                          <li key={i} className="flex items-start text-sm text-neutral-300">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 text-center text-xs text-yellow-400">Click to flip back</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Solutions */}
        <section className="bg-neutral-900 px-8 py-16 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-8 text-center text-2xl font-bold text-white">Additional Solutions</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-800 text-3xl">
                    {service.icon}
                  </div>
                  <span className="text-sm text-neutral-400">{service.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-neutral-950 px-8 py-24 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-12 text-center"
            >
              <h3 className="mb-4 text-3xl font-bold text-white">Ready to get started?</h3>
              <p className="mb-8 text-lg text-neutral-300">
                Contact us to discuss your geotechnical engineering needs.
              </p>
              <a href="/#contato">
                <Button className="rounded-full bg-yellow-400 px-10 py-6 text-lg font-semibold text-neutral-900 transition-all hover:bg-yellow-300">
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
