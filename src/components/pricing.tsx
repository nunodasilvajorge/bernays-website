"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { FadeIn } from "@/lib/animate"
import { useSpotlight } from "@/lib/spotlight"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

const MIN_USERS = 3
const MAX_USERS = 20
const BASE_MONTHLY = 58
const PER_USER_MONTHLY = 24
const BASE_ANNUAL = 580
const PER_USER_ANNUAL = 240
const BASE_INCLUDED_USERS = 2
const MIN_AGENCY_USERS = 5
const MAX_ACCESSES = 10
const PER_ACCESS_MONTHLY = 12
const PER_ACCESS_ANNUAL = 120

function calcTeam(users: number, annual: boolean) {
  const additional = Math.max(0, users - BASE_INCLUDED_USERS)
  if (annual) {
    const total = BASE_ANNUAL + additional * PER_USER_ANNUAL
    return { total, perMonth: Math.round(total / 12) }
  }
  return { total: BASE_MONTHLY + additional * PER_USER_MONTHLY, perMonth: BASE_MONTHLY + additional * PER_USER_MONTHLY }
}

function calcAgency(users: number, accesses: number, annual: boolean) {
  const additional = Math.max(0, users - BASE_INCLUDED_USERS)
  if (annual) {
    const total = BASE_ANNUAL + additional * PER_USER_ANNUAL + accesses * PER_ACCESS_ANNUAL
    return { total, perMonth: Math.round(total / 12) }
  }
  const total = BASE_MONTHLY + additional * PER_USER_MONTHLY + accesses * PER_ACCESS_MONTHLY
  return { total, perMonth: total }
}

const included = [
  "Faturação certificada AT via InvoiceXpress (ATCUD incluído)",
  "CRM completo: pipeline, propostas e aceitação digital",
  "Delivery: projetos, tarefas e timesheets integrados",
  "Faturação recorrente e gestão de cobranças",
  "P&L por cliente e cashflow em tempo real",
  "RH: férias, performance e recrutamento",
  "Gestão de escritório, fornecedores e activos",
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
  const [agencyUsers, setAgencyUsers] = useState(8)
  const [agencyAccesses, setAgencyAccesses] = useState(5)
  const solo = useSpotlight("#2257ff")

  const sliderPct = ((teamUsers - MIN_USERS) / (MAX_USERS - MIN_USERS)) * 100
  const team = calcTeam(teamUsers, annual)
  const agencyUsersPct = ((agencyUsers - MIN_AGENCY_USERS) / (MAX_USERS - MIN_AGENCY_USERS)) * 100
  const agencyAccessesPct = ((agencyAccesses - 1) / (MAX_ACCESSES - 1)) * 100
  const agencyCalc = calcAgency(agencyUsers, agencyAccesses, annual)

  return (
    <section id="precos" className="py-16 md:py-36 px-6" style={{ background: "var(--page-surface)" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="mb-14">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">Preços</p>
          <h2
            className="text-[clamp(38px,5.5vw,66px)] font-extrabold tracking-[-0.035em] leading-[1.05] mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
          >
            Simples. Sem surpresas.
          </h2>
          <p className="text-[17px] max-w-xl leading-relaxed mb-8" style={{ color: "var(--page-text-muted)" }}>
            Todos os planos incluem todos os módulos. O que muda é a escala, não o produto.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 rounded-full p-1 border" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${!annual ? "bg-brand text-white shadow-sm" : ""}`}
              style={!annual ? {} : { color: "var(--page-text-faint)" }}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 flex items-center gap-2 ${annual ? "bg-brand text-white shadow-sm" : ""}`}
              style={annual ? {} : { color: "var(--page-text-faint)" }}
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
            ref={solo.ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl p-6 border flex flex-col cursor-default"
            style={{ background: "var(--page-card)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            onMouseMove={solo.onMouseMove}
            onMouseEnter={solo.onMouseEnter}
            onMouseLeave={solo.onMouseLeave}
          >
            {solo.spotOverlay}
            <div className="relative z-[1] flex flex-col flex-1">
              <div className="mb-5">
                <h3 className="text-[17px] font-bold mb-1" style={{ color: "var(--page-text)" }}>Solo / Studio</h3>
                <p className="text-[13px] leading-snug" style={{ color: "var(--page-text-muted)" }}>
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
                    className="text-[42px] font-extrabold tracking-tight inline-block"
                    style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
                  >
                    {annual ? "€580" : "€58"}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[14px] ml-1" style={{ color: "var(--page-text-faint)" }}>/{annual ? "ano" : "mês"}</span>
              </div>
              <p className="text-[11px] mb-5" style={{ color: "var(--page-text-faint)" }}>
                {annual ? "equivale a €48,33/mês" : "€580/ano, 2 meses grátis"}
              </p>
              <div className="space-y-2.5 mb-6 flex-1">
                <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
                  <Check size={14} className="text-brand shrink-0" />
                  2 utilizadores incluídos
                </div>
                <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
                  <Check size={14} className="text-brand shrink-0" />
                  5 GB de documentos
                </div>
              </div>
              <a
                href={`${APP_URL}/login?signup=1`}
                className="w-full block text-center py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-150 border [color:var(--page-text-muted)] [border-color:var(--page-border)] hover:text-brand dark:hover:text-brand-light hover:border-brand/40"
              >
                Começar
              </a>
            </div>
          </motion.div>

          {/* Team — featured */}
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
                <h3 className="text-[17px] font-bold mb-1" style={{ color: "var(--page-text)" }}>Team</h3>
                <p className="text-[13px] leading-snug" style={{ color: "var(--page-text-muted)" }}>
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
                    className="text-[42px] font-extrabold tracking-tight inline-block"
                    style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
                  >
                    €{annual ? team.total : team.perMonth}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[14px] ml-1" style={{ color: "var(--page-text-faint)" }}>/{annual ? "ano" : "mês"}</span>
                {annual && (
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--page-text-faint)" }}>
                    equivale a €{team.perMonth}/mês
                  </p>
                )}
              </div>

              {/* Slider */}
              <div className="mb-5 mt-3">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="team-slider" className="text-[12px] font-medium" style={{ color: "var(--page-text-muted)" }}>Utilizadores</label>
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
                  <span className="text-[10px]" style={{ color: "var(--page-text-faint)" }}>{MIN_USERS}</span>
                  <span className="text-[10px]" style={{ color: "var(--page-text-faint)" }}>{MAX_USERS}</span>
                </div>
                {teamUsers === MAX_USERS && (
                  <p className="text-[10px] mt-1.5 text-right">
                    <a href="/agenda" className="hover:underline" style={{ color: "var(--page-text-faint)" }}>
                      Mais de 20 utilizadores? Fala connosco →
                    </a>
                  </p>
                )}
              </div>

              {/* Breakdown */}
              <div className="rounded-xl p-3 mb-5 border" style={{ background: "oklch(0.581 0.243 263 / 0.06)", borderColor: "oklch(0.581 0.243 263 / 0.2)" }}>
                <div className="flex justify-between text-[12px] mb-1">
                  <span style={{ color: "var(--page-text-muted)" }}>Base (2 users)</span>
                  <span className="font-medium" style={{ color: "var(--page-text)" }}>
                    {annual ? "€580/ano" : "€58/mês"}
                  </span>
                </div>
                {teamUsers > BASE_INCLUDED_USERS && (
                  <div className="flex justify-between text-[12px] mb-1">
                    <span style={{ color: "var(--page-text-muted)" }}>
                      +{teamUsers - BASE_INCLUDED_USERS} users × {annual ? "€240/ano" : "€24/mês"}
                    </span>
                    <span className="font-medium" style={{ color: "var(--page-text)" }}>
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
                <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
                  <Check size={14} className="text-brand shrink-0" />
                  Mínimo 3 utilizadores
                </div>
                <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
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
          </motion.div>

          {/* Agency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-6 border flex flex-col"
            style={{ background: "var(--page-card)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
          >
            <div className="mb-5">
              <h3 className="text-[17px] font-bold mb-1" style={{ color: "var(--page-text)" }}>Agency</h3>
              <p className="text-[13px] leading-snug" style={{ color: "var(--page-text-muted)" }}>
                Para agências que trabalham com freelancers e envolvem clientes no processo.
              </p>
            </div>

            {/* Dynamic price — total */}
            <div className="mb-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${agencyCalc.perMonth}-${annual}`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="text-[42px] font-extrabold tracking-tight inline-block"
                  style={{ fontFamily: "var(--font-display)", color: "var(--page-text)" }}
                >
                  €{annual ? agencyCalc.total : agencyCalc.perMonth}
                </motion.span>
              </AnimatePresence>
              <span className="text-[14px] ml-1" style={{ color: "var(--page-text-faint)" }}>/{annual ? "ano" : "mês"}</span>
              {annual && (
                <p className="text-[11px] mt-0.5" style={{ color: "var(--page-text-faint)" }}>
                  equivale a €{agencyCalc.perMonth}/mês
                </p>
              )}
            </div>

            {/* Sliders */}
            <div className="mb-3 mt-3">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="agency-users-slider" className="text-[12px] font-medium" style={{ color: "var(--page-text-muted)" }}>Utilizadores</label>
                <span className="text-[13px] font-semibold" style={{ color: "var(--page-text)" }}>{agencyUsers}</span>
              </div>
              <input
                id="agency-users-slider"
                type="range"
                min={MIN_AGENCY_USERS}
                max={MAX_USERS}
                value={agencyUsers}
                onChange={(e) => setAgencyUsers(Number(e.target.value))}
                className="bernays-slider bernays-slider-neutral"
                style={{
                  background: `linear-gradient(to right, var(--page-text-faint) 0%, var(--page-text-faint) ${agencyUsersPct}%, var(--page-border) ${agencyUsersPct}%, var(--page-border) 100%)`,
                }}
              />
              <div className="flex justify-between mt-1">
                <span className="text-[10px]" style={{ color: "var(--page-text-faint)" }}>{MIN_AGENCY_USERS}</span>
                <span className="text-[10px]" style={{ color: "var(--page-text-faint)" }}>{MAX_USERS}</span>
              </div>
              {agencyUsers === MAX_USERS && (
                <p className="text-[10px] mt-1.5 text-right">
                  <a href="/agenda" className="hover:underline" style={{ color: "var(--page-text-faint)" }}>
                    Mais de 20 utilizadores? Fala connosco →
                  </a>
                </p>
              )}
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="agency-accesses-slider" className="text-[12px] font-medium" style={{ color: "var(--page-text-muted)" }}>Acessos externos</label>
                <span className="text-[13px] font-semibold" style={{ color: "var(--page-text)" }}>{agencyAccesses}</span>
              </div>
              <input
                id="agency-accesses-slider"
                type="range"
                min={1}
                max={MAX_ACCESSES}
                value={agencyAccesses}
                onChange={(e) => setAgencyAccesses(Number(e.target.value))}
                className="bernays-slider bernays-slider-neutral"
                style={{
                  background: `linear-gradient(to right, var(--page-text-faint) 0%, var(--page-text-faint) ${agencyAccessesPct}%, var(--page-border) ${agencyAccessesPct}%, var(--page-border) 100%)`,
                }}
              />
              <div className="flex justify-between mt-1">
                <span className="text-[10px]" style={{ color: "var(--page-text-faint)" }}>1</span>
                <span className="text-[10px]" style={{ color: "var(--page-text-faint)" }}>{MAX_ACCESSES}</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="rounded-xl p-3 mb-5 border" style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}>
              <div className="flex justify-between text-[12px] mb-1">
                <span style={{ color: "var(--page-text-muted)" }}>Base (2 users)</span>
                <span className="font-medium" style={{ color: "var(--page-text)" }}>
                  {annual ? "€580/ano" : "€58/mês"}
                </span>
              </div>
              {agencyUsers > BASE_INCLUDED_USERS && (
                <div className="flex justify-between text-[12px] mb-1">
                  <span style={{ color: "var(--page-text-muted)" }}>
                    +{agencyUsers - BASE_INCLUDED_USERS} users × {annual ? "€240/ano" : "€24/mês"}
                  </span>
                  <span className="font-medium" style={{ color: "var(--page-text)" }}>
                    {annual
                      ? `€${(agencyUsers - BASE_INCLUDED_USERS) * PER_USER_ANNUAL}/ano`
                      : `€${(agencyUsers - BASE_INCLUDED_USERS) * PER_USER_MONTHLY}/mês`}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-[12px] mb-1">
                <span style={{ color: "var(--page-text-muted)" }}>
                  {agencyAccesses} acesso{agencyAccesses > 1 ? "s" : ""} × {annual ? "€120/ano" : "€12/mês"}
                </span>
                <span className="font-medium" style={{ color: "var(--page-text)" }}>
                  {annual
                    ? `€${agencyAccesses * PER_ACCESS_ANNUAL}/ano`
                    : `€${agencyAccesses * PER_ACCESS_MONTHLY}/mês`}
                </span>
              </div>
              <div className="border-t pt-1 mt-1 flex justify-between text-[13px]" style={{ borderColor: "var(--page-border)" }}>
                <span className="font-semibold" style={{ color: "var(--page-text)" }}>Total</span>
                <span className="font-bold" style={{ color: "var(--page-text)" }}>
                  {annual ? `€${agencyCalc.total}/ano` : `€${agencyCalc.perMonth}/mês`}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-6 flex-1">
              <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
                <Check size={14} className="text-brand shrink-0" />
                Gere freelancers como se fossem membros da equipa
              </div>
              <div className="flex items-center gap-2 text-[13px]" style={{ color: "var(--page-text-muted)" }}>
                <Check size={14} className="text-brand shrink-0" />
                Clientes trabalham com a equipa dentro do Bernays
              </div>
            </div>

            <a
              href={`${APP_URL}/login?signup=1`}
              className="w-full block text-center py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-150 border [color:var(--page-text-muted)] [border-color:var(--page-border)] hover:text-brand dark:hover:text-brand-light hover:border-brand/40"
            >
              Começar
            </a>
            <a
              href={DEMO_URL}
              className="w-full block text-center py-1.5 text-[12px] font-medium transition-all duration-150 [color:var(--page-text-faint)] hover:text-brand"
            >
              Ver demo primeiro →
            </a>
          </motion.div>
        </div>

        {/* What's included */}
        <FadeIn>
          <div className="rounded-2xl border p-6 md:p-8" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
            <h3 className="text-[15px] font-bold mb-5" style={{ color: "var(--page-text)" }}>
              O que está incluído em todos os planos
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-brand shrink-0 mt-0.5" />
                  <span className="text-[13px]" style={{ color: "var(--page-text-muted)" }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 pt-4 border-t text-[12px] leading-relaxed" style={{ borderColor: "var(--page-border)", color: "var(--page-text-faint)" }}>
              Storage incluído por plano. Espaço adicional disponível a €0,15/GB.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
