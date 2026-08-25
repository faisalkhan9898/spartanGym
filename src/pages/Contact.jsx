import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { InstagramIcon, WhatsappIcon } from '../components/SocialIcons';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedTrainer = searchParams.get('trainer') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    fitnessGoal: 'Muscle Building',
    membershipType: 'Pro Plan',
    message: preselectedTrainer ? `Hi, I would like to book a 1-on-1 consultation session with Coach ${preselectedTrainer}.` : ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone number is required';
    if (!formData.message.trim()) errs.message = 'Please leave a brief message or question';
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
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-4 backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>24/7 Member Support & Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Get In <span className="text-gradient-orange">Touch</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about our facilities, personal coaching, corporate partnerships, or visiting hours? Our team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Information & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-6">
              <h3 className="text-xl font-black text-white uppercase font-heading">
                Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-400/30 text-yellow-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Facility Location</h4>
                    <p className="text-zinc-300 mt-0.5 leading-relaxed">
                      Chanod Colony, Vapi, Gujarat, India - 396195
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&origin=Your%20location&destination=Chanod%20Colony,%20Vapi,%20Gujarat,%20India%20%20Vapi%20%20-%20396195%20India&travelmode=driving&dir_action=navigate"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-yellow-400 font-bold uppercase tracking-wider mt-2 hover:text-yellow-300"
                    >
                      <span>Get Directions On Google Maps →</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-400/30 text-yellow-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Direct Call & WhatsApp Desk</h4>
                    <a href="tel:+918866338858" className="text-white hover:text-yellow-400 font-bold transition-colors block mt-0.5">
                      +91 88663 38858 (088663 38858)
                    </a>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href="tel:+918866338858"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-yellow-400 text-black border border-yellow-300 text-[11px] font-black uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-sm"
                      >
                        <Phone className="w-3 h-3" /> Call Now
                      </a>
                      <a
                        href="https://wa.me/918866338858?text=Hi%20Spartans%20Gym%2C%20I%20would%20like%20to%20connect%20with%20your%20team"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-600 hover:text-white transition-all"
                      >
                        <WhatsappIcon className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-400/30 text-yellow-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Email Desk</h4>
                    <a href="mailto:hello@spartansgym.com" className="text-zinc-300 hover:text-yellow-400 transition-colors block mt-0.5">
                      hello@spartansgym.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-400/30 text-yellow-400 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs">Official Instagram</h4>
                    <a
                      href="https://www.instagram.com/spartansfitnessofficial/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-300 hover:text-yellow-400 transition-colors block mt-0.5 font-medium"
                    >
                      @spartansfitnessofficial
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-yellow-400 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Gym Operating Schedule</span>
                </div>
                <div className="space-y-2 text-xs text-zinc-300">
                  <div className="flex justify-between py-1 border-b border-zinc-800/60">
                    <span className="text-zinc-400">Monday – Saturday</span>
                    <span className="font-bold text-white">5:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-400">Sunday</span>
                    <span className="font-bold text-white">6:00 AM – 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map Card */}
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Your%20location&destination=Chanod%20Colony,%20Vapi,%20Gujarat,%20India%20%20Vapi%20%20-%20396195%20India&travelmode=driving&dir_action=navigate"
              target="_blank"
              rel="noreferrer"
              className="block glass-card rounded-2xl p-4 border border-zinc-800 hover:border-orange-500/60 transition-all overflow-hidden relative group"
            >
              <div className="h-48 w-full rounded-xl bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                {/* Map Mockup Background */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ff4500_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 text-center space-y-2 px-4">
                  <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-orange-600/50 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <p className="text-xs font-black text-white uppercase font-heading">SPARTANS GYM VAPI</p>
                  <p className="text-[11px] text-zinc-300 font-medium">Chanod Colony, Vapi, Gujarat - 396195</p>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white shadow-md">
                    Open in Google Maps ↗
                  </span>
                </div>
              </div>
            </a>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-zinc-800 relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 text-green-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase font-heading">
                    Message Received!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-orange-400">{formData.fullName}</strong>. A Spartans Gym representative will connect with you via phone/email within 2 business hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        fitnessGoal: 'Muscle Building',
                        membershipType: 'Pro Plan',
                        message: ''
                      });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase font-heading mb-1">
                      Send Us A Message
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                      Fill out the form below and our staff will respond promptly.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                        errors.fullName ? 'border-red-500' : 'border-zinc-700 focus:border-orange-500'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
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

                  {/* Fitness Goal & Membership Plan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 font-medium"
                      >
                        <option value="Muscle Building">Muscle Building & Hypertrophy</option>
                        <option value="Weight Loss">Weight Loss & Shred</option>
                        <option value="Strength Training">Powerlifting & Max Strength</option>
                        <option value="Functional / CrossFit">Functional & CrossFit</option>
                        <option value="Personal Coaching">1-on-1 VIP Personal Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                        Membership Preference
                      </label>
                      <select
                        value={formData.membershipType}
                        onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 font-medium"
                      >
                        <option value="Basic Plan">Basic Tier (₹999/mo)</option>
                        <option value="Pro Plan">Pro Tier (₹1,999/mo)</option>
                        <option value="Elite VIP Plan">Elite VIP Tier (₹3,999/mo)</option>
                        <option value="Corporate / Group">Corporate Group Membership</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 tracking-wider mb-1.5">
                      Your Message / Questions *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness targets, schedule availability, or questions..."
                      className={`w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none ${
                        errors.message ? 'border-red-500' : 'border-zinc-700 focus:border-yellow-400'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" icon={Send}>
                    Submit Inquiry
                  </Button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
