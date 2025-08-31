"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/config/products";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [product.images.main, ...product.images.gallery];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={allImages[currentImage]}
              alt={`${product.name} - Imagen ${currentImage + 1}`}
              fill
              className="object-cover"
              priority={currentImage === 0}
            />
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-sm">
          {currentImage + 1} / {allImages.length}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {allImages.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
              currentImage === index
                ? "border-primary"
                : "border-transparent hover:border-muted-foreground/20"
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} - Miniatura ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
