import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Marquee, galleryImages, heroGym } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pulse Fitness Gym, HSR Layout" },
      {
        name: "description",
        content:
          "Pulse Fitness is more than a gym — a fitness family in HSR Layout helping Bengalureans transform their lives since 2015.",
      },
      { property: "og:title", content: "About Pulse Fitness" },
      {
        property: "og:description",
        content: "Our story, mission, and the people behind Bengaluru's friendliest gym.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout offerTrigger="off">
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            POWERED BY <span className="text-primary">PASSION</span>.<br />
            BUILT ON COMMUNITY.
          </>
        }
        subtitle="Founded in 2015 by a group of friends who couldn't find a gym that felt like home, Pulse Fitness has grown into HSR Layout's most loved fitness destination."
        image={heroGym}
        sectionNumber={1}
        identifierVariant="accent-line"
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-10 text-foreground/85">
          <div>
            <h2 className="font-display text-3xl text-primary">Our Mission</h2>
            <p className="mt-3 leading-relaxed">
              Make world-class fitness accessible, judgement-free, and joyful — for every body type,
              every age, and every goal.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-primary">Our Promise</h2>
            <p className="mt-3 leading-relaxed">
              Clean spaces, kind trainers, real results. No pushy upsells, no crowded floors, no
              nonsense.
            </p>
          </div>
        </div>
      </section>
      <Marquee images={galleryImages.slice(0, 6)} />
    </SiteLayout>
  );
}
