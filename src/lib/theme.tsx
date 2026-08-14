"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { MotionConfig } from "framer-motion"

type Theme = "dark" | "light"

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const stored = localStorage.getItem("bernays-theme") as Theme | null
    const t = stored ?? "dark"
    setTheme(t)
    document.documentElement.classList.toggle("dark", t === "dark")
  }, [])

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("bernays-theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <MotionConfig reducedMotion="user">
      <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
    </MotionConfig>
  )
}

export const useTheme = () => useContext(ThemeContext)
