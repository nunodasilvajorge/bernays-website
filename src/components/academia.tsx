"use client"

import { useState } from "react"
import { FadeIn } from "@/lib/animate"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, BookOpen, Users } from "lucide-react"

const benefits = [
  {
    icon: <GraduationCap size={18} strokeWidth={1.75} />,
    text: "Acesso completo a todos os módulos para uso pedagógico",
  },
  {
    icon: <BookOpen size={18} strokeWidth={1.75} />,
    text: "Dados fictícios pré-carregados para exercícios e simulações",
  },
  {
    icon: <Users size={18} strokeWidth={1.75} />,
    text: "Contas de alunos e professores sem limite de utilizadores",
  },
]

export function Academia() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || state === "loading") return
    setState("loading")
    try {
      const res = await fetch("/api/academia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      setState(res.ok ? "success" : "error")
    } catch {
      setState("error")
    }
  }

  return (
    <section id="academia" className="relative py-16 md:py-24 px-6 overflow-hidden" style={{ background: "var(--page-surface)" }}>
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.581 0.243 263 / 0.2) 40%, oklch(0.581 0.243 263 / 0.2) 60%, transparent 100%)" }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

          {/* Left: text */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-brand/[0.08] border border-brand/[0.2] rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand dark:text-brand-light mb-6">
              <GraduationCap size={13} strokeWidth={2} />
              Bernays para a Academia
            </div>

            <h2
              className="text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Gratuito para universidades{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
              >
                e politécnicos.
              </span>
            </h2>

            <p className="text-[16px] text-slate-500 dark:text-white/45 leading-relaxed mb-8 max-w-xl">
              Instituições de ensino superior que queiram usar o Bernays para ensinar gestão de agências de Relações Públicas têm acesso totalmente gratuito — para professores e alunos.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "oklch(0.581 0.243 263 / 0.1)", color: "oklch(0.581 0.243 263)" }}
                  >
                    {b.icon}
                  </div>
                  <span className="text-[14px] text-slate-600 dark:text-white/55 leading-snug pt-1">{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="max-w-sm">
              <p className="text-[13px] font-medium mb-3 text-slate-400 dark:text-white/35">
                Deixa o teu email institucional e entramos em contacto.
              </p>
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-[14px] font-medium text-emerald-600 dark:text-emerald-400 py-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Recebido. Entramos em contacto em breve.
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="instituicao@universidade.pt"
                      required
                      className="flex-1 px-3 py-2.5 rounded-xl text-[14px] border outline-none focus:ring-2 focus:ring-brand/30 transition-all"
                      style={{ background: "var(--page-bg)", borderColor: "var(--page-border)", color: "var(--page-text)" }}
                    />
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="px-4 py-2.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-xl text-[14px] transition-colors duration-150 shrink-0 disabled:opacity-60"
                    >
                      {state === "loading" ? "..." : "Enviar"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              {state === "error" && (
                <p className="text-[12px] text-red-500 mt-2">Algo correu mal. Tenta outra vez.</p>
              )}
            </div>
          </FadeIn>

          {/* Right: visual card */}
          <FadeIn delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border p-8 text-center min-w-[240px]"
              style={{
                background: "var(--page-card)",
                borderColor: "oklch(0.581 0.243 263 / 0.25)",
                boxShadow: "0 0 48px oklch(0.581 0.243 263 / 0.08), 0 8px 32px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "oklch(0.581 0.243 263 / 0.12)" }}
              >
                <GraduationCap size={28} strokeWidth={1.5} style={{ color: "oklch(0.581 0.243 263)" }} />
              </div>
              <p
                className="text-[40px] font-extrabold leading-none mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                €0
              </p>
              <p className="text-[13px] font-semibold text-slate-700 dark:text-white/70 mb-1">por ano, por instituição</p>
              <p className="text-[12px] text-slate-400 dark:text-white/35 mt-3 leading-snug">
                Para uso pedagógico em<br />Relações Públicas e Comunicação
              </p>
            </motion.div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
