"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5566999832633"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black p-4 rounded-full shadow-[0_8px_24px_rgba(250,204,21,0.3)] flex items-center justify-center hover:bg-yellow-300 transition-colors"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
