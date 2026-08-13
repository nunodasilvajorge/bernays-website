import type { Metadata } from "next"
import { modules } from "@/lib/features-data"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const mod = modules.find((m) => m.id === slug)
  if (!mod) {
    return { title: "Bernays", robots: "noindex, nofollow" }
  }
  // Sem `robots` aqui: herda o do root layout (index, follow). O `noindex` do
  // ramo de cima é para um slug que não existe, e esse mantém-se.
  return {
    title: `${mod.label} — Bernays`,
    description: mod.description,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
