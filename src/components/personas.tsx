"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Clock } from "lucide-react"
import { FadeIn } from "@/lib/animate"
import { useRef, useState } from "react"

const ease = [0.22, 1, 0.36, 1] as const

const personas = [
  {
    role: "Sócio / Director",
    icon: <TrendingUp size={22} strokeWidth={1.75} />,
    color: "#2257ff",
    pain: "Sabes o que facturaste. Mas sabes o que sobrou?",
    desc: "O gestor de topo que precisa de visibilidade real sobre rentabilidade e cashflow — sem esperar pelo fecho do mês nem pelo contabilista.",
    features: [
      "P&L por cliente em tempo real",
      "Pipeline com forecast de receita por mês",
      "Cashflow e alertas de cobrança automáticos",
    ],
  },
  {
    role: "Gestor de Conta",
    icon: <Users size={22} strokeWidth={1.75} />,
    color: "#7c3aed",
    pain: "Demasiados clientes para gerir. Ferramentas a mais para usar.",
    desc: "O gestor que coordena múltiplos projectos em simultâneo e precisa de visibilidade imediata sobre prazos, orçamentos e entregáveis.",
    features: [
      "Vista consolidada de todos os projectos activos",
      "Alertas automáticos de prazo e de orçamento esgotado",
      "Propostas, aprovações e faturação do mesmo sítio",
    ],
  },
  {
    role: "Consultor",
    icon: <Clock size={22} strokeWidth={1.75} />,
    color: "#f59e0b",
    pain: "Não sabes por onde começar o dia. E as horas perdem-se.",
    desc: "O consultor que precisa de saber o que fazer a seguir — e que as horas investidas apareçam na fatura do cliente sem trabalho manual.",
    features: [
      "Workspace pessoal com tarefas e prioridades do dia",
      "Registo de horas em 1 clique, por projecto",
      "Notificações de prazo e aprovações pendentes",
    ],
  },
]

function PersonaCard({ p, delay }: { p: typeof personas[0]; delay: number }) {
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
      className="group relative overflow-hidden rounded-2xl border p-6 flex flex-col cursor-default"
      style={{ background: "var(--page-card)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
      onMouseMove={(e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${p.color}55`
        e.currentTarget.style.boxShadow = `0 0 32px ${p.color}18, 0 8px 32px rgba(0,0,0,0.08)`
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
          style={{ background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, ${p.color}14 0%, transparent 70%)` }}
        />
      )}

      <div className="relative z-[1] flex flex-col h-full">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
          style={{ background: `${p.color}18`, color: p.color }}
        >
          {p.icon}
        </div>

        <h3 className="text-[16px] font-bold mb-2" style={{ color: "var(--page-text)" }}>
          {p.role}
        </h3>

        <p className="text-[13px] font-medium italic mb-4 leading-snug" style={{ color: p.color }}>
          &ldquo;{p.pain}&rdquo;
        </p>

        <p className="text-[13px] leading-relaxed mb-6" style={{ color: "var(--page-text-muted)" }}>
          {p.desc}
        </p>

        <ul className="space-y-2.5 mt-auto">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${p.color}18` }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
              </div>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function Personas() {
  return (
    <section className="py-16 md:py-28 px-6" style={{ background: "var(--page-bg)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">
            Para quem
          </p>
          <h2
            className="text-[clamp(32px,4.5vw,54px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05] max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Uma plataforma.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              Toda a agência.
            </span>
          </h2>
          <p className="text-[16px] mt-4 leading-relaxed max-w-xl" style={{ color: "var(--page-text-muted)" }}>
            Cada função vê o que precisa e faz o que deve — sem fricção, sem ferramentas extra.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {personas.map((p, i) => (
            <PersonaCard key={p.role} p={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
