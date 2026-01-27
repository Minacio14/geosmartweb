"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StickyNavbar } from "@/components/sticky-navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function TrainingPage() {
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
                  Training & Consulting
                </h1>
                <p className="mt-4 text-base text-neutral-400">
                  Customized training and mentoring programs for technical skill development in geotechnics, mining, and environmental fields.
                </p>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="hidden h-96 lg:flex lg:items-center lg:justify-center">
              <img
                src="/images/service-training-side.jpg"
                alt="Training & Consulting"
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
                <h2 className="mb-8 text-3xl font-bold text-white">Our Programs</h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Geotechnical engineering fundamentals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Advanced slope stability and dam safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Mining geotechnics and tailings management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Hydrogeological studies and assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                    <span className="text-lg">Environmental assessment and remediation</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="mb-8 text-3xl font-bold text-white">Training Methods</h2>
                <ul className="space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">On-site workshops and seminars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Customized in-house programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Virtual and distance learning options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Field training and practical experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-lg">Consulting and mentorship services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                    <span>Hydrogeology and environmental management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                    <span>Mining sector specialized courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                    <span>Personalized mentoring programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
                    <span>Hands-on practical workshops</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="mb-4 text-2xl font-bold text-white">Who We Train</h2>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>Professionals seeking technical advancement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>Corporate teams with specific needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>Students and recent graduates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>Organizations building internal capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                    <span>Technical excellence development</span>
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
              <h3 className="mb-4 text-2xl font-bold text-white">Invest in your team's expertise</h3>
              <p className="mb-8 text-neutral-300">Develop technical skills and knowledge with our specialized training programs.</p>
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
