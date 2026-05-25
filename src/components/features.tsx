"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  TrendingUp,
  CheckSquare,
  Receipt,
  Users,
  Building2,
  LayoutDashboard,
} from "lucide-react"
import { FadeIn } from "@/lib/animate"

const ease = [0.22, 1, 0.36, 1] as const

function KanbanMockup() {
  const columns = [
    { name: "Prospecto", color: "#6b7280", deals: ["TechStart Lisboa", "Meridian Group"] },
    { name: "Proposta", color: "#7c3aed", deals: ["Blue Wave Media"] },
    { name: "Ganho", color: "#059669", deals: ["Acme PR", "Novus Pharma"] },
  ]
  return (
    <div className="flex gap-2 mt-4">
      {columns.map((col) => (
        <div key={col.name} className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: col.color }} />
            <span className="text-[10px] font-semibold" style={{ color: "var(--mock-text-lo)" }}>
              {col.name}
            </span>
          </div>
          <div className="space-y-1.5">
            {col.deals.map((d) => (
              <div
                key={d}
                className="rounded-lg p-2 text-[10px] border"
                style={{
                  background: "var(--mock-card)",
                  borderColor: "var(--mock-border)",
                  color: "var(--mock-text-md)",
                }}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function TaskListMockup() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const tasks = [
    { label: "Relatório de imprensa Acme PR", done: true },
    { label: "Briefing mensal Q2", done: true },
    { label: "Media kit actualização", done: false },
    { label: "Proposta Novus Pharma", done: false },
  ]
  return (
    <div ref={ref} className="mt-4 space-y-1.5">
      {tasks.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, x: -8 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, delay: i * 0.1, ease }}
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 border"
          style={{ background: "var(--mock-card)", borderColor: "var(--mock-border)" }}
        >
          <div
            className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 border ${
              t.done ? "bg-emerald-500 border-emerald-500" : "border-current opacity-25"
            }`}
          >
            {t.done && (
              <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                <path
                  d="M1 3.5L3.5 6L8 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span
            className={`text-[10px] truncate ${t.done ? "line-through opacity-40" : ""}`}
            style={{ color: "var(--mock-text-md)" }}
          >
            {t.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

function InvoiceListMockup() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const invoices = [
    { client: "Acme PR", value: "€8.400", status: "Paga", color: "#059669" },
    { client: "Blue Wave Media", value: "€4.200", status: "Emitida", color: "#2257ff" },
    { client: "Novus Pharma", value: "€6.200", status: "Em atraso", color: "#f59e0b" },
  ]
  return (
    <div ref={ref} className="mt-4 space-y-1.5">
      {invoices.map((inv, i) => (
        <motion.div
          key={inv.client}
          initial={{ opacity: 0, y: 6 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: i * 0.1, ease }}
          className="flex items-center justify-between rounded-lg px-2.5 py-1.5 border"
          style={{ background: "var(--mock-card)", borderColor: "var(--mock-border)" }}
        >
          <span className="text-[10px]" style={{ color: "var(--mock-text-md)" }}>
            {inv.client}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold" style={{ color: "var(--mock-text-hi)" }}>
              {inv.value}
            </span>
            <span
              className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
              style={{ background: `${inv.color}22`, color: inv.color }}
            >
              {inv.status}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function TeamStatusMockup() {
  const team = [
    { name: "Ana Silva", role: "Senior Consultant", status: "Disponível", color: "#059669", pulse: true },
    { name: "Luís Costa", role: "Account Manager", status: "Em reunião", color: "#f59e0b", pulse: false },
    { name: "Inês Fonseca", role: "PR Consultant", status: "Férias até 25 Mai", color: "#6b7280", pulse: false },
  ]
  return (
    <div className="mt-4 space-y-2">
      {team.map((m) => (
        <div
          key={m.name}
          className="flex items-center justify-between rounded-lg px-2.5 py-2 border"
          style={{ background: "var(--mock-card)", borderColor: "var(--mock-border)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
              style={{ background: `${m.color}20`, color: m.color }}
            >
              {m.name[0]}
            </div>
            <div>
              <p className="text-[10px] font-medium" style={{ color: "var(--mock-text-hi)" }}>
                {m.name}
              </p>
              <p className="text-[9px]" style={{ color: "var(--mock-text-lo)" }}>
                {m.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {m.pulse ? (
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: m.color }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }} />
            )}
            <span className="text-[9px]" style={{ color: "var(--mock-text-lo)" }}>
              {m.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function RoomMockup() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const bookings = [
    { time: "09:00–10:00", label: "Daily standup", highlight: false },
    { time: "14:00–16:00", label: "Meeting Novus Pharma", highlight: true },
    { time: "17:00–17:30", label: "Balanço semanal", highlight: false },
  ]
  return (
    <div ref={ref} className="mt-4">
      <p className="text-[9px] font-bold tracking-widest uppercase mb-2" style={{ color: "var(--mock-text-lo)" }}>
        Sala A · Hoje
      </p>
      <div className="space-y-1.5">
        {bookings.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, x: -6 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: i * 0.1, ease }}
            className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 border ${b.highlight ? "border-brand/40 bg-brand/[0.08]" : ""}`}
            style={b.highlight ? {} : { background: "var(--mock-card)", borderColor: "var(--mock-border)" }}
          >
            <span
              className={`text-[9px] font-mono shrink-0 ${b.highlight ? "text-brand" : ""}`}
              style={b.highlight ? {} : { color: "var(--mock-text-lo)" }}
            >
              {b.time}
            </span>
            <span
              className={`text-[10px] font-medium truncate ${b.highlight ? "text-brand dark:text-brand-light" : ""}`}
              style={b.highlight ? {} : { color: "var(--mock-text-md)" }}
            >
              {b.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function InboxMockup() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const items = [
    { icon: "✓", text: "Tarefa atribuída: Briefing mensal", color: "#059669" },
    { icon: "€", text: "Proposta aprovada: Blue Wave Media", color: "#2257ff" },
    { icon: "⏰", text: "Reunião em 30 min: Novus Pharma", color: "#f59e0b" },
    { icon: "📊", text: "P&L Acme PR actualizado", color: "#ec4899" },
    { icon: "✓", text: "Projecto fechado: Novus Pharma Q2", color: "#059669" },
  ]
  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {items.map((item, i) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: i * 0.1, ease }}
          className="flex items-center gap-2 rounded-lg px-2.5 py-2 border"
          style={{ background: "var(--mock-card)", borderColor: "var(--mock-border)" }}
        >
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] shrink-0"
            style={{ background: `${item.color}18`, color: item.color }}
          >
            {item.icon}
          </div>
          <span className="text-[10px] truncate" style={{ color: "var(--mock-text-md)" }}>
            {item.text}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

const lucideProps = { size: 16, strokeWidth: 1.75 }

const features = [
  {
    id: "crescimento",
    label: "CRESCIMENTO",
    title: "Sabe onde está cada oportunidade de negócio.",
    body: "Pipeline honesto, propostas com aceitação digital e histórico completo de cada cliente. Do primeiro contacto ao contrato — sem depender da memória de ninguém.",
    icon: <TrendingUp {...lucideProps} />,
    span: "md:col-span-2",
    minH: "min-h-[300px]",
    mockup: <KanbanMockup />,
    color: "#2257ff",
  },
  {
    id: "delivery",
    label: "DELIVERY",
    title: "Sabes o que cada consultor está a fazer.",
    body: "Prazos, orçamentos e estado de cada projecto em tempo real. Quando algo está a desviar, sabes antes do cliente perceber.",
    icon: <CheckSquare {...lucideProps} />,
    span: "md:col-span-1",
    minH: "min-h-[220px]",
    mockup: <TaskListMockup />,
    color: "#7c3aed",
  },
  {
    id: "financeiro",
    label: "FINANCEIRO",
    title: "Fatura. Recebe. Controla.",
    body: "Retainers configurados uma vez, emitidos sempre. P&L por cliente, cobranças visíveis, cashflow actualizado. Sem surpresas no final do mês. Despesas: fotografa o recibo com o telemóvel e está feito — o Bernays lê, categoriza e submete em segundos.",
    icon: <Receipt {...lucideProps} />,
    span: "md:col-span-1",
    minH: "min-h-[220px]",
    mockup: <InvoiceListMockup />,
    color: "#059669",
  },
  {
    id: "pessoas",
    label: "PESSOAS",
    title: "Sabes quem está disponível. E quem está no limite.",
    body: "Férias, carga de trabalho e performance num só lugar. Antes de teres um problema de equipa, o Bernays já o sinalizou.",
    icon: <Users {...lucideProps} />,
    span: "md:col-span-1",
    minH: "min-h-[220px]",
    mockup: <TeamStatusMockup />,
    color: "#f59e0b",
  },
  {
    id: "escritorio",
    label: "ESCRITÓRIO",
    title: "O escritório em ordem, mesmo quando não estás.",
    body: "Fornecedores, salas, activos e compliance registados e atribuídos. A agência funciona com ou sem o sócio presente.",
    icon: <Building2 {...lucideProps} />,
    span: "md:col-span-1",
    minH: "min-h-[220px]",
    mockup: <RoomMockup />,
    color: "#06b6d4",
  },
  {
    id: "workspace",
    label: "WORKSPACE",
    title: "Começa cada dia a saber o que importa.",
    body: "O teu painel pessoal no computador e no telemóvel. Tarefas, alertas e horas num só sítio — em qualquer dispositivo, em qualquer lugar. Usa o Bernays como app instalada no iPhone ou Android.",
    icon: <LayoutDashboard {...lucideProps} />,
    span: "md:col-span-3",
    minH: "min-h-[140px]",
    mockup: <InboxMockup />,
    color: "#ec4899",
    wide: true,
  },
]

function FeatureCard({ f, delay }: { f: (typeof features)[number]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null)
  const isWide = "wide" in f && f.wide

  return (
    <FadeIn delay={delay} className={f.span}>
      <motion.div
        ref={cardRef}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative overflow-hidden rounded-2xl p-6 border cursor-default h-full ${f.minH}${isWide ? " md:flex md:items-center md:gap-12" : ""}`}
        style={{ background: "var(--page-card)", borderColor: "var(--page-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
        onMouseMove={(e) => {
          const rect = cardRef.current?.getBoundingClientRect()
          if (!rect) return
          setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${f.color}55`
          e.currentTarget.style.boxShadow = `0 0 32px ${f.color}18, 0 8px 32px rgba(0,0,0,0.08)`
        }}
        onMouseLeave={(e) => {
          setSpot(null)
          e.currentTarget.style.borderColor = "var(--page-border)"
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"
        }}
      >
        {spot && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(280px circle at ${spot.x}px ${spot.y}px, ${f.color}14 0%, transparent 70%)` }}
          />
        )}
        {isWide ? (
          <>
            <div className="md:w-80 shrink-0 relative z-[1]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold tracking-widest" style={{ color: f.color }}>{f.label}</span>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${f.color}18`, color: f.color }}>{f.icon}</div>
              </div>
              <h3 className="text-[16px] font-bold text-slate-800 dark:text-white/90 leading-snug mb-2">{f.title}</h3>
              <p className="text-[13px] text-slate-500 dark:text-white/40 leading-relaxed">{f.body}</p>
            </div>
            <div className="flex-1 mt-4 md:mt-0 relative z-[1]">{f.mockup}</div>
          </>
        ) : (
          <div className="relative z-[1] flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <span className="text-[11px] font-bold tracking-widest" style={{ color: f.color }}>{f.label}</span>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${f.color}18`, color: f.color }}>{f.icon}</div>
            </div>
            <h3 className="text-[16px] font-bold text-slate-800 dark:text-white/90 leading-snug mb-2">{f.title}</h3>
            <p className="text-[13px] text-slate-500 dark:text-white/40 leading-relaxed">{f.body}</p>
            {f.mockup && <div className="mt-2">{f.mockup}</div>}
          </div>
        )}
      </motion.div>
    </FadeIn>
  )
}

export function Features() {
  return (
    <section
      id="funcionalidades"
      className="relative py-16 md:py-36 px-6"
      style={{ background: "var(--page-surface)" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">
            Funcionalidades
          </p>
          <h2
            className="text-[clamp(40px,5.5vw,68px)] font-extrabold tracking-[-0.035em] text-slate-900 dark:text-white leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Uma agência,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
            >
              um só sistema.
            </span>
          </h2>
          <p className="mt-5 text-[17px] text-slate-500 dark:text-white/45 max-w-lg mx-auto leading-relaxed">
            Cada módulo alimenta os outros. Não é uma suite de ferramentas. É um organismo.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.id} f={f} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
