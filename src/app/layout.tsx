import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Sweet N Soft — Artisan Bakery & Dessert Shop",
  description:
    "Sweet N Soft bakes cakes, cupcakes, pastries and custom celebration cakes fresh every day.",
  authors: [{ name: "Sweet N Soft" }],
  openGraph: {
    title: "Sweet N Soft — Artisan Bakery & Dessert Shop",
    description:
      "Sweet N Soft bakes cakes, cupcakes, pastries and custom celebration cakes fresh every day.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}