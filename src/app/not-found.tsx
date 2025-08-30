import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <Image
            src="/logo/SVG/logo-horizontal-light.svg"
            alt="Velomi Store"
            width={150}
            height={52.73}
            className="block dark:hidden mx-auto"
          />
        </div>

        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            ¡Ups! Página no encontrada
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
            La página que buscas no existe o ha sido movida. No te preocupes, te
            ayudamos a encontrar lo que necesitas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/">Ir al inicio</Link>
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="text-sm font-medium text-foreground mb-4">
            Enlaces útiles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/ofertas"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Ofertas
            </Link>
            <Link
              href="/contacto"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
