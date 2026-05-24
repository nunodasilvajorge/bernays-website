"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "@/lib/theme"
import { useState, useEffect } from "react"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

const links = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#precos", label: "Preços" },
  { href: "/sobre", label: "Sobre" },
]

export function Nav() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const { theme, toggle } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const isHome = pathname === "/"

  // On sub-pages, anchor links must include the path prefix; page routes are returned as-is
  function href(anchor: string) {
    if (!anchor.startsWith("#")) return anchor
    return isHome ? anchor : `/${anchor}`
  }

  useEffect(() => {
    if (!isHome) return
    const ids = links.filter((l) => l.href.startsWith("#")).map((l) => l.href.replace("#", ""))
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

  function close() { setMobileOpen(false) }

  // Close on scroll, outside click, and Escape
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-white/85 dark:bg-[#07080e]/85 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.06]"
      />

      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Bernays" width={26} height={26} className="rounded-[5px]" />
          <span className="text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
            Bernays
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = l.href.startsWith("#")
              ? isHome && activeSection === l.href.replace("#", "")
              : pathname === l.href
            const inner = (
              <>
                <span className={isActive
                  ? "text-brand dark:text-brand-light font-medium"
                  : "text-slate-500 hover:text-slate-800 dark:text-white/50 dark:hover:text-white/80"
                }>
                  {l.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-brand rounded-full"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </>
            )
            const sharedClass = "relative text-sm transition-colors duration-200"
            return l.href.startsWith("#") ? (
              <a key={l.href} href={href(l.href)} className={sharedClass} data-active={isActive}>
                {inner}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className={sharedClass} data-active={isActive}>
                {inner}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 dark:text-white/40 dark:hover:text-white/70 hover:bg-black/5 dark:hover:bg-white/[0.07] transition-all duration-200"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/[0.07] transition-all duration-200"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150 hover:shadow-[0_0_24px_oklch(0.581_0.243_263_/_0.45)] hover:-translate-y-px"
          >
            Ver demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
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
            className="relative md:hidden border-t px-6 py-4 flex flex-col gap-1 bg-white/95 dark:bg-[#07080e]/95 backdrop-blur-2xl"
            style={{ borderColor: "var(--page-border)" }}
          >
            {links.map((l) =>
              l.href.startsWith("#") ? (
                <a
                  key={l.href}
                  href={href(l.href)}
                  onClick={close}
                  className="py-2.5 text-[15px] font-medium text-slate-700 dark:text-white/70 hover:text-brand dark:hover:text-brand-light transition-colors duration-150"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="py-2.5 text-[15px] font-medium text-slate-700 dark:text-white/70 hover:text-brand dark:hover:text-brand-light transition-colors duration-150"
                >
                  {l.label}
                </Link>
              )
            )}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-2 flex items-center justify-center gap-2 bg-brand text-white font-semibold py-3 rounded-xl text-[15px] transition-colors duration-150"
            >
              Ver demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
