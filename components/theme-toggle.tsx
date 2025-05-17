"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <div className="w-[70px] h-[34px] rounded-full bg-muted flex items-center p-1">
        <div className="w-7 h-7 rounded-full bg-background"></div>
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div
      onClick={toggleTheme}
      className="w-[70px] h-[34px] rounded-full bg-muted flex items-center p-1 cursor-pointer relative"
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggleTheme()
        }
      }}
    >
      <Sun className="absolute left-2 h-4 w-4 text-yellow-500" />
      <Moon className="absolute right-2 h-4 w-4 text-blue-400" />
      <motion.div
        className="w-7 h-7 rounded-full bg-background shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 36 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  )
}
