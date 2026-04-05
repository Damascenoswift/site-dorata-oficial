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

type Benefit = typeof benefits[0]
type ScrollYProgress = ReturnType<typeof useScroll>['scrollYProgress']

interface BenefitSlideProps {
  benefit: Benefit
  index: number
  total: number
  scrollYProgress: ScrollYProgress
}

function BenefitText({ benefit, index, total, scrollYProgress }: BenefitSlideProps) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [start - 0.05, start + 0.1], [40, 0])
  const Icon = benefit.icon

  return (
    <motion.div
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
}

function BenefitIcon({ benefit, index, total, scrollYProgress }: BenefitSlideProps) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [start - 0.05, start + 0.1], [0.8, 1])
  const Icon = benefit.icon

  return (
    <motion.div
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
}

function ProgressDot({ benefit, index, total, scrollYProgress }: BenefitSlideProps) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.1, end - 0.1, end], [0.3, 1, 1, 0.3])

  return (
    <motion.div
      style={{ opacity, background: benefit.color }}
      className="w-1 h-8 rounded-full"
    />
  )
}

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={containerRef} style={{ height: `${benefits.length * 100 + 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="relative h-64">
            {benefits.map((benefit, i) => (
              <BenefitText
                key={i}
                benefit={benefit}
                index={i}
                total={benefits.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Right: icon */}
          <div className="relative h-64 flex items-center justify-center">
            {benefits.map((benefit, i) => (
              <BenefitIcon
                key={i}
                benefit={benefit}
                index={i}
                total={benefits.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {benefits.map((benefit, i) => (
            <ProgressDot
              key={i}
              benefit={benefit}
              index={i}
              total={benefits.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
