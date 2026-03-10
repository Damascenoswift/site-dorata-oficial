"use client";

import { HandCoins, Leaf, Building2, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            title: "Economia Garantida",
            description: "Reduza significativamente seus custos com energia. Oferecemos até 20% de economia garantida na sua fatura, com investimento zero.",
            icon: <Wallet size={32} className="text-white" />,
        },
        {
            title: "Sustentabilidade",
            description: "Energia 100% renovável e limpa. Ao escolher a Dorata, você contribui diretamente para a redução de emissões de CO2.",
            icon: <Leaf size={32} className="text-white" />,
        },
        {
            title: "Gestão Completa",
            description: "Deixe a burocracia com a gente. Cuidamos de toda a operação, manutenção e gestão das usinas e créditos de energia.",
            icon: <Building2 size={32} className="text-white" />,
        },
        {
            title: "Flexibilidade",
            description: "Soluções personalizadas para sua necessidade, seja você um consumidor que quer economizar ou um investidor.",
            icon: <HandCoins size={32} className="text-white" />,
        },
    ];

    return (
        <section id="solutions" className="py-24 bg-white/70 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_8%,rgba(41,177,127,0.14),transparent_34%)]"></div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-chip mb-2"
                    >
                        Nossas Soluções
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Por que escolher a <span className="title-gradient">Dorata Solar</span>?
                    </motion.h2>
                    <p className="text-gray-600">
                        Oferecemos um ecossistema completo para quem busca economia e sustentabilidade sem complicação.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-strong lift-card p-8 rounded-2xl shadow-md border border-white/50 transition-all duration-300 group cursor-default relative overflow-hidden"
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-[#0f5f48] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                            <div className="mb-6 bg-gradient-to-br from-primary to-secondary w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-colors">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-100 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
