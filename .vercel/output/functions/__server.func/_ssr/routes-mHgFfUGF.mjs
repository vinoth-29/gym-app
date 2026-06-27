import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SiteLayout, i as Marquee, l as galleryImages, n as Group_gym_default, o as ScrollPop, s as SectionIdentifier, t as GoogleReviews } from "./site-data-BK16xGFX.mjs";
import { a as Shirt, c as Dumbbell, i as Snowflake, l as Clock, n as Ticket, o as Shield, r as Sparkles, s as Gift, t as Users, u as Apple } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-mHgFfUGF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SummerSpecialCard() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: ""
	});
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const cardRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				if (cardRef.current) observer.unobserve(cardRef.current);
			}
		}, { threshold: .2 });
		if (cardRef.current) observer.observe(cardRef.current);
		return () => observer.disconnect();
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: cardRef,
		className: "relative w-full overflow-hidden",
		style: {
			borderRadius: "22px",
			border: "1.5px solid rgba(255,255,255,0.3)",
			background: "linear-gradient(150deg, #DC2626 0%, #B91C1C 100%)",
			boxShadow: "0 0 0 1px rgba(255,255,255,0.2), 0 40px 90px -28px rgba(220,38,38,0.55), 0 18px 40px -16px rgba(220,38,38,0.45)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 pointer-events-none",
				style: {
					height: "280px",
					background: "radial-gradient(ellipse 60% 100% at 18% 0%, rgba(252,165,165,0.45), transparent 70%), radial-gradient(ellipse 55% 90% at 88% 6%, rgba(248,113,113,0.35), transparent 70%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "absolute inset-0 w-full h-full pointer-events-none",
				style: {
					opacity: .08,
					mixBlendMode: "overlay"
				},
				preserveAspectRatio: "none",
				viewBox: "0 0 1200 500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
					id: "ifCrackNoiseSummer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
						type: "fractalNoise",
						baseFrequency: "0.012 0.02",
						numOctaves: "4",
						seed: "11",
						stitchTiles: "stitch",
						result: "noise"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
						in: "noise",
						type: "matrix",
						values: "0 0 0 0 1\n                      0 0 0 0 0.8\n                      0 0 0 0 0.5\n                      0 0 0 0.4 0"
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "1200",
					height: "500",
					filter: "url(#ifCrackNoiseSummer)"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 text-[10px] font-bold uppercase z-10 whitespace-nowrap",
				style: {
					background: "rgba(255,255,255,0.15)",
					color: "#FFFFFF",
					border: "1px solid rgba(255,255,255,0.3)",
					borderRadius: "999px",
					letterSpacing: "0.18em",
					boxShadow: "0 10px 26px -8px rgba(220,38,38,0.4)"
				},
				children: "Summer Special"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10",
				style: { padding: "clamp(72px, 8vw, 80px) clamp(16px, 4vw, 28px) clamp(20px, 4vw, 32px)" },
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center text-center py-6 sm:py-10 animate-fade-in max-w-md mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 sm:h-14 w-12 sm:w-14 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4",
							style: {
								borderRadius: "50%",
								background: "rgba(252,165,165,0.2)",
								border: "1px solid rgba(252,165,165,0.5)",
								color: "#FCA5A5"
							},
							children: "✓"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg sm:text-3xl uppercase",
							style: {
								color: "#FCA5A5",
								letterSpacing: "0.02em"
							},
							children: "Offer Claimed!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed",
							style: { color: "rgba(255,255,255,0.82)" },
							children: [
								"Thanks ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#FFFFFF",
										fontWeight: 600
									},
									children: formData.name
								}),
								"! We'll contact you at",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#FFFFFF",
										fontWeight: 600
									},
									children: formData.phone
								}),
								" within 24 hours."
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 items-center text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display leading-[1.05] uppercase transition-all duration-700 ease-out",
								style: {
									fontSize: "clamp(1.5rem, 4vw, 3.1rem)",
									color: "#FFFFFF",
									opacity: isVisible ? 1 : 0,
									transform: isVisible ? "translateY(0)" : "translateY(24px)"
								},
								children: [
									"Burn Calories,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Not",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											background: "linear-gradient(90deg, #FCA5A5, #FECACA)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text"
										},
										children: "Money."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed max-w-md transition-all duration-700 ease-out",
								style: {
									color: "rgba(255,255,255,0.78)",
									transitionDelay: "150ms",
									opacity: isVisible ? 1 : 0,
									transform: isVisible ? "translateY(0)" : "translateY(16px)"
								},
								children: "Limited summer offer with free goodies & expert guidance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 sm:mt-7 grid sm:grid-cols-2 gap-2 w-full max-w-sm lg:max-w-none text-left",
								children: [
									{
										icon: Shirt,
										text: "Free Gym T-Shirt"
									},
									{
										icon: Snowflake,
										text: "Freezing Option"
									},
									{
										icon: Gift,
										text: "Exclusive Goodies"
									},
									{
										icon: Ticket,
										text: "FREE Trial"
									},
									{
										icon: Dumbbell,
										text: "Premium Gear"
									}
								].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 transition-all duration-500 ease-out",
									style: {
										background: "rgba(252,165,165,0.12)",
										border: "1px solid rgba(252,165,165,0.3)",
										borderRadius: "10px",
										padding: "10px 12px",
										transitionDelay: `${300 + index * 90}ms`,
										opacity: isVisible ? 1 : 0,
										transform: isVisible ? "translateX(0)" : "translateX(-14px)"
									},
									onMouseEnter: (e) => {
										e.currentTarget.style.borderColor = "rgba(252,165,165,0.6)";
										e.currentTarget.style.background = "rgba(252,165,165,0.18)";
									},
									onMouseLeave: (e) => {
										e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)";
										e.currentTarget.style.background = "rgba(252,165,165,0.12)";
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "h-4 w-4 shrink-0",
										style: { color: "#FCA5A5" }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs sm:text-sm font-medium",
										style: {
											color: "rgba(255,255,255,0.92)",
											letterSpacing: "0.01em"
										},
										children: item.text
									})]
								}, index))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "space-y-3 transition-all duration-700 ease-out w-full max-w-sm mx-auto lg:ml-auto mt-4 lg:mt-0 text-left",
						style: {
							transitionDelay: "650ms",
							opacity: isVisible ? 1 : 0,
							transform: isVisible ? "translateY(0)" : "translateY(16px)",
							background: "rgba(252,165,165,0.1)",
							border: "1px solid rgba(252,165,165,0.3)",
							borderRadius: "16px",
							padding: "20px"
						},
						onSubmit: handleSubmit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold uppercase mb-1",
								style: {
									color: "#FCA5A5",
									letterSpacing: "0.14em"
								},
								children: "Claim your spot"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "text",
								placeholder: "Your name",
								value: formData.name,
								onChange: (e) => setFormData({
									...formData,
									name: e.target.value
								}),
								className: "w-full text-sm focus:outline-none transition-all",
								style: {
									background: "rgba(220,38,38,0.15)",
									border: "1px solid rgba(252,165,165,0.3)",
									borderRadius: "10px",
									padding: "11px 14px",
									color: "#FFFFFF"
								},
								onFocus: (e) => e.currentTarget.style.borderColor = "#FCA5A5",
								onBlur: (e) => e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "tel",
								placeholder: "Phone",
								value: formData.phone,
								onChange: (e) => setFormData({
									...formData,
									phone: e.target.value
								}),
								className: "w-full text-sm focus:outline-none transition-all",
								style: {
									background: "rgba(220,38,38,0.15)",
									border: "1px solid rgba(252,165,165,0.3)",
									borderRadius: "10px",
									padding: "11px 14px",
									color: "#FFFFFF"
								},
								onFocus: (e) => e.currentTarget.style.borderColor = "#FCA5A5",
								onBlur: (e) => e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "email",
								placeholder: "Email",
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								}),
								className: "w-full text-sm focus:outline-none transition-all",
								style: {
									background: "rgba(220,38,38,0.15)",
									border: "1px solid rgba(252,165,165,0.3)",
									borderRadius: "10px",
									padding: "11px 14px",
									color: "#FFFFFF"
								},
								onFocus: (e) => e.currentTarget.style.borderColor = "#FCA5A5",
								onBlur: (e) => e.currentTarget.style.borderColor = "rgba(252,165,165,0.3)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "w-full text-xs font-bold uppercase cursor-pointer",
								style: {
									background: "#FFFFFF",
									color: "#DC2626",
									borderRadius: "10px",
									padding: "13px",
									letterSpacing: "0.12em",
									boxShadow: "0 14px 32px -10px rgba(220,38,38,0.5)",
									transition: "transform 200ms ease, box-shadow 200ms ease"
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.transform = "scale(1.02)";
									e.currentTarget.style.boxShadow = "0 16px 36px -8px rgba(220,38,38,0.7)";
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.transform = "scale(1)";
									e.currentTarget.style.boxShadow = "0 14px 32px -10px rgba(220,38,38,0.5)";
								},
								children: "Claim Offer"
							})
						]
					})]
				})
			})
		]
	});
}
function clamp(v, min, max) {
	return Math.max(min, Math.min(max, v));
}
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function smoothstep(t) {
	return t * t * (3 - 2 * t);
}
var scatterConfigs = typeof window !== "undefined" && window.innerWidth < 768 ? [
	{
		startX: -160,
		startY: -40,
		startRotate: -18,
		startScale: .5,
		restX: -6,
		restY: 4,
		restRotate: -3
	},
	{
		startX: 160,
		startY: -30,
		startRotate: 15,
		startScale: .5,
		restX: 4,
		restY: -3,
		restRotate: 2
	},
	{
		startX: -140,
		startY: 50,
		startRotate: -12,
		startScale: .5,
		restX: -4,
		restY: 6,
		restRotate: -2
	},
	{
		startX: 150,
		startY: -50,
		startRotate: 20,
		startScale: .5,
		restX: 7,
		restY: -2,
		restRotate: 3
	},
	{
		startX: -175,
		startY: -60,
		startRotate: -22,
		startScale: .5,
		restX: -3,
		restY: -5,
		restRotate: -1.5
	},
	{
		startX: 140,
		startY: 40,
		startRotate: 14,
		startScale: .5,
		restX: 5,
		restY: 4,
		restRotate: 2.5
	},
	{
		startX: -150,
		startY: 30,
		startRotate: -16,
		startScale: .5,
		restX: -5,
		restY: 3,
		restRotate: -2.5
	},
	{
		startX: 170,
		startY: -20,
		startRotate: 18,
		startScale: .5,
		restX: 3,
		restY: -4,
		restRotate: 1.5
	}
] : [
	{
		startX: -320,
		startY: -80,
		startRotate: -18,
		startScale: .5,
		restX: -12,
		restY: 8,
		restRotate: -3
	},
	{
		startX: 320,
		startY: -60,
		startRotate: 15,
		startScale: .5,
		restX: 8,
		restY: -6,
		restRotate: 2
	},
	{
		startX: -280,
		startY: 100,
		startRotate: -12,
		startScale: .5,
		restX: -8,
		restY: 12,
		restRotate: -2
	},
	{
		startX: 300,
		startY: -100,
		startRotate: 20,
		startScale: .5,
		restX: 14,
		restY: -4,
		restRotate: 3
	},
	{
		startX: -350,
		startY: -120,
		startRotate: -22,
		startScale: .5,
		restX: -6,
		restY: -10,
		restRotate: -1.5
	},
	{
		startX: 280,
		startY: 80,
		startRotate: 14,
		startScale: .5,
		restX: 10,
		restY: 8,
		restRotate: 2.5
	},
	{
		startX: -300,
		startY: 60,
		startRotate: -16,
		startScale: .5,
		restX: -10,
		restY: 6,
		restRotate: -2.5
	},
	{
		startX: 340,
		startY: -40,
		startRotate: 18,
		startScale: .5,
		restX: 6,
		restY: -8,
		restRotate: 1.5
	}
];
function TransformationGallery({ clients }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "tg-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tg-header",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tg-label",
					children: "Real Results"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "tg-title",
					children: ["CLIENT ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TRANSFORMATIONS" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tg-subtitle",
					children: "Real members. Real progress. No filters, no shortcuts."
				})
			]
		}), clients.map((client, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScatteredPair, {
			client,
			index: i
		}, client.name))]
	});
}
function ScatteredPair({ client, index }) {
	const pairRef = (0, import_react.useRef)(null);
	const [scrollProgress, setScrollProgress] = (0, import_react.useState)(0);
	const handleScroll = (0, import_react.useCallback)(() => {
		const el = pairRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const vh = window.innerHeight;
		const enterProgress = (vh - rect.top) / (vh * .6);
		const exitProgress = -rect.bottom / (vh * .4);
		if (rect.bottom < 0) setScrollProgress(1 + clamp(exitProgress + 1, 0, 1));
		else setScrollProgress(clamp(enterProgress, 0, 1));
	}, []);
	(0, import_react.useEffect)(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);
	const beforeCfg = scatterConfigs[index * 2 % scatterConfigs.length];
	const afterCfg = scatterConfigs[(index * 2 + 1) % scatterConfigs.length];
	const enterT = smoothstep(clamp(scrollProgress, 0, 1));
	const exitT = smoothstep(clamp(scrollProgress - 1, 0, 1));
	function getTransform(cfg, isExit) {
		if (isExit) {
			const x = lerp(cfg.restX, -cfg.startX * .7, exitT);
			const y = lerp(cfg.restY, -cfg.startY * .7, exitT);
			const r = lerp(cfg.restRotate, -cfg.startRotate * .8, exitT);
			const s = lerp(1, cfg.startScale, exitT);
			const o = lerp(1, 0, exitT);
			return {
				transform: `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`,
				opacity: o
			};
		}
		const x = lerp(cfg.startX, cfg.restX, enterT);
		const y = lerp(cfg.startY, cfg.restY, enterT);
		const r = lerp(cfg.startRotate, cfg.restRotate, enterT);
		const s = lerp(cfg.startScale, 1, enterT);
		const o = lerp(0, 1, clamp(enterT * 2, 0, 1));
		return {
			transform: `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`,
			opacity: o
		};
	}
	const isExiting = scrollProgress > 1;
	const beforeStyle = getTransform(beforeCfg, isExiting);
	const afterStyle = getTransform(afterCfg, isExiting);
	const infoT = clamp((enterT - .6) * 3, 0, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: pairRef,
		className: "tg-pair",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tg-pair-info",
			style: {
				opacity: isExiting ? lerp(1, 0, exitT) : infoT,
				transform: `translateY(${isExiting ? lerp(0, -30, exitT) : lerp(20, 0, infoT)}px)`
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "tg-pair-name",
				children: client.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tg-pair-meta",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tg-pair-duration",
					children: client.duration
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tg-pair-change",
					style: { color: client.change.includes("Increased") ? "#22c55e" : "#ef4444" },
					children: client.change
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tg-pair-cards",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tg-card",
					style: beforeStyle,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tg-card-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: client.beforeImg,
								alt: `${client.name} before`,
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tg-card-gradient" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tg-card-tag tg-card-tag--before",
								children: "Before"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "tg-card-stat",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tg-card-stat-label",
									children: "Weight"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tg-card-stat-value",
									children: client.before.weight
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tg-arrow",
					style: {
						opacity: isExiting ? lerp(1, 0, exitT) : lerp(0, 1, clamp((enterT - .7) * 4, 0, 1)),
						transform: `scale(${isExiting ? lerp(1, .3, exitT) : lerp(.3, 1, clamp((enterT - .6) * 4, 0, 1))})`
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "28",
						height: "28",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m12 5 7 7-7 7" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tg-card",
					style: afterStyle,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tg-card-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: client.afterImg,
								alt: `${client.name} after`,
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tg-card-gradient" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tg-card-tag tg-card-tag--after",
								children: "After"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "tg-card-stat",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tg-card-stat-label",
									children: "Weight"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tg-card-stat-value",
									children: client.after.weight
								})]
							})
						]
					})
				})
			]
		})]
	});
}
var c2b_default = "/assets/c2b-BwgQW02I.jpg";
var c2a_default = "/assets/c2a-NF_k5dmw.jpg";
var c3b_default = "/assets/c3b-HVzNbUZa.jpg";
var c3a_default = "/assets/c3a-yhFzZQjt.jpg";
var c5b_default = "/assets/c5b-d3AagdVG.jpg";
var c5a_default = "/assets/c5a-Co3EMiS4.jpg";
var c6b_default = "/assets/c6b-tkCqB3ab.jpg";
var c6a_default = "/assets/c6a-DV1gv8Ds.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		offerTrigger: "off",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Membership, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { images: galleryImages.slice(0, 6) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transformations, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleReviews, { heading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["NOT JUST ANOTHER GYM. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "REAL RESULTS."
			})] }) })
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[100svh] flex items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: Group_gym_default,
				alt: "Pulse Fitness gym members and trainers",
				className: "absolute inset-0 h-full w-full object-cover",
				width: 1920,
				height: 1280
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 flex flex-col items-start text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionIdentifier, {
						label: "Premium Fitness Experience",
						variant: "glassmorphic"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight",
						children: [
							"PUSH HARDER ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"FOR A ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: [
									"DI",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic",
										children: "FF"
									}),
									"ERENT"
								]
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"TOMORROW"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xl text-base sm:text-lg text-foreground/80 font-light leading-relaxed",
						children: "Sweat is just fat crying. Join Bengaluru's most passionate fitness community and forge the version of you that you've always wanted."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] hover:scale-105 transition-transform",
							children: "Our Classes →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-white hover:text-black hover:border-white transition-colors duration-300",
							children: "Free Trial"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" })
		]
	});
}
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 px-6 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollPop, {
				as: "div",
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary text-base font-bold uppercase tracking-[0.3em]",
					children: "Why Pulse Fitness"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-5xl sm:text-6xl md:text-7xl font-display",
					children: [
						"EVERYTHING YOU NEED. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "NOTHING YOU DON'T."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 md:mt-16 flex flex-col md:flex-row items-stretch md:items-end gap-4 md:gap-3 w-full h-auto md:h-[500px]",
				children: [
					{
						icon: Dumbbell,
						title: "Premium Equipment",
						text: "Imported strength & cardio machines maintained daily.",
						image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
					},
					{
						icon: Users,
						title: "Expert Trainers",
						text: "Certified coaches who track your progress weekly.",
						image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg"
					},
					{
						icon: Apple,
						title: "Diet Guidance",
						text: "Custom Indian meal plans to match your goals.",
						image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
					},
					{
						icon: Shield,
						title: "Safe Women's Zone",
						text: "Dedicated area & women trainers all day long.",
						image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
					},
					{
						icon: Clock,
						title: "Pause Anytime",
						text: "Freeze your membership when life gets in the way.",
						image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg"
					},
					{
						icon: Sparkles,
						title: "Hygienic Spaces",
						text: "Showers, lockers & spotless floors. Always.",
						image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
					}
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `group flex-[1] md:hover:flex-[6] transition-all duration-700 ease-in-out cursor-pointer relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] min-h-[180px] md:min-h-0 ${i % 2 === 0 ? "md:h-full" : "md:h-[85%]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.title,
							className: "absolute inset-0 h-full w-full object-cover md:group-hover:scale-110 transition-transform duration-700 opacity-80 md:opacity-60 md:group-hover:opacity-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 md:via-black/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 left-4 text-white bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 p-5 md:p-6 text-white w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl md:text-xl font-display tracking-wide mb-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100 md:translate-y-4 md:group-hover:translate-y-0",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/90 md:text-white/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200 md:translate-y-4 md:group-hover:translate-y-0",
								children: item.text
							})]
						})
					]
				}, item.title))
			})]
		})
	});
}
function Membership() {
	const plans = [
		{
			name: "Starter",
			price: "1,499",
			period: "/ month",
			perks: [
				"Gym access 6am–10pm",
				"Basic orientation",
				"Locker access"
			],
			cta: "Get Started"
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
				"1 PT session / month"
			],
			cta: "Go Pro",
			popular: true
		},
		{
			name: "Elite",
			price: "11,999",
			period: "/ year",
			perks: [
				"Everything in Pro",
				"Unlimited PT sessions",
				"InBody analysis monthly",
				"Freeze 30 days free"
			],
			cta: "Go Elite"
		}
	];
	const tierStyles = {
		Starter: {
			background: "linear-gradient(165deg, #DC2626 0%, #B91C1C 100%)",
			border: "1.5px solid rgba(255,255,255,0.3)",
			color: "#FFFFFF",
			restColor: "rgba(255,255,255,0.85)",
			shadowRest: "0 0 0 1px rgba(255,255,255,0.2), 0 16px 48px -12px rgba(220,38,38,0.4)",
			shadowHover: "0 0 0 1.5px rgba(255,255,255,0.4), 0 24px 60px -12px rgba(220,38,38,0.5)",
			hoverBorder: "1.5px solid rgba(255,255,255,0.6)",
			checkColor: "#FCA5A5",
			ctaBg: "#FFFFFF",
			ctaColor: "#DC2626",
			ctaHoverBg: "#F5F5F5",
			ctaHoverColor: "#DC2626",
			scale: "1.05",
			priceColor: "#FFFFFF"
		},
		Pro: {
			background: "linear-gradient(165deg, #DC2626 0%, #B91C1C 100%)",
			border: "1.5px solid rgba(255,255,255,0.3)",
			color: "#FFFFFF",
			restColor: "rgba(255,255,255,0.85)",
			shadowRest: "0 0 0 1px rgba(255,255,255,0.2), 0 16px 48px -12px rgba(220,38,38,0.4)",
			shadowHover: "0 0 0 1.5px rgba(255,255,255,0.4), 0 24px 60px -12px rgba(220,38,38,0.5)",
			hoverBorder: "1.5px solid rgba(255,255,255,0.6)",
			checkColor: "#FCA5A5",
			ctaBg: "#FFFFFF",
			ctaColor: "#DC2626",
			ctaHoverBg: "#F5F5F5",
			ctaHoverColor: "#DC2626",
			scale: "1.05",
			priceColor: "#FFFFFF"
		},
		Elite: {
			background: "linear-gradient(165deg, #DC2626 0%, #B91C1C 100%)",
			border: "1.5px solid rgba(255,255,255,0.3)",
			color: "#FFFFFF",
			restColor: "rgba(255,255,255,0.85)",
			shadowRest: "0 0 0 1px rgba(255,255,255,0.2), 0 16px 48px -12px rgba(220,38,38,0.4)",
			shadowHover: "0 0 0 1.5px rgba(255,255,255,0.4), 0 24px 60px -12px rgba(220,38,38,0.5)",
			hoverBorder: "1.5px solid rgba(255,255,255,0.6)",
			checkColor: "#FCA5A5",
			ctaBg: "#FFFFFF",
			ctaColor: "#DC2626",
			ctaHoverBg: "#F5F5F5",
			ctaHoverColor: "#DC2626",
			scale: "1.05",
			priceColor: "#FFFFFF"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 px-6 overflow-hidden",
		style: { background: "#FFFFFF" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollPop, {
				as: "div",
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold uppercase",
						style: {
							color: "#DC2626",
							letterSpacing: "0.35em"
						},
						children: "Membership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display",
						style: {
							fontSize: "clamp(2.75rem, 6vw, 5rem)",
							lineHeight: .95,
							color: "#0F0F0F",
							letterSpacing: "-0.01em"
						},
						children: ["PICK YOUR ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "#DC2626" },
							children: "PLAN."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl mx-auto",
						style: {
							color: "rgba(15,15,15,0.55)",
							fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
							lineHeight: 1.6
						},
						children: "Three tiers. No filler. Pick the one that matches how hard you're training."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-9 max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-3 gap-6 items-stretch w-full",
					children: plans.map((p, index) => {
						const t = tierStyles[p.name];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollPop, {
							delay: index * 90,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-full flex flex-col",
								style: {
									background: t.background,
									border: t.border,
									color: t.color,
									borderRadius: "20px",
									padding: "28px 24px",
									boxShadow: t.shadowRest,
									transform: `scale(${t.scale})`,
									transition: "transform 320ms cubic-bezier(.22,1,.36,1), box-shadow 320ms cubic-bezier(.22,1,.36,1), border-color 320ms ease"
								},
								onMouseEnter: (e) => {
									e.currentTarget.style.transform = `translateY(-7px) scale(${Number(t.scale) + .015})`;
									e.currentTarget.style.boxShadow = t.shadowHover;
									e.currentTarget.style.border = t.hoverBorder;
								},
								onMouseLeave: (e) => {
									e.currentTarget.style.transform = `scale(${t.scale})`;
									e.currentTarget.style.boxShadow = t.shadowRest;
									e.currentTarget.style.border = t.border;
								},
								children: [
									p.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-4 right-4 text-[9px] font-bold uppercase",
										style: {
											background: "rgba(255,255,255,0.15)",
											color: "#FFFFFF",
											border: "1px solid rgba(255,255,255,0.3)",
											borderRadius: "999px",
											padding: "4px 9px",
											letterSpacing: "0.08em"
										},
										children: "Most Popular"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display",
										style: {
											fontSize: p.name === "Pro" ? "1.5rem" : "1.15rem",
											letterSpacing: "0.02em",
											color: t.color
										},
										children: p.displayName ?? p.name.toUpperCase()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-baseline gap-1 flex-wrap",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm",
												style: { color: t.restColor },
												children: "₹"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display",
												style: {
													fontSize: "2.1rem",
													lineHeight: 1,
													color: t.priceColor
												},
												children: p.price
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] ml-1 whitespace-nowrap",
												style: { color: t.restColor },
												children: p.period
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
										height: "1px",
										margin: "18px 0 15px",
										background: p.name === "Starter" ? "rgba(15,15,15,0.12)" : "rgba(255,255,255,0.15)"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2.5 text-xs flex-1",
										style: { color: t.restColor },
										children: p.perks.map((perk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-0.5 text-[10px] font-bold",
												style: { color: t.checkColor },
												children: "✓"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: perk })]
										}, perk))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "mt-6 inline-flex w-full items-center justify-center whitespace-nowrap text-[11px] font-bold uppercase",
										style: {
											background: t.ctaBg,
											color: t.ctaColor,
											borderRadius: "999px",
											padding: "12px 16px",
											letterSpacing: "0.08em",
											border: p.name === "Elite" ? "1px solid rgba(245,197,94,0.5)" : "none",
											transition: "background 240ms ease, color 240ms ease, transform 240ms ease"
										},
										onMouseEnter: (e) => {
											e.currentTarget.style.background = t.ctaHoverBg;
											e.currentTarget.style.color = t.ctaHoverColor;
											e.currentTarget.style.transform = "scale(1.02)";
										},
										onMouseLeave: (e) => {
											e.currentTarget.style.background = t.ctaBg;
											e.currentTarget.style.color = t.ctaColor;
											e.currentTarget.style.transform = "scale(1)";
										},
										children: p.cta
									})
								]
							})
						}, p.name);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollPop, {
					delay: 270,
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummerSpecialCard, {})
				})]
			})]
		})
	});
}
var clientTransformations = [
	{
		name: "Arun",
		beforeImg: c2b_default,
		afterImg: c2a_default,
		before: { weight: "88 kg" },
		after: { weight: "71 kg" },
		change: "17 kg Decreased",
		duration: "3 Months"
	},
	{
		name: "Deepak",
		beforeImg: c3b_default,
		afterImg: c3a_default,
		before: { weight: "95 kg" },
		after: { weight: "78 kg" },
		change: "17 kg Decreased",
		duration: "4 Months"
	},
	{
		name: "Karthik",
		beforeImg: c5b_default,
		afterImg: c5a_default,
		before: { weight: "60 kg" },
		after: { weight: "73 kg" },
		change: "13 kg Increased",
		duration: "6 Months"
	},
	{
		name: "Ravi",
		beforeImg: c6b_default,
		afterImg: c6a_default,
		before: { weight: "92 kg" },
		after: { weight: "74 kg" },
		change: "18 kg Decreased",
		duration: "5 Months"
	}
];
function Transformations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransformationGallery, { clients: clientTransformations });
}
//#endregion
export { Index as component };
