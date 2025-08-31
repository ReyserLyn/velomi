import type { Metadata } from "next";
import Link from "next/link";
import { ProductFeatures } from "@/components/product/product-features";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductSpecs } from "@/components/product/product-specs";
import { ShippingInfo } from "@/components/product/shipping-info";
import { VXE_R1_PRO } from "@/config/products";

export const metadata: Metadata = {
  title: VXE_R1_PRO.seo.title,
  description: VXE_R1_PRO.seo.description,
  keywords: VXE_R1_PRO.seo.keywords,
  authors: [{ name: "Velomi Store" }],
  creator: "Velomi Store",
  publisher: "Velomi Store",
  metadataBase: new URL("https://velomistore.com"),
  alternates: {
    canonical: "/product/vxe-r1-pro",
  },
  openGraph: {
    title: VXE_R1_PRO.seo.title,
    description: VXE_R1_PRO.seo.description,
    url: "https://velomistore.com/product/vxe-r1-pro",
    siteName: "Velomi Store",
    images: [
      {
        url: VXE_R1_PRO.images.main,
        width: 1200,
        height: 800,
        alt: `${VXE_R1_PRO.brand} ${VXE_R1_PRO.name} - Mouse Gaming Ultraligero`,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: VXE_R1_PRO.seo.title,
    description: VXE_R1_PRO.seo.description,
    images: [VXE_R1_PRO.images.main],
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
  category: "technology",
  classification: "Mouse Gaming",
  referrer: "origin-when-cross-origin",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/product/vxe-r1-pro"
              className="hover:text-primary transition-colors"
            >
              {VXE_R1_PRO.name}
            </Link>
          </nav>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
            {VXE_R1_PRO.brand} {VXE_R1_PRO.name}
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground">
            {VXE_R1_PRO.description.short}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <ProductGallery product={VXE_R1_PRO} />

          <ProductInfo product={VXE_R1_PRO} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-2">
            <ProductFeatures product={VXE_R1_PRO} />
          </div>

          <div>
            <ProductSpecs product={VXE_R1_PRO} />
          </div>
        </div>

        <ShippingInfo product={VXE_R1_PRO} />
      </div>
    </div>
  );
}
