import React, { useState } from 'react';
import { Check, X, Shield, Sparkles, HelpCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { membershipPlans, planFeaturesMatrix } from '../data/plans';

export default function Membership() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-3 sm:mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Clear Transparent Pricing</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Invest In Your <span className="text-gradient-yellow">Transformation</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-zinc-300">
            No lock-in contracts. Zero hidden initiation fees. Choose the tier that matches your commitment level and workout style.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 sm:w-16 h-7 sm:h-8 rounded-full bg-zinc-900 border border-zinc-700 p-1 flex items-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Annual Billing"
          >
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-400 shadow-md transform transition-transform duration-300 ${
                isAnnual ? 'translate-x-7 sm:translate-x-8 bg-gradient-to-r from-yellow-400 to-amber-500' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Annual
            </span>
            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-black">
              Save 20%
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {membershipPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </section>

      {/* Detailed Feature Comparison Table */}
      <section className="py-14 sm:py-20 bg-[#0E0E10] border-y border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="Side-by-Side Breakdown"
            title="Comprehensive Plan"
            highlight="Comparison"
            description="Review what features and amenities are included in each membership tier."
          />

          {/* Mobile card layout — visible on < sm */}
          <div className="sm:hidden space-y-3">
            {planFeaturesMatrix.map((row, idx) => (
              <div key={idx} className="rounded-xl bg-zinc-900/60 border border-zinc-800 p-3.5">
                <p className="text-[11px] font-bold text-white mb-2.5 leading-snug">{row.feature}</p>
                <div className="grid grid-cols-3 gap-2">
                  {/* Basic */}
                  <div className="text-center">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Basic</p>
                    {typeof row.basic === 'boolean' ? (
                      row.basic ? (
                        <Check className="w-4 h-4 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-[10px] text-zinc-300 font-semibold">{row.basic}</span>
                    )}
                  </div>
                  {/* Pro */}
                  <div className="text-center bg-yellow-500/5 rounded-lg py-1">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-yellow-400 mb-1">Pro</p>
                    {typeof row.pro === 'boolean' ? (
                      row.pro ? (
                        <Check className="w-4 h-4 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-[10px] font-black text-yellow-400">{row.pro}</span>
                    )}
                  </div>
                  {/* Elite */}
                  <div className="text-center">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-amber-300 mb-1">Elite</p>
                    {typeof row.elite === 'boolean' ? (
                      row.elite ? (
                        <Check className="w-4 h-4 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-[10px] font-black text-amber-300">{row.elite}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table — visible on sm+ */}
          <div className="hidden sm:block">
            <table className="w-full text-left border-collapse glass-card rounded-2xl overflow-hidden border border-zinc-800">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80 text-xs font-black uppercase tracking-wider text-white">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-center text-zinc-300">Basic (₹999)</th>
                  <th className="p-4 sm:p-5 text-center text-yellow-400">Pro (₹1,999)</th>
                  <th className="p-4 sm:p-5 text-center text-amber-300">Elite VIP (₹3,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-sm">
                {planFeaturesMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white text-xs sm:text-sm">
                      {row.feature}
                    </td>

                    {/* Basic */}
                    <td className="p-4 sm:p-5 text-center text-xs">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <Check className="w-5 h-5 text-yellow-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-zinc-300">{row.basic}</span>
                      )}
                    </td>

                    {/* Pro */}
                    <td className="p-4 sm:p-5 text-center bg-yellow-500/5 text-xs">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <Check className="w-5 h-5 text-yellow-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-black text-yellow-400">{row.pro}</span>
                      )}
                    </td>

                    {/* Elite */}
                    <td className="p-4 sm:p-5 text-center text-xs">
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? (
                          <Check className="w-5 h-5 text-yellow-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-black text-amber-300">{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee Banner */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-yellow-400/40 flex flex-col md:flex-row items-center gap-4 sm:gap-6 text-center md:text-left">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-yellow-500/15 border border-yellow-400/30 text-yellow-400 flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-xl font-black text-white uppercase font-heading">
              14-Day Risk-Free Satisfaction Guarantee
            </h3>
            <p className="text-[11px] sm:text-sm text-zinc-300 leading-relaxed">
              If you don't feel stronger, more motivated, and fully satisfied with our coaches and facility within your first 14 days, we will issue a full 100% refund.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Got Questions?"
          title="Membership"
          highlight="FAQs"
          description="Everything you need to know about pausing, billing dates, guest passes, and access hours."
        />
        <FAQ limit={5} />
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
