"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        billValue: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to an API
        alert("Obrigado! Recebemos seus dados e entraremos em contato em breve.");
        setFormState({ name: "", email: "", phone: "", billValue: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-white/70 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(41,177,127,0.14),transparent_35%)]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="section-chip mb-2"
                    >
                        Solicite seu Orçamento
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Comece a economizar agora
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Preencha o formulário abaixo e nossos especialistas farão uma simulação personalizada
                        de quanto você pode economizar com a Dorata.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary to-[#0a5a42] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden"
                    >
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <h3 className="text-2xl font-bold mb-8">Fale Conosco</h3>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <Phone size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Telefone / WhatsApp</h4>
                                    <p className="text-white/80">(00) 99999-9999</p>
                                    <p className="text-white/60 text-sm">Seg - Sex, 8h às 18h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <Mail size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email</h4>
                                    <p className="text-white/80">contato@doratasolar.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <MapPin size={24} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                                    <p className="text-white/80">
                                        Av. Paulista, 1000 - Sala 123<br />
                                        Bela Vista, São Paulo - SP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong p-8 rounded-2xl shadow-lg border border-white/60"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/70 focus:ring-2 focus:ring-secondary/40 focus:border-transparent outline-none transition-all focus-ring"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/70 focus:ring-2 focus:ring-secondary/40 focus:border-transparent outline-none transition-all focus-ring"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/70 focus:ring-2 focus:ring-secondary/40 focus:border-transparent outline-none transition-all focus-ring"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="billValue" className="block text-sm font-medium text-gray-700 mb-2">Valor Médio da Conta de Luz</label>
                                <select
                                    id="billValue"
                                    name="billValue"
                                    required
                                    value={formState.billValue}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/70 focus:ring-2 focus:ring-secondary/40 focus:border-transparent outline-none transition-all focus-ring"
                                >
                                    <option value="">Selecione uma opção</option>
                                    <option value="ate-500">Até R$ 500,00</option>
                                    <option value="500-1000">R$ 500,00 a R$ 1.000,00</option>
                                    <option value="1000-2500">R$ 1.000,00 a R$ 2.500,00</option>
                                    <option value="2500-5000">R$ 2.500,00 a R$ 5.000,00</option>
                                    <option value="acima-5000">Acima de R$ 5.000,00</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem (Opcional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-white/70 focus:ring-2 focus:ring-secondary/40 focus:border-transparent outline-none transition-all resize-none focus-ring"
                                    placeholder="Gostaria de saber mais sobre..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:brightness-110 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Solicitar Orçamento Grátis
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
