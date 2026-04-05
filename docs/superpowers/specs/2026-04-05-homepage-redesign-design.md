# Homepage Redesign — Design Spec

## Goal

Redesenhar a homepage da Dorata Solar para construir autoridade máxima em Sinop/MT, combinando a experiência cinematográfica da Apple com a estrutura de prova por dados da JinkoSolar — resultando no site de energia solar mais impressionante da região.

## Contexto do Projeto

- **Framework:** Next.js 16 + TypeScript + Tailwind CSS v4
- **Animações:** Framer Motion v12 (já instalado)
- **Tema:** Dark com amarelo (#facc15) como accent
- **Fontes:** Syne (display) + Inter (body)
- **Deploy:** Vercel, GitHub repo Damascenoswift/dorata-site

## Estrutura de Página (8 seções)

### 01 — Hero Cinematográfico
- Tela cheia com imagem de fundo das usinas (suporte a vídeo futuro)
- Headline em duas linhas: "Energia limpa para **Sinop e região.**"
- Chip de autoridade: "Referência no Norte do Mato Grosso"
- Dois CTAs: primário (WhatsApp) + outline (Ver Projetos)
- Scroll indicator animado com bounce (estilo Apple)
- Overlay gradiente escuro sobre a imagem

### 02 — Contadores Animados
- 4 números que sobem do zero ao entrar no viewport
- "20+ usinas" · "37 empresas" · "5+ anos" · "100% garantia"
- Cada número em destaque com label embaixo
- Framer Motion `useInView` + `animate` para o counting effect

### 03 — Scroll Story (Estilo Apple)
- Seção "grudada" no topo (position: sticky) enquanto o usuário rola
- 4 benefícios aparecem em sequência conforme o scroll avança:
  1. **Economia Real** — "Reduza até 95% da sua conta de luz"
  2. **Zero Burocracia** — "A Dorata cuida de tudo, do projeto à instalação"
  3. **Suporte Local** — "Equipe em Sinop, atendimento no mesmo dia"
  4. **Garantia Total** — "25 anos de garantia nos painéis"
- Indicador de progresso lateral
- Imagem/ícone troca a cada benefício

### 04 — Blocos "Líder" (Estilo JinkoSolar)
- 3 blocos alternando imagem esquerda/direita com texto
- Cada bloco tem título de autoridade + dado específico + CTA
  1. **"Referência em Sinop"** — foto de usina grande + texto sobre liderança local
  2. **"Tecnologia de Ponta"** — foto de painel close-up + sobre equipamentos
  3. **"Suporte que não some"** — foto da equipe/obra + sobre pós-venda
- Animação de entrada: imagem desliza da esquerda/direita ao scroll

### 05 — Prova Social (3 Blocos)

#### 5A — Logo Wall (Carrossel Automático)
- 37 logos de empresas clientes em 2 linhas
- Linha 1: scroll para direita (infinito)
- Linha 2: scroll para esquerda (infinito)
- CSS `@keyframes` com `animation: scroll 40s linear infinite`
- Sem pausar ao hover (automático)
- Header: "37 empresas em Sinop já economizando"

#### 5B — Reel Cinematográfico de Obras
- Fotos aéreas das usinas em slideshow fullscreen (aspect 16:9)
- Troca automática a cada 4 segundos com fade transition
- Overlay: nome da empresa no canto inferior esquerdo + badge Dorata no direito
- Barra de progresso animada no topo
- Navegação por dots embaixo
- Ken Burns effect sutil (zoom lento na foto)

#### 5C — Mapa Interativo de Sinop
- Leaflet.js + OpenStreetMap (gratuito, sem API key)
- 25+ pins no mapa de Sinop
- Cores por categoria: amarelo (comercial), verde (serviços), azul (indústria), vermelho (alimentação)
- Tooltip ao clicar: nome da empresa + categoria
- Header ao lado: "25+ empresas no mapa · Sinop, MT"
- Stats ao lado: contador de empresas por categoria

### 06 — Depoimentos
- Cards com foto do cliente, nome, empresa e depoimento
- Design atual mantido, apenas refinado

### 07 — Energia por Assinatura
- Bloco elegante sem ser o foco principal
- Chip: "Novo" + headline + 3 benefícios resumidos + CTA para página dedicada
- Próximo ao final da página

### 08 — CTA Final + Contato
- Seção de conversão com headline forte
- Formulário + WhatsApp em destaque
- Design atual mantido

## Decisões Técnicas

### Mapa Interativo
- **Biblioteca:** `leaflet` + `react-leaflet`
- **Tiles:** OpenStreetMap (gratuito)
- **Coordenadas:** 25 empresas com lat/lng baseadas na geografia real de Sinop
- **Renderização:** `dynamic import` com `ssr: false` (Leaflet não funciona com SSR)

### Scroll Story
- **Técnica:** `position: sticky` + `useScroll` do Framer Motion
- **Progresso:** `scrollYProgress` mapeado para mostrar benefícios 1-4
- **Container:** altura = `100vh * 5` para criar espaço de scroll suficiente

### Reel de Fotos
- **Estado:** `useState` para índice atual + `setInterval` para auto-avançar
- **Animação:** Framer Motion `AnimatePresence` com fade in/out
- **Ken Burns:** CSS `@keyframes` com `scale(1) → scale(1.05)` em 8s

### Logo Carrossel
- **Técnica:** CSS puro, `@keyframes scroll` com `translateX`
- **Duplicação:** logos duplicados para efeito infinito seamless
- **Performance:** `will-change: transform` para GPU acceleration

## Dados das Empresas (Mapa)

```javascript
const clients = [
  { name: "Ford Disbrava", lat: -11.8510, lng: -55.5295, type: "comercial" },
  { name: "Uniclinica", lat: -11.8680, lng: -55.5170, type: "saude" },
  { name: "Sinop Boulevard Shopping", lat: -11.8555, lng: -55.5080, type: "comercial" },
  { name: "Tratormax", lat: -11.8820, lng: -55.5010, type: "comercial" },
  { name: "Mineracao Campagnolo", lat: -11.8900, lng: -55.4850, type: "industria" },
  { name: "Velog Caminhoes", lat: -11.8490, lng: -55.5320, type: "comercial" },
  { name: "Nortao Parafusos", lat: -11.8600, lng: -55.4920, type: "comercial" },
  { name: "Grupo Gardim", lat: -11.8570, lng: -55.5010, type: "servicos" },
  { name: "Bussolaro Empreendimentos", lat: -11.8530, lng: -55.5050, type: "servicos" },
  { name: "Agropel Sementes", lat: -11.8840, lng: -55.4970, type: "comercial" },
  { name: "Arenop", lat: -11.8620, lng: -55.4760, type: "industria" },
  { name: "Rosul Auto Pecas", lat: -11.8590, lng: -55.5130, type: "comercial" },
  { name: "Grafpel", lat: -11.8545, lng: -55.5065, type: "servicos" },
  { name: "Encore Empreendimentos", lat: -11.8515, lng: -55.5020, type: "servicos" },
  { name: "Bonfanti Telhas", lat: -11.8750, lng: -55.4890, type: "industria" },
  { name: "Pienezza", lat: -11.8560, lng: -55.5090, type: "alimentacao" },
  { name: "Fortepar", lat: -11.8650, lng: -55.5040, type: "comercial" },
  { name: "Serranas Churrascaria", lat: -11.8700, lng: -55.5155, type: "alimentacao" },
  { name: "Barbosa Ribs", lat: -11.8575, lng: -55.5100, type: "alimentacao" },
  { name: "AGN Empreendimentos", lat: -11.8540, lng: -55.5035, type: "servicos" },
  { name: "ASX", lat: -11.8610, lng: -55.5000, type: "servicos" },
  { name: "Transterra", lat: -11.8800, lng: -55.5020, type: "servicos" },
  { name: "MyBroker", lat: -11.8565, lng: -55.5075, type: "comercial" },
  { name: "Sinoblocos", lat: -11.8710, lng: -55.4830, type: "industria" },
  { name: "Frialto", lat: -11.8730, lng: -55.4950, type: "industria" },
]
```

## Logos das Empresas (37 clientes)

ASX, Transterra, Granja, Arenop, Zico, Agropel Sementes, Sinoblocos, Flora Sinop, Tratormax, Brustolon Máquinas, Encore Empreendimentos, Sementes Lara, Rosul Auto Peças, Pro-Med, Posto de Molas Catarinense, Grafpel, MT Painéis, Bonfanti Telhas, Nortão Parafusos, Mineração Campagnolo, Pienezza, Pré-Dileta, Grupo Gardim, Usinop, Velog, Uniclínica, MyBroker, Fortepar, Sinop Boulevard, Frialto, Bussolaro Empreendimentos, Serranas, Barbosa Ribs, Frigobom, AGN, Ford Disbrava, Urbano Norte

## Arquivos Principais a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `components/Hero.tsx` | Modificar — novo layout cinematográfico |
| `components/Stats.tsx` | Modificar — contadores animados com useInView |
| `components/ScrollStory.tsx` | Criar — seção Apple-style pinada |
| `components/WinnerBlocks.tsx` | Criar — blocos alternados estilo Jinko |
| `components/SocialProof.tsx` | Criar — container dos 3 blocos |
| `components/LogoCarousel.tsx` | Criar — carrossel CSS infinito |
| `components/ProjectReel.tsx` | Criar — slideshow cinematográfico |
| `components/SinopMap.tsx` | Criar — mapa Leaflet com pins |
| `components/SubscriptionBlock.tsx` | Modificar — bloco assinatura refinado |
| `app/page.tsx` | Modificar — nova ordem de seções |
| `lib/clients-data.ts` | Criar — dados dos clientes e coordenadas |
| `lib/projects-data.ts` | Criar — dados dos projetos (fotos + nomes) |
| `public/images/projects/` | — Fotos das usinas do cliente |
