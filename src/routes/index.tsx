import { createFileRoute } from "@tanstack/react-router";

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

const title = "Sweet N Soft — Freshly Baked Cakes, Pastries & Desserts";
const description =
  "Sweet N Soft bakes cakes, cupcakes, pastries, macarons and custom celebration cakes fresh every morning with premium ingredients. Order online for fast delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Sweet N Soft",
          slogan: "Freshly Baked With Love",
          description,
          telephone: "+1-555-018-2233",
          email: "hello@sweetnsoft.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24 Baker's Lane",
            addressLocality: "Cityville",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "10000",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
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
