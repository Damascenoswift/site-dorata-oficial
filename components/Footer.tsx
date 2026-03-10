import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-dark to-[#07140f] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
            <div className="absolute -top-20 right-10 w-72 h-72 bg-secondary/15 blur-3xl rounded-full pointer-events-none"></div>
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold flex items-center gap-2 mb-6">
                            <span className="text-white">Dorata<span className="text-accent">Solar</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Transformando o futuro com energia limpa e soluções inteligentes para sua casa e empresa.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 w-fit">Navegação</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#solutions" className="hover:text-accent transition-colors flex items-center gap-2"><span>›</span> Soluções</Link></li>
                            <li><Link href="#benefits" className="hover:text-accent transition-colors flex items-center gap-2"><span>›</span> Vantagens</Link></li>
                            <li><Link href="#about" className="hover:text-accent transition-colors flex items-center gap-2"><span>›</span> Sobre Nós</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span>›</span> Área do Cliente</Link></li>
                        </ul>
                    </div>

                    {/* Legal/Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 w-fit">Informações</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-accent transition-colors">Política de Privacidade</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Trabalhe Conosco</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-secondary/30 pb-2 w-fit">Contato</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                                <span>Endereço da Empresa, 123<br />Cidade - UF</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-accent shrink-0" />
                                <span>(00) 00000-0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-accent shrink-0" />
                                <span>contato@doratasolar.com.br</span>
                            </li>
                            <li className="pt-4">
                                <a
                                    href="https://wa.me/"
                                    className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-colors w-full md:w-auto shadow-lg shadow-green-900/20"
                                >
                                    <MessageCircle size={20} />
                                    Falar no WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Dorata Solar. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Desenvolvido com energia limpa.</p>
                </div>
            </div>
        </footer>
    );
}
