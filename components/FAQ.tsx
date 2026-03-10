"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
        <section className="py-24 bg-background/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_10%,rgba(15,122,88,0.1),transparent_34%)]"></div>
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Dúvidas Frequentes
                    </h2>
                    <p className="text-gray-600">
                        Tudo o que você precisa saber sobre a energia solar por assinatura da Dorata.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-strong rounded-2xl shadow-sm border border-white/50 overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus-ring"
                            >
                                <span className="font-bold text-gray-900 text-lg">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-primary transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-primary/10">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
