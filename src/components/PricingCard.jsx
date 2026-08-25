import React from 'react';
import { Check, X, Sparkles, ChevronRight } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, isAnnual = false }) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const isPopular = plan.popular;

  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
        isPopular
          ? 'bg-gradient-to-b from-[#1c140e] via-[#121212] to-[#0d0d0d] border-2 border-orange-500 shadow-2xl shadow-orange-600/20 glow-orange'
          : 'glass-card border border-zinc-800 hover:border-zinc-700 shadow-xl'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-600/50 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          <span>{plan.badge || 'MOST POPULAR'}</span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="border-b border-zinc-800/80 pb-6 mb-6">
          <h3 className="text-2xl font-black text-white font-heading uppercase">
            {plan.name}
          </h3>
          <p className="text-xs text-zinc-400 font-medium mt-1 min-h-[32px]">
            {plan.tagline}
          </p>

          {/* Pricing Display */}
          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
              ₹{price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm font-semibold text-zinc-400">
              /month
            </span>
          </div>

          {isAnnual && (
            <p className="text-[11px] text-orange-400 font-bold uppercase tracking-wider mt-1.5">
              Billed annually (Save 20%)
            </p>
          )}
        </div>

        {/* Feature List */}
        <div className="space-y-3.5 mb-8">
          <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-300">
            What's included:
          </p>
          {plan.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
              <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 border border-orange-500/30">
                <Check className="w-3 h-3" />
              </div>
              <span className="leading-snug">{feat}</span>
            </div>
          ))}

          {plan.notIncluded && plan.notIncluded.length > 0 && (
            <div className="pt-2 space-y-2.5 opacity-40">
              {plan.notIncluded.map((notFeat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-zinc-500 line-through">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5" />
                  </div>
                  <span>{notFeat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4 border-t border-zinc-800/80">
        <Button
          to={`${plan.ctaLink}&billing=${isAnnual ? 'annual' : 'monthly'}`}
          variant={isPopular ? 'glow' : 'secondary'}
          size="lg"
          className="w-full"
          icon={ChevronRight}
        >
          {plan.ctaText}
        </Button>
      </div>
    </div>
  );
}
