"use client";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";

import { Reveal, SectionHeading } from "@/components/site/reveal";
import { RippleButton } from "@/components/site/ripple-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const details = [
  { icon: MapPin, label: "Address", value: "24 Baker's Lane, Rose Quarter, Cityville" },
  { icon: Phone, label: "Phone", value: "+1 (555) 018-2233" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 018-2244" },
  { icon: Mail, label: "Email", value: "hello@sweetnsoft.com" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat 7:00–21:00 · Sun 8:00–18:00" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Bake Something Together"
          subtitle="Place an order, request a custom cake, or just say hello."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border bg-card p-8 shadow-soft">
              <ul className="space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/60 text-accent-foreground">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        {d.label}
                      </p>
                      <p className="text-sm sm:text-base">{d.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 overflow-hidden rounded-3xl border">
                <iframe
                  title="Sweet N Soft bakery location map"
                  src="https://www.google.com/maps?q=bakery&output=embed"
                  loading="lazy"
                  className="h-64 w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              className="h-full rounded-[2rem] border bg-card p-8 shadow-soft"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                window.setTimeout(() => {
                  setSending(false);
                  (e.target as HTMLFormElement).reset();
                  toast.success("Thank you! Your message is on its way 🍰", {
                    description: "Our team replies within a few hours.",
                  });
                }, 900);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" required placeholder="Jane Doe" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@email.com"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="subject">What are you ordering?</Label>
                  <Input
                    id="subject"
                    placeholder="Birthday cake for 20 people"
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us flavours, colours, date and delivery address…"
                    className="rounded-2xl"
                  />
                </div>
              </div>
              <RippleButton
                type="submit"
                variant="hero"
                size="xl"
                className="mt-7 w-full"
                disabled={sending}
              >
                {sending ? "Sending…" : "Send Message"}
              </RippleButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
