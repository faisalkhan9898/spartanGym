import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Flame, Zap, Activity, UserCheck, HeartPulse, ArrowRight, Clock, Target } from 'lucide-react';

const iconMap = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  Zap: Zap,
  Activity: Activity,
  UserCheck: UserCheck,
  HeartPulse: HeartPulse,
};

export default function ProgramCard({ program }) {
  const IconComponent = iconMap[program.icon] || Dumbbell;

  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card border border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 flex flex-col h-full shadow-lg">
      
      {/* Image Container with Zoom */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-orange-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-orange-400 border border-orange-500/30">
            {program.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-zinc-900/80 backdrop-blur-md text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Clock className="w-3 h-3 text-orange-400" />
            {program.duration}
          </span>
        </div>

        {/* Icon Floating Badge */}
        <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-xl shadow-orange-600/40 border-2 border-black group-hover:rotate-6 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 pt-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-heading group-hover:text-orange-400 transition-colors uppercase">
            {program.title}
          </h3>
          <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mt-1">
            {program.tagline}
          </p>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-3">
            {program.shortDescription}
          </p>

          {/* Quick Highlight points */}
          {program.features && (
            <ul className="mt-4 space-y-1.5 border-t border-zinc-800/80 pt-3">
              {program.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="text-xs text-zinc-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer Action */}
        <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <Target className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-semibold">{program.intensity} Intensity</span>
          </div>
          
          <Link
            to={`/programs/${program.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-400 group-hover:text-orange-300 group-hover:translate-x-1 transition-all"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
