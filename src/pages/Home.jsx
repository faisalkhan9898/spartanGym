import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Flame, 
  Award, 
  Users, 
  User,
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Play, 
  Clock, 
  Target, 
  HeartPulse, 
  Zap, 
  Check, 
  X 
} from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ProgramCard from '../components/ProgramCard';
import TrainerCard from '../components/TrainerCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import TransformationCard from '../components/TransformationCard';
import FAQ from '../components/FAQ';
import BmiCalculator from '../components/BmiCalculator';
import CTASection from '../components/CTASection';
import HeroSlider from '../components/HeroSlider';
import BannerSlider from '../components/BannerSlider';

// Data Imports
import { programsData } from '../data/programs';
import { trainersData } from '../data/trainers';
import { membershipPlans } from '../data/plans';
import { testimonialsData } from '../data/testimonials';
import { transformationsData } from '../data/transformations';
import { galleryItems } from '../data/gallery';
import { scheduleTimetable, daysOfWeek } from '../data/classes';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);

  const openGalleryModal = (index) => setActiveGalleryIndex(index);
  const closeGalleryModal = () => setActiveGalleryIndex(null);

  return (
    <div className="flex flex-col bg-white text-slate-900">
      
      {/* 1. HERO BANNER SLIDER (Full Width Slider with Fade & Prominent Chevrons) */}
      <HeroSlider />

      {/* Mobile Stats Bar (shown below Hero on small screens) */}
      <div className="block lg:hidden bg-slate-100 border-y border-slate-200 py-6 px-4">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-black text-slate-900 font-heading">10+</p>
            <p className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Years Experience</p>
          </div>
          <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-black text-slate-900 font-heading">5,000+</p>
            <p className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Active Members</p>
          </div>
          <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-black text-slate-900 font-heading">20+</p>
            <p className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Expert Trainers</p>
          </div>
          <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-black text-slate-900 font-heading">50+</p>
            <p className="text-[10px] uppercase font-bold text-yellow-600 tracking-wider">Weekly Classes</p>
          </div>
        </div>
      </div>


      {/* 2. SPARTAN ACTION SHOWCASE SLIDER (Swiper.js Slides Per View) */}
      <BannerSlider />


      {/* 3. FEATURED PROGRAMS */}
      <section className="py-12 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-white overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
            <SectionHeading
              badge="World-Class Training"
              title="Signature Training"
              highlight="Programs"
              description="Whether your goal is packing on raw lean muscle mass, dropping body fat, or building superhuman athletic stamina, we have the specialized protocol for you."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <div className="mt-4 md:mt-0">
              <Button to="/programs" variant="secondary" size="md" icon={ArrowRight}>
                View All Programs
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programsData.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>


      {/* 4. ABOUT SECTION */}
      <section className="py-12 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Collage Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                alt="Spartans Gym Community"
                className="w-full h-[280px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <p className="text-slate-900 font-extrabold text-xs sm:text-sm uppercase">15,000+ Sq. Ft. World-Class Facility</p>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5">Designed with dedicated zones for power, cardio, recovery & turf.</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-3 right-2 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 p-2.5 sm:p-4 text-slate-950 flex flex-col justify-center items-center text-center shadow-xl sm:shadow-2xl shadow-yellow-500/40 border-3 sm:border-4 border-white z-20 font-black">
              <span className="text-xl sm:text-3xl font-black font-heading leading-none">10+</span>
              <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">Years Building Champions</span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-800 border border-yellow-400/40">
              <Flame className="w-3.5 h-3.5 text-yellow-500" />
              <span>Our Philosophy & Legacy</span>
            </div>

            <h2 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase font-heading tracking-tight leading-tight">
              More Than A Gym.{' '}
              <span className="text-gradient-yellow block">
                It's A Lifestyle.
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Spartans Gym was founded with a singular mission: to strip away gimmicks and deliver true, uncompromising athletic excellence. We believe fitness is not just about aesthetics — it is about fortifying your body, sharpening mental resilience, and unlocking your absolute highest potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-slate-900 font-bold text-xs sm:text-sm uppercase flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> Evidence-Based
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500">Programs engineered with sports science and nutrition precision.</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-slate-900 font-bold text-xs sm:text-sm uppercase flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> Unmatched Culture
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500">Zero ego, high accountability, and peers cheering every PR.</p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex items-center gap-4">
              <Button to="/about" variant="primary" size="md" icon={ChevronRight}>
                Learn More About Us
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. REAL TRANSFORMATIONS */}
      <section className="py-12 sm:py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Proven Case Studies"
            title="Real People."
            highlight="Real Results."
            description="Witness what happens when dedication meets world-class coaching. Real member milestones, zero filter, 100% effort."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {transformationsData.map((item) => (
              <TransformationCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
              Ready to write your own transformation story?
            </p>
            <Button to="/join" variant="primary" size="md" icon={ChevronRight}>
              Claim Your Transformation Plan
            </Button>
          </div>
        </div>
      </section>

      {/* 6. EXPERT TRAINERS */}
      <section className="py-12 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <SectionHeading
            badge="Master Coaching Staff"
            title="Meet Our"
            highlight="Expert Trainers"
            description="Our coaches hold top international certifications with decades of combined experience in bodybuilding, powerlifting, Olympic lifting, and metabolic conditioning."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <div className="mt-4 md:mt-0">
            <Button to="/trainers" variant="secondary" size="md" icon={ArrowRight}>
              View All 20+ Coaches
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trainersData.slice(0, 4).map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>

      {/* 7. MEMBERSHIP PLANS */}
      <section className="py-12 sm:py-28 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Simple Transparent Pricing"
            title="Choose Your"
            highlight="Membership Plan"
            description="No lock-in contracts. No hidden enrollment charges. Upgrade or freeze your membership whenever you need."
          />

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-bold uppercase tracking-wider ${!isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 rounded-full bg-slate-200 border border-slate-300 p-1 flex items-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-yellow-400 shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8 bg-gradient-to-r from-yellow-400 to-amber-500' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold uppercase tracking-wider ${isAnnual ? 'text-slate-900' : 'text-slate-400'}`}>
                Annual
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-slate-950">
                Save 20%
              </span>
            </div>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {membershipPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
            ))}
          </div>

        </div>
      </section>


      {/* 8. CLASSES SCHEDULE TIMETABLE */}
      <section className="py-14 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-white overflow-hidden">
        <SectionHeading
          badge="High Energy Group Fitness"
          title="Weekly Class"
          highlight="Timetable"
          description="Over 50+ classes scheduled every week. Filter by day to plan your weekly workout calendar."
        />

        {/* Day Selector Tabs — smoothly scrollable with touch feedback */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar touch-pan-x">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 active:scale-95 ${
                  selectedDay === day
                    ? 'bg-yellow-400 text-slate-950 font-black shadow-md shadow-yellow-500/25 ring-2 ring-yellow-400'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span className="sm:hidden">{day.slice(0, 3)}</span>
                <span className="hidden sm:inline">{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Schedule Cards for Selected Day */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {scheduleTimetable.map((slot, idx) => {
            const classInfo = slot[selectedDay] || { name: 'Open Gym', coach: 'Coach Staff', category: 'General', calories: '400 kcal', room: 'Main Floor' };
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 hover:border-yellow-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-yellow-600 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-yellow-600" />
                      {slot.time}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-yellow-50 text-yellow-800 border border-yellow-200">
                      {classInfo.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase font-heading mb-2">
                    {classInfo.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                    <p className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span>Coach: <strong className="text-slate-900 font-bold">{classInfo.coach}</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span>Burn: <strong className="text-slate-800 font-semibold">{classInfo.calories}</strong></span>
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider">
                    {classInfo.room}
                  </span>
                  <Button to="/free-trial" variant="primary" size="sm" className="text-xs px-3.5 py-1.5">
                    Book Spot
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button to="/classes" variant="outline" size="md" className="text-xs sm:text-sm w-full sm:w-auto" icon={ArrowRight}>
            View Full Weekly Schedule
          </Button>
        </div>
      </section>


      {/* 9. BMI CALCULATOR */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 border-y border-slate-200 rounded-2xl sm:rounded-3xl my-4 sm:my-6 overflow-hidden">
        <BmiCalculator />
      </section>


      {/* 10. GYM PHOTO GALLERY */}
      <section className="py-12 sm:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="State-Of-The-Art Arena"
            title="Explore Our"
            highlight="Gym Gallery"
            description="Click on any photo to open full-screen high-resolution preview and facility details."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryItems.slice(0, 6).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openGalleryModal(idx)}
                className="group relative h-56 sm:h-72 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-white border border-slate-200 hover:border-yellow-400 transition-all duration-300 shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-slate-950 mb-1 sm:mb-1.5 font-black">
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-black text-white uppercase font-heading group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Button to="/gallery" variant="secondary" size="md" icon={ArrowRight}>
              View Full Gallery & Tour
            </Button>
          </div>
        </div>
      </section>


      {/* 11. TESTIMONIALS */}
      <section className="py-12 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-slate-50 overflow-hidden">
        <SectionHeading
          badge="Member Satisfaction"
          title="What Our Members"
          highlight="Say About Us"
          description="Over 5,000+ everyday fitness enthusiasts, corporate executives, and elite athletes train with us daily."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonialsData.map((testi) => (
            <TestimonialCard key={testi.id} testimonial={testi} />
          ))}
        </div>
      </section>


      {/* 12. FAQ SECTION */}
      <section className="py-12 sm:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you need to know about Spartans Gym memberships, facilities, trial passes, and coaching policies."
          />

          <FAQ limit={6} />

          <div className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-slate-600">
            Have more questions?{' '}
            <Link to="/contact" className="text-yellow-600 font-bold hover:underline">
              Contact our support team directly →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
