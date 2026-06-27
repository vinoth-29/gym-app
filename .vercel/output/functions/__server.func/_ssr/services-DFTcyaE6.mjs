import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageHero, c as SiteLayout, o as ScrollPop, r as Gym3_default, t as GoogleReviews } from "./site-data-BK16xGFX.mjs";
import { c as Dumbbell, l as Clock, o as Shield, r as Sparkles, t as Users, u as Apple } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DFTcyaE6.js
var import_jsx_runtime = require_jsx_runtime();
var services = [
	{
		id: 1,
		title: "Premium Equipment",
		tag: "WORLD-CLASS GEAR",
		description: "Imported strength & cardio machines maintained daily. State-of-the-art gear engineered for every fitness goal.",
		image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1400",
		Icon: Dumbbell
	},
	{
		id: 2,
		title: "Expert Trainers",
		tag: "CERTIFIED COACHES",
		description: "Certified coaches who track your progress weekly with personalized programs.",
		image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1400",
		Icon: Users
	},
	{
		id: 3,
		title: "Diet Guidance",
		tag: "CUSTOM MEAL PLANS",
		description: "Nutrition plans tailored to your body type, goals, and lifestyle.",
		image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1400",
		Icon: Apple
	},
	{
		id: 4,
		title: "Women's Zone",
		tag: "SAFE & EMPOWERING",
		description: "Dedicated safe training area with women trainers available all day.",
		image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1400",
		Icon: Shield
	},
	{
		id: 5,
		title: "Pause Anytime",
		tag: "FLEXIBLE MEMBERSHIP",
		description: "Freeze your membership anytime with no penalties or pressure.",
		image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1400",
		Icon: Clock
	},
	{
		id: 6,
		title: "Hygienic Spaces",
		tag: "SPOTLESS ALWAYS",
		description: "Clean showers, lockers, and spotless training floors always maintained.",
		image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1400",
		Icon: Sparkles
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		offerTrigger: "off",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Our Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"TRAIN ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "SMARTER."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"NOT JUST HARDER."
				] }),
				subtitle: "Pick a discipline, pick a goal — we'll match you with a coach and a plan.",
				image: Gym3_default,
				sectionNumber: 2,
				identifierVariant: "accent-line"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollPop, {
						as: "div",
						className: "text-center max-w-2xl mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-sm font-bold uppercase tracking-[0.3em]",
							children: "What We Offer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl sm:text-5xl font-display",
							children: ["PROGRAMS BUILT ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "AROUND YOU."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pb-12",
						children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `group relative overflow-hidden rounded-2xl border border-border bg-black shadow-[var(--shadow-card)] transition-all duration-400 hover:border-primary hover:-translate-y-1 flex flex-col h-[400px] ${i % 2 !== 0 ? "lg:translate-y-12" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 h-[65%] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: service.image,
									alt: service.title,
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto relative z-10 p-6 bg-gradient-to-t from-black via-black to-transparent flex-1 flex flex-col justify-end pt-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold tracking-[0.2em] text-primary mb-2 uppercase",
										children: service.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.Icon, { className: "h-5 w-5 text-white group-hover:text-primary transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-display tracking-wide text-white",
											children: service.title
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/70 leading-relaxed mb-4 line-clamp-3",
										children: service.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										className: "btn btn-tertiary mt-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn More" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "btn-arrow",
											children: "→"
										})]
									})
								]
							})]
						}, service.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleReviews, {
				eyebrow: "Google Reviews",
				heading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["TRUSTED BY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "THOUSANDS."
				})] })
			})
		]
	});
}
//#endregion
export { ServicesPage as component };
