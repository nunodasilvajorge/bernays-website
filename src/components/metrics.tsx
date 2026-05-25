"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { AnimatedNumber } from "@/lib/animate"

const ease = [0.22, 1, 0.36, 1] as const
const color = "#2257ff"

const metrics = [
  { value: 103, format: (n: number) => `${n}+`, label: "funcionalidades incluídas" },
  { value: 7,   format: (n: number) => `${n}`,  label: "módulos integrados de raiz" },
  { value: 0,   format: (n: number) => `€${n}`, label: "de setup, formação ou onboarding" },
  { value: 0,   format: (n: number) => `${n}`,  label: "add-ons ou extras necessários" },
]

function MetricCard({ m, delay }: { m: typeof metrics[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease }}
      className="relative overflow-hidden rounded-2xl border flex flex-col items-center justify-center py-8 px-4 text-center cursor-default"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}40`
        e.currentTarget.style.boxShadow = `0 0 24px ${color}15, 0 8px 24px rgba(0,0,0,0.08)`
      }}
      onMouseLeave={(e) => {
        setSpot(null)
        e.currentTarget.style.borderColor = "var(--page-border)"
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"
      }}
    >
      {spot && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(200px circle at ${spot.x}px ${spot.y}px, ${color}10 0%, transparent 70%)` }}
        />
      )}
      <div className="relative z-[1]">
        <p
          className="text-[52px] font-extrabold leading-none mb-1.5"
          style={{
            fontFamily: "var(--font-display)",
            backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.696 0.171 253) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <AnimatedNumber value={m.value} format={m.format} duration={1.2} />
        </p>
        <p className="text-[13px] font-medium leading-snug" style={{ color: "var(--page-text-faint)" }}>
          {m.label}
        </p>
      </div>
    </motion.div>
  )
}

export function Metrics() {
  return (
    <section
      className="py-12 md:py-20 px-6 border-y"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <MetricCard key={m.label} m={m} delay={i * 0.07} />
        ))}
      </div>
    </section>
  )
}
