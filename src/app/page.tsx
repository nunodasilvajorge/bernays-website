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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O Bernays é diferente do Productive, Monday ou Toggl?",
      acceptedAnswer: { "@type": "Answer", text: "Completamente diferente. O Productive e o Monday são ferramentas de produtividade. O Toggl é apenas time tracking. O Bernays é um ERP: integra pipeline de vendas, delivery, faturação certificada, RH e escritório numa plataforma construída de raiz para agências de PR." },
    },
    {
      "@type": "Question",
      name: "Para que tipo de agências é o Bernays?",
      acceptedAnswer: { "@type": "Answer", text: "Para agências de Relações Públicas de 2 a 20 pessoas que gerem múltiplos clientes em simultâneo, faturam por retainer ou projecto, e precisam de visibilidade real sobre rentabilidade, capacidade e operações." },
    },
    {
      "@type": "Question",
      name: "O que está incluído em todos os planos?",
      acceptedAnswer: { "@type": "Answer", text: "Tudo. Os sete módulos completos: Crescimento, Delivery, Financeiro, Pessoas, Escritório, Workspace e Plataforma. Sem funcionalidades escondidas em tiers superiores, sem add-ons obrigatórios." },
    },
    {
      "@type": "Question",
      name: "A equipa cresce — posso adicionar utilizadores a qualquer momento?",
      acceptedAnswer: { "@type": "Answer", text: "Sim. Adicionas utilizadores a qualquer altura sem interrupção de serviço. O custo é calculado pro-rata: pagas apenas os dias que restam no ciclo de facturação actual." },
    },
    {
      "@type": "Question",
      name: "Os dados da agência estão seguros e isolados?",
      acceptedAnswer: { "@type": "Answer", text: "Cada agência tem os seus dados completamente isolados. Utilizamos base de dados gerida com backups automáticos diários, HTTPS em todas as comunicações e autenticação com 2FA incluída em todos os planos." },
    },
    {
      "@type": "Question",
      name: "Se deixar de usar o Bernays, fico com os meus dados?",
      acceptedAnswer: { "@type": "Answer", text: "Sempre. Podes exportar todos os dados da agência em qualquer momento em formatos standard (CSV, PDF, SAF-T). Os teus dados são teus, antes, durante e depois." },
    },
    {
      "@type": "Question",
      name: "Como posso experimentar o Bernays?",
      acceptedAnswer: { "@type": "Answer", text: "Tens acesso a uma demo guiada com dados reais de uma agência fictícia — podes explorar todos os módulos sem criar conta. Não há cartão de crédito, não há compromisso." },
    },
    {
      "@type": "Question",
      name: "Há custos de setup, formação ou integração?",
      acceptedAnswer: { "@type": "Answer", text: "Não. O Bernays não tem taxas de activação, custos de onboarding nem sessões de formação obrigatórias pagas. A interface foi desenhada para ser óbvia — a maioria das equipas está operacional em menos de uma hora." },
    },
    {
      "@type": "Question",
      name: "Como funciona o reembolso?",
      acceptedAnswer: { "@type": "Answer", text: "Oferecemos reembolso integral nos primeiros 14 dias após o primeiro pagamento, sem necessidade de justificação." },
    },
    {
      "@type": "Question",
      name: "Como funciona a faturação automática de retainers?",
      acceptedAnswer: { "@type": "Answer", text: "Defines o cliente, o valor e a periodicidade — o Bernays gera e emite as faturas automaticamente. Inclui integração com InvoiceXpress para faturação certificada pela Autoridade Tributária e exportação SAF-T." },
    },
  ],
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
        sub="Um negócio fechado cria o projecto. Um projecto encerrado gera a fatura. A fatura paga atualiza o cashflow."
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
