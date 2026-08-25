import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock, Target, CheckCircle2, ChevronRight, ArrowLeft,
  Dumbbell, Shield, Award, Calendar, Sparkles, UserCheck
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { programsData } from '../data/programs';

export default function ProgramDetails() {
  const { id } = useParams();
  const program = programsData.find((p) => p.id === id);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const relatedPrograms = programsData.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div className="pt-24">
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-orange-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </Link>
      </div>

      {/* Program Banner & Header */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-end p-6 sm:p-12 border border-zinc-800 shadow-2xl">
          <img
            src={program.image}
            alt={program.title}
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-600 text-white">
                {program.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-900/80 backdrop-blur-md text-zinc-300 border border-zinc-700/60 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                {program.duration}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-900/80 backdrop-blur-md text-zinc-300 border border-zinc-700/60 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-orange-400" />
                {program.intensity} Intensity
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
              {program.title}
            </h1>

            <p className="text-orange-400 text-base sm:text-lg font-bold uppercase tracking-wider">
              {program.tagline}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button to={`/join?program=${program.id}`} variant="glow" size="lg" icon={ChevronRight}>
                Enroll In This Program
              </Button>
              <Button to="/free-trial" variant="secondary" size="lg">
                Book Free Trial Session
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Program In-Depth Breakdown */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="glass-card rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-2xl font-black text-white uppercase font-heading mb-4">
                Program Overview
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                {program.description}
              </p>
              <div className="p-4 rounded-xl bg-orange-950/30 border border-orange-500/20 text-xs sm:text-sm text-orange-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Ideal Profile: {program.suitableFor}</span>
              </div>
            </div>

            {/* Core Features & Curriculum */}
            <div className="glass-card rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-2xl font-black text-white uppercase font-heading mb-6">
                What's Included in This Program
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 border border-orange-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="glass-card rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-2xl font-black text-white uppercase font-heading mb-4">
                Measurable Milestones & Outcomes
              </h2>
              <ul className="space-y-3">
                {program.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-2"></span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 border border-zinc-800 space-y-5 sticky top-28">
              <h3 className="text-lg font-black text-white uppercase font-heading border-b border-zinc-800 pb-3">
                Program Quick Facts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <p className="text-zinc-500 uppercase font-bold text-[10px]">Training Schedule</p>
                  <p className="text-zinc-200 font-semibold mt-0.5">{program.schedule}</p>
                </div>

                <div>
                  <p className="text-zinc-500 uppercase font-bold text-[10px]">Equipment Used</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {program.equipment.map((eq, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-zinc-500 uppercase font-bold text-[10px]">Dedicated Coaching</p>
                  <p className="text-zinc-200 font-semibold mt-0.5">Certified Olympic & CSCS Coaches</p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 space-y-3">
                <Button to={`/join?program=${program.id}`} variant="glow" size="md" className="w-full">
                  Enroll Today
                </Button>
                <Button to="/contact" variant="secondary" size="md" className="w-full">
                  Ask A Coach
                </Button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Related Programs */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-heading mb-8">
            Explore Other Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPrograms.map((p) => (
              <div key={p.id} className="glass-card rounded-2xl overflow-hidden border border-zinc-800 group">
                <img src={p.image} alt={p.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5">
                  <h4 className="text-lg font-black text-white uppercase font-heading">{p.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{p.shortDescription}</p>
                  <Link to={`/programs/${p.id}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-orange-400 group-hover:text-orange-300">
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
