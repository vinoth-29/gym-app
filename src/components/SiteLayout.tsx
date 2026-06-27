import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b-2 border-primary shadow-[0_10px_30px_-15px_rgba(255,0,0,0.15)] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display text-2xl sm:text-3xl tracking-wider text-primary">PULSE</span>
          <span className="font-display text-2xl sm:text-3xl tracking-wider text-black">FITNESS</span>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-8 text-sm font-semibold uppercase tracking-wide">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-black/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-bold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex rounded-full bg-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-black hover:text-white transition-colors"
          >
            Join Now
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-full border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-colors"
            aria-label="Menu"
          >
            <span className="text-lg sm:text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm font-semibold uppercase tracking-wide">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-black/70 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary font-bold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const socials = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];
  return (
    <footer className="border-t border-border bg-card/40 pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-3xl text-primary">PULSE</span>
            <span className="font-display text-3xl">FITNESS</span>
          </Link>
          <div className="mt-4 flex gap-2">
            {socials.map((s, index) => (
              <a
                key={index}
                href={s.href}
                className="h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition text-lg"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-6 space-y-2 text-sm text-foreground/80">
            <p>
              <span className="text-primary">📞</span> +91 99646 66617
            </p>
            <p>
              <span className="text-primary">📍</span> #16, 2nd Floor, 9th Main, 17th Cross Road,
              7th Sector, HSR Layout, Bengaluru 560102
            </p>
            <p>
              <span className="text-primary">🕒</span> 06:00 AM — 10:00 PM
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {NAV.map((q) => (
              <li key={q.to}>
                <Link
                  to={q.to}
                  className="text-foreground/80 hover:text-primary transition flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full ring-2 ring-primary" /> {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>



        <div>
          <h3 className="font-display text-2xl mb-5">Find Us</h3>
          <div className="rounded-xl overflow-hidden border border-border h-64">
            <iframe
              title="Pulse Fitness HSR Layout location"
              src="https://www.google.com/maps?q=HSR+Layout+Sector+7+Bengaluru&output=embed"
              className="w-full h-full grayscale-[40%] contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Pulse Fitness. All Rights Reserved.</p>
        <p className="flex gap-4">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Refund Policy
          </a>
          <a href="#" className="hover:text-primary">
            T&C
          </a>
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({
  children,
  offerTrigger = "off",
}: {
  children: ReactNode;
  offerTrigger?: "delay" | "scroll" | "off";
}) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
