"use client";

import { motion } from "framer-motion";
import { UserPlus, FileText, Sun } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cadastro Simples",
      description: "Preencha seus dados e envie uma foto da sua conta de luz. É rápido e 100% digital.",
      icon: <UserPlus size={20} className="text-black" />,
    },
    {
      number: "02",
      title: "Análise e Contrato",
      description: "Receba sua proposta de economia garantida e assine o contrato digitalmente.",
      icon: <FileText size={20} className="text-black" />,
    },
    {
      number: "03",
      title: "Economia Ativada",
      description: "Pronto! Você começa a receber os créditos de energia solar e paga menos na sua conta.",
      icon: <Sun size={20} className="text-black" />,
    },
  ];

  return (
    <section className="py-20 bg-[#111111] border-y border-[#2a2a2a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Passo a Passo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Veja como é simples{" "}
            <span className="text-yellow-400">economizar</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-[#2a2a2a]" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={staggerItem} className="relative">
              {/* Number + icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <span className="font-display text-6xl font-extrabold text-yellow-400/20 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
