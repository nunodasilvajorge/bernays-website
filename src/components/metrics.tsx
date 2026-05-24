"use client"

import { AnimatedNumber } from "@/lib/animate"

const metrics = [
  { value: 103, format: (n: number) => `${n}+`, label: "funcionalidades incluídas" },
  { value: 7, format: (n: number) => `${n}`, label: "módulos integrados de raiz" },
  { value: 0, format: (n: number) => `€${n}`, label: "de setup, formação ou onboarding" },
  { value: 0, format: (n: number) => `${n}`, label: "add-ons ou extras necessários" },
]

export function Metrics() {
  return (
    <section
      className="py-12 md:py-20 px-6 border-y"
      style={{ background: "var(--page-surface)", borderColor: "var(--page-border)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border"
        style={{ background: "var(--page-border)", borderColor: "var(--page-border)" }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex flex-col items-center justify-center py-8 px-4 text-center"
            style={{ background: "var(--page-surface)" }}
          >
            <p
              className="text-[52px] font-extrabold leading-none mb-1.5"
              style={{
                fontFamily: "var(--font-display)",
                backgroundImage: "linear-gradient(135deg, oklch(0.581 0.243 263) 0%, oklch(0.696 0.171 253) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <AnimatedNumber value={m.value} format={m.format} duration={1.2} />
            </p>
            <p className="text-[13px] font-medium leading-snug" style={{ color: "var(--page-text-faint)" }}>
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
