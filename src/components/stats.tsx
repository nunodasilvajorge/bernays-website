"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { AnimatedNumber, FadeIn } from "@/lib/animate"

const ease = [0.22, 1, 0.36, 1] as const

const metrics = [
  {
    value: 3,
    format: (n: number) => `${n}h`,
    label: "poupadas em admin, por consultor, por semana",
    sub: "Em média. Timesheets, relatórios, faturação e coordenação — automatizados para que a equipa se foque nos clientes.",
    color: "#2257ff",
  },
  {
    value: 24,
    format: (n: number) => `${n}%`,
    label: "maiores margens de projecto",
    sub: "Em média, nas agências que adoptam PSA integrado face às que operam com ferramentas dispersas. Fonte: SPI Research, 2025.",
    color: "#7c3aed",
  },
  {
    value: 0,
    format: (n: number) => `${n}`,
    label: "folhas de cálculo necessárias",
    sub: "Das propostas às faturas, dos timesheets às férias. Tudo substituído por dashboards em tempo real.",
    color: "#059669",
  },
  {
    value: 1,
    format: (n: number) => `${n}`,
    label: "fonte de verdade para toda a agência",
    sub: "Pipeline, projectos, finanças e equipa. O sócio, o gestor e o consultor veem sempre o mesmo — em tempo real.",
    color: "#f59e0b",
  },
]

function StatCard({ m, delay }: { m: typeof metrics[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease }}
      className="relative overflow-hidden rounded-2xl border p-10 flex flex-col gap-3 cursor-default"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${m.color}55`
        e.currentTarget.style.boxShadow = `0 0 32px ${m.color}18, 0 8px 32px rgba(0,0,0,0.08)`
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
          style={{ background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, ${m.color}12 0%, transparent 70%)` }}
        />
      )}
      <div className="relative z-[1] flex flex-col gap-3">
        <div
          className="text-[clamp(56px,8vw,88px)] font-extrabold leading-none tracking-[-0.05em] tabular-nums"
          style={{
            fontFamily: "var(--font-display)",
            backgroundImage: `linear-gradient(135deg, ${m.color} 0%, ${m.color}99 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <AnimatedNumber value={m.value} format={m.format} duration={1.4} />
        </div>
        <p className="text-[16px] font-bold text-slate-900 dark:text-white leading-snug">
          {m.label}
        </p>
        <p className="text-[14px] text-slate-500 dark:text-white/40 leading-relaxed">
          {m.sub}
        </p>
      </div>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section
      className="py-16 md:py-32 px-6 border-y"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">Impacto real</p>
          <h2
            className="text-[clamp(32px,4.5vw,54px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que muda quando{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              a operação funciona.
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {metrics.map((m, i) => (
            <StatCard key={m.label} m={m} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
