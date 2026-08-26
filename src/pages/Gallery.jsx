import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const openModal = (index) => setActiveModalIndex(index);
  const closeModal = () => setActiveModalIndex(null);

  const nextImage = () => {
    setActiveModalIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setActiveModalIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-3 sm:mb-4 backdrop-blur-md">
            <Camera className="w-3.5 h-3.5 text-yellow-400" />
            <span>Facility Showcase</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Spartans Arena <span className="text-gradient-yellow">Gallery</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-zinc-300">
            Take a visual tour of our Olympic lifting platforms, turf sprint lanes, infrared saunas, and high-energy group studios.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-yellow-400 text-black font-black shadow-lg shadow-yellow-500/30'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openModal(idx)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer glass-card border border-zinc-800 hover:border-yellow-400/60 transition-all duration-500 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-black mb-1 font-black">
                  {item.category}
                </span>
                <h3 className="text-lg font-black text-white uppercase font-heading group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {activeModalIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-xl bg-zinc-900 border border-zinc-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-3 rounded-2xl bg-zinc-900/80 border border-zinc-700 hover:border-yellow-400 transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-3 rounded-2xl bg-zinc-900/80 border border-zinc-700 hover:border-yellow-400 transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[activeModalIndex].image}
              alt={filteredItems[activeModalIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl border border-zinc-800 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-black uppercase text-yellow-400">
                {filteredItems[activeModalIndex].category}
              </span>
              <h3 className="text-xl font-black text-white uppercase font-heading mt-0.5">
                {filteredItems[activeModalIndex].title}
              </h3>
              <p className="text-xs text-zinc-300 mt-1 max-w-md mx-auto">
                {filteredItems[activeModalIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <CTASection
        title="Ready To Train In Person?"
        subtitle="Book a facility walk-through and experience the energy of Spartans Gym Vapi."
      />
    </div>
  );
}
