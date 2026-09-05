
import { ShopProvider } from "@/components/site/shop-store";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Features } from "@/components/site/features";
import { About } from "@/components/site/about";
import { Products } from "@/components/site/products";
import { SpecialCakes } from "@/components/site/special-cakes";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { HowItWorks } from "@/components/site/how-it-works";
import { Gallery } from "@/components/site/gallery";
import { Testimonials } from "@/components/site/testimonials";
import { Statistics } from "@/components/site/statistics";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingWidgets } from "@/components/site/floating-widgets";

export const metadata = {
  title: "Sweet N Soft — Freshly Baked Cakes, Pastries & Desserts",
  description:
    "Sweet N Soft bakes cakes, cupcakes, pastries, macarons and custom celebration cakes fresh every morning with premium ingredients. Order online for fast delivery.",
  openGraph: {
    title: "Sweet N Soft — Freshly Baked Cakes, Pastries & Desserts",
    description:
      "Sweet N Soft bakes cakes, cupcakes, pastries, macarons and custom celebration cakes fresh every morning with premium ingredients. Order online for fast delivery.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function HomePage() {
  return (
    <ShopProvider>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <SpecialCakes />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Statistics />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <FloatingWidgets />
    </ShopProvider>
  );
}