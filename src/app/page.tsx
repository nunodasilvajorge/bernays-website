import { FloatingCta } from "@/components/floating-cta"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Statement } from "@/components/statement"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { Metrics } from "@/components/metrics"
import { Origin } from "@/components/origin"
import { Comparison } from "@/components/comparison"
import { Personas } from "@/components/personas"
import { FounderQuote } from "@/components/founder-quote"
import { Stats } from "@/components/stats"
import { FeatureTabs } from "@/components/feature-tabs"
import { Pricing } from "@/components/pricing"
import { Migration } from "@/components/migration"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { Academia } from "@/components/academia"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <FloatingCta />
      <Nav />
      <Hero />
      <Problem />
      <Statement
        plain="O Bernays foi construído para acabar"
        accent="exactamente com isto."
        sub="Um sistema integrado de raiz para agências de RP. Não adaptado de outro sector."
      />
      <Features />
      <Statement
        plain="Quando tudo fala com tudo,"
        accent="a tua agência funciona melhor."
        sub="Um deal fechado cria o projecto. Um projecto encerrado gera a fatura. A fatura paga atualiza o cashflow."
      />
      <Showcase />
      <Metrics />
      <Origin />
      <Comparison />
      <Personas />
      <FounderQuote />
      <Stats />
      <FeatureTabs />
      <Pricing />
      <Migration />
      <Faq />
      <Cta />
      <Academia />
      <Footer />
    </main>
  )
}
