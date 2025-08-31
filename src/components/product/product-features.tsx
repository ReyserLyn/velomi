"use client";

import {
  Battery,
  Heart,
  Mouse,
  Palette,
  Settings,
  Shield,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/config/products";

interface ProductFeaturesProps {
  product: Product;
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  const iconMap = {
    Mouse,
    Zap,
    Settings,
    Palette,
    Shield,
    Heart,
    Battery,
  };

  return (
    <Card>
      <CardHeader className="pb-3 md:pb-4">
        <CardTitle className="text-base md:text-lg">
          Características Principales
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {product.features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

            if (!IconComponent) {
              console.warn(
                `Icon not found: ${feature.icon}, using default icon`,
              );
            }

            return (
              <div
                key={feature.title}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {IconComponent ? (
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  ) : (
                    <Settings className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t">
          <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
            Descripción Detallada
          </h4>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p className="whitespace-pre-line leading-relaxed text-xs md:text-sm">
              {product.description.long}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
