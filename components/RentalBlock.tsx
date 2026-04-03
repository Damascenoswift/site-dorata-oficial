"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap, Wrench, BadgePercent, Leaf } from "lucide-react";

const benefits = [
  {
    icon: BadgePercent,
    title: "20% de desconto",
    desc: "Garantido na sua fatura mensal de energia.",
  },
  {
    icon: Wrench,
    title: "Zero instalação",
    desc: "Sem obras, sem painéis, sem nada no seu imóvel.",
  },
  {
    icon: Zap,
    title: "Zero investimento",
    desc: "Você não paga nada para começar a economizar.",
  },
  {
    icon: Leaf,
    title: "100% renovável",
    desc: "Energia gerada em usinas solares certificadas.",
  },
];

export default function RentalBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const symbolY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const symbolOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const symbolScale = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Símbolo decorativo animado no scroll */}
      <motion.div
        style={{ y: symbolY, opacity: symbolOpacity, scale: symbolScale }}
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 w-[420px] select-none"
        aria-hidden
      >
        <Image
          src="/images/projects/Logo Dorata.png"
          alt=""
          width={420}
          height={532}
          className="w-full h-auto opacity-10"
          priority={false}
        />
      </motion.div>

      {/* Glow sutil */}
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="max-w-xl">
          {/* Logo Rental */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Image
              src="/images/projects/logo nova2.png"
              alt="Energia por Assinatura"
              width={629}
              height={586}
              className="h-16 w-auto"
            />
          </motion.div>

          {/* Chip */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-chip mb-6 block w-fit"
          >
            Energia por Assinatura
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-white leading-[1.1] tracking-tight mb-5"
          >
            Economize{" "}
            <span className="text-yellow-400">20% na conta de luz</span>
            <br />
            sem gastar nada.
          </motion.h2>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-white/55 text-base leading-relaxed mb-10"
          >
            A Dorata gera energia em usinas solares remotas e injeta na rede elétrica.
            Essa energia vira créditos descontados direto na sua fatura —
            sem obras, sem painéis, sem investimento. Como assinar um streaming, só que
            você <span className="text-white/80">economiza</span>.
          </motion.p>

          {/* Benefícios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="grid grid-cols-2 gap-4 mb-10"
          >
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-3 items-start bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4"
              >
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-xl bg-yellow-400/10 flex items-center justify-center">
                  <Icon size={15} className="text-yellow-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold mb-0.5">{title}</div>
                  <div className="text-white/45 text-xs leading-snug">{desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <Link
              href="/energia-por-assinatura"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Quero meu desconto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
