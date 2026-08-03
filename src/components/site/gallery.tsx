import { useState } from "react";
import { Expand } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { products } from "@/components/site/shop-store";
import heroCake from "@/assets/hero-cake.jpg";

const gallery = [
  { src: heroCake, alt: "Strawberry layer cake on a marble stand", span: "row-span-2" },
  ...products.map((p, i) => ({
    src: p.image,
    alt: p.name,
    span: i % 3 === 1 ? "row-span-2" : "row-span-1",
  })),
];

export function Gallery() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Gallery"
          title="A Peek Inside Our Bakery"
          subtitle="Every tray, every swirl, every sprinkle — captured fresh."
        />
        <div className="mt-12 columns-2 gap-4 [column-fill:_balance] md:columns-3 lg:columns-4">
          {gallery.map((g, i) => (
            <Reveal key={`${g.alt}-${i}`} delay={(i % 4) * 0.06} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setActive(g)}
                className="group relative block w-full overflow-hidden rounded-3xl shadow-soft"
                aria-label={`View ${g.alt} larger`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={768}
                  height={768}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"
                  }`}
                />
                <span className="absolute inset-0 grid place-items-center bg-foreground/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Expand className="size-6 text-background" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          <DialogTitle className="sr-only">{active?.alt ?? "Gallery image"}</DialogTitle>
          {active ? (
            <img src={active.src} alt={active.alt} className="h-full w-full object-cover" />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
