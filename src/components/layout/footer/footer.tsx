import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
  XLogo,
} from "@/components/logos";
import { LINKS } from "@/config/links";

const footerSections = [
  {
    title: "Tienda",
    links: [
      { href: "/marcas", label: "Todas las marcas" },
      { href: "/categorias", label: "Categorías" },
    ],
  },
  {
    title: "Empresa",
    links: [{ href: "/contacto", label: "Contacto" }],
  },
  {
    title: "Soporte",
    links: [
      { href: "/politica-envios", label: "Política de envíos" },
      { href: "/politica-devoluciones", label: "Devoluciones y garantía" },
      { href: "/terminos-condiciones", label: "Términos y condiciones" },
      { href: "/politica-privacidad", label: "Política de privacidad" },
    ],
  },
];

const socialLinks = [
  { href: LINKS.facebook, icon: FacebookLogo, label: "Facebook" },
  { href: LINKS.instagram, icon: InstagramLogo, label: "Instagram" },
  { href: LINKS.tiktok, icon: TikTokLogo, label: "TikTok" },
  { href: LINKS.whatsapp, icon: WhatsAppLogo, label: "WhatsApp" },
  { href: LINKS.x, icon: XLogo, label: "X (Twitter)" },
];

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <h3 className="font-semibold text-card-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-muted-foreground hover:text-card-foreground transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-foreground hover:bg-primary/80 transition-colors group"
      aria-label={label}
    >
      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-accent border-t border-border">
      <div className="container">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Marca */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo/SVG/logo-horizontal-light.svg"
                  alt="Velomi Store"
                  width={200}
                  height={70}
                  className="block"
                />
              </div>
              <p className="text-muted-foreground text-sm max-w-sm">
                Descubre las mejores marcas y productos de calidad. Tu tienda
                online de confianza.
              </p>
            </div>

            {/* Secciones de navegación */}
            {footerSections.map((section) => (
              <FooterSection key={section.title} {...section} />
            ))}
          </div>
        </div>

        {/* Barra inferior con redes sociales y copyright */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-card-foreground">
                Síguenos
              </span>
              <div className="flex items-center gap-3 ">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.label} {...social} />
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Velomi. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
