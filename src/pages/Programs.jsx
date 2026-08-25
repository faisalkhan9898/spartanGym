import React, { useState } from 'react';
import { Search, Filter, Dumbbell, Flame, Zap, Activity, HeartPulse, UserCheck, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProgramCard from '../components/ProgramCard';
import CTASection from '../components/CTASection';
import { programsData } from '../data/programs';

const categories = ["All", "Hypertrophy", "Fat Loss", "Strength", "Athletics", "VIP Coaching", "Cardio"];

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programsData.filter((prog) => {
    const matchesCategory = selectedCategory === "All" || prog.category === selectedCategory;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-4 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Science-Backed Protocols</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Targeted Fitness <span className="text-gradient-orange">Programs</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Every fitness journey begins with clarity. Choose a specialized program crafted around your unique biomechanics, body composition targets, and timeline.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by goal, muscle, or cardio..."
              className="w-full pl-12 pr-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors shadow-inner font-medium"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs & Catalog */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-3xl border border-zinc-800 max-w-xl mx-auto p-8">
            <Dumbbell className="w-12 h-12 text-zinc-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white uppercase font-heading">No Programs Found</h3>
            <p className="text-sm text-zinc-400 mt-2 mb-6">
              We couldn't find any workout program matching your search term "{searchQuery}".
            </p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="px-6 py-2.5 bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      <CTASection
        title="Not Sure Which Program To Pick?"
        subtitle="Schedule a free 15-minute consultation with a Spartans Gym Head Coach to design a customized training blueprint."
      />

    </div>
  );
}
