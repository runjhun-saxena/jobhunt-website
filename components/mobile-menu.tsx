"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/jobs", label: "Find Jobs" },
  { href: "/companies", label: "Companies" },
  { href: "/advice", label: "Career Advice" },
  { href: "/salary", label: "Salary Guide" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="relative z-50">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background shadow-lg border-l dark:border-gray-800"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex flex-col h-full p-6 pt-20">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-muted hover:bg-muted/80"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>

              <nav className="flex flex-col gap-6 text-lg">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex justify-center my-6">
                  <ThemeToggle />
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login" onClick={closeMenu}>
                    Log in
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/post-job" onClick={closeMenu}>
                    Post a Job
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
