import React, { useState } from 'react';
import { Award, Star, CheckCircle2, Shield, Calendar, ChevronRight, Flame } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TrainerCard from '../components/TrainerCard';
import CTASection from '../components/CTASection';
import { trainersData } from '../data/trainers';

const specialtyFilters = ["All", "Strength", "Fat Loss", "Hypertrophy", "CrossFit", "Boxing", "Yoga"];

export default function Trainers() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTrainers = trainersData.filter((t) => {
    if (activeFilter === "All") return true;
    return (
      t.specialty.toLowerCase().includes(activeFilter.toLowerCase()) ||
      t.role.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <div className="pt-24">
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-4 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-orange-500" />
            <span>Master Certified Coaching Faculty</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Meet Our <span className="text-gradient-orange">Expert Trainers</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Every coach at Spartans Gym is a career practitioner holding accredited international credentials (CSCS, NASM, ISSA, USAW) with a proven record of athletic milestones.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Specialty Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {specialtyFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Trainers Roster Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

      </section>

      {/* Why Our Coaches Excel */}
      <section className="py-16 bg-[#0e0e0e] border-y border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl glass-card border border-zinc-800">
            <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-500 flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase font-heading mb-2">100% Accredited</h3>
            <p className="text-xs sm:text-sm text-zinc-400">Strict background checks and prerequisite NSCA CSCS / NASM / ACE certifications.</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-zinc-800">
            <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-500 flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase font-heading mb-2">Ongoing Education</h3>
            <p className="text-xs sm:text-sm text-zinc-400">Our coaches undergo 100+ hours of continuous biomechanics and nutrition seminars annually.</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-zinc-800">
            <div className="w-12 h-12 rounded-xl bg-orange-600/10 text-orange-500 flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase font-heading mb-2">99% Client Retention</h3>
            <p className="text-xs sm:text-sm text-zinc-400">Consistently rated 4.9/5 across hundreds of verified member transformation evaluations.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready To Train 1-on-1 With A Master Coach?"
        subtitle="Book a complimentary 30-minute fitness assessment and goal mapping consultation with a Spartans Gym trainer today."
      />

    </div>
  );
}
