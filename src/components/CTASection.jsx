import React from 'react';
import { ChevronRight, ShieldCheck, Flame, Users, Sparkles } from 'lucide-react';
import Button from './Button';

export default function CTASection({
  title = "Your Stronger Self Starts Today.",
  subtitle = "Stop waiting for the perfect time. Start building the body and mindset you deserve with world-class facilities and expert coaching.",
  showTrial = true
}) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background with dark overlay & gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
          alt="Gym Training Atmosphere"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-orange-950/20 mix-blend-color-dodge pointer-events-none"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-600/90 text-white shadow-xl shadow-orange-600/40 mb-6">
          <Flame className="w-3.5 h-3.5 animate-pulse" />
          <span>Limited New Member Special • No Lock-in Contracts</span>
        </div>

        {/* Big Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight mb-6">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button to="/join" variant="glow" size="xl" icon={ChevronRight}>
            Join Now
          </Button>
          {showTrial && (
            <Button to="/free-trial" variant="outline" size="xl">
              Book Free Trial
            </Button>
          )}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-10 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-zinc-400 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-zinc-200">100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-zinc-200">Clean & Modern Facilities</span>
          </div>
          <div className="flex items-center justify-center gap-2 col-span-2 sm:col-span-1">
            <Users className="w-4 h-4 text-orange-500" />
            <span className="font-bold text-zinc-200">5,000+ Active Members</span>
          </div>
        </div>

      </div>
    </section>
  );
}
