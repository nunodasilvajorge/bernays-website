"use client"

import { AlertCircle, Gauge, Clock } from "lucide-react"
import { FadeIn } from "@/lib/animate"

const pains = [
  {
    icon: AlertCircle,
    iconBg: "oklch(0.55 0.22 300 / 0.12)",
    iconColor: "oklch(0.55 0.22 300)",
    title: "O teu cliente mais antigo pode ser o teu pior negócio.",
    body: "Sem rentabilidade por cliente, os retainers de longa data são os mais perigosos. Acumulas trabalho extra, não registas todas as horas e no fim do trimestre não sabes se ganhaste ou perdeste.",
  },
  {
    icon: Gauge,
    iconBg: "oklch(0.78 0.18 75 / 0.12)",
    iconColor: "oklch(0.68 0.18 75)",
    title: "Geres pelo feeling. E o feeling nunca bate certo.",
    body: "Sem pipeline real, sem P&L por projecto e sem timesheets integrados, cada decisão é uma aposta. Há sempre um cliente que parece render — e está a drenar a margem.",
  },
  {
    icon: Clock,
    iconBg: "oklch(0.581 0.243 263 / 0.1)",
    iconColor: "oklch(0.581 0.243 263)",
    title: "Os teus melhores consultores estão a trabalhar de graça.",
    body: "Horas não registadas são horas não cobradas. Cada proposta no Word, cada timesheet em Excel, cada relatório manual é trabalho da agência que não aparece na fatura.",
  },
]

export function Problem() {
  return (
    <section className="relative py-16 md:py-36 px-6" style={{ background: "var(--page-bg)" }}>
      {/* Top glow seam from hero */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, oklch(0.581 0.243 263 / 0.06) 0%, transparent 100%)" }} />
      <div className="max-w-5xl mx-auto">

        <FadeIn className="mb-16">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-5">
            O problema
          </p>
          <h2
            className="text-[clamp(40px,5.5vw,68px)] font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white leading-[1.05] max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
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

        <div className="grid md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: "var(--page-border)" }}>
          {pains.map((pain, i) => {
            const Icon = pain.icon
            return (
              <FadeIn key={pain.title} delay={i * 0.08}>
                <div
                  className="p-8 h-full"
                  style={{ background: "var(--page-surface)" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-6 shrink-0"
                    style={{ background: pain.iconBg }}
                  >
                    <Icon size={18} strokeWidth={1.75} style={{ color: pain.iconColor }} />
                  </div>
                  <h3
                    className="text-[17px] font-bold text-slate-900 dark:text-white leading-snug mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {pain.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 dark:text-white/40 leading-relaxed">
                    {pain.body}
                  </p>
                </div>
              </FadeIn>
            )
          })}
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
