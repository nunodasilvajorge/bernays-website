import {
  TrendingUp,
  CheckSquare,
  Receipt,
  Users,
  Building2,
  LayoutDashboard,
  Sparkles,
} from "lucide-react"

export interface Feature {
  title: string
  desc: string
}

export interface Module {
  id: string
  label: string
  icon: React.ReactNode
  color: string
  tagline: string
  description: string
  features: Feature[]
}

export const modules: Module[] = [
  {
    id: "crescimento",
    label: "Crescimento",
    icon: <TrendingUp size={16} strokeWidth={1.75} />,
    color: "#2257ff",
    tagline: "CRM, pipeline e propostas",
    description:
      "Do primeiro contacto ao contrato assinado — e muito depois disso. O Crescimento é a gestão comercial completa da agência: pipeline de oportunidades, CRM de clientes, propostas com e-signature e forecast de receita. Não é uma ferramenta de vendas adaptada de outro sector — é o sistema de gestão comercial que uma agência de RP precisa.",
    features: [
      { title: "Pipeline por etapas", desc: "Cada oportunidade com valor, probabilidade e data de fecho. Sabes sempre quanto está em jogo e quando o negócio deve fechar." },
      { title: "Propostas com aceitação digital", desc: "O cliente aceita a proposta online — nome, email e IP registados. Rastreável, legal e sem DocuSign à parte." },
      { title: "Deal → Projecto automático", desc: "Negócio ganho cria automaticamente o projecto de delivery com briefing e equipa pré-definidos. Zero duplicação manual." },
      { title: "Forecast de receita", desc: "Probabilidade por deal convertida em receita esperada por mês — sem wishful thinking, com visibilidade real sobre o pipeline." },
      { title: "CRM completo", desc: "Da lead ao cliente activo: histórico, empresa, contactos e valor acumulado centralizados numa única ficha." },
      { title: "Gestão de contactos", desc: "Todos os interlocutores com conversas, emails e reuniões associadas automaticamente — sem depender da memória de ninguém." },
      { title: "Taxa de conversão por etapa", desc: "Sabes exactamente em que ponto do pipeline perdes negócio — e com que frequência. Dados para melhorar, não só para reportar." },
      { title: "Registo de actividade", desc: "Calls, emails e reuniões registados cronologicamente. O próximo commercial sabe tudo o que aconteceu antes de pegar no telefone." },
      { title: "Follow-up sem falhas", desc: "Próximos passos definidos e atribuídos em cada deal — nada cai por falta de seguimento ou troca de responsável." },
      { title: "Modelos de proposta", desc: "Biblioteca de templates por tipo de cliente e serviço — proposta profissional enviada em minutos, consistente em toda a equipa." },
      { title: "Alertas de renovação", desc: "Aviso antes do contrato terminar — nunca mais um cliente que saiu sem avisar por falta de comunicação proactiva." },
      { title: "Segmentação de clientes", desc: "Filtra por sector, tipologia, serviço, valor ou qualquer critério que criares. Análise do portefólio sem exportar para Excel." },
      { title: "Histórico por empresa", desc: "Tudo o que aconteceu com cada conta desde o primeiro contacto: propostas, projectos, faturas e conversas." },
      { title: "Score de saúde do cliente", desc: "Indicador de risco por conta baseado em actividade recente, cobranças em atraso e satisfação — ver o problema antes de ele aparecer." },
      { title: "Relatório de pipeline", desc: "Fotografia completa em qualquer momento: deals por etapa, valor total, responsável e probabilidade ponderada." },
      { title: "Reuniões integradas", desc: "Reuniões associadas a deals ou clientes com acta, decisões e follow-ups registados — contexto sempre disponível." },
      { title: "Importação de contactos", desc: "Migra a lista de contactos existente sem perder um campo. Começa com o histórico que já tens." },
      { title: "Propostas colaborativas com e-signature", desc: "Cria e edita propostas em equipa em tempo real. Envia por link, recebe assinatura digital — sem Word, sem email." },
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    icon: <CheckSquare size={16} strokeWidth={1.75} />,
    color: "#7c3aed",
    tagline: "Projectos, tarefas e rentabilidade",
    description:
      "Tudo o que a equipa entrega aos clientes, visível num só lugar. Do briefing ao relatório de coverage, passando por projectos, tarefas, timesheets, calendários editoriais e listas de media. O Delivery é o motor operacional da agência — onde o trabalho acontece e onde a rentabilidade se forma, hora a hora.",
    features: [
      { title: "Saúde de projecto", desc: "Semáforo por projecto: horas consumidas, orçamento restante e deadline. O gestor vê o desvio antes de o cliente sentir." },
      { title: "Planeamento de capacidade", desc: "Horas disponíveis vs. alocadas por consultor em tempo real — sabes quem tem espaço antes de aceitar mais trabalho." },
      { title: "Rentabilidade por projecto", desc: "Horas vs. orçamento por projecto e por consultor — margem real em vez de estimativas no final do mês." },
      { title: "De proposta a fatura", desc: "Proposta aprovada cria projecto; projecto encerrado gera fatura. Tudo ligado, nada copiado." },
      { title: "Aprovação de deliverables", desc: "Conteúdos e documentos submetidos, revistos e aprovados no Bernays — cliente aprova directamente no portal, sem email em loop." },
      { title: "Tarefas e deadlines", desc: "Atribuídas, priorizadas e visíveis por toda a equipa — ninguém fica sem saber o que fazer nem quem é responsável." },
      { title: "Timesheet integrada", desc: "Cada hora registada converte directamente em custo real do projecto — sem reconciliação manual no final do mês." },
      { title: "Vista Gantt", desc: "Planeamento de campanha com dependências e marcos num único ecrã — visibilidade de tudo o que precisa de acontecer e em que ordem." },
      { title: "Kanban de tarefas", desc: "Quadro visual por estado — útil para equipas que gerem trabalho em fluxo contínuo e querem ver o que está a avançar." },
      { title: "Templates de projecto", desc: "Onboarding de novos mandatos em minutos com estrutura pré-definida por tipologia de cliente. Menos setup, mais trabalho." },
      { title: "Milestones e dependências", desc: "Entregas ligadas em sequência — ninguém começa uma tarefa sem que a anterior esteja resolvida." },
      { title: "Alertas de orçamento", desc: "Notificação quando um projecto se aproxima do limite — antes de ultrapassar, não depois de acontecer." },
      { title: "Actas de reunião", desc: "Decisões registadas, follow-ups atribuídos, histórico preservado no projecto — sem 'mas ficou decidido que...' sem prova." },
      { title: "Gestão de documentos", desc: "Ficheiros, versões e assets de cada projecto centralizados — sem links quebrados no email nem pastas impossíveis de encontrar." },
      { title: "Briefings e deliverables", desc: "Documento de briefing associado ao projecto desde o primeiro dia — contexto sempre disponível para toda a equipa." },
      { title: "Portal do cliente", desc: "Partilha de documentos e aprovações com o cliente em ambiente controlado — sem expor dados internos da agência." },
    ],
  },
  {
    id: "financeiro",
    label: "Financeiro",
    icon: <Receipt size={16} strokeWidth={1.75} />,
    color: "#059669",
    tagline: "Faturação certificada, cobranças e P&L",
    description:
      "Não é contabilidade — é inteligência financeira em tempo real. O módulo Financeiro cobre faturação certificada AT, retainers automáticos, cobranças, P&L por cliente e exportação SAF-T. O objectivo é claro: que o sócio saiba exactamente quanto a agência ganha — por cliente, por projecto, por mês — sem esperar pelo fim do trimestre.",
    features: [
      { title: "Faturação certificada AT via InvoiceXpress", desc: "Emite facturas conformes com ATCUD. Integração nativa com InvoiceXpress — sem configuração manual, sem risco de incumprimento." },
      { title: "Retainers automáticos", desc: "Configuras uma vez; o Bernays emite mensalmente. Retainer nunca esquecido, cliente nunca surpreendido." },
      { title: "P&L por cliente", desc: "Receita, custo e margem de cada conta num único ecrã — sabes quais os clientes que sustentam a agência e quais os que a drenam." },
      { title: "Cashflow em tempo real", desc: "Previsão de tesouraria actualizada com o que está emitido, o que está pago e o que está em atraso. Sem surpresas no final do mês." },
      { title: "Análise de margens", desc: "Os clientes mais rentáveis identificados automaticamente. Dados para decidir onde investir tempo da equipa — e onde não." },
      { title: "Alertas de pagamento", desc: "Lembretes automáticos de facturas vencidas — nunca mais o sócio a perseguir pagamentos em atraso manualmente." },
      { title: "Contas a pagar", desc: "Registo de facturas de fornecedores e despesas a liquidar — visibilidade completa do que sai da conta, não apenas do que entra." },
      { title: "Dashboard financeiro", desc: "Receita total, outstanding, vencido e desvios de orçamento num único painel — o estado financeiro da agência de relance." },
      { title: "Despesas imputadas", desc: "Despesas categorizadas e atribuídas ao projecto que as gerou — custo real em vez de estimativa nas margens." },
      { title: "Catálogo de serviços", desc: "Preçários por tipologia disponíveis a toda a equipa — proposta consistente sem depender do sócio para confirmar valores." },
      { title: "Exportação SAF-T", desc: "Ficheiro SAF-T gerado em segundos e enviado ao contabilista — conformidade fiscal sem trabalho manual." },
      { title: "Multi-moeda", desc: "Faturação em EUR, USD, GBP ou outra moeda para clientes internacionais — sem conversões manuais nem erros de câmbio." },
      { title: "Reconciliação de pagamentos", desc: "Marca faturas como pagas com referência de transferência — histórico limpo, sem dúvidas sobre o que foi liquidado." },
      { title: "Notas de crédito", desc: "Emissão directa na plataforma — correcções de faturação resolvidas em segundos, com rastreio completo." },
      { title: "Proformas", desc: "Documento de pré-faturação enviado antes da prestação — útil para clientes que exigem aprovação interna antes de pagar." },
      { title: "Centros de custo", desc: "Agrupamento de despesas por departamento ou área — controlo granular para agências com estrutura de negócio diversificada." },
      { title: "Portal de cliente", desc: "O teu cliente acompanha o projecto, aprova entregáveis e consulta facturas — sem precisar de conta no Bernays." },
    ],
  },
  {
    id: "pessoas",
    label: "Pessoas",
    icon: <Users size={16} strokeWidth={1.75} />,
    color: "#f59e0b",
    tagline: "Recursos humanos e gestão de equipa",
    description:
      "Toda a área de recursos humanos numa única plataforma. Da contratação à avaliação de performance, passando por férias, capacidade, competências e desenvolvimento de carreira. O módulo de Pessoas garante que o sócio sabe sempre quem está disponível, quem está sobrecarregado e como a equipa está a crescer.",
    features: [
      { title: "Alocação da equipa", desc: "Vista agregada de horas alocadas por consultor e projecto — decisão de capacidade baseada em dados, não em intuição." },
      { title: "Disponibilidade em tempo real", desc: "Quem está disponível, em reunião, de férias ou a trabalhar remotamente — sem ter de perguntar a ninguém." },
      { title: "Pedidos de férias", desc: "Fluxo de aprovação integrado com calendário partilhado — ausências aprovadas, registadas e visíveis para toda a equipa." },
      { title: "Matriz de competências", desc: "Skills e especializações por consultor — aloca o profissional certo ao cliente certo, com dados em vez de intuição." },
      { title: "Avaliações de performance", desc: "Objectivos definidos e revisões periódicas documentadas — registo de crescimento e feedback por consultor." },
      { title: "Pipeline de recrutamento", desc: "Vagas, candidatos, entrevistas e decisões geridos internamente — sem depender de ferramentas externas para contratar." },
      { title: "Directório de equipa", desc: "Perfis completos, cargos, departamentos e contactos centralizados — a referência de toda a equipa numa única vista." },
      { title: "Registo de ausências", desc: "Baixas, dias de compensação e trabalho remoto registados automaticamente no calendário da equipa." },
      { title: "Trajectória de carreira", desc: "Compensações, promoções e progressão registados e acessíveis — histórico claro para conversas de desenvolvimento." },
      { title: "Checklists de onboarding", desc: "Processo de entrada documentado e acompanhado passo a passo — o novo colaborador sabe o que fazer no primeiro dia." },
      { title: "Catálogo de formação", desc: "Formações internas e certificações registadas — visibilidade sobre o desenvolvimento de competências de cada pessoa." },
      { title: "Gestão de documentos RH", desc: "Contratos, NDAs e documentação de RH num repositório seguro — acessível com permissões, nunca numa pasta partilhada." },
      { title: "Gestão de benefícios", desc: "Seguros de saúde, regalias e benefícios por colaborador registados e actualizados — transparência interna sem confusão." },
      { title: "Marcos de equipa", desc: "Aniversários de empresa e datas importantes sinalizados automaticamente — uma cultura que não esquece o que importa." },
    ],
  },
  {
    id: "escritorio",
    label: "Escritório",
    icon: <Building2 size={16} strokeWidth={1.75} />,
    color: "#06b6d4",
    tagline: "Operações, fornecedores e activos",
    description:
      "O que mantém a agência a funcionar nos bastidores. Fornecedores, activos, salas, compliance, seguros e documentação legal — tudo registado e atribuído. O módulo de Escritório elimina o caos administrativo e garante que a agência funciona com ou sem o sócio presente.",
    features: [
      { title: "Gestão de fornecedores", desc: "Contratos, contactos e histórico completo de cada fornecedor — sem depender da memória de quem fez o último pedido." },
      { title: "Gestão de subscrições SaaS", desc: "Todas as licenças e subscrições com custo mensal, datas de renovação e responsável — sem pagar ferramentas que ninguém usa." },
      { title: "Documentos legais", desc: "Contratos e documentação legal versionados e acessíveis — o advogado não precisa de pedir o mesmo documento duas vezes." },
      { title: "Documentos de compliance", desc: "Certificações e documentos regulatórios da agência num repositório único — auditoria sem stress de última hora." },
      { title: "Inventário de activos", desc: "Hardware, licenças e equipamento atribuídos e rastreáveis — sabes o que tens, onde está e quem é responsável." },
      { title: "Reserva de salas", desc: "Calendário de reservas partilhado sem conflitos — sem emails de 'está livre a sala às 14h?'." },
      { title: "Controlo de acessos", desc: "Chaves, códigos e acessos do espaço atribuídos por colaborador — registo actualizado quando a equipa muda." },
      { title: "Despesas de escritório", desc: "Gastos administrativos categorizados e imputados a centros de custo — controlo granular sem perder um recibo." },
      { title: "Gestão de seguros", desc: "Apólices, coberturas e datas de renovação centralizadas — nunca mais uma apólice expirada por falta de seguimento." },
      { title: "Gestão de utilidades", desc: "Contratos de energia, telecomunicações e serviços com datas e valores — visibilidade sobre custos fixos da agência." },
      { title: "Requisições de material", desc: "Pedidos de material com fluxo de aprovação — rastreabilidade de compras sem emails dispersos." },
      { title: "Registo de visitas", desc: "Protocolo de recepção documentado — histórico de quem visitou o espaço e em que contexto." },
    ],
  },
  {
    id: "workspace",
    label: "Workspace",
    icon: <LayoutDashboard size={16} strokeWidth={1.75} />,
    color: "#ec4899",
    tagline: "O cockpit pessoal de cada consultor",
    description:
      "Um espaço construído para cada pessoa, não para a empresa inteira. O Workspace reúne o que é relevante para o teu papel: tarefas, aprovações pendentes, horas a registar e agenda semanal — sem ter de navegar por seis módulos para perceber o que fazer a seguir.",
    features: [
      { title: "Dashboard pessoal", desc: "Os KPIs do teu papel — horas registadas, tarefas abertas, aprovações pendentes — sem informação que não é tua." },
      { title: "Inbox centralizado", desc: "Tarefas atribuídas, aprovações pendentes, alertas financeiros e reuniões numa única fila de entrada — zero dispersão." },
      { title: "As tuas tarefas", desc: "Filtradas por projecto, prioridade e deadline — o teu trabalho de hoje, sem o ruído do que toda a equipa está a fazer." },
      { title: "Calendário semanal", desc: "Reuniões, deadlines e entregas na mesma vista — tudo o que importa esta semana, sem alternar entre ferramentas." },
      { title: "Fila de aprovações", desc: "Férias, despesas, conteúdos e documentos à tua espera — nada fica bloqueado por falta de resposta." },
      { title: "Registo de horas diário", desc: "Log simplificado com sugestões automáticas baseadas nos projectos activos — timesheets preenchidas em segundos." },
      { title: "Notificações inteligentes", desc: "Alertas apenas sobre o que te afecta directamente — sem bombardeamento de notificações de equipa irrelevantes." },
      { title: "Pesquisa global", desc: "Encontra qualquer cliente, projecto, tarefa, fatura ou contacto em segundos — uma caixa de pesquisa para tudo." },
      { title: "Favoritos e fixados", desc: "Projectos, clientes e tarefas importantes marcados para acesso imediato — sem navegar de novo pelos mesmos menus." },
      { title: "Histórico de actividade", desc: "Registo do que fizeste recentemente — contexto sempre disponível quando retomas um projecto ou respondes a um email." },
      { title: "Atalhos de teclado", desc: "Regista horas, cria tarefas, abre um cliente sem tocar no rato — para quem trabalha depressa." },
      { title: "Modos de visualização", desc: "Lista, kanban ou calendário — o teu trabalho no formato que preferes, sem obrigar toda a equipa ao mesmo." },
      { title: "Resumo da semana", desc: "Fotografia do teu progresso e do que falta entregar — útil para o check-in de sexta-feira sem precisar de relatório." },
    ],
  },
  {
    id: "plataforma",
    label: "Plataforma",
    icon: <Sparkles size={16} strokeWidth={1.75} />,
    color: "#6366f1",
    tagline: "Tecnologia, segurança e experiência",
    description:
      "Os pormenores transversais que tornam o Bernays uma plataforma de primeira linha. Dark mode, autenticação segura, pesquisa global, backups automáticos, interface em português europeu e infraestrutura que não falha. São as decisões técnicas que nunca aparecem no pitch deck — mas que se sentem todos os dias.",
    features: [
      { title: "Dark mode e light mode", desc: "A interface adapta-se automaticamente ao sistema ou à tua preferência — sem extensões, sem configuração manual." },
      { title: "Português europeu nativo", desc: "Toda a plataforma em PT-PT: menus, documentos gerados, templates e mensagens de sistema — sem anglicismos nem traduções automáticas." },
      { title: "Autenticação 2FA", desc: "Segundo factor disponível em todos os planos sem custo adicional — camada extra de segurança para toda a equipa." },
      { title: "Permissões por papel", desc: "Cada membro da equipa acede apenas ao que é relevante para o seu papel — dados financeiros, RH e contratuais protegidos por defeito." },
      { title: "Backups automáticos diários", desc: "Os dados da agência protegidos com backups automáticos e retenção de 30 dias — recuperação possível a qualquer momento." },
      { title: "Exportação universal", desc: "CSV, PDF ou SAF-T — qualquer dado sai da plataforma no formato que precisas. Nunca ficas refém do Bernays." },
      { title: "RGPD compliant", desc: "Dados em servidores europeus, subprocessadores declarados, direito ao apagamento garantido. Conformidade sem trabalho extra." },
      { title: "Integrações certificadas", desc: "InvoiceXpress para faturação AT, Stripe para pagamentos, Neon para base de dados — arquitectura auditada e certificada." },
      { title: "Infraestrutura global", desc: "Alojado na Vercel Edge Network — a mesma infraestrutura que alimenta Perplexity, Vercel e Linear. 99.9% de uptime." },
      { title: "Logs de auditoria", desc: "Registo completo de quem fez o quê e quando — rastreabilidade para compliance interno e resolução de conflitos." },
      { title: "Actualizações sem interrupção", desc: "Melhorias e novas funcionalidades chegam automaticamente, sem janelas de manutenção nem interrupção do trabalho." },
      { title: "Mobile e tablet", desc: "Interface completamente funcional em qualquer dispositivo — sem app nativa obrigatória, sem funcionalidades cortadas no telemóvel." },
      { title: "Performance instantânea", desc: "Páginas que carregam em menos de 1 segundo. Sem spinners enquanto a equipa tenta trabalhar." },
      { title: "Segurança de ponta a ponta", desc: "HTTPS em todas as comunicações, base de dados com Row-Level Security activo — os dados de uma agência nunca chegam a outra." },
      { title: "Suporte directo", desc: "Acesso à equipa do Bernays por email — resposta em menos de 24 horas em dias úteis, sem chatbots nem tickets a perder-se." },
    ],
  },
]
