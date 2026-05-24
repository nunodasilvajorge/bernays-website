import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/lib/theme"
import { CookieBanner } from "@/components/cookie-banner"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bernays.pt"),
  title: "Bernays — O sistema nervoso da tua agência de RP",
  description:
    "Pipeline, projetos, faturas, equipa. O Bernays absorve a complexidade operacional para que os teus consultores se concentrem nas estratégias dos clientes.",
  robots: "noindex, nofollow",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Bernays — O sistema nervoso da tua agência de RP",
    description:
      "CRM, delivery, faturação, equipa, escritório e workspace. Um único sistema integrado de raiz para agências de Relações Públicas.",
    url: "https://bernays.pt",
    siteName: "Bernays",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernays — O sistema nervoso da tua agência de RP",
    description:
      "CRM, delivery, faturação, equipa, escritório e workspace. Um único sistema integrado de raiz para agências de Relações Públicas.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        {/* Preload hero images to improve LCP */}
        <link rel="preload" as="image" href="/finance-dark.webp" />
        <link rel="preload" as="image" href="/finance-light.webp" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand focus:text-white focus:font-semibold focus:text-sm"
        >
          Saltar para o conteúdo
        </a>
        <ThemeProvider>
          <div id="main-content" tabIndex={-1} className="sr-only" />
          <ScrollProgress />
          <CookieBanner />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
