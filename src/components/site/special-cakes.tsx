import { Cake, Gift, GraduationCap, Baby, Briefcase, HeartHandshake } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/reveal";
import { RippleButton } from "@/components/site/ripple-button";

const cakes = [
  {
    icon: HeartHandshake,
    title: "Wedding Cakes",
    text: "Multi-tier centrepieces with sugar florals and hand-piped lace.",
    from: 180,
  },
  { icon: Gift, title: "Birthday Cakes", text: "Playful themes, bold colours and edible toppers.", from: 60 },
  { icon: Cake, title: "Anniversary Cakes", text: "Elegant, romantic designs for the years you celebrate.", from: 75 },
  { icon: Baby, title: "Baby Shower Cakes", text: "Soft pastel finishes with the sweetest little details.", from: 65 },
  { icon: GraduationCap, title: "Graduation Cakes", text: "Cap, scroll and school colours, done beautifully.", from: 70 },
  { icon: Briefcase, title: "Corporate Cakes", text: "Branded desserts and dessert tables for your team.", from: 120 },
];

export function SpecialCakes() {
  return (
    <section id="special-cakes" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl animate-blob rounded-full bg-accent/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Special Cakes"
          title="Cakes For Every Milestone"
          subtitle="Tell us the occasion — we design, bake and deliver the showstopper."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cakes.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.09}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/40 transition-transform duration-700 group-hover:scale-150" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-chocolate)] text-primary-foreground">
                  <c.icon className="size-6" />
                </span>
                <h3 className="relative mt-6 text-2xl font-semibold">{c.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{c.text}</p>
                <p className="relative mt-6 text-sm text-muted-foreground">
                  Starting from <span className="font-display text-xl text-foreground">${c.from}</span>
                </p>
                <RippleButton variant="soft" size="pill" className="relative mt-5" asChild>
                  <a href="#contact">Request a quote</a>
                </RippleButton>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
