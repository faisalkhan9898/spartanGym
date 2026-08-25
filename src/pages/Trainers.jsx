import React, { useState } from 'react';
import { Award, Search, Filter, ShieldCheck, HeartPulse, Trophy } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TrainerCard from '../components/TrainerCard';
import CTASection from '../components/CTASection';
import { trainersData } from '../data/trainers';

const specialties = [
  'All Coaches',
  'Strength & Powerlifting',
  'Bodybuilding & Hypertrophy',
  'CrossFit & Conditioning',
  'Fat Loss & Nutrition',
  'Boxing & Combat'
];

export default function Trainers() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Coaches');

  const filteredTrainers = trainersData.filter((t) => {
    if (selectedSpecialty === 'All Coaches') return true;
    return t.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase().split(' ')[0]);
  });

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-4 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-yellow-400" />
            <span>Master Certified Mentors</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Meet Our <span className="text-gradient-yellow">Expert Coaches</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Every coach on our floor holds accredited international certifications (CSCS, NASM, USAW) and brings years of competition-proven coaching experience.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Coaches Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Specialty Filter Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedSpecialty === spec
                  ? 'bg-yellow-400 text-black font-black shadow-lg shadow-yellow-500/30'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </section>

      {/* Coaching Standards Banner */}
      <section className="py-16 bg-[#0E0E10] border-y border-zinc-900 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl glass-card border border-zinc-800">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/15 text-yellow-400 flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase font-heading mb-2">100% Accredited Faculty</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">No weekend certs. Certified through NSCA, NASM, ACE, and USA Weightlifting.</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-zinc-800">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/15 text-yellow-400 flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase font-heading mb-2">Biomechanical Assessment</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">Comprehensive mobility screening before any heavy compound load programming.</p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-zinc-800">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/15 text-yellow-400 flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white uppercase font-heading mb-2">Proven Track Record</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">Over 5,000+ member milestones and competitive podium finishes logged.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready To Train Under Master Guidance?"
        subtitle="Book a complimentary 1-on-1 fitness assessment and consultation with any of our certified coaches."
      />
    </div>
  );
}
