"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden lg:pb-[130px]">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
      <motion.div
        className="absolute top-0 left-0 right-0 h-full lg:h-[140%] opacity-20"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="container relative pt-16 pb-48 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 sm:mb-6"
            variants={item}
          >
            Find Your Dream Job Today
          </motion.h1>
          <motion.p
            className="text-white sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-6 sm:mb-8"
            variants={item}
          >
            Connecting talented professionals with top companies worldwide. Join thousands who've found their
            perfect career match.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={item}>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="#">Find Jobs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-primary hover:text-white hover:bg-black">
              <Link href="#">For Employers</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="currentColor"
            className="text-background"
            fillOpacity="1"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
