"use client";

import {
  Clock,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Shield,
  Truck,
} from "lucide-react";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/components/logos";
import { LINKS } from "@/config/links";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Velomi Store</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu tienda de confianza para accesorios gaming en Moquegua, Perú.
              Comenzamos con el VXE R1 PRO y creceremos contigo.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={LINKS.facebook}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <FacebookLogo className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={LINKS.instagram}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <InstagramLogo className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={LINKS.tiktok}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <TikTokLogo className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={LINKS.whatsapp}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <WhatsAppLogo className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/product/vxe-r1-pro"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  VXE R1 PRO
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contacto</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <Link
                  href="tel:+51932718790"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  +51 932 718 790
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <Link
                  href="mailto:velomistore@hotmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  velomistore@hotmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground font-medium">
                  Moquegua, Perú
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground font-medium">
                  Lun - Sáb: 9:00 - 18:00
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Nuestros Servicios</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground font-medium">
                  Garantía 1 Año
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground font-medium">
                  Envío Gratis desde S/200
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground font-medium">
                  Múltiples Métodos de Pago
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 Velomi Store. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/terms"
              className="hover:text-primary transition-colors font-medium"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors font-medium"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
