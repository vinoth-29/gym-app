import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, GoogleReviews, Gym3 } from "@/lib/site-data";
import { ScrollPop } from "@/hooks/use-scroll-reveal";
import {
  Dumbbell,
  Users,
  Apple,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Classes — Pulse Fitness Gym" },
      {
        name: "description",
        content:
          "Strength training, HIIT, yoga, personal training and nutrition coaching at Pulse Fitness in HSR Layout.",
      },
      { property: "og:title", content: "Services — Pulse Fitness" },
      { property: "og:description", content: "Find the program that fits your goal." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: 1,
    title: "Premium Equipment",
    tag: "WORLD-CLASS GEAR",
    description:
      "Imported strength & cardio machines maintained daily. State-of-the-art gear engineered for every fitness goal.",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1400",
    Icon: Dumbbell,
  },
  {
    id: 2,
    title: "Expert Trainers",
    tag: "CERTIFIED COACHES",
    description:
      "Certified coaches who track your progress weekly with personalized programs.",
    image:
      "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1400",
    Icon: Users,
  },
  {
    id: 3,
    title: "Diet Guidance",
    tag: "CUSTOM MEAL PLANS",
    description:
      "Nutrition plans tailored to your body type, goals, and lifestyle.",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1400",
    Icon: Apple,
  },
  {
    id: 4,
    title: "Women's Zone",
    tag: "SAFE & EMPOWERING",
    description:
      "Dedicated safe training area with women trainers available all day.",
    image:
      "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1400",
    Icon: Shield,
  },
  {
    id: 5,
    title: "Pause Anytime",
    tag: "FLEXIBLE MEMBERSHIP",
    description:
      "Freeze your membership anytime with no penalties or pressure.",
    image:
      "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1400",
    Icon: Clock,
  },
  {
    id: 6,
    title: "Hygienic Spaces",
    tag: "SPOTLESS ALWAYS",
    description:
      "Clean showers, lockers, and spotless training floors always maintained.",
    image:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1400",
    Icon: Sparkles,
  },
];

function ServicesPage() {
  return (
    <SiteLayout offerTrigger="off">
      {/* HERO */}
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            TRAIN <span className="text-primary">SMARTER.</span>
            <br />
            NOT JUST HARDER.
          </>
        }
        subtitle="Pick a discipline, pick a goal — we'll match you with a coach and a plan."
        image={Gym3}
        sectionNumber={2}
        identifierVariant="accent-line"
      />

      {/* TITLE */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollPop as="div" className="text-center max-w-2xl mx-auto">
            <p className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
              What We Offer
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-display">
              PROGRAMS BUILT <span className="text-primary">AROUND YOU.</span>
            </h2>
          </ScrollPop>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pb-12">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-black shadow-[var(--shadow-card)] transition-all duration-400 hover:border-primary hover:-translate-y-1 flex flex-col h-[400px] ${i % 2 !== 0 ? "lg:translate-y-12" : ""}`}
              >
                {/* IMAGE */}
                <div className="absolute inset-0 h-[65%] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="mt-auto relative z-10 p-6 bg-gradient-to-t from-black via-black to-transparent flex-1 flex flex-col justify-end pt-12">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary mb-2 uppercase">
                    {service.tag}
                  </span>

                  <div className="flex items-center gap-3 mb-3">
                    <service.Icon className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
                    <h3 className="text-xl font-display tracking-wide text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="btn btn-tertiary mt-auto"
                  >
                    <span>Learn More</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <GoogleReviews
        eyebrow="Google Reviews"
        heading={
          <>
            TRUSTED BY <span className="text-primary">THOUSANDS.</span>
          </>
        }
      />
    </SiteLayout>
  );
}