"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function About() {
  const team = [
    { name: "Moacir Omizzollo",         role: "FOUNDER", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" },
    { name: "Moacir Junior Omizzollo",  role: "CEO",     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop" },
    { name: "Cássia Ap. Ribeiro Omizzollo", role: "CFO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" },
    { name: "Bruno Felipe Omizzollo",   role: "COO",     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop" },
  ];

  return (
    <section id="about" className="py-28 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Sobre A Dorata
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Liderança que{" "}
            <span className="text-yellow-400">inspira o futuro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 mt-4 text-lg leading-relaxed"
          >
            Nossa missão é democratizar o acesso à energia limpa com transparência e eficiência.
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
              <p className="text-yellow-400 text-xs font-semibold tracking-[0.1em] uppercase mb-1">{member.role}</p>
              <h3 className="font-display text-white font-bold text-lg leading-tight">{member.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
