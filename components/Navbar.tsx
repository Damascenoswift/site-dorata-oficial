"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "glass-strong shadow-[0_18px_40px_rgba(16,32,28,0.16)] border-b border-white/40 py-3"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold flex items-center gap-2 group">
                    <span className={`text-2xl font-extrabold tracking-tight transition-colors ${isScrolled ? "text-dark" : "text-primary"}`}>
                        Dorata<span className={`${isScrolled ? "text-primary" : "text-accent"} transition-colors`}>Solar</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {/* Produtos Dropdown */}
                    <div className="relative group">
                        <button className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${isScrolled ? "text-dark" : "text-dark/90"}`}>
                            Nossos Produtos
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-200">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                        <div className="absolute top-full text-left left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                            <div className="glass-strong rounded-2xl shadow-[0_18px_45px_rgba(16,32,28,0.18)] border border-white/60 overflow-hidden p-2">
                                <Link href="/" className="block px-4 py-3 hover:bg-primary/10 rounded-xl group/item transition-colors">
                                    <div className="font-bold text-gray-900 group-hover/item:text-primary transition-colors">Sistemas Fotovoltaicos</div>
                                    <div className="text-xs text-gray-600">Energia solar para sua casa ou empresa</div>
                                </Link>
                                <Link href="/energia-por-assinatura" className="block px-4 py-3 hover:bg-primary/10 rounded-xl group/item transition-colors">
                                    <div className="font-bold text-gray-900 group-hover/item:text-primary transition-colors">Energia por Assinatura</div>
                                    <div className="text-xs text-gray-600">Economize sem investimento (Rental)</div>
                                </Link>
                                <Link href="#contact" className="block px-4 py-3 hover:bg-primary/10 rounded-xl group/item transition-colors">
                                    <div className="font-bold text-gray-900 group-hover/item:text-primary transition-colors">Usina de Investimento</div>
                                    <div className="text-xs text-gray-600">Retorno garantido com energia</div>
                                </Link>
                                <Link href="#contact" className="block px-4 py-3 hover:bg-primary/10 rounded-xl group/item transition-colors">
                                    <div className="font-bold text-gray-900 group-hover/item:text-primary transition-colors">Mobilidade Elétrica</div>
                                    <div className="text-xs text-gray-600">Soluções para carregamento</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/#about"
                        className={`font-medium transition-colors hover:text-primary ${isScrolled ? "text-dark" : "text-dark/90"}`}
                    >
                        Sobre Nós
                    </Link>

                    <Link
                        href="#contact"
                        className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold hover:brightness-110 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Orçamentos
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isScrolled ? "text-white" : "text-primary"}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden glass-strong absolute top-full left-0 w-full py-6 px-6 shadow-xl border-t border-white/40"
                    >
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="#solutions"
                                className="text-dark font-medium hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Soluções
                            </Link>
                            <Link
                                href="#solutions"
                                className="text-dark font-medium hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Vantagens
                            </Link>
                            <Link
                                href="#about"
                                className="text-dark font-medium hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sobre Nós
                            </Link>

                            <Link
                                href="#contact"
                                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold text-center hover:brightness-110 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Orçamentos
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
