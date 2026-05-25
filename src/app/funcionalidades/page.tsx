"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { FloatingCta } from "@/components/floating-cta"
import { modules, type Module } from "@/lib/features-data"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Academia } from "@/components/academia"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

function FeatureCard({ title, desc, color, index, inView }: {
  title: string; desc: string; color: string; index: number; inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.4), ease }}
      className="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-150 group"
      style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}
    >
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: `${color}18` }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
      </div>
      <div>
        <p
          className="text-[13px] font-semibold leading-snug mb-1"
          style={{ color: "var(--page-text)" }}
        >
          {title}
        </p>
        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--page-text-muted)" }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

function ModuleSection({ mod, index }: { mod: Module; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.section
      ref={ref}
      id={mod.id}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04, ease }}
      className="py-10 border-b last:border-b-0"
      style={{ borderColor: "var(--page-border)" }}
    >
      {/* Module header */}
      <div className="mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: `${mod.color}18`, color: mod.color }}
          >
            <span className="[&>svg]:w-5 [&>svg]:h-5">{mod.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-0.5">
              <h2
                className="text-[18px] font-bold"
                style={{ color: "var(--page-text)" }}
              >
                {mod.label}
              </h2>
              <span
                className="text-[11px] font-bold tracking-wide px-2.5 py-0.5 rounded-full uppercase"
                style={{ background: `${mod.color}12`, color: mod.color }}
              >
                {mod.features.length} funcionalidades
              </span>
            </div>
            <p className="text-[12px] font-semibold uppercase tracking-widest" style={{ color: `${mod.color}99` }}>
              {mod.tagline}
            </p>
          </div>
        </div>
        <p
          className="text-[14px] leading-relaxed max-w-2xl"
          style={{ color: "var(--page-text-muted)" }}
        >
          {mod.description}
        </p>
        <Link
          href={`/produto/${mod.id}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold mt-3 transition-colors duration-150 hover:brightness-[0.75]"
          style={{ color: mod.color }}
        >
          Ver em detalhe
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {mod.features.map((f, i) => (
          <FeatureCard
            key={f.title}
            title={f.title}
            desc={f.desc}
            color={mod.color}
            index={i}
            inView={isInView}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default function FuncionalidadesPage() {
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const totalFeatures = modules.reduce((sum, m) => sum + m.features.length, 0)

  const filtered = activeModule
    ? modules.filter((m) => m.id === activeModule)
    : modules

  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Nav />
      <FloatingCta />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div
          className="relative mb-12 pb-10 border-b overflow-hidden"
          style={{ borderColor: "var(--page-border)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 100% at 50% 100%, oklch(0.581 0.243 263 / 0.07) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="text-sm font-semibold text-brand tracking-widest uppercase mb-3"
            >
              O que está incluído
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
              className="text-[clamp(30px,5vw,52px)] font-extrabold tracking-[-0.035em] leading-tight mb-4"
              style={{ color: "var(--page-text)" }}
            >
              Tudo o que o Bernays inclui.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease }}
              className="text-[17px] leading-relaxed max-w-xl mb-6"
              style={{ color: "var(--page-text-muted)" }}
            >
              Sem limites. Sem tiers. Sem add-ons. {totalFeatures}+ funcionalidades incluídas em qualquer plano.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease }}
              className="flex flex-wrap gap-6"
            >
              {[
                { value: `${totalFeatures}+`, label: "funcionalidades" },
                { value: `${modules.length}`, label: "módulos" },
                { value: "∞", label: "utilizadores incluídos" },
                { value: "0", label: "add-ons a pagar" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[22px] font-extrabold tracking-tight leading-none"
                    style={{ color: "var(--page-text)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-[12px] mt-0.5"
                    style={{ color: "var(--page-text-faint)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Module filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26, ease }}
          className="flex flex-wrap gap-2 mb-2"
        >
          <button
            onClick={() => setActiveModule(null)}
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all duration-150"
            style={
              activeModule === null
                ? {
                    background: "var(--page-text)",
                    color: "var(--page-bg)",
                    borderColor: "var(--page-text)",
                  }
                : {
                    background: "transparent",
                    color: "var(--page-text-muted)",
                    borderColor: "var(--page-border)",
                  }
            }
          >
            Todos
          </button>
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() =>
                setActiveModule(activeModule === mod.id ? null : mod.id)
              }
              className="px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all duration-150"
              style={
                activeModule === mod.id
                  ? { background: mod.color, color: "#fff", borderColor: mod.color }
                  : {
                      background: "transparent",
                      color: "var(--page-text-muted)",
                      borderColor: "var(--page-border)",
                    }
              }
            >
              {mod.label}
            </button>
          ))}
        </motion.div>

        {/* Module sections */}
        <div>
          {filtered.map((mod, i) => (
            <ModuleSection key={mod.id} mod={mod} index={i} />
          ))}
        </div>

        {/* Academia program */}
        <div className="-mx-6 mt-4">
          <Academia />
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease }}
          className="mt-12 rounded-2xl border p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, oklch(0.581 0.243 263 / 0.07) 0%, oklch(0.581 0.243 263 / 0.03) 100%)",
            borderColor: "oklch(0.581 0.243 263 / 0.15)",
          }}
        >
          <div>
            <p
              className="text-[16px] font-bold mb-1"
              style={{ color: "var(--page-text)" }}
            >
              Vê tudo isto a funcionar — em 5 minutos.
            </p>
            <p
              className="text-[13px]"
              style={{ color: "var(--page-text-faint)" }}
            >
              Demo interactiva com dados reais de uma agência. Sem registo.
            </p>
          </div>
          <a
            href={DEMO_URL}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3 rounded-xl text-[15px] transition-colors duration-150 shrink-0"
          >
            Ver na prática
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
