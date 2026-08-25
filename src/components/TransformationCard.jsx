import React from 'react';
import { Award, Clock, ArrowRight, TrendingUp, User } from 'lucide-react';

export default function TransformationCard({ item }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-yellow-400 transition-all duration-500 shadow-md hover:shadow-xl flex flex-col h-full group">
      
      {/* Side-by-side Before/After Image Preview */}
      <div className="relative grid grid-cols-2 gap-1 p-2 bg-slate-100">
        {/* Before */}
        <div className="relative h-60 overflow-hidden rounded-2xl">
          <img
            src={item.beforeImage}
            alt={`${item.name} Before`}
            loading="lazy"
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-lg bg-black/75 text-[10px] font-black uppercase tracking-wider text-white">
            Before
          </div>
        </div>

        {/* After */}
        <div className="relative h-60 overflow-hidden rounded-2xl">
          <img
            src={item.afterImage}
            alt={`${item.name} After`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-lg bg-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
            After
          </div>
          <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-yellow-400/50 text-[11px] font-black text-yellow-300">
            {item.result}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-black text-slate-900 uppercase font-heading">
              {item.name}, {item.age}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 flex items-center gap-1 border border-slate-200">
              <Clock className="w-3 h-3 text-yellow-600" />
              {item.duration}
            </span>
          </div>

          <p className="text-xs text-yellow-600 font-bold uppercase tracking-wider mb-3">
            {item.program}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed line-clamp-3 mb-4">
            "{item.quote}"
          </p>
        </div>

        {/* Metrics Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-600">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Body Fat: <strong className="text-slate-900">{item.bodyFatChange}</strong></span>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <User className="w-3.5 h-3.5 text-yellow-600" />
            <span>Coach: <strong className="text-slate-900">{item.coach}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
