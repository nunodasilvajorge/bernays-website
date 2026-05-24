import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Funcionalidades — Bernays",
  description: "Tudo o que o Bernays inclui: 6 módulos integrados, mais de 60 funcionalidades para agências de Relações Públicas.",
  robots: "noindex, nofollow",
}

export default function FuncionalidadesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
