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
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Valid 10-digit Phone is required';
    if (!formData.message.trim()) errs.message = 'Please provide a message or inquiry';
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
    <div className="pt-24 bg-white text-slate-900">
      
      {/* Header */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-center overflow-hidden border-b border-slate-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 mb-3 sm:mb-4 backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 text-yellow-400" />
            <span>Direct Support & Inquiry</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Connect With <span className="text-gradient-yellow">Spartans Gym</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300">
            Have questions about memberships, coaching, or corporate wellness? Our team is available 7 days a week.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Information & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              <h3 className="text-xl font-black text-slate-900 uppercase font-heading">
                Contact Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs">Facility Location</h4>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      Chanod Colony, Vapi, Gujarat, India - 396195
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&origin=Your%20location&destination=Chanod%20Colony,%20Vapi,%20Gujarat,%20India%20%20Vapi%20%20-%20396195%20India&travelmode=driving&dir_action=navigate"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-yellow-600 font-bold uppercase tracking-wider mt-2 hover:text-yellow-700"
                    >
                      <span>Get Directions On Google Maps →</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs">Direct Call & WhatsApp Desk</h4>
                    <a href="tel:+918866338858" className="text-slate-900 hover:text-yellow-600 font-bold transition-colors block mt-0.5">
                      +91 88663 38858 (088663 38858)
                    </a>
                    <div className="flex items-center gap-2 mt-2">
                      <a
                        href="tel:+918866338858"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-400 text-slate-950 border border-yellow-300 text-[11px] font-black uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-sm"
                      >
                        <Phone className="w-3 h-3" /> Call Now
                      </a>
                      <a
                        href="https://wa.me/918866338858?text=Hi%20Spartans%20Gym%2C%20I%20would%20like%20to%20connect%20with%20your%20team"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-sm"
                      >
                        <WhatsappIcon className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs">Email Desk</h4>
                    <a href="mailto:hello@spartansgym.com" className="text-slate-600 hover:text-yellow-600 transition-colors block mt-0.5">
                      hello@spartansgym.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-600 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs">Official Instagram</h4>
                    <a
                      href="https://www.instagram.com/spartansfitnessofficial/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 hover:text-yellow-600 transition-colors block mt-0.5 font-medium"
                    >
                      @spartansfitnessofficial
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-yellow-600 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Gym Operating Schedule</span>
                </div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Monday – Saturday</span>
                    <span className="font-bold text-slate-900">5:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Sunday</span>
                    <span className="font-bold text-slate-900">6:00 AM – 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map Card */}
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Your%20location&destination=Chanod%20Colony,%20Vapi,%20Gujarat,%20India%20%20Vapi%20%20-%20396195%20India&travelmode=driving&dir_action=navigate"
              target="_blank"
              rel="noreferrer"
              className="block bg-white rounded-3xl p-5 border border-slate-200 hover:border-yellow-400 transition-all overflow-hidden relative group shadow-md"
            >
              <div className="h-44 rounded-2xl overflow-hidden relative mb-3 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80"
                  alt="Spartans Gym Location Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> Open In Google Maps
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>📍 SPARTANS GYM VAPI</span>
                <span className="text-yellow-600">Get Navigation Route →</span>
              </div>
            </a>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase font-heading">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A Spartans Gym coach or membership counselor will reach out to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="secondary" size="md" className="mt-4">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase font-heading mb-1">
                      Send Us A Message
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Fill out the form below and our team will get back to you promptly.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none ${
                        errors.fullName ? 'border-red-500' : 'border-slate-200 focus:border-yellow-400'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
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

                  {/* Fitness Goal & Membership Plan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={formData.fitnessGoal}
                        onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-yellow-400 font-medium"
                      >
                        <option value="Muscle Building">Muscle Building & Hypertrophy</option>
                        <option value="Weight Loss">Weight Loss & Shred</option>
                        <option value="Strength Training">Powerlifting & Max Strength</option>
                        <option value="Functional / CrossFit">Functional & CrossFit</option>
                        <option value="Personal Coaching">1-on-1 VIP Personal Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                        Membership Preference
                      </label>
                      <select
                        value={formData.membershipType}
                        onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-yellow-400 font-medium"
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
                    <label className="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">
                      Your Message / Questions *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness targets, schedule availability, or questions..."
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none ${
                        errors.message ? 'border-red-500' : 'border-slate-200 focus:border-yellow-400'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
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
