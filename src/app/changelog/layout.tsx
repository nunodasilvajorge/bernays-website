import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Novidades — Bernays",
  description:
    "Actualizações de produto, melhorias e novas funcionalidades do Bernays.",
  robots: "noindex, nofollow",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
