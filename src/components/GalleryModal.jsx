import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GalleryModal({ activeImage, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!activeImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-orange-600 hover:border-orange-500 transition-all shadow-xl"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-orange-600 transition-all"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-orange-600 transition-all"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img
          src={activeImage.image}
          alt={activeImage.title}
          className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-zinc-800"
        />
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-600/90 text-white mb-2">
            {activeImage.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-heading">
            {activeImage.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            {activeImage.description}
          </p>
        </div>
      </div>
    </div>
  );
}
