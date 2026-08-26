import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Dumbbell, Flame, Sparkles, ChevronRight, Lock, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { membershipPlans } from '../data/plans';

export default function Join() {
  const [searchParams] = useSearchParams();
  const planQuery = searchParams.get('plan') || 'pro';
  const billingQuery = searchParams.get('billing') || 'monthly';

  const [formData, setFormData] = useState({
    selectedPlan: planQuery,
    billingCycle: billingQuery,
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: 'male',
    emergencyContact: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [memberId, setMemberId] = useState('');

  // Sync plan if query changes
  useEffect(() => {
    if (planQuery) {
      setFormData(prev => ({ ...prev, selectedPlan: planQuery }));
    }
  }, [planQuery]);

  const activePlanObj = membershipPlans.find(p => p.id === formData.selectedPlan) || membershipPlans[1];
  const isAnnual = formData.billingCycle === 'annual';
  const currentPrice = isAnnual ? activePlanObj.annualPrice : activePlanObj.monthlyPrice;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit Phone is required';
    if (!formData.age || formData.age < 14) errs.age = 'Must be at least 14 years old';
    if (!formData.agreedToTerms) errs.terms = 'You must agree to membership terms & facility safety guidelines';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // Generate unique member pass ID
    const randomId = 'SPARTAN-' + Math.floor(100000 + Math.random() * 900000);
    setMemberId(randomId);
    setIsSuccess(true);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900">
      
      {/* Header */}
      <section className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-center overflow-hidden border-b border-slate-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 mb-3 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-yellow-400" />
            <span>Instant Membership Pass</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Join The <span className="text-gradient-yellow">Spartans Gym</span>
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 max-w-xl mx-auto">
            Complete your quick enrollment to activate your digital gym access barcode and schedule your complimentary onboarding assessment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {isSuccess ? (
          /* Success Screen */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-yellow-400 shadow-2xl text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 mx-auto shadow-xl shadow-yellow-500/40 font-black">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-600">
                Welcome To The Brotherhood
              </span>
              <h2 className="text-3xl font-black text-slate-900 font-heading uppercase">
                Registration Confirmed!
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your registration has been confirmed. A confirmation receipt and your mobile gym pass have been sent to <strong className="text-slate-900">{formData.email}</strong>.
              </p>
            </div>

            {/* Digital Membership Pass Card (Sleek Dark Badge Card) */}
            <div className="rounded-3xl bg-slate-950 text-white border border-yellow-400/50 p-6 text-left relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-white font-heading uppercase">SPARTANS<span className="text-yellow-400">GYM</span></h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Official Member Pass</p>
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded text-xs font-black uppercase bg-yellow-400 text-slate-950">
                    {activePlanObj.name}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-400 uppercase text-[10px]">Member Name</p>
                  <p className="text-white font-bold text-sm">{formData.name}</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase text-[10px]">Membership ID</p>
                  <p className="text-yellow-400 font-mono font-bold text-sm">{memberId}</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase text-[10px]">Facility Location</p>
                  <p className="text-slate-300 font-medium">Chanod Colony, Vapi</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase text-[10px]">Status</p>
                  <p className="text-emerald-400 font-bold">Active VIP</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/" variant="primary" size="md">
                Back To Homepage
              </Button>
              <Button to="/classes" variant="secondary" size="md">
                View Class Timetable
              </Button>
            </div>
          </div>
        ) : (
          /* Enrollment Form & Order Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg space-y-8">
              
              {/* Step 1: Select Plan */}
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase font-heading flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-yellow-400 text-slate-950 text-xs font-black flex items-center justify-center">1</span>
                  Select Membership Tier
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  {membershipPlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedPlan: plan.id })}
                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                        formData.selectedPlan === plan.id
                          ? 'bg-yellow-50 border-2 border-yellow-400 shadow-md shadow-yellow-500/10'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <p className="text-xs font-black uppercase text-slate-900 truncate">{plan.name}</p>
                      <p className="text-lg font-black text-yellow-600 font-heading mt-1">
                        ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </p>
                      <p className="text-[10px] text-slate-500">/mo</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Personal Details */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-base font-black text-slate-900 uppercase font-heading flex items-center gap-2 mb-4 pt-4 border-t border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-yellow-400 text-slate-950 text-xs font-black flex items-center justify-center">2</span>
                  Member Information
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-slate-200 focus:border-yellow-400'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-slate-200 focus:border-yellow-400'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 88663 38858"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-yellow-400'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Age (Years) *
                    </label>
                    <input
                      type="number"
                      min="14"
                      max="90"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 24"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none ${
                        errors.age ? 'border-red-500' : 'border-slate-200 focus:border-yellow-400'
                      }`}
                    />
                    {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-yellow-400 font-medium"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-700 leading-relaxed">
                    <input
                      type="checkbox"
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-300 text-yellow-600 focus:ring-yellow-500 mt-0.5"
                    />
                    <span>
                      I agree to the Spartans Gym member agreement, safety guidelines, and 14-day refund policy.
                    </span>
                  </label>
                  {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-4" icon={ChevronRight}>
                  Complete Enrollment & Issue Pass
                </Button>
              </form>

            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              <h3 className="text-lg font-black text-slate-900 uppercase font-heading border-b border-slate-100 pb-4">
                Membership Summary
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Selected Tier:</span>
                  <strong className="text-slate-900 uppercase">{activePlanObj.name}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Billing Cycle:</span>
                  <span className="text-slate-900 font-semibold capitalize">{formData.billingCycle}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Initiation / Joining Fee:</span>
                  <span className="text-emerald-600 font-bold">FREE (₹0)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>InBody Assessment:</span>
                  <span className="text-emerald-600 font-bold">INCLUDED</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <p className="text-xs text-slate-500">Total Due Today:</p>
                  <p className="text-3xl font-black text-slate-900 font-heading">
                    ₹{currentPrice.toLocaleString('en-IN')}
                  </p>
                </div>
                <span className="text-xs text-yellow-600 font-bold">
                  {isAnnual ? 'Billed Annually' : 'Billed Monthly'}
                </span>
              </div>

              {/* Safety Badges */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-yellow-600" />
                  <span>14-Day 100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-yellow-600" />
                  <span>Instant digital pass issued immediately</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}
