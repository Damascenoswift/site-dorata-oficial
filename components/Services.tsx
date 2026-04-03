"use client";

import { HandCoins, Leaf, Building2, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function Services() {
  const services = [
    {
      title: "Economia Garantida",
      description: "Reduza significativamente seus custos com energia. Oferecemos até 20% de economia garantida na sua fatura, com investimento zero.",
      icon: <Wallet size={28} className="text-yellow-400" />,
    },
    {
      title: "Sustentabilidade",
      description: "Energia 100% renovável e limpa. Ao escolher a Dorata, você contribui diretamente para a redução de emissões de CO2.",
      icon: <Leaf size={28} className="text-yellow-400" />,
    },
    {
      title: "Gestão Completa",
      description: "Deixe a burocracia com a gente. Cuidamos de toda a operação, manutenção e gestão das usinas e créditos de energia.",
      icon: <Building2 size={28} className="text-yellow-400" />,
    },
    {
      title: "Flexibilidade",
      description: "Soluções personalizadas para sua necessidade, seja você um consumidor que quer economizar ou um investidor.",
      icon: <HandCoins size={28} className="text-yellow-400" />,
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Nossas Soluções
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Por que escolher a{" "}
            <span className="text-yellow-400">Dorata Solar</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 mt-4 text-lg leading-relaxed"
          >
            Oferecemos um ecossistema completo para quem busca economia e sustentabilidade sem complicação.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card-dark p-8 group cursor-default"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
