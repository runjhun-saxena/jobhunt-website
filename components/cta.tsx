"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

const waveContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const waveItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

export function CTA() {
  const title = "Ready to advance your career?"

  const ref = useRef(null)
  const inView = useInView(ref, {
    once: false, // 👈 allow multiple triggers
    margin: "0px 0px -100px 0px",
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("show")
    } else {
      controls.start("hidden") // 👈 reset when out of view
    }
  }, [inView, controls])

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-primary text-primary-foreground">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate={controls}
          variants={waveContainer}
        >
          {/* Wavy Heading Animation */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 flex flex-wrap justify-center">
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={waveItem}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <p className="text-muted-foreground max-w-2xl mb-6 md:mb-8 text-sm md:text-base text-white">
            Create your account now and start applying to thousands of jobs
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 ">
            <Button size="lg" asChild className="h-10 md:h-12 bg-white text-primary hover:bg-white/90">
              <Link href="/register">Create Account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-10 md:h-12 text-primary">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
