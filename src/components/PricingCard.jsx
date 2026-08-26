import React from 'react';
import { Check, X, Sparkles, ChevronRight } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, isAnnual = false }) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const isPopular = plan.popular;

  return (
    <div
      className={`relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 ${
        isPopular
          ? 'bg-gradient-to-b from-yellow-50/60 via-white to-white border-2 border-yellow-400 shadow-2xl shadow-yellow-500/20'
          : 'bg-white border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl'
      }`}
    >
      {/* Popular Badge (Yellow & Black) */}
      {isPopular && (
        <div className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-md shadow-yellow-500/40 flex items-center gap-1 sm:gap-1.5 border border-yellow-200 whitespace-nowrap">
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
          <span>{plan.badge || 'MOST POPULAR'}</span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="border-b border-slate-100 pb-4 sm:pb-6 mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-heading uppercase">
            {plan.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 min-h-[28px] sm:min-h-[32px]">
            {plan.tagline}
          </p>

          {/* Pricing Display */}
          <div className="mt-3 sm:mt-5 flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
              ₹{price.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] sm:text-sm font-semibold text-slate-500">
              /month
            </span>
          </div>

          {isAnnual && (
            <p className="text-[10px] sm:text-[11px] text-yellow-600 font-bold uppercase tracking-wider mt-1 sm:mt-1.5">
              Billed annually (Save 20%)
            </p>
          )}
        </div>

        {/* Feature List */}
        <div className="space-y-2.5 sm:space-y-3.5 mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-900">
            What's included:
          </p>
          {plan.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-400/20 text-yellow-800 flex items-center justify-center shrink-0 mt-0.5 border border-yellow-400/40">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-700 font-black" />
              </div>
              <span className="leading-snug">{feat}</span>
            </div>
          ))}

          {plan.notIncluded && plan.notIncluded.length > 0 && (
            <div className="pt-2 space-y-2.5 opacity-50">
              {plan.notIncluded.map((notFeat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-400 line-through">
                  <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
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
      <div className="pt-4 border-t border-slate-100">
        <Button
          to={`${plan.ctaLink}&billing=${isAnnual ? 'annual' : 'monthly'}`}
          variant={isPopular ? 'primary' : 'secondary'}
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
