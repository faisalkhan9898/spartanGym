import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Flame, CheckCircle2, Calendar, Clock, MapPin,
  Sparkles, ShieldCheck, QrCode, ArrowRight, UserCheck
} from 'lucide-react';
import Button from '../components/Button';

export default function FreeTrial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (7:00 AM – 10:00 AM)',
    interest: 'Full Gym Access + 1 Free Class',
    fitnessGoal: 'Fat Loss & Conditioning'
  });

  const [errors, setErrors] = useState({});
  const [passGenerated, setPassGenerated] = useState(false);
  const [passNumber, setPassNumber] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone is required';
    if (!formData.date) errs.date = 'Please pick a trial date';
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
    const randomPass = 'VIP-' + Math.floor(100000 + Math.random() * 900000);
    setPassNumber(randomPass);
    setPassGenerated(true);

    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF4500', '#FF8C00', '#FFFFFF']
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      
      {/* Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Commitment • 100% Free</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Claim Your 1-Day <span className="text-gradient-orange">VIP Guest Pass</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Test drive our Olympic grade equipment, join any live group class, and consult with our master trainers for a full day on us.
          </p>
        </div>
      </section>

      {/* Main Form & Digital Pass View */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {passGenerated ? (
          /* VIP PASS CARD */
          <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
            <div className="glass-card rounded-3xl p-8 border-2 border-orange-500 shadow-2xl relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <Flame className="w-80 h-80 text-orange-500" />
              </div>

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-5 mb-5">
                <div>
                  <h2 className="text-2xl font-black text-white uppercase font-heading">
                    SPARTANS<span className="text-orange-500">GYM</span>
                  </h2>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    VIP 1-Day All-Access Pass
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-600 text-white">
                    COMPLIMENTARY
                  </span>
                </div>
              </div>

              {/* Pass Info Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-6">
                <div>
                  <p className="text-zinc-500 font-bold uppercase text-[10px]">Guest Name</p>
                  <p className="text-white font-extrabold text-base">{formData.name}</p>
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase text-[10px]">Pass Code</p>
                  <p className="text-orange-400 font-mono font-bold text-base">{passNumber}</p>
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase text-[10px]">Valid Date</p>
                  <p className="text-zinc-200 font-bold">{formData.date}</p>
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase text-[10px]">Time Slot</p>
                  <p className="text-zinc-200 font-bold">{formData.timeSlot}</p>
                </div>
              </div>

              {/* Barcode Mockup */}
              <div className="p-4 rounded-xl bg-black border border-zinc-800 text-center space-y-2">
                <div className="flex items-center justify-center gap-1 h-12">
                  {[4,2,6,1,8,3,5,2,7,1,4,3,6,2,5,8,3,1,4,6,2,7,3,5,2,4,8,1].map((h, i) => (
                    <div
                      key={i}
                      className="bg-white h-full"
                      style={{ width: `${(i % 3) + 1.5}px` }}
                    ></div>
                  ))}
                </div>
                <p className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">{passNumber}-SPARTANS-PASS</p>
              </div>

              {/* Arrival Instructions */}
              <div className="mt-6 pt-5 border-t border-zinc-800 space-y-2 text-xs text-zinc-400">
                <p className="font-bold text-zinc-300">How to use your pass:</p>
                <p>1. Show this digital pass or mention your code <strong className="text-white">{passNumber}</strong> at the front desk.</p>
                <p>2. Bring clean indoor workout shoes and a water bottle.</p>
                <p>3. Enjoy full facility access, steam room, and your chosen class!</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/classes" variant="secondary" size="md" className="flex-1">
                View Today's Classes
              </Button>
              <Button to="/" variant="glow" size="md" className="flex-1">
                Back To Home
              </Button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-6 sm:p-10 border border-zinc-800">
                <h2 className="text-2xl font-black text-white uppercase font-heading mb-1">
                  Book Your VIP Session
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                  No credit card required. Experience why Spartans Gym is rated #1.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Sharma"
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-zinc-700 focus:border-orange-500'
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
                        placeholder="ananya@example.com"
                        className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-zinc-700 focus:border-orange-500'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Preferred Trial Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Time Window
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="Morning (6:00 AM – 9:00 AM)">Morning (6:00 AM – 9:00 AM)</option>
                        <option value="Mid-Day (11:00 AM – 3:00 PM)">Mid-Day (11:00 AM – 3:00 PM)</option>
                        <option value="Evening (5:30 PM – 8:30 PM)">Evening (5:30 PM – 8:30 PM)</option>
                        <option value="Night (8:30 PM – 10:30 PM)">Night (8:30 PM – 10:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Trial Preference
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="Full Gym Access + 1 Free Class">Full Gym Access + 1 Free Group Class</option>
                      <option value="Olympic Weightlifting & Strength Deck">Olympic Weightlifting & Strength Deck</option>
                      <option value="CrossFit & Functional Arena">CrossFit & Functional Arena</option>
                      <option value="Boxing / Kickboxing Class">Boxing / Kickboxing Class</option>
                      <option value="Trainer Consultation & Body Scan">Trainer Consultation & Body Scan</option>
                    </select>
                  </div>

                  <Button type="submit" variant="glow" size="xl" className="w-full mt-2" icon={ArrowRight}>
                    Generate Instant VIP Pass
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar Perks */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-6">
                <h3 className="text-lg font-black text-white uppercase font-heading border-b border-zinc-800 pb-3">
                  What's Included in Free Pass:
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase">All 4 Training Zones Access</p>
                      <p className="text-zinc-400 text-xs">Free weights, cardio theater, CrossFit turf & yoga studio.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase">Any 1 Group Fitness Class</p>
                      <p className="text-zinc-400 text-xs">Choose from Boxing, HIIT, Zumba, CrossFit or Yoga.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase">Complimentary InBody Scan</p>
                      <p className="text-zinc-400 text-xs">Detailed skeletal muscle mass & body fat percentage printout.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase">Lockers & Sauna Amenities</p>
                      <p className="text-zinc-400 text-xs">Hot showers, sauna access, and keyless lockers included.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-400">
                  ⚡ Valid for first-time local visitors only. No credit card or commitment required.
                </div>
              </div>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}
