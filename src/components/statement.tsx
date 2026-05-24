"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ease = [0.22, 1, 0.36, 1] as const

interface StatementProps {
  plain: string
  accent: string
  sub?: string
}

export function Statement({ plain, accent, sub }: StatementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--page-bg)" }}
    >
      {/* Ambient centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.581 0.243 263 / 0.07) 0%, transparent 70%)" }}
      />
      {/* Animated breathing glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(ellipse 40% 40% at 50% 50%, oklch(0.581 0.243 263 / 0.05) 0%, transparent 60%)" }}
      />
      {/* Horizontal light streak */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "50%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, oklch(0.581 0.243 263 / 0.15) 30%, oklch(0.581 0.243 263 / 0.15) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="text-[clamp(44px,8vw,100px)] font-extrabold tracking-[-0.05em] leading-[0.95] text-slate-900 dark:text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {plain}{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
          >
            {accent}
          </span>
        </motion.h2>

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18, ease }}
            className="mt-6 text-[18px] leading-relaxed max-w-xl"
            style={{ color: "var(--page-text-muted)" }}
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  )
}
