"use client";

import { CheckCircle, Clock, MapPin, Truck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/config/products";

interface ShippingInfoProps {
  product: Product;
}

export function ShippingInfo({ product }: ShippingInfoProps) {
  return (
    <Card>
      <CardHeader className="pb-3 md:pb-4">
        <CardTitle className="text-base md:text-lg flex items-center gap-2">
          <Truck className="w-4 h-4 md:w-5 md:h-5" />
          Información de Envío y Entrega
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              Entrega Local - Moquegua
            </h4>

            <Badge variant="secondary" className="mb-2 text-xs md:text-sm">
              <Zap className="w-2 h-2 md:w-3 md:h-3 mr-1" />
              Entrega el mismo día
            </Badge>
          </div>

          <div>
            <h4 className="font-semibold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
              <Truck className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              Envío Regional
            </h4>

            <Badge variant="secondary" className="text-xs md:text-sm">
              <Clock className="w-2 h-2 md:w-3 md:h-3 mr-1" />
              {product.shipping.deliveryTime}
            </Badge>
          </div>
        </div>

        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="text-center p-3 md:p-4 bg-muted/50 rounded-lg">
              <Truck className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
              <h5 className="font-semibold mb-1 text-sm md:text-base">
                Envío Gratis
              </h5>
              <p className="text-xs md:text-sm text-muted-foreground">
                En pedidos desde S/{product.shipping.minOrder}
              </p>
            </div>
            <div className="text-center p-3 md:p-4 bg-muted/50 rounded-lg">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
              <h5 className="font-semibold mb-1 text-sm md:text-base">
                Tiempo de Entrega
              </h5>
              <p className="text-xs md:text-sm text-muted-foreground">
                {product.shipping.deliveryTime}
              </p>
            </div>
            <div className="text-center p-3 md:p-4 bg-muted/50 rounded-lg">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-2" />
              <h5 className="font-semibold mb-1 text-sm md:text-base">
                Seguimiento
              </h5>
              <p className="text-xs md:text-sm text-muted-foreground">
                Código de seguimiento incluido
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
