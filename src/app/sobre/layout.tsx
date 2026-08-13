import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "A visão — Bernays",
  description:
    "Uma nova era das Relações Públicas. Software que liberta os consultores de RP para comunicar com impacto — e torna a agência mais rentável.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
