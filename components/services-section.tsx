"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "Geotechnics & Geology",
    description:
      "Comprehensive geotechnical and geological engineering solutions for infrastructure, mining, and environmental projects.",
    href: "/services/geotechnics",
  },
  {
    number: "02",
    title: "GeoHydrology & Hydraulic Studies",
    description:
      "Advanced hydrological and hydraulic studies for water resource management, dam safety, and environmental assessment.",
    href: "/services/geohydrology",
  },
  {
    number: "03",
    title: "Mining & Tailings Management",
    description:
      "Specialized expertise in mining geotechnics, tailings dam design, and mine closure with sustainability focus.",
    href: "/services/mining",
  },
  {
    number: "04",
    title: "Environmental Solutions",
    description:
      "Environmental impact assessment, remediation, and rehabilitation projects with long-term sustainability commitment.",
    href: "/services/environment",
  },
  {
    number: "05",
    title: "Monitoring & Evaluation",
    description:
      "Real-time monitoring systems and technical evaluation services ensuring safety and compliance throughout project lifecycle.",
    href: "/services/monitoring",
  },
  {
    number: "06",
    title: "Training & Consulting",
    description:
      "Specialized training programs and expert consulting to build capacity and technical excellence within your organization.",
    href: "/services/training",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-neutral-950 px-8 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 lg:mb-24"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Our Services</h2>
          <p className="mt-4 text-lg text-neutral-400 md:text-xl lg:text-2xl">Comprehensive geotechnical and environmental solutions</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16"
        >
          {services.map((service) => (
            <motion.a
              key={service.number}
              href={service.href}
              variants={itemVariants}
              className="group relative flex flex-col transition-transform duration-300 hover:scale-105"
            >
              {/* Number with minimalist icon effect */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-neutral-700 transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400/10">
                  <span className="text-2xl font-bold text-neutral-400 transition-colors duration-300 group-hover:text-yellow-400">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400 md:text-3xl lg:text-4xl">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">{service.description}</p>

              {/* Hover indicator */}
              <div className="mt-6 h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-16" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
