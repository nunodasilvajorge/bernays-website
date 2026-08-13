import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    viewTransition: true,
  },
  async headers() {
    const isProd = process.env.NODE_ENV === "production"
    const base = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Esteve aqui `X-Robots-Tag: noindex, nofollow` durante o acesso
      // antecipado. Era a camada mais forte das três — um header aplica-se a
      // TUDO o que a rota serve e ganha ao robots.txt e à meta tag, portanto
      // abrir as outras duas sem esta não mudava nada.
    ]
    if (isProd) base.push({ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" })
    return [{ source: "/:path*", headers: base }]
  },
}

export default nextConfig
