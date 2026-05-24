import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre o Fundador — Bernays",
  description:
    "Nuno da Silva Jorge — professor de Relações Públicas, investigador na ESCS-IPL e fundador do Bernays. A história de como a investigação académica criou o ERP para agências de RP.",
  robots: "noindex, nofollow",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
