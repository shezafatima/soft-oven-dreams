"use client";
import { useEffect, useState } from "react";
import { ArrowUp, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/site/navbar";
import { useShop, useHydrated } from "@/components/site/shop-store";

export function FloatingWidgets() {
  const [show, setShow] = useState(false);
  const { count, total } = useShop();
  const hydrated = useHydrated();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {hydrated && count > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="pointer-events-auto"
          >
            <CartSheet>
              <Button variant="hero" size="pill" className="shadow-lift">
                <ShoppingBag className="size-4" />
                {count} item{count > 1 ? "s" : ""} · ${total.toFixed(2)}
              </Button>
            </CartSheet>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {show ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass pointer-events-auto grid h-12 w-12 place-items-center rounded-full shadow-soft transition-transform hover:-translate-y-1"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
