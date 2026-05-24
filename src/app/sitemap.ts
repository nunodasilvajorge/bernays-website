import type { MetadataRoute } from "next"
import { modules } from "@/lib/features-data"

const BASE = "https://bernays.pt"
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const moduleRoutes = modules.map((m) => ({
    url: `${BASE}/produto/${m.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/funcionalidades`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...moduleRoutes,
    { url: `${BASE}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/agenda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/termos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]
}
