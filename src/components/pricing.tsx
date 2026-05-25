"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { FadeIn } from "@/lib/animate"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

const MIN_USERS = 3
const MAX_USERS = 20
const BASE_MONTHLY = 58
const PER_USER_MONTHLY = 24
const BASE_ANNUAL = 580
const PER_USER_ANNUAL = 240
const BASE_INCLUDED_USERS = 2

function calcTeam(users: number, annual: boolean) {
  const additional = Math.max(0, users - BASE_INCLUDED_USERS)
  if (annual) {
    const total = BASE_ANNUAL + additional * PER_USER_ANNUAL
    return { total, perMonth: Math.round(total / 12) }
  }
  return { total: BASE_MONTHLY + additional * PER_USER_MONTHLY, perMonth: BASE_MONTHLY + additional * PER_USER_MONTHLY }
}

const included = [
  "Faturação certificada AT via InvoiceXpress (ATCUD incluído)",
  "CRM completo: pipeline, propostas e aceitação digital",
  "Delivery: projetos, tarefas e timesheets integrados",
  "Faturação recorrente e gestão de cobranças",
  "P&L por cliente e cashflow em tempo real",
  "RH: férias, performance e recrutamento",
  "Gestão de escritório, fornecedores e activos",
  "Portal de cliente com aprovações e pagamento online",
  "Workspace pessoal com inbox de alertas",
  "Exportação SAF-T certificada para contabilista",
  "Autenticação 2FA em todos os planos",
  "Notificações em tempo real",
  "Suporte por email incluído",
  "Sem limites funcionais: todos os módulos em todos os planos",
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [teamUsers, setTeamUsers] = useState(5)
  const refSolo = useRef<HTMLDivElement>(null)
  const refAgency = useRef<HTMLDivElement>(null)
  const [spotSolo, setSpotSolo] = useState<{ x: number; y: number } | null>(null)
  const [spotAgency, setSpotAgency] = useState<{ x: number; y: number } | null>(null)

  const sliderPct = ((teamUsers - MIN_USERS) / (MAX_USERS - MIN_USERS)) * 100
  const team = calcTeam(teamUsers, annual)

  return (
    <section id="precos" className="py-16 md:py-36 px-6" style={{ background: "var(--page-surface)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">Preços</p>
          <h2
            className="text-[clamp(38px,5.5vw,66px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simples. Sem surpresas.
          </h2>
          <p className="text-[17px] text-slate-500 dark:text-white/45 max-w-lg mx-auto leading-relaxed mb-8">
            Todos os planos incluem todos os módulos. O que muda é a escala, não o produto.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 rounded-full p-1 border" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${!annual ? "bg-brand text-white shadow-sm" : "text-slate-500 dark:text-white/40"}`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 flex items-center gap-2 ${annual ? "bg-brand text-white shadow-sm" : "text-slate-500 dark:text-white/40"}`}
            >
              Anual
              <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold transition-all ${annual ? "bg-white/20 text-white" : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"}`}>
                −17%
              </span>
            </button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {/* Solo */}
          <motion.div
            ref={refSolo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl p-6 border flex flex-col cursor-default"
            style={{ background: "var(--page-card)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            onMouseMove={(e) => {
              const rect = refSolo.current?.getBoundingClientRect()
              if (!rect) return
              setSpotSolo({ x: e.clientX - rect.left, y: e.clientY - rect.top })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2257ff55"
              e.currentTarget.style.boxShadow = "0 0 32px #2257ff18, 0 8px 32px rgba(0,0,0,0.08)"
            }}
            onMouseLeave={(e) => {
              setSpotSolo(null)
              e.currentTarget.style.borderColor = "var(--page-border)"
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"
            }}
          >
            {spotSolo && (
              <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(280px circle at ${spotSolo.x}px ${spotSolo.y}px, #2257ff14 0%, transparent 70%)` }} />
            )}
            <div className="relative z-[1] flex flex-col flex-1">
            <div className="mb-5">
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1">Solo / Studio</h3>
              <p className="text-[13px] text-slate-500 dark:text-white/45 leading-snug">
                Para o gestor e sócio que precisam de controlo total.
              </p>
            </div>
            <div className="mb-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={annual ? "solo-annual" : "solo-monthly"}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="text-[42px] font-extrabold text-slate-900 dark:text-white tracking-tight inline-block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {annual ? "€580" : "€58"}
                </motion.span>
              </AnimatePresence>
              <span className="text-[14px] text-slate-400 dark:text-white/35 ml-1">/{annual ? "ano" : "mês"}</span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-white/30 mb-5">
              {annual ? "equivale a €48,33/mês" : "€580/ano, 2 meses grátis"}
            </p>
            <div className="space-y-2.5 mb-6 flex-1">
              <div className="flex items-center gap-2 text-[13px] text-slate-600 dark:text-white/55">
                <Check size={14} className="text-brand shrink-0" />
                2 utilizadores incluídos
              </div>
              <div className="flex items-center gap-2 text-[13px] text-slate-600 dark:text-white/55">
                <Check size={14} className="text-brand shrink-0" />
                5 GB de documentos
              </div>
            </div>
            <a
              href={`${APP_URL}/login?signup=1`}
              className="w-full text-center py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-150 border text-slate-700 dark:text-white/70 hover:text-brand dark:hover:text-brand-light hover:border-brand/40"
              style={{ borderColor: "var(--page-border)" }}
            >
              Começar
            </a>
            <a
              href={DEMO_URL}
              className="w-full text-center py-1.5 text-[12px] font-medium transition-all duration-150 hover:text-brand"
              style={{ color: "var(--page-text-faint)" }}
            >
              Ver demo primeiro →
            </a>
            </div>
          </motion.div>

          {/* Team — highlighted with calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-6 border flex flex-col"
            style={{ background: "var(--page-card)", borderColor: "oklch(0.581 0.243 263 / 0.5)" }}
          >
            {/* Animated glow ring */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{ boxShadow: ["0 0 0px oklch(0.581 0.243 263 / 0)", "0 0 32px oklch(0.581 0.243 263 / 0.2)", "0 0 0px oklch(0.581 0.243 263 / 0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-brand text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                Mais popular
              </span>
            </div>

            <div className="mb-5">
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1">Team</h3>
              <p className="text-[13px] text-slate-500 dark:text-white/45 leading-snug">
                Para agências com equipa activa.
              </p>
            </div>

            {/* Dynamic price */}
            <div className="mb-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${team.perMonth}-${annual}`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="text-[42px] font-extrabold text-slate-900 dark:text-white tracking-tight inline-block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  €{annual ? team.total : team.perMonth}
                </motion.span>
              </AnimatePresence>
              <span className="text-[14px] text-slate-400 dark:text-white/35 ml-1">/{annual ? "ano" : "mês"}</span>
              {annual && (
                <p className="text-[11px] text-slate-400 dark:text-white/30 mt-0.5">
                  equivale a €{team.perMonth}/mês
                </p>
              )}
            </div>

            {/* Slider */}
            <div className="mb-5 mt-3">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="team-slider" className="text-[12px] font-medium text-slate-500 dark:text-white/45">Utilizadores</label>
                <span className="text-[13px] font-bold text-brand">{teamUsers}</span>
              </div>
              <input
                id="team-slider"
                type="range"
                min={MIN_USERS}
                max={MAX_USERS}
                value={teamUsers}
                onChange={(e) => setTeamUsers(Number(e.target.value))}
                className="bernays-slider"
                style={{
                  background: `linear-gradient(to right, oklch(0.581 0.243 263) 0%, oklch(0.581 0.243 263) ${sliderPct}%, var(--page-border) ${sliderPct}%, var(--page-border) 100%)`,
                }}
              />
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-slate-400 dark:text-white/25">{MIN_USERS}</span>
                <span className="text-[10px] text-slate-400 dark:text-white/25">{MAX_USERS}</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="rounded-xl p-3 mb-5 border" style={{ background: "oklch(0.581 0.243 263 / 0.06)", borderColor: "oklch(0.581 0.243 263 / 0.2)" }}>
              <div className="flex justify-between text-[12px] mb-1">
                <span className="text-slate-500 dark:text-white/45">Base (2 users)</span>
                <span className="font-medium text-slate-700 dark:text-white/70">
                  {annual ? "€580/ano" : "€58/mês"}
                </span>
              </div>
              {teamUsers > BASE_INCLUDED_USERS && (
                <div className="flex justify-between text-[12px] mb-1">
                  <span className="text-slate-500 dark:text-white/45">
                    +{teamUsers - BASE_INCLUDED_USERS} users × {annual ? "€240/ano" : "€24/mês"}
                  </span>
                  <span className="font-medium text-slate-700 dark:text-white/70">
                    {annual
                      ? `€${(teamUsers - BASE_INCLUDED_USERS) * PER_USER_ANNUAL}/ano`
                      : `€${(teamUsers - BASE_INCLUDED_USERS) * PER_USER_MONTHLY}/mês`}
                  </span>
                </div>
              )}
              <div className="border-t pt-1 mt-1 flex justify-between text-[13px]" style={{ borderColor: "oklch(0.581 0.243 263 / 0.15)" }}>
                <span className="font-semibold text-brand dark:text-brand-light">Total</span>
                <span className="font-bold text-brand dark:text-brand-light">
                  {annual ? `€${team.total}/ano` : `€${team.perMonth}/mês`}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-6 flex-1">
              <div className="flex items-center gap-2 text-[13px] text-slate-600 dark:text-white/55">
                <Check size={14} className="text-brand shrink-0" />
                Mínimo 3 utilizadores
              </div>
              <div className="flex items-center gap-2 text-[13px] text-slate-600 dark:text-white/55">
                <Check size={14} className="text-brand shrink-0" />
                20 GB de documentos
              </div>
            </div>

            <a
              href={`${APP_URL}/login?signup=1`}
              className="w-full text-center py-2.5 rounded-xl text-[14px] font-semibold bg-brand hover:bg-brand-hover text-white transition-all duration-150 hover:shadow-[0_0_20px_oklch(0.581_0.243_263_/_0.4)]"
            >
              Começar
            </a>
            <a
              href={DEMO_URL}
              className="w-full text-center py-1.5 text-[12px] font-medium transition-all duration-150 hover:text-brand"
              style={{ color: "var(--page-text-faint)" }}
            >
              Ver demo primeiro →
            </a>
          </motion.div>

          {/* Agency */}
          <motion.div
            ref={refAgency}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl p-6 border flex flex-col cursor-default"
            style={{ background: "var(--page-card)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            onMouseMove={(e) => {
              const rect = refAgency.current?.getBoundingClientRect()
              if (!rect) return
              setSpotAgency({ x: e.clientX - rect.left, y: e.clientY - rect.top })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#2257ff55"
              e.currentTarget.style.boxShadow = "0 0 32px #2257ff18, 0 8px 32px rgba(0,0,0,0.08)"
            }}
            onMouseLeave={(e) => {
              setSpotAgency(null)
              e.currentTarget.style.borderColor = "var(--page-border)"
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"
            }}
          >
            {spotAgency && (
              <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(280px circle at ${spotAgency.x}px ${spotAgency.y}px, #2257ff14 0%, transparent 70%)` }} />
            )}
            <div className="relative z-[1] flex flex-col flex-1">
            <div className="mb-5">
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-1">Agency</h3>
              <p className="text-[13px] text-slate-500 dark:text-white/45 leading-snug">
                Para operações complexas com freelancers e portais de cliente.
              </p>
            </div>
            <div className="mb-1">
              <span className="text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Team +
              </span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-white/30 mb-5">
              €15/freelancer/mês · €15/portal de cliente/mês
            </p>
            <div className="space-y-2.5 mb-6 flex-1">
              {[
                "50 GB de documentos",
                "Freelancers nos projectos certos",
                "Portal de cliente para acompanhar o trabalho",
                "Desconto de 17% na subscrição anual",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-[13px] text-slate-600 dark:text-white/55">
                  <Check size={14} className="text-brand shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href={`${APP_URL}/login?signup=1`}
              className="w-full text-center py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-150 border text-slate-700 dark:text-white/70 hover:text-brand dark:hover:text-brand-light hover:border-brand/40"
              style={{ borderColor: "var(--page-border)" }}
            >
              Começar
            </a>
            <a
              href={DEMO_URL}
              className="w-full text-center py-1.5 text-[12px] font-medium transition-all duration-150 hover:text-brand"
              style={{ color: "var(--page-text-faint)" }}
            >
              Ver demo primeiro →
            </a>
            </div>
          </motion.div>
        </div>

        {/* What's included */}
        <FadeIn>
          <div className="rounded-2xl border p-6 md:p-8" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
            <h3 className="text-[15px] font-bold text-slate-800 dark:text-white/90 mb-5">
              O que está incluído em todos os planos
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-brand shrink-0 mt-0.5" />
                  <span className="text-[13px] text-slate-600 dark:text-white/55">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 pt-4 border-t text-[12px] text-slate-400 dark:text-white/30 leading-relaxed" style={{ borderColor: "var(--page-border)" }}>
              Storage incluído por plano. Espaço adicional disponível a €0,15/GB.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
