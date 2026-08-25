import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon, WhatsappIcon } from './SocialIcons';
import Button from './Button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0e0e10] to-black border-t border-zinc-800 text-zinc-300 relative overflow-hidden">
      {/* Subtle yellow background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-yellow-500/5 blur-[120px] pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black shadow-lg shadow-yellow-500/25 font-black">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-white uppercase font-heading">
                  SPARTANS<span className="text-yellow-400">GYM</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-yellow-300/80 font-bold uppercase -mt-1">
                  Elite Warrior Strength
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-sm">
              We are a premier strength, conditioning, and transformation arena built for high-performers. Science-backed coaching, Olympic grade equipment, and a zero-compromise mindset.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Spartan Warrior Dispatch
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-bold text-yellow-300 bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/30">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  <span>Welcome to the Spartan Brotherhood! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 flex-1 font-medium"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md shadow-yellow-500/20 cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/spartansfitnessofficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-yellow-400 flex items-center justify-center text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-all"
                  aria-label="Instagram: @spartansfitnessofficial"
                  title="Follow @spartansfitnessofficial on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-yellow-400 flex items-center justify-center text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-yellow-400 flex items-center justify-center text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-yellow-400 flex items-center justify-center text-zinc-300 hover:text-yellow-400 hover:bg-zinc-800 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>

              <a
                href="https://www.instagram.com/spartansfitnessofficial/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-yellow-400 transition-colors font-medium"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-yellow-400" />
                <span>@spartansfitnessofficial</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition-colors">About Spartans</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-yellow-400 transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/trainers" className="hover:text-yellow-400 transition-colors">Master Coaches</Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-yellow-400 transition-colors">Pricing & Plans</Link>
              </li>
              <li>
                <Link to="/classes" className="hover:text-yellow-400 transition-colors">Class Timetable</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-yellow-400 transition-colors">Arena Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Popular Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/programs/muscle-building" className="hover:text-yellow-400 transition-colors">Hypertrophy & Power</Link>
              </li>
              <li>
                <Link to="/programs/weight-loss" className="hover:text-yellow-400 transition-colors">Fat Loss Shred Protocol</Link>
              </li>
              <li>
                <Link to="/programs/crossfit-hiit" className="hover:text-yellow-400 transition-colors">CrossFit & Turf Conditioning</Link>
              </li>
              <li>
                <Link to="/programs/strength-training" className="hover:text-yellow-400 transition-colors">Olympic Powerlifting</Link>
              </li>
              <li>
                <Link to="/programs/personal-training" className="hover:text-yellow-400 transition-colors">1-on-1 VIP Coaching</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&origin=Your%20location&destination=Chanod%20Colony,%20Vapi,%20Gujarat,%20India%20%20Vapi%20%20-%20396195%20India&travelmode=driving&dir_action=navigate"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Chanod Colony, Vapi, Gujarat, India - 396195
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="tel:+918866338858" className="hover:text-yellow-400 transition-colors">
                  +91 88663 38858
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsappIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918866338858?text=Hi%20Spartans%20Gym%2C%20I%20would%20like%20to%20know%20more%20about%20membership"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors text-xs text-zinc-300"
                >
                  WhatsApp: +91 88663 38858
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="mailto:hello@spartansgym.com" className="hover:text-yellow-400 transition-colors">
                  hello@spartansgym.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-zinc-800/80">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <p className="text-white font-bold">Mon - Sat: 5:00 AM - 11:00 PM</p>
                  <p className="text-zinc-400">Sunday: 6:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 SPARTANS GYM. All Rights Reserved. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
