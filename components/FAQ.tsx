"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function FAQ() {
  const faqs = [
    {
      question: "Preciso fazer alguma obra no meu telhado?",
      answer: "Não! Nossa energia é gerada em usinas solares remotas. Você adere ao sistema de assinatura e os créditos são injetados diretamente na sua conta de luz, sem nenhuma instalação na sua casa ou empresa.",
    },
    {
      question: "Tem custo de adesão ou fidelidade?",
      answer: "A adesão é totalmente gratuita. Não cobramos taxa de instalação nem de manutenção.",
    },
    {
      question: "Quanto vou economizar?",
      answer: "Oferecemos uma economia garantida de até 20% sobre o valor da sua tarifa de energia atual (dependendo da sua região e perfil de consumo).",
    },
    {
      question: "E se eu quiser cancelar?",
      answer: "O processo de cancelamento é simples e sem burocracia, apenas pedimos um aviso prévio conforme contrato para desvincular sua unidade da usina.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-[#111111] border-y border-[#2a2a2a]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: Header */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="section-chip mb-4 block w-fit"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="font-display text-3xl md:text-4xl font-bold text-white leading-tight tracking-[-0.02em]"
            >
              Dúvidas{" "}
              <span className="text-yellow-400">Frequentes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="text-white/50 mt-4 leading-relaxed"
            >
              Tudo o que você precisa saber sobre a energia solar por assinatura da Dorata.
            </motion.p>
          </div>

          {/* Right: Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#3a3a3a] transition-colors"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus-ring"
                >
                  <span className="font-display font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="text-yellow-400 shrink-0">
                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-[#2a2a2a] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
