import { TicketPercent, Truck } from "lucide-react";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
  XLogo,
} from "@/components/logos";
import { ThemeToggle } from "@/components/theme-toogle";
import { Separator } from "@/components/ui/separator";
import { LINKS } from "@/config/links";

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
          <Link href={LINKS.whatsapp} aria-label="Contáctanos por WhatsApp">
            <div className="flex items-center gap-2">
              <span className="hidden xs:inline">Contáctanos:</span>
              <WhatsAppLogo className="w-4 h-4" />
              <span className="text-xs">+51 932 718 790</span>
            </div>
          </Link>

          <Separator
            orientation="vertical"
            className="hidden sm:block h-4 mx-2"
          />

          <div className="hidden sm:flex items-center gap-2">
            <Link href={LINKS.facebook} aria-label="Facebook">
              <FacebookLogo className="w-4 h-4" />
            </Link>
            <Link
              href={LINKS.tiktok}
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokLogo className="w-4 h-4" />
            </Link>
            <Link href={LINKS.instagram} aria-label="Instagram">
              <InstagramLogo className="w-4 h-4" />
            </Link>
            <Link href={LINKS.x} aria-label="X (Twitter)">
              <XLogo className="w-4 h-4" />
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}
