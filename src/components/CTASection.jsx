import React from 'react';
import { Flame, ChevronRight, ShieldCheck } from 'lucide-react';
import Button from './Button';

export default function CTASection({
  title = "Ready To Unleash Your Inner Spartan?",
  subtitle = "Join 5,000+ members who have transformed their body, mindset, and athletic performance at Spartans Gym. Claim your VIP pass today.",
  showTrial = true,
  className = ""
}) {
  return (
    <section className={`py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950 text-white border-t border-slate-800 ${className}`}>
      
      {/* Background Accent Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 backdrop-blur-md shadow-sm">
          <Flame className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span>Limited Time Introductory Offer</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/join" variant="primary" size="xl" icon={ChevronRight}>
            Claim Your Membership
          </Button>
          {showTrial && (
            <Button to="/free-trial" variant="white" size="xl">
              1-Day Free Trial Pass
            </Button>
          )}
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-semibold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-yellow-400" /> No Lock-in Contracts
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-yellow-400" /> Free Body Composition Scan
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-yellow-400" /> 14-Day Satisfaction Guarantee
          </span>
        </div>

      </div>
    </section>
  );
}
