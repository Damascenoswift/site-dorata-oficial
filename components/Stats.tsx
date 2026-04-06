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

  const formatted = count.toLocaleString('pt-BR')

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}{suffix}
    </span>
  )
}

const stats = [
  { value: 400000, suffix: '+', label: 'Painéis Instalados' },
  { value: 24000000, suffix: '+', label: 'Energia Gerada (kWh)' },
  { value: 500, suffix: '+', label: 'Projetos Executados' },
  { value: 10000, suffix: '+', label: 'Ton. de CO₂ Evitadas' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center min-w-0 px-2">
              <div
                className="font-sans font-black text-yellow-400 mb-3 leading-none tracking-tight"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)' }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/50 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
