import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const bannerSlides = [
  {
    id: 1,
    tag: "HYPERTROPHY & POWER",
    title: "BUILD RAW STRENGTH & POWER",
    subtitle: "Competition-grade Eleiko bars, calibrated racks, and progressive volume programming.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    badge: "15,000 SQ FT FACILITY",
    link: "/programs/muscle-building",
    cta: "Explore Program"
  },
  {
    id: 2,
    tag: "WARRIOR CONDITIONING",
    title: "HIGH-OCTANE HIIT & CROSSFIT",
    subtitle: "Ignite metabolic conditioning with turf sprint lanes, battle ropes, and kettlebell circuits.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    badge: "50+ WEEKLY CLASSES",
    link: "/classes",
    cta: "View Timetable"
  },
  {
    id: 3,
    tag: "OLYMPIC WEIGHTLIFTING",
    title: "PEAK 1RM & ATHLETIC SPEED",
    subtitle: "Master clean & jerks, snatches, and deadlifts under certified CSCS coaching guidance.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    badge: "CSCS CERTIFIED COACHES",
    link: "/programs/strength-training",
    cta: "Join Strength Club"
  },
  {
    id: 4,
    tag: "FAT LOSS & SHRED",
    title: "TORCH CALORIES & SCULPT LEAN",
    subtitle: "High-density fat-burning intervals combined with body composition InBody tracking.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    badge: "VIP 1-DAY PASS",
    link: "/free-trial",
    cta: "Claim Free Trial"
  },
  {
    id: 5,
    tag: "RECOVERY & WELLNESS",
    title: "INFRARED SAUNA & CRYO LOUNGE",
    subtitle: "Speed up recovery and prevent injuries with contrast hydrotherapy and myofascial release suites.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    badge: "ADVANCED RECOVERY",
    link: "/membership",
    cta: "View All Access"
  }
];

export default function BannerSlider() {
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
    <section className="relative py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none bg-white overflow-hidden w-full">
      
      {/* Header bar with controls — 2-tier layout that never overflows */}
      <div className="mb-4 sm:mb-8">
        <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-800 border border-yellow-400/40">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-600 shrink-0" />
            <span>Featured Arena Highlights</span>
          </div>

          {/* Navigation Arrows — Hidden on mobile, visible on sm+ */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-100 hover:bg-yellow-400 border border-slate-200 hover:border-yellow-400 text-slate-800 hover:text-black flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-100 hover:bg-yellow-400 border border-slate-200 hover:border-yellow-400 text-slate-800 hover:text-black flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <h2 className="text-xl sm:text-3xl font-black text-slate-900 uppercase font-heading tracking-tight leading-tight">
          Spartan <span className="text-gradient-yellow">Action Showcase</span>
        </h2>
      </div>

      {/* Swiper Slider with explicit width constraints */}
      <div className="banner-swiper-container relative w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Keyboard]}
          spaceBetween={12}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          keyboard={{ enabled: true }}
          onSwiper={setSwiperInstance}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="w-full pb-10 sm:pb-14"
        >
          {bannerSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="w-full h-auto">
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-yellow-400 transition-all duration-500 flex flex-col h-[320px] sm:h-[400px] lg:h-[440px] shadow-md hover:shadow-xl w-full">
                
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-45 group-hover:brightness-55"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                {/* Top Badges */}
                <div className="relative z-10 p-4 sm:p-6 flex flex-wrap items-start gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest bg-black/80 backdrop-blur-md text-yellow-300 border border-yellow-400/40">
                    {slide.tag}
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-yellow-400 text-slate-950 font-black">
                    {slide.badge}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-4 sm:p-6 mt-auto space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white uppercase font-heading leading-tight group-hover:text-yellow-300 transition-colors">
                    {slide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed line-clamp-2">
                    {slide.subtitle}
                  </p>

                  <div className="pt-1">
                    <Link
                      to={slide.link}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-md shadow-yellow-500/30 transition-all"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
