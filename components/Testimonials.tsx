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
