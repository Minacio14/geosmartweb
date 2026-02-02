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

export default function EnvironmentPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const services: ServiceCard[] = [
    {
      title: "Environmental Studies",
      icon: "🌿",
      frontDescription: "Comprehensive environmental impact assessments and studies.",
      backDetails: [
        "Environmental Impact Assessments (EIA)",
        "Environmental baseline studies",
        "Biodiversity assessments",
        "Social impact assessments",
        "Environmental auditing",
      ],
    },
    {
      title: "Licensing",
      icon: "📋",
      frontDescription: "Environmental licensing and regulatory compliance support.",
      backDetails: [
        "Environmental licensing processes",
        "Permit applications and renewals",
        "Regulatory compliance audits",
        "Environmental management plans",
        "Stakeholder engagement",
      ],
    },
    {
      title: "Pollution Control",
      icon: "♻️",
      frontDescription: "Pollution prevention and contamination management solutions.",
      backDetails: [
        "Soil and groundwater contamination assessment",
        "Remediation design and implementation",
        "Waste management planning",
        "Air quality monitoring",
        "Noise and vibration assessment",
      ],
    },
    {
      title: "Sustainability",
      icon: "🌍",
      frontDescription: "Sustainable development and climate resilience solutions.",
      backDetails: [
        "Climate change adaptation strategies",
        "Carbon footprint assessment",
        "Sustainability reporting",
        "Green infrastructure design",
        "Ecosystem restoration",
      ],
    },
  ]

  const additionalServices = [
    { icon: "🔬", title: "Lab Analysis" },
    { icon: "📊", title: "Monitoring" },
    { icon: "🏞️", title: "Conservation" },
    { icon: "💼", title: "Consulting" },
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
              Environmental Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto max-w-3xl text-lg text-neutral-300"
            >
              Integrated environmental solutions with focus on sustainability and preservation.
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
              <h3 className="mb-4 text-3xl font-bold text-white">Build a sustainable future</h3>
              <p className="mb-8 text-lg text-neutral-300">
                Let us help you implement environmental solutions that create positive impact.
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
