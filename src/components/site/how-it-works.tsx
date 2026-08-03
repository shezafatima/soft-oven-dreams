import { Reveal, SectionHeading } from "@/components/site/reveal";

const steps = [
  { n: "01", title: "Choose Products", text: "Browse the menu and fill your box with favourites." },
  { n: "02", title: "Place Order", text: "Pick a delivery slot and check out in seconds." },
  { n: "03", title: "Fresh Baking", text: "Our bakers make your order from scratch that day." },
  { n: "04", title: "Delivered To Your Door", text: "Chilled, boxed and handed over with a smile." },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="How It Works"
          title="From Cart To Doorstep In Four Steps"
        />
        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  className={`relative flex gap-6 pl-16 md:pl-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <span className="absolute left-0 grid h-12 w-12 place-items-center rounded-full bg-[image:var(--gradient-chocolate)] font-display text-sm text-primary-foreground shadow-lift md:left-1/2 md:-translate-x-1/2">
                    {s.n}
                  </span>
                  <div className="md:w-1/2 md:px-12">
                    <div className="rounded-3xl border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                    </div>
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
