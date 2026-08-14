"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { TrendingUp, CheckSquare, Receipt, LayoutDashboard, Users } from "lucide-react"
import { FadeIn } from "@/lib/animate"

const ease = [0.22, 1, 0.36, 1] as const
const AUTO_ADVANCE = 5000

const tabs = [
  {
    id: "dashboard",
    label: "Workspace",
    icon: <LayoutDashboard size={15} strokeWidth={1.75} />,
    color: "#ec4899",
    title: "Começa cada dia a saber o que importa.",
    body: "O teu painel pessoal reúne tarefas, alertas financeiros, reuniões e horas num único ecrã. Sem perguntar ao gestor o que tens de fazer a seguir.",
    light: "/dashboard-light.webp",
    dark: "/dashboard-dark.webp",
  },
  {
    id: "growth",
    label: "Crescimento",
    icon: <TrendingUp size={15} strokeWidth={1.75} />,
    color: "#2257ff",
    title: "Pipeline de vendas sem adivinhações.",
    body: "Do primeiro contacto ao contrato assinado. Cada deal com probabilidade, forecast de receita e histórico completo num só sítio.",
    light: "/growth-light.webp",
    dark: "/growth-dark.webp",
  },
  {
    id: "delivery",
    label: "Delivery",
    icon: <CheckSquare size={15} strokeWidth={1.75} />,
    color: "#7c3aed",
    title: "Cada consultor sabe o que tem de fazer.",
    body: "Projectos, tarefas e timesheets integrados. Vês em tempo real se o trabalho está a ser entregue e se está dentro do orçamento.",
    light: "/delivery-light.webp",
    dark: "/delivery-dark.webp",
  },
  {
    id: "finance",
    label: "Financeiro",
    icon: <Receipt size={15} strokeWidth={1.75} />,
    color: "#059669",
    title: "Fatura. Recebe. Controla.",
    body: "Retainers automáticos, cobranças visíveis, P&L por cliente em tempo real. Nunca mais perdes um pagamento por esquecimento.",
    light: "/invoices-light.webp",
    dark: "/invoices-dark.webp",
  },
  {
    id: "people",
    label: "Pessoas",
    icon: <Users size={15} strokeWidth={1.75} />,
    color: "#f59e0b",
    title: "Sabes quem está disponível. E quem está no limite.",
    body: "Folgas, carga de trabalho e performance num só lugar. Geres a equipa com dados reais, não com feeling.",
    light: "/people-light.webp",
    dark: "/people-dark.webp",
  },
]

function ProgressBar({ active, duration }: { active: boolean; duration: number }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full overflow-hidden" style={{ background: "var(--page-border)" }}>
      {active && (
        <motion.div
          key="progress"
          className="h-full bg-brand rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
      )}
    </div>
  )
}

export function FeatureTabs() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % tabs.length)
    }, AUTO_ADVANCE)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active])

  const tab = tabs[active]

  return (
    <section className="py-14 md:py-24 px-6 overflow-hidden" style={{ background: "var(--page-surface)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">
            O produto em acção
          </p>
          <h2
            className="text-[clamp(30px,4.5vw,52px)] font-extrabold tracking-[-0.035em] leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span style={{ color: "var(--page-text)" }}>Vê o Bernays </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              por dentro.
            </span>
          </h2>
        </FadeIn>

        <div>

        {/* Tab strip */}
        <div
          role="tablist"
          aria-label="Módulos do Bernays"
          className="flex items-center gap-1 p-1 rounded-2xl mb-8 overflow-x-auto scrollbar-hide"
          style={{ background: "var(--page-card)", border: "1px solid var(--page-border)" }}
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              aria-label={t.label}
              aria-selected={active === i}
              role="tab"
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 shrink-0 flex-1 justify-center min-w-0 hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
              style={{
                background: active === i ? "var(--page-bg)" : "transparent",
                color: active === i ? t.color : "var(--page-text-faint)",
                boxShadow: active === i ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              }}
            >
              <span aria-hidden="true" style={{ color: active === i ? t.color : "inherit" }}>{t.icon}</span>
              <span className="hidden sm:inline truncate">{t.label}</span>
              <ProgressBar active={active === i} duration={AUTO_ADVANCE} />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
          {/* Text — stable height wrapper prevents grid reflow */}
          <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id + "-text"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease }}
            >
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4"
                style={{ background: `${tab.color}18`, color: tab.color }}
              >
                {tab.icon}
                {tab.label}
              </div>
              <h3
                className="text-[clamp(20px,2.5vw,28px)] font-extrabold tracking-[-0.03em] leading-snug mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
              >
                {tab.title}
              </h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                {tab.body}
              </p>

              {/* Dot navigation */}
              <div className="flex items-center gap-2 mt-8">
                {tabs.map((t2, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Ver ${t2.label}`}
                    className="flex items-center justify-center min-w-[24px] min-h-[24px] transition-all duration-200"
                    style={{ background: "transparent", border: "none", padding: 0 }}
                  >
                    <span
                      className="transition-all duration-200 rounded-full block"
                      style={{
                        width: active === i ? "20px" : "6px",
                        height: "6px",
                        background: active === i ? tab.color : "var(--page-border)",
                      }}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Screenshot — stable height wrapper prevents collapse */}
          <div className="min-h-[420px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id + "-img"}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.3, ease }}
              className="rounded-2xl overflow-hidden border shadow-[0_24px_64px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.55)] group"
              style={{ borderColor: "var(--page-border)" }}
            >
              <div className="relative overflow-hidden" style={{ maxHeight: "380px" }}>
                <Image
                  loading="lazy"
                  src={tab.light}
                  alt={tab.label}
                  width={1440}
                  height={900}
                  className="w-full object-cover object-top block dark:hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  style={{ maxHeight: "380px" }}
                />
                <Image
                  loading="lazy"
                  src={tab.dark}
                  alt={tab.label}
                  width={1440}
                  height={900}
                  className="w-full object-cover object-top hidden dark:block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  style={{ maxHeight: "380px" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-[#07080e] to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
        </div>{/* end pause wrapper */}
      </div>
    </section>
  )
}
