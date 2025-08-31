"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { VXE_R1_PRO } from "@/config/products";

export function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -100px 0px",
  });

  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [VXE_R1_PRO.images.main, ...VXE_R1_PRO.images.gallery];

  const specs = [
    `Sensor ${VXE_R1_PRO.specs.sensor}`,
    `Hasta ${VXE_R1_PRO.specs.dpi}`,
    `${VXE_R1_PRO.specs.buttons} Botones Programables`,
    "Iluminación RGB Personalizable",
    "Doble Conectividad 2.4 GHz + USB-C",
    "Peso Ultraligero 48g",
    `Garantía ${VXE_R1_PRO.warranty}`,
    `Compatibilidad: ${VXE_R1_PRO.specs.compatibility}`,
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl md:rounded-3xl p-4 md:p-8">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src={allImages[currentImage]}
                  alt={`${VXE_R1_PRO.brand} ${VXE_R1_PRO.name} - Imagen ${currentImage + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={currentImage === 0}
                />
              </div>

              <motion.div
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Badge
                  variant="secondary"
                  className="bg-green-500/20 text-green-600 border-green-500/30 text-xs md:text-sm"
                >
                  <CheckCircle className="w-2 h-2 md:w-3 md:h-3 mr-1" />
                  {VXE_R1_PRO.availability}
                </Badge>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Badge
                  variant="secondary"
                  className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30 text-xs md:text-sm"
                >
                  <Zap className="w-2 h-2 md:w-3 md:h-3 mr-1" />
                  Polling 4 kHz
                </Badge>
              </motion.div>
            </div>

            <div className="mt-3 md:mt-4 grid grid-cols-5 gap-1 md:gap-2">
              {allImages.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    currentImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground/20"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${VXE_R1_PRO.name} - Miniatura ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            <div>
              <Badge
                variant="outline"
                className="mb-3 md:mb-4 text-xs md:text-sm"
              >
                {VXE_R1_PRO.category}
              </Badge>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                {VXE_R1_PRO.brand} {VXE_R1_PRO.name}
              </h2>
              <p className="text-base md:text-xl text-muted-foreground mb-4 md:mb-6">
                {VXE_R1_PRO.description.short}
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={`star-${i}`}
                    className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm text-muted-foreground">
                (4.5/5) - Nuevo producto
              </span>
            </div>

            <div className="flex items-baseline gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="text-2xl md:text-4xl font-bold text-primary">
                S/ {VXE_R1_PRO.price.current}
              </span>
              <span className="text-lg md:text-xl text-muted-foreground line-through">
                S/ {VXE_R1_PRO.price.original}
              </span>
              <Badge variant="destructive" className="text-xs md:text-sm">
                Ahorra {VXE_R1_PRO.price.discount}%
              </Badge>
            </div>

            <Card className="bg-muted/30 border-0">
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
                  Características Principales:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
                  {specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-xs md:text-sm"
                    >
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                asChild
                size="lg"
                className="flex-1 h-auto py-3 md:py-4 text-sm md:text-base"
              >
                <Link href="/product/vxe-r1-pro">
                  <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Consultar Disponibilidad
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 h-auto py-3 md:py-4 text-sm md:text-base"
              >
                Ver Detalles
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1 md:gap-2">
                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                <span>Garantía {VXE_R1_PRO.warranty}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                <span>Producto Original</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                <span>Polling 4 kHz</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
