import { modules } from "@/lib/features-data"
import { notFound } from "next/navigation"
import { ModulePageContent } from "./client"

export const dynamicParams = false

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.id }))
}

type Props = { params: Promise<{ slug: string }> }

export default async function ModulePage({ params }: Props) {
  const { slug } = await params
  if (!modules.find((m) => m.id === slug)) notFound()
  return <ModulePageContent slug={slug} />
}
