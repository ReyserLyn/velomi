"use client";

import {
  Cable,
  Monitor,
  Mouse,
  Palette,
  Settings,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/config/products";

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  const specs = [
    {
      icon: Mouse,
      label: "Sensor",
      value: product.specs.sensor,
    },
    {
      icon: Zap,
      label: "DPI",
      value: product.specs.dpi,
    },
    {
      icon: Settings,
      label: "Botones",
      value: `${product.specs.buttons} programables`,
    },
    {
      icon: Cable,
      label: "Conexión",
      value: product.specs.connectivity,
    },
    {
      icon: Shield,
      label: "Peso",
      value: product.specs.weight,
    },
    {
      icon: Palette,
      label: "Dimensiones",
      value: product.specs.dimensions,
    },
    {
      icon: Monitor,
      label: "RGB",
      value: product.specs.rgb ? "Sí" : "No",
    },
    {
      icon: Smartphone,
      label: "Software",
      value: product.specs.software,
    },
  ];

  return (
    <Card id="especificaciones">
      <CardHeader className="pb-3 md:pb-4">
        <CardTitle className="text-base md:text-lg">
          Especificaciones Técnicas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 md:space-y-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center justify-between py-2 border-b border-muted last:border-b-0"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <spec.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="text-xs md:text-sm font-medium">
                  {spec.label}
                </span>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t">
          <h4 className="font-medium mb-2 text-sm md:text-base">
            Compatibilidad
          </h4>
          <p className="text-xs md:text-sm text-muted-foreground">
            {product.specs.compatibility}
          </p>
        </div>

        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t">
          <h4 className="font-medium mb-2 text-sm md:text-base">Garantía</h4>
          <p className="text-xs md:text-sm text-muted-foreground">
            {product.warranty} de garantía completa
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
