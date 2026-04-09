"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

const highlights = [
  "Fornecimento do carregador ideal para cada perfil de uso.",
  "Projeto técnico e instalação elétrica com equipe da Dorata.",
  "Configuração, testes e suporte para você carregar com segurança.",
];

export default function ElectricMobility() {
  return (
    <section id="mobilidade-eletrica" className="py-20 bg-[#0b1430] border-y border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 grid gap-10 lg:grid-cols-[0.42fr_0.58fr] items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative min-h-[420px] rounded-3xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1200&auto=format&fit=crop"
            alt="Carregamento de veículo elétrico"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="section-chip mb-5 block w-fit">Nossos Produtos</span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-yellow-400 leading-tight">
            Carregador veicular
          </h2>

          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            A <span className="text-white font-semibold">Dorata</span> oferece solução completa em mobilidade
            elétrica para residências, empresas e condomínios.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            Nós fornecemos o carregador e fazemos toda a instalação, do dimensionamento elétrico até a entrega
            funcionando. Você contrata em um só lugar e recebe tudo pronto para usar.
          </p>

          <div className="mt-7 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                <p className="text-white/75 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <a
              href="https://wa.me/5566999832633"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-bold text-black hover:bg-yellow-300 transition-colors"
            >
              Fale com um atendente
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
