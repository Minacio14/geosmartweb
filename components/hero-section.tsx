"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      {/* Background Image with proper overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29-IREdjx9thlPYXVN0R6Yl28FG1ItczD.jpg"
          alt="Geotechnical engineering background"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950/70" />
      </div>

      {/* Hero Content - Higher z-index to ensure visibility */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-7xl"
        >
          Engineering the Ground.
          <br />
          Enabling Sustainability.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 text-center text-lg font-medium text-yellow-400 drop-shadow-md md:text-xl lg:text-2xl"
        >
          Geotechnical, Hydrological & Environmental Solutions
        </motion.p>
      </div>
    </section>
  )
}
