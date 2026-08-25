import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, ChevronRight } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export default function TrainerCard({ trainer }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card border border-zinc-800 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 shadow-xl flex flex-col h-full">
      
      {/* Image with gradient overlay */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent"></div>

        {/* Experience Pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-600/90 text-white shadow-md backdrop-blur-sm flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            {trainer.experience}
          </span>
        </div>

        {/* Floating Social Handles */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={trainer.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-orange-400 hover:border-orange-500 flex items-center justify-center transition-colors"
            aria-label={`${trainer.name} Instagram`}
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={trainer.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-orange-400 hover:border-orange-500 flex items-center justify-center transition-colors"
            aria-label={`${trainer.name} Twitter`}
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href={trainer.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 hover:text-orange-400 hover:border-orange-500 flex items-center justify-center transition-colors"
            aria-label={`${trainer.name} LinkedIn`}
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-black text-white font-heading uppercase group-hover:text-orange-400 transition-colors">
            {trainer.name}
          </h3>
          <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mt-1">
            {trainer.role}
          </p>
          <p className="text-xs text-zinc-400 font-medium mt-0.5">
            {trainer.specialty}
          </p>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {trainer.bio}
          </p>

          {/* Certifications preview */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {trainer.certifications.slice(0, 2).map((cert, idx) => (
              <span key={idx} className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-5 mt-5 border-t border-zinc-800/80">
          <Link
            to={`/contact?trainer=${encodeURIComponent(trainer.name)}`}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-zinc-900 hover:bg-orange-600 text-zinc-200 hover:text-white border border-zinc-700 hover:border-orange-500 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
            <ChevronRight className="w-3 h-3 ml-auto opacity-70" />
          </Link>
        </div>
      </div>
    </div>
  );
}
