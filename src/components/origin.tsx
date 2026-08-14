"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Table2, LayoutGrid, TrendingUp, Mail, Users } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { FadeIn } from "@/lib/animate"

const before = [
  { icon: <Table2 size={20} strokeWidth={1.75} />, light: "#217346", dark: "#34d17a", label: "Excel" },
  { icon: <LayoutGrid size={20} strokeWidth={1.75} />, light: "#0052cc", dark: "#4c9aff", label: "Trello" },
  { icon: <TrendingUp size={20} strokeWidth={1.75} />, light: "#e8602c", dark: "#ff9070", label: "HubSpot" },
  { icon: <Mail size={20} strokeWidth={1.75} />, light: "#ea4335", dark: "#ff7066", label: "Email" },
  { icon: <Users size={20} strokeWidth={1.75} />, light: "#6c2fa0", dark: "#b07fe0", label: "Factorial" },
]

const ease = [0.22, 1, 0.36, 1] as const

const toolVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
  dim: { opacity: 0.32, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
}

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0 } },
  dim: {},
}

export function Origin() {
  const { theme } = useTheme()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [phase, setPhase] = useState<"hidden" | "visible" | "dim">("hidden")

  useEffect(() => {
    if (!isInView) return
    setPhase("visible")
    const t = setTimeout(() => setPhase("dim"), 1300)
    return () => clearTimeout(t)
  }, [isInView])

  return (
    <section className="py-12 md:py-20 px-6" style={{ background: "var(--page-bg)" }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn className="mb-10">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-3">Consolidação</p>
          <h2
            className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.035em] leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
          >
            Informação dispersa cria decisões cegas.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              O Bernays reúne tudo.
            </span>
          </h2>
        </FadeIn>

        <div ref={ref}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">

            {/* Before */}
            <div className="flex-1 max-w-xs w-full">
              <p className="text-[11px] font-bold tracking-widest uppercase text-center mb-4" style={{ color: "var(--page-text-faint)" }}>
                Antes
              </p>
              <motion.div
                className="grid grid-cols-5 gap-2"
                variants={containerVariant}
                initial="hidden"
                animate={phase}
              >
                {before.map((t) => {
                  const color = theme === "dark" ? t.dark : t.light
                  return (
                    <motion.div
                      key={t.label}
                      variants={toolVariant}
                      className="flex flex-col items-center gap-1.5 rounded-xl py-3 px-1 border"
                      style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${color}20`, color }}
                      >
                        {t.icon}
                      </div>
                      <span className="text-[9px] font-medium" style={{ color: "var(--page-text-faint)" }}>{t.label}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
              <p className="text-[12px] text-center mt-3" style={{ color: "var(--page-text-faint)" }}>
                Dados dispersos. Decisões cegas.
              </p>
            </div>

            {/* Arrow */}
            <motion.div
              className="flex flex-col items-center gap-2 shrink-0"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={phase !== "hidden" ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.55, ease }}
            >
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.581 0.243 263)" }}
                animate={phase === "dim" ? {
                  boxShadow: [
                    "0 0 0px oklch(0.581 0.243 263 / 0)",
                    "0 0 36px oklch(0.581 0.243 263 / 0.65)",
                    "0 0 20px oklch(0.581 0.243 263 / 0.35)",
                  ],
                } : { boxShadow: "0 0 20px oklch(0.581 0.243 263 / 0.25)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9H14M9.5 4.5L14 9L9.5 13.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </motion.div>

            {/* After */}
            <div className="flex-1 max-w-xs w-full">
              <p className="text-[11px] font-bold tracking-widest uppercase text-center mb-4" style={{ color: "var(--page-text-faint)" }}>
                Depois
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={phase === "dim" ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.55, ease }}
                className="flex flex-col items-center justify-center rounded-xl py-6 px-4 border"
                style={{
                  background: "var(--page-card)",
                  borderColor: "oklch(0.581 0.243 263 / 0.3)",
                  boxShadow: phase === "dim" ? "0 0 48px oklch(0.581 0.243 263 / 0.18), 0 8px 32px rgba(0,0,0,0.06)" : undefined,
                }}
              >
                <img src="/logo.svg" alt="Bernays" width={36} height={36} className="rounded-[7px] mb-3" />
                <p className="text-[15px] font-bold mb-1" style={{ color: "var(--page-text)" }}>Bernays</p>
                <p className="text-[12px] text-center" style={{ color: "var(--page-text-faint)" }}>
                  1 sistema integrado
                </p>
              </motion.div>
              <p className="text-[12px] text-center mt-3" style={{ color: "var(--page-text-faint)" }}>
                Tudo ligado. Decisões informadas.
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={phase !== "hidden" ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0, ease }}
            className="text-center text-[13px] mt-8 max-w-lg mx-auto leading-relaxed"
            style={{ color: "var(--page-text-faint)" }}
          >
            O Bernays não foi adaptado de outro sector. Nasceu da investigação e do ensino em gestão da comunicação e da experiência de gerir uma agência de RP em Portugal.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
