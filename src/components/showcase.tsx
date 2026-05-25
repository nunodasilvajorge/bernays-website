"use client"

import Image from "next/image"
import { FadeIn } from "@/lib/animate"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ease = [0.22, 1, 0.36, 1] as const

const panels = [
  {
    id: "pipeline",
    label: "CRESCIMENTO",
    labelColor: "#2257ff",
    title: "O teu pipeline de vendas, finalmente honesto.",
    body: "Sabes exactamente o que está no pipeline, com que probabilidade de fechar, e que receita podes prometer para o próximo trimestre.",
    bullets: [
      "Kanban por etapa com valor total do pipeline e forecast por mês",
      "Cada deal com probabilidade, próxima acção e histórico completo",
      "Propostas criadas, enviadas e aceites digitalmente — sem sair do Bernays",
    ],
    light: "/growth-light.webp",
    dark: "/growth-dark.webp",
    alt: "Bernays CRM e pipeline de crescimento",
    reverse: false,
  },
  {
    id: "finance",
    label: "FINANCEIRO",
    labelColor: "#059669",
    title: "Faturas que saem. Dinheiro que entra.",
    body: "O Bernays mostra-te qual é o teu cliente menos rentável antes de perderes mais dinheiro com ele. Retainers automáticos, cobranças visíveis, P&L em tempo real.",
    bullets: [
      "Todas as faturas num só ecrã: emitidas, pagas e em atraso",
      "Retainers configurados uma vez, gerados automaticamente",
      "P&L por cliente: quanto faturaste, o que está em dívida, o que sobrou",
    ],
    light: "/invoices-light.webp",
    dark: "/invoices-dark.webp",
    alt: "Bernays módulo financeiro e faturação",
    reverse: true,
  },
  {
    id: "delivery",
    label: "DELIVERY",
    labelColor: "#7c3aed",
    title: "Cada consultor sabe o que fazer. Tu sabes se está a ser rentável.",
    body: "Projectos, tarefas e timesheets num só lugar. Tu vês o tempo registado convertido em custo real — antes de a fatura chegar.",
    bullets: [
      "Vista de todos os projetos activos: prazo, orçamento e conclusão",
      "Timesheets por projecto: tempo registado vira custo real visível",
      "Templates de projeto para equipas de comunicação",
    ],
    light: "/delivery-light.webp",
    dark: "/delivery-dark.webp",
    alt: "Bernays delivery e gestão de projectos",
    reverse: false,
  },
]

function BulletList({ bullets, color }: { bullets: string[]; color: string }) {
  const ref = useRef<HTMLUListElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })
  return (
    <ul ref={ref} className="space-y-2">
      {bullets.map((b, i) => (
        <motion.li
          key={b}
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, delay: i * 0.1, ease }}
          className="flex items-start gap-2.5 text-[13px] text-slate-500 dark:text-white/50"
        >
          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}18` }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          </div>
          {b}
        </motion.li>
      ))}
    </ul>
  )
}

function Screenshot({ light, dark, alt, fromLeft }: { light: string; dark: string; alt: string; fromLeft?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -48 : 48, scale: 0.97 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, ease }}
      className="rounded-2xl overflow-hidden border group"
      style={{
        borderColor: "rgba(0,0,0,0.1)",
        boxShadow: "0 2px 0 rgba(0,0,0,0.06), 0 24px 64px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.08)"
      }}
    >
      <Image src={light} alt={alt} width={1440} height={900} loading="lazy" sizes="(max-width: 768px) 100vw, 60vw" className="w-full block dark:hidden transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
      <Image src={dark} alt={alt} width={1440} height={900} loading="lazy" sizes="(max-width: 768px) 100vw, 60vw" className="w-full hidden dark:block transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
    </motion.div>
  )
}

function PanelText({ panel, className }: { panel: typeof panels[0]; className?: string }) {
  return (
    <FadeIn className={className}>
      <span className="text-[11px] font-bold tracking-widest uppercase mb-3 block" style={{ color: panel.labelColor }}>
        {panel.label}
      </span>
      <h3
        className="text-[clamp(26px,3.5vw,42px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.08] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {panel.title}
      </h3>
      <p className="text-[15px] text-slate-500 dark:text-white/45 leading-relaxed mb-5">
        {panel.body}
      </p>
      <BulletList bullets={panel.bullets} color={panel.labelColor} />
    </FadeIn>
  )
}

export function Showcase() {
  return (
    <section id="como-funciona" className="py-16 md:py-32 px-6" style={{ background: "var(--page-bg)" }}>
      <div className="max-w-6xl mx-auto space-y-14 md:space-y-20">
        {panels.map((panel, idx) => (
          <div key={panel.id}>
            {panel.reverse ? (
              <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
                <PanelText panel={panel} className="md:col-start-2 md:row-start-1" />
                <div className="md:col-start-1 md:row-start-1">
                  <Screenshot light={panel.light} dark={panel.dark} alt={panel.alt} fromLeft />
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-[2fr_3fr] gap-16 items-center">
                <PanelText panel={panel} />
                <Screenshot light={panel.light} dark={panel.dark} alt={panel.alt} />
              </div>
            )}

            {idx < panels.length - 1 && (
              <div className="mt-14 md:mt-20 border-t" style={{ borderColor: "var(--page-border)" }} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
