import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import GalleryModal from '../components/GalleryModal';
import CTASection from '../components/CTASection';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setActiveImage(filteredItems[idx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setActiveImage(filteredItems[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setActiveImage(filteredItems[prevIdx]);
  };

  return (
    <div className="pt-24">
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-4 backdrop-blur-md">
            <Camera className="w-3.5 h-3.5" />
            <span>Virtual Tour & Facilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Facility <span className="text-gradient-orange">Gallery</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Take a visual walk through our 15,000+ sq.ft. facility. From heavy Olympic lifting cages to the eucalyptus cedarwood sauna.
          </p>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
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
              onClick={() => handleOpen(idx)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer glass-card border border-zinc-800 hover:border-orange-500/60 transition-all duration-500 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Expand Icon indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-zinc-700 text-zinc-300 group-hover:text-orange-400 group-hover:border-orange-500 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-black text-white uppercase font-heading group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      <GalleryModal
        activeImage={activeImage}
        onClose={() => setActiveImage(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* CTA */}
      <CTASection
        title="Experience The Facility In Person"
        subtitle="Claim your 1-day complimentary guest pass and workout in our world-class arena today."
      />

    </div>
  );
}
