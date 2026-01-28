"use client"
import { StickyNavbar } from "@/components/sticky-navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <StickyNavbar />
      <HeroSection />
      <ServicesSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
