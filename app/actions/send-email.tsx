"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  message: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function sendContactEmail(data: EmailData) {
  try {
    // Validate required fields
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Invalid email format",
      }
    }

    // Create nodemailer transporter using TurboHost SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.geosmart-su.co.mz",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "info@geosmart-su.co.mz",
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: `"GeoSMART Website" <${process.env.SMTP_USER || "info@geosmart-su.co.mz"}>`,
      to: "info@geosmart-su.co.mz",
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 3px solid #fbbf24; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1a1a1a;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message)}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            This email was sent from the GeoSMART website contact form
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This email was sent from the GeoSMART website contact form
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Email sent successfully",
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}
