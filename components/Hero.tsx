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
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6"
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
            className="flex flex-col sm:flex-row gap-4 mb-10"
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
