"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = "font-medium transition-colors text-white/60 hover:text-white text-sm";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/projects/Logo Deitada - Fundo transparente.png"
            alt="Dorata Energia"
            width={220}
            height={50}
            className="h-40 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className={`${navLinkClass} flex items-center gap-1`}>
              Nossos Produtos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-180 transition-transform duration-200">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden p-2 shadow-2xl">
                <Link href="/" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Sistemas Fotovoltaicos</div>
                  <div className="text-xs text-white/50 mt-0.5">Energia solar para casa ou empresa</div>
                </Link>
                <Link href="/energia-por-assinatura" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Energia por Assinatura</div>
                  <div className="text-xs text-white/50 mt-0.5">Economize sem investimento (Rental)</div>
                </Link>
                <Link href="#contact" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Usina de Investimento</div>
                  <div className="text-xs text-white/50 mt-0.5">Retorno garantido com energia</div>
                </Link>
                <Link href="#contact" className="block px-4 py-3 hover:bg-white/5 rounded-xl transition-colors">
                  <div className="font-semibold text-white text-sm">Mobilidade Elétrica</div>
                  <div className="text-xs text-white/50 mt-0.5">Soluções para carregamento</div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#about" className={navLinkClass}>Sobre Nós</Link>

          <Link
            href="#contact"
            className="border border-yellow-400/60 text-yellow-400 text-sm font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200"
          >
            Orçamentos
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a] absolute top-full left-0 w-full py-6 px-6"
          >
            <div className="flex flex-col gap-5">
              <Link href="#solutions" className="text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Soluções</Link>
              <Link href="#about" className="text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sobre Nós</Link>
              <Link href="/energia-por-assinatura" className="text-white/70 hover:text-white font-medium transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Energia por Assinatura</Link>
              <Link
                href="#contact"
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full text-center hover:bg-yellow-300 transition-colors"
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
