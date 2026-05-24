"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { FadeIn } from "@/lib/animate"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"

const categories = [
  {
    label: "Produto",
    faqs: [
      {
        q: "O Bernays é diferente do Productive, Monday ou Toggl?",
        a: "Completamente diferente — e é a pergunta certa. O Productive e o Monday são ferramentas de produtividade. O Toggl é apenas time tracking. O Bernays é um ERP: integra pipeline de vendas, delivery, faturação certificada, RH e escritório numa plataforma construída de raiz para agências de PR. Não é uma suite de ferramentas separadas com integrações frágeis. É um organismo.",
      },
      {
        q: "Para que tipo de agências é o Bernays?",
        a: "Para agências de Relações Públicas de 2 a 20 pessoas que gerem múltiplos clientes em simultâneo, faturam por retainer ou projecto, e precisam de visibilidade real sobre rentabilidade, capacidade e operações — sem depender de Excel e ferramentas coladas com duct tape.",
      },
      {
        q: "O que está incluído em todos os planos?",
        a: "Tudo. Os sete módulos completos: Crescimento, Delivery, Financeiro, Pessoas, Escritório, Workspace e Plataforma (infraestrutura e segurança). Sem funcionalidades escondidas em tiers superiores, sem add-ons obrigatórios. O plano Solo/Studio começa em €58/mês para 2 utilizadores. O plano Team escala por utilizador adicional.",
      },
      {
        q: "A equipa cresce — posso adicionar utilizadores a qualquer momento?",
        a: "Sim. Adicionas utilizadores a qualquer altura sem interrupção de serviço. O custo é calculado pro-rata: pagas apenas os dias que restam no ciclo de facturação actual. No plano mensal não há contratos de longo prazo — podes ajustar o número de utilizadores mês a mês conforme a agência cresce ou contrai.",
      },
    ],
  },
  {
    label: "Dados e Segurança",
    faqs: [
      {
        q: "Os dados da agência estão seguros e isolados?",
        a: "Cada agência tem os seus dados completamente isolados. Utilizamos base de dados gerida com backups automáticos diários, HTTPS em todas as comunicações e autenticação com 2FA incluída em todos os planos. Nenhuma outra agência acede ao que é teu.",
      },
      {
        q: "Se deixar de usar o Bernays, fico com os meus dados?",
        a: "Sempre. Podes exportar todos os dados da agência em qualquer momento — clientes, projectos, facturas, timesheets e documentos. A exportação está disponível em formatos standard (CSV, PDF, SAF-T). Não criamos dependência artificial: os teus dados são teus, antes, durante e depois.",
      },
      {
        q: "Quem construiu o Bernays?",
        a: "O Bernays foi concebido por Nuno da Silva Jorge, professor e estratega de Relações Públicas. Nasce da intersecção entre investigação académica em gestão da comunicação e a experiência prática de gerir uma agência de RP — traduzindo essas boas práticas num sistema desenhado de raiz para o sector.",
      },
    ],
  },
  {
    label: "Preços e Suporte",
    faqs: [
      {
        q: "Como posso experimentar o Bernays?",
        a: "Tens acesso a uma demo guiada com dados reais de uma agência fictícia — podes explorar todos os módulos sem criar conta. Não há cartão de crédito, não há compromisso. Clica em 'Ver demo' e tens acesso imediato.",
      },
      {
        q: "Há custos de setup, formação ou integração?",
        a: "Não. O Bernays não tem taxas de activação, custos de onboarding nem sessões de formação obrigatórias pagas. A interface foi desenhada para ser óbvia — a maioria das equipas está operacional em menos de uma hora. Se precisares de ajuda, o suporte por email está incluído em todos os planos.",
      },
      {
        q: "Como funciona o reembolso?",
        a: "Oferecemos reembolso integral nos primeiros 14 dias após o primeiro pagamento, sem necessidade de justificação. Após esse período, o serviço mantém-se activo até ao final do período pago — sem cobranças adicionais ao cancelar.",
      },
      {
        q: "Como funciona a faturação automática de retainers?",
        a: "Defines o cliente, o valor e a periodicidade — o Bernays gera e emite as faturas automaticamente. Inclui integração com InvoiceXpress para faturação certificada pela Autoridade Tributária e exportação SAF-T para o teu contabilista. Pagamentos em atraso ficam visíveis em tempo real no dashboard financeiro.",
      },
    ],
  },
]

function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 pt-6 pb-1">
      <span
        className="text-[10px] font-bold tracking-[0.15em] uppercase shrink-0"
        style={{ color: "var(--page-text-faint)" }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: "var(--page-border)" }} />
    </div>
  )
}

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border overflow-hidden"
      style={{
        background: "var(--page-card)",
        borderColor: open ? "oklch(0.581 0.243 263 / 0.3)" : "var(--page-border)",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between p-5 text-left gap-4"
      >
        <span className="text-[14px] font-semibold leading-snug" style={{ color: "var(--page-text)" }}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-colors"
          style={{
            borderColor: open ? "oklch(0.581 0.243 263 / 0.4)" : "var(--page-border)",
            color: open ? "oklch(0.581 0.243 263)" : "var(--page-text-faint)",
          }}
        >
          <Plus size={11} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="px-5 pb-5 text-[13px] leading-relaxed border-t pt-4"
              style={{ color: "var(--page-text-muted)", borderColor: "var(--page-border)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Faq() {
  let globalIndex = 0

  return (
    <section className="py-16 md:py-32 px-6" style={{ background: "var(--page-surface)" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-4">
            Perguntas frequentes
          </p>
          <h2
            className="text-[clamp(36px,5vw,58px)] font-extrabold tracking-[-0.035em] leading-[1.05]"
            style={{ color: "var(--page-text)", fontFamily: "var(--font-display)" }}
          >
            Tudo o que precisas de saber.
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat.label}>
              <CategoryDivider label={cat.label} />
              <div className="space-y-2 mt-2">
                {cat.faqs.map((faq) => {
                  const idx = globalIndex++
                  return <FaqItem key={faq.q} faq={faq} index={idx} />
                })}
              </div>
            </div>
          ))}
        </div>

        <FadeIn className="mt-12">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border p-6"
            style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}
          >
            <div>
              <p className="text-[15px] font-semibold mb-1" style={{ color: "var(--page-text)" }}>
                Ainda tens dúvidas?
              </p>
              <p className="text-[13px]" style={{ color: "var(--page-text-faint)" }}>
                Fala directamente com o Nuno — o fundador responde pessoalmente.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://calendly.com/nuno-dasilvajorge/15m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-5 py-2.5 rounded-xl text-[14px] transition-colors duration-150"
              >
                Marcar 15 min
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={DEMO_URL}
                className="flex items-center gap-2 border font-semibold px-5 py-2.5 rounded-xl text-[14px] transition-colors duration-150"
                style={{ borderColor: "var(--page-border)", color: "var(--page-text-muted)" }}
              >
                Ver demo
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
