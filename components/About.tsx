"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function About() {
  const team = [
    {
      name: "Moacir Junior Omizzollo",
      roleEn: "CEO",
      rolePt: "Diretor Comercial",
      formation: "Formação: Engenheiro Elétrico",
      image: "/images/team/moacir-junior-omizzollo.jpg",
    },
    {
      name: "Bruno Omizzollo",
      roleEn: "COO",
      rolePt: "Diretor de Operações",
      formation: "Formação: Engenheiro Civil",
      image: "/images/team/bruno-omizzollo.jpg",
    },
    {
      name: "Cassia Omizzollo",
      roleEn: "CFO",
      rolePt: "Diretora Administrativa",
      formation: "Formação: Ciências Contábeis",
      image: "/images/team/cassia-omizzollo.jpeg",
    },
    {
      name: "Moacir Omizzollo",
      roleEn: "FOUNDER",
      rolePt: "Fundador",
      formation: "",
      image: "/images/team/moacir-omizzollo.jpg",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Sobre nós
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Quem faz a <span className="text-yellow-400">Dorata acontecer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 mt-4 text-lg leading-relaxed"
          >
            Time fundador e diretoria da Dorata com atuação comercial, operacional e administrativa.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={staggerItem} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4] border border-[#2a2a2a] group-hover:border-yellow-400/50 transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-yellow-400 text-xs font-semibold tracking-[0.1em] uppercase mb-1">
                {member.roleEn}
              </p>
              <h3 className="font-display text-white font-bold text-lg leading-tight">{member.name}</h3>
              <p className="text-white/55 text-sm mt-1">{member.rolePt}</p>
              {member.formation && (
                <p className="text-white/40 text-xs mt-1">{member.formation}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
