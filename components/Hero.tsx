"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden grid-overlay">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed-bg" // Added fixed-bg if creating parallax later
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3264&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-primary/45 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-dark/92 via-dark/60 to-dark/8"></div>
                <div className="absolute -top-20 -left-20 w-[24rem] h-[24rem] bg-secondary/25 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 right-12 w-[22rem] h-[22rem] bg-accent/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="section-chip mb-6 border-white/30 bg-white/10 text-white"
                    >
                        Energia inteligente para empresas e residências
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
                    >
                        Conectamos você ao futuro com <span className="text-accent">energia limpa</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-gray-100/95 mb-10 max-w-2xl font-light"
                    >
                        Na Dorata, transformamos a tecnologia solar em economia real.
                        Soluções inteligentes para um mundo mais sustentável.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#contact"
                            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_12px_24px_rgba(9,79,57,0.38)] hover:shadow-[0_16px_32px_rgba(9,79,57,0.5)] transform hover:-translate-y-1"
                        >
                            Fale com um Especialista <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#solutions"
                            className="glass border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/25 transition-all flex items-center justify-center"
                        >
                            Conheça as Soluções
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl"
                    >
                        <div className="glass rounded-2xl px-4 py-3 text-white">
                            <p className="text-2xl font-bold">20%</p>
                            <p className="text-xs text-white/80">economia média mensal</p>
                        </div>
                        <div className="glass rounded-2xl px-4 py-3 text-white">
                            <p className="text-2xl font-bold">500+</p>
                            <p className="text-xs text-white/80">projetos executados</p>
                        </div>
                        <div className="glass rounded-2xl px-4 py-3 text-white">
                            <p className="text-2xl font-bold">100%</p>
                            <p className="text-xs text-white/80">energia renovável</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
