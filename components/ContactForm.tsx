"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { fadeUpVariant, viewportOnce } from "@/lib/animations";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-white/25 focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 outline-none transition-all text-sm";

const labelClass = "block text-xs font-semibold text-white/50 uppercase tracking-[0.08em] mb-2";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "", email: "", phone: "", billValue: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Recebemos seus dados e entraremos em contato em breve.");
    setFormState({ name: "", email: "", phone: "", billValue: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-chip mb-4 block w-fit"
          >
            Solicite seu Orçamento
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Comece a{" "}
            <span className="text-yellow-400">economizar</span> agora
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10 space-y-8"
          >
            <h3 className="font-display text-2xl font-bold text-white">Fale Conosco</h3>

            {[
              { icon: <Phone size={20} className="text-yellow-400" />, title: "Telefone / WhatsApp", lines: ["(00) 99999-9999", "Seg - Sex, 8h às 18h"] },
              { icon: <Mail size={20} className="text-yellow-400" />, title: "Email", lines: ["contato@doratasolar.com.br"] },
              { icon: <MapPin size={20} className="text-yellow-400" />, title: "Endereço", lines: ["Av. Paulista, 1000 - Sala 123", "Bela Vista, São Paulo - SP"] },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  {item.lines.map((l, j) => (
                    <p key={j} className="text-white/50 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Nome Completo</label>
                  <input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>WhatsApp</label>
                  <input type="tel" id="phone" name="phone" required value={formState.phone} onChange={handleChange} className={inputClass} placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} className={inputClass} placeholder="seu@email.com" />
              </div>

              <div>
                <label htmlFor="billValue" className={labelClass}>Valor Médio da Conta de Luz</label>
                <select id="billValue" name="billValue" required value={formState.billValue} onChange={handleChange} className={inputClass}>
                  <option value="">Selecione uma opção</option>
                  <option value="ate-500">Até R$ 500,00</option>
                  <option value="500-1000">R$ 500,00 a R$ 1.000,00</option>
                  <option value="1000-2500">R$ 1.000,00 a R$ 2.500,00</option>
                  <option value="2500-5000">R$ 2.500,00 a R$ 5.000,00</option>
                  <option value="acima-5000">Acima de R$ 5.000,00</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Mensagem (Opcional)</label>
                <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Gostaria de saber mais sobre..." />
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
              >
                <Send size={16} />
                Solicitar Orçamento Grátis
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
