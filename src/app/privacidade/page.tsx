import type { Metadata } from "next"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidade — Bernays",
  description: "Como o Bernays recolhe, utiliza e protege os teus dados pessoais.",
  robots: "noindex, nofollow",
}

const sections = [
  { id: "responsavel", label: "1. Responsável pelo tratamento" },
  { id: "dados", label: "2. Dados recolhidos" },
  { id: "finalidade", label: "3. Finalidade e base jurídica" },
  { id: "subprocessadores", label: "4. Subprocessadores" },
  { id: "conservacao", label: "5. Conservação" },
  { id: "direitos", label: "6. Direitos do titular" },
  { id: "exercer", label: "7. Como exercer os direitos" },
  { id: "autoridade", label: "8. Autoridade de controlo" },
  { id: "cookies", label: "9. Cookies e armazenamento local" },
  { id: "alteracoes", label: "10. Alterações à política" },
]

const subprocessors = [
  {
    name: "Neon, Inc.",
    purpose: "Base de dados — onde são armazenados todos os dados da conta e da agência",
    location: "EUA",
    note: "Cláusulas Contratuais Padrão da UE (SCCs) aplicáveis",
  },
  {
    name: "Vercel Inc.",
    purpose: "Alojamento da aplicação e da landing page",
    location: "EUA",
    note: "Cláusulas Contratuais Padrão da UE (SCCs) aplicáveis",
  },
  {
    name: "Resend",
    purpose: "Envio de emails transaccionais (confirmações, notificações)",
    location: "EUA",
    note: "Cláusulas Contratuais Padrão da UE (SCCs) aplicáveis",
  },
  {
    name: "Stripe Inc.",
    purpose: "Processamento de pagamentos e gestão de subscrições (quando activo)",
    location: "EUA",
    note: "Cláusulas Contratuais Padrão da UE (SCCs) aplicáveis",
  },
]

export default function PrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <p className="text-[14px]" style={{ color: "var(--page-text-faint)" }}>
              Última actualização: Maio de 2026
            </p>
          </div>
        </div>

        {/* Intro */}
        <p className="text-[16px] leading-relaxed mb-10" style={{ color: "var(--page-text-muted)" }}>
          A tua privacidade é levada a sério. Esta política explica que dados recolhemos, para quê, durante quanto tempo e quais são os teus direitos — em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD, Regulamento UE 2016/679).
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

          <section id="responsavel">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              1. Responsável pelo tratamento
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              O responsável pelo tratamento dos dados pessoais recolhidos através do Bernays é:
            </p>
            <div className="rounded-xl border p-4 text-[14px] leading-relaxed space-y-1" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
              <p><strong style={{ color: "var(--page-text)" }}>Nuno da Silva Jorge</strong></p>
              <p>Bernays — Software de operações para agências de RP</p>
              <p>Email: <a href="mailto:bernaysapp@gmail.com" className="text-brand hover:underline">bernaysapp@gmail.com</a></p>
            </div>
            <p className="text-[13px] mt-3 leading-relaxed" style={{ color: "var(--page-text-faint)" }}>
              O Bernays é uma empresa de pequena dimensão sem Encarregado de Proteção de Dados (EPD) formalmente designado. Para todas as questões de privacidade, contacta diretamente o responsável pelo tratamento através do email acima.
            </p>
          </section>

          <section id="dados">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              2. Dados recolhidos
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Recolhemos apenas os dados estritamente necessários para cada finalidade:
            </p>
            <ul className="space-y-3 text-[15px] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Formulário de lista de espera e acesso académico:</strong> endereço de email.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Conta de utilizador:</strong> nome, email, nome da empresa, cargo. Dados de faturação (número de cartão, NIF) são processados diretamente pelo Stripe — nunca passam pelos nossos servidores.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Dados da agência (conteúdo):</strong> clientes, projectos, facturas, timesheets, documentos e outros dados introduzidos pelos utilizadores no âmbito das suas operações.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Dados de sessão:</strong> tokens de autenticação para manter a sessão activa, armazenados em cookies seguros (HttpOnly, Secure).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Dados técnicos:</strong> endereço IP e tipo de browser, recolhidos automaticamente para fins de segurança e diagnóstico. <strong style={{ color: "var(--page-text)" }}>Não utilizamos nenhuma ferramenta de analítica de terceiros</strong> (Google Analytics, Mixpanel, etc.).</span>
              </li>
            </ul>
          </section>

          <section id="google">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              2.1. Dados de contas Google
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Se optares por ligar a tua conta Google ao Bernays, o acesso é feito por OAuth e limita-se ao estritamente necessário para a funcionalidade que escolheres:
            </p>
            <ul className="space-y-3 text-[15px] leading-relaxed mb-4">
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Envio de email (âmbito <code>gmail.send</code>):</strong> usado exclusivamente para enviar, a partir do teu próprio endereço, mensagens que compões e envias explicitamente na interface do Bernays (por exemplo, pitches a jornalistas). Este âmbito <strong style={{ color: "var(--page-text)" }}>não dá acesso de leitura</strong> à tua caixa de correio: o Bernays não lê, não armazena e não analisa o conteúdo das tuas mensagens recebidas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Dados guardados:</strong> apenas o endereço da conta ligada e os tokens OAuth necessários para enviar em teu nome, armazenados de forma cifrada. Podes desligar a conta a qualquer momento nas definições do Bernays ou revogar o acesso diretamente na tua conta Google — em ambos os casos os tokens deixam de ser utilizáveis.</span>
              </li>
            </ul>
            <p className="text-[15px] leading-relaxed">
              A utilização de dados recebidos das APIs da Google cumpre a <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Google API Services User Data Policy</a>, incluindo os requisitos de Utilização Limitada (Limited Use): estes dados <strong style={{ color: "var(--page-text)" }}>nunca são vendidos, nunca são usados para publicidade e nunca são usados para treinar modelos de IA/ML</strong>. Nenhum humano acede a estes dados, salvo com o teu consentimento explícito, por razões de segurança (investigação de abuso), para cumprir obrigações legais, ou de forma agregada e anonimizada para operação interna do serviço.
            </p>
          </section>

          <section id="finalidade">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              3. Finalidade e base jurídica
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed">
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Gestão da lista de espera e comunicações de produto</p>
                <p>Base jurídica: consentimento do titular (Art. 6.º, n.º 1, al. a) do RGPD). Podes revogar a qualquer momento respondendo a qualquer email com "cancelar subscrição" ou contactando-nos.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Prestação do serviço e execução do contrato de subscrição</p>
                <p>Base jurídica: execução de contrato (Art. 6.º, n.º 1, al. b) do RGPD). O tratamento é necessário para criar e gerir a conta, autenticar o utilizador e fornecer os módulos contratados.</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: "var(--page-text)" }}>Segurança, prevenção de fraude e cumprimento de obrigações legais</p>
                <p>Base jurídica: interesse legítimo (Art. 6.º, n.º 1, al. f) do RGPD) e cumprimento de obrigação legal (al. c)), nomeadamente para obrigações fiscais e contabilísticas.</p>
              </div>
            </div>
          </section>

          <section id="subprocessadores">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              4. Subprocessadores
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Recorremos a terceiros de confiança para operar o serviço. Todos os subprocessadores localizados fora da União Europeia processam dados ao abrigo das Cláusulas Contratuais Padrão da UE (Standard Contractual Clauses — SCCs), aprovadas pela Comissão Europeia como mecanismo de transferência adequado.
            </p>
            <div className="space-y-3">
              {subprocessors.map((sp) => (
                <div key={sp.name} className="rounded-xl border p-4 text-[14px] leading-relaxed" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
                  <p className="font-semibold mb-0.5" style={{ color: "var(--page-text)" }}>{sp.name}</p>
                  <p>{sp.purpose}</p>
                  <p className="text-[12px] mt-1" style={{ color: "var(--page-text-faint)" }}>{sp.location} · {sp.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="conservacao">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              5. Conservação
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Os dados são conservados apenas pelo tempo necessário para as finalidades que motivaram a sua recolha:
            </p>
            <ul className="space-y-3 text-[15px] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Emails da lista de espera:</strong> eliminados 2 anos após a última interacção ou imediatamente após revogação do consentimento.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Dados de conta e da agência:</strong> eliminados 30 dias após o cancelamento da subscrição, período durante o qual estão disponíveis para exportação.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Dados de faturação:</strong> conservados 10 anos nos termos da legislação fiscal portuguesa (CIRS, CIRC e Código do IVA).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Dados técnicos (logs):</strong> eliminados automaticamente ao fim de 90 dias.</span>
              </li>
            </ul>
          </section>

          <section id="direitos">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              6. Direitos do titular
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Nos termos do RGPD, tens os seguintes direitos, exercíveis a qualquer momento:
            </p>
            <ul className="space-y-3 text-[15px] leading-relaxed">
              {[
                ["Acesso (Art. 15.º)", "Obteres uma cópia dos dados que temos sobre ti e informação sobre como são tratados."],
                ["Rectificação (Art. 16.º)", "Corrigires dados incorrectos, desactualizados ou incompletos."],
                ["Apagamento (Art. 17.º)", "Solicitares a eliminação dos teus dados ('direito a ser esquecido'), quando aplicável."],
                ["Portabilidade (Art. 20.º)", "Receberes os teus dados num formato estruturado, de uso corrente e legível por máquina."],
                ["Oposição (Art. 21.º)", "Opores-te ao tratamento baseado em interesse legítimo ou para fins de marketing directo."],
                ["Limitação (Art. 18.º)", "Restringires o tratamento em determinadas circunstâncias previstas no RGPD."],
                ["Retirada do consentimento", "Quando o tratamento se baseia no teu consentimento, podes retirá-lo a qualquer momento sem que isso afecte a licitude do tratamento anterior."],
              ].map(([right, desc]) => (
                <li key={right} className="flex gap-3">
                  <span className="text-brand mt-1 shrink-0">·</span>
                  <span><strong style={{ color: "var(--page-text)" }}>{right}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="exercer">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              7. Como exercer os direitos
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              Envia um email para{" "}
              <a href="mailto:bernaysapp@gmail.com" className="text-brand hover:underline">bernaysapp@gmail.com</a>
              {" "}com o assunto <em>"Exercício de direitos RGPD"</em> e indica claramente:
            </p>
            <ul className="space-y-2 text-[15px] leading-relaxed mb-4">
              {[
                "O direito que pretendes exercer.",
                "Identificação suficiente para verificar a tua identidade (email de conta registada).",
                "Qualquer detalhe adicional que nos ajude a localizar os teus dados.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand mt-1 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[15px] leading-relaxed">
              Responderemos no prazo máximo de 30 dias (Art. 12.º do RGPD). Em caso de pedidos complexos ou numerosos, este prazo pode ser prorrogado por mais 60 dias, com notificação prévia.
            </p>
          </section>

          <section id="autoridade">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              8. Autoridade de controlo
            </h2>
            <p className="text-[15px] leading-relaxed mb-3">
              Se considerares que o tratamento dos teus dados viola o RGPD, tens o direito de apresentar reclamação junto da autoridade de controlo competente em Portugal, sem prejuízo de qualquer outro meio de recurso administrativo ou judicial:
            </p>
            <div className="rounded-xl border p-4 text-[14px] leading-relaxed space-y-1" style={{ background: "var(--page-card)", borderColor: "var(--page-border)" }}>
              <p className="font-semibold" style={{ color: "var(--page-text)" }}>Comissão Nacional de Proteção de Dados (CNPD)</p>
              <p><a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.cnpd.pt</a></p>
              <p>Tel. +351 213 928 400</p>
              <p>Rua de São Bento, 148-3.º — 1200-821 Lisboa</p>
            </div>
          </section>

          <section id="cookies">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              9. Cookies e armazenamento local
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              O Bernays utiliza cookies e armazenamento local de forma minimalista e transparente:
            </p>
            <ul className="space-y-3 text-[15px] leading-relaxed mb-4">
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>Cookie de sessão (HttpOnly, Secure):</strong> necessário para autenticação. Sem este cookie, não é possível manter a sessão activa. Base jurídica: execução do contrato.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>localStorage — preferência de tema:</strong> armazena a preferência dark/light mode. Sem expiração; eliminado ao limpar os dados do browser.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand mt-1 shrink-0">·</span>
                <span><strong style={{ color: "var(--page-text)" }}>localStorage — aceitação do aviso de cookies:</strong> registo de que o aviso foi apresentado e aceite.</span>
              </li>
            </ul>
            <p className="text-[15px] leading-relaxed">
              <strong style={{ color: "var(--page-text)" }}>Não utilizamos cookies de rastreio, analítica de terceiros, retargeting publicitário nem qualquer outra tecnologia de monitorização comportamental.</strong>
            </p>
          </section>

          <section id="alteracoes">
            <h2 className="text-[20px] font-bold mb-3" style={{ color: "var(--page-text)" }}>
              10. Alterações à política
            </h2>
            <p className="text-[15px] leading-relaxed">
              Reservamo-nos o direito de actualizar esta política para reflectir alterações ao serviço, à legislação aplicável ou às nossas práticas de privacidade. Em caso de alterações materiais aos direitos dos titulares ou às finalidades de tratamento, notificaremos os utilizadores registados por email com pelo menos 30 dias de antecedência. A data de "última actualização" no topo desta página reflecte sempre a versão em vigor.
            </p>
          </section>

        </div>

        {/* Contact strip */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--page-border)" }}>
          <p className="text-[14px]" style={{ color: "var(--page-text-faint)" }}>
            Questões sobre privacidade?{" "}
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
