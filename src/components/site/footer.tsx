import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { RippleButton } from "@/components/site/ripple-button";

const quickLinks = ["Home", "About", "Menu", "Special Cakes", "Gallery", "Contact"];
const productLinks = ["Cakes", "Cupcakes", "Pastries", "Cookies", "Donuts", "Macarons"];
const hours = [
  ["Monday – Friday", "7:00 – 21:00"],
  ["Saturday", "8:00 – 21:00"],
  ["Sunday", "8:00 – 18:00"],
];
const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-10 border-t bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-chocolate)] font-display text-sm text-primary-foreground">
              S
            </span>
            <span className="font-display text-xl font-semibold">Sweet N Soft</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Freshly Baked With Love ❤️ — cakes, pastries and desserts handcrafted every single
            morning.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#home"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full bg-card text-muted-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:text-primary"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition-colors hover:text-primary"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Products</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {productLinks.map((l) => (
              <li key={l}>
                <a href="#menu" className="transition-colors hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold">Opening Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {hours.map(([d, t]) => (
              <li key={d} className="flex justify-between gap-4">
                <span>{d}</span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <form
            className="mt-6 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
              toast.success("You're on the list 🎉", {
                description: "Weekly specials, straight to your inbox.",
              });
            }}
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="rounded-full bg-card"
            />
            <RippleButton type="submit" variant="hero" size="pill">
              Join
            </RippleButton>
          </form>
        </div>
      </div>

      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sweet N Soft. All rights reserved. Freshly Baked With Love ❤️
      </div>
    </footer>
  );
}
