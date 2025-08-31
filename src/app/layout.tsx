import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Velomi Store - Mouse Gaming Premium en Moquegua",
    template: "%s | Velomi Store",
  },
  description:
    "Tienda especializada en mouse gaming premium en Moquegua, Perú. VXE R1 Pro con sensor 26K DPI, 48g ultraligero. Envío gratis.",
  keywords: [
    "Velomi Store",
    "mouse gaming",
    "Moquegua",
    "Perú",
    "tienda gaming",
    "VXE R1 Pro",
    "mouse ultraligero",
  ],
  authors: [{ name: "Velomi Store" }],
  creator: "Velomi Store",
  publisher: "Velomi Store",
  metadataBase: new URL("https://velomistore.com"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo/PNG/logo-monogram-light.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
