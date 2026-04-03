"use client";

import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function Projects() {
  const projects = [
    { name: "Indústria Têxtil Silva",   location: "São Paulo, SP",     power: "1.2 MWp" },
    { name: "Supermercados Estrela",    location: "Campinas, SP",      power: "850 kWp" },
    { name: "Condomínio Viver Bem",     location: "Belo Horizonte, MG",power: "500 kWp" },
    { name: "Agropecuária Boa Vista",   location: "Goiânia, GO",       power: "2.5 MWp" },
    { name: "Shopping Center Norte",    location: "São Paulo, SP",     power: "3.1 MWp" },
    { name: "Hospital Santa Clara",     location: "Curitiba, PR",      power: "1.8 MWp" },
    { name: "Rede Postos Aliança",      location: "Ribeirão Preto, SP",power: "600 kWp" },
    { name: "Centro Logístico Via",     location: "Jundiaí, SP",       power: "4.0 MWp" },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Cases de Sucesso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Empresas que confiam na{" "}
            <span className="text-yellow-400">Dorata</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 mt-4 text-lg leading-relaxed"
          >
            Já transformamos a realidade energética de dezenas de grandes empresas.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card-dark p-6 group flex flex-col items-center justify-center text-center h-32 md:h-36"
            >
              <div className="w-10 h-10 border border-yellow-400/20 bg-yellow-400/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-yellow-400/10 group-hover:border-yellow-400/40 transition-colors">
                <Building size={18} className="text-yellow-400" />
              </div>
              <h3 className="font-display font-bold text-white text-sm leading-snug">
                {project.name}
              </h3>
              <p className="text-xs text-white/40 mt-1">{project.location}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          className="mt-10 text-center text-sm text-white/30"
        >
          + de 500 projetos executados em todo o Brasil
        </motion.p>
      </div>
    </section>
  );
}
