import { Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { RippleButton } from "@/components/site/ripple-button";
import croissants from "@/assets/p-croissants.jpg";

import Image from "next/image";

const points = [
  "Handcrafted in small batches, every single morning",
  "Recipes perfected across three generations of bakers",
  "Custom designs for weddings, birthdays and celebrations",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-lift">
            <Image
              src='/images/p-croissants.jpg'
              alt="Freshly baked butter croissants resting on linen"
              loading="lazy"
              width={768}
              height={768}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <Image
            src='/images/p-macarons.jpg'
            alt="Stacked pastel macarons"
            loading="lazy"
            width={768}
            height={768}
            className="absolute -right-4 -bottom-10 hidden h-44 w-44 animate-float rounded-3xl border-4 border-background object-cover shadow-glow sm:block"
          />
          <div className="pointer-events-none absolute -top-10 -left-10 -z-10 h-56 w-56 animate-blob rounded-full bg-accent/40 blur-3xl" />
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-accent/50 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-accent-foreground uppercase">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
              Baking Happiness Since Day One
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              At Sweet N Soft, every cake, pastry, and loaf is handcrafted using the finest
              ingredients. Our mission is to create unforgettable moments through delicious
              desserts made with passion.
            </p>
          </Reveal>
          <ul className="mt-7 space-y-3">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.1 + i * 0.08}>
                <li className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.35}>
            <RippleButton variant="hero" size="xl" className="mt-9" asChild>
              <a href="#menu">Explore Our Menu</a>
            </RippleButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
