import { motion } from "motion/react";
import { ArrowRight, Star, UtensilsCrossed } from "lucide-react";

import { RippleButton } from "@/components/site/ripple-button";
import heroCake from "@/assets/hero-cake.jpg";
import cupcakes from "@/assets/p-cupcakes.jpg";
import donuts from "@/assets/p-donuts.jpg";
import cookies from "@/assets/p-cookies.jpg";

const floaters = [
  { src: cupcakes, alt: "Strawberry cupcake", className: "-top-6 -left-6 h-24 w-24 sm:h-28 sm:w-28", delay: "0s" },
  { src: donuts, alt: "Chocolate donut", className: "top-1/3 -right-8 h-24 w-24 sm:h-32 sm:w-32", delay: "1.4s" },
  { src: cookies, alt: "Chocolate chip cookies", className: "-bottom-8 left-6 h-24 w-24 sm:h-28 sm:w-28", delay: "2.6s" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-80 w-80 animate-blob rounded-full bg-accent/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-96 w-96 animate-blob rounded-full bg-secondary blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-4 py-2 text-xs font-semibold tracking-wide text-accent-foreground"
          >
            <UtensilsCrossed className="size-4" /> Freshly Baked With Love ❤️
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl"
          >
            Life Is Better With <span className="text-gradient">Fresh Bakery.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Freshly baked cakes, pastries, breads and desserts made every day using premium
            ingredients and lots of love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <RippleButton variant="hero" size="xl" asChild>
              <a href="#contact">
                Order Now <ArrowRight className="size-4" />
              </a>
            </RippleButton>
            <RippleButton variant="glass" size="xl" asChild>
              <a href="#menu">View Menu</a>
            </RippleButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {["A", "M", "R", "S"].map((i) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-background bg-accent font-medium text-accent-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Loved by 10,000+ happy customers</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
            <img
              src={heroCake}
              alt="Layered strawberry cake on a marble cake stand"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          {floaters.map((f) => (
            <img
              key={f.alt}
              src={f.src}
              alt={f.alt}
              loading="lazy"
              width={768}
              height={768}
              style={{ animationDelay: f.delay }}
              className={`absolute animate-float rounded-3xl border-4 border-background object-cover shadow-glow ${f.className}`}
            />
          ))}
          <div className="glass absolute -bottom-6 right-4 rounded-3xl px-5 py-3 shadow-soft">
            <p className="font-display text-2xl">15+</p>
            <p className="text-xs text-muted-foreground">Years of baking</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
