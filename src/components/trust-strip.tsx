"use client"

const logos = [
  {
    name: "AT · ATCUD",
    sub: "Faturação certificada",
    svg: (
      <svg viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-auto">
        <rect width="64" height="32" rx="4" fill="currentColor" fillOpacity="0.08" />
        <text x="32" y="21" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" fill="currentColor" letterSpacing="-0.5">AT</text>
      </svg>
    ),
  },
  {
    name: "Stripe",
    sub: "Pagamentos seguros",
    svg: (
      <svg viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-6 w-auto">
        <path d="M27.27 9.5c0-.96.79-1.33 2.1-1.33 1.88 0 4.25.57 6.12 1.58V4.12A16.24 16.24 0 0 0 29.37 3c-4.35 0-7.25 2.28-7.25 6.08 0 5.93 8.16 4.98 8.16 7.54 0 1.13-.98 1.5-2.35 1.5-2.03 0-4.63-.84-6.68-1.96v5.7a16.92 16.92 0 0 0 6.68 1.4c4.49 0 7.58-2.22 7.58-6.07-.03-6.4-8.24-5.25-8.24-7.69zm-9.23-6.15L12.3 4.57l-.03 15.96-5.63.01V4.57L.9 3.35V.3h17.14v3.05zm42 3.02h-4.96l-.01 9.65c0 2.55 1.34 3.14 3.24 3.14.96 0 1.76-.1 2.66-.35v4.74c-.96.32-2.05.5-3.53.5-4.13 0-7.25-2.12-7.25-6.73l.01-10.95h-3.17V2.47l3.17-.74V-.4l5.88-1.62v5.85h4.96v3.54z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    sub: "Infraestrutura global",
    svg: (
      <svg viewBox="0 0 76 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-auto">
        <path d="M9 0L18 18H0L9 0z" fill="currentColor" />
        <path d="M27.7 14H22l5.1-12h2.8l5.1 12h-5.8zm-1.4-3.5h2.9l-1.45-3.6-1.45 3.6zm12.4 3.5V2h5.4c3.6 0 5.9 2.1 5.9 6s-2.3 6-5.9 6h-5.4zm2.6-2.2h2.7c2 0 3.3-1.3 3.3-3.8S46 4.2 44 4.2h-2.7V11.8zm12.9 2.2V2h8.9v2.2h-6.3v2.5h5.6v2.2h-5.6v2.7h6.3V14h-8.9zm13.8 0V2h2.6v9.8h6.1V14h-8.7z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Neon",
    sub: "Base de dados segura",
    svg: (
      <svg viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-auto">
        <path d="M4 2h6.5l8 10.5V2H22v16h-6l-8.5-11V18H4V2zm20 0h14v3.5h-10v3h9v3.5h-9v2.5h10V18H24V2zm17 0h4l5 8 5-8h4l-7 10v6h-4v-6L41 2z" fill="currentColor" />
      </svg>
    ),
  },
]

export function TrustStrip() {
  return (
    <section
      className="border-y py-8 px-6"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-center text-[10px] font-bold tracking-[0.18em] uppercase mb-6"
          style={{ color: "var(--page-text-faint)" }}
        >
          Certificado e construído com
        </p>
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center gap-1.5 group transition-all duration-200"
              style={{ opacity: 0.38 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.38")}
            >
              <div
                className="text-slate-900 dark:text-white"
                style={{ filter: "grayscale(1)" }}
              >
                {logo.svg}
              </div>
              <span
                className="text-[10px] font-medium tracking-wide"
                style={{ color: "var(--page-text-faint)" }}
              >
                {logo.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
