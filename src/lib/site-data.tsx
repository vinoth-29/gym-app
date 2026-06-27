import heroGym from "@/assets/Group-gym.jpg";
import Gym from "@/assets/Gym.jpg";
import Gym2 from "@/assets/Gym2.jpg";
import Gym3 from "@/assets/Gym3.jpg";
import Gym4 from "@/assets/Gym4.jpg";
import Gym5 from "@/assets/Gym5.jpg";
import C1 from "@/assets/C1.jpg";
import c2 from "@/assets/C2.jpg";
import C3 from "@/assets/C3.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { ScrollPop } from "@/hooks/use-scroll-reveal";
import { SectionIdentifier } from "@/components/SectionIdentifier";

export { heroGym, Gym, Gym2, Gym3, Gym4, Gym5, C1, c2, C3, avatar1, avatar2, avatar3 };
export const galleryImages = [Gym, Gym2, Gym3, Gym4, Gym5, C1, c2, C3];

export const reviews = [
  {
    name: "Arjun Mehta",
    avatar: avatar1,
    rating: 5,
    text: "Best gym in HSR layout, no doubt. Trainers actually care about your form and progress. Lost 12kg in 5 months with their nutrition guidance.",
    when: "2 weeks ago",
  },
  {
    name: "Azeem",
    avatar: avatar2,
    rating: 5,
    text: "Loved the ambience, equipment, and the energy here. Clean, well maintained and never overcrowded. The women's section feels really safe.",
    when: "1 month ago",
  },
  {
    name: "Priya",
    avatar: avatar3,
    rating: 5,
    text: "Premium experience without the premium price tag. Personal trainers are knowledgeable and the morning crowd is super motivating.",
    when: "3 weeks ago",
  },
  {
    name: "Sneha Reddy",
    avatar: avatar2,
    rating: 4,
    text: "Great equipment and friendly staff. Gets a little busy around 7pm but the trainers manage the floor well. Would love more yoga slots.",
    when: "1 week ago",
  },
  {
    name: "Karthik Nair",
    avatar: avatar3,
    rating: 5,
    text: "Signed up for the 12-week transformation program and honestly it changed how I think about fitness. Coaches check in every single week.",
    when: "2 months ago",
  },
  {
    name: "Ananya Das",
    avatar: avatar1,
    rating: 5,
    text: "Super hygienic, always stocked towels and the diet plan they made for me actually fits my Indian kitchen. Highly recommend Pulse Fitness.",
    when: "4 days ago",
  },
];

export function GoogleLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C41 35.1 44 30 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export function Stars({ rating = 5, size = "h-4 w-4" }: { rating?: number; size?: string }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className={`relative inline-block ${size}`}>
            <svg
              viewBox="0 0 24 24"
              className={`${size} absolute inset-0 fill-muted-foreground/25`}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 24 24" className={`${size} fill-yellow-400`}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  sectionNumber,
  identifierVariant = "accent-line",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  sectionNumber?: number;
  identifierVariant?: "minimal" | "accent-line" | "glassmorphic";
}) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden border-b border-border">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl text-left">
        <div className="max-w-3xl">
          <SectionIdentifier
            label={eyebrow}
            sectionNumber={sectionNumber}
            variant={identifierVariant}
          />
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-foreground/80 text-lg font-light leading-relaxed">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export function Marquee({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const doubled = [...images, ...images];
  return (
    <section className="py-12 overflow-hidden border-y border-border/50 bg-card/30">
      <div
        className={`flex gap-6 w-max animate-marquee ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative w-[260px] h-[340px] rounded-2xl overflow-hidden shrink-0 shadow-[var(--shadow-card)] ring-1 ring-border animate-floaty"
            style={{ animationDelay: `${(i % 6) * 0.4}s` }}
          >
            <img src={src} alt="Gym moment" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * A realistic Google-style reviews section: an overall rating summary
 * (big score, stars, review count, breakdown bars) followed by a grid of
 * individual review cards. Everything fades + pops into view on scroll,
 * re-triggering every time it re-enters the viewport.
 */
export function GoogleReviews({
  heading = "WHAT BENGALURU SAYS.",
  eyebrow = "Google Reviews",
  ratingOverride,
  reviewCount = 551,
}: {
  heading?: React.ReactNode;
  eyebrow?: string;
  ratingOverride?: number;
  reviewCount?: number;
}) {
  const avgRating =
    ratingOverride ??
    Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10;

  const breakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => Math.round(r.rating) === star).length;
    return {
      star,
      pct: Math.round((count / reviews.length) * 100) || (star === 5 ? 88 : star === 4 ? 9 : 1),
    };
  });

  return (
    <section className="relative py-24 px-6 bg-slate-50 text-slate-900 overflow-hidden border-y border-slate-200">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <ScrollPop as="div" className="text-center">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.3em]">{eyebrow}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-display">{heading}</h2>
        </ScrollPop>

        {/* Rating summary card */}
        <ScrollPop delay={120} className="mt-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-8 items-center shadow-lg">
            <div className="flex flex-col items-center justify-center text-center sm:border-r sm:border-slate-200 sm:pr-8">
              <div className="font-display text-6xl leading-none">{avgRating.toFixed(1)}</div>
              <div className="mt-2">
                <Stars rating={avgRating} size="h-5 w-5" />
              </div>
              <div className="mt-2 text-xs text-slate-500">
                <span className="font-bold text-slate-900">{reviewCount}</span> Google reviews
              </div>
              <div className="mt-3">
                <GoogleLogo className="h-5 w-5" />
              </div>
            </div>
            <div className="space-y-2">
              {breakdown.map((b) => (
                <div key={b.star} className="flex items-center gap-3 text-xs">
                  <span className="w-3 text-slate-500">{b.star}</span>
                  <span className="text-yellow-400">★</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-yellow-400"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-500">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollPop>

        {/* Review cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => {
            const colors = [
              'from-blue-400 to-blue-600',
              'from-emerald-400 to-emerald-700',
              'from-purple-400 to-purple-600',
              'from-rose-400 to-rose-600',
              'from-amber-600 to-orange-700',
              'from-slate-600 to-slate-800',
            ];
            const colorClass = colors[i % colors.length];
            return (
            <ScrollPop key={r.name} delay={i * 90}>
              <article className="h-full rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shrink-0 font-semibold text-white text-sm`}>
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold truncate text-slate-900">{r.name}</div>
                      <div className="text-xs text-slate-500">{r.when}</div>
                    </div>
                  </div>
                  <GoogleLogo className="h-5 w-5 shrink-0" />
                </div>
                <div className="mt-4">
                  <Stars rating={r.rating} />
                </div>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{r.text}</p>
              </article>
            </ScrollPop>
            );
          })}
        </div>

        <ScrollPop delay={200} className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 px-7 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300 shadow-sm"
          >
            <GoogleLogo className="h-5 w-5" /> {avgRating.toFixed(1)} / {reviewCount}+ Google Reviews
          </a>
        </ScrollPop>
      </div>
    </section>
  );
}
