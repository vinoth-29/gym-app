import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SummerSpecialCard } from "@/components/SummerSpecialCard";
import { SectionIdentifier } from "@/components/SectionIdentifier";
import {
  heroGym,
  galleryImages,
  Marquee,
  GoogleReviews,
} from "@/lib/site-data";
import { ScrollPop } from "@/hooks/use-scroll-reveal";
import { TransformationGallery } from "@/components/TransformationGallery";
import React from "react";

import {
  Dumbbell,
  Users,
  Apple,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

import c2b from "@/assets/c2b.jpg";
import c2a from "@/assets/c2a.jpg";
import c3b from "@/assets/c3b.jpg";
import c3a from "@/assets/c3a.jpg";
import c5b from "@/assets/c5b.jpg";
import c5a from "@/assets/c5a.jpg";
import c6b from "@/assets/c6b.jpg";
import c6a from "@/assets/c6a.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulse Fitness — Premium Gym in HSR Layout, Bengaluru" },
      {
        name: "description",
        content:
          "Push harder today for a different tomorrow. Premium Indian gym with expert trainers, modern equipment & flexible plans in HSR Layout.",
      },
      { property: "og:title", content: "Pulse Fitness — Premium Gym in HSR Layout" },
      {
        property: "og:description",
        content:
          "Train with India's most passionate fitness community. Free trial available.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout offerTrigger="off">
      <Hero />
      <Benefits />
      <Membership />
      <Marquee images={galleryImages.slice(0, 6)} />
      <Transformations />
      <GoogleReviews
        heading={
          <>
            NOT JUST ANOTHER GYM. <span className="text-primary">REAL RESULTS.</span>
          </>
        }
      />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={heroGym}
        alt="Pulse Fitness gym members and trainers"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 flex flex-col items-start text-left">
        <SectionIdentifier
          label="Premium Fitness Experience"
          variant="glassmorphic"
        />

        <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight">
          PUSH HARDER <br />
          FOR A <span className="text-primary">DI<span className="italic">FF</span>ERENT</span> <br />
          TOMORROW
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-foreground/80 font-light leading-relaxed">
          Sweat is just fat crying. Join Bengaluru's most passionate fitness community and forge the
          version of you that you've always wanted.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          >
            Our Classes →
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
          >
            Free Trial
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      text: "Imported strength & cardio machines maintained daily.",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      text: "Certified coaches who track your progress weekly.",
      image:
        "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg",
    },
    {
      icon: Apple,
      title: "Diet Guidance",
      text: "Custom Indian meal plans to match your goals.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    },
    {
      icon: Shield,
      title: "Safe Women's Zone",
      text: "Dedicated area & women trainers all day long.",
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    },
    {
      icon: Clock,
      title: "Pause Anytime",
      text: "Freeze your membership when life gets in the way.",
      image:
        "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg",
    },
    {
      icon: Sparkles,
      title: "Hygienic Spaces",
      text: "Showers, lockers & spotless floors. Always.",
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <ScrollPop as="div" className="text-center">
          <p className="text-primary text-base font-bold uppercase tracking-[0.3em]">
            Why Pulse Fitness
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-display">
            EVERYTHING YOU NEED. <br />
            <span className="text-primary">NOTHING YOU DON'T.</span>
          </h2>
        </ScrollPop>

        <div className="mt-8 md:mt-16 flex flex-col md:flex-row items-stretch md:items-end gap-4 md:gap-3 w-full h-auto md:h-[500px]">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group flex-[1] md:hover:flex-[6] transition-all duration-700 ease-in-out cursor-pointer relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] min-h-[180px] md:min-h-0 ${i % 2 === 0 ? "md:h-full" : "md:h-[85%]"}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover md:group-hover:scale-110 transition-transform duration-700 opacity-80 md:opacity-60 md:group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 md:via-black/40 to-transparent" />

              <div className="absolute top-4 left-4 text-white bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                <item.icon className="w-5 h-5" />
              </div>

              <div className="absolute bottom-0 p-5 md:p-6 text-white w-full">
                <h3 className="text-xl md:text-xl font-display tracking-wide mb-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100 md:translate-y-4 md:group-hover:translate-y-0">{item.title}</h3>
                <p className="text-sm text-white/90 md:text-white/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200 md:translate-y-4 md:group-hover:translate-y-0">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Membership() {
  const plans = [
    {
      name: "Starter",
      price: "1,499",
      period: "/ month",
      perks: ["Gym access 6am–10pm", "Basic orientation", "Locker access"],
      cta: "Get Started",
    },
    {
      name: "Pro",
      displayName: "GO PRO",
      price: "3,999",
      period: "/ quarter",
      perks: [
        "Everything in Starter",
        "Group HIIT & Yoga",
        "Diet plan review",
        "1 PT session / month",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Elite",
      price: "11,999",
      period: "/ year",
      perks: [
        "Everything in Pro",
        "Unlimited PT sessions",
        "InBody analysis monthly",
        "Freeze 30 days free",
      ],
      cta: "Go Elite",
    },
  ];

  const tierStyles: Record<
    string,
    {
      background: string;
      border: string;
      color: string;
      restColor: string;
      shadowRest: string;
      shadowHover: string;
      hoverBorder: string;
      checkColor: string;
      ctaBg: string;
      ctaColor: string;
      ctaHoverBg: string;
      ctaHoverColor: string;
      scale: string;
      priceColor: string;
    }
  > = {
    Starter: {
      background: "linear-gradient(165deg, #DC2626 0%, #B91C1C 100%)",
      border: "1.5px solid rgba(255,255,255,0.3)",
      color: "#FFFFFF",
      restColor: "rgba(255,255,255,0.85)",
      shadowRest:
        "0 0 0 1px rgba(255,255,255,0.2), 0 16px 48px -12px rgba(220,38,38,0.4)",
      shadowHover:
        "0 0 0 1.5px rgba(255,255,255,0.4), 0 24px 60px -12px rgba(220,38,38,0.5)",
      hoverBorder: "1.5px solid rgba(255,255,255,0.6)",
      checkColor: "#FCA5A5",
      ctaBg: "#FFFFFF",
      ctaColor: "#DC2626",
      ctaHoverBg: "#F5F5F5",
      ctaHoverColor: "#DC2626",
      scale: "1.05",
      priceColor: "#FFFFFF",
    },
    Pro: {
      background: "linear-gradient(165deg, #DC2626 0%, #B91C1C 100%)",
      border: "1.5px solid rgba(255,255,255,0.3)",
      color: "#FFFFFF",
      restColor: "rgba(255,255,255,0.85)",
      shadowRest:
        "0 0 0 1px rgba(255,255,255,0.2), 0 16px 48px -12px rgba(220,38,38,0.4)",
      shadowHover:
        "0 0 0 1.5px rgba(255,255,255,0.4), 0 24px 60px -12px rgba(220,38,38,0.5)",
      hoverBorder: "1.5px solid rgba(255,255,255,0.6)",
      checkColor: "#FCA5A5",
      ctaBg: "#FFFFFF",
      ctaColor: "#DC2626",
      ctaHoverBg: "#F5F5F5",
      ctaHoverColor: "#DC2626",
      scale: "1.05",
      priceColor: "#FFFFFF",
    },
    Elite: {
      background: "linear-gradient(165deg, #DC2626 0%, #B91C1C 100%)",
      border: "1.5px solid rgba(255,255,255,0.3)",
      color: "#FFFFFF",
      restColor: "rgba(255,255,255,0.85)",
      shadowRest:
        "0 0 0 1px rgba(255,255,255,0.2), 0 16px 48px -12px rgba(220,38,38,0.4)",
      shadowHover:
        "0 0 0 1.5px rgba(255,255,255,0.4), 0 24px 60px -12px rgba(220,38,38,0.5)",
      hoverBorder: "1.5px solid rgba(255,255,255,0.6)",
      checkColor: "#FCA5A5",
      ctaBg: "#FFFFFF",
      ctaColor: "#DC2626",
      ctaHoverBg: "#F5F5F5",
      ctaHoverColor: "#DC2626",
      scale: "1.05",
      priceColor: "#FFFFFF",
    },
  };

  return (
    <section
      className="py-28 px-6 overflow-hidden"
      style={{
        background: "#FFFFFF",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <ScrollPop as="div" className="text-center">
          <p
            className="text-sm font-bold uppercase"
            style={{ color: "#DC2626", letterSpacing: "0.35em" }}
          >
            Membership
          </p>
          <h2
            className="mt-4 font-display"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              lineHeight: 0.95,
              color: "#0F0F0F",
              letterSpacing: "-0.01em",
            }}
          >
            PICK YOUR <span style={{ color: "#DC2626" }}>PLAN.</span>
          </h2>
          <p
            className="mt-5 max-w-xl mx-auto"
            style={{
              color: "rgba(15,15,15,0.55)",
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              lineHeight: 1.6,
            }}
          >
            Three tiers. No filler. Pick the one that matches how hard you're training.
          </p>
        </ScrollPop>

        <div className="mt-16 flex flex-col gap-9 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 items-stretch w-full">
            {plans.map((p, index) => {
              const t = tierStyles[p.name];
              return (
                <ScrollPop key={p.name} delay={index * 90} className="h-full">
                  <div
                    className="relative h-full flex flex-col"
                    style={{
                      background: t.background,
                      border: t.border,
                      color: t.color,
                      borderRadius: "20px",
                      padding: "28px 24px",
                      boxShadow: t.shadowRest,
                      transform: `scale(${t.scale})`,
                      transition:
                        "transform 320ms cubic-bezier(.22,1,.36,1), box-shadow 320ms cubic-bezier(.22,1,.36,1), border-color 320ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = `translateY(-7px) scale(${Number(t.scale) + 0.015
                        })`;
                      e.currentTarget.style.boxShadow = t.shadowHover;
                      e.currentTarget.style.border = t.hoverBorder;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = `scale(${t.scale})`;
                      e.currentTarget.style.boxShadow = t.shadowRest;
                      e.currentTarget.style.border = t.border;
                    }}
                  >
                    {p.popular && (
                      <span
                        className="absolute top-4 right-4 text-[9px] font-bold uppercase"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          color: "#FFFFFF",
                          border: "1px solid rgba(255,255,255,0.3)",
                          borderRadius: "999px",
                          padding: "4px 9px",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Most Popular
                      </span>
                    )}

                    <h3
                      className="font-display"
                      style={{
                        fontSize: p.name === "Pro" ? "1.5rem" : "1.15rem",
                        letterSpacing: "0.02em",
                        color: t.color,
                      }}
                    >
                      {p.displayName ?? p.name.toUpperCase()}
                    </h3>

                    <div className="mt-2 flex items-baseline gap-1 flex-wrap">
                      <span className="text-sm" style={{ color: t.restColor }}>
                        ₹
                      </span>
                      <span
                        className="font-display"
                        style={{ fontSize: "2.1rem", lineHeight: 1, color: t.priceColor }}
                      >
                        {p.price}
                      </span>
                      <span
                        className="text-[11px] ml-1 whitespace-nowrap"
                        style={{ color: t.restColor }}
                      >
                        {p.period}
                      </span>
                    </div>

                    <div
                      style={{
                        height: "1px",
                        margin: "18px 0 15px",
                        background:
                          p.name === "Starter"
                            ? "rgba(15,15,15,0.12)"
                            : "rgba(255,255,255,0.15)",
                      }}
                    />

                    <ul className="space-y-2.5 text-xs flex-1" style={{ color: t.restColor }}>
                      {p.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2">
                          <span
                            className="mt-0.5 text-[10px] font-bold"
                            style={{ color: t.checkColor }}
                          >
                            ✓
                          </span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="mt-6 inline-flex w-full items-center justify-center whitespace-nowrap text-[11px] font-bold uppercase"
                      style={{
                        background: t.ctaBg,
                        color: t.ctaColor,
                        borderRadius: "999px",
                        padding: "12px 16px",
                        letterSpacing: "0.08em",
                        border:
                          p.name === "Elite" ? "1px solid rgba(245,197,94,0.5)" : "none",
                        transition: "background 240ms ease, color 240ms ease, transform 240ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = t.ctaHoverBg;
                        e.currentTarget.style.color = t.ctaHoverColor;
                        e.currentTarget.style.transform = "scale(1.02)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = t.ctaBg;
                        e.currentTarget.style.color = t.ctaColor;
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {p.cta}
                    </Link>
                  </div>
                </ScrollPop>
              );
            })}
          </div>

          <ScrollPop delay={3 * 90} className="w-full">
            <SummerSpecialCard />
          </ScrollPop>
        </div>
      </div>
    </section>
  );
}

const clientTransformations = [
  {
    name: "Arun",
    beforeImg: c2b,
    afterImg: c2a,
    before: { weight: "88 kg" },
    after: { weight: "71 kg" },
    change: "17 kg Decreased",
    duration: "3 Months",
  },
  {
    name: "Deepak",
    beforeImg: c3b,
    afterImg: c3a,
    before: { weight: "95 kg" },
    after: { weight: "78 kg" },
    change: "17 kg Decreased",
    duration: "4 Months",
  },
  {
    name: "Karthik",
    beforeImg: c5b,
    afterImg: c5a,
    before: { weight: "60 kg" },
    after: { weight: "73 kg" },
    change: "13 kg Increased",
    duration: "6 Months",
  },
  {
    name: "Ravi",
    beforeImg: c6b,
    afterImg: c6a,
    before: { weight: "92 kg" },
    after: { weight: "74 kg" },
    change: "18 kg Decreased",
    duration: "5 Months",
  },
];

function Transformations() {
  return <TransformationGallery clients={clientTransformations} />;
}