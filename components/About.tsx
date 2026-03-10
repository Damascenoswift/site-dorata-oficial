"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const team = [
        {
            name: "Moacir Omizzollo",
            role: "FOUNDER",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop", // Placeholder
        },
        {
            name: "Moacir Junior Omizzollo",
            role: "CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop", // Placeholder
        },
        {
            name: "Cássia Ap. Ribeiro Omizzollo",
            role: "CFO",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop", // Placeholder
        },
        {
            name: "Bruno Felipe Omizzollo",
            role: "COO",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop", // Placeholder
        },
    ];

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-chip mb-2"
                    >
                        Sobre A Dorata
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-6"
                    >
                        Liderança que <span className="title-gradient">inspira o futuro</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        Nossa missão é democratizar o acesso à energia limpa com transparência e eficiência.
                        Conheça quem faz a revolução energética acontecer todos os dias.
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-[3/4] bg-gray-200 ring-1 ring-white/40 lift-card">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-accent font-bold tracking-widest text-sm mb-1 uppercase">
                                    {member.role}
                                </h3>
                                <p className="text-gray-900 font-bold text-lg leading-tight">
                                    {member.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
