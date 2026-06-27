import React, { useRef, useEffect, useState, useCallback } from "react";
import "./TransformationGallery.css";

/* ─── Types ─── */
interface TransformationClient {
  name: string;
  beforeImg: string;
  afterImg: string;
  before: { weight: string };
  after: { weight: string };
  change: string;
  duration: string;
}

interface TransformationGalleryProps {
  clients: TransformationClient[];
}

/* ─── Helpers ─── */
function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

/*
 * Each image gets a unique "scattered" start position.
 * These define where each image flies in FROM (offsets in px and degrees).
 * The "resting" scattered position is a slight offset from center.
 */
interface ScatterConfig {
  // Where the image starts (offscreen)
  startX: number;
  startY: number;
  startRotate: number;
  startScale: number;
  // Where the image rests (scattered but visible)
  restX: number;
  restY: number;
  restRotate: number;
}

// Detect if mobile for responsive scatter configs
const isMobileWidth = typeof window !== 'undefined' && window.innerWidth < 768;

// 4 clients × 2 images each = 8 scatter configs
// before images (index 0,2,4,6) scatter from left, after images (1,3,5,7) from right
// Mobile configs have reduced offsets to fit smaller screens
const scatterConfigs: ScatterConfig[] = isMobileWidth ? [
  // Client 0 - Before (mobile: reduced from left)
  { startX: -160, startY: -40, startRotate: -18, startScale: 0.5, restX: -6, restY: 4, restRotate: -3 },
  // Client 0 - After (mobile: reduced from right)
  { startX: 160, startY: -30, startRotate: 15, startScale: 0.5, restX: 4, restY: -3, restRotate: 2 },
  // Client 1 - Before (mobile: reduced)
  { startX: -140, startY: 50, startRotate: -12, startScale: 0.5, restX: -4, restY: 6, restRotate: -2 },
  // Client 1 - After (mobile: reduced)
  { startX: 150, startY: -50, startRotate: 20, startScale: 0.5, restX: 7, restY: -2, restRotate: 3 },
  // Client 2 - Before (mobile: reduced)
  { startX: -175, startY: -60, startRotate: -22, startScale: 0.5, restX: -3, restY: -5, restRotate: -1.5 },
  // Client 2 - After (mobile: reduced)
  { startX: 140, startY: 40, startRotate: 14, startScale: 0.5, restX: 5, restY: 4, restRotate: 2.5 },
  // Client 3 - Before (mobile: reduced)
  { startX: -150, startY: 30, startRotate: -16, startScale: 0.5, restX: -5, restY: 3, restRotate: -2.5 },
  // Client 3 - After (mobile: reduced)
  { startX: 170, startY: -20, startRotate: 18, startScale: 0.5, restX: 3, restY: -4, restRotate: 1.5 },
] : [
  // Client 0 - Before (desktop: from far left)
  { startX: -320, startY: -80, startRotate: -18, startScale: 0.5, restX: -12, restY: 8, restRotate: -3 },
  // Client 0 - After (desktop: from far right)
  { startX: 320, startY: -60, startRotate: 15, startScale: 0.5, restX: 8, restY: -6, restRotate: 2 },
  // Client 1 - Before (desktop: from far left-bottom)
  { startX: -280, startY: 100, startRotate: -12, startScale: 0.5, restX: -8, restY: 12, restRotate: -2 },
  // Client 1 - After (desktop: from far right-top)
  { startX: 300, startY: -100, startRotate: 20, startScale: 0.5, restX: 14, restY: -4, restRotate: 3 },
  // Client 2 - Before (desktop: from far left-top)
  { startX: -350, startY: -120, startRotate: -22, startScale: 0.5, restX: -6, restY: -10, restRotate: -1.5 },
  // Client 2 - After (desktop: from far right-bottom)
  { startX: 280, startY: 80, startRotate: 14, startScale: 0.5, restX: 10, restY: 8, restRotate: 2.5 },
  // Client 3 - Before (desktop: from far left)
  { startX: -300, startY: 60, startRotate: -16, startScale: 0.5, restX: -10, restY: 6, restRotate: -2.5 },
  // Client 3 - After (desktop: from far right)
  { startX: 340, startY: -40, startRotate: 18, startScale: 0.5, restX: 6, restY: -8, restRotate: 1.5 },
];

/* ─── Main Component ─── */
export function TransformationGallery({ clients }: TransformationGalleryProps) {
  return (
    <section className="tg-section">
      {/* Header */}
      <div className="tg-header">
        <p className="tg-label">Real Results</p>
        <h2 className="tg-title">
          CLIENT <span>TRANSFORMATIONS</span>
        </h2>
        <p className="tg-subtitle">
          Real members. Real progress. No filters, no shortcuts.
        </p>
      </div>

      {/* Each client row */}
      {clients.map((client, i) => (
        <ScatteredPair key={client.name} client={client} index={i} />
      ))}
    </section>
  );
}

/* ─── Scattered Before/After Pair ─── */
function ScatteredPair({
  client,
  index,
}: {
  client: TransformationClient;
  index: number;
}) {
  const pairRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = pairRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;

    // progress 0 → 1 as element enters viewport
    // Then 1 → 2 as it scrolls through and exits top
    const enterProgress = (vh - rect.top) / (vh * 0.6);
    const exitProgress = (-rect.bottom) / (vh * 0.4);

    if (rect.bottom < 0) {
      // Exited top — fly out
      setScrollProgress(1 + clamp(exitProgress + 1, 0, 1));
    } else {
      // Entering or in viewport
      setScrollProgress(clamp(enterProgress, 0, 1));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const beforeCfg = scatterConfigs[(index * 2) % scatterConfigs.length];
  const afterCfg = scatterConfigs[(index * 2 + 1) % scatterConfigs.length];

  // Phase 1: fly in (progress 0→1), Phase 2: fly out (progress 1→2)
  const enterT = smoothstep(clamp(scrollProgress, 0, 1));
  const exitT = smoothstep(clamp(scrollProgress - 1, 0, 1));

  function getTransform(cfg: ScatterConfig, isExit: boolean) {
    if (isExit) {
      // Fly out: from rest to a mirrored/exaggerated exit
      const x = lerp(cfg.restX, -cfg.startX * 0.7, exitT);
      const y = lerp(cfg.restY, -cfg.startY * 0.7, exitT);
      const r = lerp(cfg.restRotate, -cfg.startRotate * 0.8, exitT);
      const s = lerp(1, cfg.startScale, exitT);
      const o = lerp(1, 0, exitT);
      return { transform: `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`, opacity: o };
    }
    // Fly in: from start to rest
    const x = lerp(cfg.startX, cfg.restX, enterT);
    const y = lerp(cfg.startY, cfg.restY, enterT);
    const r = lerp(cfg.startRotate, cfg.restRotate, enterT);
    const s = lerp(cfg.startScale, 1, enterT);
    const o = lerp(0, 1, clamp(enterT * 2, 0, 1));
    return { transform: `translate(${x}px, ${y}px) rotate(${r}deg) scale(${s})`, opacity: o };
  }

  const isExiting = scrollProgress > 1;
  const beforeStyle = getTransform(beforeCfg, isExiting);
  const afterStyle = getTransform(afterCfg, isExiting);

  // Info bar fades in after cards settle
  const infoT = clamp((enterT - 0.6) * 3, 0, 1);
  const infoOpacity = isExiting ? lerp(1, 0, exitT) : infoT;
  const infoY = isExiting ? lerp(0, -30, exitT) : lerp(20, 0, infoT);

  return (
    <div ref={pairRef} className="tg-pair">
      {/* Client name + stats */}
      <div
        className="tg-pair-info"
        style={{ opacity: infoOpacity, transform: `translateY(${infoY}px)` }}
      >
        <h3 className="tg-pair-name">{client.name}</h3>
        <div className="tg-pair-meta">
          <span className="tg-pair-duration">{client.duration}</span>
          <span
            className="tg-pair-change"
            style={{
              color: client.change.includes("Increased") ? "#22c55e" : "#ef4444",
            }}
          >
            {client.change}
          </span>
        </div>
      </div>

      {/* Cards — Before FIRST (left), After SECOND (right) */}
      <div className="tg-pair-cards">
        {/* BEFORE card — always left */}
        <div className="tg-card" style={beforeStyle}>
          <div className="tg-card-inner">
            <img src={client.beforeImg} alt={`${client.name} before`} loading="lazy" />
            <div className="tg-card-gradient" />
            <span className="tg-card-tag tg-card-tag--before">Before</span>
            <div className="tg-card-stat">
              <span className="tg-card-stat-label">Weight</span>
              <span className="tg-card-stat-value">{client.before.weight}</span>
            </div>
          </div>
        </div>

        {/* Arrow divider */}
        <div
          className="tg-arrow"
          style={{
            opacity: isExiting ? lerp(1, 0, exitT) : lerp(0, 1, clamp((enterT - 0.7) * 4, 0, 1)),
            transform: `scale(${isExiting ? lerp(1, 0.3, exitT) : lerp(0.3, 1, clamp((enterT - 0.6) * 4, 0, 1))})`,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>

        {/* AFTER card — always right */}
        <div className="tg-card" style={afterStyle}>
          <div className="tg-card-inner">
            <img src={client.afterImg} alt={`${client.name} after`} loading="lazy" />
            <div className="tg-card-gradient" />
            <span className="tg-card-tag tg-card-tag--after">After</span>
            <div className="tg-card-stat">
              <span className="tg-card-stat-label">Weight</span>
              <span className="tg-card-stat-value">{client.after.weight}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
