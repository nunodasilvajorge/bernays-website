"use client"

import { AlertCircle, Gauge, Clock } from "lucide-react"
import { FadeIn } from "@/lib/animate"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

const pains = [
  {
    icon: AlertCircle,
    iconBg: "oklch(0.55 0.22 300 / 0.12)",
    iconColor: "oklch(0.55 0.22 300)",
    color: "#8b30c8",
    title: "O teu cliente mais antigo pode ser o teu pior negócio.",
    body: "Sem rentabilidade por cliente, os retainers de longa data são os mais perigosos. Acumulas trabalho extra, não registas todas as horas e no fim do trimestre não sabes se ganhaste ou perdeste.",
  },
  {
    icon: Gauge,
    iconBg: "oklch(0.78 0.18 75 / 0.12)",
    iconColor: "oklch(0.68 0.18 75)",
    color: "#d97706",
    title: "Geres pelo feeling. E o feeling nunca bate certo.",
    body: "Sem pipeline real, sem P&L por projecto e sem timesheets integrados, cada decisão é uma aposta. Há sempre um cliente que parece render — e está a drenar a margem.",
  },
  {
    icon: Clock,
    iconBg: "oklch(0.581 0.243 263 / 0.1)",
    iconColor: "oklch(0.581 0.243 263)",
    color: "#2257ff",
    title: "Os teus melhores consultores estão a trabalhar de graça.",
    body: "Horas não registadas são horas não cobradas. Cada proposta no Word, cada timesheet em Excel, cada relatório manual é trabalho da agência que não aparece na fatura.",
  },
]

function PainCard({ pain, delay }: { pain: typeof pains[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null)
  const Icon = pain.icon

  return (
    <FadeIn delay={delay} className="h-full">
      <motion.div
        ref={cardRef}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-2xl p-8 border h-full cursor-default"
        style={{ background: "var(--page-surface)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
        onMouseMove={(e) => {
          const rect = cardRef.current?.getBoundingClientRect()
          if (!rect) return
          setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${pain.color}55`
          e.currentTarget.style.boxShadow = `0 0 32px ${pain.color}18, 0 8px 32px rgba(0,0,0,0.08)`
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
            style={{ background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, ${pain.color}14 0%, transparent 70%)` }}
          />
        )}
        <div className="relative z-[1]">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center mb-6 shrink-0"
            style={{ background: pain.iconBg }}
          >
            <Icon size={18} strokeWidth={1.75} style={{ color: pain.iconColor }} />
          </div>
          <h3
            className="text-[17px] font-bold leading-snug mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
          >
            {pain.title}
          </h3>
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
            {pain.body}
          </p>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export function Problem() {
  return (
    <section className="relative py-16 md:py-36 px-6" style={{ background: "var(--page-bg)" }}>
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, oklch(0.581 0.243 263 / 0.06) 0%, transparent 100%)" }} />
      <div className="max-w-5xl mx-auto">

        <FadeIn className="mb-16">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-5">
            O problema
          </p>
          <h2
            className="text-[clamp(40px,5.5vw,68px)] font-extrabold tracking-[-0.04em] leading-[1.05] max-w-3xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
          >
            As agências de RP têm ferramentas para tudo.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #4a7dff 0%, #8ab4ff 100%)" }}
            >
              Excepto para gerir o próprio negócio.
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {pains.map((pain, i) => (
            <PainCard key={pain.title} pain={pain} delay={i * 0.08} />
          ))}
        </div>

        <FadeIn className="mt-10">
          <div className="inline-flex items-center gap-3 bg-brand/[0.08] border border-brand/[0.2] rounded-2xl px-6 py-4">
            <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
            <p className="text-[15px] font-semibold text-brand dark:text-brand-light">
              Não são problemas de organização. São problemas de sistema.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
