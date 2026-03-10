"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { CheckCircle, Zap, ShieldCheck, Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function EnergiaPorAssinatura() {
    const benefits = [
        {
            icon: <Wallet className="text-accent" size={32} />,
            title: "Zero Investimento",
            description: "Você não precisa comprar painéis solares, inversores ou fazer obras no seu telhado."
        },
        {
            icon: <Zap className="text-accent" size={32} />,
            title: "Economia Garantida",
            description: "Redução mensal na sua conta de luz (média de 20%) através de créditos de energia."
        },
        {
            icon: <ShieldCheck className="text-accent" size={32} />,
            title: "Sem Fidelidade",
            description: "Liberdade para você. Contratos transparentes e sem pegadinhas."
        },
        {
            icon: <CheckCircle className="text-accent" size={32} />,
            title: "Energia Limpa",
            description: "Consuma energia 100% renovável gerada em nossas usinas solares certificadas."
        }
    ];

    const faqs = [
        {
            q: "Como funciona o aluguel de energia solar?",
            a: "A Dorata Rental gera energia em suas usinas solares e injeta na rede da distribuidora. Essa energia vira créditos que são descontados diretamente na sua conta de luz."
        },
        {
            q: "Preciso instalar algum equipamento?",
            a: "Não! O aluguel de energia não exige nenhuma instalação na sua casa ou empresa. Tudo é feito remotamente através da compensação de créditos."
        },
        {
            q: "É seguro confiar na Rental?",
            a: "Sim! Somos uma empresa consolidada com usinas reais e operacionais. Todo o processo é regulamentado pela ANEEL (Lei 14.300)."
        },
        {
            q: "Quanto posso economizar?",
            a: "A economia varia de acordo com seu consumo, mas garantimos um desconto percentual (geralmente até 20%) sobre a tarifa de energia da concessionária."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Rental */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-dark via-primary to-[#0d5a43]">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/10 skew-x-12 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-28 right-16 w-80 h-80 bg-secondary/18 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="section-chip border-white/20 bg-white/10 text-white mb-6 inline-block">
                            Energia por Assinatura
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Economize 20% na conta de luz <span className="text-accent">sem gastar nem 1 real.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                            A tecnologia solar da Dorata, agora acessível para todos. Sem obras, sem investimento e sem dor de cabeça.
                        </p>
                        <Link
                            href="#simulacao"
                            className="bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_12px_24px_rgba(9,79,57,0.35)] hover:brightness-110 transition-all inline-flex items-center gap-2"
                        >
                            Quero meu desconto agora <ArrowRight />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Client Logo Carousel */}
            <section className="py-12 bg-light border-y border-primary/10 overflow-hidden">
                <div className="container mx-auto px-6 mb-8 text-center">
                    <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">Empresas que já economizam com a Rental</p>
                </div>

                {/* Infinite Scroll Container */}
                <div className="space-y-8">
                    {/* Row 1 - Left to Right */}
                    <div className="relative w-full overflow-hidden group">
                        <div className="flex animate-scroll whitespace-nowrap gap-8 w-max hover:[animation-play-state:paused]">
                            {[...Array(8)].map((_, i) => (
                                <div key={`r1-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">CLIENTE {i + 1}</span>
                                </div>
                            ))}
                            {[...Array(8)].map((_, i) => (
                                <div key={`r1-d-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">CLIENTE {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Reverse */}
                    <div className="relative w-full overflow-hidden group">
                        <div className="flex animate-scroll-reverse whitespace-nowrap gap-8 w-max hover:[animation-play-state:paused]">
                            {[...Array(8)].map((_, i) => (
                                <div key={`r2-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">PARCEIRO {i + 1}</span>
                                </div>
                            ))}
                            {[...Array(8)].map((_, i) => (
                                <div key={`r2-d-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">PARCEIRO {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="relative w-full overflow-hidden group">
                        <div className="flex animate-scroll whitespace-nowrap gap-8 w-max hover:[animation-play-state:paused]">
                            {[...Array(8)].map((_, i) => (
                                <div key={`r3-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">INDÚSTRIA {i + 1}</span>
                                </div>
                            ))}
                            {[...Array(8)].map((_, i) => (
                                <div key={`r3-d-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">INDÚSTRIA {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 4 - Reverse */}
                    <div className="relative w-full overflow-hidden group">
                        <div className="flex animate-scroll-reverse whitespace-nowrap gap-8 w-max hover:[animation-play-state:paused]">
                            {[...Array(8)].map((_, i) => (
                                <div key={`r4-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">COMÉRCIO {i + 1}</span>
                                </div>
                            ))}
                            {[...Array(8)].map((_, i) => (
                                <div key={`r4-d-${i}`} className="w-48 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 font-bold text-xs">COMÉRCIO {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Gradient Fade Edges */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
            </section>

            {/* High Consumption Banner */}
            <section className="py-20 bg-gradient-to-br from-dark via-[#0b241d] to-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-primary/10"></div>
                <div className="absolute -left-20 top-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 md:flex items-center justify-between gap-8">
                        <div className="mb-8 md:mb-0 max-w-2xl">
                            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">
                                Alta Demanda
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Sua conta de luz passa de <span className="text-accent">R$ 5.000?</span>
                            </h2>
                            <p className="text-gray-300 text-lg">
                                Empresas e consumidores de alta tensão possuem condições especiais e descontos diferenciados no Mercado Livre de Energia.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link
                                href="#simulacao"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(17,122,89,0.35)] hover:shadow-[0_0_30px_rgba(17,122,89,0.5)] transform hover:-translate-y-1"
                            >
                                Consultar Desconto VIP <ArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-20 bg-white/75">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Como funciona a Assinatura Solar?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">É simples como assinar um serviço de streaming. Nós geramos, a distribuidora entrega e você economiza.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong lift-card p-8 rounded-2xl border border-white/50 transition-all"
                            >
                                <div className="bg-white p-4 rounded-xl shadow-sm w-fit mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-light/80">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Dorata x Energia Tradicional</h2>
                    <div className="glass-strong rounded-2xl shadow-xl overflow-hidden border border-white/60">
                        <div className="grid grid-cols-3 bg-primary text-white p-6 font-bold text-lg">
                            <div className="col-span-1">Benefício</div>
                            <div className="col-span-1 text-center">Energia Comum</div>
                            <div className="col-span-1 text-center text-accent">Dorata Rental</div>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                ["Custo de Instalação", "R$ 0", "R$ 0"],
                                ["Obras no Imóvel", "Não", "Não"],
                                ["Desconto na tarifa", "0%", "Até 20%"],
                                ["Energia Limpa", "Talvez", "Sim (100%)"],
                                ["Burocracia", "Muita", "Zero"]
                            ].map(([label, bad, good], i) => (
                                <div key={i} className="grid grid-cols-3 p-6 hover:bg-gray-50 transition-colors">
                                    <div className="font-semibold text-gray-700">{label}</div>
                                    <div className="text-center text-gray-500">{bad}</div>
                                    <div className="text-center font-bold text-green-600 bg-green-50 rounded-lg py-1">{good}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Rental FAQ */}
            <section className="py-20 bg-white/75">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Dúvidas Frequentes sobre Assinatura</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group glass-strong p-6 rounded-2xl border border-white/60">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-primary">
                                    <span>{faq.q}</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="text-gray-600 mt-4 group-open:animate-fadeIn">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div id="simulacao">
                <ContactForm />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
