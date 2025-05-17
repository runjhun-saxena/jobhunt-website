"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Urban Company",
    logo: "/images/UC.png",
    location: "Gurgaon, India",
    remote: true,
    posted: "2 days ago",
    type: "Full-Time",
    salary: "30 - 40 LPA",
    featured: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Attentive",
    logo: "/images/attentive.png",
    location: "Noida, India",
    remote: false,
    posted: "1 day ago",
    type: "Full-Time",
    salary: "12-15 LPA",
    featured: true,
  },
  {
    id: 3,
    title: "Marketing Manager",
    company: "Zylentrix",
    logo: "/images/zylentrix.png",
    location: "Chennai, India",
    remote: true,
    posted: "3 days ago",
    type: "Full-Time",
    salary: "10 - 12 LPA",
    featured: false,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataDriven",
    logo: "/images/datadriven.png",
    location: "Austin, TX",
    remote: true,
    posted: "Just now",
    type: "Contract",
    salary: "$60 - $75/hr",
    featured: false,
  },
]

export function FeaturedJobs() {
  const headingRef = useRef(null)
  const headingControls = useAnimation()
  const isInView = useInView(headingRef)

  useEffect(() => {
    if (isInView) {
      headingControls.start({
        opacity: 1,
        y: 0,
        transition: { duration:1, ease: "easeIn" },
      })
    } else {
      headingControls.start({ opacity: 0, y: 20 })
    }
  }, [isInView, headingControls])

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <motion.h2
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headingControls}
            className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
          >
            Featured Job Opportunities
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover your next career move with top companies hiring now
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span className="text-primary font-bold text-sm">{job.company[0]}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-base sm:text-lg truncate">{job.title}</h3>
                        {job.featured && <Badge className="bg-primary">Featured</Badge>}
                      </div>
                      <p className="text-muted-foreground mb-3 md:mb-4 truncate">{job.company}</p>
                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                          {job.location}
                          {job.remote && (
                            <Badge variant="outline" className="ml-2 text-xs">
                              Remote
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span className="text-xs sm:text-sm text-muted-foreground">Posted {job.posted}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                        <Badge variant="secondary" className="text-xs">
                          {job.type}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300 text-xs"
                        >
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                  <Button className="w-full max-w-[200px]">Apply Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-6 md:mt-8">
          <Button variant="outline" className="gap-2">
            View All Jobs <span className="ml-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
