import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Dumbbell, BarChart2, Calendar } from 'lucide-react';

// High‑quality unsplash images (you can replace with your own URLs)
const SLIDES = [
  {
    title: 'Elite Dumbbell',
    description: 'Premium knurled dumbbells for maximal strength gains.',
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=1800&auto=format&fit=crop',
    icon: <Dumbbell className="w-6 h-6 text-orange-500" />,
  },
  {
    title: 'Olympic Barbell',
    description: 'Zero‑slip needle‑bearing barbell, built for heavy lifts.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1800&auto=format&fit=crop',
    icon: <Barbell className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: 'Heavy Kettlebell',
    description: 'Cast‑iron kettlebell with ergonomic grip for explosive movements.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1800&auto=format&fit=crop',
    icon: <BarChart2 className="w-6 h-6 text-pink-500" />,
  },
  {
    title: 'Incline Bench',
    description: 'Carbon‑fiber upholstered bench with adjustable incline.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1800&auto=format&fit=crop',
    icon: <Calendar className="w-6 h-6 text-green-500" />,
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax – normalize to -1..1 range
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 .. 1
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  const navPrev = () => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length);
  const navNext = () => setActive((a) => (a + 1) % SLIDES.length);

  // Compute a subtle 3D tilt based on mouse position
  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * -5}deg)`,
  } as React.CSSProperties;

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[90vh] overflow-hidden bg-neutral-950 text-white font-sans"
    >
      {/* Background image with parallax depth */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${SLIDES[active].image})`, ...tiltStyle }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Dim overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating UI card */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto top-1/4 bg-neutral-900/60 backdrop-blur-md border border-neutral-700 rounded-xl p-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, scale: 1.02 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={tiltStyle}
      >
        <div className="flex justify-center mb-4">{SLIDES[active].icon}</div>
        <h2 className="font-display text-4xl sm:text-5xl uppercase mb-3 text-white drop-shadow-glow">
          {SLIDES[active].title}
        </h2>
        <p className="text-neutral-300 text-lg sm:text-xl mb-6 max-w-xl mx-auto">
          {SLIDES[active].description}
        </p>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={navPrev}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={navNext}
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.div>

      {/* Small progress indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm font-medium text-neutral-400 z-10">
        <span>{`0${active + 1}`}</span>
        <span>/</span>
        <span>{`0${SLIDES.length}`}</span>
      </div>
    </section>
  );
}
