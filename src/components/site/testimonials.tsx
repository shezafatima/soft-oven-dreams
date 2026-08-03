import { Quote, Star } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Amara Khan",
    role: "Bride, Spring Wedding",
    text: "Our three-tier wedding cake was breathtaking and tasted even better than it looked. Guests are still talking about it.",
    initial: "A",
  },
  {
    name: "Michael Reyes",
    role: "Office Manager",
    text: "We order pastry boxes for the team every Friday. Always warm, always on time, always perfect.",
    initial: "M",
  },
  {
    name: "Sofia Bianchi",
    role: "Mum of two",
    text: "The custom unicorn birthday cake made my daughter's year. The detail was unreal for the price.",
    initial: "S",
  },
  {
    name: "Daniel Okafor",
    role: "Student",
    text: "Macarons and cold brew after class is my ritual now. Genuinely the best in the city.",
    initial: "D",
  },
];

const marquee = [
  "Best croissants in town ✨",
  "The red velvet is unreal 🍰",
  "Delivered warm & on time 🚚",
  "Custom cakes worth every penny 💝",
  "Our office favourite 🥐",
  "Macarons melt in your mouth 🌸",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="Sweet Words From Sweet People"
          subtitle="Over 10,000 celebrations made a little more delicious."
        />

        <Reveal delay={0.12}>
          <Carousel opts={{ loop: true, align: "start" }} className="mt-12">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <figure className="h-full rounded-3xl border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                    <Quote className="size-8 text-accent" />
                    <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      “{t.text}”
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-accent font-medium text-accent-foreground">
                        {t.initial}
                      </span>
                      <figcaption>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </figcaption>
                      <span className="ml-auto flex gap-0.5 text-primary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-current" />
                        ))}
                      </span>
                    </div>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Reveal>
      </div>

      <div className="mt-16 flex overflow-hidden border-y bg-secondary/60 py-5">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display text-lg whitespace-nowrap sm:text-xl">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
