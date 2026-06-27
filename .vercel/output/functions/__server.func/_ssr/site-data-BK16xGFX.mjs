import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FaYoutube, i as FaXTwitter, n as FaInstagram, r as FaLinkedinIn, t as FaFacebookF } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-data-BK16xGFX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Our Team",
		to: "/team"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 left-0 right-0 z-40 bg-white border-b-2 border-primary shadow-[0_10px_30px_-15px_rgba(255,0,0,0.15)] transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl sm:text-3xl tracking-wider text-primary",
						children: "PULSE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl sm:text-3xl tracking-wider text-black",
						children: "FITNESS"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center justify-center gap-8 text-sm font-semibold uppercase tracking-wide",
					children: NAV.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-black/70 hover:text-primary transition-colors",
						activeProps: { className: "text-primary font-bold" },
						activeOptions: { exact: true },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden sm:inline-flex rounded-full bg-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-black hover:text-white transition-colors",
						children: "Join Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((o) => !o),
						className: "lg:hidden h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-full border border-black/10 bg-white text-black hover:bg-black hover:text-white transition-colors",
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg sm:text-xl",
							children: open ? "✕" : "☰"
						})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-black/10 bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm font-semibold uppercase tracking-wide",
				children: NAV.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "py-2 text-black/70 hover:text-primary transition-colors",
					activeProps: { className: "text-primary font-bold" },
					activeOptions: { exact: true },
					children: l.label
				}, l.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card/40 pt-16 pb-8 px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl text-primary",
							children: "PULSE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl",
							children: "FITNESS"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2",
						children: [
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaFacebookF, {}),
								href: "#"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaInstagram, {}),
								href: "#"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedinIn, {}),
								href: "#"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaXTwitter, {}),
								href: "#"
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaYoutube, {}),
								href: "#"
							}
						].map((s, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							className: "h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition text-lg",
							children: s.icon
						}, index))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-2 text-sm text-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "📞"
							}), " +91 99646 66617"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "📍"
							}), " #16, 2nd Floor, 9th Main, 17th Cross Road, 7th Sector, HSR Layout, Bengaluru 560102"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "🕒"
							}), " 06:00 AM — 10:00 PM"] })
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl mb-5",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3 text-sm",
					children: NAV.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: q.to,
						className: "text-foreground/80 hover:text-primary transition flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full ring-2 ring-primary" }),
							" ",
							q.label
						]
					}) }, q.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl mb-5",
					children: "Find Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl overflow-hidden border border-border h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Pulse Fitness HSR Layout location",
						src: "https://www.google.com/maps?q=HSR+Layout+Sector+7+Bengaluru&output=embed",
						className: "w-full h-full grayscale-[40%] contrast-125",
						loading: "lazy"
					})
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl mt-12 pt-6 border-t border-border flex flex-wrap justify-between gap-4 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Pulse Fitness. All Rights Reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-primary",
						children: "Privacy Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-primary",
						children: "Refund Policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-primary",
						children: "T&C"
					})
				]
			})]
		})]
	});
}
function SiteLayout({ children, offerTrigger = "off" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var Group_gym_default = "/assets/Group-gym-Cb5zpwLi.jpg";
var Gym_default = "/assets/Gym-DyP2DBpo.jpg";
var Gym2_default = "/assets/Gym2-BvuoGrDU.jpg";
var Gym3_default = "/assets/Gym3-BlFm177u.jpg";
var Gym4_default = "/assets/Gym4-CwXd65DY.jpg";
var Gym5_default = "/assets/Gym5-DeLdZB6u.jpg";
var C1_default = "/assets/C1-dyeTrJdP.jpg";
var C2_default = "/assets/C2-cXiykcZJ.jpg";
var C3_default = "/assets/C3-C1cDFYCj.jpg";
var avatar_1_default = "/assets/avatar-1-CnWS2des.jpg";
var avatar_2_default = "/assets/avatar-2-DRzaAbui.jpg";
var avatar_3_default = "/assets/avatar-3-CLGQQw-T.jpg";
/**
* Observes an element and reports whether it's in the viewport.
* Unlike a "reveal once" observer, this toggles back to `false` when the
* element leaves the viewport so the fade/pop-in animation can replay
* every time the user scrolls back up or down past it.
*/
function useScrollReveal(threshold = .15) {
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		}, {
			threshold,
			rootMargin: "0px 0px -10% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		isVisible
	};
}
/**
* Wraps children in an element that fades in, scales up from 0.9 → 1, and
* lifts up slightly whenever it scrolls into view — and resets whenever it
* scrolls back out, so the animation replays every time. Pass `delay` (ms)
* to stagger a group of siblings for a sequential reveal. No horizontal or
* directional movement is used, only opacity + scale + a small upward lift.
*/
function ScrollPop({ children, delay = 0, threshold = .15, as: Tag = "div", className = "" }) {
	const { ref, isVisible } = useScrollReveal(threshold);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `scroll-pop ${isVisible ? "is-visible" : ""} ${className}`,
		style: { transitionDelay: isVisible ? `${delay}ms` : "0ms" },
		children
	});
}
function SectionIdentifier({ label, sectionNumber, variant = "accent-line" }) {
	if (variant === "minimal") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold uppercase tracking-widest text-foreground/60",
			children: label
		})]
	});
	if (variant === "accent-line") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1",
			children: [sectionNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-bold text-primary/60 tracking-widest",
				children: String(sectionNumber).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold uppercase tracking-widest text-foreground/70",
				children: label
			})]
		})]
	});
	if (variant === "glassmorphic") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md border border-primary/20",
		style: { background: "rgba(220, 38, 38, 0.05)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold uppercase tracking-widest text-foreground/70",
			children: label
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold uppercase tracking-widest text-foreground/70",
			children: label
		})]
	});
}
var galleryImages = [
	Gym_default,
	Gym2_default,
	Gym3_default,
	Gym4_default,
	Gym5_default,
	C1_default,
	C2_default,
	C3_default
];
var reviews = [
	{
		name: "Arjun Mehta",
		avatar: avatar_1_default,
		rating: 5,
		text: "Best gym in HSR layout, no doubt. Trainers actually care about your form and progress. Lost 12kg in 5 months with their nutrition guidance.",
		when: "2 weeks ago"
	},
	{
		name: "Azeem",
		avatar: avatar_2_default,
		rating: 5,
		text: "Loved the ambience, equipment, and the energy here. Clean, well maintained and never overcrowded. The women's section feels really safe.",
		when: "1 month ago"
	},
	{
		name: "Priya",
		avatar: avatar_3_default,
		rating: 5,
		text: "Premium experience without the premium price tag. Personal trainers are knowledgeable and the morning crowd is super motivating.",
		when: "3 weeks ago"
	},
	{
		name: "Sneha Reddy",
		avatar: avatar_2_default,
		rating: 4,
		text: "Great equipment and friendly staff. Gets a little busy around 7pm but the trainers manage the floor well. Would love more yoga slots.",
		when: "1 week ago"
	},
	{
		name: "Karthik Nair",
		avatar: avatar_3_default,
		rating: 5,
		text: "Signed up for the 12-week transformation program and honestly it changed how I think about fitness. Coaches check in every single week.",
		when: "2 months ago"
	},
	{
		name: "Ananya Das",
		avatar: avatar_1_default,
		rating: 5,
		text: "Super hygienic, always stocked towels and the diet plan they made for me actually fits my Indian kitchen. Highly recommend Pulse Fitness.",
		when: "4 days ago"
	}
];
function GoogleLogo({ className = "h-6 w-6" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FFC107",
				d: "M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FF3D00",
				d: "M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4CAF50",
				d: "M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#1976D2",
				d: "M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C41 35.1 44 30 44 24c0-1.3-.1-2.4-.4-3.5z"
			})
		]
	});
}
function Stars({ rating = 5, size = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-0.5 justify-center",
		children: Array.from({ length: 5 }).map((_, i) => {
			const fill = Math.max(0, Math.min(1, rating - i));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `relative inline-block ${size}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					className: `${size} absolute inset-0 fill-muted-foreground/25`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-0 overflow-hidden",
					style: { width: `${fill * 100}%` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						className: `${size} fill-yellow-400`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
					})
				})]
			}, i);
		})
	});
}
function PageHero({ eyebrow, title, subtitle, image, sectionNumber, identifierVariant = "accent-line" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-40 pb-20 px-6 overflow-hidden border-b border-border",
		children: [image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: "",
			className: "absolute inset-0 h-full w-full object-cover opacity-40 contrast-125"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-6xl text-left",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIdentifier, {
						label: eyebrow,
						sectionNumber,
						variant: identifierVariant
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-foreground/80 text-lg font-light leading-relaxed",
						children: subtitle
					})
				]
			})
		})]
	});
}
function Marquee({ images, reverse = false }) {
	const doubled = [...images, ...images];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 overflow-hidden border-y border-border/50 bg-card/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `flex gap-6 w-max animate-marquee ${reverse ? "[animation-direction:reverse]" : ""}`,
			children: doubled.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-[260px] h-[340px] rounded-2xl overflow-hidden shrink-0 shadow-[var(--shadow-card)] ring-1 ring-border animate-floaty",
				style: { animationDelay: `${i % 6 * .4}s` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "Gym moment",
					className: "h-full w-full object-cover",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" })]
			}, i))
		})
	});
}
/**
* A realistic Google-style reviews section: an overall rating summary
* (big score, stars, review count, breakdown bars) followed by a grid of
* individual review cards. Everything fades + pops into view on scroll,
* re-triggering every time it re-enters the viewport.
*/
function GoogleReviews({ heading = "WHAT BENGALURU SAYS.", eyebrow = "Google Reviews", ratingOverride, reviewCount = 551 }) {
	const avgRating = ratingOverride ?? Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length * 10) / 10;
	const breakdown = [
		5,
		4,
		3,
		2,
		1
	].map((star) => {
		const count = reviews.filter((r) => Math.round(r.rating) === star).length;
		return {
			star,
			pct: Math.round(count / reviews.length * 100) || (star === 5 ? 88 : star === 4 ? 9 : 1)
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-24 px-6 bg-slate-50 text-slate-900 overflow-hidden border-y border-slate-200",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollPop, {
					as: "div",
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-blue-600 text-sm font-bold uppercase tracking-[0.3em]",
						children: eyebrow
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl sm:text-5xl font-display",
						children: heading
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollPop, {
					delay: 120,
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-8 items-center shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center text-center sm:border-r sm:border-slate-200 sm:pr-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-6xl leading-none",
									children: avgRating.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
										rating: avgRating,
										size: "h-5 w-5"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 text-xs text-slate-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-slate-900",
										children: reviewCount
									}), " Google reviews"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleLogo, { className: "h-5 w-5" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: breakdown.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-3 text-slate-500",
										children: b.star
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-yellow-400",
										children: "★"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 h-2 rounded-full bg-slate-100 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full rounded-full bg-yellow-400",
											style: { width: `${b.pct}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "w-8 text-right text-slate-500",
										children: [b.pct, "%"]
									})
								]
							}, b.star))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: reviews.map((r, i) => {
						const colors = [
							"from-blue-400 to-blue-600",
							"from-emerald-400 to-emerald-700",
							"from-purple-400 to-purple-600",
							"from-rose-400 to-rose-600",
							"from-amber-600 to-orange-700",
							"from-slate-600 to-slate-800"
						];
						const colorClass = colors[i % colors.length];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollPop, {
							delay: i * 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "h-full rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `h-12 w-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shrink-0 font-semibold text-white text-sm`,
												children: r.name.charAt(0).toUpperCase()
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold truncate text-slate-900",
													children: r.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-slate-500",
													children: r.when
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleLogo, { className: "h-5 w-5 shrink-0" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { rating: r.rating })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-slate-700 leading-relaxed",
										children: r.text
									})
								]
							})
						}, r.name);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollPop, {
					delay: 200,
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 px-7 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-300 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleLogo, { className: "h-5 w-5" }),
							" ",
							avgRating.toFixed(1),
							" / ",
							reviewCount,
							"+ Google Reviews"
						]
					})
				})
			]
		})]
	});
}
//#endregion
export { PageHero as a, SiteLayout as c, Marquee as i, galleryImages as l, Group_gym_default as n, ScrollPop as o, Gym3_default as r, SectionIdentifier as s, GoogleReviews as t };
