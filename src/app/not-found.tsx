import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

export default function NotFound() {
  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Nav />

      <div className="relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.581 0.243 263 / 0.07) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-md mx-auto">
          {/* 404 number */}
          <p
            className="text-[clamp(96px,20vw,160px)] font-extrabold leading-none tracking-[-0.05em] bg-clip-text text-transparent select-none mb-4"
            style={{ backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.65 0.18 253) 100%)" }}
          >
            404
          </p>

          <h1
            className="text-[clamp(22px,3.5vw,32px)] font-extrabold tracking-[-0.03em] mb-3"
            style={{ color: "var(--page-text)" }}
          >
            Página não encontrada.
          </h1>

          <p
            className="text-[16px] leading-relaxed mb-10"
            style={{ color: "var(--page-text-muted)" }}
          >
            A página que procuras não existe ou foi movida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3 rounded-xl text-[15px] transition-colors duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M11.5 7H2.5M6.5 3L2.5 7L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Voltar ao início
            </Link>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border font-semibold px-6 py-3 rounded-xl text-[15px] transition-colors duration-150 hover:text-brand hover:border-brand/40"
              style={{ borderColor: "var(--page-border)", color: "var(--page-text-muted)" }}
            >
              Ver demo
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
