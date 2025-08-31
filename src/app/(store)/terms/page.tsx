import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Velomi Store",
  description:
    "Términos y condiciones de Velomi Store - Tienda de mouse gaming en Moquegua, Perú. Conoce nuestros términos de venta, garantías y políticas.",
  keywords: [
    "términos y condiciones",
    "Velomi Store",
    "políticas de venta",
    "garantía mouse gaming",
    "Moquegua",
    "Perú",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 md:mb-12">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span>Términos y Condiciones</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-PE")}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                1. Información General
              </h2>
              <p className="mb-4">
                Bienvenido a <strong>Velomi Store</strong>. Estos términos y
                condiciones rigen el uso de nuestro sitio web y los servicios
                que ofrecemos. Al acceder y utilizar nuestro sitio, usted acepta
                estar sujeto a estos términos.
              </p>
              <p className="mb-4">
                <strong>Velomi Store</strong> es una tienda especializada en la
                venta de accesorios gaming, específicamente mouse gaming
                premium, ubicada en Moquegua, Perú.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Información de Contacto
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Nombre:</strong> Velomi Store
                </li>
                <li>
                  <strong>Ubicación:</strong> Moquegua, Perú
                </li>
                <li>
                  <strong>Teléfono:</strong> +51 932 718 790
                </li>
                <li>
                  <strong>Email:</strong> velomistore@hotmail.com
                </li>
                <li>
                  <strong>Horario de atención:</strong> Lunes a Sábado de 9:00 a
                  18:00
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Productos y Servicios
              </h2>
              <p className="mb-4">
                Velomi Store se especializa en la venta de mouse gaming.
              </p>
              <p className="mb-4">
                Todos nuestros productos son originales y cuentan con garantía
                del fabricante y garantía adicional de Velomi Store.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Precios y Pagos
              </h2>
              <p className="mb-4">
                Los precios mostrados en nuestro sitio web están en Soles
                Peruanos (PEN) e incluyen IGV (Impuesto General a las Ventas)
                según la legislación peruana.
              </p>
              <p className="mb-4">
                <strong>Métodos de pago aceptados:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Transferencia bancaria</li>
                <li>Pago en efectivo (solo en Moquegua)</li>
                <li>Yape</li>
                <li>Plin</li>
              </ul>
              <p className="mb-4">
                Los pagos deben realizarse antes de la entrega del producto,
                excepto en casos de pago contra entrega en Moquegua.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Envíos y Entrega
              </h2>
              <p className="mb-4">
                <strong>En Moquegua:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Entrega gratuita para pedidos superiores a S/200</li>
                <li>
                  Entrega el mismo día para pedidos realizados antes de las
                  14:00
                </li>
                <li>
                  Entrega al día siguiente para pedidos realizados después de
                  las 14:00
                </li>
                <li>Costo de envío de S/10 para pedidos menores a S/200</li>
              </ul>
              <p className="mb-4">
                <strong>Fuera de Moquegua:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Envió a través de servicios de courier</li>
                <li>El costo de envío será calculado según la ubicación</li>
                <li>Tiempo de entrega: 2-5 días hábiles</li>
              </ul>
              <p className="mb-4">
                Velomi Store se compromete a entregar los productos en el estado
                y tiempo especificados, pero no se hace responsable por retrasos
                causados por factores externos como huelgas, desastres naturales
                o problemas de los servicios de courier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Garantía y Devoluciones
              </h2>
              <p className="mb-4">
                <strong>Garantía del Fabricante:</strong> Todos nuestros
                productos incluyen la garantía original del fabricante según sus
                términos y condiciones.
              </p>
              <p className="mb-4">
                <strong>Garantía Velomi Store:</strong> Ofrecemos garantía
                adicional de 1 año en todos nuestros productos, que cubre:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Defectos de fabricación</li>
                <li>Problemas de funcionamiento</li>
              </ul>
              <p className="mb-4">
                <strong>Devoluciones:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Plazo de 5 días para devoluciones por defectos</li>
                <li>El producto debe estar en su empaque original y sin uso</li>
                <li>No se aceptan devoluciones por cambio de opinión</li>
                <li>
                  Los gastos de envío de devolución corren por cuenta del
                  cliente
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Privacidad y Datos Personales
              </h2>
              <p className="mb-4">
                Velomi Store respeta su privacidad y se compromete a proteger
                sus datos personales de acuerdo con la Ley de Protección de
                Datos Personales del Perú (Ley N° 29733).
              </p>
              <p className="mb-4">
                <strong>Información que recopilamos:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Nombre y apellidos</li>
                <li>Dirección de entrega</li>
                <li>Número de teléfono</li>
                <li>Dirección de correo electrónico</li>
                <li>Información de pago (procesada de forma segura)</li>
              </ul>
              <p className="mb-4">
                <strong>Uso de la información:</strong> Utilizamos su
                información únicamente para procesar pedidos, comunicarnos sobre
                su compra y mejorar nuestros servicios.
              </p>
              <p className="mb-4">
                <strong>Seguridad:</strong> Implementamos medidas de seguridad
                técnicas y organizativas para proteger sus datos personales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Propiedad Intelectual
              </h2>
              <p className="mb-4">
                No está permitida la reproducción, distribución, modificación o
                uso comercial de este contenido sin autorización previa por
                escrito de Velomi Store.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Limitación de Responsabilidad
              </h2>
              <p className="mb-4">
                Velomi Store se esfuerza por proporcionar información precisa y
                actualizada sobre sus productos, pero no garantiza que la
                información sea completamente libre de errores.
              </p>
              <p className="mb-4">
                En ningún caso Velomi Store será responsable por daños
                indirectos, incidentales, especiales o consecuentes que puedan
                resultar del uso de nuestros productos o servicios.
              </p>
              <p className="mb-4">
                La responsabilidad total de Velomi Store estará limitada al
                monto pagado por el producto o servicio en cuestión.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. Modificaciones de los Términos
              </h2>
              <p className="mb-4">
                Velomi Store se reserva el derecho de modificar estos términos y
                condiciones en cualquier momento. Los cambios entrarán en vigor
                inmediatamente después de su publicación en el sitio web.
              </p>
              <p className="mb-4">
                Es responsabilidad del usuario revisar periódicamente estos
                términos para estar al tanto de cualquier cambio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                11. Ley Aplicable y Jurisdicción
              </h2>
              <p className="mb-4">
                Estos términos y condiciones se rigen por las leyes de la
                República del Perú. Cualquier disputa que pueda surgir será
                resuelta en los tribunales competentes de Moquegua, Perú.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Contacto</h2>
              <p className="mb-4">
                Si tiene alguna pregunta sobre estos términos y condiciones,
                puede contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Email:</strong> velomistore@hotmail.com
                </li>
                <li>
                  <strong>Teléfono:</strong> +51 932 718 790
                </li>
                <li>
                  <strong>WhatsApp:</strong> +51 932 718 790
                </li>
                <li>
                  <strong>Dirección:</strong> Moquegua, Perú
                </li>
              </ul>
            </section>

            <div className="bg-muted/50 p-6 rounded-lg mt-12">
              <p className="text-sm text-muted-foreground text-center">
                Al utilizar nuestro sitio web y servicios, usted confirma que ha
                leído, entendido y aceptado estos términos y condiciones en su
                totalidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
