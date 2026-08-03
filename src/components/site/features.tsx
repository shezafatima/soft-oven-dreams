import { CakeSlice, Croissant, Leaf, Truck } from "lucide-react";

import { Reveal } from "@/components/site/reveal";

const features = [
  {
    icon: Croissant,
    title: "Fresh Every Day",
    text: "Ovens fire up at 4am so nothing on our shelves is ever a day old.",
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    text: "Belgian chocolate, French butter and farm-fresh eggs. Nothing less.",
  },
  {
    icon: CakeSlice,
    title: "Custom Cake Orders",
    text: "Tell us the story and our designers will bake it into your cake.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Chilled, protected delivery to your door within two hours.",
  },
];

export function Features() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.09}>
            <article className="group h-full rounded-3xl border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/60 text-accent-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
