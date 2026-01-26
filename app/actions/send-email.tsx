"use server"

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

    // Send email using fetch API (works with most email services)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name: data.name,
        email: data.email,
        message: data.message,
        to_email: "info@geosmart-su.co.mz",
        subject: `New Contact Form Submission from ${data.name}`,
        from_name: "GeoSMART Contact Form",
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    const result = await response.json()

    if (!result.success) {
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

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
