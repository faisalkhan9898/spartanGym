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
    <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10 flex flex-col h-full shadow-sm">
      
      {/* Image Container with Zoom */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-yellow-300 border border-yellow-400/40">
            {program.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm flex items-center gap-1">
            <Clock className="w-3 h-3 text-yellow-600" />
            {program.duration}
          </span>
        </div>

        {/* Icon Floating Badge (Yellow & Black) */}
        <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-950 shadow-lg shadow-yellow-500/30 border-2 border-white group-hover:rotate-6 transition-transform duration-300 font-black">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 pt-7 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading group-hover:text-yellow-600 transition-colors uppercase">
            {program.title}
          </h3>
          <p className="text-xs text-yellow-600 font-bold uppercase tracking-wider mt-1">
            {program.tagline}
          </p>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {program.shortDescription}
          </p>

          {/* Quick Highlight points */}
          {program.features && (
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
              {program.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></span>
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer Action */}
        <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Target className="w-3.5 h-3.5 text-yellow-500" />
            <span className="font-semibold text-slate-700">{program.intensity}</span>
          </div>
          
          <Link
            to={`/programs/${program.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-yellow-600 hover:text-yellow-700 group-hover:translate-x-1 transition-all"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
