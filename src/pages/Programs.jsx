import React, { useState } from 'react';
import { Search, Filter, Flame } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProgramCard from '../components/ProgramCard';
import CTASection from '../components/CTASection';
import { programsData } from '../data/programs';

const categories = ['All Programs', 'Strength', 'Hypertrophy', 'Conditioning', 'Fat Loss', 'Personal Training'];

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All Programs');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrograms = programsData.filter((prog) => {
    const matchesCategory = selectedCategory === 'All Programs' || prog.category === selectedCategory;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-4 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-yellow-400" />
            <span>Targeted Protocols</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Our Elite <span className="text-gradient-yellow">Training Programs</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            From raw Olympic strength to metabolic shred and 1-on-1 VIP coaching, explore specialized blueprints engineered for concrete results.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs..."
              className="w-full pl-12 pr-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors shadow-inner font-medium"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-yellow-400 text-black font-black shadow-lg shadow-yellow-500/30'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <ProgramCard key={prog.id} program={prog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-3xl p-8 border border-zinc-800">
            <p className="text-lg font-bold text-white mb-2">No programs found</p>
            <p className="text-xs text-zinc-400 mb-6">Try adjusting your search or category filters.</p>
            <button
              onClick={() => { setSelectedCategory('All Programs'); setSearchQuery(''); }}
              className="px-6 py-2.5 bg-yellow-400 text-black text-xs font-black uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
