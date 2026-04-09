"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SunMedium,
  Cable,
  BatteryCharging,
  Car,
  Repeat,
  Building2,
  TrendingUp,
} from "lucide-react";

const solutions = [
  {
    icon: SunMedium,
    label: "Usinas Solares",
    headline: "Montamos usinas solares\nsob medida.",
    description:
      "Projetamos e executamos sistemas on-grid e off-grid para residência, comércio, indústria e agronegócio, com engenharia completa do início à entrega.",
    color: "#facc15",
  },
  {
    icon: Cable,
    label: "Soluções Elétricas",
    headline: "Todo tipo de solução\nelétrica com energia solar.",
    description:
      "A Dorata integra projeto elétrico, infraestrutura e equipamentos para garantir performance, segurança e escalabilidade em cada instalação.",
    color: "#22c55e",
  },
  {
    icon: BatteryCharging,
    label: "Sistema BESS",
    headline: "Energia inteligente\npara ponta e fora ponta.",
    description:
      "Para grandes clientes, aplicamos BESS para reduzir demanda em horário de ponta e fora ponta, diminuindo ou removendo o uso de gerador a diesel.",
    color: "#60a5fa",
  },
  {
    icon: Car,
    label: "Mobilidade Elétrica",
    headline: "Carregador veicular\nno tamanho que precisar.",
    description:
      "Fornecemos o carregador ideal para cada operação e realizamos toda a instalação, configuração e comissionamento com equipe técnica Dorata.",
    color: "#fb923c",
  },
  {
    icon: Repeat,
    label: "Energia por Assinatura",
    headline: "Economia recorrente\ncom a Rental Dorata.",
    description:
      "Entregamos energia por assinatura sem investimento inicial, com crédito de energia e previsibilidade de custo para clientes residenciais e empresariais.",
    color: "#a78bfa",
  },
  {
    icon: Building2,
    label: "Projetos Urbanos",
    headline: "Material elétrico\npara obras urbanas.",
    description:
      "Atendemos projetos urbanos com fornecimento de material elétrico e suporte técnico, garantindo padrão, prazo e compatibilidade com o projeto.",
    color: "#14b8a6",
  },
  {
    icon: TrendingUp,
    label: "Investidores",
    headline: "Usinas de investimento\npara perfis exigentes.",
    description:
      "Estruturamos usinas para investidores que buscam retorno na casa de 2% ao mês, com infraestrutura robusta para gestão de créditos e performance.",
    color: "#f59e0b",
  },
];

type Solution = (typeof solutions)[number];
type ScrollYProgress = ReturnType<typeof useScroll>["scrollYProgress"];

interface SlideProps {
  item: Solution;
  index: number;
  total: number;
  scrollYProgress: ScrollYProgress;
}

function SolutionText({ item, index, total, scrollYProgress }: SlideProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.08, end - 0.08, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start - 0.05, start + 0.08], [36, 0]);
  const Icon = item.icon;

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 w-fit"
        style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
      >
        <Icon size={12} />
        {item.label}
      </div>

      <h2 className="font-display text-[clamp(2.3rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.03em] text-[#d1d5db] whitespace-pre-line">
        {item.headline}
      </h2>

      <p className="text-white/45 text-[clamp(0.95rem,1.5vw,1.35rem)] leading-relaxed mt-6 max-w-2xl">
        {item.description}
      </p>
    </motion.div>
  );
}

function SolutionCard({ item, index, total, scrollYProgress }: SlideProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.08, end - 0.08, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start - 0.05, start + 0.08], [0.86, 1]);
  const Icon = item.icon;

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-44 h-44 md:w-56 md:h-56 rounded-3xl flex items-center justify-center border"
        style={{
          background: `${item.color}0f`,
          borderColor: `${item.color}40`,
          boxShadow: `0 0 40px ${item.color}15`,
        }}
      >
        <Icon size={92} style={{ color: item.color }} strokeWidth={1.2} />
      </div>
    </motion.div>
  );
}

function ProgressBar({ item, index, total, scrollYProgress }: SlideProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start - 0.05, start + 0.08, end - 0.08, end], [0.35, 1, 1, 0.35]);

  return <motion.div style={{ opacity, background: item.color }} className="w-1 h-8 rounded-full" />;
}

export default function ProductsSummaryStory() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="resumo-solucoes" ref={containerRef} className="relative h-[580vh] md:h-[720vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#050505] border-y border-white/5">
        <div className="h-full max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div className="relative h-[380px] md:h-[480px]">
            {solutions.map((item, i) => (
              <SolutionText
                key={item.label}
                item={item}
                index={i}
                total={solutions.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="relative h-[220px] md:h-[340px]">
            {solutions.map((item, i) => (
              <SolutionCard
                key={item.label}
                item={item}
                index={i}
                total={solutions.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-2">
          {solutions.map((item, i) => (
            <ProgressBar
              key={`${item.label}-progress`}
              item={item}
              index={i}
              total={solutions.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
