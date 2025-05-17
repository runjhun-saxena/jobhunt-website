"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter a valid email to subscribe.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Subscribed!",
      description: "You’ll now receive job alerts in your inbox.",
    })

    // Optionally clear input
    setEmail("")
  }

  return (
    <section className="py-8 md:py-12 lg:py-16  text-primary-foreground">
      <div className="container px-4 sm:px-6 lg:px-8 text-black dark:text-white">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 dark:text-white ">Stay Updated on Job Opportunities</h2>
          <p className=" max-w-2xl mb-6 md:mb-8 text-sm md:text-base dark:text-white text-black">
            Join our newsletter and get the latest job postings, career advice, and industry insights delivered directly
            to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 md:gap-4 ">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 md:h-12   text-gray-500 placeholder:text-gray-500 shadow-xl bg-slate-100  border-black dark:form-input dark:bg-primary-foreground/10 dark:border-primary-foreground/40 dark:text-white dark:placeholder:text-white/60 "
            />
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 h-10 md:h-12"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs md:text-sm  mt-3 md:mt-4 text-black dark:text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from JobHunt.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
