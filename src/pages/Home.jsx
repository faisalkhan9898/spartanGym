import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell, Flame, Trophy, Users, Shield, Zap, Sparkles, HeartPulse,
  Activity, ArrowRight, CheckCircle2, ChevronRight, Clock, Award, Play
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProgramCard from '../components/ProgramCard';
import TrainerCard from '../components/TrainerCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import TransformationCard from '../components/TransformationCard';
import FAQ from '../components/FAQ';
import BmiCalculator from '../components/BmiCalculator';
import GalleryModal from '../components/GalleryModal';
import CTASection from '../components/CTASection';
import BannerSlider from '../components/BannerSlider';
import HeroSlider from '../components/HeroSlider';

import { programsData } from '../data/programs';
import { trainersData } from '../data/trainers';
import { membershipPlans } from '../data/plans';
import { testimonialsData } from '../data/testimonials';
import { transformationsData } from '../data/transformations';
import { galleryItems } from '../data/gallery';
import { scheduleTimetable, daysOfWeek } from '../data/classes';

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Gallery lightbox helpers
  const openGalleryModal = (index) => {
    setGalleryIndex(index);
    setActiveGalleryImage(galleryItems[index]);
  };
  const nextGalleryImage = () => {
    const nextIdx = (galleryIndex + 1) % galleryItems.length;
    setGalleryIndex(nextIdx);
    setActiveGalleryImage(galleryItems[nextIdx]);
  };
  const prevGalleryImage = () => {
    const prevIdx = (galleryIndex - 1 + galleryItems.length) % galleryItems.length;
    setGalleryIndex(prevIdx);
    setActiveGalleryImage(galleryItems[prevIdx]);
  };

  const whyChooseFeatures = [
    {
      icon: Award,
      title: "Expert Certified Trainers",
      description: "NSCA, CSCS & NASM credentialed coaches dedicated to maximizing your gains and keeping you injury-free."
    },
    {
      icon: Dumbbell,
      title: "Olympic Grade Equipment",
      description: "Eleiko calibrated barbells, Hammer Strength plate-loaded machines, and Rogue functional rigs."
    },
    {
      icon: Zap,
      title: "Personalized Programs",
      description: "Customized volume, intensity, and progressive overload schemes built precisely around your biology."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "A motivating, high-energy environment filled with driven peers who push you to conquer new PRs."
    },
    {
      icon: Shield,
      title: "Flexible Memberships",
      description: "Transparent pricing tiers, no locking contracts, easy freeze options, and zero hidden joining fees."
    },
    {
      icon: Trophy,
      title: "Measurable Results Driven",
      description: "Bi-weekly InBody 570 body composition scans and performance metrics to guarantee tangible progress."
    }
  ];

  return (
    <div className="overflow-hidden">
      
      {/* 1. HERO BANNER SLIDER (Directly Below Navbar with Swiper.js Fade Effects) */}
      <HeroSlider />

      {/* Mobile Stats Section */}
      <section className="py-8 bg-zinc-950 border-y border-zinc-900 lg:hidden px-4">
        <div className="max-w-xl mx-auto grid grid-cols-2 gap-4">
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-black text-white font-heading">10+</p>
            <p className="text-xs uppercase font-bold text-orange-400">Years Experience</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-black text-white font-heading">5,000+</p>
            <p className="text-xs uppercase font-bold text-orange-400">Active Members</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-black text-white font-heading">20+</p>
            <p className="text-xs uppercase font-bold text-orange-400">Expert Trainers</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-black text-white font-heading">50+</p>
            <p className="text-xs uppercase font-bold text-orange-400">Weekly Classes</p>
          </div>
        </div>
      </section>

      {/* SWIPER.JS BANNER SLIDER (Slides Per View) */}
      <BannerSlider />


      {/* 2. WHY CHOOSE US */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <SectionHeading
          badge="The Spartan Advantage"
          title="Why Train With"
          highlight="SPARTANS GYM?"
          description="We blend cutting-edge sports science, championship-level coaching, and state-of-the-art facilities to create an environment where failure isn't an option."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseFeatures.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-zinc-800/80 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-orange-600/10 mb-6">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-white uppercase font-heading group-hover:text-orange-400 transition-colors mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* 3. FITNESS PROGRAMS */}
      <section className="py-20 sm:py-28 bg-[#0D0D0D] border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              badge="Goal-Specific Regimens"
              title="Train For"
              highlight="Your Goal"
              description="Explore science-backed fitness roadmaps tailored for rapid fat loss, raw strength, functional mobility, and aesthetic hypertrophy."
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
            {programsData.map((program) => (
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
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                alt="Spartans Gym Community"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-zinc-700/60">
                <p className="text-white font-extrabold text-sm uppercase">15,000+ Sq. Ft. World-Class Facility</p>
                <p className="text-zinc-400 text-xs mt-0.5">Designed with dedicated zones for power, cardio, recovery & turf.</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 p-4 text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-orange-600/50 border-2 border-black z-20">
              <span className="text-3xl font-black font-heading leading-none">10+</span>
              <span className="text-[10px] font-black uppercase tracking-wider mt-1">Years Building Champions</span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/70 text-orange-400 border border-orange-500/30">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Our Philosophy & Legacy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-heading tracking-tight leading-tight">
              More Than A Gym.{' '}
              <span className="text-gradient-orange block">
                It's A Lifestyle.
              </span>
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed">
              Spartans Gym was founded with a singular mission: to strip away gimmicks and deliver true, uncompromising athletic excellence. We believe fitness is not just about aesthetics — it is about fortifying your body, sharpening mental resilience, and unlocking your absolute highest potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-card border border-zinc-800">
                <h4 className="text-white font-bold text-sm uppercase flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" /> Evidence-Based
                </h4>
                <p className="text-xs text-zinc-400">Programs engineered with sports science and nutrition precision.</p>
              </div>

              <div className="p-4 rounded-xl glass-card border border-zinc-800">
                <h4 className="text-white font-bold text-sm uppercase flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" /> Unmatched Culture
                </h4>
                <p className="text-xs text-zinc-400">Zero ego, high accountability, and peers cheering every PR.</p>
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
      <section className="py-20 sm:py-28 bg-[#0D0D0D] border-t border-zinc-900 relative">
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
            <p className="text-sm text-zinc-400 mb-4">
              Ready to write your own transformation story?
            </p>
            <Button to="/join" variant="glow" size="md" icon={ChevronRight}>
              Claim Your Transformation Plan
            </Button>
          </div>
        </div>
      </section>


      {/* 6. EXPERT TRAINERS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
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
      <section className="py-20 sm:py-28 bg-[#0D0D0D] border-y border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Simple Transparent Pricing"
            title="Choose Your"
            highlight="Membership Plan"
            description="No lock-in contracts. No hidden enrollment charges. Upgrade or freeze your membership whenever you need."
          />

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-bold uppercase tracking-wider ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 rounded-full bg-zinc-900 border border-zinc-700 p-1 flex items-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Annual Billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-orange-500 shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8 bg-gradient-to-r from-orange-500 to-red-500' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold uppercase tracking-wider ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
                Annual
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white">
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
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <SectionHeading
          badge="High Energy Group Fitness"
          title="Weekly Class"
          highlight="Timetable"
          description="Over 50+ classes scheduled every week. Filter by day to plan your weekly workout calendar."
        />

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedDay === day
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timetable Schedule Cards for Selected Day */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scheduleTimetable.map((slot, idx) => {
            const classInfo = slot[selectedDay];
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-zinc-800 hover:border-orange-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-orange-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {slot.time}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {classInfo.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-white uppercase font-heading mb-1">
                    {classInfo.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Coach: <strong className="text-zinc-200">{classInfo.coach}</strong>
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                  <span>🔥 {classInfo.calories}</span>
                  <span className="font-bold text-orange-400">{classInfo.room}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button to="/classes" variant="outline" size="md" icon={ArrowRight}>
            View Full Interactive Weekly Schedule
          </Button>
        </div>
      </section>


      {/* 9. BMI CALCULATOR */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BmiCalculator />
      </section>


      {/* 10. GYM PHOTO GALLERY */}
      <section className="py-20 sm:py-28 bg-[#0D0D0D] border-y border-zinc-900 relative">
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
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer glass-card border border-zinc-800 hover:border-orange-500/50 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="text-base font-black text-white uppercase font-heading group-hover:text-orange-400 transition-colors">
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
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
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
      <section className="py-20 sm:py-28 bg-[#0D0D0D] border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you need to know about Spartans Gym memberships, facilities, trial passes, and coaching policies."
          />

          <FAQ limit={6} />

          <div className="mt-12 text-center text-sm text-zinc-400">
            Have more questions?{' '}
            <Link to="/contact" className="text-orange-400 font-bold hover:underline">
              Contact our support team directly →
            </Link>
          </div>
        </div>
      </section>


      {/* 13. FINAL HIGH CONVERTING CTA */}
      <CTASection />


      {/* Lightbox Modal */}
      <GalleryModal
        activeImage={activeGalleryImage}
        onClose={() => setActiveGalleryImage(null)}
        onNext={nextGalleryImage}
        onPrev={prevGalleryImage}
      />

    </div>
  );
}
