"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Sun, Moon, Menu, X,
  TrendingUp, CheckSquare, Receipt, Users, Building2, LayoutDashboard, Sparkles,
} from "lucide-react"
import { useTheme } from "@/lib/theme"
import { useState, useEffect, useRef } from "react"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

const navModules = [
  { slug: "crescimento", label: "Crescimento", tagline: "CRM, pipeline e propostas",           Icon: TrendingUp,    color: "#2257ff" },
  { slug: "delivery",    label: "Delivery",    tagline: "Projectos, tarefas e rentabilidade",  Icon: CheckSquare,   color: "#7c3aed" },
  { slug: "financeiro",  label: "Financeiro",  tagline: "Faturação certificada e P&L",         Icon: Receipt,       color: "#059669" },
  { slug: "pessoas",     label: "Pessoas",     tagline: "Recursos humanos e equipa",           Icon: Users,         color: "#f59e0b" },
  { slug: "escritorio",  label: "Escritório",  tagline: "Operações e fornecedores",            Icon: Building2,     color: "#06b6d4" },
  { slug: "workspace",   label: "Workspace",   tagline: "O cockpit de cada consultor",         Icon: LayoutDashboard, color: "#ec4899" },
  { slug: "plataforma",  label: "Plataforma",  tagline: "Tecnologia, segurança e acesso",      Icon: Sparkles,      color: "#6366f1" },
]

const links: { href: string; label: string; hasFlyout?: true }[] = [
  { href: "/funcionalidades", label: "Funcionalidades", hasFlyout: true },
  { href: "/#como-funciona",  label: "Como funciona" },
  { href: "/#precos",         label: "Preços" },
  { href: "/sobre",           label: "Sobre" },
]

export function Nav() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const { theme, toggle } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [flyoutOpen, setFlyoutOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const isHome = pathname === "/"
  const closeDelay = useRef<ReturnType<typeof setTimeout>>()

  function openFlyout() {
    clearTimeout(closeDelay.current)
    setFlyoutOpen(true)
  }
  function scheduleFlyoutClose() {
    closeDelay.current = setTimeout(() => setFlyoutOpen(false), 150)
  }

  useEffect(() => { setFlyoutOpen(false) }, [pathname])
  useEffect(() => () => clearTimeout(closeDelay.current), [])

  useEffect(() => {
    if (!flyoutOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setFlyoutOpen(false) }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [flyoutOpen])

  function resolveHref(raw: string): string {
    if (raw.startsWith("/#")) return isHome ? raw.slice(1) : raw
    return raw
  }

  function getIsActive(link: { href: string }): boolean {
    if (link.href.startsWith("/#")) return isHome && activeSection === link.href.slice(2)
    if (link.href === "/funcionalidades") return pathname === "/funcionalidades" || pathname.startsWith("/produto/")
    return pathname === link.href
  }

  useEffect(() => {
    if (!isHome) return
    const ids = links.filter((l) => l.href.startsWith("/#")).map((l) => l.href.slice(2))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [isHome])

  function close() {
    setMobileOpen(false)
    setFlyoutOpen(false)
  }

  useEffect(() => {
    if (!mobileOpen) return
    const onScroll = () => setMobileOpen(false)
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false) }
    const onOutside = (e: MouseEvent) => {
      const header = document.querySelector("header")
      if (header && !header.contains(e.target as Node)) setMobileOpen(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onOutside)
    return () => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onOutside)
    }
  }, [mobileOpen])

  function renderLinkInner(l: typeof links[0], isActive: boolean) {
    return (
      <>
        <span
          className={isActive
            ? "text-brand dark:text-brand-light font-medium"
            : "inline-block [color:var(--page-text-muted)] hover:text-brand dark:hover:text-brand-light transition-all duration-200 hover:-translate-y-px"
          }
        >
          {l.label}
        </span>
        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand rounded-full"
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Always-on blur — decoupled from background opacity */}
      <div className="absolute inset-0 backdrop-blur-xl" />
      {/* Scroll-animated background */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-white/90 dark:bg-[#07080e]/90 border-b border-black/[0.06] dark:border-white/[0.06]"
      />

      <div className="relative max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo.svg" alt="Bernays" width={26} height={26} className="rounded-[5px]" />
          <span className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--page-text)" }}>
            Bernays
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const isActive = getIsActive(l)
            const resolved = resolveHref(l.href)
            const cls = "relative text-sm transition-colors duration-200"

            if (l.hasFlyout) {
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={openFlyout}
                  onMouseLeave={scheduleFlyoutClose}
                  onFocusCapture={openFlyout}
                  onBlurCapture={scheduleFlyoutClose}
                >
                  <Link
                    href={l.href}
                    className={cls}
                    aria-haspopup="true"
                    aria-expanded={flyoutOpen}
                    onClick={() => setFlyoutOpen(false)}
                  >
                    {renderLinkInner(l, isActive)}
                  </Link>

                  <AnimatePresence>
                    {flyoutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease }}
                        className="absolute top-[calc(100%+20px)] left-0 z-[60] w-[440px] rounded-2xl border overflow-hidden"
                        style={{
                          background: "var(--page-bg)",
                          borderColor: "var(--page-border)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08)",
                        }}
                        onMouseEnter={openFlyout}
                        onMouseLeave={scheduleFlyoutClose}
                      >
                        <div className="p-3 grid grid-cols-2 gap-1">
                          {navModules.map((m, i) => {
                            const Icon = m.Icon
                            const isLast = i === navModules.length - 1
                            return (
                              <Link
                                key={m.slug}
                                href={`/produto/${m.slug}`}
                                onClick={() => setFlyoutOpen(false)}
                                className={`flex items-start gap-3 p-3 rounded-xl transition-colors duration-150 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]${isLast ? " col-span-2" : ""}`}
                              >
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                  style={{ background: `${m.color}18`, color: m.color }}
                                >
                                  <Icon size={15} strokeWidth={1.75} />
                                </div>
                                <div>
                                  <div
                                    className="text-[13px] font-semibold leading-snug mb-0.5"
                                    style={{ color: "var(--page-text)" }}
                                  >
                                    {m.label}
                                  </div>
                                  <div
                                    className="text-[11px] leading-snug"
                                    style={{ color: "var(--page-text-faint)" }}
                                  >
                                    {m.tagline}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>

                        <div
                          className="px-4 py-3 border-t"
                          style={{ borderColor: "var(--page-border)" }}
                        >
                          <Link
                            href="/funcionalidades"
                            onClick={() => setFlyoutOpen(false)}
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:underline"
                          >
                            Ver todas as funcionalidades
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            const inner = renderLinkInner(l, isActive)
            return resolved.includes("#") ? (
              <a key={l.href} href={resolved} className={cls}>{inner}</a>
            ) : (
              <Link key={l.href} href={resolved} className={cls}>{inner}</Link>
            )
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/[0.07] transition-all duration-200" style={{ color: "var(--page-text-faint)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="w-px h-4 mx-2" style={{ background: "var(--page-border)" }} />

          <a
            href={`${APP_URL}/login`}
            className="inline-block text-[13px] font-medium [color:var(--page-text-faint)] transition-all duration-200 hover:text-brand dark:hover:text-brand-light hover:-translate-y-px mr-2"
          >
            Entrar
          </a>

          <Link
            href="/agenda"
            className="inline-flex items-center text-[13px] font-medium px-3 py-1.5 rounded-xl border [color:var(--page-text-muted)] [border-color:var(--page-border)] transition-all duration-200 hover:text-brand dark:hover:text-brand-light hover:border-brand/40 hover:-translate-y-px"
          >
            Marcar demo
          </Link>

          <a
            href={`${APP_URL}/login?signup=1`}
            className="flex items-center gap-1.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 hover:shadow-[0_0_24px_oklch(0.581_0.243_263_/_0.45)] hover:-translate-y-px ml-1"
          >
            Começar
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Mobile right group */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/[0.07] transition-all duration-200" style={{ color: "var(--page-text-faint)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/[0.07] transition-all duration-200"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:hidden border-t px-6 py-4 flex flex-col gap-1 backdrop-blur-2xl"
            style={{ background: "color-mix(in oklch, var(--page-bg) 95%, transparent)", borderColor: "var(--page-border)" }}
          >
            {links.map((l) => {
              const resolved = resolveHref(l.href)
              const isActive = getIsActive(l)
              const cls = `py-2.5 text-[15px] font-medium transition-colors duration-150 ${
                isActive
                  ? "text-brand dark:text-brand-light"
                  : "[color:var(--page-text-muted)] hover:text-brand dark:hover:text-brand-light"
              }`
              return resolved.includes("#") ? (
                <a key={l.href} href={resolved} onClick={close} className={cls}>{l.label}</a>
              ) : (
                <Link key={l.href} href={resolved} onClick={close} className={cls}>{l.label}</Link>
              )
            })}

            {/* Mobile modules grid */}
            <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--page-border)" }}>
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--page-text-faint)" }}>
                Módulos
              </p>
              <div className="grid grid-cols-2 gap-0.5">
                {navModules.map((m) => {
                  const Icon = m.Icon
                  return (
                    <Link
                      key={m.slug}
                      href={`/produto/${m.slug}`}
                      onClick={close}
                      className="flex items-center gap-2.5 py-2 px-2.5 rounded-xl transition-colors duration-150 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
                    >
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                        style={{ background: `${m.color}18`, color: m.color }}
                      >
                        <Icon size={13} strokeWidth={1.75} />
                      </div>
                      <span className="text-[13px] font-medium" style={{ color: "var(--page-text)" }}>
                        {m.label}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 pt-3 border-t" style={{ borderColor: "var(--page-border)" }}>
              <a
                href={`${APP_URL}/login`}
                onClick={close}
                className="flex items-center justify-center text-[14px] font-medium py-2 transition-colors duration-150 [color:var(--page-text-faint)] hover:text-brand"
              >
                Já tens conta? Entrar →
              </a>
              <Link
                href="/agenda"
                onClick={close}
                className="flex items-center justify-center gap-2 border font-semibold py-3 rounded-xl text-[15px] transition-all duration-150 [color:var(--page-text-muted)] [border-color:var(--page-border)] hover:text-brand dark:hover:text-brand-light hover:border-brand/40 active:scale-[0.98]"
              >
                Marcar demo
              </Link>
              <a
                href={`${APP_URL}/login?signup=1`}
                onClick={close}
                className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold py-3 rounded-xl text-[15px] transition-colors duration-150"
              >
                Começar
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
