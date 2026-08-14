"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

const heroSlides = [
  {
    id: "financeiro",
    label: "Financeiro",
    color: "#059669",
    light: "/finance-light.webp",
    dark: "/finance-dark.webp",
    alt: "Bernays módulo financeiro — faturação e P&L",
    notif: { text: "Pagamento recebido", sub: "Acme PR · €10.332,00", accent: "#22c55e" },
  },
  {
    id: "crescimento",
    label: "Crescimento",
    color: "#2257ff",
    light: "/growth-light.webp",
    dark: "/growth-dark.webp",
    alt: "Bernays módulo crescimento — pipeline e propostas",
    notif: { text: "Proposta aceite", sub: "Blue Wave Media · €24.000,00", accent: "#2257ff" },
  },
  {
    id: "delivery",
    label: "Delivery",
    color: "#7c3aed",
    light: "/delivery-light.webp",
    dark: "/delivery-dark.webp",
    alt: "Bernays módulo delivery — projectos e timesheets",
    notif: { text: "Projecto concluído", sub: "Novus Pharma Q2 · 96h registadas", accent: "#7c3aed" },
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [notifVisible, setNotifVisible] = useState(false)
  const { scrollY } = useScroll()

  // Auto-advance slides
  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setCurrent(p => (p + 1) % heroSlides.length), 4500)
    return () => clearTimeout(t)
  }, [current, paused])

  // Notification timing per slide
  useEffect(() => {
    setNotifVisible(false)
    const show = setTimeout(() => setNotifVisible(true), 900)
    const hide = setTimeout(() => setNotifVisible(false), 3500)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [current])

  const slide = heroSlides[current]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[var(--page-bg)] pt-16">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
      />
      {/* Wide atmospheric haze */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 55% at 50% -5%, oklch(0.581 0.243 263 / 0.14) 0%, transparent 65%)" }}
      />
      {/* Narrow light beam */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 14% 50% at 50% 0%, oklch(0.72 0.16 263 / 0.22) 0%, transparent 65%)" }}
      />
      {/* Light mode: subtle blue wash */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{ background: "linear-gradient(180deg, oklch(0.581 0.243 263 / 0.04) 0%, transparent 50%)" }}
      />
      {/* Bottom horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.581 0.243 263 / 0.2) 40%, oklch(0.581 0.243 263 / 0.2) 60%, transparent 100%)" }}
      />

      {/* Copy */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
        {/* Badge with rotating gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-block mb-8 relative"
        >
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
          <div
            className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-brand dark:text-brand-light border border-transparent"
            style={{ background: "var(--page-bg)" }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Feito de raiz para profissionais de RP
          </div>
        </motion.div>

        {/* Headline */}
        <h1
          className="text-[clamp(44px,7vw,88px)] font-extrabold tracking-[-0.045em] leading-[1.08] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <motion.span
            className="block"
            style={{ color: "var(--page-text)" }}
            initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            O sistema operativo
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
          className="text-[18px] md:text-[20px] max-w-3xl mx-auto leading-relaxed mb-10"
          style={{ color: "var(--page-text-muted)" }}
        >
          <span className="block">Assessoria. Campanhas. Propostas. Projectos. Equipa. Faturação. Rentabilidade.</span>
          <span className="block">Uma agência tem muitas partes. O Bernays é o sistema que as une:</span>
          <span className="block">em tempo real, por cliente, por projecto, por pessoa.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26, ease }}
          className="flex flex-col items-center gap-3 mb-5"
        >
          <motion.a
            href={`${APP_URL}/login?signup=1`}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="relative overflow-hidden flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-xl text-[15px]"
            style={{ boxShadow: "0 0 0 1px oklch(0.581 0.243 263 / 0.5), 0 0 32px oklch(0.581 0.243 263 / 0.25)" }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none -skew-x-[20deg]"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)", width: "50%" }}
              animate={{ x: ["-120%", "280%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1.8 }}
            />
            <span className="relative">Começar agora</span>
            <svg className="relative" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M8.5 3.5L13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38, ease }}
            className="text-[13px]"
            style={{ color: "var(--page-text-faint)" }}
          >
            Preferes uma conversa?{" "}
            <a href="/agenda" className="text-brand hover:underline font-medium">
              Marcar 15 min →
            </a>
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm flex items-center justify-center gap-2 flex-wrap"
          style={{ color: "var(--page-text-faint)" }}
        >
          <span>Sem registo</span>
          <span className="w-1 h-1 rounded-full bg-brand/40 inline-block" />
          <span>Sem cartão de crédito</span>
          <span className="w-1 h-1 rounded-full bg-brand/40 inline-block" />
          <span>Demo com dados reais de agência</span>
        </motion.p>
      </div>

      {/* Mobile screenshot — static */}
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

      {/* Browser mockup — desktop, cycling modules */}
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

            {/* Cycling screenshots */}
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Height anchor — keeps container sized while images are absolute */}
              <div aria-hidden="true" style={{ aspectRatio: "1440/900", maxHeight: "480px" }} />

              {heroSlides.map((s, i) => (
                <motion.div
                  key={s.id}
                  animate={{ opacity: i === current ? 1 : 0 }}
                  transition={{ duration: 0.55, ease }}
                  className="absolute inset-0"
                  style={{ pointerEvents: i === current ? "auto" : "none" }}
                >
                  <Image
                    src={s.light}
                    alt={s.alt}
                    width={1440}
                    height={900}
                    priority={i === 0}
                    className="w-full h-full object-cover object-top block dark:hidden"
                  />
                  <Image
                    src={s.dark}
                    alt={s.alt}
                    width={1440}
                    height={900}
                    priority={i === 0}
                    className="w-full h-full object-cover object-top hidden dark:block"
                  />
                </motion.div>
              ))}

              {/* Gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#0b0c16] to-transparent pointer-events-none z-10" />

              {/* Slide-aware notification toast */}
              <AnimatePresence>
                {notifVisible && (
                  <motion.div
                    key={slide.notif.text}
                    initial={{ y: -16, opacity: 0, scale: 0.96 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -16, opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease }}
                    className="absolute top-3 right-4 bg-white/95 dark:bg-[#13141e]/95 backdrop-blur-md border border-black/[0.07] dark:border-white/[0.1] rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-md dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] z-20"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${slide.notif.accent}18` }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5L4.5 9L10 3.5" stroke={slide.notif.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold leading-none mb-0.5" style={{ color: "var(--page-text)" }}>
                        {slide.notif.text}
                      </p>
                      <p className="text-[10px]" style={{ color: "var(--page-text-faint)" }}>
                        {slide.notif.sub}
                      </p>
                    </div>
                    <div className="ml-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: slide.notif.accent }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Module tab indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setCurrent(i); setPaused(false) }}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all duration-300"
                style={i === current ? {
                  background: `${s.color}18`,
                  color: s.color,
                  borderColor: `${s.color}50`,
                } : {
                  background: "transparent",
                  color: "var(--page-text-faint)",
                  borderColor: "var(--page-border)",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Under-glow */}
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
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 0%, oklch(0.581 0.243 263 / 0.35) 40%, oklch(0.581 0.243 263 / 0.35) 60%, transparent 100%)" }} />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ opacity: useTransform(scrollY, [0, 120], [1, 0]) }}
      >
        <span className="text-[11px] font-medium tracking-widest uppercase" style={{ color: "var(--page-text-faint)" }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--page-text-faint)" }}>
          <path d="M8 3V13M4 9L8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
