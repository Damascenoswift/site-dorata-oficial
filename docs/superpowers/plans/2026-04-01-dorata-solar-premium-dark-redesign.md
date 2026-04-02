# Dorata Solar Premium Dark Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refatorar o site da Dorata Solar para uma estética premium dark com paleta preta/amarela, tipografia Syne + Inter, e animações de scroll cinematográficas.

**Architecture:** Substituir o sistema visual verde atual por um tema dark com variáveis CSS centralizadas em `globals.css`. Criar `lib/animations.ts` com variants Framer Motion reutilizáveis. Cada componente é refatorado individualmente, preservando toda a lógica existente (estado, handlers, links).

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion 12, Lucide React, Google Fonts (Syne + Inter)

---

## Chunk 1: Fundação — Estilos Globais e Fontes

### Task 1: Trocar fontes no layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Substituir Poppins por Syne + Inter**

```tsx
import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dorata Solar",
  description: "Conectamos você ao futuro com energia limpa e soluções inteligentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Abrir `http://localhost:3000`. Confirmar que a fonte carregou (tipografia deve parecer diferente do Poppins).

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: swap fonts to Syne + Inter"
```

---

### Task 2: Reescrever globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Substituir todo o conteúdo de globals.css**

```css
@import "tailwindcss";

@theme {
  /* Fontes */
  --font-sans: var(--font-inter);
  --font-display: var(--font-syne);

  /* Paleta dark */
  --color-bg:        #0a0a0a;
  --color-surface-1: #111111;
  --color-surface-2: #1a1a1a;
  --color-border:    #2a2a2a;

  --color-text-primary:   #ffffff;
  --color-text-secondary: #a1a1aa;
  --color-text-muted:     #52525b;

  --color-accent:       #facc15;
  --color-accent-hover: #ca9a04;

  /* Animações */
  --animate-fade-in: fade-in 0.7s ease-out;
}

:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-inter), system-ui, sans-serif;
  min-height: 100vh;
}

/* Utilitários reutilizáveis */

.font-display {
  font-family: var(--font-syne), system-ui, sans-serif;
}

.section-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 999px;
  border: 1px solid color-mix(in oklab, #facc15 30%, transparent);
  background: color-mix(in oklab, #facc15 10%, transparent);
  color: #facc15;
  padding: 0.25rem 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.68rem;
  font-weight: 600;
  font-family: var(--font-inter), system-ui, sans-serif;
}

.card-dark {
  background: #111111;
  border: 1px solid #2a2a2a;
  border-radius: 1rem;
  transition: border-color 0.25s ease;
}

.card-dark:hover {
  border-color: color-mix(in oklab, #facc15 50%, transparent);
}

.btn-primary {
  background: #facc15;
  color: #000000;
  font-weight: 600;
  border-radius: 999px;
  padding: 0.875rem 2rem;
  transition: background 0.2s ease, transform 0.2s ease;
  font-family: var(--font-inter), system-ui, sans-serif;
}

.btn-primary:hover {
  background: #fde047;
  transform: translateY(-1px);
}

.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  border-radius: 999px;
  padding: 0.875rem 2rem;
  transition: border-color 0.2s ease, background 0.2s ease;
  font-family: var(--font-inter), system-ui, sans-serif;
}

.btn-outline:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.05);
}

.focus-ring {
  outline: none;
}

.focus-ring:focus-visible {
  box-shadow: 0 0 0 3px color-mix(in oklab, #facc15 40%, transparent);
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 2: Verificar no browser**

`http://localhost:3000`. O fundo deve estar preto. Textos em branco. Sem erros no console.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: redesign globals.css with dark palette and new tokens"
```

---

### Task 3: Criar lib/animations.ts com variants reutilizáveis

**Files:**
- Create: `lib/animations.ts`

- [ ] **Step 1: Criar arquivo**

```bash
mkdir -p lib
```

- [ ] **Step 2: Escrever variants**

```ts
// lib/animations.ts
import type { Variants } from "framer-motion";

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const viewportOnce = { once: true, margin: "-80px" };
```

- [ ] **Step 3: Commit**

```bash
git add lib/animations.ts
git commit -m "feat: add shared Framer Motion animation variants"
```

---

## Chunk 2: Navbar e Hero

### Task 4: Refatorar Navbar

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = "font-medium transition-colors text-white/60 hover:text-white text-sm";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-display text-xl font-bold text-white tracking-tight">
            Dorata<span className="text-yellow-400">Solar</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className={`${navLinkClass} flex items-center gap-1`}>
              Nossos Produtos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-180 transition-transform duration-200">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden p-2 shadow-2xl">
                <Link href="/" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Sistemas Fotovoltaicos</div>
                  <div className="text-xs text-white/50 mt-0.5">Energia solar para casa ou empresa</div>
                </Link>
                <Link href="/energia-por-assinatura" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Energia por Assinatura</div>
                  <div className="text-xs text-white/50 mt-0.5">Economize sem investimento (Rental)</div>
                </Link>
                <Link href="#contact" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Usina de Investimento</div>
                  <div className="text-xs text-white/50 mt-0.5">Retorno garantido com energia</div>
                </Link>
                <Link href="#contact" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Mobilidade Elétrica</div>
                  <div className="text-xs text-white/50 mt-0.5">Soluções para carregamento</div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#about" className={navLinkClass}>Sobre Nós</Link>

          <Link
            href="#contact"
            className="border border-yellow-400/60 text-yellow-400 text-sm font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200"
          >
            Orçamentos
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a] absolute top-full left-0 w-full py-6 px-6"
          >
            <div className="flex flex-col gap-5">
              <Link href="#solutions" className="text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Soluções</Link>
              <Link href="#about" className="text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</Link>
              <Link href="/energia-por-assinatura" className="text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Energia por Assinatura</Link>
              <Link
                href="#contact"
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full text-center hover:bg-yellow-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Orçamentos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Confirmar logo "Dorata**Solar**" (amarelo), links brancos, CTA outline amarelo. Scrollar: fundo escuro ativa. Mobile: hambúrguer funciona.

- [ ] **Step 3: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: redesign Navbar with dark theme and yellow accent"
```

---

### Task 5: Refatorar Hero

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
      {/* Glow decorativo amarelo sutil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 w-full pt-28 pb-20">
        <div className="max-w-4xl">

          {/* Chip */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="section-chip mb-8 block w-fit"
          >
            Energia inteligente para empresas e residências
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6"
          >
            Conectamos você ao{" "}
            <span className="text-yellow-400">futuro</span>{" "}
            com energia limpa.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Na Dorata, transformamos a tecnologia solar em economia real.
            Soluções inteligentes para um mundo mais sustentável.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Fale com um Especialista <ArrowRight size={18} />
            </Link>
            <Link href="#solutions" className="btn-outline inline-flex items-center justify-center">
              Conheça as Soluções
            </Link>
          </motion.div>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-12 border-t border-[#2a2a2a] pt-10"
          >
            {[
              { value: "20%", label: "economia média mensal" },
              { value: "500+", label: "projetos executados" },
              { value: "100%", label: "energia renovável" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-yellow-400 leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Título enorme em Syne, "futuro" em amarelo, 3 stats sem cards abaixo. Glow sutil ao fundo. Sem imagem de background. Responsivo.

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: redesign Hero with dark theme, yellow accent, clean layout"
```

---

## Chunk 3: Stats, Services e HowItWorks

### Task 6: Refatorar Stats

**Files:**
- Modify: `components/Stats.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUpVariant, staggerContainer, viewportOnce } from "@/lib/animations";

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.includes("+") ? "+" : "";

  const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (v) =>
    Math.round(v).toLocaleString("pt-BR") + suffix
  );

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, numericValue, spring]);

  return (
    <motion.div ref={ref} variants={fadeUpVariant} className="text-center">
      <motion.p className="font-display text-4xl lg:text-5xl font-bold text-yellow-400 mb-2 leading-none">
        {displayValue}
      </motion.p>
      <p className="text-white/50 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { label: "Painéis Instalados",     value: "400.000+" },
    { label: "Energia Gerada (kWh)",   value: "24.000.000+" },
    { label: "Projetos Executados",    value: "500+" },
    { label: "Ton. de CO2 Evitadas",   value: "10.000+" },
  ];

  return (
    <section className="bg-[#111111] py-20 border-y border-[#2a2a2a]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16"
        >
          {stats.map((stat, i) => (
            <Counter key={i} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Números grandes Syne/amarelo, sem cards, fundo `#111111`. Animação de contagem ao scrollar.

- [ ] **Step 3: Commit**

```bash
git add components/Stats.tsx
git commit -m "feat: redesign Stats with typographic-only layout"
```

---

### Task 7: Refatorar Services

**Files:**
- Modify: `components/Services.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { HandCoins, Leaf, Building2, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function Services() {
  const services = [
    {
      title: "Economia Garantida",
      description: "Reduza significativamente seus custos com energia. Oferecemos até 20% de economia garantida na sua fatura, com investimento zero.",
      icon: <Wallet size={28} className="text-yellow-400" />,
    },
    {
      title: "Sustentabilidade",
      description: "Energia 100% renovável e limpa. Ao escolher a Dorata, você contribui diretamente para a redução de emissões de CO2.",
      icon: <Leaf size={28} className="text-yellow-400" />,
    },
    {
      title: "Gestão Completa",
      description: "Deixe a burocracia com a gente. Cuidamos de toda a operação, manutenção e gestão das usinas e créditos de energia.",
      icon: <Building2 size={28} className="text-yellow-400" />,
    },
    {
      title: "Flexibilidade",
      description: "Soluções personalizadas para sua necessidade, seja você um consumidor que quer economizar ou um investidor.",
      icon: <HandCoins size={28} className="text-yellow-400" />,
    },
  ];

  return (
    <section id="solutions" className="py-28 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Nossas Soluções
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Por que escolher a{" "}
            <span className="text-yellow-400">Dorata Solar</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 mt-4 text-lg leading-relaxed"
          >
            Oferecemos um ecossistema completo para quem busca economia e sustentabilidade sem complicação.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card-dark p-8 group cursor-default"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

4 cards dark, ícones amarelos, hover com borda amarela sutil. Título alinhado à esquerda (não centralizado).

- [ ] **Step 3: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: redesign Services with dark cards and yellow icons"
```

---

### Task 8: Refatorar HowItWorks

**Files:**
- Modify: `components/HowItWorks.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { motion } from "framer-motion";
import { UserPlus, FileText, Sun } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cadastro Simples",
      description: "Preencha seus dados e envie uma foto da sua conta de luz. É rápido e 100% digital.",
      icon: <UserPlus size={20} className="text-black" />,
    },
    {
      number: "02",
      title: "Análise e Contrato",
      description: "Receba sua proposta de economia garantida e assine o contrato digitalmente.",
      icon: <FileText size={20} className="text-black" />,
    },
    {
      number: "03",
      title: "Economia Ativada",
      description: "Pronto! Você começa a receber os créditos de energia solar e paga menos na sua conta.",
      icon: <Sun size={20} className="text-black" />,
    },
  ];

  return (
    <section className="py-28 bg-[#111111] border-y border-[#2a2a2a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Passo a Passo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Veja como é simples{" "}
            <span className="text-yellow-400">economizar</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-12 md:gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-[#2a2a2a]" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={staggerItem} className="relative">
              {/* Number + icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <span className="font-display text-6xl font-extrabold text-yellow-400/20 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Números grandes amarelo/transparente como elemento visual de fundo. Ícone pequeno sobre o número. Linha conectora discreta no desktop.

- [ ] **Step 3: Commit**

```bash
git add components/HowItWorks.tsx
git commit -m "feat: redesign HowItWorks with typographic numbers and yellow icons"
```

---

## Chunk 4: About, FAQ, ContactForm e Footer

### Task 9: Refatorar About

**Files:**
- Modify: `components/About.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function About() {
  const team = [
    { name: "Moacir Omizzollo",         role: "FOUNDER", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" },
    { name: "Moacir Junior Omizzollo",  role: "CEO",     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" },
    { name: "Cássia Ap. Ribeiro Omizzollo", role: "CFO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" },
    { name: "Bruno Felipe Omizzollo",   role: "COO",     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop" },
  ];

  return (
    <section id="about" className="py-28 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Sobre A Dorata
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Liderança que{" "}
            <span className="text-yellow-400">inspira o futuro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 mt-4 text-lg leading-relaxed"
          >
            Nossa missão é democratizar o acesso à energia limpa com transparência e eficiência.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={staggerItem} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4] border border-[#2a2a2a] group-hover:border-yellow-400/50 transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-yellow-400 text-xs font-semibold tracking-[0.1em] uppercase mb-1">{member.role}</p>
              <h3 className="font-display text-white font-bold text-lg leading-tight">{member.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Fotos em grayscale, hover → coloridas + borda amarela. Role em amarelo acima do nome.

- [ ] **Step 3: Commit**

```bash
git add components/About.tsx
git commit -m "feat: redesign About with dark cards and yellow role labels"
```

---

### Task 10: Refatorar FAQ

**Files:**
- Modify: `components/FAQ.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function FAQ() {
  const faqs = [
    {
      question: "Preciso fazer alguma obra no meu telhado?",
      answer: "Não! Nossa energia é gerada em usinas solares remotas. Você adere ao sistema de assinatura e os créditos são injetados diretamente na sua conta de luz, sem nenhuma instalação na sua casa ou empresa.",
    },
    {
      question: "Tem custo de adesão ou fidelidade?",
      answer: "A adesão é totalmente gratuita. Não cobramos taxa de instalação nem de manutenção.",
    },
    {
      question: "Quanto vou economizar?",
      answer: "Oferecemos uma economia garantida de até 20% sobre o valor da sua tarifa de energia atual (dependendo da sua região e perfil de consumo).",
    },
    {
      question: "E se eu quiser cancelar?",
      answer: "O processo de cancelamento é simples e sem burocracia, apenas pedimos um aviso prévio conforme contrato para desvincular sua unidade da usina.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-[#111111] border-y border-[#2a2a2a]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: Header */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="section-chip mb-4 block w-fit"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="font-display text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]"
            >
              Dúvidas{" "}
              <span className="text-yellow-400">Frequentes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="text-white/50 mt-4 leading-relaxed"
            >
              Tudo o que você precisa saber sobre a energia solar por assinatura da Dorata.
            </motion.p>
          </div>

          {/* Right: Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-colors"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus-ring"
                >
                  <span className="font-display font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="text-yellow-400 shrink-0">
                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-[#2a2a2a] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Layout 2 colunas no desktop (header + accordion). Ícone `+`/`−` amarelo. Acordeão animado. Fundo `#111111`.

- [ ] **Step 3: Commit**

```bash
git add components/FAQ.tsx
git commit -m "feat: redesign FAQ with 2-col layout and dark accordion"
```

---

### Task 11: Refatorar ContactForm

**Files:**
- Modify: `components/ContactForm.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { fadeUpVariant, viewportOnce } from "@/lib/animations";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-white/25 focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 outline-none transition-all text-sm";

const labelClass = "block text-xs font-semibold text-white/50 uppercase tracking-[0.08em] mb-2";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "", email: "", phone: "", billValue: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Recebemos seus dados e entraremos em contato em breve.");
    setFormState({ name: "", email: "", phone: "", billValue: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Solicite seu Orçamento
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Comece a{" "}
            <span className="text-yellow-400">economizar</span> agora
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10 space-y-8"
          >
            <h3 className="font-display text-2xl font-bold text-white">Fale Conosco</h3>

            {[
              { icon: <Phone size={20} className="text-yellow-400" />, title: "Telefone / WhatsApp", lines: ["(00) 99999-9999", "Seg - Sex, 8h às 18h"] },
              { icon: <Mail size={20} className="text-yellow-400" />, title: "Email", lines: ["contato@doratasolar.com.br"] },
              { icon: <MapPin size={20} className="text-yellow-400" />, title: "Endereço", lines: ["Av. Paulista, 1000 - Sala 123", "Bela Vista, São Paulo - SP"] },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  {item.lines.map((l, j) => (
                    <p key={j} className="text-white/50 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Nome Completo</label>
                  <input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>WhatsApp</label>
                  <input type="tel" id="phone" name="phone" required value={formState.phone} onChange={handleChange} className={inputClass} placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} className={inputClass} placeholder="seu@email.com" />
              </div>

              <div>
                <label htmlFor="billValue" className={labelClass}>Valor Médio da Conta de Luz</label>
                <select id="billValue" name="billValue" required value={formState.billValue} onChange={handleChange} className={inputClass}>
                  <option value="">Selecione uma opção</option>
                  <option value="ate-500">Até R$ 500,00</option>
                  <option value="500-1000">R$ 500,00 a R$ 1.000,00</option>
                  <option value="1000-2500">R$ 1.000,00 a R$ 2.500,00</option>
                  <option value="2500-5000">R$ 2.500,00 a R$ 5.000,00</option>
                  <option value="acima-5000">Acima de R$ 5.000,00</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Mensagem (Opcional)</label>
                <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Gostaria de saber mais sobre..." />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
              >
                <Send size={16} />
                Solicitar Orçamento Grátis
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Dois cards dark lado a lado. Inputs com fundo `#1a1a1a`, focus com borda amarela. Botão submit amarelo sólido. Labels em uppercase pequeno.

- [ ] **Step 3: Commit**

```bash
git add components/ContactForm.tsx
git commit -m "feat: redesign ContactForm with dark inputs and yellow focus"
```

---

### Task 12: Refatorar Footer

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
import Link from "next/link";
import { Instagram, Linkedin, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="font-display text-xl font-bold text-white">
                Dorata<span className="text-yellow-400">Solar</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Transformando o futuro com energia limpa e soluções inteligentes para sua casa e empresa.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-white/40 hover:text-yellow-400 hover:border-yellow-400/40 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Navegação</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {[
                { label: "Soluções", href: "#solutions" },
                { label: "Vantagens", href: "#benefits" },
                { label: "Sobre Nós", href: "#about" },
                { label: "Área do Cliente", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Informações</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {["Política de Privacidade", "Termos de Uso", "Trabalhe Conosco"].map((label) => (
                <li key={label}>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contato</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                <span>Endereço da Empresa, 123<br />Cidade - UF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400 shrink-0" />
                <span>contato@doratasolar.com.br</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/"
                  className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5"
                >
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center text-white/25 text-xs">
          <p>&copy; {new Date().getFullYear()} Dorata Solar. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com energia limpa.</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Fundo `#050505` (mais escuro que o body). Links com hover amarelo. Ícones sociais com hover amarelo. Logo com "Solar" em amarelo.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: redesign Footer with dark theme and yellow accents"
```

---

## Chunk 5: Projects, Testimonials e WhatsAppButton

### Task 13: Refatorar Projects

**Files:**
- Modify: `components/Projects.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function Projects() {
  const projects = [
    { name: "Indústria Têxtil Silva",   location: "São Paulo, SP",     power: "1.2 MWp" },
    { name: "Supermercados Estrela",    location: "Campinas, SP",      power: "850 kWp" },
    { name: "Condomínio Viver Bem",     location: "Belo Horizonte, MG",power: "500 kWp" },
    { name: "Agropecuária Boa Vista",   location: "Goiânia, GO",       power: "2.5 MWp" },
    { name: "Shopping Center Norte",    location: "São Paulo, SP",     power: "3.1 MWp" },
    { name: "Hospital Santa Clara",     location: "Curitiba, PR",      power: "1.8 MWp" },
    { name: "Rede Postos Aliança",      location: "Ribeirão Preto, SP",power: "600 kWp" },
    { name: "Centro Logístico Via",     location: "Jundiaí, SP",       power: "4.0 MWp" },
  ];

  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Cases de Sucesso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Empresas que confiam na{" "}
            <span className="text-yellow-400">Dorata</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 mt-4 text-lg leading-relaxed"
          >
            Já transformamos a realidade energética de dezenas de grandes empresas.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card-dark p-6 group flex flex-col items-center justify-center text-center h-32 md:h-36"
            >
              <div className="w-10 h-10 border border-yellow-400/20 bg-yellow-400/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/40 transition-colors">
                <Building size={18} className="text-yellow-400" />
              </div>
              <h3 className="font-display font-bold text-white text-sm leading-snug">
                {project.name}
              </h3>
              <p className="text-xs text-white/40 mt-1">{project.location}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          className="mt-10 text-center text-sm text-white/30"
        >
          + de 500 projetos executados em todo o Brasil
        </motion.p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

8 cards dark em grid 2×4 (mobile 2 col, desktop 4 col). Ícones amarelos. Hover com borda amarela.

- [ ] **Step 3: Commit**

```bash
git add components/Projects.tsx
git commit -m "feat: redesign Projects with dark cards and yellow icons"
```

---

### Task 14: Refatorar Testimonials

**Files:**
- Modify: `components/Testimonials.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Diretor Operacional",
      company: "Indústria Têxtil Silva",
      text: "A Dorata mudou completamente nossa visão sobre energia. A economia foi imediata e o processo de migração foi transparente e sem dor de cabeça. Recomendo fortemente.",
      stars: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Gerente Financeira",
      company: "Supermercados Estrela",
      text: "Estávamos céticos no início, mas os resultados falaram por si. Reduzimos nosso custo fixo em 18% já no primeiro mês. O atendimento da equipe é excelente.",
      stars: 5,
    },
    {
      name: "Roberto Campos",
      role: "Síndico",
      company: "Condomínio Viver Bem",
      text: "Sustentabilidade e economia andando juntas. Os condôminos ficaram muito satisfeitos com a redução na taxa de condomínio graças à energia solar.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-28 bg-[#111111] border-y border-[#2a2a2a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="section-chip mb-4 block w-fit"
            >
              Depoimentos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
            >
              O que nossos parceiros{" "}
              <span className="text-yellow-400">dizem</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            className="flex items-center gap-2 text-yellow-400"
          >
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            <span className="text-white font-bold ml-1">5.0</span>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card-dark p-8 relative"
            >
              <Quote size={36} className="absolute top-6 right-6 text-yellow-400/10" />

              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-white/60 mb-8 leading-relaxed text-sm italic">
                &quot;{t.text}&quot;
              </p>

              <div>
                <h4 className="font-display font-bold text-white">{t.name}</h4>
                <p className="text-xs text-yellow-400 font-medium mt-0.5">{t.role}</p>
                <p className="text-xs text-white/30 mt-0.5">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar no browser**

3 cards dark com estrelas amarelas, fundo `#111111`. Quote icon amarelo/transparente. Nome em Syne, role em amarelo pequeno.

- [ ] **Step 3: Commit**

```bash
git add components/Testimonials.tsx
git commit -m "feat: redesign Testimonials with dark cards and yellow stars"
```

---

### Task 15: Refatorar WhatsAppButton

**Files:**
- Modify: `components/WhatsAppButton.tsx`

- [ ] **Step 1: Reescrever o componente**

```tsx
"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black p-4 rounded-full shadow-[0_8px_24px_rgba(250,204,21,0.3)] flex items-center justify-center hover:bg-yellow-300 transition-colors"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Botão fixo amarelo no canto inferior direito. Sem o gradiente verde. Sombra amarela sutil. Hover mais claro.

- [ ] **Step 3: Commit**

```bash
git add components/WhatsAppButton.tsx
git commit -m "feat: redesign WhatsAppButton with yellow accent"
```

---

## Chunk 6: Verificação Final

### Task 16: Verificação completa e ajustes

- [ ] **Step 1: Abrir o site e revisar cada seção de cima a baixo**

Verificar:
- [ ] Navbar transparente no topo → dark ao scrollar
- [ ] Hero com título Syne grande, "futuro" em amarelo, glow sutil
- [ ] Stats com números em Syne/amarelo, sem cards
- [ ] Services com 4 cards dark, hover com borda amarela
- [ ] HowItWorks com números ghost amarelos, ícones sólidos amarelos
- [ ] About com fotos grayscale → coloridas no hover, borda amarela
- [ ] FAQ em 2 colunas, accordion com `+`/`−` amarelo
- [ ] ContactForm com dois cards dark, inputs com focus amarelo
- [ ] Footer `#050505`, links com hover amarelo

- [ ] **Step 2: Testar responsividade mobile**

Redimensionar para 375px. Verificar:
- [ ] Hero: título em ~40px, CTAs empilhados, stats empilhados
- [ ] Grids colapsaram para 1 coluna
- [ ] Navbar: hambúrguer visível, drawer funciona
- [ ] FAQ: 1 coluna (header acima, accordion abaixo)

- [ ] **Step 3: Verificar acessibilidade**

Ativar `prefers-reduced-motion` no SO e confirmar que animações param (sem erros visuais).

- [ ] **Step 4: Commit final**

```bash
git add -u
git commit -m "chore: final verification pass — Dorata Solar premium dark redesign complete"
```
