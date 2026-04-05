'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const blocks = [
  {
    badge: 'Referência em Sinop',
    headline: 'Líderes no norte\ndo Mato Grosso.',
    description: 'A Dorata Solar é a empresa de energia solar de referência em Sinop e região. Mais de 20 usinas instaladas, 37 empresas atendidas e um histórico de excelência que fala por si.',
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
      <motion.div
        initial={{ opacity: 0, x: block.imageLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`relative h-80 rounded-2xl overflow-hidden ${block.imageLeft ? 'md:order-1' : 'md:order-2'}`}
      >
        <Image src={block.image} alt={block.imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
          <div className="font-display text-3xl font-black text-yellow-400">{block.stat.value}</div>
          <div className="text-xs text-white/60 mt-0.5">{block.stat.label}</div>
        </div>
      </motion.div>

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
