"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight, ChevronLeft,
  TrendingUp, FileCheck, Zap, CheckSquare, Clock, BarChart2,
  PieChart, RefreshCw, ShieldCheck, Users, Calendar, Star,
  CreditCard, FileText, Package, LayoutDashboard, Inbox,
  Globe, Shield,
  type LucideProps,
} from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { FloatingCta } from "@/components/floating-cta"
import { FadeIn } from "@/lib/animate"
import { modules } from "@/lib/features-data"
import { modulePages, type Capability } from "@/lib/module-pages-data"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

type LucideIcon = React.ComponentType<LucideProps>

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp, FileCheck, Zap, CheckSquare, Clock, BarChart2,
  PieChart, RefreshCw, ShieldCheck, Users, Calendar, Star,
  CreditCard, FileText, Package, LayoutDashboard, Inbox,
  Globe, Shield,
}

function FeatureCard({ title, desc, color, index, inView }: {
  title: string; desc: string; color: string; index: number; inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.35), ease }}
      className="flex items-start gap-3 p-4 rounded-xl border"
      style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: `${color}18` }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
      </div>
      <div>
        <p className="text-[13px] font-semibold leading-snug mb-1" style={{ color: "var(--page-text)" }}>
          {title}
        </p>
        <p className="text-[12px] leading-relaxed" style={{ color: "var(--page-text-faint)" }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

function FeatureGrid({ features, color }: { features: { title: string; desc: string }[]; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {features.map((f, i) => (
        <FeatureCard key={f.title} title={f.title} desc={f.desc} color={color} index={i} inView={isInView} />
      ))}
    </div>
  )
}

function PainCard({ quote, color }: { quote: string; color: string }) {
  return (
    <div
      className="p-5 rounded-xl"
      style={{
        background: "var(--page-surface)",
        borderLeft: `3px solid ${color}`,
        paddingLeft: "1.25rem",
      }}
    >
      <p className="text-[14px] italic leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
        "{quote}"
      </p>
    </div>
  )
}

function ImageLightbox({
  image,
  onClose,
}: {
  image: { light: string; dark: string; alt: string }
  onClose: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.22, ease }}
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ border: "1px solid rgba(255,255,255,0.10)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.light}
          alt={image.alt}
          width={1920}
          height={1200}
          className="w-full block dark:hidden"
        />
        <Image
          src={image.dark}
          alt={image.alt}
          width={1920}
          height={1200}
          className="w-full hidden dark:block"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors duration-150 hover:bg-white/20"
          style={{ background: "rgba(0,0,0,0.55)" }}
          aria-label="Fechar"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

function CapabilityPanel({
  cap,
  index,
  color,
}: {
  cap: Capability
  index: number
  color: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const Icon = ICON_MAP[cap.icon]
  const reversed = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease }}
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      {/* Text */}
      <div className={reversed ? "md:col-start-2 md:row-start-1" : ""}>
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-[11px] font-bold tracking-[0.15em] tabular-nums"
            style={{ color: `${color}70` }}
          >
            0{index + 1}
          </span>
          <div className="h-px flex-1" style={{ background: "var(--page-border)" }} />
        </div>
        <h3
          className="text-[clamp(20px,2.5vw,26px)] font-extrabold tracking-[-0.03em] leading-snug mb-4"
          style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
        >
          {cap.title}
        </h3>
        <p className="text-[15px] leading-[1.75] mb-5" style={{ color: "var(--page-text-muted)" }}>
          {cap.desc}
        </p>
        <ul className="space-y-2.5">
          {cap.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${color}18` }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              </div>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div className={reversed ? "md:col-start-1 md:row-start-1" : ""}>
        {cap.image ? (
          <>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08, ease }}
              className="w-full rounded-2xl overflow-hidden border cursor-zoom-in group relative text-left block"
              style={{
                borderColor: "rgba(0,0,0,0.08)",
                boxShadow: "0 2px 0 rgba(0,0,0,0.04), 0 24px 64px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.07)",
              }}
              onClick={() => setLightboxOpen(true)}
              aria-label={`Ver imagem completa: ${cap.image.alt}`}
            >
              <Image
                src={cap.image.light}
                alt={cap.image.alt}
                width={960}
                height={600}
                loading="lazy"
                className="w-full block dark:hidden"
              />
              <Image
                src={cap.image.dark}
                alt={cap.image.alt}
                width={960}
                height={600}
                loading="lazy"
                className="w-full hidden dark:block"
              />
              {/* Expand hint on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.04] transition-colors duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold" style={{ background: "rgba(0,0,0,0.65)", color: "#fff" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2H5M2 2V5M2 2L5.5 5.5M10 7V10M10 10H7M10 10L6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Ver completo
                </div>
              </div>
            </motion.button>
            <AnimatePresence>
              {lightboxOpen && (
                <ImageLightbox image={cap.image} onClose={() => setLightboxOpen(false)} />
              )}
            </AnimatePresence>
          </>
        ) : (
          <div
            className="rounded-2xl border p-10 flex flex-col justify-start gap-5 min-h-[240px]"
            style={{ background: `${color}06`, borderColor: `${color}18` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${color}15`, color }}
            >
              {Icon && <Icon size={22} strokeWidth={1.5} />}
            </div>
            <div>
              <p
                className="text-[18px] font-extrabold leading-snug mb-2"
                style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
              >
                {cap.title}
              </p>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                {cap.bullets[0]}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function ModulePageContent({ slug }: { slug: string }) {
  const mod = modules.find((m) => m.id === slug)
  const data = modulePages.find((d) => d.id === slug)

  if (!mod || !data) return null

  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Nav />
      <FloatingCta />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/funcionalidades"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-150 hover:text-brand"
            style={{ color: "var(--page-text-faint)" }}
          >
            <ChevronLeft size={14} />
            Todas as funcionalidades
          </Link>
        </div>

        {/* Hero */}
        <div
          className="relative mb-12 pb-10 border-b overflow-hidden"
          style={{ borderColor: "var(--page-border)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 70% 100% at 50% 100%, ${mod.color}14 0%, transparent 70%)` }}
          />
          <div className="relative z-10 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: mod.color }}
            >
              {mod.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
              className="text-[clamp(28px,4.5vw,50px)] font-extrabold tracking-[-0.04em] leading-[1.08] mb-5"
              style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
            >
              {data.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease }}
              className="text-[16px] leading-[1.75] mb-7"
              style={{ color: "var(--page-text-muted)" }}
            >
              {data.lead}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18, ease }}
              className="flex flex-wrap gap-2"
            >
              {[
                { value: `${mod.features.length}`, label: "funcionalidades" },
                { value: "∞", label: "utilizadores" },
                { value: "0", label: "add-ons" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold border"
                  style={{ background: `${mod.color}08`, borderColor: `${mod.color}20`, color: mod.color }}
                >
                  <span className="font-bold">{s.value}</span>
                  <span style={{ color: `${mod.color}80` }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pain section */}
        <FadeIn className="mb-14">
          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-5"
            style={{ color: "var(--page-text-faint)" }}
          >
            O problema que o {mod.label} resolve
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.painPoints.map((p, i) => (
              <PainCard key={i} quote={p.quote} color={mod.color} />
            ))}
          </div>
        </FadeIn>

        {/* Screenshot hero */}
        {data.screenshot && (
          <FadeIn className="mb-20">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: "rgba(0,0,0,0.08)",
                boxShadow: "0 2px 0 rgba(0,0,0,0.04), 0 32px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              {/* Browser chrome */}
              <div
                className="px-4 py-2.5 flex items-center gap-3 border-b"
                style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div
                  className="flex-1 max-w-[220px] mx-auto rounded-md px-3 py-0.5 text-[11px] text-center"
                  style={{ background: "var(--page-card)", color: "var(--page-text-faint)" }}
                >
                  app.bernays.pt
                </div>
              </div>
              <Image
                src={data.screenshot.light}
                alt={data.screenshot.alt}
                width={1440}
                height={900}
                className="w-full block dark:hidden"
                priority
              />
              <Image
                src={data.screenshot.dark}
                alt={data.screenshot.alt}
                width={1440}
                height={900}
                className="w-full hidden dark:block"
                priority
              />
            </div>
          </FadeIn>
        )}

        {/* Capabilities */}
        <div className="mb-20">
          <FadeIn>
            <p
              className="text-[11px] font-bold tracking-widest uppercase mb-12"
              style={{ color: "var(--page-text-faint)" }}
            >
              O que muda com o {mod.label}
            </p>
          </FadeIn>
          <div className="space-y-16 md:space-y-24">
            {data.capabilities.map((cap, i) => (
              <CapabilityPanel key={cap.title} cap={cap} index={i} color={mod.color} />
            ))}
          </div>
        </div>

        {/* Grouped feature list */}
        <div className="mb-16">
          <FadeIn>
            <p
              className="text-[11px] font-bold tracking-widest uppercase mb-10"
              style={{ color: "var(--page-text-faint)" }}
            >
              Tudo o que inclui
            </p>
          </FadeIn>
          <div className="space-y-10">
            {data.featureGroups.map((group) => {
              const features = group.featureTitles
                .map((title) => mod.features.find((f) => f.title === title))
                .filter((f): f is { title: string; desc: string } => f !== undefined)

              if (features.length === 0) return null

              return (
                <div key={group.label}>
                  <FadeIn>
                    <div className="flex items-center gap-2.5 mb-4">
                      <p
                        className="text-[11px] font-bold tracking-widest uppercase"
                        style={{ color: "var(--page-text-faint)" }}
                      >
                        {group.label}
                      </p>
                      <span
                        className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: `${mod.color}12`, color: mod.color }}
                      >
                        {features.length}
                      </span>
                    </div>
                  </FadeIn>
                  <FeatureGrid features={features} color={mod.color} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Integration context */}
        {data.relatesTo.length > 0 && (
          <div className="mb-16">
            <FadeIn>
              <p
                className="text-[11px] font-bold tracking-widest uppercase mb-6"
                style={{ color: "var(--page-text-faint)" }}
              >
                Integra com
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.relatesTo.map(({ id, integrationNote }) => {
                  const relMod = modules.find((m) => m.id === id)
                  if (!relMod) return null
                  return (
                    <Link
                      key={id}
                      href={`/produto/${id}`}
                      className="block p-4 rounded-xl border transition-all duration-150 hover:opacity-80"
                      style={{
                        background: `${relMod.color}06`,
                        borderColor: `${relMod.color}20`,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="[&>svg]:w-3.5 [&>svg]:h-3.5 flex items-center"
                          style={{ color: relMod.color }}
                        >
                          {relMod.icon}
                        </span>
                        <span
                          className="text-[13px] font-bold"
                          style={{ color: relMod.color }}
                        >
                          {relMod.label}
                        </span>
                        <ArrowRight size={12} style={{ color: relMod.color, marginLeft: "auto" }} />
                      </div>
                      <p className="text-[12px] leading-relaxed" style={{ color: "var(--page-text-faint)" }}>
                        {integrationNote}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </FadeIn>
          </div>
        )}

        {/* CTA strip */}
        <FadeIn>
          <div
            className="rounded-2xl border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}
          >
            <div>
              <p className="text-[16px] font-bold mb-1" style={{ color: "var(--page-text)" }}>
                Vê tudo isto a funcionar — em 5 minutos.
              </p>
              <p className="text-[13px]" style={{ color: "var(--page-text-faint)" }}>
                Demo interactiva com dados reais de uma agência. Sem registo.
              </p>
            </div>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-5 py-2.5 rounded-xl text-[14px] transition-colors duration-150 shrink-0"
            >
              Ver demo
              <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </main>
  )
}
