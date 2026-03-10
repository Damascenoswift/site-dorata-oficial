"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
        <section id="testimonials" className="py-24 bg-gradient-to-b from-primary to-[#0c5d46] relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div className="md:w-2/3">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="section-chip border-white/20 bg-white/10 text-white mb-2"
                        >
                            Depoimentos
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            O que nossos parceiros dizem
                        </motion.h2>
                    </div>

                    <div className="flex gap-2 text-accent">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} fill="currentColor" />
                        ))}
                        <span className="text-white font-bold ml-2 text-lg">5.0</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl shadow-xl relative border border-white/30"
                        >
                            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />

                            <div className="flex gap-1 mb-6 text-accent">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10">
                                &quot;{testimonial.text}&quot;
                            </p>

                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                <p className="text-xs text-gray-400 mt-1">{testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
