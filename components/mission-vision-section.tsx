"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Handshake } from "lucide-react"

export function MissionVisionSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide high-quality geotechnical, hydrological, and environmental consulting services that empower sustainable development, ensuring technical excellence and innovative solutions for our clients' most complex challenges.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading consulting firm in Mozambique and the region, recognized for our technical expertise, innovative approach, and unwavering commitment to sustainable development and environmental stewardship.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Technical Excellence • Integrity & Ethics • Innovation & Technology • Sustainability • Client-Focused Approach • Continuous Improvement • Safety First • Collaborative Partnership",
    },
    {
      icon: Handshake,
      title: "Our Commitment",
      description:
        "We are committed to delivering exceptional results through rigorous technical analysis, cutting-edge technology, and a deep understanding of local conditions. Our team ensures every project meets the highest standards of quality, safety, and environmental responsibility.",
    },
  ]

  return (
    <section className="bg-neutral-900 px-8 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 p-8 transition-all hover:border-yellow-400/50 lg:p-10"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10 transition-colors group-hover:bg-yellow-400/20">
                <item.icon className="h-7 w-7 text-yellow-400" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>

              {/* Description */}
              <p className="leading-relaxed text-neutral-300">{item.description}</p>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-yellow-400/5 transition-all group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
