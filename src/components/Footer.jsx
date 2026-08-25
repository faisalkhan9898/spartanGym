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
    <footer className="bg-gradient-to-b from-[#0e0e0e] to-black border-t border-zinc-800 text-zinc-400 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-orange-600/5 blur-[120px] pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-2xl font-black tracking-wider text-white uppercase font-heading">
                SPARTANS<span className="text-orange-500">GYM</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              <strong className="text-zinc-200">Build Your Strength. Transform Your Life.</strong> Premium training facilities, certified Olympic coaches, and a supportive community dedicated to your physical and mental evolution.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Join Our Spartan Warrior Dispatch:
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold bg-green-950/40 border border-green-800/60 px-4 py-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Welcome to Spartans Gym! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 flex-1 transition-colors"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl transition-all shadow-md hover:shadow-orange-500/30 active:scale-95 cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
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
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:bg-zinc-800 transition-all"
                  aria-label="Instagram: @spartansfitnessofficial"
                  title="Follow @spartansfitnessofficial on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:bg-zinc-800 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:bg-zinc-800 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-orange-500 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:bg-zinc-800 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>

              <a
                href="https://www.instagram.com/spartansfitnessofficial/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-orange-400 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-orange-500" />
                <span>@spartansfitnessofficial</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Expert Trainers', path: '/trainers' },
                { name: 'Membership Plans', path: '/membership' },
                { name: 'Class Schedule', path: '/classes' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Contact & Map', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-orange-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-500 opacity-60" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fitness Programs */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-heading">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Muscle Building', id: 'muscle-building' },
                { name: 'Weight Loss & Shred', id: 'weight-loss' },
                { name: 'Strength & Powerlifting', id: 'strength-training' },
                { name: 'Functional & CrossFit', id: 'functional-training' },
                { name: '1-on-1 Personal Training', id: 'personal-training' },
                { name: 'Cardio & Conditioning', id: 'cardio-conditioning' },
              ].map((prog) => (
                <li key={prog.id}>
                  <Link
                    to={`/programs/${prog.id}`}
                    className="hover:text-orange-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-500 opacity-60" />
                    <span>{prog.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-heading">
              Location & Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&origin=Your%20location&destination=Chanod%20Colony,%20Vapi,%20Gujarat,%20India%20%20Vapi%20%20-%20396195%20India&travelmode=driving&dir_action=navigate"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  Chanod Colony, Vapi, Gujarat, India - 396195
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:+918866338858" className="hover:text-orange-400 transition-colors">
                  +91 88663 38858
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsappIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="https://wa.me/918866338858?text=Hi%20Spartans%20Gym%2C%20I%20would%20like%20to%20know%20more%20about%20membership"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors text-xs text-zinc-400"
                >
                  WhatsApp: +91 88663 38858
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:hello@spartansgym.com" className="hover:text-orange-400 transition-colors">
                  hello@spartansgym.com
                </a>
              </div>
              <div className="pt-2 border-t border-zinc-800/80">
                <div className="flex items-start gap-2 text-xs text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-zinc-200">Mon – Sat: 5:00 AM – 11:00 PM</p>
                    <p className="text-zinc-400">Sunday: 6:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 SPARTANS GYM. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link to="/free-trial" className="hover:text-orange-400 font-bold transition-colors">Book 1-Day Pass</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
