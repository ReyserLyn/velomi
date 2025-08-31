"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Quote, Star } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const testimonials = [
  {
    name: "RTINGS.COM",
    role: "Reseña web",
    content:
      "El VXE R1 Pro usa el sensor PixArt 3395 y ofrece rendimiento competitivo muy superior por su precio, comparable a modelos de gama alta como Logitech PRO X Superlight 2.",
    rating: 5,
    avatar: "RT",
    source: "https://www.rtings.com/mouse/reviews/vxe/r1-pro",
    verified: true,
  },
  {
    name: "MoistPotato4Skin",
    role: "Usuario de Reddit",
    content:
      "Sin pre ni post travel en clics principales; los laterales tienen algo de wobble. El dongle se siente premium y los grips son gruesos y ajustables.",
    rating: 5,
    avatar: "AT",
    source:
      "https://www.reddit.com/r/MouseReview/comments/1912oru/my_vgn_vxe_r1_pro_review",
    verified: true,
  },
  {
    name: "qvavp",
    role: "Usuario de Reddit",
    content:
      "Sigo impresionado por su rendimiento, una excelente mejora sobre mi Rival 3; la conexión inalámbrica es fluida. Definitivamente una opción económica muy recomendable.",
    rating: 5,
    avatar: "MR",
    source:
      "https://www.reddit.com/r/MouseReview/comments/1i9x256/still_one_of_the_best_budget_mice_vxe_r1_pro",
    verified: true,
  },
  {
    name: "memomime",
    role: "Usuario de Reddit",
    content:
      "Es increíblemente ligero, sensación tipo Superlight. Diseño cómodo, recubrimiento agradable y software ATK Hub (web y app) es muy fácil de usar, ideal para gaming exigente.",
    rating: 5,
    avatar: "MM",
    source:
      "https://www.reddit.com/r/MouseReview/comments/1js2hc0/quick_review_of_the_vxe_r1_pro/",
    verified: true,
  },
];

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px 200px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <Badge
              variant="secondary"
              className="text-xs md:text-sm px-3 py-1 mb-3 md:mb-4"
            >
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              Reseñas Verificadas
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Lo que dicen sobre el{" "}
            <span className="text-primary">VXE R1 PRO</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Descubre por qué el VXE R1 PRO es la elección perfecta para gamers
            que buscan calidad y rendimiento excepcional.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 group-hover:scale-[1.02] flex flex-col">
                <CardHeader className="pb-3 md:pb-4">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star
                          key={`star-${testimonial.name}-${i}`}
                          className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <Badge variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Verificado
                      </Badge>
                    )}
                  </div>

                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-primary/40" />
                </CardHeader>

                <CardContent className="pt-0 pb-4 md:pb-6 flex-grow">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>
                </CardContent>

                <Separator className="mb-4 md:mb-6" />

                <CardFooter className="pt-0 mt-auto">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs md:text-sm font-bold text-primary border border-primary/20">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-base text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {testimonial.source && (
                      <Link
                        href={testimonial.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
