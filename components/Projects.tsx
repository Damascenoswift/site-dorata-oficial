"use client";

import { motion } from "framer-motion";
import { Building } from "lucide-react";

export default function Projects() {
    // Placeholder data for projects/clients
    const projects = [
        { name: "Indústria Têxtil Silva", location: "São Paulo, SP", power: "1.2 MWp" },
        { name: "Supermercados Estrela", location: "Campinas, SP", power: "850 kWp" },
        { name: "Condomínio  Viver Bem", location: "Belo Horizonte, MG", power: "500 kWp" },
        { name: "Agropecuária Boa Vista", location: "Goiânia, GO", power: "2.5 MWp" },
        { name: "Shopping Center Norte", location: "São Paulo, SP", power: "3.1 MWp" },
        { name: "Hospital Santa Clara", location: "Curitiba, PR", power: "1.8 MWp" },
        { name: "Rede Postos Aliança", location: "Ribeirão Preto, SP", power: "600 kWp" },
        { name: "Centro Logístico Via", location: "Jundiaí, SP", power: "4.0 MWp" },
    ];

    return (
        <section className="py-24 bg-light/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(244,185,56,0.14),transparent_30%)]"></div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="section-chip mb-2"
                    >
                        Cases de Sucesso
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Empresas que confiam na <span className="title-gradient">Dorata</span>
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Já transformamos a realidade energética de dezenas de grandes empresas.
                        Veja alguns dos projetos realizados.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-strong lift-card p-6 rounded-xl shadow-sm transition-all border border-white/50 group flex flex-col items-center justify-center text-center h-32 md:h-40"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-colors">
                                <Building size={24} />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-primary transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                                {project.location}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 font-medium">
                        + de 500 projetos executados em todo o Brasil
                    </p>
                </div>
            </div>
        </section>
    );
}
