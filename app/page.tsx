import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { JobSearch } from "@/components/job-search"
import { FeaturedJobs } from "@/components/featured-jobs"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Companies } from "@/components/companies"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <JobSearch />
      <FeaturedJobs />
      <Stats />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Companies />
      <Footer />
    </main>
  )
}
