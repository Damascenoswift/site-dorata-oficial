# Dark Theme Polish — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polir o design preto/amarelo: trocar o texto "DorataSolar" pela logo real, compactar espaçamento das seções, calibrar o Hero, e adicionar scroll reveal.

**Architecture:** Mudanças independentes em 11 arquivos. Cada task é auto-contida. O componente RevealOnScroll é criado primeiro pois é usado em page.tsx. Os ajustes de espaçamento são alterações pontuais de classe Tailwind.

**Tech Stack:** Next.js 16, React 19, framer-motion (já instalado), Tailwind CSS, TypeScript

---

## Chunk 1: Logo + Hero + HowItWorks

### Task 1: Logo real na Navbar

**Files:**
- Modify: `components/Navbar.tsx`
- Copy asset: `public/images/projects/`

**Contexto:** A Navbar usa `<span className="font-display text-xl font-bold text-white tracking-tight">Dorata<span className="text-yellow-400">Solar</span></span>` como logo. A logo real está em `/Users/guilhermedamasceno/Dorata - site/public/images/projects/`.

- [ ] **Step 0: Copiar assets da logo**

```bash
ls "public/images/projects/Logo Deitada - Fundo transparente.png" 2>/dev/null || (
  mkdir -p public/images/projects &&
  cp "/Users/guilhermedamasceno/Dorata - site/public/images/projects/Logo Deitada - Fundo transparente.png" public/images/projects/ &&
  cp "/Users/guilhermedamasceno/Dorata - site/public/images/projects/Logo Dorata.png" public/images/projects/ &&
  git add public/images/projects/ &&
  git commit -m "chore: add logo assets"
)
```

Expected: arquivos presentes em `public/images/projects/`.

- [ ] **Step 1: Adicionar import de `next/image` em `components/Navbar.tsx`**

Inserir após os imports existentes (linha 6, após `import { motion, AnimatePresence } from "framer-motion";`):

```tsx
import Image from "next/image";
```

- [ ] **Step 2: Substituir o bloco da logo**

Localizar (linha ~31):
```tsx
<span className="font-display text-xl font-bold text-white tracking-tight">
    Dorata<span className="text-yellow-400">Solar</span>
</span>
```

Substituir por:
```tsx
<Image
    src="/images/projects/Logo Deitada - Fundo transparente.png"
    alt="Dorata Energia"
    width={160}
    height={36}
    className="h-9 w-auto"
    priority
/>
```

- [ ] **Step 3: Verificar no browser**

Acesse http://localhost:3001 — a logo deve aparecer no canto superior esquerdo da navbar, em branco/dourado sobre fundo escuro.

- [ ] **Step 4: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: replace navbar text with real logo image"
```

---

### Task 2: Ajustes no Hero

**Files:**
- Modify: `components/Hero.tsx`

**Contexto:** O H1 atual usa `clamp(2.5rem,7vw,5.5rem)` (pode chegar a 88px). O bloco dos CTAs tem `mb-16` (64px de margem inferior).

- [ ] **Step 1: Reduzir tamanho máximo do H1**

Localizar (linha ~31):
```tsx
className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6"
```

Alterar apenas o clamp:
```tsx
className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6"
```

- [ ] **Step 2: Reduzir margem dos CTAs**

Localizar (linha ~54):
```tsx
className="flex flex-col sm:flex-row gap-4 mb-16"
```

Alterar:
```tsx
className="flex flex-col sm:flex-row gap-4 mb-10"
```

- [ ] **Step 3: Verificar no browser**

Acesse http://localhost:3001 — o título deve ser visivelmente menor em desktop (máx ~72px vs 88px antes). Os botões devem estar mais próximos das stats abaixo.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx
git commit -m "fix: reduce hero h1 max size and cta bottom margin"
```

---

### Task 3: HowItWorks — gap mobile

**Files:**
- Modify: `components/HowItWorks.tsx`

**Contexto:** O grid usa `gap-12 md:gap-8` — gap excessivo no mobile.

- [ ] **Step 1: Uniformizar gap**

Localizar (linha ~60):
```tsx
className="grid md:grid-cols-3 gap-12 md:gap-8 relative"
```

Alterar:
```tsx
className="grid md:grid-cols-3 gap-8 relative"
```

- [ ] **Step 2: Commit**

```bash
git add components/HowItWorks.tsx
git commit -m "fix: reduce HowItWorks gap to uniform gap-8"
```

---

## Chunk 2: Espaçamento das Seções (py-28 → py-20)

### Task 4: Reduzir padding vertical de todas as seções

**Files:**
- Modify: `components/Services.tsx`
- Modify: `components/Projects.tsx`
- Modify: `components/HowItWorks.tsx`
- Modify: `components/Testimonials.tsx`
- Modify: `components/About.tsx`
- Modify: `components/FAQ.tsx`
- Modify: `components/ContactForm.tsx`

**Contexto:** Todas essas seções usam `py-28` (224px). Alterar para `py-20` (160px) para um ritmo mais equilibrado. Stats.tsx já usa `py-20` — não alterar.

- [ ] **Step 1: Alterar `components/Services.tsx`**

Localizar:
```tsx
<section className="py-28
```

Alterar para:
```tsx
<section className="py-20
```

- [ ] **Step 2: Alterar `components/Projects.tsx`**

Localizar:
```tsx
<section className="py-28
```

Alterar para:
```tsx
<section className="py-20
```

- [ ] **Step 3: Alterar `components/HowItWorks.tsx`**

Localizar:
```tsx
<section className="py-28 bg-[#111111]
```

Alterar para:
```tsx
<section className="py-20 bg-[#111111]
```

- [ ] **Step 4: Alterar `components/Testimonials.tsx`**

Localizar:
```tsx
<section className="py-28
```

Alterar para:
```tsx
<section className="py-20
```

- [ ] **Step 5: Alterar `components/About.tsx`**

Localizar:
```tsx
<section className="py-28
```

Alterar para:
```tsx
<section className="py-20
```

- [ ] **Step 6: Alterar `components/FAQ.tsx`**

Localizar:
```tsx
<section className="py-28
```

Alterar para:
```tsx
<section className="py-20
```

- [ ] **Step 7: Alterar `components/ContactForm.tsx`**

Localizar:
```tsx
<section className="py-28
```

Alterar para:
```tsx
<section className="py-20
```

- [ ] **Step 8: Verificar no browser**

Role a página em http://localhost:3001 — as seções devem ter espaçamento mais compacto entre elas, sem vazios excessivos.

- [ ] **Step 9: Commit**

```bash
git add components/Services.tsx components/Projects.tsx components/HowItWorks.tsx \
        components/Testimonials.tsx components/About.tsx components/FAQ.tsx \
        components/ContactForm.tsx
git commit -m "fix: reduce section padding from py-28 to py-20"
```

---

## Chunk 3: Scroll Reveal

### Task 5: Criar componente RevealOnScroll

**Files:**
- Create: `components/RevealOnScroll.tsx`

- [ ] **Step 1: Criar `components/RevealOnScroll.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/RevealOnScroll.tsx
git commit -m "feat: add RevealOnScroll component"
```

---

### Task 6: Integrar RevealOnScroll em app/page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Substituir conteúdo de `app/page.tsx`**

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <RevealOnScroll>
        <Stats />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <Services />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <HowItWorks />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <About />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <FAQ />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <ContactForm />
      </RevealOnScroll>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Acesse http://localhost:3001 e role a página — cada seção deve aparecer com fade+slide ao entrar na viewport.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add scroll reveal to all page sections"
```
