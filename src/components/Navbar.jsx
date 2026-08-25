import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X, Flame, ChevronRight, Phone, Clock } from 'lucide-react';
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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar */}
      <div className={`w-full bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800 transition-all duration-300 hidden md:block ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden border-none' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-yellow-400" />
              <span>Mon-Sat: 5:00 AM – 11:00 PM | Sun: 6:00 AM – 10:00 PM</span>
            </span>
            <a href="tel:+918866338858" className="flex items-center gap-1.5 text-slate-300 hover:text-yellow-400 font-medium transition-colors">
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
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo (White & Yellow) */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 shadow-md shadow-yellow-500/30 group-hover:scale-105 transition-transform duration-300 font-black">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl sm:text-2xl font-black tracking-wider uppercase font-heading flex items-center ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                SPARTANS<span className="text-yellow-500">GYM</span>
              </span>
              <span className={`text-[9px] tracking-[0.25em] font-bold uppercase -mt-1 ${isScrolled ? 'text-yellow-600' : 'text-yellow-300'}`}>
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
                      ? isScrolled
                        ? 'text-yellow-700 bg-yellow-400/15 font-black'
                        : 'text-yellow-300 bg-yellow-400/20 font-black'
                      : isScrolled
                        ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                        : 'text-slate-100 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-yellow-500 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/free-trial"
              className={`text-xs uppercase font-extrabold tracking-wider px-3 py-2 transition-colors ${
                isScrolled ? 'text-slate-800 hover:text-yellow-600' : 'text-white hover:text-yellow-300'
              }`}
            >
              Free Trial
            </Link>
            <Button to="/join" variant="primary" size="sm" icon={ChevronRight}>
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button to="/join" variant="primary" size="sm" className="text-xs px-3 py-1.5">
              Join
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl border focus:outline-none cursor-pointer ${
                isScrolled
                  ? 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200'
                  : 'bg-black/60 border-white/20 text-white'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-yellow-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white border-b border-slate-200 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-4 px-6 shadow-2xl' : 'max-h-0 opacity-0 py-0 px-6 border-none'
        }`}
      >
        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                  isActive
                    ? 'text-yellow-800 bg-yellow-50 border border-yellow-300'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </NavLink>
          ))}
          <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2.5">
            <Button to="/free-trial" variant="outline" size="md" className="w-full">
              Book Free Trial
            </Button>
            <Button to="/join" variant="primary" size="md" className="w-full" icon={ChevronRight}>
              Join Spartans Gym
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
