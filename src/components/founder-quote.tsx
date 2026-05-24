"use client"

import Image from "next/image"
import { FadeIn } from "@/lib/animate"
import { GraduationCap } from "lucide-react"

export function FounderQuote() {
  return (
    <section
      className="relative py-16 md:py-24 px-6 border-y overflow-hidden"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
    >
      {/* Atmospheric glow — centred */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, oklch(0.581 0.243 263 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">

            {/* Quote */}
            <div className="relative">
              <svg
                className="absolute -top-4 -left-2"
                width="48"
                height="36"
                viewBox="0 0 48 36"
                fill="currentColor"
                style={{ color: "oklch(0.581 0.243 263 / 0.22)" }}
                aria-hidden="true"
              >
                <path d="M0 36V22.5C0 15.9 1.8 10.5 5.4 6.3 9 2.1 14.1 0 20.7 0L22.5 3.6C18.3 4.8 15 7.2 12.6 10.8 10.2 14.4 9 18.3 9 22.5H18V36H0ZM27 36V22.5C27 15.9 28.8 10.5 32.4 6.3 36 2.1 41.1 0 47.7 0L49.5 3.6C45.3 4.8 42 7.2 39.6 10.8 37.2 14.4 36 18.3 36 22.5H45V36H27Z" />
              </svg>

              <blockquote className="pl-8">
                <p
                  className="text-[clamp(17px,2.3vw,22px)] font-medium leading-relaxed mb-8"
                  style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
                >
                  Agências mais rentáveis e melhor organizadas têm mais tempo para o que realmente importa: comunicação estratégica de qualidade. A minha visão é que o sector de Relações Públicas se afirme como um modelo de criação de valor para os clientes; e o Bernays é o sistema que torna isso possível.
                </p>

                <footer className="flex items-center gap-3">
                  <Image
                    src="/founder.jpeg"
                    alt="Nuno da Silva Jorge"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <a
                      href="https://www.linkedin.com/in/nunodasilvajorge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-semibold hover:underline"
                      style={{ color: "var(--page-text)" }}
                    >
                      Nuno da Silva Jorge
                    </a>
                    <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
                      Fundador do Bernays · Professor de Relações Públicas
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Credential card */}
            <div
              className="rounded-2xl border p-6 min-w-[220px] md:min-w-[240px] shrink-0"
              style={{
                background: "var(--page-card)",
                borderColor: "oklch(0.581 0.243 263 / 0.2)",
                boxShadow: "0 0 40px oklch(0.581 0.243 263 / 0.06)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "oklch(0.581 0.243 263 / 0.1)", color: "oklch(0.581 0.243 263)" }}
              >
                <GraduationCap size={20} strokeWidth={1.75} />
              </div>
              <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "var(--page-text-faint)" }}>
                Credencial académica
              </p>
              <p className="text-[14px] font-semibold leading-snug mb-1" style={{ color: "var(--page-text)" }}>
                Investigação aplicada
              </p>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: "var(--page-text-muted)" }}>
                Gestão de agências de Relações Públicas — ESCS-IPL, Lisboa
              </p>
              <div className="border-t pt-4 space-y-2" style={{ borderColor: "var(--page-border)" }}>
                {[
                  "Boas práticas de PR nativas",
                  "Fluxos de trabalho reais de agência",
                  "Não adaptado de outro sector",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div
                      className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "oklch(0.581 0.243 263 / 0.12)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.581 0.243 263)" }} />
                    </div>
                    <span className="text-[12px]" style={{ color: "var(--page-text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
