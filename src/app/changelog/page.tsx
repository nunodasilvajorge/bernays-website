import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { FloatingCta } from "@/components/floating-cta"

type BadgeType = "Novo" | "Melhoria" | "Fix"

const BADGE: Record<BadgeType, { bg: string; color: string }> = {
  Novo:     { bg: "oklch(0.581 0.243 263 / 0.12)", color: "oklch(0.581 0.243 263)" },
  Melhoria: { bg: "oklch(0.527 0.154 150 / 0.12)", color: "oklch(0.527 0.154 150)" },
  Fix:      { bg: "oklch(0.75 0.17 60 / 0.15)",    color: "oklch(0.6 0.17 55)" },
}

const entries: {
  date: string
  type: BadgeType
  title: string
  desc: string
  link?: { label: string; href: string }
}[] = [
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Bernays para mobile — PWA",
    desc: "Usa o Bernays como app no iPhone e Android. Notificações em tempo real, registo de horas no cliente, aprovação de despesas onde estiveres.",
    link: { label: "Ver funcionalidades", href: "/funcionalidades" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Acesso com passkey",
    desc: "Entra no Bernays com Face ID ou impressão digital, sem password. Mais seguro e mais rápido do que qualquer alternativa.",
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "OCR de recibos por câmara",
    desc: "Fotografa o recibo com o telemóvel. O Bernays lê, categoriza e submete a despesa em segundos — sem digitar nada.",
    link: { label: "Módulo Financeiro", href: "/produto/financeiro" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Propostas colaborativas em tempo real",
    desc: "Cria e edita propostas em equipa com colaboração em tempo real. Envia por link e recebe assinatura digital — sem Word, sem email, sem sair do Bernays.",
    link: { label: "Módulo Crescimento", href: "/produto/crescimento" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Portal de cliente com aprovações",
    desc: "Os teus clientes acompanham o projecto, aprovam entregáveis e consultam facturas — sem precisar de conta no Bernays.",
    link: { label: "Módulo Financeiro", href: "/produto/financeiro" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Faturação recorrente automática",
    desc: "Configura um retainer uma vez. O Bernays emite e envia a fatura automaticamente todos os meses, sem intervenção manual.",
    link: { label: "Módulo Financeiro", href: "/produto/financeiro" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Faturação certificada AT via InvoiceXpress",
    desc: "Emite facturas conformes com ATCUD, envia ao cliente e exporta para o contabilista — sem sair do Bernays. Integração nativa com InvoiceXpress, com suporte a mais providers em breve.",
    link: { label: "Módulo Financeiro", href: "/produto/financeiro" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Demo interactiva disponível",
    desc: "Explora todos os módulos com dados reais de uma agência de RP em demo.bernays.pt. Sem registo, sem limite de tempo.",
    link: { label: "Abrir demo", href: "https://demo.bernays.pt" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Bernays lançado em acesso antecipado",
    desc: "Todos os módulos disponíveis: Crescimento, Delivery, Financeiro, Pessoas, Escritório, Workspace e Plataforma.",
    link: { label: "Ver módulos", href: "/funcionalidades" },
  },
  {
    date: "Maio 2026",
    type: "Novo",
    title: "Bernays para a Academia",
    desc: "Acesso gratuito para universidades e politécnicos que ensinam gestão de comunicação e relações públicas. Inclui dados de demonstração e guia didáctico.",
    link: { label: "Saber mais", href: "/funcionalidades#academia" },
  },
]

export default function ChangelogPage() {
  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Nav />
      <FloatingCta />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div
          className="relative mb-16 pb-10 border-b overflow-hidden"
          style={{ borderColor: "var(--page-border)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 100% at 50% 100%, oklch(0.581 0.243 263 / 0.07) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-3">
              Novidades
            </p>
            <h1
              className="text-[clamp(30px,5vw,54px)] font-extrabold tracking-[-0.04em] leading-tight mb-4"
              style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
            >
              O que mudou no Bernays.
            </h1>
            <p
              className="text-[17px] leading-relaxed max-w-2xl"
              style={{ color: "var(--page-text-muted)" }}
            >
              O Bernays entrou em acesso antecipado em Maio de 2026. Todas as actualizações, funcionalidades lançadas e melhorias ficam registadas aqui.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] top-2 bottom-0 w-px"
              style={{ background: "var(--page-border)" }}
            />

            <div className="space-y-0">
              {entries.map((entry, idx) => {
                const badge = BADGE[entry.type]
                return (
                  <div key={entry.title} className="relative flex gap-6 pb-10">
                    {/* Dot */}
                    <div
                      className="w-[15px] h-[15px] rounded-full border-2 shrink-0 mt-1 z-10"
                      style={{
                        background: idx === 0 ? badge.color : "var(--page-bg)",
                        borderColor: badge.color,
                      }}
                    />

                    {/* Content */}
                    <div className="flex-1 pt-0">
                      {/* Meta row */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-[12px] font-medium"
                          style={{ color: "var(--page-text-faint)" }}
                        >
                          {entry.date}
                        </span>
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide"
                          style={{ background: badge.bg, color: badge.color }}
                        >
                          {entry.type}
                        </span>
                      </div>

                      {/* Title + desc */}
                      <h2
                        className="text-[16px] font-bold mb-2 leading-snug"
                        style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
                      >
                        {entry.title}
                      </h2>
                      <p className="text-[14px] leading-relaxed mb-3" style={{ color: "var(--page-text-muted)" }}>
                        {entry.desc}
                      </p>

                      {/* Optional link */}
                      {entry.link && (
                        entry.link.href.startsWith("http") ? (
                          <a
                            href={entry.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:underline"
                          >
                            {entry.link.label}
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            href={entry.link.href}
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:underline"
                          >
                            {entry.link.label}
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  )
}
