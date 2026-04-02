# Dorata Solar — Redesign Premium Dark

**Data:** 2026-04-01
**Branch:** claude/affectionate-chaplygin
**Abordagem escolhida:** A — "Solar Dark" com Syne + Inter

---

## Objetivo

Refatorar o site da Dorata Solar para uma estética premium, minimalista e cinematográfica. Identidade visual **preta e amarela**, tipografia forte com personalidade, animações de scroll suaves e impactantes. A página Rental (`/energia-por-assinatura`) **não será modificada**.

---

## Sistema Visual

### Paleta

```
background:      #0a0a0a
surface-1:       #111111
surface-2:       #1a1a1a
border:          #2a2a2a

text-primary:    #ffffff
text-secondary:  #a1a1aa
text-muted:      #52525b

accent:          #facc15  (yellow-400)
accent-hover:    #ca9a04
```

### Tipografia

- **Syne** (Google Fonts) — títulos, headlines, logo
  - 800: hero title
  - 700: section headings, card titles, nav logo
- **Inter** (Google Fonts) — corpo, subtítulos, labels
  - 400: parágrafos
  - 500: subtítulos, nav links
  - 600: labels, chips, botões

Hierarquia:
- H1 hero: Syne 800, 72–96px, tracking -0.03em
- H2 seções: Syne 700, 48–64px, tracking -0.02em
- H3 cards: Syne 700, 24px
- body: Inter 400, 16–18px, line-height 1.7
- chip/label: Inter 600, 11–12px, uppercase, tracking 0.1em

---

## Componentes Globais

### Container
```
max-width: 1200px
px: 24px (mobile) / 48px (tablet) / 80px (desktop)
mx-auto
```

### Botões

| Tipo | Estilo |
|---|---|
| Primário | `bg-yellow-400 text-black font-semibold rounded-full px-8 py-3.5 hover:bg-yellow-300` |
| Outline | `border border-white/30 text-white rounded-full hover:border-white/60` |
| Ghost | `text-white/60 hover:text-white` (nav links) |

### Section Chips
```
border border-yellow-400/30 bg-yellow-400/10 text-yellow-400
Inter 600, 11px, uppercase, tracking 0.1em, rounded-full, px-3 py-1
```

### Cards
```
bg-[#111111] border border-[#2a2a2a] rounded-2xl
hover: border-yellow-400/50
transition: border-color 0.25s
```

---

## Animações

### Padrão por seção
```js
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true, margin: "-80px" }
transition: { duration: 0.7, ease: "easeOut" }
```

### Stagger de filhos
```js
variants container: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
variants item: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }
```

### Regras
- Nenhuma animação > 0.8s
- `prefers-reduced-motion`: desativa todas animações via CSS
- Hero: delays 0s / 0.15s / 0.3s / 0.5s (sequencial)

---

## Layout por Seção

### Navbar
- Transparente no topo → `bg-[#0a0a0a]/90 backdrop-blur` ao scrollar
- Logo: "Dorata" Syne branco + "Solar" amarelo
- Links: Inter 500, white/60 → white no hover
- CTA: outline amarelo → preenchido amarelo no hover
- Mobile: hamburger + drawer `bg-[#0a0a0a]`

### Hero
- Full screen, fundo `#0a0a0a`, sem imagem de fundo
- Chip amarelo
- Título Syne 800 enorme: palavra-chave em amarelo
- Subtítulo Inter, text-secondary
- CTA primário (amarelo) + secundário (outline branco)
- 3 stats inline, separados por divisor vertical, sem cards
- Scroll indicator simples

### Stats
- Fundo `#111111`
- 4 números em Syne/amarelo grande
- Labels Inter/text-secondary
- Sem cards — apenas tipografia e espaçamento

### Services
- Fundo `#0a0a0a`
- 4 cards dark com ícones em amarelo
- Hover: borda amarela
- Título Syne, descrição Inter

### HowItWorks
- Fundo `#111111`
- Número grande Syne/amarelo como elemento visual dominante
- Texto abaixo do número
- Linha conectora horizontal discreta no desktop

### About
- Fundo `#0a0a0a`
- Fotos aspect-ratio 3/4, borda `#2a2a2a`
- Nome Syne branco, role Inter amarelo
- Hover: borda amarela, foto sai do grayscale

### FAQ
- Fundo `#111111`
- Accordion, borda `#2a2a2a`
- Pergunta Syne, resposta Inter/secondary
- Ícone `+`/`−` amarelo

### ContactForm
- Fundo `#0a0a0a`
- Inputs `bg-[#111111] border-[#2a2a2a] focus:border-yellow-400`
- CTA amarelo sólido

### Footer
- Fundo `#050505`
- Texto secondary/muted
- Links: hover amarelo
- Social icons: hover amarelo

---

## Responsividade

| Breakpoint | Comportamento |
|---|---|
| Mobile <768px | 1 coluna, hero título 40–48px, CTAs empilhados, nav colapsada |
| Tablet 768–1024px | 2 colunas, nav colapsada |
| Desktop >1024px | Layout completo, 4 colunas onde aplicável |

---

## Arquivos Modificados

| Arquivo | Mudança |
|---|---|
| `app/globals.css` | Paleta dark, variáveis CSS, utilitários globais |
| `app/layout.tsx` | Syne + Inter em vez de Poppins |
| `components/Navbar.tsx` | Visual dark com hover amarelo |
| `components/Hero.tsx` | Redesign completo sem imagem de fundo |
| `components/Stats.tsx` | Tipografia pura, sem cards |
| `components/Services.tsx` | Cards dark, ícones amarelos |
| `components/HowItWorks.tsx` | Números como elemento visual |
| `components/About.tsx` | Hover amarelo nas fotos |
| `components/FAQ.tsx` | Accordion dark |
| `components/ContactForm.tsx` | Form dark com focus amarelo |
| `components/Footer.tsx` | Fundo mais escuro, hover amarelo |

## Não modificado
- `app/energia-por-assinatura/page.tsx` — Rental fica com visual atual (verde)
