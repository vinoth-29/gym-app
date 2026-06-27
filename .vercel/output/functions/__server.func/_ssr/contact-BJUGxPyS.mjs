import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, c as SiteLayout } from "./site-data-BK16xGFX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BJUGxPyS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		offerTrigger: "off",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Get In Touch",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"SAY ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "HI."
				}),
				" WE BITE LESS THAN THE BARBELLS."
			] }),
			subtitle: "Book a free trial, ask about plans, or just stop by during open hours.",
			sectionNumber: 4,
			identifierVariant: "accent-line"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl grid lg:grid-cols-2 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Book Your Free Trial"
					}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 text-center py-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-5xl",
							children: "✅"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg",
							children: "We'll call you within 24 hours."
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 space-y-3",
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								placeholder: "Full name",
								className: "w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									placeholder: "Phone",
									className: "rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									placeholder: "Email",
									className: "rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Weight Loss" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Weight Gain" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Body Building" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General Fitness" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Personal Training" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 4,
								placeholder: "Tell us about your goal...",
								className: "w-full rounded-lg bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full rounded-lg bg-primary text-primary-foreground py-3.5 text-sm font-bold uppercase tracking-wider shadow-[var(--shadow-glow)] hover:scale-[1.02] transition",
								children: "Send Enquiry"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: "Visit Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-3 text-sm text-foreground/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"📞",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+919964666617",
										className: "hover:text-primary",
										children: "+91 99646 66617"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "📍 #16, 2nd Floor, 9th Main, 17th Cross Road, 7th Sector, HSR Layout, Bengaluru 560102" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "🕒 06:00 AM — 10:00 PM (All Days)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"✉️",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:hello@ironforge.in",
										className: "hover:text-primary",
										children: "Blr@PulseFitness.in"
									})
								] })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl overflow-hidden border border-border h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Pulse Fitness HSR Layout",
							src: "https://www.google.com/maps?q=HSR+Layout+Sector+7+Bengaluru&output=embed",
							className: "w-full h-full grayscale-[40%] contrast-125",
							loading: "lazy"
						})
					})]
				})]
			})
		})]
	});
}
//#endregion
export { ContactPage as component };
