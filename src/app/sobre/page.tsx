"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { FloatingCta } from "@/components/floating-cta"
import { FadeIn } from "@/lib/animate"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

export default function SobrePage() {
  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Nav />
      <FloatingCta />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div
          className="relative mb-16 pb-10 border-b overflow-hidden"
          style={{ borderColor: "var(--page-border)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 100% at 50% 100%, oklch(0.581 0.243 263 / 0.07) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="text-sm font-semibold text-brand tracking-widest uppercase mb-3"
            >
              O fundador
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
              className="text-[clamp(30px,5vw,54px)] font-extrabold tracking-[-0.04em] leading-tight"
              style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
            >
              Bernays nasceu da investigação.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
              >
                E de gerir uma agência de RP.
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto space-y-16">

          {/* Profile */}
          <FadeIn>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <Image
                src="/founder.jpeg"
                alt="Nuno da Silva Jorge"
                width={192}
                height={240}
                className="w-48 h-60 rounded-2xl object-cover object-top shrink-0"
              />
              <div>
                <p
                  className="text-[28px] font-extrabold tracking-[-0.025em] mb-1"
                  style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
                >
                  Nuno da Silva Jorge
                </p>
                <p className="text-[13px] font-semibold text-brand mb-5 tracking-wide">
                  Professor de Relações Públicas · ESCS-IPL · Fundador do Bernays
                </p>
                <p className="text-[15px] leading-relaxed mb-3" style={{ color: "var(--page-text-muted)" }}>
                  Estratega de Relações Públicas com carreira entre a consultoria e o ensino superior. Passou anos a trabalhar com agências e a ensinar gestão da comunicação — e percebeu que as ferramentas disponíveis no mercado não foram construídas para este sector.
                </p>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--page-text-muted)" }}>
                  Fundou o Bernays para resolver o problema que via todos os dias: agências de RP a gerir operações complexas com folhas de cálculo e ferramentas construídas para outros sectores.
                </p>
                <a
                  href="https://www.linkedin.com/in/nunodasilvajorge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-150 hover:text-brand"
                  style={{ color: "var(--page-text-faint)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Ver perfil LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Academic credential */}
          <FadeIn delay={0.05}>
            <div>
              <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-5">
                Investigação académica
              </p>
              <div
                className="rounded-2xl border p-6"
                style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.581 0.243 263 / 0.1)", color: "oklch(0.581 0.243 263)" }}
                  >
                    <GraduationCap size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold mb-0.5" style={{ color: "var(--page-text)" }}>
                      Gestão de agências de Relações Públicas
                    </p>
                    <p className="text-[13px]" style={{ color: "var(--page-text-faint)" }}>
                      ESCS-IPL — Escola Superior de Comunicação Social, Lisboa
                    </p>
                  </div>
                </div>
                <div className="space-y-2.5 border-t pt-5" style={{ borderColor: "var(--page-border)" }}>
                  {[
                    "Gestão operacional e financeira em agências de Relações Públicas",
                    "Ferramentas de gestão e fluxos de trabalho no sector de PR",
                    "Modelos de criação de valor em comunicação estratégica",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "oklch(0.581 0.243 263 / 0.12)" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.581 0.243 263)" }} />
                      </div>
                      <span className="text-[13px]" style={{ color: "var(--page-text-muted)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* O gap */}
          <FadeIn delay={0.05}>
            <div>
              <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-5">
                O gap
              </p>
              <h2
                className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-0.03em] leading-snug mb-6"
                style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
              >
                O que as universidades ensinam sobre gestão de RP não está em nenhum software.
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--page-text-muted)" }}>
                Na academia, o conhecimento sobre como gerir uma agência de Relações Públicas — rentabilidade por cliente, propostas, timesheets, relatórios de actividade — existe e está documentado. Mas quando uma agência abre portas, recorre ao Excel, ao Toggl ou ao Productive: ferramentas construídas para outros sectores, adaptadas à força para PR.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                O resultado é previsível:{" "}
                <span className="font-semibold" style={{ color: "var(--page-text)" }}>
                  agências que nunca sabem exactamente se estão a ganhar ou a perder dinheiro, porque os dados estão dispersos por cinco ferramentas que nunca falam entre si.
                </span>{" "}
                O Bernays existe para resolver exactamente isto.
              </p>
            </div>
          </FadeIn>

          {/* Blockquote */}
          <FadeIn delay={0.05}>
            <div
              className="relative px-8 py-12 rounded-2xl overflow-hidden border"
              style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, oklch(0.581 0.243 263 / 0.05) 0%, transparent 70%)" }}
              />
              <div className="relative">
                <svg
                  width="36"
                  height="28"
                  viewBox="0 0 48 36"
                  fill="currentColor"
                  className="mb-6"
                  style={{ color: "oklch(0.581 0.243 263 / 0.3)" }}
                  aria-hidden="true"
                >
                  <path d="M0 36V22.5C0 15.9 1.8 10.5 5.4 6.3 9 2.1 14.1 0 20.7 0L22.5 3.6C18.3 4.8 15 7.2 12.6 10.8 10.2 14.4 9 18.3 9 22.5H18V36H0ZM27 36V22.5C27 15.9 28.8 10.5 32.4 6.3 36 2.1 41.1 0 47.7 0L49.5 3.6C45.3 4.8 42 7.2 39.6 10.8 37.2 14.4 36 18.3 36 22.5H45V36H27Z" />
                </svg>
                <blockquote>
                  <p
                    className="text-[clamp(17px,2.3vw,22px)] font-medium leading-relaxed mb-8"
                    style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
                  >
                    A minha visão é que o sector de Relações Públicas se afirme como um modelo de criação de valor para os clientes. Agências mais rentáveis e melhor organizadas têm mais tempo para o que realmente importa: comunicação estratégica de qualidade.
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
                      <p className="text-[14px] font-semibold" style={{ color: "var(--page-text)" }}>
                        Nuno da Silva Jorge
                      </p>
                      <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
                        Fundador do Bernays · Professor de Relações Públicas
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.05}>
            <div className="border-t pt-8" style={{ borderColor: "var(--page-border)" }}>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-bold px-8 py-3.5 rounded-xl text-[15px] transition-colors duration-150"
                >
                  Experimentar grátis
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/agenda"
                  className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-xl text-[15px] border transition-colors duration-150 hover:border-brand/60"
                  style={{ borderColor: "oklch(0.581 0.243 263 / 0.3)", color: "var(--page-text-muted)" }}
                >
                  Marcar uma conversa
                </a>
              </div>
              <p className="text-[13px]" style={{ color: "var(--page-text-faint)" }}>
                Sem registo · Sem cartão · Demo com dados reais de agência
              </p>
            </div>
          </FadeIn>

        </div>
      </div>

      <Footer />
    </main>
  )
}
