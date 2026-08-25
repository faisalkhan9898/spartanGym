import React from 'react';
import { Award, Clock, ArrowRight, TrendingUp, User } from 'lucide-react';

export default function TransformationCard({ item }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 flex flex-col h-full group">
      
      {/* Side-by-side Before/After Image Preview */}
      <div className="relative grid grid-cols-2 gap-1 p-2 bg-black/40">
        {/* Before */}
        <div className="relative h-60 overflow-hidden rounded-xl">
          <img
            src={item.beforeImage}
            alt={`${item.name} Before`}
            loading="lazy"
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-black/80 text-[10px] font-black uppercase tracking-wider text-zinc-400">
            Before
          </div>
        </div>

        {/* After */}
        <div className="relative h-60 overflow-hidden rounded-xl">
          <img
            src={item.afterImage}
            alt={`${item.name} After`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded bg-orange-600 text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
            After
          </div>
          <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-orange-500/40 text-[11px] font-black text-orange-400">
            {item.result}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-black text-white uppercase font-heading">
              {item.name}, {item.age}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-800 text-zinc-300 flex items-center gap-1 border border-zinc-700">
              <Clock className="w-3 h-3 text-orange-400" />
              {item.duration}
            </span>
          </div>

          <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-3">
            {item.program}
          </p>

          <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed line-clamp-3 mb-4">
            "{item.quote}"
          </p>
        </div>

        {/* Metrics Footer */}
        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <TrendingUp className="w-3.5 h-3.5 text-green-400" />
            <span>Body Fat: <strong className="text-white">{item.bodyFatChange}</strong></span>
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <User className="w-3.5 h-3.5 text-orange-400" />
            <span>Coach: <strong className="text-white">{item.coach}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
