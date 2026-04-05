# Homepage Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesenhar a homepage da Dorata Solar combinando experiência cinematográfica (Apple) com autoridade por dados (JinkoSolar), criando o site de energia solar mais impressionante de Sinop/MT.

**Architecture:** Novos componentes isolados para cada seção nova (ScrollStory, WinnerBlocks, SocialProof, LogoCarousel, ProjectReel, SinopMap) + arquivos de dados em `/lib`. O `app/page.tsx` orquestra tudo na nova ordem. Leaflet carregado com `dynamic import + ssr:false`.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion v12, Leaflet + react-leaflet, CSS Keyframes

---

## Chunk 1: Dados e Fundação

### Task 1: Instalar dependências e criar arquivos de dados

**Files:**
- Create: `lib/clients-data.ts`
- Create: `lib/projects-data.ts`
- Modify: `package.json`

- [ ] **Step 1: Instalar Leaflet**

```bash
cd "/Users/guilhermedamasceno/Dorata - site"
npm install leaflet react-leaflet @types/leaflet
```

Expected: packages added without errors.

- [ ] **Step 2: Criar `lib/clients-data.ts`**

```typescript
// lib/clients-data.ts
export type ClientType = 'comercial' | 'industria' | 'saude' | 'alimentacao' | 'servicos'

export interface Client {
  name: string
  lat: number
  lng: number
  type: ClientType
}

export const clients: Client[] = [
  { name: "Ford Disbrava", lat: -11.8510, lng: -55.5295, type: "comercial" },
  { name: "Uniclínica", lat: -11.8680, lng: -55.5170, type: "saude" },
  { name: "Sinop Boulevard", lat: -11.8555, lng: -55.5080, type: "comercial" },
  { name: "Tratormax", lat: -11.8820, lng: -55.5010, type: "comercial" },
  { name: "Mineração Campagnolo", lat: -11.8900, lng: -55.4850, type: "industria" },
  { name: "Velog Caminhões", lat: -11.8490, lng: -55.5320, type: "comercial" },
  { name: "Nortão Parafusos", lat: -11.8600, lng: -55.4920, type: "comercial" },
  { name: "Grupo Gardim", lat: -11.8570, lng: -55.5010, type: "servicos" },
  { name: "Bussolaro Empreendimentos", lat: -11.8530, lng: -55.5050, type: "servicos" },
  { name: "Agropel Sementes", lat: -11.8840, lng: -55.4970, type: "comercial" },
  { name: "Arenop", lat: -11.8620, lng: -55.4760, type: "industria" },
  { name: "Rosul Auto Peças", lat: -11.8590, lng: -55.5130, type: "comercial" },
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

export const logoClients: string[] = [
  "ASX", "Transterra", "Granja", "Arenop", "Zico", "Agropel Sementes",
  "Sinoblocos", "Flora Sinop", "Tratormax", "Brustolon Máquinas",
  "Encore", "Sementes Lara", "Rosul Auto Peças", "Pro-Med",
  "Catarinense", "Grafpel", "MT Painéis", "Bonfanti",
  "Nortão Parafusos", "Min. Campagnolo", "Pienezza", "Pré-Dileta",
  "Grupo Gardim", "Usinop", "Velog", "Uniclínica",
  "MyBroker", "Fortepar", "Sinop Boulevard", "Frialto",
  "Bussolaro", "Serranas", "Barbosa Ribs", "Frigobom",
  "AGN", "Ford Disbrava", "Urbano Norte",
]
```

- [ ] **Step 3: Criar `lib/projects-data.ts`**

```typescript
// lib/projects-data.ts
export interface Project {
  id: number
  company: string
  location: string
  imagePath: string
}

// IMPORTANT: Substituir imagePath com os caminhos reais das fotos
// Copiar as fotos das usinas para /public/images/projects/
// Nomear como: project-01.jpg, project-02.jpg, etc.
export const projects: Project[] = [
  { id: 1, company: "MyBroker", location: "Sinop, MT", imagePath: "/images/projects/project-01.jpg" },
  { id: 2, company: "Mineração Campagnolo", location: "Sinop, MT", imagePath: "/images/projects/project-02.jpg" },
  { id: 3, company: "Tratormax", location: "Sinop, MT", imagePath: "/images/projects/project-03.jpg" },
  { id: 4, company: "Ford Disbrava", location: "Sinop, MT", imagePath: "/images/projects/project-04.jpg" },
  { id: 5, company: "Grupo Gardim", location: "Sinop, MT", imagePath: "/images/projects/project-05.jpg" },
  { id: 6, company: "Bonfanti Telhas", location: "Sinop, MT", imagePath: "/images/projects/project-06.jpg" },
  { id: 7, company: "Agropel Sementes", location: "Sinop, MT", imagePath: "/images/projects/project-07.jpg" },
  { id: 8, company: "Uniclínica", location: "Sinop, MT", imagePath: "/images/projects/project-08.jpg" },
]
```

- [ ] **Step 4: Criar pasta para as fotos dos projetos**

```bash
mkdir -p "/Users/guilhermedamasceno/Dorata - site/public/images/projects"
```

- [ ] **Step 5: Commit**

```bash
cd "/Users/guilhermedamasceno/Dorata - site"
git add lib/clients-data.ts lib/projects-data.ts public/images/projects/ package.json package-lock.json
git commit -m "feat: add clients/projects data and install leaflet"
```

---

## Chunk 2: Hero + Stats Renovados

### Task 2: Renovar o Hero para layout cinematográfico

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Ler o arquivo atual**

```bash
cat "/Users/guilhermedamasceno/Dorata - site/components/Hero.tsx"
```

- [ ] **Step 2: Substituir pelo novo Hero**

Reescrever `components/Hero.tsx` com:

```tsx
'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image/video */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-usina.jpg')" }}
        />
        {/* Gradiente escuro sobre a imagem */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Chip de autoridade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 text-yellow-400 text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Referência no Norte do Mato Grosso
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6"
        >
          Energia limpa para{' '}
          <span className="text-yellow-400">Sinop</span>
          <br />e região.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Instalamos usinas fotovoltaicas para empresas e residências com qualidade garantida e suporte local.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/556599999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-base font-bold rounded-full"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#projetos"
            className="btn-outline px-8 py-4 text-base font-bold rounded-full"
          >
            Ver Projetos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator estilo Apple */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 3: Verificar que compila**

```bash
cd "/Users/guilhermedamasceno/Dorata - site"
npm run build 2>&1 | tail -20
```

Expected: build passa sem erros TypeScript no Hero.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: redesign hero with cinematic full-screen layout"
```

### Task 3: Contadores animados no Stats

**Files:**
- Modify: `components/Stats.tsx`

- [ ] **Step 1: Ler o Stats atual**

```bash
cat "/Users/guilhermedamasceno/Dorata - site/components/Stats.tsx"
```

- [ ] **Step 2: Adicionar hook de contador animado e useInView**

Substituir `components/Stats.tsx`:

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 20, suffix: '+', label: 'Usinas instaladas' },
  { value: 37, suffix: '', label: 'Empresas atendidas' },
  { value: 5, suffix: '+', label: 'Anos em Sinop' },
  { value: 100, suffix: '%', label: 'Satisfação garantida' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-black text-yellow-400 mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/50 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Build check**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 4: Commit**

```bash
git add components/Stats.tsx
git commit -m "feat: animated counters in stats section with useInView trigger"
```

---

## Chunk 3: Scroll Story (Estilo Apple)

### Task 4: Criar componente ScrollStory

**Files:**
- Create: `components/ScrollStory.tsx`

- [ ] **Step 1: Criar `components/ScrollStory.tsx`**

```tsx
'use client'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { DollarSign, ClipboardCheck, MapPin, Shield } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    label: 'Economia Real',
    headline: 'Reduza até 95%\nda sua conta de luz.',
    description: 'Nossas usinas são dimensionadas para o consumo real da sua empresa ou residência — sem pagar a mais, sem ficar no escuro.',
    color: '#facc15',
  },
  {
    icon: ClipboardCheck,
    label: 'Zero Burocracia',
    headline: 'A Dorata cuida\nde tudo.',
    description: 'Do projeto elétrico à aprovação na distribuidora, passando pela instalação. Você só assina e começa a economizar.',
    color: '#00BB47',
  },
  {
    icon: MapPin,
    label: 'Suporte Local',
    headline: 'Equipe em Sinop,\natendimento rápido.',
    description: 'Não somos uma empresa de fora. Somos de Sinop — quando você precisar, estamos a poucos minutos de você.',
    color: '#60a5fa',
  },
  {
    icon: Shield,
    label: 'Garantia Total',
    headline: '25 anos de garantia\nnos painéis.',
    description: 'Trabalhamos com equipamentos tier-1 com garantia de fábrica. Sua usina vai continuar produzindo quando seus filhos forem adultos.',
    color: '#a78bfa',
  },
]

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={containerRef} style={{ height: `${benefits.length * 100 + 100}vh` }} className="relative">
      {/* Sticky panel */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Lado esquerdo: texto que muda */}
          <div className="relative h-64">
            {benefits.map((benefit, i) => {
              const start = i / benefits.length
              const end = (i + 1) / benefits.length
              const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
              const y = useTransform(scrollYProgress, [start - 0.05, start + 0.1], [40, 0])
              const Icon = benefit.icon

              return (
                <motion.div
                  key={i}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 w-fit"
                    style={{ background: `${benefit.color}15`, color: benefit.color, border: `1px solid ${benefit.color}30` }}
                  >
                    <Icon size={12} />
                    {benefit.label}
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4 whitespace-pre-line">
                    {benefit.headline}
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed max-w-md">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Lado direito: ícone/visual que muda */}
          <div className="relative h-64 flex items-center justify-center">
            {benefits.map((benefit, i) => {
              const start = i / benefits.length
              const end = (i + 1) / benefits.length
              const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
              const scale = useTransform(scrollYProgress, [start - 0.05, start + 0.1], [0.8, 1])
              const Icon = benefit.icon

              return (
                <motion.div
                  key={i}
                  style={{ opacity, scale }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="w-48 h-48 rounded-3xl flex items-center justify-center"
                    style={{ background: `${benefit.color}10`, border: `1px solid ${benefit.color}20` }}
                  >
                    <Icon size={80} style={{ color: benefit.color }} strokeWidth={1} />
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

        {/* Indicador de progresso lateral */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {benefits.map((benefit, i) => {
            const start = i / benefits.length
            const end = (i + 1) / benefits.length
            const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.1, end - 0.1, end], [0.3, 1, 1, 0.3])
            return (
              <motion.div
                key={i}
                style={{ opacity, background: benefit.color }}
                className="w-1 h-8 rounded-full"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

```bash
npm run build 2>&1 | tail -15
```

Expected: compila sem erros. Se houver erro de `useTransform` em loop, mover os transforms para sub-componentes separados.

- [ ] **Step 3: Commit**

```bash
git add components/ScrollStory.tsx
git commit -m "feat: add Apple-style sticky scroll story section"
```

---

## Chunk 4: Winner Blocks (Estilo JinkoSolar)

### Task 5: Criar WinnerBlocks

**Files:**
- Create: `components/WinnerBlocks.tsx`

- [ ] **Step 1: Criar `components/WinnerBlocks.tsx`**

```tsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const blocks = [
  {
    badge: 'Referência em Sinop',
    headline: 'Líderes no norte\ndo Mato Grosso.',
    description: 'Desde [ANO], a Dorata Solar é a empresa de energia solar de referência em Sinop e região. Mais de 20 usinas instaladas, 37 empresas atendidas e um histórico de excelência que fala por si.',
    image: '/images/projects/project-01.jpg',
    imageAlt: 'Usina instalada pela Dorata Solar',
    imageLeft: false,
    stat: { value: '20+', label: 'usinas instaladas' },
  },
  {
    badge: 'Tecnologia de Ponta',
    headline: 'Equipamentos tier-1\ncom garantia total.',
    description: 'Utilizamos apenas painéis e inversores de fabricantes líderes mundiais — os mesmos usados em grandes usinas industriais. Qualidade que você pode medir em kilowatts e em anos de durabilidade.',
    image: '/images/projects/project-02.jpg',
    imageAlt: 'Painéis solares de alta eficiência',
    imageLeft: true,
    stat: { value: '25', label: 'anos de garantia' },
  },
  {
    badge: 'Suporte que não some',
    headline: 'Instalamos e\ncontinuamos do lado.',
    description: 'Nossa equipe técnica fica em Sinop. Qualquer dúvida, qualquer problema, qualquer manutenção — estamos a ligação de distância. Não somos uma empresa de fora que aparece, instala e some.',
    image: '/images/projects/project-03.jpg',
    imageAlt: 'Equipe Dorata Solar em ação',
    imageLeft: false,
    stat: { value: '100%', label: 'suporte local' },
  },
]

function Block({ block, index }: { block: typeof blocks[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center py-20 ${index > 0 ? 'border-t border-white/5' : ''}`}>
      {/* Imagem */}
      <motion.div
        initial={{ opacity: 0, x: block.imageLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`relative h-80 rounded-2xl overflow-hidden ${block.imageLeft ? 'md:order-1' : 'md:order-2'}`}
      >
        <Image src={block.image} alt={block.imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Stat overlay */}
        <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
          <div className="font-display text-3xl font-black text-yellow-400">{block.stat.value}</div>
          <div className="text-xs text-white/60 mt-0.5">{block.stat.label}</div>
        </div>
      </motion.div>

      {/* Texto */}
      <motion.div
        initial={{ opacity: 0, x: block.imageLeft ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        className={block.imageLeft ? 'md:order-2' : 'md:order-1'}
      >
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-3 py-1 text-yellow-400 text-xs font-semibold mb-5">
          🏆 {block.badge}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-5 whitespace-pre-line">
          {block.headline}
        </h2>
        <p className="text-white/60 leading-relaxed">
          {block.description}
        </p>
      </motion.div>
    </div>
  )
}

export default function WinnerBlocks() {
  return (
    <section className="py-10 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {blocks.map((block, i) => (
          <Block key={i} block={block} index={i} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 3: Commit**

```bash
git add components/WinnerBlocks.tsx
git commit -m "feat: add JinkoSolar-style alternating winner blocks section"
```

---

## Chunk 5: Social Proof — Logo Carousel

### Task 6: Criar LogoCarousel

**Files:**
- Create: `components/LogoCarousel.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Criar `components/LogoCarousel.tsx`**

```tsx
import { logoClients } from '@/lib/clients-data'

// Dividir em dois grupos
const half = Math.ceil(logoClients.length / 2)
const row1 = logoClients.slice(0, half)
const row2 = logoClients.slice(half)

function LogoRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items] // duplicar para loop infinito
  return (
    <div className="overflow-hidden relative">
      {/* Fade nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className={`flex gap-4 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'}`}>
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-white/5 border border-white/8 rounded-xl px-5 py-3 text-sm font-semibold text-white/70 whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function LogoCarousel() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Quem já economiza com a Dorata</p>
        <h2 className="font-display text-3xl font-black text-white">
          <span className="text-yellow-400">37 empresas</span> em Sinop já economizando
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <LogoRow items={row1} />
        <LogoRow items={row2} reverse />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Adicionar keyframes no `app/globals.css`**

Verificar se já existem `animate-scroll` e `animate-scroll-reverse`. Se não existirem, adicionar ao final do globals.css:

```css
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes scroll-reverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
```

E no `tailwind.config` (ou no globals.css com Tailwind v4):
```css
.animate-scroll {
  animation: scroll 40s linear infinite;
  will-change: transform;
}
.animate-scroll-reverse {
  animation: scroll-reverse 40s linear infinite;
  will-change: transform;
}
```

- [ ] **Step 3: Build check**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 4: Commit**

```bash
git add components/LogoCarousel.tsx app/globals.css
git commit -m "feat: add infinite logo carousel with 37 client companies"
```

---

## Chunk 6: Social Proof — ProjectReel

### Task 7: Criar ProjectReel (slideshow cinematográfico)

**Files:**
- Create: `components/ProjectReel.tsx`

- [ ] **Step 1: Criar `components/ProjectReel.tsx`**

```tsx
'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/projects-data'

export default function ProjectReel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const project = projects[current]

  return (
    <section className="py-16 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Nossas obras</p>
          <h2 className="font-display text-3xl font-black text-white">
            Instalações reais, em <span className="text-yellow-400">Sinop</span>
          </h2>
        </div>

        {/* Reel */}
        <div className="relative rounded-3xl overflow-hidden aspect-video bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Foto com Ken Burns */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 8, ease: 'linear' }}
              >
                <Image
                  src={project.imagePath}
                  alt={`Usina ${project.company}`}
                  fill
                  className="object-cover"
                  priority={current === 0}
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Barra de progresso */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
                <motion.div
                  className="h-full bg-yellow-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                />
              </div>

              {/* Contador */}
              <div className="absolute top-4 right-5 text-white/50 text-sm font-mono">
                {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </div>

              {/* Info da empresa */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{project.location}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white">{project.company}</h3>
                </div>
                {/* Badge Dorata */}
                <div className="bg-yellow-400 rounded-xl px-4 py-2 text-center">
                  <div className="text-black font-black text-xs tracking-wider">DORATA</div>
                  <div className="text-black font-black text-sm">SOLAR ⚡</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots de navegação */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-yellow-400' : 'w-2 h-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Build check**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 3: Commit**

```bash
git add components/ProjectReel.tsx
git commit -m "feat: add cinematic project reel with Ken Burns effect and auto-advance"
```

---

## Chunk 7: Social Proof — Mapa Interativo

### Task 8: Criar SinopMap com Leaflet

**Files:**
- Create: `components/SinopMap.tsx`

- [ ] **Step 1: Criar `components/SinopMap.tsx`**

```tsx
'use client'
import { useEffect, useRef } from 'react'
import { clients } from '@/lib/clients-data'

// Cores por tipo
const typeColors: Record<string, string> = {
  comercial: '#facc15',
  industria: '#f97316',
  saude: '#60a5fa',
  alimentacao: '#4ade80',
  servicos: '#a78bfa',
}

const typeLabels: Record<string, string> = {
  comercial: 'Comercial',
  industria: 'Indústria',
  saude: 'Saúde',
  alimentacao: 'Alimentação',
  servicos: 'Serviços',
}

export default function SinopMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Importar Leaflet dinamicamente (não funciona com SSR)
    import('leaflet').then(L => {
      // Fix ícones padrão do Leaflet com Next.js
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current!, {
        center: [-11.8600, -55.5050],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: false,
      })

      mapInstanceRef.current = map

      // Tile escuro (compatível com o tema do site)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      // Adicionar pins
      clients.forEach(client => {
        const color = typeColors[client.type] || '#facc15'

        const icon = L.divIcon({
          className: '',
          html: `<div style="
            width: 14px; height: 14px;
            background: ${color};
            border-radius: 50%;
            border: 2px solid rgba(255,255,255,0.8);
            box-shadow: 0 0 0 4px ${color}30, 0 0 10px ${color}60;
          "></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        })

        L.marker([client.lat, client.lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family: Inter, sans-serif; padding: 4px;">
              <strong style="color: ${color}; font-size: 14px;">${client.name}</strong>
              <div style="color: #9ca3af; font-size: 12px; margin-top: 4px;">
                ${typeLabels[client.type]} · Sinop, MT
              </div>
            </div>
          `, {
            className: 'dorata-popup',
            maxWidth: 200,
          })
      })
    })

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Stats laterais */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Nossa presença</p>
              <h2 className="font-display text-3xl font-black text-white leading-tight">
                Cada pin é uma<br />empresa que<br />
                <span className="text-yellow-400">economiza todo mês.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {Object.entries(typeColors).map(([type, color]) => (
                <div key={type} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-white/60 text-sm">{typeLabels[type]}</span>
                  <span className="text-white/30 text-sm ml-auto">
                    {clients.filter(c => c.type === type).length}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-xl p-4 text-sm text-yellow-400/80">
              📍 Você provavelmente já entrou em uma dessas empresas.
            </div>
          </div>

          {/* Mapa */}
          <div className="md:col-span-2">
            <div
              ref={mapRef}
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{ height: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Adicionar CSS do popup do Leaflet no `app/globals.css`**

```css
/* Leaflet popup personalizado */
.dorata-popup .leaflet-popup-content-wrapper {
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 8px 32px rgba(0,0,0,0.6);
}
.dorata-popup .leaflet-popup-tip {
  background: #1a1a1a;
}
```

- [ ] **Step 3: Build check**

```bash
npm run build 2>&1 | tail -15
```

- [ ] **Step 4: Commit**

```bash
git add components/SinopMap.tsx app/globals.css
git commit -m "feat: add interactive Sinop map with Leaflet and 25 client pins"
```

---

## Chunk 8: Montagem Final da Página

### Task 9: Atualizar `app/page.tsx` com a nova estrutura

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Criar SinopMap com dynamic import (necessário para Leaflet + SSR)**

Criar `components/SinopMapDynamic.tsx`:

```tsx
import dynamic from 'next/dynamic'

const SinopMap = dynamic(() => import('./SinopMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-white/5 rounded-2xl animate-pulse" />
  ),
})

export default SinopMap
```

- [ ] **Step 2: Ler app/page.tsx atual**

```bash
cat "/Users/guilhermedamasceno/Dorata - site/app/page.tsx"
```

- [ ] **Step 3: Atualizar `app/page.tsx` com nova ordem**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import ScrollStory from '@/components/ScrollStory'
import WinnerBlocks from '@/components/WinnerBlocks'
import LogoCarousel from '@/components/LogoCarousel'
import ProjectReel from '@/components/ProjectReel'
import SinopMapDynamic from '@/components/SinopMapDynamic'
import Testimonials from '@/components/Testimonials'
import RentalBlock from '@/components/RentalBlock'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* 01 — Hero cinematográfico */}
      <Hero />

      {/* 02 — Contadores animados */}
      <Stats />

      {/* 03 — Scroll Story (Apple-style) */}
      <ScrollStory />

      {/* 04 — Blocos Líder (JinkoSolar-style) */}
      <WinnerBlocks />

      {/* 05 — Prova Social */}
      {/* 5A: Logo Carousel */}
      <LogoCarousel />
      {/* 5B: Reel de fotos */}
      <ProjectReel />
      {/* 5C: Mapa interativo */}
      <SinopMapDynamic />

      {/* 06 — Depoimentos */}
      <Testimonials />

      {/* 07 — Energia por Assinatura */}
      <RentalBlock />

      {/* 08 — FAQ + Contato */}
      <FAQ />
      <ContactForm />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
```

- [ ] **Step 4: Build completo**

```bash
cd "/Users/guilhermedamasceno/Dorata - site"
npm run build
```

Expected: ✓ Compiled successfully. Se houver erros, corrigi-los antes de continuar.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx components/SinopMapDynamic.tsx
git commit -m "feat: assemble final page structure with all 8 new sections"
```

---

## Chunk 9: Deploy e Ajustes Finais

### Task 10: Deploy para Vercel e checklist de qualidade

**Files:**
- Nenhum arquivo novo — push para GitHub aciona deploy automático

- [ ] **Step 1: Adicionar foto placeholder para o Hero**

```bash
# Se não existir foto de hero, usar uma das fotos dos projetos como fallback
cp "/Users/guilhermedamasceno/Dorata - site/public/images/projects/project-01.jpg" \
   "/Users/guilhermedamasceno/Dorata - site/public/images/hero-usina.jpg" 2>/dev/null || echo "Copiar manualmente"
```

- [ ] **Step 2: Verificar Leaflet CSS no layout.tsx**

Adicionar o import do CSS do Leaflet no `app/layout.tsx`:

```tsx
// Adicionar no topo do arquivo:
import 'leaflet/dist/leaflet.css'
```

- [ ] **Step 3: Build final limpo**

```bash
cd "/Users/guilhermedamasceno/Dorata - site"
npm run build
```

Expected: ✓ sem erros, todas as páginas geradas.

- [ ] **Step 4: Push para GitHub (aciona deploy automático)**

```bash
git push origin main
```

Expected: deploy automático na Vercel via GitHub Actions.

- [ ] **Step 5: Verificar deploy**

```bash
export PATH="/usr/local/bin:$HOME/.local/bin:$PATH"
vercel ls --scope rentals-projects-9cc4d9e3 2>&1 | head -10
```

- [ ] **Step 6: Checklist de qualidade visual**
  - [ ] Hero: headline aparece com animação, scroll indicator bate
  - [ ] Stats: contadores sobem ao entrar em viewport
  - [ ] ScrollStory: seção "gruda" e benefícios mudam com o scroll
  - [ ] WinnerBlocks: imagens e textos deslizam ao aparecer
  - [ ] LogoCarousel: dois rows rolando em direções opostas, infinito
  - [ ] ProjectReel: fotos trocam a cada 4s, barra de progresso anima
  - [ ] SinopMap: mapa carrega, pins aparecem, tooltip ao clicar
  - [ ] Mobile: todas as seções responsivas

- [ ] **Step 7: Commit final**

```bash
git add app/layout.tsx
git commit -m "feat: complete homepage redesign - Dorata Solar v2"
git push origin main
```

---

## ⚠️ Nota Importante — Fotos das Usinas

Antes de rodar o Task 1, o usuário precisa:
1. Copiar as fotos das usinas (do arquivo `teste site.pdf`) para `/public/images/projects/`
2. Nomear como `project-01.jpg`, `project-02.jpg`, etc.
3. Confirmar os nomes das empresas correspondentes em `lib/projects-data.ts`

Sem as fotos reais, o ProjectReel e o WinnerBlocks usarão imagens placeholder.
