import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Velomi Store",
  description:
    "Política de privacidad de Velomi Store - Cómo protegemos y utilizamos tus datos personales. Cumplimos con la Ley de Protección de Datos Personales del Perú.",
  keywords: [
    "política de privacidad",
    "Velomi Store",
    "protección de datos",
    "datos personales",
    "Ley 29733",
    "Perú",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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
              <span>Política de Privacidad</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Política de Privacidad
            </h1>
            <p className="text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString("es-PE")}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
              <p className="mb-4">
                <strong>Velomi Store</strong> ("nosotros", "nuestro", "la
                empresa") se compromete a proteger y respetar su privacidad.
                Esta Política de Privacidad explica cómo recopilamos,
                utilizamos, almacenamos y protegemos su información personal
                cuando utiliza nuestro sitio web y servicios.
              </p>
              <p className="mb-4">
                Esta política cumple con la Ley de Protección de Datos
                Personales del Perú (Ley N° 29733) y su Reglamento (Decreto
                Supremo N° 003-2013-JUS).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Información del Responsable del Tratamiento
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
                  <strong>WhatsApp:</strong> +51 932 718 790
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. Información que Recopilamos
              </h2>
              <p className="mb-4">
                Recopilamos la siguiente información personal cuando utiliza
                nuestros servicios:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                3.1 Información de Identificación Personal
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Nombres y apellidos</li>
                <li>Número de documento de identidad (DNI, CE, etc.)</li>
                <li>Fecha de nacimiento</li>
                <li>Nacionalidad</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                3.2 Información de Contacto
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono móvil</li>
                <li>Número de teléfono fijo (opcional)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                3.3 Información de Dirección
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Dirección de residencia</li>
                <li>Ciudad y distrito</li>
                <li>Código postal</li>
                <li>Referencias de ubicación</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                3.4 Información de Pago
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Información de tarjeta de crédito/débito (procesada de forma
                  segura)
                </li>
                <li>Información de transferencia bancaria</li>
                <li>Información de billeteras digitales (Yape, Plin)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Finalidades del Tratamiento
              </h2>
              <p className="mb-4">
                Utilizamos su información personal para las siguientes
                finalidades:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                4.1 Finalidades Principales
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Procesar y gestionar sus pedidos</li>
                <li>Proporcionar servicios de atención al cliente</li>
                <li>Gestionar entregas y envíos</li>
                <li>Procesar pagos y facturación</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                4.2 Finalidades Secundarias
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Enviar comunicaciones sobre productos y servicios</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Realizar análisis de mercado y estadísticas</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
                <li>Gestionar garantías y devoluciones</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Base Legal para el Tratamiento
              </h2>
              <p className="mb-4">
                El tratamiento de sus datos personales se basa en las siguientes
                bases legales:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Consentimiento:</strong> Para finalidades secundarias
                  como marketing y análisis
                </li>
                <li>
                  <strong>Ejecución de contrato:</strong> Para procesar pedidos
                  y proporcionar servicios
                </li>
                <li>
                  <strong>Interés legítimo:</strong> Para mejorar servicios y
                  prevenir fraudes
                </li>
                <li>
                  <strong>Cumplimiento legal:</strong> Para cumplir con
                  obligaciones fiscales y legales
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Compartir Información
              </h2>
              <p className="mb-4">
                No vendemos, alquilamos ni compartimos su información personal
                con terceros, excepto en los siguientes casos:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                6.1 Proveedores de Servicios
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Servicios de courier para entregas</li>
                <li>Proveedores de procesamiento de pagos</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                6.2 Requisitos Legales
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cumplimiento de órdenes judiciales</li>
                <li>Investigaciones de autoridades competentes</li>
                <li>Protección de derechos y seguridad</li>
              </ul>

              <p className="mb-4">
                Todos los terceros con los que compartimos información están
                obligados a mantener la confidencialidad y seguridad de sus
                datos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Seguridad de Datos
              </h2>
              <p className="mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger sus datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Encriptación de datos sensibles</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo regular de sistemas de seguridad</li>
                <li>Capacitación del personal en protección de datos</li>
                <li>Copias de seguridad seguras</li>
                <li>Protocolos de respuesta a incidentes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Retención de Datos
              </h2>
              <p className="mb-4">
                Conservamos su información personal durante el tiempo necesario
                para cumplir con las finalidades descritas en esta política:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Datos de clientes:</strong> 7 años
                </li>
                <li>
                  <strong>Datos de marketing:</strong> Hasta que revoque su
                  consentimiento
                </li>
                <li>
                  <strong>Datos de garantía:</strong> 2 años después del
                  vencimiento de la garantía
                </li>
                <li>
                  <strong>Logs de seguridad:</strong> 1 año
                </li>
              </ul>
              <p className="mb-4">
                Una vez cumplido el plazo de retención, los datos se eliminan de
                forma segura o se anonimizan para fines estadísticos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                9. Sus Derechos ARCO
              </h2>
              <p className="mb-4">
                Según la Ley de Protección de Datos Personales del Perú, usted
                tiene los siguientes derechos:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                9.1 Derecho de Acceso
              </h3>
              <p className="mb-4">
                Puede solicitar información sobre qué datos personales tenemos
                sobre usted y cómo los utilizamos.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                9.2 Derecho de Rectificación
              </h3>
              <p className="mb-4">
                Puede solicitar la corrección de datos personales inexactos o
                incompletos.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                9.3 Derecho de Cancelación
              </h3>
              <p className="mb-4">
                Puede solicitar la eliminación de sus datos personales cuando ya
                no sean necesarios para las finalidades para las que fueron
                recopilados.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                9.4 Derecho de Oposición
              </h3>
              <p className="mb-4">
                Puede oponerse al tratamiento de sus datos personales para
                finalidades específicas, como marketing directo.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                9.5 Cómo Ejercer Sus Derechos
              </h3>
              <p className="mb-4">
                Para ejercer cualquiera de estos derechos, puede contactarnos a
                través de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Email:</strong> velomistore@hotmail.com
                </li>
                <li>
                  <strong>WhatsApp:</strong> +51 932 718 790
                </li>
                <li>
                  <strong>Teléfono:</strong> +51 932 718 790
                </li>
              </ul>
              <p className="mb-4">
                Responderemos a su solicitud dentro de los 10 días hábiles
                siguientes a su recepción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. Cookies y Tecnologías Similares
              </h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su
                experiencia en nuestro sitio web:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                10.1 Tipos de Cookies
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el
                  funcionamiento del sitio
                </li>
                <li>
                  <strong>Cookies de rendimiento:</strong> Para analizar el uso
                  del sitio
                </li>
                <li>
                  <strong>Cookies de funcionalidad:</strong> Para recordar sus
                  preferencias
                </li>
                <li>
                  <strong>Cookies de marketing:</strong> Para mostrar publicidad
                  relevante
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">
                10.2 Gestión de Cookies
              </h3>
              <p className="mb-4">
                Puede configurar su navegador para rechazar cookies o recibir
                una notificación cuando se envíen. Sin embargo, esto puede
                afectar la funcionalidad de nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                11. Menores de Edad
              </h2>
              <p className="mb-4">
                Nuestros servicios no están dirigidos a menores de 18 años. No
                recopilamos intencionalmente información personal de menores de
                edad. Si es menor de edad, debe obtener el consentimiento de sus
                padres o tutores antes de proporcionarnos información personal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                12. Cambios en esta Política
              </h2>
              <p className="mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente.
                Los cambios entrarán en vigor inmediatamente después de su
                publicación en nuestro sitio web. Le recomendamos revisar esta
                política periódicamente para estar al tanto de cualquier cambio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Contacto</h2>
              <p className="mb-4">
                Si tiene alguna pregunta sobre esta Política de Privacidad o
                sobre el tratamiento de sus datos personales, puede contactarnos
                a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Email:</strong> velomistore@hotmail.com
                </li>
                <li>
                  <strong>WhatsApp:</strong> +51 932 718 790
                </li>
                <li>
                  <strong>Teléfono:</strong> +51 932 718 790
                </li>
                <li>
                  <strong>Dirección:</strong> Moquegua, Perú
                </li>
                <li>
                  <strong>Horario de atención:</strong> Lunes a Sábado de 9:00 a
                  18:00
                </li>
              </ul>
            </section>

            <div className="bg-muted/50 p-6 rounded-lg mt-12">
              <p className="text-sm text-muted-foreground text-center">
                Al utilizar nuestro sitio web y servicios, usted confirma que ha
                leído, entendido y aceptado esta Política de Privacidad en su
                totalidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
