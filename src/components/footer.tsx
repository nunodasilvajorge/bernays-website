import Link from "next/link"
import Image from "next/image"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

const modules = [
  { label: "Crescimento", href: "/produto/crescimento", dot: "#2257ff" },
  { label: "Delivery",    href: "/produto/delivery",    dot: "#7c3aed" },
  { label: "Financeiro",  href: "/produto/financeiro",  dot: "#059669" },
  { label: "Pessoas",     href: "/produto/pessoas",     dot: "#f59e0b" },
  { label: "Escritório",  href: "/produto/escritorio",  dot: "#06b6d4" },
  { label: "Workspace",   href: "/produto/workspace",   dot: "#ec4899" },
  { label: "Plataforma",  href: "/produto/plataforma",  dot: "#6366f1" },
]

const empresa = [
  { label: "A visão",          href: "/sobre" },
  { label: "Novidades",        href: "/changelog" },
  { label: "Marcar demo",      href: "/agenda" },
  { label: "Demo interactiva", href: DEMO_URL, external: true },
  { label: "Academia",         href: "/funcionalidades#academia" },
]

export function Footer() {
  const linkCls = "text-[13px] transition-colors duration-150 [color:var(--page-text-muted)] hover:text-[var(--page-text)]"

  return (
    <footer
      className="border-t"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Pre-footer CTA ── */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-10 border-b"
          style={{ borderColor: "var(--page-border)" }}
        >
          <p className="text-[15px] font-semibold" style={{ color: "var(--page-text)" }}>
            Pronto para transformar a tua agência?
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`${APP_URL}/login?signup=1`}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-bold px-5 py-2 rounded-xl text-[14px] transition-colors duration-150"
            >
              Começar agora
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/agenda"
              className="text-[14px] font-medium transition-colors duration-150 [color:var(--page-text-faint)] hover:text-brand"
            >
              ou marcar uma demo
            </a>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div
          className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 py-14 border-b"
          style={{ borderColor: "var(--page-border)" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="Bernays" width={26} height={26} className="rounded-[5px]" />
              <span className="text-[18px] font-extrabold tracking-[-0.03em]" style={{ color: "var(--page-text)" }}>
                Bernays
              </span>
            </div>
            <p className="text-[14px] leading-snug mb-6 max-w-[220px]" style={{ color: "var(--page-text-muted)" }}>
              O sistema operativo da tua agência de Relações Públicas.
            </p>
            <a
              href="https://www.linkedin.com/in/nunodasilvajorge/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-150 [color:var(--page-text-faint)] hover:text-brand"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Produto */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "var(--page-text-faint)" }}>
              Produto
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/funcionalidades" className="text-[13px] font-semibold transition-colors duration-150 [color:var(--page-text-muted)] hover:text-[var(--page-text)]">
                  Funcionalidades
                </Link>
              </li>
              <li className="pt-2">
                <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "var(--page-text-faint)" }}>
                  Módulos
                </p>
                <ul className="space-y-2.5">
                  {modules.map(({ label, href, dot }) => (
                    <li key={label}>
                      <Link href={href} className="inline-flex items-center gap-2 text-[13px] transition-colors duration-150 [color:var(--page-text-muted)] hover:text-[var(--page-text)]">
                        <span className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: dot }} aria-hidden="true" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: "var(--page-text-faint)" }}>
              Empresa
            </p>
            <ul className="space-y-2.5">
              {empresa.map(({ label, href, external }) => (
                <li key={label}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className={linkCls}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-5">
          <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
            © 2026 Bernays. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="text-[12px] transition-colors duration-150 [color:var(--page-text-faint)] hover:text-[var(--page-text-muted)]">
              Privacidade
            </Link>
            <Link href="/termos" className="text-[12px] transition-colors duration-150 [color:var(--page-text-faint)] hover:text-[var(--page-text-muted)]">
              Termos
            </Link>
            <span className="text-[12px] select-none" style={{ color: "var(--page-text-faint)" }} aria-hidden="true">·</span>
            <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
              Investigação aplicada em RP · ESCS-IPL
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
