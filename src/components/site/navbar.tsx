import { useEffect, useState } from "react";
import { Menu, Moon, Search, ShoppingBag, Sun, X, Heart, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";
import { RippleButton } from "@/components/site/ripple-button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products, useShop, useHydrated } from "@/components/site/shop-store";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Special Cakes", href: "#special-cakes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark((v) => !v)}
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}

export function CartSheet({ children }: { children: React.ReactNode }) {
  const { cart, total, removeFromCart, clearCart } = useShop();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Sweet Box</SheetTitle>
        </SheetHeader>
        <div className="flex-1 space-y-4 overflow-y-auto py-6">
          {cart.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Your box is empty — add something freshly baked ❤️
            </p>
          ) : (
            cart.map(({ product, qty }) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded-2xl bg-secondary/60 p-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {qty} × ${product.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={`Remove ${product.name}`}
                  onClick={() => removeFromCart(product.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            ))
          )}
        </div>
        <div className="space-y-3 border-t pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-display text-xl">${total.toFixed(2)}</span>
          </div>
          <RippleButton variant="hero" size="pill" className="w-full">
            Checkout
          </RippleButton>
          {cart.length > 0 ? (
            <Button variant="ghost" size="sm" className="w-full" onClick={clearCart}>
              Clear box
            </Button>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = products.filter((p) =>
    `${p.name} ${p.category}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        aria-label="Search the menu"
        onClick={() => setOpen(true)}
      >
        <Search />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Search our bakery</DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “macarons”, “cake”, “croissant”…"
            className="rounded-full"
          />
          <div className="max-h-72 space-y-2 overflow-y-auto">
            {results.map((p) => (
              <a
                key={p.id}
                href="#menu"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-secondary"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-lg object-cover"
                />
                <span className="text-sm font-medium">{p.name}</span>
                <span className="ml-auto text-sm text-muted-foreground">
                  ${p.price.toFixed(2)}
                </span>
              </a>
            ))}
            {results.length === 0 ? (
              <p className="p-2 text-sm text-muted-foreground">Nothing baked under that name.</p>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, wishlist } = useShop();
  const hydrated = useHydrated();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={cn(
            "flex items-center gap-3 rounded-full px-4 py-2.5 transition-all duration-500",
            scrolled ? "glass shadow-soft" : "bg-transparent",
          )}
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-chocolate)] font-display text-sm text-primary-foreground">
              S
            </span>
            <span className="font-display text-lg leading-none font-semibold sm:text-xl">
              Sweet N Soft
            </span>
          </a>

          <ul className="mx-auto hidden items-center gap-1 xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-1 xl:ml-0">
            <SearchDialog />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="relative hidden rounded-full sm:inline-flex"
              aria-label="Wishlist"
            >
              <Heart />
              {hydrated && wishlist.length > 0 ? (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-5 justify-center rounded-full px-1 text-[10px]">
                  {wishlist.length}
                </Badge>
              ) : null}
            </Button>
            <CartSheet>
              <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Open cart">
                <ShoppingBag />
                {hydrated && count > 0 ? (
                  <Badge className="absolute -top-1 -right-1 h-5 min-w-5 justify-center rounded-full px-1 text-[10px]">
                    {count}
                  </Badge>
                ) : null}
              </Button>
            </CartSheet>
            <RippleButton variant="hero" size="pill" className="hidden sm:inline-flex" asChild>
              <a href="#contact">Order Now</a>
            </RippleButton>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full xl:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {open ? (
            <motion.ul
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="glass mt-2 grid gap-1 rounded-3xl p-3 shadow-soft xl:hidden"
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent/50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <RippleButton variant="hero" size="pill" className="mt-1 w-full" asChild>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Order Now
                  </a>
                </RippleButton>
              </li>
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
