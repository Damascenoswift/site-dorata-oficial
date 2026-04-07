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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 md:mt-20">
        {/* Chip de autoridade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-300/60 rounded-full px-4 py-1.5 text-yellow-300 text-xs md:text-sm font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Referência no Norte do Mato Grosso
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.02] mb-5"
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
          className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8"
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
            href="https://wa.me/5566999832633"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-7 py-3.5 text-base font-bold rounded-full"
          >
            Falar no WhatsApp
          </a>
          <a
            href="#projetos"
            className="btn-outline px-7 py-3.5 text-base font-bold rounded-full"
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
