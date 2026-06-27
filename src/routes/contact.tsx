import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Trial — Pulse Fitness Gym HSR Layout" },
      {
        name: "description",
        content:
          "Book your free trial or visit Pulse Fitness Gym in HSR Layout, Bengaluru. Call +91 99646 66617.",
      },
      { property: "og:title", content: "Contact Pulse Fitness" },
      { property: "og:description", content: "Drop by, call or book your free trial online." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout offerTrigger="off">
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            SAY <span className="text-primary">HI.</span> WE BITE LESS THAN THE BARBELLS.
          </>
        }
        subtitle="Book a free trial, ask about plans, or just stop by during open hours."
        sectionNumber={4}
        identifierVariant="accent-line"
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-3xl">Book Your Free Trial</h2>
            {sent ? (
              <div className="mt-8 text-center py-12">
                <div className="text-5xl">✅</div>
                <p className="mt-4 text-lg">We'll call you within 24 hours.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  required
                  placeholder="Full name"
                  className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    required
                    placeholder="Phone"
                    className="rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <select className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Weight Loss</option>
                  <option>Weight Gain</option>
                  <option>Body Building</option>
                  <option>General Fitness</option>
                  <option>Personal Training</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goal..."
                  className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="w-full rounded-lg bg-primary text-primary-foreground py-3.5 text-sm font-bold uppercase tracking-wider shadow-[var(--shadow-glow)] hover:scale-[1.02] transition">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl">Visit Us</h3>
              <div className="mt-4 space-y-3 text-sm text-foreground/85">
                <p>
                  📞{" "}
                  <a href="tel:+919964666617" className="hover:text-primary">
                    +91 99646 66617
                  </a>
                </p>
                <p>
                  📍 #16, 2nd Floor, 9th Main, 17th Cross Road, 7th Sector, HSR Layout, Bengaluru
                  560102
                </p>
                <p>🕒 06:00 AM — 10:00 PM (All Days)</p>
                <p>
                  ✉️{" "}
                  <a href="mailto:hello@ironforge.in" className="hover:text-primary">
                    Blr@PulseFitness.in
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border h-72">
              <iframe
                title="Pulse Fitness HSR Layout"
                src="https://www.google.com/maps?q=HSR+Layout+Sector+7+Bengaluru&output=embed"
                className="w-full h-full grayscale-[40%] contrast-125"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
