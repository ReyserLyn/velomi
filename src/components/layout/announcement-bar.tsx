import { TicketPercent, Truck } from "lucide-react";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
  XLogo,
} from "@/components/logos";
import { Separator } from "@/components/ui/separator";
import { LINKS } from "@/config/links";
import { ThemeToggle } from "../theme-toogle";

export default function AnnouncementBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 py-2 px-3 sm:px-4">
        <span className="hidden lg:block text-xs">Velomi Store - Moquegua</span>

        <div className="flex items-center justify-center flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm">
          <TicketPercent className="w-4 h-4" />
          <span className="font-bold">10% de descuento</span>
          <span>en tu</span>
          <span className="font-bold">primera compra</span>
          <Separator
            orientation="vertical"
            className="hidden sm:block h-4 mx-2"
          />
          <Truck className="w-4 h-4" />
          <span className="font-bold">Envío gratis</span>
          <span>desde</span>
          <span className="font-bold">S/200</span>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <a
            href={LINKS.whatsapp}
            aria-label="Contáctanos por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <span className="hidden xs:inline">Contáctanos:</span>
              <WhatsAppLogo className="w-4 h-4" />
              <span className="text-xs">+51 932 718 790</span>
            </div>
          </a>

          <Separator
            orientation="vertical"
            className="hidden sm:block h-4 mx-2"
          />

          <div className="hidden sm:flex items-center gap-2">
            <a
              href={LINKS.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo className="w-4 h-4" />
            </a>
            <a
              href={LINKS.tiktok}
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokLogo className="w-4 h-4" />
            </a>
            <a
              href={LINKS.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo className="w-4 h-4" />
            </a>
            <a
              href={LINKS.x}
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XLogo className="w-4 h-4" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}
