"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { Calendar, Building2, Users, BarChart } from "lucide-react"
import { useRef, useEffect } from "react"

const stats = [
  { id: 1, icon: Calendar, title: "Job Listings", value: "10K+" },
  { id: 2, icon: Building2, title: "Leading Companies", value: "500+" },
  { id: 3, icon: Users, title: "Job Seekers", value: "1M+" },
  { id: 4, icon: BarChart, title: "Success Rate", value: "85%" },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  }

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background" ref={ref}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={index}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="mb-3 md:mb-4 p-2 md:p-3 rounded-full bg-primary/10"
                whileHover={{
                  rotate: 360,
                  backgroundColor: "rgba(var(--primary), 0.2)",
                  transition: { duration: 0.5 },
                }}
              >
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </motion.div>
              <motion.div
                className="text-2xl md:text-4xl font-bold mb-1 md:mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
