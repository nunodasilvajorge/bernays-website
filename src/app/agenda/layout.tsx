import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marcar Demo — Bernays",
  description:
    "30 minutos com o Nuno. Demo guiada com dados reais da tua agência. Sem pressão, sem pitch genérico.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
