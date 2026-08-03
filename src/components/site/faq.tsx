import { Reveal, SectionHeading } from "@/components/site/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which areas do you deliver to, and how long does it take?",
    a: "We deliver city-wide, seven days a week. Standard orders arrive within two hours; scheduled slots can be chosen at checkout for a specific date and time.",
  },
  {
    q: "Can I order a fully custom cake design?",
    a: "Absolutely. Share your theme, colours, flavours and a reference photo, and our cake designers will send a sketch and quote within 24 hours.",
  },
  {
    q: "How far in advance should I book?",
    a: "Everyday treats can be ordered same-day. Custom and tiered cakes need 3–5 days, and wedding cakes are best booked 3–4 weeks ahead.",
  },
  {
    q: "What is your refund policy?",
    a: "If anything arrives damaged or isn't what you ordered, send us a photo within 24 hours and we'll rebake it or refund you in full.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Cards, Apple Pay, Google Pay, bank transfer and cash on delivery. Custom orders take a 30% deposit to lock in your slot.",
  },
  {
    q: "Do you cater to allergies and dietary needs?",
    a: "Yes — eggless, gluten-friendly and vegan options are available. Every ingredient list is shared upfront, though our kitchen does handle nuts and dairy.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="FAQ" title="Everything You Might Ask" />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-3xl border bg-card px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
