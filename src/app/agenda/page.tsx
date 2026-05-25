import Script from "next/script"
import Image from "next/image"
import { Search, Monitor, MessageSquare, ArrowRight } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"
const CALENDLY_URL = "https://calendly.com/nuno-dasilvajorge/15m"

const bullets = [
  {
    Icon: Search,
    title: "Percebo o teu contexto",
    desc: "Ferramentas actuais, tamanho da equipa, volume de clientes — para a demo fazer sentido para o teu caso.",
  },
  {
    Icon: Monitor,
    title: "Mostro com os teus dados",
    desc: "Demo ajustada à tua realidade, não um tour genérico de funcionalidades.",
  },
  {
    Icon: MessageSquare,
    title: "Esclareço as tuas dúvidas",
    desc: "O tempo é teu. Sem pressão de fecho, sem script.",
  },
]

export default function AgendaPage() {
  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Nav />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div
          className="relative mb-14 pb-10 border-b overflow-hidden"
          style={{ borderColor: "var(--page-border)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 100% at 50% 100%, oklch(0.581 0.243 263 / 0.07) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-3">
              Demo guiada
            </p>
            <h1
              className="text-[clamp(30px,5vw,54px)] font-extrabold tracking-[-0.04em] leading-tight mb-4"
              style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
            >
              15 minutos com o Nuno.
            </h1>
            <p
              className="text-[17px] leading-relaxed max-w-2xl"
              style={{ color: "var(--page-text-muted)" }}
            >
              Mostra-te o Bernays com dados da tua agência. Sem pressão, sem pitch genérico.
            </p>
          </div>
        </div>

        {/* Grid — bullets left, Calendly right */}
        <div className="grid md:grid-cols-[1fr_440px] gap-10 md:gap-14 items-start">

          {/* Left */}
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-7"
              style={{ color: "var(--page-text-muted)" }}
            >
              O que acontece na chamada
            </p>

            <div className="space-y-6 mb-10">
              {bullets.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "oklch(0.581 0.243 263 / 0.1)", color: "oklch(0.581 0.243 263)" }}
                  >
                    <Icon size={17} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold mb-1" style={{ color: "var(--page-text)" }}>
                      {title}
                    </p>
                    <p className="text-[13px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder credential */}
            <div
              className="flex items-center gap-3 pt-8 border-t"
              style={{ borderColor: "var(--page-border)" }}
            >
              <Image
                src="/founder.jpeg"
                alt="Nuno da Silva Jorge"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-[14px] font-semibold" style={{ color: "var(--page-text)" }}>
                  Nuno da Silva Jorge
                </p>
                <p className="text-[12px]" style={{ color: "var(--page-text-faint)" }}>
                  Fundador do Bernays · Professor de Relações Públicas, ESCS-IPL
                </p>
              </div>
            </div>
          </div>

          {/* Right — Calendly inline embed */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              borderColor: "oklch(0.581 0.243 263 / 0.2)",
              boxShadow: "0 0 40px oklch(0.581 0.243 263 / 0.06)",
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=0`}
              style={{ minWidth: "300px", height: "660px" }}
            />
          </div>

        </div>

        {/* Bottom — self-serve link */}
        <div
          className="mt-16 pt-8 border-t"
          style={{ borderColor: "var(--page-border)" }}
        >
          <p className="text-[14px] mb-2" style={{ color: "var(--page-text-faint)" }}>
            Preferes explorar sozinho?
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:underline"
          >
            Aceder à demo
            <ArrowRight size={13} />
          </a>
        </div>

      </div>

      <Footer />
    </main>
  )
}
