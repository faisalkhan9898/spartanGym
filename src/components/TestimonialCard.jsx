import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md flex flex-col justify-between h-full transition-all duration-300 hover:border-yellow-400 hover:shadow-xl relative group">
      
      {/* Subtle Quote icon in background */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-yellow-100 transition-colors pointer-events-none" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author & Outcome Tag */}
      <div className="pt-4 border-t border-slate-100">
        {testimonial.tag && (
          <div className="mb-3.5 inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-bold">
            🏆 {testimonial.tag}
          </div>
        )}

        <div className="flex items-center gap-3.5">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            loading="lazy"
            className="w-11 h-11 rounded-full object-cover border-2 border-yellow-400"
          />
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
              {testimonial.name}
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              {testimonial.role} • <span className="text-slate-400">{testimonial.period}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
