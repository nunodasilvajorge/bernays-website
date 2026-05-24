"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/lib/animate"

const ease = [0.22, 1, 0.36, 1] as const

const rows = [
  {
    label: "Rentabilidade",
    generic: "P&L calculado no Excel, ao final do mês — quando já é tarde demais",
    bernays: "P&L por cliente em tempo real, a cada hora registada",
  },
  {
    label: "Integração",
    generic: "Pipeline aqui, horas no Toggl, faturas no InvoiceXpress, RH noutro sítio",
    bernays: "Um deal fechado cria o projecto. Um projecto fechado gera a fatura. Automático.",
  },
  {
    label: "Faturação AT",
    generic: "InvoiceXpress separado. ATCUD configurado à mão. SAF-T exportado manualmente.",
    bernays: "Faturação certificada AT com ATCUD nativa. SAF-T automático. Tudo dentro da plataforma.",
  },
  {
    label: "Propostas",
    generic: "Word → PDF por email → assinatura em serviço externo → resposta dias depois",
    bernays: "Proposta criada, enviada e aceite com audit trail completo — dentro do Bernays",
  },
  {
    label: "Custo real",
    generic: "Productive + Toggl + DocuSign + ferramenta de RH = várias subscrições separadas",
    bernays: "A partir de €58/mês. Todos os módulos incluídos. Zero add-ons obrigatórios.",
  },
]

export function Comparison() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section className="py-16 md:py-28 px-6" style={{ background: "var(--page-surface)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">
            Por que o Bernays
          </p>
          <h2
            className="text-[clamp(32px,4.5vw,54px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05] mb-4 max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Não é mais uma ferramenta de produtividade.
          </h2>
          <p
            className="text-[16px] leading-relaxed max-w-xl"
            style={{ color: "var(--page-text-muted)" }}
          >
            Há uma diferença entre adaptar uma ferramenta ao teu negócio e ter uma construída para ele.
          </p>
        </FadeIn>

        {/* Table header */}
        <div ref={ref} className="grid grid-cols-[1fr_1fr] md:grid-cols-[120px_1fr_1fr] gap-px mb-1">
          <div className="hidden md:block" />
          <div className="rounded-t-xl px-5 py-3 text-center" style={{ background: "var(--page-card)", borderTop: "1px solid var(--page-border)", borderLeft: "1px solid var(--page-border)", borderRight: "1px solid var(--page-border)" }}>
            <p className="text-[12px] font-bold" style={{ color: "var(--page-text-faint)" }}>O caminho habitual</p>
            <p className="text-[11px] mt-0.5" style={{ color: "var(--page-text-faint)", opacity: 0.6 }}>Productive · Monday · Toggl · Excel</p>
          </div>
          <div
            className="rounded-t-xl px-5 py-3 text-center relative overflow-hidden"
            style={{ background: "oklch(0.581 0.243 263 / 0.08)", borderTop: "1px solid oklch(0.581 0.243 263 / 0.35)", borderLeft: "1px solid oklch(0.581 0.243 263 / 0.35)", borderRight: "1px solid oklch(0.581 0.243 263 / 0.35)" }}
          >
            <div className="flex items-center justify-center gap-1.5">
              <Image src="/logo.svg" alt="Bernays" width={14} height={14} className="rounded-[3px]" />
              <p className="text-[12px] font-bold text-brand dark:text-brand-light">Bernays</p>
            </div>
            <p className="text-[11px] mt-0.5 text-brand/60 dark:text-brand-light/50">Construído para agências de RP</p>
          </div>
        </div>

        {/* Rows */}
        <div className="rounded-b-2xl overflow-hidden border" style={{ borderColor: "var(--page-border)" }}>
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.05, ease }}
              className="grid grid-cols-[1fr_1fr] md:grid-cols-[120px_1fr_1fr]"
              style={i < rows.length - 1 ? { borderBottom: "1px solid var(--page-border)" } : {}}
            >
              {/* Label */}
              <div
                className="hidden md:flex items-center px-4 py-4"
                style={{ borderRight: "1px solid var(--page-border)", background: "var(--page-bg)" }}
              >
                <span
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: "var(--page-text-faint)" }}
                >
                  {row.label}
                </span>
              </div>

              {/* Generic */}
              <div
                className="flex items-start gap-3 px-5 py-4"
                style={{ borderRight: "1px solid var(--page-border)", background: "var(--page-card)" }}
              >
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "var(--page-surface)" }}
                >
                  <X size={8} strokeWidth={2.5} style={{ color: "var(--page-text-faint)" }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest mb-1 md:hidden" style={{ color: "var(--page-text-faint)" }}>{row.label}</p>
                  <span className="text-[13px] leading-snug" style={{ color: "var(--page-text-faint)" }}>
                    {row.generic}
                  </span>
                </div>
              </div>

              {/* Bernays */}
              <motion.div
                initial={{ opacity: 0, x: 6 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05, ease }}
                className="flex items-start gap-3 px-5 py-4"
                style={{ background: i % 2 === 0 ? "oklch(0.581 0.243 263 / 0.04)" : "var(--page-card)" }}
              >
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "oklch(0.581 0.243 263 / 0.15)" }}
                >
                  <Check size={8} strokeWidth={3} style={{ color: "oklch(0.581 0.243 263)" }} />
                </div>
                <span className="text-[13px] leading-snug font-medium" style={{ color: "var(--page-text)" }}>
                  {row.bernays}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5, ease }}
          className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border px-6 py-5"
          style={{
            background: "oklch(0.581 0.243 263 / 0.06)",
            borderColor: "oklch(0.581 0.243 263 / 0.2)",
          }}
        >
          <div>
            <p className="text-[15px] font-bold" style={{ color: "var(--page-text)" }}>
              Vê a diferença por dentro.
            </p>
            <p className="text-[13px] mt-0.5" style={{ color: "var(--page-text-muted)" }}>
              Demo com dados reais de uma agência de RP portuguesa. Sem registo.
            </p>
          </div>
          <a
            href={process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"}
            className="shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-5 py-2.5 rounded-xl text-[14px] transition-colors duration-150"
          >
            Comparar por dentro
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
