"use client"

import React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"
import { sendContactEmail } from "@/app/actions/send-email"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    }

    setErrors(newErrors)

    if (newErrors.name || newErrors.email || newErrors.message) {
      setSubmitMessage({
        type: "error",
        text: "Please fill in all required fields",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitMessage({
          type: "success",
          text: "Email sent successfully! We'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage({
          type: "error",
          text: result.error || "Failed to send email. Please try again.",
        })
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="bg-neutral-900 px-8 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-yellow-400">Get in Touch</h2>
            <h3 className="mb-12 text-4xl font-bold text-white lg:text-5xl">Let's Talk</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium text-neutral-300">
                  Name
                  {errors.name && <span className="ml-1 text-red-500">*</span>}
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className={`mt-2 border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-500 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-neutral-300">
                  Email
                  {errors.email && <span className="ml-1 text-red-500">*</span>}
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className={`mt-2 border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-neutral-300">
                  Message
                  {errors.message && <span className="ml-1 text-red-500">*</span>}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={6}
                  className={`mt-2 border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-500 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
              </div>

              {submitMessage && (
                <div
                  className={`rounded-lg p-3 text-sm ${
                    submitMessage.type === "success"
                      ? "bg-green-900/30 text-green-300"
                      : "bg-red-900/30 text-red-300"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-yellow-400 py-6 text-base font-semibold text-neutral-900 transition-all hover:bg-yellow-300 hover:shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Right Column - Office Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h3 className="mb-8 text-sm font-medium uppercase tracking-wider text-yellow-400">Our Office</h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                  <div>
                    <p className="text-xl font-light text-neutral-200 lg:text-2xl">
                      Av. Ahmed Sekou Toure, nº 1432
                      <br />
                      Maputo, Moçambique
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                  <div>
                    <p className="text-xl font-light text-neutral-200 lg:text-2xl">+258 85 353 535 2</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 h-6 w-6 shrink-0 text-yellow-400" />
                  <div>
                    <p className="text-xl font-light text-neutral-200 lg:text-2xl">info@geosmart-su.co.mz</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
