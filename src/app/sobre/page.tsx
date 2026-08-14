"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { FloatingCta } from "@/components/floating-cta"
import { FadeIn } from "@/lib/animate"
import { Academia } from "@/components/academia"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

const principles = [
  {
    n: "01",
    title: "Menos processos. Mais comunicação.",
    body: "Os consultores de RP gastam demasiado tempo em tarefas que não os distinguem. O Bernays automatiza o que pode ser automatizado — timesheets, relatórios, faturação — para que a equipa se concentre no que gera valor.",
  },
  {
    n: "02",
    title: "As melhores práticas da profissão, no produto.",
    body: "Rentabilidade por cliente, estruturas de entrega, alinhamento da comunicação com o negócio. As metodologias que definem uma agência bem gerida estão incorporadas — não em manuais que ninguém aplica.",
  },
  {
    n: "03",
    title: "Um sistema, não cinco ferramentas.",
    body: "Do CRM à faturação, dos projectos às pessoas, dos jornalistas às campanhas — tudo num único sistema integrado. A agência vê a sua operação completa, em tempo real, pela primeira vez.",
  },
]

const cycleStages = ["CRM", "Propostas", "Projectos", "Faturação", "P&L", "Pessoas", "Campanhas", "Relatórios"]

const researchItems = [
  "Rentabilidade por cliente e modelos de pricing em PR",
  "Estruturas de entrega e fluxos de trabalho na agência",
  "Alinhamento da comunicação com os objectivos de negócio",
]

export default function SobrePage() {
  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Nav />
      <FloatingCta />

      {/* ─── Hero ─── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.581 0.243 263 / 0.09) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="text-sm font-semibold text-brand tracking-widest uppercase mb-6"
          >
            A visão
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.07, ease }}
            className="text-[clamp(44px,7vw,88px)] font-extrabold tracking-[-0.045em] leading-[1.0] mb-7 max-w-4xl"
            style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
          >
            Comunicação{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              em primeiro lugar.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="text-[19px] leading-relaxed max-w-lg"
            style={{ color: "var(--page-text-muted)" }}
          >
            Software que liberta os consultores de RP para o que são melhores: comunicar.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t" style={{ borderColor: "var(--page-border)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-20 py-20">

          {/* ─── Fundador ─── */}
          <FadeIn>
            <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
              <Image
                src="/founder.jpeg"
                alt="Nuno da Silva Jorge"
                width={188}
                height={240}
                className="w-[188px] h-60 rounded-2xl object-cover object-top shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-5">
                  Uma convicção
                </p>
                <p className="text-[17px] leading-relaxed mb-4" style={{ color: "var(--page-text-muted)" }}>
                  Nuno da Silva Jorge passou anos a ensinar gestão de agências de RP na ESCS-IPL. Via o mesmo padrão: equipas talentosas a gastar energia em processos que nenhum software resolvia de forma séria. Os dados estavam dispersos. A rentabilidade era uma estimativa. O tempo, mal gasto.
                </p>
                <p className="text-[17px] leading-relaxed mb-7" style={{ color: "var(--page-text-muted)" }}>
                  A resposta existia na investigação. Faltava o software que a incorporasse. O Bernays é a tentativa de o construir.
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/founder.jpeg"
                    alt=""
                    width={32} height={32}
                    className="w-8 h-8 rounded-full object-cover shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <a
                      href="https://www.linkedin.com/in/nunodasilvajorge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-150 [color:var(--page-text)] hover:text-brand"
                    >
                      Nuno da Silva Jorge
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-40">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
                      Professor de RP · ESCS-IPL · Fundador do Bernays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ─── Manifesto ─── */}
          <FadeIn>
            <div>
              <div className="space-y-5 mb-10">
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                  Os profissionais de RP passam demasiado tempo em tarefas que não os distinguem: actualizar folhas de cálculo, consolidar dados dispersos entre ferramentas, construir relatórios manualmente. São processos necessários — mas não são comunicação.
                </p>
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                  O que distingue um consultor de RP é a capacidade de construir relações, desenvolver estratégias com impacto real, criar narrativas que movem públicos e alinham a comunicação com o negócio dos clientes.
                </p>
              </div>

              <blockquote className="border-y py-9 my-10" style={{ borderColor: "var(--page-border)" }}>
                <p
                  className="text-[clamp(22px,2.8vw,30px)] font-semibold leading-snug"
                  style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
                >
                  É isso que gera valor para os clientes.<br />O software deve tratar do resto.
                </p>
              </blockquote>

              <div className="space-y-5">
                <p className="text-[17px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                  Esta é a evolução tecnológica das Relações Públicas: um sistema operativo que cobre o ciclo completo da agência, incorpora as melhores práticas da profissão e usa IA para acelerar o que só o software pode fazer — para que os consultores se dediquem ao que só os humanos podem fazer.
                </p>
                <p className="text-[17px] font-semibold leading-relaxed" style={{ color: "var(--page-text)" }}>
                  O mundo das RP não vai ser o mesmo.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ─── Princípios ─── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease }}
              className="text-sm font-semibold text-brand tracking-widest uppercase mb-12"
            >
              Os princípios
            </motion.p>
            <div className="space-y-12">
              {principles.map(({ n, title, body }, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease }}
                  className="grid grid-cols-[32px_1fr] gap-8 items-start"
                >
                  <span
                    className="text-[12px] font-bold tabular-nums pt-1.5"
                    style={{ color: "var(--page-text-faint)" }}
                  >
                    {n}
                  </span>
                  <div>
                    <p
                      className="text-[20px] font-extrabold tracking-[-0.025em] leading-snug mb-3"
                      style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
                    >
                      {title}
                    </p>
                    <p className="text-[15px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                      {body}
                    </p>
                    {i === 2 && (
                      <div className="flex flex-wrap items-center gap-y-3 mt-6">
                        {cycleStages.map((stage, si) => (
                          <div key={stage} className="flex items-center">
                            <span className="text-[13px] font-medium" style={{ color: "var(--page-text-muted)" }}>
                              {stage}
                            </span>
                            {si < cycleStages.length - 1 && (
                              <span className="mx-3 text-[11px]" style={{ color: "var(--page-text-faint)" }}>
                                →
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ─── Investigação ─── */}
          <FadeIn>
            <div className="border-t pt-10" style={{ borderColor: "var(--page-border)" }}>
              <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-5">
                As melhores práticas no produto
              </p>
              <p className="text-[15px] font-semibold mb-6" style={{ color: "var(--page-text-faint)" }}>
                Gestão de agências de Relações Públicas · ESCS-IPL, Lisboa
              </p>
              <div className="space-y-4">
                {researchItems.map((item) => (
                  <p key={item} className="text-[15px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                    — {item}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* ─── Academia ─── */}
      <Academia />

      {/* ─── After academia ─── */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="max-w-3xl mx-auto pt-16 space-y-16">

          {/* Citação — clímax */}
          <FadeIn>
            <div
              className="relative px-8 py-14 rounded-2xl overflow-hidden border"
              style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, oklch(0.581 0.243 263 / 0.06) 0%, transparent 70%)" }}
              />
              <div className="relative">
                <svg
                  width="36" height="28" viewBox="0 0 48 36"
                  fill="currentColor" className="mb-7"
                  style={{ color: "oklch(0.581 0.243 263 / 0.3)" }}
                  aria-hidden="true"
                >
                  <path d="M0 36V22.5C0 15.9 1.8 10.5 5.4 6.3 9 2.1 14.1 0 20.7 0L22.5 3.6C18.3 4.8 15 7.2 12.6 10.8 10.2 14.4 9 18.3 9 22.5H18V36H0ZM27 36V22.5C27 15.9 28.8 10.5 32.4 6.3 36 2.1 41.1 0 47.7 0L49.5 3.6C45.3 4.8 42 7.2 39.6 10.8 37.2 14.4 36 18.3 36 22.5H45V36H27Z" />
                </svg>
                <blockquote>
                  <p
                    className="text-[clamp(18px,2.4vw,25px)] font-medium leading-relaxed mb-8"
                    style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
                  >
                    As Relações Públicas têm décadas de conhecimento sobre como uma agência deve ser gerida. Esse conhecimento merecia um software à sua altura. O mundo das RP não vai ser o mesmo.
                  </p>
                  <footer className="flex items-center gap-3">
                    <Image
                      src="/founder.jpeg"
                      alt="Nuno da Silva Jorge"
                      width={40} height={40}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="text-[14px] font-semibold" style={{ color: "var(--page-text)" }}>
                        Nuno da Silva Jorge
                      </p>
                      <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
                        Fundador do Bernays · Professor de Relações Públicas · ESCS-IPL
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn>
            <div className="border-t pt-8" style={{ borderColor: "var(--page-border)" }}>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a
                  href={`${APP_URL}/login?signup=1`}
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-bold px-8 py-3.5 rounded-xl text-[15px] transition-colors duration-150"
                >
                  Começar agora
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/agenda"
                  className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-xl text-[15px] border transition-all duration-150 [color:var(--page-text-muted)] [border-color:var(--page-border)] hover:border-brand/40 hover:text-brand"
                >
                  Marcar uma conversa
                </a>
              </div>
              <p className="text-[13px]" style={{ color: "var(--page-text-faint)" }}>
                Sem registo · Sem cartão · Dados de agência fictícia incluídos
              </p>
            </div>
          </FadeIn>

        </div>
      </div>

      <Footer />
    </main>
  )
}
