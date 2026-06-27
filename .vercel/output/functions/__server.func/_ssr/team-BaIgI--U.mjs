import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, c as SiteLayout } from "./site-data-BK16xGFX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-BaIgI--U.js
var import_jsx_runtime = require_jsx_runtime();
var team = [
	{
		name: "Arjun Mehta",
		role: "Head Coach · Strength",
		img: "/assets/T1-COxSGyl0.jpg",
		bio: "10+ years coaching powerlifters and beginners alike. ACE certified."
	},
	{
		name: "Azeem",
		role: "Yoga & Mobility Lead",
		img: "/assets/T2-BUjtxmmZ.jpg",
		bio: "200hr RYT teacher with a focus on injury recovery and breathwork."
	},
	{
		name: "Priya",
		role: "Nutritionist · PT",
		img: "/assets/T3-CDeKVIJP.jpg",
		bio: "Sports nutritionist building Indian-first meal plans that actually taste good."
	}
];
function TeamPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		offerTrigger: "off",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Team",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["MEET YOUR ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "COACHES."
			})] }),
			subtitle: "Certified, kind, and obsessed with your progress.",
			sectionNumber: 3,
			identifierVariant: "accent-line"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl overflow-hidden border border-border bg-card group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.img,
							alt: m.name,
							className: "h-full w-full object-cover group-hover:scale-105 transition duration-500",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-primary font-semibold uppercase tracking-widest mt-1",
								children: m.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-foreground/75",
								children: m.bio
							})
						]
					})]
				}, m.name))
			})
		})]
	});
}
//#endregion
export { TeamPage as component };
