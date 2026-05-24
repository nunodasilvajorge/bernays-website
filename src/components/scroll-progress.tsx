"use client"

import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)",
      }}
    />
  )
}
