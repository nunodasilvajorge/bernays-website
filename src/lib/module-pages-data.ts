export type PainScenario = {
  quote: string
}

export type Capability = {
  icon: string
  title: string
  desc: string
  bullets: string[]
  image?: { light: string; dark: string; alt: string }
  imageSlotDesc?: string
}

export type FeatureGroup = {
  label: string
  featureTitles: string[]
}

export type ModulePageData = {
  id: string
  headline: string
  lead: string
  painPoints: PainScenario[]
  capabilities: Capability[]
  featureGroups: FeatureGroup[]
  relatesTo: { id: string; integrationNote: string }[]
  screenshot?: { light: string; dark: string; alt: string }
}

export const modulePages: ModulePageData[] = [
  {
    id: "crescimento",
    headline: "O pipeline que diz a verdade — mesmo quando o negócio parece correr bem.",
    lead: "A maioria das agências de RP sabe o que faturou no mês passado. Poucas sabem o que está prestes a entrar — e quase nenhuma sabe onde vai perder o próximo negócio. O módulo de Crescimento traz visibilidade real ao processo comercial: do primeiro contacto à proposta aceite, com forecast que reflecte probabilidade honesta, não optimismo de fim de trimestre.",
    painPoints: [
      { quote: "A proposta estava boa — mandámos por email há três semanas e nunca mais houve resposta. Ninguém fez follow-up porque ninguém sabia de quem era a responsabilidade." },
      { quote: "Fechámos o trimestre com menos 18% do que esperávamos. O pipeline parecia sólido, mas metade dos deals estavam empatados há dois meses sem próximos passos definidos." },
      { quote: "O nosso cliente mais antigo não renovou. Não porque estava insatisfeito — porque ninguém activou o processo de renovação a tempo e ele já tinha assinado com outro." },
    ],
    capabilities: [
      {
        icon: "TrendingUp",
        title: "Pipeline que mede o que interessa",
        desc: "O pipeline do Crescimento não é uma lista de clientes com uma coluna de valor — é um forecast real. Cada deal tem probabilidade de fecho, data esperada e receita ponderada. Sabes o que a agência vai facturar no próximo mês com base em dados, não em feeling.",
        bullets: [
          "Receita esperada por mês calculada automaticamente a partir da probabilidade de cada deal",
          "Vista por etapa com conversão histórica — sabes onde perdes negócio com regularidade",
        ],
        imageSlotDesc: "Pipeline kanban com 4-5 colunas (Qualificação, Proposta, Negociação, Ganho, Perdido). Cards de deals com valor, responsável e data de fecho. Barra de forecast no topo.",
        image: { light: "/crescimento-cap1-light.webp", dark: "/crescimento-cap1-dark.webp", alt: "Pipeline kanban do Bernays com forecast ponderado e deals por etapa" },
      },
      {
        icon: "FileCheck",
        title: "Propostas que fecham sem ciclos de email",
        desc: "Uma proposta profissional criada a partir de um template, enviada com um link de revisão, aceite digitalmente com nome e IP registados. Sem PDFs enviados por email que o cliente 'vai ver depois', sem dúvida sobre se foi lida.",
        bullets: [
          "Biblioteca de templates por tipologia de serviço: retainer, projecto pontual, assessoria de crise",
          "Aceitação digital com audit trail — nome, email, timestamp e IP registados automaticamente",
        ],
        imageSlotDesc: "Vista de detalhe de proposta: serviços listados, valor, botão 'Aceitar' ou estado 'Aceite' com data. Barra lateral com histórico de actividade.",
        image: { light: "/crescimento-cap2-light.webp", dark: "/crescimento-cap2-dark.webp", alt: "Deal ganho no Bernays com proposta aceite digitalmente e entidades ligadas" },
      },
      {
        icon: "Zap",
        title: "Deal ganho vira projecto sem copiar nada",
        desc: "Quando um deal muda para 'Ganho', o Bernays cria automaticamente o projecto no módulo de Delivery com o briefing, equipa sugerida e orçamento do deal. Nenhum gestor de conta precisa de criar o projecto de raiz — a informação comercial está toda lá desde o primeiro minuto.",
        bullets: [
          "Template de projecto associado ao tipo de deal define a estrutura inicial automaticamente",
          "Briefing e valor do contrato passam do CRM ao Delivery sem duplicação manual",
        ],
        imageSlotDesc: "Split deal→projecto: deal 'Ganho' à esquerda, projecto criado com mesmo cliente e orçamento à direita.",
        image: { light: "/crescimento-cap3-light.webp", dark: "/crescimento-cap3-dark.webp", alt: "Deal ganho no Bernays com projecto criado automaticamente em Entidades Ligadas" },
      },
    ],
    featureGroups: [
      {
        label: "Pipeline e forecast",
        featureTitles: ["Pipeline por etapas", "Forecast de receita", "Taxa de conversão por etapa", "Relatório de pipeline", "Alertas de renovação"],
      },
      {
        label: "CRM e contactos",
        featureTitles: ["CRM completo", "Gestão de contactos", "Registo de actividade", "Histórico por empresa", "Score de saúde do cliente", "Segmentação de clientes", "Reuniões integradas", "Importação de contactos"],
      },
      {
        label: "Propostas e fecho",
        featureTitles: ["Propostas com aceitação digital", "Modelos de proposta", "Follow-up sem falhas", "Deal → Projecto automático"],
      },
    ],
    relatesTo: [
      { id: "delivery", integrationNote: "O deal ganho cria o projecto automaticamente — briefing, orçamento e equipa passam do CRM sem duplicação." },
      { id: "financeiro", integrationNote: "O valor do contrato alimenta o forecast financeiro; a proposta aceite despoleta o primeiro retainer ou fatura." },
    ],
    screenshot: { light: "/growth-light.webp", dark: "/growth-dark.webp", alt: "CRM e pipeline de crescimento do Bernays" },
  },

  {
    id: "delivery",
    headline: "Sabes quantas horas custou o cliente. Antes de lhe enviares a próxima fatura.",
    lead: "A rentabilidade de uma agência de RP forma-se hora a hora, projecto a projecto. Mas na maior parte das agências, esse cálculo só aparece no fim do mês — quando já é tarde para corrigir. O módulo de Delivery transforma cada hora registada em custo real visível, para que o gestor de conta saiba a margem actual do projecto antes de a perder.",
    painPoints: [
      { quote: "O projecto custou-nos o dobro do que estava orçamentado. Só percebemos quando o cliente recusou pagar horas extra que 'nunca foram acordadas' — e a verdade é que nunca tínhamos contado as horas com rigor." },
      { quote: "A consultora júnior tinha oito projectos atribuídos, dois em atraso e uma apresentação para amanhã que ninguém tinha visto. Só soubemos na reunião de manhã." },
      { quote: "O cliente pediu aprovação para o comunicado na semana passada. Houve três versões por email, dois esquecimentos e no final não temos a certeza de qual foi a aprovada." },
    ],
    capabilities: [
      {
        icon: "BarChart2",
        title: "Rentabilidade visível antes do fim do mês",
        desc: "Cada hora registada por um consultor converte-se imediatamente em custo real do projecto. O gestor vê o orçamento consumido vs. horas restantes em tempo real — não numa exportação de Excel feita no último dia do mês.",
        bullets: [
          "Semáforo por projecto: verde/amarelo/vermelho baseado em percentagem de orçamento consumido",
          "Custo por hora configurável por consultor — margem real por pessoa, não estimativa média",
        ],
        imageSlotDesc: "Lista de projectos com coluna de saúde (semáforo verde/amarelo/vermelho), horas registadas vs. orçamentadas, barra de progresso. Dois ou três projectos em amarelo/vermelho.",
        image: { light: "/delivery-cap1-light.webp", dark: "/delivery-cap1-dark.webp", alt: "Vista de projectos activos no Bernays Delivery com estados e valores por cliente" },
      },
      {
        icon: "CheckSquare",
        title: "Cada consultor sabe exactamente o que fazer",
        desc: "As tarefas estão atribuídas, com prioridade e prazo. Cada consultor entra no Bernays e vê a sua lista de hoje sem ambiguidade — não precisa de uma reunião de alinhamento de manhã para perceber o que é urgente.",
        bullets: [
          "Vista Gantt para campanhas com dependências entre tarefas — ninguém começa antes do tempo",
          "Kanban para trabalho em fluxo — útil para equipas de conteúdo e media relations em simultâneo",
        ],
        imageSlotDesc: "Kanban de tarefas com colunas 'A fazer / Em progresso / Aguarda aprovação / Concluído'. Cards com nome da tarefa, consultor atribuído, prazo e prioridade.",
        image: { light: "/delivery-cap2-light.webp", dark: "/delivery-cap2-dark.webp", alt: "Lista de tarefas de projecto no Bernays com estados Concluída e Em curso" },
      },
      {
        icon: "Globe",
        title: "Portal do cliente sem partilha de Drives",
        desc: "O cliente revê e aprova conteúdos directamente no portal do Bernays. Sem links de Google Drive partilhados que expiram, sem versões de ficheiros perdidas no email, sem 'já aprovámos isso?' sem resposta definitiva.",
        bullets: [
          "Histórico de versões por deliverable — qual a versão aprovada, quando e por quem",
          "Actas de reunião associadas ao projecto — decisões registadas e acessíveis para toda a equipa",
        ],
        imageSlotDesc: "Portal do cliente: documento em revisão, comentários na margem, botão 'Aprovar', histórico de versões (v1, v2, v3 Aprovada).",
        image: { light: "/delivery-cap3-light.webp", dark: "/delivery-cap3-dark.webp", alt: "Vista de cliente no Bernays com projectos activos, tarefas em risco e contactos centralizados" },
      },
    ],
    featureGroups: [
      {
        label: "Visibilidade e rentabilidade",
        featureTitles: ["Saúde de projecto", "Rentabilidade por projecto", "Planeamento de capacidade", "Alertas de orçamento", "Timesheet integrada"],
      },
      {
        label: "Planeamento e execução",
        featureTitles: ["Tarefas e deadlines", "Vista Gantt", "Kanban de tarefas", "Milestones e dependências", "Templates de projecto", "Briefings e deliverables"],
      },
      {
        label: "Colaboração e aprovação",
        featureTitles: ["Aprovação de deliverables", "Portal do cliente", "Actas de reunião", "Gestão de documentos"],
      },
      {
        label: "Ligações entre módulos",
        featureTitles: ["De proposta a fatura"],
      },
    ],
    relatesTo: [
      { id: "crescimento", integrationNote: "O projecto começa com os dados do deal — orçamento, cliente e briefing preenchidos automaticamente a partir do CRM." },
      { id: "financeiro", integrationNote: "As horas registadas alimentam o P&L por projecto; o encerramento despoleta a fatura no Financeiro." },
      { id: "pessoas", integrationNote: "A alocação de consultores actualiza a vista de capacidade em tempo real — sem sobrecarga invisível." },
    ],
    screenshot: { light: "/delivery-light.webp", dark: "/delivery-dark.webp", alt: "Gestão de projectos e delivery do Bernays" },
  },

  {
    id: "financeiro",
    headline: "Sabes quais os clientes que te estão a custar dinheiro — antes de perder a margem.",
    lead: "A maior armadilha financeira de uma agência de RP não é um cliente que não paga — é um cliente que paga e que, no entanto, drena margem silenciosamente. O módulo Financeiro dá ao sócio o P&L por cliente em tempo real, retainers gerados sem intervenção manual, e faturação certificada AT sem ferramentas externas.",
    painPoints: [
      { quote: "O nosso cliente de retainer mais antigo — três anos de contrato — estava a render menos 40% do que calculávamos. Descobrimos quando o contabilista fechou o ano. Até lá, estávamos a subsidiar o trabalho sem saber." },
      { quote: "No fim de cada mês, a sócia passava duas horas a criar faturas manualmente no InvoiceXpress, verificar quais os retainers que tinham saído e reconciliar os pagamentos recebidos." },
      { quote: "O cliente ficou em silêncio durante semanas. Descobrimos que estava retido por uma fatura de 60 dias que ninguém tinha perseguido — porque o processo de cobranças dependia da memória de alguém." },
    ],
    capabilities: [
      {
        icon: "PieChart",
        title: "P&L por cliente sem esperar pelo contabilista",
        desc: "O P&L do Bernays é calculado a partir das horas registadas no Delivery e das faturas emitidas em cada período. O sócio vê a margem por cliente, por projecto e por mês — sem precisar de uma reunião de gestão nem de exportar dados para Excel.",
        bullets: [
          "Margem por cliente calculada automaticamente: receita faturada menos custo de horas registadas",
          "Identificação automática de clientes com margem negativa ou abaixo do threshold definido",
        ],
        imageSlotDesc: "Dashboard com lista de clientes e margens. Colunas: Nome, Faturado, Custo, Margem%. Alguns em verde, um ou dois em vermelho. Gráfico de barras por cliente.",
        image: { light: "/financeiro-cap1-light.webp", dark: "/financeiro-cap1-dark.webp", alt: "Dashboard financeiro do Bernays com P&L, receita vs despesas e top clientes" },
      },
      {
        icon: "RefreshCw",
        title: "Retainers automáticos, cobranças sem perseguição",
        desc: "Configura o retainer uma vez — valor, periodicidade, data de emissão, método de envio. O Bernays emite a fatura, envia para o cliente e regista o pagamento quando chega. Os alertas de vencimento disparam automaticamente antes de a fatura ficar em atraso.",
        bullets: [
          "Retainers com emissão recorrente — nunca mais um mês esquecido",
          "Lembretes de pagamento automáticos em D+30 e D+60 sem intervenção manual",
        ],
        imageSlotDesc: "Lista de faturas com badges de estado (verde=pago, amarelo=pendente, vermelho=vencido). Painel com totais 'Em atraso' e 'A vencer este mês'.",
        image: { light: "/financeiro-cap2-light.webp", dark: "/financeiro-cap2-dark.webp", alt: "Lista de faturas do Bernays com estados Emitida, Paga e Vencida e totais por categoria" },
      },
      {
        icon: "CreditCard",
        title: "Cashflow forward-looking com runway sempre visível",
        desc: "A Tesouraria do Bernays calcula automaticamente as entradas (faturas, avençãs, recorrências) e saídas (salários, despesas, fornecedores) para os próximos 90 dias ou 12 meses. O sócio sabe o saldo previsto de cada semana — e o runway da agência — sem depender do banco.",
        bullets: [
          "Runway calculado em tempo real com faturas pendentes, avençãs e despesas recorrentes confirmadas",
          "Cenário Base e Optimista em paralelo — sabes o mínimo e o máximo com os dados actuais",
        ],
        imageSlotDesc: "Tesouraria: KPIs de entradas/saídas/cashflow líquido + runway. Gráfico 'Saldo cumulativo previsto' com tooltip de detalhe por data.",
        image: { light: "/financeiro-cap3-light.webp", dark: "/financeiro-cap3-dark.webp", alt: "Tesouraria do Bernays com cashflow previsto a 90 dias e runway de 20.3 meses" },
      },
    ],
    featureGroups: [
      {
        label: "Inteligência financeira",
        featureTitles: ["P&L por cliente", "Análise de margens", "Cashflow em tempo real", "Dashboard financeiro", "Despesas imputadas"],
      },
      {
        label: "Faturação e cobranças",
        featureTitles: ["Faturação certificada AT", "Retainers automáticos", "Alertas de pagamento", "Reconciliação de pagamentos", "Notas de crédito", "Proformas"],
      },
      {
        label: "Fornecedores e despesas",
        featureTitles: ["Contas a pagar", "Catálogo de serviços", "Multi-moeda", "Centros de custo"],
      },
      {
        label: "Conformidade e exportação",
        featureTitles: ["Exportação SAF-T"],
      },
    ],
    relatesTo: [
      { id: "crescimento", integrationNote: "O valor do contrato e tipo de serviço passam do CRM para a fatura — sem reintroduzir dados." },
      { id: "delivery", integrationNote: "As horas registadas nos projectos alimentam o custo no P&L automaticamente — margem calculada em tempo real." },
    ],
    screenshot: { light: "/invoices-light.webp", dark: "/invoices-dark.webp", alt: "Faturação e módulo financeiro do Bernays" },
  },

  {
    id: "pessoas",
    headline: "Sabes se tens equipa para o próximo cliente antes de dizer que sim.",
    lead: "Aceitar um mandato novo sem saber a capacidade real da equipa é o início de muitos projectos mal entregues. O módulo de Pessoas dá ao sócio uma visão clara de quem está disponível, quem está sobrecarregado e quem tem as competências certas para o próximo cliente — sem perguntar a toda a gente por email.",
    painPoints: [
      { quote: "Aceitámos mais um cliente em setembro porque 'tínhamos capacidade'. Em outubro, dois consultores estavam a trabalhar até às 22h e um pediu para sair. A capacidade era uma impressão, não um dado." },
      { quote: "Precisávamos de um consultor com experiência em reputação digital para um pitch urgente. Passámos horas a perguntar por email — quando a informação estava algures num documento de RH que ninguém actualizava." },
      { quote: "A consultora pediu férias por email em julho, foi aprovado verbalmente, mas o calendário nunca foi actualizado. A campanha ficou sem cobertura numa semana crítica." },
    ],
    capabilities: [
      {
        icon: "Users",
        title: "Capacidade da equipa em tempo real",
        desc: "Antes de aceitar um novo cliente ou alocar um consultor a um projecto, o módulo de Pessoas mostra as horas disponíveis de cada membro da equipa — calculadas a partir dos projectos já atribuídos no Delivery. Nenhuma suposição. Dados reais.",
        bullets: [
          "Mapa de capacidade semanal: horas alocadas vs. disponíveis por consultor",
          "Integração com Delivery — alocação de projectos actualiza a capacidade automaticamente",
        ],
        imageSlotDesc: "Grelha de capacidade: consultores nas linhas, semanas nas colunas. Células com horas alocadas, barra de cor (verde=disponível, amarelo=quase cheio, vermelho=sobrecarregado).",
        image: { light: "/pessoas-cap1-light.webp", dark: "/pessoas-cap1-dark.webp", alt: "Workload da equipa no Bernays com capacidade por consultor e semana em percentagem" },
      },
      {
        icon: "Calendar",
        title: "Férias e ausências sem conflitos invisíveis",
        desc: "O consultor submete o pedido de férias na plataforma. O responsável aprova com um clique. O calendário da equipa actualiza automaticamente e o módulo de Delivery sinaliza projectos que ficam sem cobertura nesse período. Nenhum conflito invisível.",
        bullets: [
          "Fluxo de aprovação com notificação imediata ao responsável — sem email manual",
          "Alertas automáticos no Delivery quando uma ausência afecta um projecto activo",
        ],
        imageSlotDesc: "Calendário de ausências com dias marcados por consultor. Painel lateral com pedidos pendentes de aprovação.",
        image: { light: "/pessoas-cap2-light.webp", dark: "/pessoas-cap2-dark.webp", alt: "Calendário de férias e ausências no Bernays com estados Approved e Pending por consultor" },
      },
      {
        icon: "Star",
        title: "Quem é o melhor consultor para este cliente",
        desc: "A matriz de competências regista as especializações de cada consultor — sector de experiência, tipo de media, nível de senioridade, línguas, áreas técnicas. Quando surge um pitch, o sócio sabe imediatamente quem tem o perfil certo sem depender da memória de ninguém.",
        bullets: [
          "Skills e especializações por consultor actualizáveis a qualquer momento",
          "Filtro por competência para identificar rapidamente o fit certo para um cliente novo",
        ],
        imageSlotDesc: "Perfil de consultor com tags de competências (ex: 'Media Relations', 'Reputação Digital', 'Farmacêutico'). Projectos recentes associados abaixo.",
        image: { light: "/pessoas-cap3-light.webp", dark: "/pessoas-cap3-dark.webp", alt: "Perfil de consultor no Bernays com departamento, manager, contrato e historial de ausências" },
      },
    ],
    featureGroups: [
      {
        label: "Capacidade e alocação",
        featureTitles: ["Planeamento de capacidade", "Disponibilidade em tempo real", "Registo de ausências"],
      },
      {
        label: "Ausências e calendário",
        featureTitles: ["Pedidos de férias", "Marcos de equipa"],
      },
      {
        label: "Talento e desenvolvimento",
        featureTitles: ["Matriz de competências", "Avaliações de performance", "Trajectória de carreira", "Catálogo de formação", "Checklists de onboarding"],
      },
      {
        label: "Recrutamento e documentação",
        featureTitles: ["Pipeline de recrutamento", "Directório de equipa", "Gestão de documentos RH", "Gestão de benefícios"],
      },
    ],
    relatesTo: [
      { id: "delivery", integrationNote: "A alocação de consultores a projectos reflecte-se automaticamente na capacidade disponível — sem sobrecarga invisível." },
      { id: "workspace", integrationNote: "O calendário de ausências e carga de trabalho aparecem no Workspace pessoal de cada consultor." },
    ],
    screenshot: { light: "/people-light.webp", dark: "/people-dark.webp", alt: "Gestão de equipa e recursos humanos do Bernays" },
  },

  {
    id: "escritorio",
    headline: "A agência funciona quando tu não estás. Porque tudo está registado.",
    lead: "Numa agência de RP, as operações de back-office existem em pastas do Drive, emails antigos e na cabeça de uma pessoa. Quando essa pessoa sai ou está de férias, a agência perde dias a encontrar um contrato, a perceber quando renova uma subscrição ou a saber quem tem o acesso ao escritório. O módulo de Escritório regista tudo num só lugar.",
    painPoints: [
      { quote: "A ferramenta de media monitoring renovou automaticamente por mais um ano — €4.800 que ninguém aprovou porque a data de renovação estava num email de 2022 que ninguém guardou." },
      { quote: "A advogada pediu o contrato de prestação de serviços de um cliente. Passámos 45 minutos a procurar nas pastas do Drive antes de perceber que estava num computador que já não existia." },
      { quote: "O novo consultor entrou na segunda-feira. Na quarta ainda não tinha acesso a todas as ferramentas porque o processo de onboarding dependia de alguém se lembrar de cada passo." },
    ],
    capabilities: [
      {
        icon: "CreditCard",
        title: "Subscrições SaaS sem surpresas de renovação",
        desc: "Todas as licenças e ferramentas da agência num registo central: valor mensal ou anual, data de renovação, responsável e estado actual. O Bernays alerta antes de qualquer renovação automática para que a decisão de continuar ou cancelar seja intencional — não um detalhe esquecido.",
        bullets: [
          "Custo total mensal de SaaS visível num único painel — percebe onde está o dinheiro",
          "Alertas de renovação configuráveis com 30 e 60 dias de antecedência",
        ],
        imageSlotDesc: "Lista de subscrições SaaS com colunas: Nome da ferramenta, Custo mensal, Data de renovação, Responsável, Estado. Uma ou duas em vermelho indicando renovação próxima.",
      },
      {
        icon: "FileText",
        title: "Contratos e documentos legais versionados",
        desc: "Contratos de clientes, acordos de confidencialidade, documentos de compliance e seguros — todos versionados, com data de validade, responsável e estado de revisão. Quando o advogado ou o cliente pede um documento, está acessível em segundos.",
        bullets: [
          "Versionamento automático — sempre clara qual é a versão em vigor",
          "Alertas de validade para contratos e apólices com data de expiração",
        ],
        imageSlotDesc: "Lista de documentos com tipo (Contrato, NDA, Apólice), data, responsável e estado (Em vigor / A expirar / Expirado). Um ou dois com badge 'A expirar em 30 dias'.",
      },
      {
        icon: "Package",
        title: "Activos e inventário sem rastreio por email",
        desc: "Hardware, licenças individuais, equipamento partilhado — tudo atribuído por colaborador com data de entrega e estado de devolução. Quando alguém entra ou sai da equipa, a lista do que tem atribuído está imediatamente disponível.",
        bullets: [
          "Activos atribuídos por colaborador — associados ao perfil de cada pessoa no módulo de Pessoas",
          "Registo de saída sincronizado com off-boarding — checklist automática de devolução",
        ],
        imageSlotDesc: "Tabela de activos: Nome, Tipo (Hardware / Licença / Equipamento), Atribuído a, Data de entrega, Estado. 8-12 itens, alguns marcados como Disponível.",
      },
    ],
    featureGroups: [
      {
        label: "Fornecedores e custos",
        featureTitles: ["Gestão de fornecedores", "Gestão de subscrições SaaS", "Despesas de escritório", "Gestão de utilidades", "Requisições de material"],
      },
      {
        label: "Documentos e compliance",
        featureTitles: ["Documentos legais", "Documentos de compliance", "Gestão de seguros"],
      },
      {
        label: "Espaço e activos",
        featureTitles: ["Inventário de activos", "Reserva de salas", "Controlo de acessos", "Registo de visitas"],
      },
    ],
    relatesTo: [
      { id: "financeiro", integrationNote: "Despesas de escritório e custos de fornecedores imputados como contas a pagar — sem duplicar registos." },
      { id: "pessoas", integrationNote: "Activos atribuídos ligados ao perfil de cada colaborador — off-boarding inclui checklist automática de devolução." },
    ],
  },

  {
    id: "workspace",
    headline: "O primeiro ecrã do dia que mostra o que importa — só a ti.",
    lead: "Um consultor de uma agência de RP pode ter seis projectos activos, três clientes em simultâneo e aprovações pendentes de dois gestores diferentes. O Workspace é o ponto de entrada personalizado no Bernays: as tuas tarefas de hoje, os teus prazos desta semana, as aprovações que esperam por ti — filtradas para o teu papel, não para a empresa inteira.",
    painPoints: [
      { quote: "Cheguei de manhã com 47 notificações não lidas em cinco ferramentas diferentes. Passei 20 minutos a perceber o que era urgente antes de fazer qualquer trabalho real." },
      { quote: "Esqueci-me de registar as horas da reunião do cliente na terça-feira. Quando fechei o mês, já não me lembrava em que projecto imputar — e as horas ficaram perdidas." },
      { quote: "O gestor de conta perguntou-me como estava o deliverable do cliente X. Tive de ir ao email, ao Drive e ao Teams antes de conseguir responder — e a resposta ainda foi incompleta." },
    ],
    capabilities: [
      {
        icon: "LayoutDashboard",
        title: "Um ecrã que sabe o que é urgente para ti",
        desc: "O dashboard pessoal agrega as tarefas com prazo hoje, as aprovações pendentes e os alertas que te afectam directamente — filtrados pelo teu papel e pelos projectos onde tens responsabilidade. Não é um feed de actividade de toda a equipa. É o teu foco, organizado.",
        bullets: [
          "Inbox pessoal: tarefas, aprovações, alertas e mensagens agregadas numa fila única",
          "Priorização por prazo e urgência — o mais crítico aparece primeiro, sempre",
        ],
        imageSlotDesc: "Dashboard pessoal: 'As minhas tarefas de hoje' (3-5 itens), 'Aprovações pendentes' (2-3 itens), 'Agenda da semana'. Transmite foco e clareza.",
      },
      {
        icon: "Clock",
        title: "Timesheets que se preenchem quase sozinhas",
        desc: "O Bernays sabe os projectos em que estás activo. Quando abres o registo de horas do dia, já aparecem sugestões baseadas nas tarefas que tinhas para hoje e nas reuniões do calendário. Registar uma hora é confirmar ou ajustar — não reconstruir o dia de memória.",
        bullets: [
          "Sugestões automáticas de registo baseadas nas tarefas activas e reuniões do dia",
          "Registo rápido com atalho de teclado — sem mudar de ecrã ou abrir outra ferramenta",
        ],
        imageSlotDesc: "Interface de registo de horas: projectos activos com input de horas ao lado, sugestões destacadas, timer activo. Total de horas hoje vs. meta diária.",
      },
      {
        icon: "Inbox",
        title: "Encontra tudo em segundos com pesquisa global",
        desc: "Uma caixa de pesquisa que percorre clientes, projectos, tarefas, faturas e contactos em simultâneo. Quando um cliente liga a fazer uma pergunta, a resposta está a dois segundos — não a dois minutos de navegação entre módulos.",
        bullets: [
          "Resultados organizados por tipo (cliente, projecto, tarefa, fatura) com contexto visível",
          "Acesso a favoritos e recentes — os itens que usas todos os dias estão sempre à mão",
        ],
        imageSlotDesc: "Pesquisa global aberta tipo command palette: resultados por categoria 'Clientes (1)', 'Projectos (3)', 'Faturas (2)'. Interface centrada e limpa.",
      },
    ],
    featureGroups: [
      {
        label: "Foco e prioridades",
        featureTitles: ["Dashboard pessoal", "Inbox centralizado", "As tuas tarefas", "Fila de aprovações", "Notificações inteligentes"],
      },
      {
        label: "Registo de tempo",
        featureTitles: ["Registo de horas diário", "Calendário semanal"],
      },
      {
        label: "Navegação e acesso",
        featureTitles: ["Pesquisa global", "Favoritos e fixados", "Histórico de actividade", "Atalhos de teclado", "Modos de visualização", "Resumo da semana"],
      },
    ],
    relatesTo: [
      { id: "delivery", integrationNote: "As tarefas atribuídas em projectos aparecem automaticamente no inbox pessoal — sem ir ao módulo de Delivery." },
      { id: "pessoas", integrationNote: "Pedidos de férias e ausências submetidos e acompanhados directamente do Workspace." },
    ],
    screenshot: { light: "/dashboard-light.webp", dark: "/dashboard-dark.webp", alt: "Workspace pessoal e cockpit do Bernays" },
  },

  {
    id: "plataforma",
    headline: "Construído para Portugal, do código à língua, da segurança ao contabilista.",
    lead: "A maior parte dos ERPs que as agências portuguesas usam foi construída para mercados anglófonos e localizada para PT-PT a custo. O Bernays foi construído de origem para o contexto português — faturação AT certificada, RGPD compliant de série, português europeu em todos os textos gerados. Não são configurações opcionais. São o comportamento por defeito da plataforma.",
    painPoints: [
      { quote: "A plataforma que usávamos antes era em inglês, mas os contratos e propostas tinham de ser em português. Resultado: metade das comunicações com clientes saía num híbrido que não era inglês nem português correcto." },
      { quote: "Tivemos uma auditoria do contabilista. Pediu o SAF-T do último ano. Passámos três dias a exportar, converter e formatar dados de três ferramentas diferentes para ter um ficheiro que ele conseguia usar." },
      { quote: "Acordámos com o sistema de gestão fora do ar uma segunda-feira de manhã. Suporte por ticket. Resposta em 72 horas. A equipa passou o dia em Excel e WhatsApp." },
    ],
    capabilities: [
      {
        icon: "Globe",
        title: "PT-PT nativo em tudo o que sai da plataforma",
        desc: "Não é uma tradução — é a língua em que o sistema foi construído. Faturas, propostas, emails automáticos, templates de projecto, mensagens de sistema: tudo em português europeu correcto, sem anglicismos, sem traduções automáticas.",
        bullets: [
          "Todos os documentos gerados em PT-PT sem configuração — faturas, propostas, actas",
          "Menus, notificações e mensagens de erro em português europeu — sem uma palavra de inglês",
        ],
        imageSlotDesc: "Proposta ou fatura gerada pelo Bernays: documento em PT-PT com tipografia profissional, morada portuguesa, NIF, ATCUD visível. Qualidade documental.",
      },
      {
        icon: "Shield",
        title: "Segurança que não exige configuração",
        desc: "2FA disponível em todos os planos sem custo adicional. Dados de cada agência isolados por Row-Level Security na base de dados. Backups automáticos diários com retenção de 30 dias. Seguro por defeito, não por upgrade.",
        bullets: [
          "2FA activável por qualquer utilizador sem necessidade de plano premium",
          "Dados isolados por agência com Row-Level Security — zero contaminação cruzada",
        ],
        imageSlotDesc: "Definições de segurança: 2FA activo, sessões activas com dispositivos e datas, logs de auditoria com entradas recentes.",
      },
      {
        icon: "Zap",
        title: "Infraestrutura que não falha em dia de pitch",
        desc: "O Bernays corre na Vercel Edge Network com base de dados Neon PostgreSQL. 99.9% de uptime, actualizações sem janelas de manutenção, performance abaixo de 1 segundo em qualquer ecrã. Quando a equipa está a preparar um pitch às 23h, o sistema está lá.",
        bullets: [
          "Actualizações contínuas sem downtime — nenhuma janela de manutenção que interrompa o trabalho",
          "Tempo de carregamento abaixo de 1 segundo em todas as páginas",
        ],
        imageSlotDesc: "Painel de estado com uptime (99.9%), tempo de resposta médio (<1s), registo da última actualização sem downtime.",
      },
    ],
    featureGroups: [
      {
        label: "Localização PT-PT",
        featureTitles: ["Português europeu nativo", "RGPD compliant", "Integrações certificadas"],
      },
      {
        label: "Segurança e controlo",
        featureTitles: ["Autenticação 2FA", "Permissões por papel", "Logs de auditoria", "Backups automáticos diários", "Segurança de ponta a ponta"],
      },
      {
        label: "Experiência e interface",
        featureTitles: ["Dark mode e light mode", "Mobile e tablet", "Performance instantânea", "Exportação universal"],
      },
      {
        label: "Infraestrutura e suporte",
        featureTitles: ["Infraestrutura global", "Actualizações sem interrupção", "Suporte directo"],
      },
    ],
    relatesTo: [
      { id: "crescimento", integrationNote: "Propostas geradas em PT-PT e aceites digitalmente — conformidade legal e linguística numa única acção." },
      { id: "delivery", integrationNote: "Documentos, actas e briefings em PT-PT — sem tradução de volta quando o cliente recebe documentação." },
      { id: "financeiro", integrationNote: "Faturação AT certificada e SAF-T são capacidades da Plataforma em qualquer plano — não add-ons." },
    ],
  },
]
