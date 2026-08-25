import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-7 border border-zinc-800 flex flex-col justify-between h-full transition-all duration-300 hover:border-orange-500/40 relative group">
      
      {/* Subtle Quote icon in background */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-800/60 group-hover:text-orange-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author & Outcome Tag */}
      <div className="pt-4 border-t border-zinc-800/80">
        {testimonial.tag && (
          <div className="mb-3.5 inline-block px-3 py-1 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 text-xs font-bold">
            🏆 {testimonial.tag}
          </div>
        )}

        <div className="flex items-center gap-3.5">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            loading="lazy"
            className="w-11 h-11 rounded-full object-cover border-2 border-orange-500/50"
          />
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wide">
              {testimonial.name}
            </h4>
            <p className="text-xs text-zinc-400 font-medium">
              {testimonial.role} • <span className="text-zinc-500">{testimonial.period}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
