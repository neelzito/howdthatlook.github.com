"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const messageText = formData.get("message")

    try {
      // Simulate form processing delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // For static sites, you could integrate with services like:
      // - Formspree (https://formspree.io/)
      // - Netlify Forms (if deployed on Netlify)
      // - EmailJS (https://www.emailjs.com/)
      
      console.log("Form submission:", { name, email, message: messageText })
      setMessage("Thanks for your message! We'll get back to you soon.")
      
      // Reset form
      e.currentTarget.reset()
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-muted-foreground">{message}</p>}
      </form>
    </Card>
  )
}
