import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/projects/Logo Deitada - Fundo transparente.png"
                alt="Dorata Solucoes Eletricas"
                width={946}
                height={946}
                className="h-auto w-[220px]"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Transformando o futuro com energia limpa e soluções inteligentes para sua casa e empresa.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-white/40 hover:text-yellow-400 hover:border-yellow-400/40 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Navegação</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {[
                { label: "Soluções", href: "#solutions" },
                { label: "Vantagens", href: "#benefits" },
                { label: "Sobre Nós", href: "#about" },
                { label: "Área do Cliente", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Informações</h4>
            <ul className="space-y-3 text-white/40 text-sm">
              {["Política de Privacidade", "Termos de Uso", "Trabalhe Conosco"].map((label) => (
                <li key={label}>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contato</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                <span>Endereço da Empresa, 123<br />Cidade - UF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400 shrink-0" />
                <span>contato@doratasolar.com.br</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/"
                  className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5"
                >
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center text-white/25 text-xs">
          <p>&copy; {new Date().getFullYear()} Dorata Solar. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com energia limpa.</p>
        </div>
      </div>
    </footer>
  );
}
