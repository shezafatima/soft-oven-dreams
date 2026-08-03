import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";

import chocolateCake from "@/assets/p-chocolate-cake.jpg";
import redVelvet from "@/assets/p-red-velvet.jpg";
import cheesecake from "@/assets/p-cheesecake.jpg";
import cupcakes from "@/assets/p-cupcakes.jpg";
import donuts from "@/assets/p-donuts.jpg";
import croissants from "@/assets/p-croissants.jpg";
import macarons from "@/assets/p-macarons.jpg";
import cookies from "@/assets/p-cookies.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "chocolate-cake",
    name: "Chocolate Truffle Cake",
    description: "Belgian cocoa sponge layered with silky dark ganache.",
    price: 32,
    rating: 4.9,
    category: "Cakes",
    image: chocolateCake,
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cake",
    description: "Velvet crumb with whipped cream cheese frosting.",
    price: 34,
    rating: 4.8,
    category: "Cakes",
    image: redVelvet,
  },
  {
    id: "cheesecake",
    name: "Blueberry Cheesecake",
    description: "Baked vanilla cheesecake with wild blueberry compote.",
    price: 28,
    rating: 4.9,
    category: "Desserts",
    image: cheesecake,
  },
  {
    id: "cupcakes",
    name: "Strawberry Cupcakes",
    description: "Fluffy vanilla cupcakes crowned with strawberry buttercream.",
    price: 14,
    rating: 4.7,
    category: "Cupcakes",
    image: cupcakes,
  },
  {
    id: "donuts",
    name: "Chocolate Donuts",
    description: "Glazed brioche donuts finished with pastel sprinkles.",
    price: 12,
    rating: 4.6,
    category: "Donuts",
    image: donuts,
  },
  {
    id: "croissants",
    name: "Butter Croissants",
    description: "72-hour laminated dough, baked golden every morning.",
    price: 9,
    rating: 4.8,
    category: "Pastries",
    image: croissants,
  },
  {
    id: "macarons",
    name: "French Macarons",
    description: "A dozen delicate shells in seasonal pastel flavours.",
    price: 22,
    rating: 5,
    category: "Desserts",
    image: macarons,
  },
  {
    id: "cookies",
    name: "Choco Chip Cookies",
    description: "Crisp edges, molten centre, sea-salt chocolate chunks.",
    price: 10,
    rating: 4.7,
    category: "Cookies",
    image: cookies,
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

type CartItem = { product: Product; qty: number };

type ShopState = {
  cart: CartItem[];
  wishlist: string[];
  count: number;
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
};

const ShopContext = createContext<ShopState | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const value = useMemo<ShopState>(() => {
    const count = cart.reduce((n, i) => n + i.qty, 0);
    const total = cart.reduce((n, i) => n + i.qty * i.product.price, 0);
    return {
      cart,
      wishlist,
      count,
      total,
      addToCart: (product) => {
        setCart((prev) => {
          const found = prev.find((i) => i.product.id === product.id);
          if (found) {
            return prev.map((i) =>
              i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
            );
          }
          return [...prev, { product, qty: 1 }];
        });
        toast.success(`${product.name} added to your box`, {
          description: "Fresh from the oven, straight to your cart.",
        });
      },
      removeFromCart: (id) => setCart((prev) => prev.filter((i) => i.product.id !== id)),
      clearCart: () => setCart([]),
      toggleWishlist: (product) => {
        setWishlist((prev) => {
          const has = prev.includes(product.id);
          toast(has ? "Removed from wishlist" : "Saved to wishlist ❤️", {
            description: product.name,
          });
          return has ? prev.filter((i) => i !== product.id) : [...prev, product.id];
        });
      },
    };
  }, [cart, wishlist]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
