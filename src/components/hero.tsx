"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const


export function Hero() {
  const [showNotif, setShowNotif] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const t1 = setTimeout(() => setShowNotif(true), 2500)
    const t2 = setTimeout(() => setShowNotif(false), 7000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[var(--page-bg)] pt-16">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
      />
      {/* Wide atmospheric haze — static, no animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 55% at 50% -5%, oklch(0.581 0.243 263 / 0.14) 0%, transparent 65%)" }}
      />
      {/* Narrow light beam */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 14% 50% at 50% 0%, oklch(0.72 0.16 263 / 0.22) 0%, transparent 65%)" }}
      />
      {/* Light mode only: subtle blue wash over entire section */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{ background: "linear-gradient(180deg, oklch(0.581 0.243 263 / 0.04) 0%, transparent 50%)" }}
      />
      {/* Bottom horizon glow — creates depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.581 0.243 263 / 0.2) 40%, oklch(0.581 0.243 263 / 0.2) 60%, transparent 100%)" }}
      />

      {/* Copy */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
        {/* Badge with glow ring */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-block mb-8 relative"
        >
          {/* Rotating gradient border */}
          <motion.div
            aria-hidden="true"
            className="absolute -inset-px rounded-full pointer-events-none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              background: "conic-gradient(from 0deg, oklch(0.581 0.243 263 / 0.6) 0deg, transparent 60deg, transparent 300deg, oklch(0.581 0.243 263 / 0.4) 360deg)",
              borderRadius: "9999px",
            }}
          />
          <div className="relative inline-flex items-center gap-2 bg-brand/[0.08] dark:bg-[#07080e] border border-transparent rounded-full px-4 py-1.5 text-sm text-brand dark:text-brand-light"
            style={{ background: "var(--page-bg)" }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Por um professor de RP, para agências de RP
          </div>
        </motion.div>

        {/* Headline — blur reveal line by line */}
        <h1
          className="text-[clamp(44px,7vw,88px)] font-extrabold tracking-[-0.045em] leading-[1.0] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <motion.span
            className="block text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            O sistema nervoso
          </motion.span>
          <motion.span
            className="block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
          >
            da tua agência de RP.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.38, ease }}
          className="text-[18px] md:text-[20px] text-slate-500 dark:text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Sabes quanto faturaste este mês. Mas sabes o que sobrou? O Bernays responde a essa pergunta — em tempo real, por cliente, por projecto, por pessoa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26, ease }}
          className="flex flex-col items-center gap-3 mb-5"
        >
          {/* Primary CTA */}
          <motion.a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="relative overflow-hidden flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-xl text-[15px]"
            style={{ boxShadow: "0 0 0 1px oklch(0.581 0.243 263 / 0.5), 0 0 32px oklch(0.581 0.243 263 / 0.25)" }}
          >
            {/* Shimmer sweep */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none -skew-x-[20deg]"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)", width: "50%" }}
              animate={{ x: ["-120%", "280%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1.8 }}
            />
            <span className="relative">Ver demo</span>
            <svg className="relative" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M8.5 3.5L13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>

          {/* Secondary — calendar link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38, ease }}
            className="text-[13px]"
            style={{ color: "var(--page-text-faint)" }}
          >
            Preferes uma conversa?{" "}
            <a
              href="/agenda"
              className="text-brand hover:underline font-medium"
            >
              Marcar 15 min com o Nuno →
            </a>
          </motion.p>
        </motion.div>

        <p className="text-[13px] text-slate-400 dark:text-white/20 flex items-center justify-center gap-2 flex-wrap mb-4">
          <span>Sem registo</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20 inline-block" />
          <span>Sem cartão de crédito</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20 inline-block" />
          <span>Demo com dados reais de agência</span>
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-slate-400 dark:text-white/25 flex items-center justify-center gap-2 flex-wrap"
        >
          <span>Investigação aplicada</span>
          <span className="w-1 h-1 rounded-full bg-brand/40 inline-block" />
          <span>ESCS-IPL, Lisboa</span>
          <span className="w-1 h-1 rounded-full bg-brand/40 inline-block" />
          <span>Professor de RP</span>
        </motion.p>
      </div>

      {/* Mobile screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease }}
        className="relative z-10 w-full max-w-sm mx-auto px-6 pb-10 block md:hidden"
      >
        <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] shadow-[0_24px_64px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
          <Image src="/finance-light.webp" alt="Bernays dashboard" width={600} height={480} priority className="w-full object-cover object-top block dark:hidden" style={{ maxHeight: "320px" }} />
          <Image src="/finance-dark.webp" alt="Bernays dashboard" width={600} height={480} priority className="w-full object-cover object-top hidden dark:block" style={{ maxHeight: "320px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#07080e] to-transparent pointer-events-none rounded-b-2xl" />
        </div>
      </motion.div>

      {/* Browser mockup com screenshot real */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-black/[0.1] dark:border-white/[0.12] shadow-[0_48px_120px_rgba(0,0,0,0.22)] dark:shadow-[0_48px_120px_rgba(0,0,0,0.75)]">
            {/* Title bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f1f5] dark:bg-[#13141e] border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
              </div>
              <div className="flex-1 px-4">
                <div className="bg-white dark:bg-[#0a0b14] rounded-lg px-3 py-1 text-[11px] font-mono text-center max-w-72 mx-auto text-slate-400 dark:text-white/28">
                  demo.bernays.pt
                </div>
              </div>
              <motion.div
                className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Screenshot real — alterna com tema */}
            <div className="relative overflow-hidden" style={{ maxHeight: "480px" }}>
              <Image src="/finance-light.webp" alt="Bernays dashboard financeiro" width={1440} height={900} priority className="w-full object-cover object-top block dark:hidden" style={{ maxHeight: "480px" }} />
              <Image src="/finance-dark.webp" alt="Bernays dashboard financeiro" width={1440} height={900} priority className="w-full object-cover object-top hidden dark:block" style={{ maxHeight: "480px" }} />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0b0c16] to-transparent pointer-events-none" />

              {/* In-app alert toast */}
              <AnimatePresence>
                {showNotif && (
                  <motion.div
                    initial={{ y: -16, opacity: 0, scale: 0.96 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -16, opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease }}
                    className="absolute top-3 right-4 bg-white/95 dark:bg-[#13141e]/95 backdrop-blur-md border border-black/[0.07] dark:border-white/[0.1] rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-md dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] z-10"
                  >
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#22c55e18" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5L4.5 9L10 3.5" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-800 dark:text-white/88 leading-none mb-0.5">Pagamento recebido</p>
                      <p className="text-[10px] text-slate-400 dark:text-white/38">Acme PR · €10.332,00</p>
                    </div>
                    <div className="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* Mockup under-glow — dramatic depth */}
          <motion.div
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 rounded-full blur-3xl pointer-events-none"
            style={{ background: "oklch(0.581 0.243 263 / 0.22)" }}
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-8 rounded-full blur-2xl pointer-events-none" style={{ background: "oklch(0.581 0.243 263 / 0.3)" }} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, var(--page-bg), transparent)" }} />
      {/* Section transition: brand glow seam */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.581 0.243 263 / 0.35) 40%, oklch(0.581 0.243 263 / 0.35) 60%, transparent 100%)" }} />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ opacity: useTransform(scrollY, [0, 120], [1, 0]) }}
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-slate-400 dark:text-white/25">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-slate-400 dark:text-white/25">
          <path d="M8 3V13M4 9L8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
