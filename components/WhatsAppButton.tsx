"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/" // Add actual number
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-full shadow-[0_18px_32px_rgba(15,122,88,0.42)] flex items-center justify-center hover:brightness-110 transition-colors ring-4 ring-white/40"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle size={32} />
        </motion.a>
    );
}
