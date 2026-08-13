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
    // ⚠️ `/privacidade` e `/termos` NÃO entram: têm `robots: noindex` no
    // metadata da própria página, de propósito. Um sitemap é um PEDIDO de
    // indexação — pedir a indexação de uma página que se marcou como
    // não-indexável é contradizer-se, e o Search Console reporta-o como erro
    // («Submitted URL marked 'noindex'»). Se um dia se quiser que sejam
    // indexadas, tira-se o noindex delas E acrescentam-se aqui.
  ]
}
