# Bernays Landing — Documentação Técnica

Website de marketing do Bernays (ERP para agências de RP).
URL de produção: **bernays.pt**
Repositório Git próprio: `git@github.com:nunodasilvajorge/bernays-website.git`

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Linguagem | TypeScript 5 |
| Estilos | Tailwind CSS v4 (sem `tailwind.config`) |
| Animações | Framer Motion 12 |
| Ícones | Lucide React |
| Fontes | Inter (Google Fonts via `next/font`) + system-font fallback |
| Analytics | Vercel Analytics + Speed Insights |
| Email | Resend |
| Deploy | Vercel · projecto `prj_UFr4MilciWeUjxg2bpgGzDqQdDkq` |

**Dev:** `npm run dev` — porta **3010**, flag `--webpack` explícita.
**Build:** `npm run build`
**Typecheck:** `npm run typecheck`

> Não há linter configurado. TypeScript tem `ignoreBuildErrors: true` (produção não bloqueia em erros de tipo).

---

## Estrutura de directórios

```
src/
├── app/
│   ├── layout.tsx              Root layout: Inter, ThemeProvider, Analytics
│   ├── globals.css             Design tokens + Tailwind v4
│   ├── page.tsx                Homepage (composição de secções)
│   ├── sitemap.ts              Sitemap dinâmico (gera /produto/[slug])
│   ├── opengraph-image.tsx     OG image estática da homepage
│   │
│   ├── funcionalidades/        Todas as features por módulo com filtro
│   ├── produto/[slug]/         Página de módulo individual (7 slugs estáticos)
│   ├── sobre/                  About + founder story
│   ├── agenda/                 Embed Cal.com ou similar
│   ├── changelog/              Linha do tempo de novidades
│   ├── privacidade/            Política de privacidade
│   ├── termos/                 Termos de serviço
│   │
│   └── api/
│       ├── waitlist/route.ts   POST email → Resend (notifica founder + confirma user)
│       └── academia/route.ts   POST formulário Academia
│
├── components/
│   ├── nav.tsx                 Nav fixo com flyout de módulos
│   ├── hero.tsx                Secção hero com browser mockup
│   ├── problem.tsx             Secção "o problema"
│   ├── statement.tsx           Separador editorial (plain + accent + sub)
│   ├── features.tsx            Overview de módulos em cards
│   ├── showcase.tsx            Showcase de screenshots por módulo
│   ├── metrics.tsx             Métricas animadas (AnimatedNumber)
│   ├── origin.tsx              História de origem do produto
│   ├── comparison.tsx          Tabela Bernays vs. ferramentas existentes
│   ├── personas.tsx            Perfis de utilizador (sócio, director, consultor)
│   ├── founder-quote.tsx       Blockquote do fundador
│   ├── stats.tsx               Stats de credibilidade
│   ├── feature-tabs.tsx        Tabs por módulo com screenshots
│   ├── pricing.tsx             Secção de preços com slider interactivo
│   ├── migration.tsx           Migração facilitada (onboarding)
│   ├── faq.tsx                 FAQ accordion
│   ├── cta.tsx                 CTA final
│   ├── academia.tsx            Programa Bernays para a Academia
│   ├── footer.tsx              Rodapé
│   ├── floating-cta.tsx        Pill flutuante (desktop) + barra sticky (mobile)
│   ├── cookie-banner.tsx       Banner RGPD
│   └── scroll-progress.tsx     Barra de progresso de scroll
│
└── lib/
    ├── theme.tsx               ThemeProvider + useTheme (dark/light, localStorage)
    ├── animate.tsx             FadeIn + AnimatedNumber (Framer Motion wrappers)
    ├── features-data.tsx       Dados dos 7 módulos (features completas)
    └── module-pages-data.ts    Dados das páginas /produto/[slug]
```

---

## Routing

| URL | Tipo | Descrição |
|---|---|---|
| `/` | SSG | Homepage (18 secções) |
| `/funcionalidades` | SSG | Todas as features filtráveis por módulo |
| `/produto/crescimento` | SSG | Página módulo Crescimento |
| `/produto/delivery` | SSG | Página módulo Delivery |
| `/produto/financeiro` | SSG | Página módulo Financeiro |
| `/produto/pessoas` | SSG | Página módulo Pessoas |
| `/produto/escritorio` | SSG | Página módulo Escritório |
| `/produto/workspace` | SSG | Página módulo Workspace |
| `/produto/plataforma` | SSG | Página módulo Plataforma |
| `/sobre` | SSG | About + founder story |
| `/agenda` | SSG | Book a demo |
| `/changelog` | SSG | Novidades |
| `/privacidade` | SSG | Política de privacidade |
| `/termos` | SSG | Termos de serviço |
| `/api/waitlist` | API Route | Captura de email (Resend) |
| `/api/academia` | API Route | Formulário Academia |
| `/sitemap.xml` | Dinâmico | Gerado por `app/sitemap.ts` |

Os 7 slugs de `/produto/[slug]` são gerados estaticamente via `generateStaticParams()` com `dynamicParams = false`.

---

## Design System

### Cores (CSS custom properties em `globals.css`)

```css
/* Tokens Tailwind */
--color-brand:       oklch(0.581 0.243 263)   /* azul-violeta principal */
--color-brand-hover: oklch(0.546 0.231 263)
--color-brand-light: oklch(0.696 0.171 253)   /* para texto em dark mode */
--color-brand-pale:  oklch(0.85 0.12 263)

/* Semânticos de página */
--page-bg           /* fundo principal */
--page-surface      /* fundo alternativo (secções) */
--page-card         /* fundo de card */
--page-border       /* bordas */
--page-text         /* texto principal */
--page-text-muted   /* texto secundário */
--page-text-faint   /* texto terciário */
```

**Light mode:** fundo `#fafbff` (cool white). **Dark mode:** fundo `#07080e` (navy muito escuro).

### Tipografia

Stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", var(--font-inter), "Helvetica Neue", Arial, sans-serif`

Inter é carregada via `next/font/google` como CSS variable `--font-inter` com weights 400–800.

Headings principais: `clamp(44px, 7vw, 88px)` na hero, `clamp(38px, 5.5vw, 66px)` em secções. Sempre `font-extrabold tracking-[-0.035em]`.

### Theming

`ThemeProvider` (Context) persiste a preferência em `localStorage` com key `"bernays-theme"`. Default: `dark`. Toggle via botão sun/moon na nav. O `<html>` arranca com classe `dark` e é actualizado client-side no `useEffect`.

### Animações

Easing padrão: `[0.22, 1, 0.36, 1]` (ease-out-expo) — constante `ease` em cada ficheiro.

Padrões recorrentes:
- **Entrada de secção:** `FadeIn` — `opacity 0→1, y 24→0, viewport once: true, margin -60px`
- **Entrada de hero:** blur reveal linha a linha — `filter: blur(12px)→blur(0), y 32→0`
- **Hover em cards:** `whileHover={{ y: -4 }}`
- **Scroll-driven:** `useTransform(scrollY, ...)` para nav background e scroll indicator

---

## Dados de conteúdo

Todo o conteúdo dos módulos está em ficheiros de dados centralizados (não vem de CMS).

### `src/lib/features-data.tsx`

Array `modules: Module[]` com os 7 módulos. Cada módulo tem:
- `id` — slug
- `label`, `icon` (ReactNode Lucide), `color` (hex), `tagline`, `description`
- `features: { title, desc }[]` — lista completa de features (~14–17 por módulo)

**Total:** 112 features documentadas.

### `src/lib/module-pages-data.ts`

Array `modulePages: ModulePageData[]` — dados ricos para as páginas `/produto/[slug]`:
- `headline` — título emocional da página
- `lead` — parágrafo introdutório
- `painPoints` — 3 citações de dor com role
- `capabilities` — 3 capacidades principais com título, desc, bullets e imagem (light/dark)
- `featureGroups` — features agrupadas por categoria
- `relatesTo` — módulos relacionados com nota de integração
- `screenshot` — screenshot principal (light/dark)

---

## Imagens / Assets

Todos em `public/`. Formato **WebP**. Variantes light e dark para cada imagem.

### Screenshots principais (hero de módulo)

```
dashboard-{light,dark}.webp      Workspace
growth-{light,dark}.webp          Crescimento
delivery-{light,dark}.webp        Delivery
invoices-{light,dark}.webp        Financeiro
finance-{light,dark}.webp         Financeiro (hero homepage)
people-{light,dark}.webp          Pessoas
escritorio-{light,dark}.webp      Escritório
plataforma-{light,dark}.webp      Plataforma
```

### Capabilities (3 por módulo, `*-cap[1-3]-{light,dark}.webp`)

```
crescimento-cap{1-3}-{light,dark}.webp
delivery-cap{1-3}-{light,dark}.webp
financeiro-cap{1-3}-{light,dark}.webp
pessoas-cap{1-3}-{light,dark}.webp
escritorio-cap{1-3}-{light,dark}.webp
workspace-cap{1-3}-{light,dark}.webp
plataforma-cap{1-3}-{light,dark}.webp
```

### Outros

```
logo.svg                  Logo Bernays (SVG, 26×26)
founder.jpeg              Foto do fundador
robots.txt                Disallow: / (noindex total por enquanto)
```

As imagens hero da homepage (`finance-light/dark.webp`) são **preloaded** no `<head>` do root layout para melhorar o LCP.

---

## API Routes

### `POST /api/waitlist`

Captura email de interesse. Valida formato, envia dois emails via Resend:
1. Notificação interna para `nuno.dasilvajorge@gmail.com`
2. Confirmação automática para o utilizador

**Env:** `RESEND_API_KEY`

### `POST /api/academia`

Formulário de candidatura ao programa Academia.

**Env:** `RESEND_API_KEY`

---

## Variáveis de ambiente

| Variável | Onde é usada | Valor de produção |
|---|---|---|
| `NEXT_PUBLIC_DEMO_URL` | Nav, Hero, FloatingCta, Pricing, etc. | `https://demo.bernays.pt` |
| `NEXT_PUBLIC_APP_URL` | Pricing (botões "Começar") | `https://app.bernays.pt` |
| `RESEND_API_KEY` | `/api/waitlist`, `/api/academia` | Key Resend |

---

## SEO e Indexação

**Estado actual:** `robots: "noindex, nofollow"` em `metadata` e header `X-Robots-Tag: noindex, nofollow` em `next.config.ts`. O site **não está a ser indexado pelo Google**.

Isto é intencional durante a fase de acesso antecipado e deve ser revertido antes do lançamento público.

**OG/Twitter:** configurados com título, descrição e `locale: pt_PT`.

**Sitemap:** `/sitemap.xml` gerado dinamicamente, inclui todas as páginas públicas com prioridades definidas.

**Structured data:** não implementado ainda (oportunidade para `Organization`, `SoftwareApplication`, `FAQPage`).

---

## Segurança

Headers configurados em `next.config.ts`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `HSTS` (produção apenas): `max-age=63072000; includeSubDomains; preload`

---

## Deploy

**Método actual:** `vercel --prod` CLI **a partir de dentro** de `projects/bernays-landing/`.

```bash
cd projects/bernays-landing
vercel --prod
```

> Nunca correr comandos Vercel a partir da raiz do monorepo — é um container, não uma app.

**GitHub auto-deploy:** não está ligado. Requer ligação manual do repo `bernays-website` no dashboard Vercel.

---

## Secções da Homepage

Ordem de renderização em `app/page.tsx`:

| # | Componente | Âncora / id |
|---|---|---|
| 1 | `FloatingCta` | — (fixed) |
| 2 | `Nav` | — (fixed) |
| 3 | `Hero` | — |
| 4 | `Problem` | — |
| 5 | `Statement` | — |
| 6 | `Features` | — |
| 7 | `Statement` | — |
| 8 | `Showcase` | — |
| 9 | `Metrics` | — |
| 10 | `Origin` | — |
| 11 | `Comparison` | — |
| 12 | `Personas` | — |
| 13 | `FounderQuote` | — |
| 14 | `Stats` | — |
| 15 | `FeatureTabs` | `#como-funciona` |
| 16 | `Pricing` | `#precos` |
| 17 | `Migration` | — |
| 18 | `Faq` | — |
| 19 | `Cta` | — |
| 20 | `Academia` | — |
| 21 | `Footer` | — |

---

## Pricing (lógica)

```
Solo/Studio:  €58/mês · €580/ano (2 utilizadores incluídos)
Team:         €58 base + €24/utilizador adicional/mês
              (mínimo 3 utilizadores, máximo 20 no slider)
              €580/ano base + €240/utilizador adicional/ano (−17%)
Agency:       Team + €15/freelancer/mês + €15/portal de cliente/mês
```

Constantes em `pricing.tsx`: `BASE_MONTHLY`, `PER_USER_MONTHLY`, `BASE_ANNUAL`, `PER_USER_ANNUAL`.

---

## Módulos do produto

| id | Label | Cor | Tagline |
|---|---|---|---|
| `crescimento` | Crescimento | `#2257ff` | CRM, pipeline e propostas |
| `delivery` | Delivery | `#7c3aed` | Projectos, tarefas e rentabilidade |
| `financeiro` | Financeiro | `#059669` | Faturação certificada, cobranças e P&L |
| `pessoas` | Pessoas | `#f59e0b` | Recursos humanos e gestão de equipa |
| `escritorio` | Escritório | `#06b6d4` | Operações, fornecedores e activos |
| `workspace` | Workspace | `#ec4899` | O cockpit pessoal de cada consultor |
| `plataforma` | Plataforma | `#6366f1` | Tecnologia, segurança e experiência |

---

## Notas técnicas conhecidas

- `typescript: { ignoreBuildErrors: true }` — não bloqueia deploy em erros de tipo. Manter vigilância manual.
- `experimental.optimizePackageImports: ["lucide-react", "framer-motion"]` — reduz bundle size.
- `experimental.viewTransition: true` — habilitado mas não amplamente utilizado.
- Tema arranca sempre `dark` no SSR (classe `dark` no `<html>`), corrigido client-side pelo `ThemeProvider`. Sem flash visível porque a cor de fundo dark está em CSS.
- Não há biblioteca de componentes UI (shadcn, etc.) — todos os componentes são built from scratch com Tailwind.
- Não há testes (unit nem E2E).
- `robots.txt` faz `Disallow: /` — confirmar remoção antes de lançamento público.
