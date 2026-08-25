import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Dumbbell, Calendar, Clock, MapPin, ChevronRight, User } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function FreeTrial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    timeSlot: 'Morning (6 AM - 10 AM)',
    experienceLevel: 'Beginner',
    fitnessGoal: 'Build Muscle',
    agreedToWaiver: false
  });

  const [errors, setErrors] = useState({});
  const [isBooked, setIsBooked] = useState(false);
  const [passNumber, setPassNumber] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit Phone is required';
    if (!formData.preferredDate) errs.date = 'Please pick a trial date';
    if (!formData.agreedToWaiver) errs.waiver = 'Please agree to facility trial terms';
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
    const randomPass = 'VIP-PASS-' + Math.floor(100000 + Math.random() * 900000);
    setPassNumber(randomPass);
    setIsBooked(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>100% Free VIP Guest Pass</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Claim Your <span className="text-gradient-yellow">1-Day Free Trial</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl mx-auto">
            Experience the Olympic grade facility, try out our coach-led group classes, and receive a free InBody composition analysis.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {isBooked ? (
          /* Confirmation Pass Screen */
          <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border-2 border-yellow-400 shadow-2xl shadow-yellow-500/30 text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black mx-auto shadow-xl shadow-yellow-500/40 font-black">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-400">
                VIP Trial Pass Activated
              </span>
              <h2 className="text-3xl font-black text-white font-heading uppercase">
                You're Ready To Train!
              </h2>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                We have reserved your spot for <strong className="text-white">{formData.preferredDate}</strong> ({formData.timeSlot}). An SMS and email pass has been sent to <strong className="text-yellow-400">{formData.phone}</strong>.
              </p>
            </div>

            {/* VIP Pass Mockup */}
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-yellow-400/60 p-6 text-left relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-white font-heading uppercase">SPARTANS<span className="text-yellow-400">GYM</span></h3>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">1-Day VIP Access Pass</p>
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded text-xs font-black uppercase bg-yellow-400 text-black">
                    FREE GUEST
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-zinc-400 uppercase text-[10px]">Guest Name</p>
                  <p className="text-white font-bold text-sm">{formData.name}</p>
                </div>
                <div>
                  <p className="text-zinc-400 uppercase text-[10px]">Pass Code</p>
                  <p className="text-yellow-400 font-mono font-bold text-sm">{passNumber}</p>
                </div>
                <div>
                  <p className="text-zinc-400 uppercase text-[10px]">Date & Slot</p>
                  <p className="text-zinc-300 font-medium">{formData.preferredDate} ({formData.timeSlot})</p>
                </div>
                <div>
                  <p className="text-zinc-400 uppercase text-[10px]">Location</p>
                  <p className="text-zinc-300 font-medium">Chanod Colony, Vapi</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/" variant="primary" size="md">
                Return To Homepage
              </Button>
              <Button to="/classes" variant="secondary" size="md">
                Browse Classes
              </Button>
            </div>
          </div>
        ) : (
          /* Booking Form & What to Expect */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 border border-zinc-800 space-y-6">
              <div>
                <h3 className="text-xl font-black text-white uppercase font-heading">
                  Claim Your Free Pass
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill in your details below to activate your pass immediately. No credit card required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aman Patel"
                    className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-zinc-700 focus:border-yellow-400'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aman@example.com"
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-zinc-700 focus:border-yellow-400'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 88663 38858"
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-zinc-700 focus:border-yellow-400'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Preferred Trial Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                        errors.date ? 'border-red-500' : 'border-zinc-700 focus:border-yellow-400'
                      }`}
                    />
                    {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 font-medium"
                    >
                      <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                      <option value="Mid-day (10 AM - 4 PM)">Mid-day (10 AM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                      <option value="Night (8 PM - 11 PM)">Night (8 PM - 11 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Waiver */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-zinc-300 leading-relaxed">
                    <input
                      type="checkbox"
                      checked={formData.agreedToWaiver}
                      onChange={(e) => setFormData({ ...formData, agreedToWaiver: e.target.checked })}
                      className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-yellow-400 focus:ring-yellow-400 mt-0.5"
                    />
                    <span>
                      I confirm I am at least 18 years old (or accompanied by guardian) and agree to standard gym facility safety rules.
                    </span>
                  </label>
                  {errors.waiver && <p className="text-xs text-red-400 mt-1">{errors.waiver}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-4" icon={ChevronRight}>
                  Activate Free VIP Pass
                </Button>
              </form>
            </div>

            {/* What is Included Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-6">
                <h3 className="text-lg font-black text-white uppercase font-heading border-b border-zinc-800 pb-4">
                  What's Included In Your VIP Pass:
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-300 flex items-center justify-center shrink-0 border border-yellow-400/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase">Full 15,000 Sq. Ft. Arena Access</h4>
                      <p className="text-zinc-300 mt-0.5">Use Olympic lifting platforms, turf sprint lanes, and cardio suite.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-300 flex items-center justify-center shrink-0 border border-yellow-400/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase">1 Free Group Fitness Class</h4>
                      <p className="text-zinc-300 mt-0.5">Jump into any scheduled HIIT, CrossFit, Boxing, or Mobility session.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-300 flex items-center justify-center shrink-0 border border-yellow-400/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase">Complimentary InBody Scan</h4>
                      <p className="text-zinc-300 mt-0.5">Get a breakdown of muscle mass, visceral fat, and metabolic rate.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-300 flex items-center justify-center shrink-0 border border-yellow-400/40">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase">Coach Consultation</h4>
                      <p className="text-zinc-300 mt-0.5">15-minute goal setting session with a certified personal trainer.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-400 space-y-1">
                  <p>📍 Location: Chanod Colony, Vapi - 396195</p>
                  <p>📞 Phone & WhatsApp: +91 88663 38858</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}
