import React from 'react';
import HeroCarousel from './HeroCarousel';
import { Dumbbell, Trophy, Users, Zap, ArrowRight, Activity, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* 3D Animation Hero Section as requested */}
      <HeroCarousel />

      {/* Gym Section: Futuristic & Premium */}
      <section id="discover" className="relative py-24 sm:py-32 bg-neutral-950 overflow-hidden">
        {/* Abstract glowing accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3">Redefine Your Limits</h2>
            <h3 className="font-display text-5xl sm:text-7xl uppercase tracking-tight mb-6">Enter The Future Of Fitness</h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Experience a premium workout environment designed to push you beyond your limits.
              State-of-the-art equipment, immersive aesthetics, and elite coaching await.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-24">
            <div className="relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 transition-colors hover:border-neutral-700">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                  alt="Premium Gym Weights"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                  <Dumbbell className="text-orange-400 w-6 h-6" />
                </div>
                <h4 className="font-display text-3xl uppercase mb-2">Elite Equipment</h4>
                <p className="text-neutral-300 text-sm max-w-sm">Train with the most advanced gear designed for optimal performance and biomechanics.</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 transition-colors hover:border-neutral-700">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop"
                  alt="Gym Floor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                  <Activity className="text-blue-400 w-6 h-6" />
                </div>
                <h4 className="font-display text-3xl uppercase mb-2">Immersive Zones</h4>
                <p className="text-neutral-300 text-sm max-w-sm">From heavy lifting to HIIT, our dedicated zones feature mood-enhancing cinematic lighting.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Expert Coaches', desc: 'Personalized training plans.' },
              { icon: Zap, title: 'High Energy', desc: 'Motivating atmosphere.' },
              { icon: Calendar, title: 'Flexible Access', desc: 'Open 24/7 for your convenience.' },
              { icon: Trophy, title: 'Results Driven', desc: 'Achieve your dream physique.' },
            ].map((Feature, idx) => (
              <div key={idx} className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 p-6 rounded-2xl hover:bg-neutral-800/80 transition-colors">
                <Feature.icon className="w-8 h-8 text-neutral-400 mb-4" />
                <h5 className="text-lg font-bold mb-2">{Feature.title}</h5>
                <p className="text-neutral-500 text-sm">{Feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Futuristic CTA */}
      <section className="py-24 relative overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 bg-orange-600/5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-5xl sm:text-7xl uppercase mb-8 text-shadow-glow">
            Join The <span className="text-orange-500">Revolution</span>
          </h2>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-widest bg-orange-600 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center gap-2">
              Start Membership <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12 text-center text-neutral-500 text-sm">
        <p className="uppercase tracking-widest font-semibold">&copy; {new Date().getFullYear()} GymHub Elite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
