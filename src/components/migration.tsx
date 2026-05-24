"use client"

import { FadeIn } from "@/lib/animate"
import { ArrowRight } from "lucide-react"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

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

export function Migration() {
  return (
    <section className="py-16 md:py-28 px-6" style={{ background: "var(--page-bg)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">Migração</p>
          <h2
            className="text-[clamp(32px,4.5vw,54px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mudar não tem de ser difícil.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              São 3 passos.
            </span>
          </h2>
          <p className="text-[16px] text-slate-500 dark:text-white/45 leading-relaxed">
            A maioria das agências está operacional em menos de uma hora.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "var(--page-border)" }}>
          {steps.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.1} className="relative px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0">
              {/* Ghost number */}
              <div
                className="text-[88px] font-extrabold leading-none mb-4 select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "oklch(0.581 0.243 263 / 0.14)",
                }}
                aria-hidden="true"
              >
                {step.n}
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-[14px] text-slate-500 dark:text-white/45 leading-relaxed">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
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
