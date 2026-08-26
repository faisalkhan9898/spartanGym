import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, Flame, ChevronRight, Phone, Clock, Sparkles } from 'lucide-react';
import Button from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Membership', path: '/membership' },
  { name: 'Classes', path: '/classes' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Announcement Micro Bar (Desktop & Tablets) */}
        <div
          className={`w-full bg-slate-950 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-zinc-800/80 transition-all duration-300 hidden md:block ${
            isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden border-none' : 'opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-yellow-400" />
                <span>Mon-Sat: 5:00 AM – 11:00 PM | Sun: 6:00 AM – 10:00 PM</span>
              </span>
              <a
                href="tel:+918866338858"
                className="flex items-center gap-1.5 text-slate-300 hover:text-yellow-400 font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-yellow-400" />
                <span>+91 88663 38858</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-yellow-300 font-bold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-yellow-400 animate-pulse" /> 1-Day Free VIP Pass Available!
              </span>
              <Link to="/free-trial" className="text-white hover:text-yellow-300 underline text-[11px] font-bold">
                Claim Pass →
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 px-3 sm:px-6 lg:px-8 ${
            isScrolled || isMobileMenuOpen
              ? 'bg-slate-950/95 backdrop-blur-md py-3 shadow-xl border-b border-zinc-800'
              : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4 text-white'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 shadow-md shadow-yellow-500/30 group-hover:scale-105 transition-transform duration-300 font-black shrink-0">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-2xl font-black tracking-wider uppercase font-heading text-white flex items-center">
                  SPARTANS<span className="text-yellow-400">GYM</span>
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] font-bold uppercase text-yellow-300/90 -mt-0.5 sm:-mt-1 truncate">
                  Elite Warrior Strength
                </span>
              </div>
            </Link>

            {/* Desktop Nav Menu */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-lg ${
                      isActive
                        ? 'text-yellow-400 bg-yellow-400/15 font-black'
                        : 'text-zinc-300 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-yellow-400 rounded-full shadow-[0_0_8px_#facc15]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                to="/free-trial"
                className="text-xs uppercase font-extrabold tracking-wider px-3 py-2 text-zinc-300 hover:text-yellow-400 transition-colors"
              >
                Free Trial
              </Link>
              <Button to="/join" variant="primary" size="sm" icon={ChevronRight}>
                Join Now
              </Button>
            </div>

            {/* Mobile Header Actions (Visible on Mobile & Tablet) */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <Link
                to="/free-trial"
                className="text-[11px] uppercase font-black tracking-wider px-2.5 py-1.5 rounded-lg border border-yellow-400/40 text-yellow-300 bg-yellow-500/10 hover:bg-yellow-500/20 hidden xs:inline-flex items-center transition-colors"
              >
                Pass
              </Link>
              <Button to="/join" variant="primary" size="sm" className="text-xs px-3 py-1.5">
                Join
              </Button>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-xl border border-yellow-400/50 bg-slate-900/90 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:outline-none cursor-pointer transition-all duration-200 shadow-md flex items-center justify-center min-w-[42px] min-h-[42px]"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Menu className="w-6 h-6 text-yellow-400" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Slide-down Drawer Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-slate-950/98 backdrop-blur-2xl border-b border-zinc-800 shadow-2xl text-white ${
            isMobileMenuOpen ? 'max-h-[85vh] opacity-100 py-5 px-5' : 'max-h-0 opacity-0 py-0 px-5 border-none pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1 max-h-[calc(85vh-2.5rem)] overflow-y-auto pr-1">
            {/* Quick Banner in Mobile Menu */}
            <div className="mb-2 p-3 rounded-2xl bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-between">
              <span className="text-xs font-bold text-yellow-300 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-yellow-400 animate-pulse" /> 1-Day VIP Pass Free
              </span>
              <Link
                to="/free-trial"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[11px] font-black uppercase text-yellow-400 hover:underline"
              >
                Claim →
              </Link>
            </div>

            {/* Nav Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-yellow-400 bg-yellow-500/15 border border-yellow-400/40 font-black'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/80'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-yellow-400/60" />
              </NavLink>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col gap-2.5">
              <Button
                to="/free-trial"
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Free Trial Pass
              </Button>
              <Button
                to="/join"
                variant="primary"
                size="md"
                className="w-full"
                icon={ChevronRight}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Spartans Gym
              </Button>
            </div>

            {/* Contact Micro info at bottom of mobile menu */}
            <div className="pt-4 mt-2 border-t border-zinc-800/80 text-xs text-zinc-400 space-y-1.5">
              <a
                href="tel:+918866338858"
                className="flex items-center gap-2 text-yellow-400 font-bold hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 88663 38858 (Vapi, Gujarat)</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Mon-Sat: 5:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
    </>
  );
}

