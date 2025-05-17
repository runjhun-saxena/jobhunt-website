"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center justify-between">
      
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white font-bold text-xl">
            JH
          </div>
          <span className="text-xl font-bold">JobHunt</span>
        </Link>

        
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Find Jobs
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Companies
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Career Advice
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Salary Guide
          </Link>
        </nav>

        
        <div className="flex items-center gap-4">
          
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="#">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="#">Post a Job</Link>
            </Button>
          </div>

         
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-background px-6 py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Find Jobs</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Companies</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Career Advice</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>Salary Guide</Link>
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <Button variant="outline" asChild>
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
            </Button>
            <Button asChild>
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>Post a Job</Link>
            </Button>
          </div>

          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </motion.header>
  )
}
