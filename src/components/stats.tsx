"use client"

import { FadeIn, AnimatedNumber } from "@/lib/animate"

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
        <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border" style={{ background: "var(--page-border)", borderColor: "var(--page-border)" }}>
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.06}>
              <div
                className="p-10 flex flex-col gap-3"
                style={{ background: "var(--page-surface)" }}
              >
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
