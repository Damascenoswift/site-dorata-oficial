"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, label }: { value: string, label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Extract number and suffix/prefix
    const numericValue = parseInt(value.replace(/\D/g, ""));
    const suffix = value.includes("+") ? "+" : "";

    const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 });
    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toLocaleString("pt-BR") + suffix
    );

    useEffect(() => {
        if (isInView) {
            spring.set(numericValue);
        }
    }, [isInView, numericValue, spring]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-strong lift-card p-6 rounded-2xl text-center shadow-lg border border-white/50 flex flex-col justify-center items-center h-full min-h-[160px]"
        >
            <motion.h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-3 sm:break-normal break-all leading-tight">
                {displayValue}
            </motion.h3>
            <p className="text-gray-600 text-sm md:text-base font-semibold">
                {label}
            </p>
        </motion.div>
    );
}

export default function Stats() {
    const stats = [
        { label: "Painéis Instalados", value: "400.000+" },
        { label: "Energia Gerada (kWh)", value: "24.000.000+" },
        { label: "Projetos Executados", value: "500+" },
        { label: "Ton. de CO2 Evitadas", value: "10.000+" },
    ];

    return (
        <section className="bg-gradient-to-b from-light/80 to-background py-16 relative overflow-hidden">
            {/* Abstract background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
}
