"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/components/logos";
import { ThemeToggle } from "@/components/theme-toogle";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/config/links";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "VXE R1 PRO", href: "/product/vxe-r1-pro" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/SVG/logo-horizontal-light.svg"
                alt="Velomi Store"
                width={130}
                height={45}
                className="dark:hidden"
              />
              <Image
                src="/logo/SVG/logo-horizontal-dark.svg"
                alt="Velomi Store"
                width={130}
                height={45}
                className="hidden dark:block"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link
                href="tel:+51932718790"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+51 932 718 790</span>
              </Link>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">Moquegua, Perú</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={LINKS.facebook}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <FacebookLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={LINKS.instagram}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <InstagramLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={LINKS.tiktok}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <TikTokLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={LINKS.whatsapp}
                target="_blank"
                className="hover:text-primary transition-colors group"
              >
                <WhatsAppLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button asChild className="px-6 py-2">
                <Link href="/product/vxe-r1-pro">Ver Producto</Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t"
            >
              <div className="py-6 space-y-6">
                <div className="space-y-4 text-sm">
                  <Link
                    href="tel:+51932718790"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">+51 932 718 790</span>
                  </Link>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">Moquegua, Perú</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
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

                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-base font-medium transition-colors hover:text-primary py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Button asChild className="w-full py-3 text-base">
                  <Link
                    href="/product/vxe-r1-pro"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ver Producto
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
