"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mouse, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <Badge
              variant="secondary"
              className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium"
            >
              <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Mouse Gaming Ultraligero - Solo 48g
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6"
          >
            VXE R1 PRO
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              Gaming
            </span>
            <br />
            Hasta 26,000 DPI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Ratón gaming inalámbrico ultraligero con sensor PixArt PAW3395 de
            hasta 26,000 DPI, doble conectividad 2.4 GHz + USB-C, y batería de
            hasta 75 horas. Polling hasta 4 kHz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8"
          >
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground">
              <Mouse className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Sensor PAW3395</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Polling 4 kHz</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Garantía 1 Año</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto"
            >
              <Link href="/product/vxe-r1-pro">
                Ver Producto
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto"
            >
              Contactar
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
