import type { Metadata, Viewport } from "next";
import {
  CTASection,
  FeaturesSection,
  HeroSection,
  ProductShowcase,
  TestimonialsSection,
} from "@/components/landing";

export const metadata: Metadata = {
  title:
    "Velomi Store - VXE R1 Pro Mouse Gaming Premium en Moquegua | 26K DPI, 48g",
  description:
    "Compra el VXE R1 Pro, mouse gaming ultraligero de 48g con sensor 26K DPI, conectividad 2.4GHz + USB-C, batería 75h. Envío gratis en Moquegua, Perú. Garantía 1 año.",
  keywords: [
    "VXE R1 Pro",
    "mouse gaming ultraligero",
    "26K DPI mouse",
    "mouse gaming 48g",
    "mouse inalámbrico gaming",
    "VXE mouse Perú",
    "mouse gaming Moquegua",
    "mouse esports",
    "gaming competitivo",
    "accesorios gaming",
    "Moquegua",
    "Perú",
    "tienda gaming",
    "mouse gaming Perú",
    "PAW3395 sensor",
    "mouse 4kHz polling",
  ],
  authors: [{ name: "Velomi Store" }],
  creator: "Velomi Store",
  publisher: "Velomi Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://velomistore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "VXE R1 Pro - Mouse Gaming Ultraligero 26K DPI | Velomi Store Moquegua",
    description:
      "VXE R1 Pro: Mouse gaming de 48g, sensor 26K DPI, conectividad dual 2.4GHz + USB-C, batería 75h. Envío gratis en Moquegua. ¡Eleva tu gaming!",
    url: "https://velomistore.com",
    siteName: "Velomi Store",
    images: [
      {
        url: "/products/vxe-r1-pro/main.avif",
        width: 1200,
        height: 800,
        alt: "VXE R1 Pro Mouse Gaming Ultraligero - Velomi Store",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VXE R1 Pro - Mouse Gaming Ultraligero 26K DPI | Velomi Store",
    description:
      "VXE R1 Pro: Mouse gaming de 48g, sensor 26K DPI, conectividad dual 2.4GHz + USB-C, batería 75h. Envío gratis en Moquegua.",
    images: ["/products/vxe-r1-pro/main.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Mouse Gaming",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
};

export default function HomePage() {
  return (
    <main className="min-dvh-screen">
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
