"use client";

import { motion } from "framer-motion";
import { Phone, Zap } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b overflow-hidden">
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="flex items-center justify-center py-3 whitespace-nowrap"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <AnnouncementBarContent />
          <AnnouncementBarContent />
        </motion.div>
      </div>
    </div>
  );
}

const AnnouncementBarContent = () => {
  return (
    <div className="flex items-center gap-6 px-8">
      <div className="flex items-center gap-3">
        <Zap className="w-5 h-5 text-primary animate-pulse" />
        <span className="font-semibold text-sm">
          🎮 ¡Nueva tienda en Moquegua!
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Envío gratis desde S/200</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">
          10% descuento en tu primera compra
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="tel:+51932718790"
          className="flex items-center gap-2 hover:text-primary transition-colors group"
        >
          <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="font-medium text-sm">+51 932 718 790</span>
        </Link>
      </div>
    </div>
  );
};
