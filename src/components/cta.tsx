"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

export function Cta() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || state === "loading") return
    setState("loading")
    try {
      const res = await fetch("/api/waitlist", {
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
    <section
      ref={ref}
      className="relative py-20 md:py-40 px-6 overflow-hidden"
      style={{ background: "var(--page-bg)" }}
    >
      {/* Brand glow — strong, from below-centre like a stage light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 110%, oklch(0.581 0.243 263 / 0.22) 0%, transparent 65%)" }}
      />
      {/* Soft top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 0%, oklch(0.581 0.243 263 / 0.04) 0%, transparent 60%)" }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease }}
          className="inline-flex items-center gap-2 bg-brand/[0.08] border border-brand/[0.18] rounded-full px-4 py-1.5 text-sm text-brand dark:text-brand-light mb-10"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          Demo disponível agora
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-[clamp(48px,8vw,100px)] font-extrabold tracking-[-0.05em] leading-[0.95] mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
        >
          A tua agência{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
          >
            merece melhor.
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.16, ease }}
          className="text-[18px] leading-relaxed mb-12 max-w-md mx-auto"
          style={{ color: "var(--page-text-muted)" }}
        >
          Dez minutos e percebes se o Bernays é para a tua agência.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22, ease }}
          className="mb-6"
        >
          <motion.a
            href={`${APP_URL}/login?signup=1`}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-hover text-white font-bold px-10 py-4 rounded-xl text-[17px] transition-colors duration-150"
            style={{ boxShadow: "0 0 64px oklch(0.581 0.243 263 / 0.45), 0 4px 24px oklch(0.581 0.243 263 / 0.3)" }}
          >
            Começar agora
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.5 9H14.5M9.5 4L14.5 9L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <p className="text-[13px] mt-4" style={{ color: "var(--page-text-faint)" }}>
            Sem registo · Sem cartão · Dados de agência fictícia incluídos
          </p>
        </motion.div>

        {/* Secondary — lead capture, visually separated */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3, ease }}
          className="max-w-sm mx-auto pt-8 border-t"
          style={{ borderColor: "var(--page-border)" }}
        >
          <p className="text-[13px] font-medium mb-3" style={{ color: "var(--page-text-faint)" }}>
            Preferes que entremos em contacto?
          </p>
          <div aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-[14px] font-medium text-emerald-600 dark:text-emerald-400 py-2"
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
                  placeholder="o.teu@email.pt"
                  required
                  className="flex-1 px-3 py-2.5 rounded-xl text-[14px] border outline-none focus:ring-2 focus:ring-brand/30 transition-all"
                  style={{ background: "var(--page-card)", borderColor: "var(--page-border)", color: "var(--page-text)" }}
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="px-4 py-2.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-xl text-[14px] transition-colors duration-150 shrink-0 disabled:opacity-60 flex items-center gap-2"
                >
                  {state === "loading" ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
                        <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      A enviar…
                    </>
                  ) : "Enviar"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          </div>
          {state === "error" && (
            <p className="text-[12px] text-red-500 mt-2 text-center" role="alert">
              Algo correu mal. Tenta outra vez.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
