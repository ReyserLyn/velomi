"use client";

import {
  ArrowRight,
  CheckCircle,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LINKS } from "@/config/links";
import type { Product } from "@/config/products";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2 md:mb-3">
          <Badge variant="outline" className="text-xs md:text-sm">
            {product.brand}
          </Badge>
          <Badge variant="secondary" className="text-xs md:text-sm">
            {product.category}
          </Badge>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
          {product.brand} {product.name}
        </h1>

        <p className="text-sm md:text-base text-muted-foreground">
          {product.description.short}
        </p>
      </div>

      <div className="flex items-center gap-2">
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

      <div className="space-y-2">
        <div className="flex items-baseline gap-2 md:gap-3">
          <span className="text-3xl md:text-4xl font-bold text-primary">
            S/ {product.price.current}
          </span>
          <span className="text-lg md:text-xl text-muted-foreground line-through">
            S/ {product.price.original}
          </span>
          <Badge variant="destructive" className="text-xs md:text-sm">
            Ahorra {product.price.discount}%
          </Badge>
        </div>

        <p className="text-xs md:text-sm text-muted-foreground">
          Precio incluye IGV
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span className="text-green-600 font-medium">
          {product.availability}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Button
          asChild
          size="lg"
          className="flex-1 h-auto py-3 md:py-4 text-sm md:text-base"
        >
          <Link href={LINKS.whatsapp}>
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Consultar Disponibilidad
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex-1 h-auto py-3 md:py-4 text-sm md:text-base"
          asChild
        >
          <Link
            href="/product/vxe-r1-pro#especificaciones"
            className="flex items-center"
          >
            Ver Especificaciones
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </Link>
        </Button>
      </div>

      <Card>
        <CardContent className="pt-4 md:pt-6">
          <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
            Características Destacadas:
          </h3>
          <div className="grid grid-cols-1 gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
              <span className="text-xs md:text-sm">{product.specs.sensor}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
              <span className="text-xs md:text-sm">{product.specs.dpi}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
              <span className="text-xs md:text-sm">
                {product.specs.buttons} Botones Programables
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
              <span className="text-xs md:text-sm">
                Iluminación RGB Personalizable
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          <span>Garantía {product.warranty}</span>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Truck className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          <span>Envío Gratis desde S/{product.shipping.minOrder}</span>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
          <span>Producto Original</span>
        </div>
      </div>
    </div>
  );
}
