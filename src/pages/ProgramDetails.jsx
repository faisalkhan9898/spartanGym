import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Target, Calendar, CheckCircle2, ChevronRight, Sparkles, UserCheck, Shield } from 'lucide-react';
import { programsData } from '../data/programs';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

export default function ProgramDetails() {
  const { id } = useParams();
  const program = programsData.find((p) => p.id === id);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="pt-24">
      
      {/* Back Navigation Bar */}
      <div className="bg-[#080808] border-b border-zinc-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back To All Programs</span>
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
            {program.category}
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center filter brightness-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-yellow-400 text-black font-black">
              {program.category}
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-zinc-900/90 text-white border border-zinc-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-yellow-400" />
              {program.duration}
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-zinc-900/90 text-white border border-zinc-700 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-yellow-400" />
              {program.intensity}
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            {program.title}
          </h1>

          <p className="text-yellow-400 text-xs sm:text-base font-bold uppercase tracking-wider mt-1.5 sm:mt-2">
            {program.tagline}
          </p>

          <p className="mt-3 sm:mt-6 text-xs sm:text-base lg:text-xl text-zinc-300 max-w-3xl leading-relaxed">
            {program.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button to={`/join?program=${program.id}`} variant="primary" size="lg" icon={ChevronRight}>
              Enroll In This Program
            </Button>
            <Button to="/free-trial" variant="secondary" size="lg">
              Book Free Trial Pass
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Deep Dive */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Card */}
            <div className="glass-card rounded-3xl p-8 border border-zinc-800 space-y-6">
              <h2 className="text-2xl font-black text-white uppercase font-heading">
                Program Structure & Objectives
              </h2>
              
              <p className="text-zinc-200 text-base leading-relaxed">
                {program.fullDetails || program.description}
              </p>

              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/30 text-xs sm:text-sm text-yellow-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>All enrollments include access to mobile workout logging and dedicated InBody body composition tracking.</span>
              </div>
            </div>

            {/* Key Curriculum Features */}
            {program.features && (
              <div className="glass-card rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-xl font-black text-white uppercase font-heading mb-6">
                  What's Included In This Protocol
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                      <div className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-300 flex items-center justify-center shrink-0 mt-0.5 border border-yellow-400/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-semibold text-zinc-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weekly Sample Breakdown */}
            {program.weeklyBreakdown && (
              <div className="glass-card rounded-3xl p-8 border border-zinc-800 space-y-6">
                <h3 className="text-xl font-black text-white uppercase font-heading">
                  Sample Weekly Training Cadence
                </h3>
                <div className="space-y-3">
                  {program.weeklyBreakdown.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0 mt-2"></span>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase">{item.day}: {item.title}</h4>
                        <p className="text-xs text-zinc-300 mt-0.5">{item.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Enrollment Card */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card rounded-3xl p-8 border-2 border-yellow-400/60 shadow-2xl relative">
              <span className="text-xs font-black uppercase tracking-widest text-yellow-400 block mb-1">
                Direct Enrollment
              </span>
              <h3 className="text-2xl font-black text-white uppercase font-heading mb-4">
                Ready To Start?
              </h3>

              <div className="space-y-4 text-xs text-zinc-300 border-t border-b border-zinc-800 py-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Duration:</span>
                  <span className="font-bold text-white">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Intensity Level:</span>
                  <span className="font-bold text-white">{program.intensity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Schedule:</span>
                  <span className="font-bold text-white">{program.schedule || 'Flexible Slots'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Coaching:</span>
                  <span className="font-bold text-yellow-400">Included</span>
                </div>
              </div>

              <Button to={`/join?program=${program.id}`} variant="primary" size="lg" className="w-full" icon={ChevronRight}>
                Join Spartans Gym
              </Button>

              <div className="mt-4 text-center">
                <Link to="/free-trial" className="text-xs font-bold text-zinc-300 hover:text-yellow-400 underline">
                  Try 1 Day Free Trial First →
                </Link>
              </div>
            </div>

            {/* Other Programs Teaser */}
            <div className="glass-card rounded-3xl p-6 border border-zinc-800">
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">
                Other Popular Protocols
              </h4>
              <div className="space-y-3">
                {programsData.filter(p => p.id !== program.id).slice(0, 3).map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <Link to={`/programs/${p.id}`} className="block">
                      <p className="text-xs font-black text-white uppercase truncate">{p.title}</p>
                      <p className="text-[11px] text-yellow-400 font-medium">{p.duration} • {p.intensity}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
