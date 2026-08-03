import { BadgeCheck, ChefHat, PiggyBank, Sparkles, SprayCan, Truck } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/reveal";

const reasons = [
  { icon: BadgeCheck, title: "Fresh Ingredients", text: "Sourced weekly from trusted local suppliers." },
  { icon: ChefHat, title: "Experienced Bakers", text: "A team with 15+ years behind the counter." },
  { icon: PiggyBank, title: "Affordable Prices", text: "Artisan quality without the boutique markup." },
  { icon: Truck, title: "Fast Delivery", text: "Same-day dispatch across the city." },
  { icon: SprayCan, title: "100% Hygiene", text: "Certified kitchen, audited every quarter." },
  { icon: Sparkles, title: "Custom Designs", text: "Bespoke cake art tailored to your idea." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[2.5rem] bg-[image:var(--gradient-blush)] px-6 py-16 sm:px-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Little Details, Beautifully Done"
            subtitle="The reasons families, offices and couples keep coming back to us."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.08}>
                <div className="glass group flex h-full items-start gap-4 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-primary transition-transform duration-500 group-hover:rotate-6">
                    <r.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
