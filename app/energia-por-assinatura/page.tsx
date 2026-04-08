"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  Flag,
  LifeBuoy,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import LogoCarousel from "@/components/LogoCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";

const DISCOUNT_RATE = 0.2;
const TARIFF_FLAG_BONUS_RATE = 0.1;

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatCurrency = (value: number) => {
  if (!Number.isFinite(value)) return currencyFormatter.format(0);
  return currencyFormatter.format(value);
};

const maskCurrencyInput = (rawValue: string) => {
  const digitsOnly = rawValue.replace(/\D/g, "");
  if (!digitsOnly) return "";

  const numericValue = Number(digitsOnly) / 100;
  return numericValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const parseCurrencyInput = (maskedValue: string) => {
  if (!maskedValue) return 0;
  const normalized = maskedValue
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.]/g, "");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const benefits = [
  {
    icon: BadgePercent,
    title: "Até 20% de desconto",
    description: "Economia recorrente sem investir em equipamentos.",
  },
  {
    icon: Wallet,
    title: "Zero investimento inicial",
    description: "Sem compra de painéis, inversor ou obras no imóvel.",
  },
  {
    icon: Flag,
    title: "Sem cobrança de bandeira tarifária",
    description: "Na assinatura Dorata, a oscilação da bandeira não entra na sua cobrança.",
  },
  {
    icon: ShieldCheck,
    title: "Contrato transparente",
    description: "Processo simples, seguro e com acompanhamento local.",
  },
];

const partnershipBenefits = [
  {
    icon: FileText,
    title: "Cadastro rápido e facilitado",
    description: "Adesão simples para unidades com conta a partir de R$ 500/mês.",
  },
  {
    icon: Wallet,
    title: "Sem taxa de adesão e cancelamento",
    description: "Entrada sem custo e saída transparente, sem multas surpresa.",
  },
  {
    icon: CalendarDays,
    title: "Flexibilidade de vencimento",
    description: "Ajuste de datas para encaixar no fluxo financeiro do cliente.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte local especializado",
    description: "Atendimento de equipe regional com suporte técnico e comercial próximo.",
  },
  {
    icon: Building2,
    title: "Solução completa para diferentes perfis",
    description: "Modelo aplicável para residencial, comércio e empresas com maior consumo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica e contratual",
    description: "Processo com regras claras e acompanhamento em todas as etapas.",
  },
];

const faqItems = [
  {
    question: "Preciso instalar alguma coisa na minha casa ou empresa?",
    answer:
      "Não. A energia é gerada em usinas remotas da Dorata e compensada na sua fatura por crédito de energia.",
  },
  {
    question: "A calculadora já mostra o valor exato do contrato?",
    answer:
      "A calculadora é uma estimativa rápida com base em 20% de economia sobre o valor informado. O valor final é confirmado na análise da sua unidade consumidora.",
  },
  {
    question: "E se a concessionária ativar bandeira tarifária?",
    answer:
      "Na assinatura Dorata, esse custo extra não é repassado para você como na conta tradicional.",
  },
  {
    question: "Quanto tempo demora para começar a economizar?",
    answer:
      "Após validação e ativação da unidade, a compensação entra nas próximas faturas de forma recorrente.",
  },
];

export default function EnergiaPorAssinaturaPage() {
  const [billInput, setBillInput] = useState("800,00");
  const [hasTariffFlag, setHasTariffFlag] = useState(false);

  const billValue = useMemo(() => parseCurrencyInput(billInput), [billInput]);
  const baseMonthlySavings = billValue * DISCOUNT_RATE;
  const tariffFlagSavings = hasTariffFlag ? billValue * TARIFF_FLAG_BONUS_RATE : 0;
  const monthlySavings = baseMonthlySavings + tariffFlagSavings;
  const yearlySavings = monthlySavings * 12;
  const projectedBill = Math.max(billValue - monthlySavings, 0);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(250,204,21,0.18),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(250,204,21,0.08),transparent_40%),linear-gradient(135deg,#0a0a0a_20%,#111111_100%)]" />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <span className="section-chip mb-6 block w-fit">Energia por Assinatura</span>

          <h1 className="max-w-4xl font-display text-[clamp(2.1rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-white font-bold">
            Economize na conta de luz{" "}
            <span className="text-yellow-400">sem obra e sem investimento.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[clamp(1rem,2vw,1.35rem)] text-white/65 leading-relaxed">
            A assinatura da Dorata usa energia limpa de usinas remotas e transforma seu consumo em economia real,
            com previsibilidade no mês e no ano.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#calculadora" className="btn-primary inline-flex items-center gap-2">
              Simular minha economia
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/5566999832633"
              className="btn-outline inline-flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="card-dark p-5">
              <p className="text-white/45 text-xs uppercase tracking-[0.12em]">Economia média</p>
              <p className="mt-2 text-3xl font-display font-bold text-yellow-400">20%</p>
            </div>
            <div className="card-dark p-5">
              <p className="text-white/45 text-xs uppercase tracking-[0.12em]">Investimento inicial</p>
              <p className="mt-2 text-3xl font-display font-bold text-white">R$ 0</p>
            </div>
            <div className="card-dark p-5">
              <p className="text-white/45 text-xs uppercase tracking-[0.12em]">Bandeira tarifária</p>
              <p className="mt-2 text-3xl font-display font-bold text-white">Não paga</p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculadora" className="py-20 bg-[#0d0d0d] border-y border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <span className="section-chip mb-4 block w-fit">Calculadora de Economia</span>
            <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.02em] text-white">
              Veja agora quanto você pode economizar com a assinatura Dorata.
            </h2>
            <p className="text-white/55 mt-5 max-w-2xl leading-relaxed">
              Informe o valor médio da sua fatura. A simulação mostra sua economia no mês atual e acumulada em
              12 meses, incluindo bônus de bandeira tarifária quando aplicável.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Cadastro rápido e facilitado para começar a economizar",
                "Sem taxa de adesão e sem taxa de cancelamento",
                "Sem cobrança de bandeira tarifária na assinatura",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-dark rounded-2xl p-6 md:p-8">
            <label
              htmlFor="billValue"
              className="block text-xs font-semibold text-white/50 uppercase tracking-[0.08em] mb-3"
            >
              Valor médio da sua fatura de energia
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/55 text-sm">R$</span>
              <input
                id="billValue"
                type="text"
                inputMode="decimal"
                value={billInput}
                onChange={(event) => setBillInput(maskCurrencyInput(event.target.value))}
                placeholder="0,00"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#161616] border border-[#2a2a2a] text-white text-lg font-semibold outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-colors"
              />
            </div>

            <label className="mt-5 flex items-center gap-3 text-sm text-white/70 select-none cursor-pointer">
              <input
                type="checkbox"
                checked={hasTariffFlag}
                onChange={(event) => setHasTariffFlag(event.target.checked)}
                className="h-4 w-4 rounded border-[#3a3a3a] bg-[#161616] text-yellow-400 focus:ring-yellow-400/30"
              />
              Minha conta está com bandeira tarifária
            </label>

            <div className="mt-7 grid gap-3">
              <div className="rounded-xl border border-white/10 bg-[#131313] p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-white/50">Economia no mês atual</p>
                <p className="text-2xl font-display font-bold text-yellow-400 mt-1">{formatCurrency(monthlySavings)}</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#131313] p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-white/50">Economia estimada em 12 meses</p>
                <p className="text-2xl font-display font-bold text-white mt-1">{formatCurrency(yearlySavings)}</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#131313] p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-white/50">Nova fatura estimada</p>
                <p className="text-2xl font-display font-bold text-white mt-1">{formatCurrency(projectedBill)}</p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-[#131313] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-white/50">Bônus de bandeira tarifária</p>
              <p className="text-xl font-display font-bold text-white mt-1">{formatCurrency(tariffFlagSavings)}</p>
              <p className="text-xs text-white/45 mt-1">
                {hasTariffFlag
                  ? "Considerado na simulação deste mês."
                  : "Marque a opção acima para simular um mês com bandeira tarifária."}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4">
              <div className="flex items-start gap-3">
                <Flag size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-yellow-300">
                    {hasTariffFlag
                      ? "Com bandeira ativa, você mantém economia da assinatura e não paga o adicional da bandeira."
                      : "Se entrar bandeira tarifária, ela não é cobrada na assinatura Dorata."}
                  </p>
                  <p className="text-xs text-yellow-100/75 mt-1">
                    Simulação base: 20% de economia + bônus estimado de 10% em meses com bandeira tarifária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl mb-10">
            <span className="section-chip mb-4 block w-fit">Por que Assinar</span>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-bold text-white leading-[1.04] tracking-[-0.02em]">
              Mesma energia da rede, com uma conta mais inteligente.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="card-dark p-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-white/50 text-sm mt-2 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f0f0f] border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl mb-10">
            <span className="section-chip mb-4 block w-fit">Vantagens da Assinatura</span>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.04] tracking-[-0.02em]">
              Benefícios práticos para reduzir custo e simplificar sua operação.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnershipBenefits.map(({ icon: Icon, title, description }) => (
              <article key={title} className="card-dark p-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-white/50 text-sm mt-2 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111111] border-y border-white/10">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="max-w-2xl mb-10">
            <span className="section-chip mb-4 block w-fit">Dúvidas Frequentes</span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-[1.05]">
              O essencial para você decidir com segurança.
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="group card-dark px-5 py-4">
                <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                  <span className="text-white font-semibold">{faq.question}</span>
                  <span className="text-yellow-400 text-lg leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-white/55 mt-3 pr-8 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-10">
            <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
              Quero receber uma proposta
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
