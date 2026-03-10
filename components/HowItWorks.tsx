"use client";

import { motion } from "framer-motion";
import { UserPlus, FileText, Sun } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            title: "Cadastro Simples",
            description: "Preencha seus dados e envie uma foto da sua conta de luz. É rápido e 100% digital.",
            icon: <UserPlus size={32} className="text-white" />,
        },
        {
            title: "Análise e Contrato",
            description: "Receba sua proposta de economia garantida e assine o contrato digitalmente.",
            icon: <FileText size={32} className="text-white" />,
        },
        {
            title: "Economia Ativada",
            description: "Pronto! Você começa a receber os créditos de energia solar e paga menos na sua conta.",
            icon: <Sun size={32} className="text-white" />,
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-dark to-[#0a3228] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute -bottom-24 left-14 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="section-chip border-white/20 bg-white/10 text-white mb-2"
                    >
                        Passo a Passo
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold"
                    >
                        Veja como é simples economizar
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/20 border-t border-dashed border-white/40 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center text-center glass rounded-3xl p-8 border border-white/16"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-8 ring-8 ring-white/10">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-white/80 leading-relaxed max-w-sm">
                                {step.description}
                            </p>

                            {/* Step number badge */}
                            <div className="absolute top-0 right-1/4 translate-x-4 bg-white text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md">
                                {index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
