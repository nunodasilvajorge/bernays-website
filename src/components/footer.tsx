import Link from "next/link"
import Image from "next/image"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

const nav = [
  {
    heading: "Produto",
    links: [
      { label: "Funcionalidades",    href: "/funcionalidades" },
      { label: "Crescimento",        href: "/produto/crescimento" },
      { label: "Delivery",           href: "/produto/delivery" },
      { label: "Financeiro",         href: "/produto/financeiro" },
      { label: "Pessoas",            href: "/produto/pessoas" },
      { label: "Escritório",         href: "/produto/escritorio" },
      { label: "Workspace",          href: "/produto/workspace" },
      { label: "Plataforma",         href: "/produto/plataforma" },
      { label: "Ver demo",           href: DEMO_URL, cta: true },
    ],
  },
  {
    heading: "Acesso",
    links: [
      { label: "Aceder à aplicação", href: `${APP_URL}/login`, cta: true },
      { label: "Marcar demo",        href: "/agenda", cta: true },
      { label: "Demo guiada",        href: DEMO_URL, cta: true },
    ],
  },
  {
    heading: "Sobre",
    links: [
      { label: "Quem somos",         href: "/sobre" },
      { label: "Novidades",          href: "/changelog" },
      { label: "Academia",           href: "/funcionalidades#academia" },
      { label: "Privacidade",        href: "/privacidade" },
      { label: "Termos",             href: "/termos" },
    ],
  },
]

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-16 border-b" style={{ borderColor: "var(--page-border)" }}>
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="Bernays" width={28} height={28} className="rounded-[5px]" />
              <span className="text-[20px] font-extrabold tracking-[-0.03em] text-slate-900 dark:text-white">
                Bernays
              </span>
            </div>
            <p
              className="text-[15px] font-medium leading-snug mb-5 max-w-xs"
              style={{ color: "var(--page-text)" }}
            >
              O sistema nervoso da tua agência de RP.
            </p>
            <p className="text-[13px] leading-relaxed mb-5 max-w-xs" style={{ color: "var(--page-text-faint)" }}>
              Desenvolvido por Nuno da Silva Jorge — fundador, professor e estratega de Relações Públicas.
            </p>
            <a
              href="https://www.linkedin.com/in/nunodasilvajorge/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-150 hover:text-brand"
              style={{ color: "var(--page-text-faint)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading}>
              <p
                className="text-[11px] font-bold tracking-widest uppercase mb-4"
                style={{ color: "var(--page-text-faint)" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => {
                  const cls = `text-[14px] transition-colors duration-150 ${
                    (link as { cta?: boolean }).cta
                      ? "text-[var(--page-text-muted)] hover:text-brand"
                      : "text-[var(--page-text-muted)] hover:text-[var(--page-text)]"
                  }`
                  return (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={cls}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 py-6">
          <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
            © 2026 Bernays. Todos os direitos reservados.
          </p>
          <p className="text-[12px]" style={{ color: "var(--page-text-muted)" }}>
            Construído com investigação aplicada em Relações Públicas · ESCS-IPL
          </p>
        </div>
      </div>
    </footer>
  )
}
