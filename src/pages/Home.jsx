import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Flame, 
  Award, 
  Users, 
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
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-white">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="World-Class Training"
              title="Signature Training"
              highlight="Programs"
              description="Whether your goal is packing on raw lean muscle mass, dropping body fat, or building superhuman athletic stamina, we have the specialized protocol for you."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <div className="mt-6 md:mt-0">
              <Button to="/programs" variant="secondary" size="md" icon={ArrowRight}>
                View All Programs
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>


      {/* 4. ABOUT SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Collage Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                alt="Spartans Gym Community"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <p className="text-slate-900 font-extrabold text-sm uppercase">15,000+ Sq. Ft. World-Class Facility</p>
                <p className="text-slate-500 text-xs mt-0.5">Designed with dedicated zones for power, cardio, recovery & turf.</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 p-4 text-slate-950 flex flex-col justify-center items-center text-center shadow-2xl shadow-yellow-500/40 border-4 border-white z-20 font-black">
              <span className="text-3xl font-black font-heading leading-none">10+</span>
              <span className="text-[10px] font-black uppercase tracking-wider mt-1">Years Building Champions</span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-800 border border-yellow-400/40">
              <Flame className="w-3.5 h-3.5 text-yellow-500" />
              <span>Our Philosophy & Legacy</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase font-heading tracking-tight leading-tight">
              More Than A Gym.{' '}
              <span className="text-gradient-yellow block">
                It's A Lifestyle.
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Spartans Gym was founded with a singular mission: to strip away gimmicks and deliver true, uncompromising athletic excellence. We believe fitness is not just about aesthetics — it is about fortifying your body, sharpening mental resilience, and unlocking your absolute highest potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-slate-900 font-bold text-sm uppercase flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> Evidence-Based
                </h4>
                <p className="text-xs text-slate-500">Programs engineered with sports science and nutrition precision.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-slate-900 font-bold text-sm uppercase flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500" /> Unmatched Culture
                </h4>
                <p className="text-xs text-slate-500">Zero ego, high accountability, and peers cheering every PR.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button to="/about" variant="primary" size="lg" icon={ChevronRight}>
                Learn More About Us
              </Button>
            </div>
          </div>

        </div>
      </section>


      {/* 5. REAL TRANSFORMATIONS */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Proven Case Studies"
            title="Real People."
            highlight="Real Results."
            description="Witness what happens when dedication meets world-class coaching. Real member milestones, zero filter, 100% effort."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationsData.map((item) => (
              <TransformationCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 mb-4">
              Ready to write your own transformation story?
            </p>
            <Button to="/join" variant="primary" size="md" icon={ChevronRight}>
              Claim Your Transformation Plan
            </Button>
          </div>
        </div>
      </section>


      {/* 6. EXPERT TRAINERS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Master Coaching Staff"
            title="Meet Our"
            highlight="Expert Trainers"
            description="Our coaches hold top international certifications with decades of combined experience in bodybuilding, powerlifting, Olympic lifting, and metabolic conditioning."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Button to="/trainers" variant="secondary" size="md" icon={ArrowRight}>
              View All 20+ Coaches
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.slice(0, 4).map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>


      {/* 7. MEMBERSHIP PLANS */}
      <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200 relative">
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

        {/* Day Selector Tabs — scrollable on mobile with gradient hint */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-5 sm:mb-8 no-scrollbar">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  selectedDay === day
                    ? 'bg-yellow-400 text-slate-950 font-black shadow-md shadow-yellow-500/20'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {/* Short name on mobile, full on sm+ */}
                <span className="sm:hidden">{day.slice(0, 3)}</span>
                <span className="hidden sm:inline">{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Schedule Cards for Selected Day */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {scheduleTimetable.map((slot, idx) => {
            const classInfo = slot[selectedDay];
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-slate-200 hover:border-yellow-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1.5 sm:mb-3">
                    <span className="text-[9px] sm:text-[11px] font-bold text-yellow-600 flex items-center gap-0.5 sm:gap-1">
                      <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
                      {slot.time}
                    </span>
                    <span className="px-1 sm:px-2 py-0.5 rounded text-[8px] sm:text-[10px] font-bold bg-yellow-50 text-yellow-800 border border-yellow-200 self-start sm:self-auto">
                      {classInfo.category}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-lg font-black text-slate-900 uppercase font-heading mb-0.5 sm:mb-1 leading-tight">
                    {classInfo.name}
                  </h4>
                  <p className="text-[9px] sm:text-xs text-slate-500 hidden xs:block">
                    Coach: <strong className="text-slate-800">{classInfo.coach}</strong>
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-xs text-slate-600">
                  <span>🔥 {classInfo.calories}</span>
                  <span className="font-bold text-yellow-600 hidden xs:inline">{classInfo.room}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 sm:mt-8 text-center">
          <Button to="/classes" variant="outline" size="md" className="text-[11px] sm:text-sm w-full sm:w-auto" icon={ArrowRight}>
            View Full Weekly Schedule
          </Button>
        </div>
      </section>


      {/* 9. BMI CALCULATOR */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 border-y border-slate-200 rounded-3xl my-6">
        <BmiCalculator />
      </section>


      {/* 10. GYM PHOTO GALLERY */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="State-Of-The-Art Arena"
            title="Explore Our"
            highlight="Gym Gallery"
            description="Click on any photo to open full-screen high-resolution preview and facility details."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 6).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openGalleryModal(idx)}
                className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer bg-white border border-slate-200 hover:border-yellow-400 transition-all duration-300 shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-slate-950 mb-1.5 font-black">
                    {item.category}
                  </span>
                  <h4 className="text-base font-black text-white uppercase font-heading group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/gallery" variant="secondary" size="md" icon={ArrowRight}>
              View Full Gallery & Tour
            </Button>
          </div>
        </div>
      </section>


      {/* 11. TESTIMONIALS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative bg-slate-50">
        <SectionHeading
          badge="Member Satisfaction"
          title="What Our Members"
          highlight="Say About Us"
          description="Over 5,000+ everyday fitness enthusiasts, corporate executives, and elite athletes train with us daily."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testi) => (
            <TestimonialCard key={testi.id} testimonial={testi} />
          ))}
        </div>
      </section>


      {/* 12. FAQ SECTION */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you need to know about Spartans Gym memberships, facilities, trial passes, and coaching policies."
          />

          <FAQ limit={6} />

          <div className="mt-12 text-center text-sm text-slate-600">
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
