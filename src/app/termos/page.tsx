import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Termos de Serviço — Bernays",
  description: "Termos e condições de utilização do Bernays.",
  robots: "noindex, nofollow",
}

const sections = [
  { id: "aceitacao", label: "1. Aceitação" },
  { id: "servico", label: "2. O serviço" },
  { id: "contas", label: "3. Contas e uso aceitável" },
  { id: "subscricao", label: "4. Subscrição e faturação" },
  { id: "dados", label: "5. Os teus dados" },
  { id: "propriedade", label: "6. Propriedade intelectual" },
  { id: "disponibilidade", label: "7. Disponibilidade e garantias" },
  { id: "responsabilidade", label: "8. Limitação de responsabilidade" },
  { id: "rescisao", label: "9. Rescisão e cancelamento" },
  { id: "alteracoes", label: "10. Alterações aos termos" },
  { id: "lei", label: "11. Lei aplicável e resolução de litígios" },
  { id: "geral", label: "12. Disposições gerais" },
]

export default function TermosPage() {
  return (
    <main style={{ background: "var(--page-bg)" }}>
      <Nav />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div className="relative mb-12 pb-8 border-b overflow-hidden" style={{ borderColor: "var(--page-border)" }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 100% at 50% 100%, oklch(0.581 0.243 263 / 0.06) 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <p className="text-sm font-semibold text-brand tracking-widest uppercase mb-3">Legal</p>
            <h1
              className="text-[clamp(32px,5vw,52px)] font-extrabold tracking-[-0.035em] leading-tight mb-4"
              style={{ color: "var(--page-text)" }}
            >
              Termos de Serviço
            </h1>
            <p className="text-[14px]" style={{ color: "var(--page-text-faint)" }}>
              Última actualização: Maio de 2026
            </p>
          </div>
        </div>

        {/* Intro */}
        <p className="text-[16px] leading-relaxed mb-10" style={{ color: "var(--page-text-muted)" }}>
          Estes termos regem a relação entre o Bernays e as organizações que utilizam o serviço. O Bernays é um produto B2B — os clientes são agências de Relações Públicas e os seus colaboradores, não consumidores individuais. Ao utilizares o serviço, aceitas as condições aqui descritas. São simples e directos.
        </p>

        {/* Index */}
        <nav className="rounded-2xl border p-5 mb-12" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
          <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: "var(--page-text-faint)" }}>
            Índice
          </p>
          <ol className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-[14px] text-brand hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12" style={{ color: "var(--page-text-muted)" }}>

          <section id="aceitacao">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              1. Aceitação
            </h2>
            <p className="text-[15px] leading-relaxed">
              Ao acederes ao Bernays, criares uma conta ou utilizares qualquer funcionalidade do serviço, a tua organização aceita ficar vinculada a estes Termos de Serviço e à nossa{" "}
              <a href="/privacidade" className="text-brand hover:underline">Política de Privacidade</a>.
              {" "}Se representas uma organização, confirmas ter autoridade para aceitar estes termos em seu nome. Se não concordares com algum destes termos, não deves utilizar o serviço.
            </p>
          </section>

          <section id="servico">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              2. O serviço
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              O Bernays é um software de gestão (ERP) desenvolvido especificamente para agências de Relações Públicas, disponível como serviço por subscrição (SaaS). Inclui seis módulos integrados: Crescimento, Delivery, Financeiro, Pessoas, Escritório e Workspace.
            </p>
            <p className="text-[15px] leading-relaxed">
              O acesso ao serviço é concedido mediante subscrição activa e válida. Reservamo-nos o direito de modificar, melhorar, suspender ou descontinuar funcionalidades com aviso prévio razoável, excepto em situações de emergência de segurança que exijam acção imediata.
            </p>
          </section>

          <section id="contas">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              3. Contas e uso aceitável
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              És responsável por manter a confidencialidade das credenciais de acesso de todos os utilizadores da tua organização e por todas as actividades realizadas nas respectivas contas.
            </p>
            <p className="text-[15px] leading-relaxed mb-3">É expressamente proibido:</p>
            <ul className="space-y-2 text-[15px] leading-relaxed mb-4">
              {[
                "Partilhar credenciais com pessoas externas à organização subscritora.",
                "Ceder, sublicenciar ou revender o acesso ao serviço a terceiros.",
                "Utilizar o Bernays para fins ilegais, fraudulentos ou em violação dos direitos de terceiros.",
                "Tentar aceder a dados de outras organizações, contornar mecanismos de segurança ou realizar engenharia reversa do software.",
                "Utilizar o serviço para enviar comunicações não solicitadas (spam) ou para actividades de phishing.",
                "Sobrecarregar deliberadamente a infraestrutura do serviço (ataques de negação de serviço).",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand mt-1 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[15px] leading-relaxed">
              O incumprimento destas regras pode resultar na suspensão imediata da conta, sem direito a reembolso do período não utilizado.
            </p>
          </section>

          <section id="subscricao">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              4. Subscrição e faturação
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed">
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Planos e ciclos de faturação</p>
                <p>O Bernays está disponível em planos mensais e anuais. O plano anual equivale a 10 meses pagos (desconto de aproximadamente 17%). Todos os planos incluem todos os módulos — não há funcionalidades reservadas a tiers superiores nem add-ons obrigatórios.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Renovação automática</p>
                <p>As subscrições renovam-se automaticamente no final de cada ciclo de faturação, ao mesmo preço, salvo aviso prévio de alteração. Podes cancelar a qualquer momento antes da data de renovação sem encargos adicionais — a subscrição mantém-se activa até ao final do período já pago.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Adição de utilizadores (pro-rata)</p>
                <p>Utilizadores adicionais podem ser adicionados a qualquer momento. O custo é calculado pro-rata para os dias restantes do ciclo de faturação em curso, evitando cobranças duplas.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Reembolsos</p>
                <p>Oferecemos reembolso integral nos primeiros 14 dias após o primeiro pagamento de cada subscrição, sem necessidade de justificação. Após esse período, os pagamentos não são reembolsáveis, excepto nos casos expressamente previstos na lei portuguesa aplicável.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Impostos</p>
                <p>Os preços indicados não incluem IVA. O IVA à taxa legal em vigor será adicionado na fatura, com identificação do NIF do cliente quando aplicável.</p>
              </div>
            </div>
          </section>

          <section id="dados">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              5. Os teus dados
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Os dados que a tua organização introduz no Bernays — clientes, projectos, facturas, timesheets, documentos e qualquer outro conteúdo — são e permanecem propriedade da tua organização. O Bernays não reivindica qualquer direito de propriedade sobre esse conteúdo.
            </p>
            <p className="text-[15px] leading-relaxed mb-4">
              Ao utilizares o serviço, concedes ao Bernays uma licença limitada para armazenar, processar e transmitir esses dados exclusivamente para fins de prestação do serviço contratado.
            </p>
            <p className="text-[15px] leading-relaxed">
              Podes exportar os teus dados a qualquer momento em formatos standard (CSV, PDF, SAF-T) sem custo adicional. Após o cancelamento da subscrição, os dados ficam disponíveis para exportação durante 30 dias. Findo esse prazo, são eliminados permanentemente e de forma irrecuperável.
            </p>
          </section>

          <section id="propriedade">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              6. Propriedade intelectual
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              O software Bernays, incluindo o código-fonte, design, marca, logotipo e documentação, é propriedade exclusiva de Nuno da Silva Jorge e está protegido por legislação de direitos de autor, marcas registadas e propriedade intelectual aplicável em Portugal e internacionalmente.
            </p>
            <p className="text-[15px] leading-relaxed">
              A subscrição confere uma licença limitada, não exclusiva, não transferível e revogável para utilizar o serviço durante o período de vigência da subscrição. Esta licença não inclui o direito de copiar, modificar, distribuir, vender, sublicenciar ou criar obras derivadas do Bernays, no todo ou em parte.
            </p>
          </section>

          <section id="disponibilidade">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              7. Disponibilidade e garantias
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              O serviço é fornecido <em>"tal como está"</em> e <em>"conforme disponível"</em>, sem garantias expressas ou implícitas de qualquer tipo, incluindo, mas não se limitando a, garantias de comercialização, adequação a um fim específico ou não violação de direitos de terceiros.
            </p>
            <p className="text-[15px] leading-relaxed mb-4">
              O Bernays está numa fase inicial de operação. Envidamos todos os esforços para garantir a disponibilidade contínua do serviço e realizamos backups automáticos diários. Contudo, não oferecemos um Acordo de Nível de Serviço (SLA) com garantia contratual de uptime nesta fase.
            </p>
            <p className="text-[15px] leading-relaxed">
              Manutenções programadas serão anunciadas com a maior antecedência possível. Poderão ocorrer interrupções não planeadas decorrentes de factores fora do nosso controlo razoável (force majeure, falhas de infraestrutura de terceiros, etc.).
            </p>
          </section>

          <section id="responsabilidade">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              8. Limitação de responsabilidade
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Na máxima extensão permitida pela lei portuguesa, o Bernays não é responsável por quaisquer danos indirectos, incidentais, especiais, consequentes ou punitivos, incluindo perda de lucros, perda de dados, perda de clientela ou interrupção de actividade, resultantes da utilização ou impossibilidade de utilização do serviço, mesmo que tenha sido avisado da possibilidade de tais danos.
            </p>
            <p className="text-[15px] leading-relaxed">
              Em qualquer caso, a responsabilidade total agregada do Bernays perante a tua organização, por qualquer causa e independentemente da forma de acção, não excederá o valor total efectivamente pago pelo serviço nos 12 meses imediatamente anteriores ao evento que deu origem à reclamação.
            </p>
          </section>

          <section id="rescisao">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              9. Rescisão e cancelamento
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Podes cancelar a tua subscrição a qualquer momento através das definições da conta ou por email para{" "}
              <a href="mailto:bernaysapp@gmail.com" className="text-brand hover:underline">bernaysapp@gmail.com</a>.
              {" "}O cancelamento produz efeitos no final do ciclo de faturação em curso — não há reembolso pro-rata pelo tempo restante, salvo aplicação da garantia de 14 dias prevista na cláusula 4.
            </p>
            <p className="text-[15px] leading-relaxed">
              O Bernays reserva-se o direito de suspender ou encerrar contas que violem estes termos. Em caso de violação grave (fraude, acesso não autorizado, actividade ilegal), a suspensão pode ser imediata e sem aviso prévio. Em casos menos graves, notificaremos previamente e concederemos um prazo razoável para rectificação.
            </p>
          </section>

          <section id="alteracoes">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              10. Alterações aos termos
            </h2>
            <p className="text-[15px] leading-relaxed">
              Podemos actualizar estes termos para reflectir alterações ao serviço, à legislação aplicável ou às nossas práticas comerciais. Em caso de alterações materiais — que afectem direitos ou obrigações das partes — notificaremos os utilizadores activos por email com pelo menos 30 dias de antecedência. A utilização continuada do serviço após esse prazo constitui aceitação dos novos termos. Se não concordares com as alterações, podes cancelar a subscrição antes da entrada em vigor das mesmas.
            </p>
          </section>

          <section id="lei">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              11. Lei aplicável e resolução de litígios
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Estes termos são regidos e interpretados nos termos do Direito português, com exclusão das suas normas de conflito de leis.
            </p>
            <p className="text-[15px] leading-relaxed">
              Qualquer litígio emergente da interpretação, validade ou execução destes termos que não seja resolvido amigavelmente entre as partes será submetido à competência exclusiva dos tribunais da comarca de Lisboa, com renúncia expressa a qualquer outro foro ou jurisdição.
            </p>
          </section>

          <section id="geral">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              12. Disposições gerais
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed">
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Acordo integral</p>
                <p>Estes Termos de Serviço, juntamente com a Política de Privacidade, constituem o acordo integral entre as partes relativamente ao objecto aqui tratado e substituem todos os acordos, representações e entendimentos anteriores.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Divisibilidade</p>
                <p>Se qualquer disposição destes termos for considerada inválida, ilegal ou inaplicável por um tribunal competente, as restantes disposições mantêm-se em pleno vigor e efeito.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Renúncia</p>
                <p>A não aplicação ou exercício de qualquer direito previsto nestes termos não constitui renúncia a esse direito em situações futuras.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Força maior</p>
                <p>Nenhuma das partes é responsável por atrasos ou incumprimentos resultantes de causas fora do seu controlo razoável, incluindo falhas de telecomunicações, desastres naturais ou actos de autoridade governamental.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Contact strip */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--page-border)" }}>
          <p className="text-[14px]" style={{ color: "var(--page-text-faint)" }}>
            Questões sobre estes termos?{" "}
            <a href="mailto:bernaysapp@gmail.com" className="text-brand hover:underline">
              bernaysapp@gmail.com
            </a>
          </p>
        </div>

      </article>
      <Footer />
    </main>
  )
}
