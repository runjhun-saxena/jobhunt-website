"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"


const testimonials = [
  {
    id: 1,
    name: "Harkirat Singh",
    role: "Software Engineer, TechVision",
    content:
      "JobHunt connected me with the perfect role at a tech startup. Their platform made job hunting efficient and enjoyable.",
    avatar: "/images/harkirat.png",
  },
  {
    id: 2,
    name: "Sofia Shekhar",
    role: "HR Director, Global Innovations",
    content:
      "As a hiring manager, JobHunt has consistently delivered high-quality candidates that match our company culture and skill requirements.",
    avatar: "/images/sophia.png",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Marketing Specialist, Brand Builders",
    content:
      "After months of searching elsewhere, I found my dream job in just two weeks using JobHunt. The process was seamless.",
    avatar: "/images/james.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">What People Say About Us</h2>
          <p className="text-muted-foreground max-w-2xl">
            Success stories from job seekers and employers who used our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full bg-muted/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]">
                <CardContent className="pt-6">
                  <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4" />
                  <blockquote className="mb-4 md:mb-6 text-base md:text-lg">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 md:h-10 md:w-10 mr-3 md:mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
