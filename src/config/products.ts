export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: {
    current: number;
    original: number;
    currency: string;
    discount: number;
  };
  images: {
    main: string;
    gallery: string[];
  };
  specs: {
    sensor: string;
    dpi: string;
    buttons: number;
    connectivity: string;
    weight: string;
    dimensions: string;
    rgb: boolean;
    software: string;
    compatibility: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  warranty: string;
  availability: string;
  shipping: {
    free: boolean;
    minOrder: number;
    deliveryTime: string;
  };
  description: {
    short: string;
    long: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const VXE_R1_PRO: Product = {
  id: "vxe-r1-pro",
  name: "VXE R1 Pro",
  brand: "VXE",
  category: "Mouse Gaming",
  price: {
    current: 230,
    original: 250,
    currency: "PEN",
    discount: 8,
  },
  images: {
    main: "/products/vxe-r1-pro/main.avif",
    gallery: [
      "/products/vxe-r1-pro/gallery-1.avif",
      "/products/vxe-r1-pro/gallery-2.avif",
      "/products/vxe-r1-pro/gallery-3.avif",
      "/products/vxe-r1-pro/gallery-4.avif",
      "/products/vxe-r1-pro/gallery-5.avif",
      "/products/vxe-r1-pro/gallery-6.avif",
    ],
  },
  specs: {
    sensor: "PixArt PAW3395 Optical Sensor",
    dpi: "Up to 26,000 DPI",
    buttons: 6,
    connectivity: "2.4 GHz wireless + USB-C wired",
    weight: "48 g",
    dimensions: "120.6 × 64.0 × 37.8 mm",
    rgb: true,
    software: "VGN Hub (ATK Hub)",
    compatibility: "Windows 7/8/10/11, macOS, Linux",
  },
  features: [
    {
      title: "Ultra-ligero",
      description: "Solo 48 g para máxima agilidad y control.",
      icon: "Mouse",
    },
    {
      title: "Alta precisión",
      description: "Sensor PAW3395 con hasta 26 000 DPI y 650 IPS.",
      icon: "Zap",
    },
    {
      title: "Doble conectividad",
      description: "Modo inalámbrico 2.4 GHz y conexión USB-C con cable.",
      icon: "Heart",
    },
    {
      title: "Hasta 75 h de batería",
      description: "Larga duración con polling de 1 kHz.",
      icon: "Battery",
    },
    {
      title: "Polling hasta 4 kHz",
      description:
        "Compatible con dongle opcional 4 k Hz para respuesta ultrarrápida.",
      icon: "Zap",
    },
    {
      title: "Software personalizable",
      description: "VGN Hub permite ajustar DPI, botones, iluminación, macros.",
      icon: "Settings",
    },
  ],
  warranty: "1 Año",
  availability: "Disponible",
  shipping: {
    free: true,
    minOrder: 200,
    deliveryTime: "Mismo día",
  },
  description: {
    short:
      "Ratón gaming inalámbrico ultraligero (48 g) con sensor 26 000 DPI, 2.4 GHz y USB-C, batería 75 h y polling hasta 4 kHz.",
    long: `El VXE R1 Pro es un ratón gaming de rendimiento avanzado. Equipa un sensor óptico PixArt PAW3395 de hasta 26 000 DPI, diseño simétrico ultraligero de 48 g y doble conectividad: inalámbrica por 2.4 GHz o cable USB-C. Su batería dura hasta 75 h a 1 kHz, y alcanza polling de 4 kHz con dongle opcional. Compatible con VGN Hub para personalizar botones, DPI, iluminación y más. Ideal para jugadores competitivos que buscan precisión, velocidad y ligereza a un precio accesible.`,
  },
  seo: {
    title:
      "VXE R1 Pro - Mouse Gaming Ultraligero 26K DPI | Velomi Store Moquegua",
    description:
      "VXE R1 Pro: Mouse gaming ultraligero de 48g, sensor PAW3395 26K DPI, conectividad 2.4GHz + USB-C, batería 75h, polling 4kHz. Envío gratis en Moquegua. Garantía 1 año.",
    keywords: [
      "VXE R1 Pro",
      "mouse gaming ultraligero",
      "26K DPI mouse",
      "PAW3395 sensor",
      "mouse 48g",
      "mouse inalámbrico gaming",
      "mouse 4kHz polling",
      "VXE mouse Perú",
      "mouse gaming Moquegua",
      "mouse esports",
      "gaming competitivo",
      "mouse RGB gaming",
    ],
  },
};

export const PRODUCTS = {
  "vxe-r1-pro": VXE_R1_PRO,
};
