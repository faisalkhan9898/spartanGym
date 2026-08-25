import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Flame, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import Button from './Button';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlides = [
  {
    id: 1,
    badge: "The Premier Spartan Performance Arena",
    title: "Build Your Strength.",
    highlight: "Transform Your Life.",
    description: "Train harder. Move better. Become stronger with expert coaching, world-class Olympic equipment, and a relentless community that keeps you inspired every single day.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85",
    primaryCta: { text: "Start Your Journey", link: "/join", variant: "glow" },
    secondaryCta: { text: "Book Free Trial Pass", link: "/free-trial", variant: "white" }
  },
  {
    id: 2,
    badge: "World-Class Coaching Faculty",
    title: "Championship Coaching.",
    highlight: "Uncompromising Results.",
    description: "Every coach holds accredited international certifications (CSCS, NASM, USAW). Experience personalized biomechanical form correction and progressive overload regimens.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2000&q=85",
    primaryCta: { text: "Meet Our Trainers", link: "/trainers", variant: "glow" },
    secondaryCta: { text: "Explore All Programs", link: "/programs", variant: "white" }
  },
  {
    id: 3,
    badge: "15,000+ SQ. FT. State-Of-The-Art Turf",
    title: "Olympic Grade Gear.",
    highlight: "Limitless Performance.",
    description: "Equipped with competition-grade Eleiko plates, calibrated power cages, Rogue turf sprint lanes, and infrared recovery suites for peak athletic conditioning.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=85",
    primaryCta: { text: "Explore Facility Tour", link: "/gallery", variant: "glow" },
    secondaryCta: { text: "View Membership Plans", link: "/membership", variant: "white" }
  },
  {
    id: 4,
    badge: "50+ Weekly Group Fitness Sessions",
    title: "High-Energy Classes.",
    highlight: "Relentless Motivation.",
    description: "CrossFit, HIIT circuits, Boxing conditioning, and mobility masterclasses with world-class instructors. Find your rhythm and conquer every session.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85",
    primaryCta: { text: "View Class Schedule", link: "/classes", variant: "glow" },
    secondaryCta: { text: "Claim Free VIP Pass", link: "/free-trial", variant: "white" }
  }
];

export default function HeroSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 sm:pb-28 overflow-hidden bg-black hero-swiper-wrapper select-none">
      
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={900}
        fadeEffect={{ crossFade: true }}
        loop={true}
        grabCursor={true}
        touchRatio={1.5}
        onSwiper={setSwiperInstance}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.hero-pagination'
        }}
        className="w-full h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative min-h-[92vh] flex items-center">
            
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-35 contrast-125 transition-transform duration-[6000ms] scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/60"></div>
            </div>

            {/* Slide Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 lg:px-20 w-full pt-12 sm:pt-16">
              <div className="max-w-3xl">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-6 backdrop-blur-md">
                  <Flame className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span>{slide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase font-heading tracking-tight leading-[1.08] mb-6">
                  {slide.title}{' '}
                  <span className="text-gradient-yellow block mt-1">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Supporting Subtext */}
                <p className="text-base sm:text-xl text-zinc-200 font-normal leading-relaxed mb-8 max-w-2xl">
                  {slide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 relative z-20">
                  <Button to={slide.primaryCta.link} variant={slide.primaryCta.variant} size="xl" icon={ChevronRight}>
                    {slide.primaryCta.text}
                  </Button>
                  <Button to={slide.secondaryCta.link} variant={slide.secondaryCta.variant} size="xl">
                    {slide.secondaryCta.text}
                  </Button>
                </div>

                {/* Quick Highlights */}
                <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-300 border-t border-zinc-800/80 pt-6">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" /> 1-Day Free VIP Pass
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" /> 100% Certified Coaches
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" /> Open 7 Days / Week
                  </span>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prominent Direct-Click Navigation Arrow (Left) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-950/90 hover:bg-yellow-400 border-2 border-yellow-400/80 hover:border-yellow-300 text-yellow-400 hover:text-black flex items-center justify-center transition-all duration-200 backdrop-blur-md cursor-pointer group shadow-2xl shadow-yellow-950/50 hover:scale-110 active:scale-90"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 group-hover:text-black transition-colors" />
      </button>

      {/* Prominent Direct-Click Navigation Arrow (Right) */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-950/90 hover:bg-yellow-400 border-2 border-yellow-400/80 hover:border-yellow-300 text-yellow-400 hover:text-black flex items-center justify-center transition-all duration-200 backdrop-blur-md cursor-pointer group shadow-2xl shadow-yellow-950/50 hover:scale-110 active:scale-90"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 group-hover:text-black transition-colors" />
      </button>

      {/* Floating Bottom Stat Counter Bar */}
      <div className="absolute bottom-4 left-4 right-4 max-w-7xl mx-auto hidden lg:block z-20 pointer-events-none">
        <div className="glass-panel rounded-2xl p-5 border border-zinc-800 grid grid-cols-4 divide-x divide-zinc-800 pointer-events-auto shadow-2xl">
          <div className="px-6 text-center">
            <p className="text-3xl xl:text-4xl font-black text-white font-heading">10+</p>
            <p className="text-xs uppercase font-bold text-yellow-400 tracking-wider mt-0.5">Years Experience</p>
          </div>
          <div className="px-6 text-center">
            <p className="text-3xl xl:text-4xl font-black text-white font-heading">5,000+</p>
            <p className="text-xs uppercase font-bold text-yellow-400 tracking-wider mt-0.5">Active Members</p>
          </div>
          <div className="px-6 text-center">
            <p className="text-3xl xl:text-4xl font-black text-white font-heading">20+</p>
            <p className="text-xs uppercase font-bold text-yellow-400 tracking-wider mt-0.5">Expert Trainers</p>
          </div>
          <div className="px-6 text-center">
            <p className="text-3xl xl:text-4xl font-black text-white font-heading">50+</p>
            <p className="text-xs uppercase font-bold text-yellow-400 tracking-wider mt-0.5">Weekly Classes</p>
          </div>
        </div>
      </div>

      {/* Visible Hero Pagination Bullets */}
      <div className="hero-pagination absolute bottom-6 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2.5"></div>

    </section>
  );
}
