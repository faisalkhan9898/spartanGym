import React, { useState } from 'react';
import { Check, X, ShieldCheck, HelpCircle, Sparkles, Flame, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { membershipPlans, planFeaturesMatrix } from '../data/plans';

export default function Membership() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="pt-24">
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment in Yourself</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Flexible <span className="text-gradient-orange">Membership Plans</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            No long-term lock-in traps. No hidden signup fees. Choose the tier that matches your dedication level and upgrade or pause anytime.
          </p>
        </div>
      </section>


      {/* Pricing Cards Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Annual / Monthly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-bold uppercase tracking-wider ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 rounded-full bg-zinc-800 border border-zinc-700 p-1 flex items-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Annual Billing"
          >
            <div
              className={`w-6 h-6 rounded-full bg-orange-500 shadow-md transform transition-transform duration-300 ${
                isAnnual ? 'translate-x-8 bg-gradient-to-r from-orange-500 to-red-500' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold uppercase tracking-wider ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Annual Commitment
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white">
              Save 20%
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {membershipPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

      </section>


      {/* Full Feature Comparison Matrix */}
      <section className="py-16 bg-[#0e0e0e] border-y border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            badge="Detailed Comparison"
            title="Full Plan"
            highlight="Feature Matrix"
            description="A line-by-line breakdown of everything included in each tier."
          />

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 glass-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-black/60 text-xs font-black uppercase tracking-wider text-zinc-300 border-b border-zinc-800">
                <tr>
                  <th className="p-4 sm:p-5">Feature & Privilege</th>
                  <th className="p-4 sm:p-5 text-center">Basic (₹999)</th>
                  <th className="p-4 sm:p-5 text-center text-orange-400">Pro (₹1,999)</th>
                  <th className="p-4 sm:p-5 text-center">Elite VIP (₹3,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {planFeaturesMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="p-4 sm:p-5 text-zinc-200 font-semibold">{row.feature}</td>
                    
                    {/* Basic */}
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <Check className="w-5 h-5 text-orange-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-bold text-zinc-400">{row.basic}</span>
                      )}
                    </td>

                    {/* Pro */}
                    <td className="p-4 sm:p-5 text-center bg-orange-500/5">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <Check className="w-5 h-5 text-orange-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-black text-orange-400">{row.pro}</span>
                      )}
                    </td>

                    {/* Elite */}
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? (
                          <Check className="w-5 h-5 text-orange-500 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs font-black text-amber-400">{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* Satisfaction Guarantee */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-zinc-800 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-orange-600/20 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white uppercase font-heading">
              14-Day 100% Ironclad Money-Back Guarantee
            </h3>
            <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
              If you aren't completely thrilled with the facility quality, trainer attentiveness, and cleanliness within your first 14 days, we will refund 100% of your membership fee without awkward questions.
            </p>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-zinc-950 border-t border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Common Questions"
            title="Membership"
            highlight="FAQs"
            description="Got questions about billing, cancellation, guest passes, or membership freezing?"
          />
          <FAQ limit={5} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
