import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, c as SiteLayout, i as Marquee, l as galleryImages, n as Group_gym_default } from "./site-data-BK16xGFX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CmPzdAbn.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		offerTrigger: "off",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Our Story",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"POWERED BY ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "PASSION"
					}),
					".",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"BUILT ON COMMUNITY."
				] }),
				subtitle: "Founded in 2015 by a group of friends who couldn't find a gym that felt like home, Pulse Fitness has grown into HSR Layout's most loved fitness destination.",
				image: Group_gym_default,
				sectionNumber: 1,
				identifierVariant: "accent-line"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl grid md:grid-cols-2 gap-10 text-foreground/85",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-primary",
						children: "Our Mission"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed",
						children: "Make world-class fitness accessible, judgement-free, and joyful — for every body type, every age, and every goal."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-primary",
						children: "Our Promise"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed",
						children: "Clean spaces, kind trainers, real results. No pushy upsells, no crowded floors, no nonsense."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { images: galleryImages.slice(0, 6) })
		]
	});
}
//#endregion
export { AboutPage as component };
