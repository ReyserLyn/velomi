"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <Badge
              variant="secondary"
              className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium mb-4 md:mb-6"
            >
              <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Oferta Especial - Mouse Gaming Profesional
            </Badge>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              ¿Listo para dominar el gaming?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              El VXE R1 PRO con sensor PAW3395 de 26,000 DPI y polling hasta 4
              kHz es tu arma secreta para la victoria. Producto de calidad con
              garantía y servicio local.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto"
            >
              <Link href="/product/vxe-r1-pro">
                Ver VXE R1 PRO
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto"
            >
              Contactar por WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Truck className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm md:text-base">
                  Envío Gratis
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  En pedidos desde S/200
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm md:text-base">
                  Garantía 1 Año
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Cobertura completa incluida
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm md:text-base">
                  Entrega Rápida
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  1-3 días hábiles
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
