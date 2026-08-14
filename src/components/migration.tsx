"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { FadeIn } from "@/lib/animate"
import { ArrowRight } from "lucide-react"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const
const color = "#2257ff"

const steps = [
  {
    n: "01",
    title: "Importa os teus dados",
    body: "CRM, clientes e contactos entram via CSV ou formulário. Em 30 minutos tens a base montada.",
  },
  {
    n: "02",
    title: "Configura a tua equipa",
    body: "Cria utilizadores e define permissões. Cada consultor acede só ao que precisa.",
  },
  {
    n: "03",
    title: "Começa hoje",
    body: "Sem formação obrigatória. O Bernays foi feito para ser óbvio — o teu Excel vai para a gaveta.",
  },
]

function StepCard({ step, delay }: { step: typeof steps[0]; delay: number }) {
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
      className="relative overflow-hidden rounded-2xl border p-8 cursor-default"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}40`
        e.currentTarget.style.boxShadow = `0 0 32px ${color}15, 0 8px 32px rgba(0,0,0,0.08)`
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
          style={{ background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, ${color}10 0%, transparent 70%)` }}
        />
      )}
      <div className="relative z-[1]">
        <div
          className="text-[80px] font-extrabold leading-none mb-5 select-none"
          style={{ fontFamily: "var(--font-display)", color: "oklch(0.581 0.243 263 / 0.12)" }}
          aria-hidden="true"
        >
          {step.n}
        </div>
        <h3 className="text-[18px] font-bold mb-2 leading-snug" style={{ color: "var(--page-text)" }}>
          {step.title}
        </h3>
        <p className="text-[14px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
          {step.body}
        </p>
      </div>
    </motion.div>
  )
}

export function Migration() {
  return (
    <section className="py-16 md:py-28 px-6" style={{ background: "var(--page-bg)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">Migração</p>
          <h2
            className="text-[clamp(32px,4.5vw,54px)] font-extrabold tracking-[-0.035em] leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
          >
            Mudar não tem de ser difícil.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              São 3 passos.
            </span>
          </h2>
          <p className="text-[16px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
            A maioria das agências está operacional em menos de uma hora.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.n} step={step} delay={i * 0.1} />
          ))}
        </div>

        <FadeIn className="mt-12">
          <a
            href={DEMO_URL}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:underline underline-offset-4 transition-all"
          >
            Ver como funciona na prática
            <ArrowRight size={14} />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
