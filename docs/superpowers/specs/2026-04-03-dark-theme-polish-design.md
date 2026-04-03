# Design: Dark Theme Polish — Logo, Espaçamento e Scroll Reveal

**Data:** 2026-04-03

## Contexto

Branch de trabalho: `claude/affectionate-chaplygin`

O redesign premium preto/amarelo já existe. Este spec cobre 5 ajustes de polimento: logo real, espaçamento mais compacto, hero calibrado, HowItWorks gap corrigido, e scroll reveal adicionado.

## 1. Logo real na Navbar

**Arquivo:** `components/Navbar.tsx`

- Adicionar `import Image from "next/image"`
- Substituir o `<span>DorataSolar</span>` por `<Image>` apontando para `/images/projects/Logo Deitada - Fundo transparente.png`
- Dimensões: `width={160} height={36}`, classe `h-9 w-auto`
- No tema escuro a logo já tem contraste — não aplicar filtro de cor
- Copiar o arquivo da logo de `/Users/guilhermedamasceno/Dorata - site/public/images/projects/` para `public/images/projects/` no worktree se não existir

## 2. Espaçamento das seções

**Arquivos:** `components/Services.tsx`, `components/Projects.tsx`, `components/HowItWorks.tsx`, `components/Testimonials.tsx`, `components/About.tsx`, `components/FAQ.tsx`, `components/ContactForm.tsx`

- Todas usam `py-28`. Alterar para `py-20` em cada uma
- `Stats.tsx` já usa `py-20` — não alterar

## 3. Hero — Ajuste do título e botões

**Arquivo:** `components/Hero.tsx`

- H1 `clamp`: alterar de `clamp(2.5rem,7vw,5.5rem)` para `clamp(2.5rem,6vw,4.5rem)`
- Espaçamento dos botões: alterar `mb-16` para `mb-10`

## 4. HowItWorks — gap entre steps no mobile

**Arquivo:** `components/HowItWorks.tsx`

- Alterar `gap-12 md:gap-8` para `gap-8` (mesmo valor em todos os breakpoints)

## 5. Scroll Reveal

**Novo arquivo:** `components/RevealOnScroll.tsx`

Criar componente idêntico ao do branch `eager-jemison`:

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

**Arquivo:** `app/page.tsx`

Envolver seções com `<RevealOnScroll>` (exceto `Navbar`, `Hero`, `Footer`, `WhatsAppButton`):
- `Stats`, `Services`, `HowItWorks`, `Projects`, `Testimonials`, `About`, `FAQ`, `ContactForm`
- `Stats` usa delay padrão (0), demais usam `delay={0.1}`

## Arquivos Afetados

| Arquivo | Mudança |
|---|---|
| `components/Navbar.tsx` | Logo image |
| `components/Hero.tsx` | H1 clamp menor + mb-16 → mb-10 |
| `components/Services.tsx` | py-28 → py-20 |
| `components/Projects.tsx` | py-28 → py-20 |
| `components/HowItWorks.tsx` | py-28 → py-20 + gap-12 → gap-8 |
| `components/Testimonials.tsx` | py-28 → py-20 |
| `components/About.tsx` | py-28 → py-20 |
| `components/FAQ.tsx` | py-28 → py-20 |
| `components/ContactForm.tsx` | py-28 → py-20 |
| `components/RevealOnScroll.tsx` | Criar (novo) |
| `app/page.tsx` | Envolver seções com RevealOnScroll |
| `public/images/projects/` | Copiar logo assets |
