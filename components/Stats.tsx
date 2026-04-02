"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUpVariant, staggerContainer, viewportOnce } from "@/lib/animations";

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.includes("+") ? "+" : "";

  const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (v) =>
    Math.round(v).toLocaleString("pt-BR") + suffix
  );

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, numericValue, spring]);

  return (
    <motion.div ref={ref} variants={fadeUpVariant} className="text-center">
      <motion.p className="font-display text-4xl lg:text-5xl font-bold text-yellow-400 mb-2 leading-none">
        {displayValue}
      </motion.p>
      <p className="text-white/50 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { label: "Painéis Instalados",     value: "400.000+" },
    { label: "Energia Gerada (kWh)",   value: "24.000.000+" },
    { label: "Projetos Executados",    value: "500+" },
    { label: "Ton. de CO2 Evitadas",   value: "10.000+" },
  ];

  return (
    <section className="bg-[#111111] py-20 border-y border-[#2a2a2a]">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16"
        >
          {stats.map((stat, i) => (
            <Counter key={i} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
