import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/lib/site-data";
import T1 from "@/assets/T1.jpg";
import T2 from "@/assets/T2.jpg";
import T3 from "@/assets/T3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Pulse Fitness Trainers" },
      {
        name: "description",
        content:
          "Meet the certified trainers and coaches behind Pulse Fitness gym in HSR Layout, Bengaluru.",
      },
      { property: "og:title", content: "Our Team — Pulse Fitness" },
      {
        property: "og:description",
        content: "The humans who'll push you, guide you and cheer for you.",
      },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    name: "Arjun Mehta",
    role: "Head Coach · Strength",
    img: T1,
    bio: "10+ years coaching powerlifters and beginners alike. ACE certified.",
  },
  {
    name: "Azeem",
    role: "Yoga & Mobility Lead",
    img: T2,
    bio: "200hr RYT teacher with a focus on injury recovery and breathwork.",
  },
  {
    name: "Priya",
    role: "Nutritionist · PT",
    img: T3,
    bio: "Sports nutritionist building Indian-first meal plans that actually taste good.",
  },
];

function TeamPage() {
  return (
    <SiteLayout offerTrigger="off">
      <PageHero
        eyebrow="Our Team"
        title={
          <>
            MEET YOUR <span className="text-primary">COACHES.</span>
          </>
        }
        subtitle="Certified, kind, and obsessed with your progress."
        sectionNumber={3}
        identifierVariant="accent-line"
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-3xl overflow-hidden border border-border bg-card group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mt-1">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-foreground/75">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
