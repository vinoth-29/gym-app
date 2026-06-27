import { useState, useEffect, useRef } from "react";
import { Shirt, Snowflake, Gift, Ticket, Dumbbell } from "lucide-react";

export function SummerSpecialCard() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      { threshold: 0.2 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full overflow-hidden"
      style={{
        borderRadius: "22px",
        border: "1.5px solid rgba(255,255,255,0.3)",
        background:
          "linear-gradient(150deg, #DC2626 0%, #B91C1C 100%)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.2), 0 40px 90px -28px rgba(220,38,38,0.55), 0 18px 40px -16px rgba(220,38,38,0.45)",
      }}
    >
      {/* Red glow field, top edge */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "280px",
          background:
            "radial-gradient(ellipse 60% 100% at 18% 0%, rgba(252,165,165,0.45), transparent 70%), radial-gradient(ellipse 55% 90% at 88% 6%, rgba(248,113,113,0.35), transparent 70%)",
        }}
      />

      {/* Cracked texture overlay, kept subtle so it reads as grit not noise */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.08, mixBlendMode: "overlay" }}
        preserveAspectRatio="none"
        viewBox="0 0 1200 500"
      >
        <defs>
          <filter id="ifCrackNoiseSummer">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.02"
              numOctaves="4"
              seed="11"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 0.8
                      0 0 0 0 0.5
                      0 0 0 0.4 0"
            />
          </filter>
        </defs>
        <rect width="1200" height="500" filter="url(#ifCrackNoiseSummer)" />
      </svg>

      <span
        className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 text-[10px] font-bold uppercase z-10 whitespace-nowrap"
        style={{
          background: "rgba(255,255,255,0.15)",
          color: "#FFFFFF",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "999px",
          letterSpacing: "0.18em",
          boxShadow: "0 10px 26px -8px rgba(220,38,38,0.4)",
        }}
      >
        Summer Special
      </span>

      <div className="relative z-10" style={{ padding: "clamp(72px, 8vw, 80px) clamp(16px, 4vw, 28px) clamp(20px, 4vw, 32px)" }}>
        {sent ? (
          <div className="flex flex-col items-center justify-center text-center py-6 sm:py-10 animate-fade-in max-w-md mx-auto">
            <div
              className="h-12 sm:h-14 w-12 sm:w-14 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4"
              style={{
                borderRadius: "50%",
                background: "rgba(252,165,165,0.2)",
                border: "1px solid rgba(252,165,165,0.5)",
                color: "#FCA5A5",
              }}
            >
              ✓
            </div>
            <h3
              className="font-display text-lg sm:text-3xl uppercase"
              style={{ color: "#FCA5A5", letterSpacing: "0.02em" }}
            >
              Offer Claimed!
            </h3>
            <p
              className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              Thanks <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{formData.name}</span>!
              We'll contact you at{" "}
              <span style={{ color: "#FFFFFF", fontWeight: 600 }}>{formData.phone}</span> within
              24 hours.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 items-center text-left">
            <div className="flex flex-col items-start">
              <h3
                className="font-display leading-[1.05] uppercase transition-all duration-700 ease-out"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 3.1rem)",
                  color: "#FFFFFF",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                }}
              >
                Burn Calories,
                <br />
                Not{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #FCA5A5, #FECACA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Money.
                </span>
              </h3>
              <p
                className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed max-w-md transition-all duration-700 ease-out"
                style={{
                  color: "rgba(255,255,255,0.78)",
                  transitionDelay: "150ms",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                }}
              >
                Limited summer offer with free goodies &amp; expert guidance.
              </p>

              <ul className="mt-6 sm:mt-7 grid sm:grid-cols-2 gap-2 w-full max-w-sm lg:max-w-none text-left">
                {[
                  { icon: Shirt, text: "Free Gym T-Shirt" },
                  { icon: Snowflake, text: "Freezing Option" },
                  { icon: Gift, text: "Exclusive Goodies" },
                  { icon: Ticket, text: "FREE Trial" },
                  { icon: Dumbbell, text: "Premium Gear" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 transition-all duration-500 ease-out"
                    style={{
                      background: "rgba(252,165,165,0.12)",
                      border: "1px solid rgba(252,165,165,0.3)",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      transitionDelay: `${300 + index * 90}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-14px)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(252,165,165,0.6)";
                      e.currentTarget.style.background = "rgba(252,165,165,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)";
                      e.currentTarget.style.background = "rgba(252,165,165,0.12)";
                    }}
                  >
                    <item.icon className="h-4 w-4 shrink-0" style={{ color: "#FCA5A5" }} />
                    <span
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.92)", letterSpacing: "0.01em" }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <form
              className="space-y-3 transition-all duration-700 ease-out w-full max-w-sm mx-auto lg:ml-auto mt-4 lg:mt-0 text-left"
              style={{
                transitionDelay: "650ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                background: "rgba(252,165,165,0.1)",
                border: "1px solid rgba(252,165,165,0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
              onSubmit={handleSubmit}
            >
              <p
                className="text-[11px] font-bold uppercase mb-1"
                style={{ color: "#FCA5A5", letterSpacing: "0.14em" }}
              >
                Claim your spot
              </p>
              <input
                required
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-sm focus:outline-none transition-all"
                style={{
                  background: "rgba(220,38,38,0.15)",
                  border: "1px solid rgba(252,165,165,0.3)",
                  borderRadius: "10px",
                  padding: "11px 14px",
                  color: "#FFFFFF",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#FCA5A5")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)")}
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-sm focus:outline-none transition-all"
                style={{
                  background: "rgba(220,38,38,0.15)",
                  border: "1px solid rgba(252,165,165,0.3)",
                  borderRadius: "10px",
                  padding: "11px 14px",
                  color: "#FFFFFF",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#FCA5A5")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)")}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-sm focus:outline-none transition-all"
                style={{
                  background: "rgba(220,38,38,0.15)",
                  border: "1px solid rgba(252,165,165,0.3)",
                  borderRadius: "10px",
                  padding: "11px 14px",
                  color: "#FFFFFF",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#FCA5A5")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)")}
              />
              <button
                className="w-full text-xs font-bold uppercase cursor-pointer"
                style={{
                  background: "#FFFFFF",
                  color: "#DC2626",
                  borderRadius: "10px",
                  padding: "13px",
                  letterSpacing: "0.12em",
                  boxShadow: "0 14px 32px -10px rgba(220,38,38,0.5)",
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 16px 36px -8px rgba(220,38,38,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 14px 32px -10px rgba(220,38,38,0.5)";
                }}
              >
                Claim Offer
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}