import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  ShieldCheck, CheckCircle2, Flame, Award, Dumbbell,
  Sparkles, ArrowRight, UserCheck, Clock, Download, QrCode
} from 'lucide-react';
import Button from '../components/Button';
import { membershipPlans } from '../data/plans';

export default function Join() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get('plan') || 'pro';
  const billingParam = searchParams.get('billing') || 'monthly';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: 'male',
    fitnessGoal: 'Muscle Building',
    selectedPlan: planParam,
    billingCycle: billingParam,
    preferredTime: 'Morning (6:00 AM - 9:00 AM)',
    agreement: true
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [memberId, setMemberId] = useState('');

  useEffect(() => {
    if (planParam) {
      setFormData((prev) => ({ ...prev, selectedPlan: planParam }));
    }
  }, [planParam]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.age || parseInt(formData.age) < 14) errs.age = 'Age must be at least 14';
    if (!formData.agreement) errs.agreement = 'You must agree to gym guidelines';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const randomId = 'IF-' + Math.floor(100000 + Math.random() * 900000);
    setMemberId(randomId);
    setIsSuccess(true);

    // Trigger celebratory confetti effect
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF4500', '#FF8C00', '#FFFFFF', '#00FF87']
    });
  };

  const currentPlan = membershipPlans.find((p) => p.id === formData.selectedPlan) || membershipPlans[1];

  return (
    <div className="pt-24 min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-3 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5" />
            <span>Join The Spartan Brotherhood</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Start Your <span className="text-gradient-orange">Transformation</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Fill out your details below to activate your Spartans Gym membership. Get instant gym access and your first fitness assessment.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {isSuccess ? (
          /* SUCCESS SCREEN & DIGITAL PASS */
          <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border-2 border-orange-500 shadow-2xl shadow-orange-600/30 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white mx-auto shadow-xl shadow-orange-600/40">
              <Sparkles className="w-10 h-10" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-green-950 text-green-400 border border-green-800">
                Membership Activated Successfully!
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-heading mt-3">
                Welcome To Spartans Gym, {formData.name}!
              </h2>
              <p className="text-sm text-zinc-300 mt-2">
                Your registration has been confirmed. A confirmation receipt and your mobile gym pass have been sent to <strong className="text-orange-400">{formData.email}</strong>.
              </p>
            </div>

            {/* Digital Membership ID Card */}
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-orange-500/50 p-6 text-left relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-white font-heading uppercase">SPARTANS<span className="text-orange-500">GYM</span></h3>
                  <p className="text-[10px] uppercase font-bold text-zinc-400">Official Membership ID</p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-0.5 rounded text-xs font-black uppercase bg-orange-600 text-white">
                    {currentPlan.name} Tier
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-zinc-500 uppercase font-bold text-[10px]">Member Name</p>
                  <p className="text-zinc-100 font-extrabold text-sm">{formData.name}</p>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase font-bold text-[10px]">Member ID</p>
                  <p className="text-orange-400 font-mono font-bold text-sm">{memberId}</p>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase font-bold text-[10px]">Goal</p>
                  <p className="text-zinc-200 font-semibold">{formData.fitnessGoal}</p>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase font-bold text-[10px]">Preferred Slot</p>
                  <p className="text-zinc-200 font-semibold">{formData.preferredTime}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-green-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 14-Day Guarantee Active
                </span>
                <span className="font-mono">VALID: 2026 - 2027</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button to="/" variant="glow" size="md" className="flex-1">
                Return To Home
              </Button>
              <Button to="/classes" variant="outline" size="md" className="flex-1">
                Browse Class Schedule
              </Button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-8">
              <div className="glass-card rounded-3xl p-6 sm:p-10 border border-zinc-800">
                <h2 className="text-2xl font-black text-white uppercase font-heading mb-2">
                  Member Registration
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mb-8">
                  Step 1 of 1: Fill out your basic details and fitness profile.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Select Membership Tier */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-3">
                      Select Membership Plan *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {membershipPlans.map((plan) => (
                        <button
                          type="button"
                          key={plan.id}
                          onClick={() => setFormData({ ...formData, selectedPlan: plan.id })}
                          className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                            formData.selectedPlan === plan.id
                              ? 'bg-orange-600/20 border-orange-500 shadow-md shadow-orange-600/20'
                              : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          <p className="text-sm font-black text-white uppercase font-heading">{plan.name}</p>
                          <p className="text-lg font-black text-orange-400 font-heading mt-1">
                            ₹{plan.monthlyPrice}<span className="text-[10px] text-zinc-400 font-sans">/mo</span>
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rohan Sharma"
                        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                          errors.name ? 'border-red-500' : 'border-zinc-700 focus:border-orange-500'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rohan@example.com"
                        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-zinc-700 focus:border-orange-500'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone, Age & Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                          errors.phone ? 'border-red-500' : 'border-zinc-700 focus:border-orange-500'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Age *
                      </label>
                      <input
                        type="number"
                        min="14"
                        max="99"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 25"
                        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                          errors.age ? 'border-red-500' : 'border-zinc-700 focus:border-orange-500'
                        }`}
                      />
                      {errors.age && <p className="text-xs text-red-400 mt-1">{errors.age}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other / Non-Binary</option>
                      </select>
                    </div>
                  </div>

                  {/* Goal & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="Muscle Building">Muscle Building & Hypertrophy</option>
                        <option value="Weight Loss & Shred">Weight Loss & Shred</option>
                        <option value="Max Strength & Powerlifting">Max Strength & Powerlifting</option>
                        <option value="Functional / CrossFit">Functional Athletics & CrossFit</option>
                        <option value="Cardio & Heart Health">Cardio Endurance & Health</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Preferred Training Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="Early Morning (5:00 AM - 7:30 AM)">Early Morning (5:00 AM - 7:30 AM)</option>
                        <option value="Morning (7:30 AM - 10:30 AM)">Morning (7:30 AM - 10:30 AM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening Peak (5:30 PM - 8:30 PM)">Evening Peak (5:30 PM - 8:30 PM)</option>
                        <option value="Night (8:30 PM - 11:00 PM)">Night (8:30 PM - 11:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Terms agreement checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.agreement}
                        onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                        className="w-4 h-4 mt-0.5 rounded bg-zinc-900 border-zinc-700 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-xs text-zinc-400 leading-snug">
                        I agree to the Spartans Gym facility safety guidelines, code of conduct, and 14-day refund policy terms.
                      </span>
                    </label>
                    {errors.agreement && <p className="text-xs text-red-400 mt-1">{errors.agreement}</p>}
                  </div>

                  <Button type="submit" variant="glow" size="xl" className="w-full" icon={ArrowRight}>
                    Start My Fitness Journey
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Summary Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 sticky top-28 space-y-6">
                <h3 className="text-lg font-black text-white uppercase font-heading border-b border-zinc-800 pb-3">
                  Membership Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-400 uppercase font-bold">Selected Tier</span>
                    <span className="text-sm font-black text-orange-400 uppercase">{currentPlan.name}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-400 uppercase font-bold">Rate</span>
                    <span className="text-lg font-black text-white font-heading">
                      ₹{currentPlan.monthlyPrice} <span className="text-xs text-zinc-400 font-sans">/mo</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-400 uppercase font-bold">Enrollment Fee</span>
                    <span className="text-xs font-black text-green-400 uppercase">FREE (₹0)</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-400 uppercase font-bold">InBody Assessment</span>
                    <span className="text-xs font-black text-green-400 uppercase">INCLUDED</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-orange-500" />
                    <span>14-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    <span>Free Locker & Shower Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Open 7 Days a Week</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}
