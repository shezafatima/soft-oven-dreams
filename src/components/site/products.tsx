"use client";

import { useEffect, useMemo, useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/site/reveal";
import { RippleButton } from "@/components/site/ripple-button";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { categories, products, useShop } from "@/components/site/shop-store";
import { cn } from "@/lib/utils";

export function Products() {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(40);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  const visible = useMemo(
    () =>
      products.filter(
        (p) => (category === "All" || p.category === category) && p.price <= maxPrice,
      ),
    [category, maxPrice],
  );

  return (
    <section id="menu" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Popular Products"
          title="Baked Fresh, Loved Daily"
          subtitle="A little taste of everything we pull out of the oven each morning."
        />

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    category === c
                      ? "border-transparent bg-primary text-primary-foreground shadow-soft"
                      : "bg-card text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="w-full max-w-xs">
              <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                <span>Price filter</span>
                <span className="font-semibold text-foreground">up to ${maxPrice}</span>
              </div>
              <Slider
                value={[maxPrice]}
                min={8}
                max={40}
                step={1}
                onValueChange={([v]) => setMaxPrice(v ?? 40)}
                aria-label="Maximum price"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-3xl border bg-card p-4">
                  <Skeleton className="aspect-square w-full rounded-2xl" />
                  <Skeleton className="mt-4 h-4 w-2/3" />
                  <Skeleton className="mt-2 h-3 w-full" />
                  <Skeleton className="mt-4 h-9 w-full rounded-full" />
                </div>
              ))
            : visible.map((p, i) => {
                const saved = wishlist.includes(p.id);
                return (
                  <Reveal key={p.id} delay={(i % 4) * 0.08}>
                    <article className="group h-full overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                      <div className="relative overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          width={768}
                          height={768}
                          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <Button
                          variant="glass"
                          size="icon"
                          aria-label={saved ? `Remove ${p.name} from wishlist` : `Save ${p.name}`}
                          className="absolute top-3 right-3 rounded-full"
                          onClick={() => toggleWishlist(p)}
                        >
                          <Heart className={cn(saved && "fill-current text-primary")} />
                        </Button>
                        <span className="glass absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold">
                          <Star className="size-3 fill-current text-primary" />
                          {p.rating}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <span className="font-display text-2xl">${p.price.toFixed(2)}</span>
                          <RippleButton size="pill" variant="soft" onClick={() => addToCart(p)}>
                            <ShoppingBag className="size-4" /> Add
                          </RippleButton>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
        </div>

        {!loading && visible.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            No treats in that range — try raising the price filter.
          </p>
        ) : null}
      </div>
    </section>
  );
}
