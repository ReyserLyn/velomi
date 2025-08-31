"use client";

import { motion } from "framer-motion";
import { Battery, Mouse, Palette, Settings, Shield, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Mouse,
    title: "Sensor PAW3395",
    description:
      "Sensor óptico PixArt PAW3395 de hasta 26,000 DPI con 650 IPS para máxima precisión en gaming.",
    color: "text-blue-500",
  },
  {
    icon: Zap,
    title: "Polling hasta 4 kHz",
    description:
      "Respuesta ultrarrápida con polling de hasta 4 kHz para dongle opcional, 1 kHz estándar.",
    color: "text-yellow-500",
  },
  {
    icon: Settings,
    title: "6 Botones Programables",
    description:
      "6 botones personalizables con software VGN Hub para macros, DPI y configuración avanzada.",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "Iluminación RGB",
    description:
      "Efectos de iluminación RGB personalizables a través del software VGN Hub.",
    color: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Garantía 1 Año",
    description:
      "Garantía completa de 1 año para tu tranquilidad y confianza en el producto.",
    color: "text-red-500",
  },
  {
    icon: Battery,
    title: "Batería 75 Horas",
    description:
      "Hasta 75 horas de autonomía con polling de 1 kHz, perfecto para sesiones gaming largas.",
    color: "text-emerald-500",
  },
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
          >
            ¿Por qué elegir el VXE R1 PRO?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Cada característica está diseñada para ofrecerte la mejor
            experiencia gaming al mejor precio.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-3 md:pb-4">
                  <div className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                    <feature.icon
                      className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`}
                    />
                  </div>
                  <CardTitle className="text-base md:text-lg">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
