import React, { useState } from 'react';
import { Clock, Flame, Users, Calendar, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { scheduleTimetable, daysOfWeek, classCategories, classDescriptions } from '../data/classes';

export default function Classes() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDay, setActiveDay] = useState("Monday");
  const [viewMode, setViewMode] = useState("daily"); // 'daily' | 'full'

  return (
    <div className="pt-24">
      
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-900 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-950/80 text-orange-400 border border-orange-500/40 mb-4 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5" />
            <span>Over 50+ Classes Scheduled Weekly</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Group Fitness & <span className="text-gradient-orange">Classes</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Feed off the collective energy of the squad. From adrenaline-spiking Boxing and CrossFit WODs to calming Yin Yoga flows, find your rhythm.
          </p>
        </div>
      </section>


      {/* Class Formats Spotlight */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="High Energy Formats"
          title="Explore Our"
          highlight="Class Lineup"
          description="Every class is led by certified coaches who coach form, pacing, and modifications for every fitness level."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classDescriptions.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent"></div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-600 text-white">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-black text-white uppercase font-heading group-hover:text-orange-400 transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-4 my-2.5 text-xs text-orange-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5" /> {item.burn}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold">
                    {item.level}
                  </span>
                  <Button to="/free-trial" variant="outline" size="sm">
                    Try For Free
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Interactive Weekly Schedule Timetable */}
      <section className="py-16 sm:py-24 bg-[#0e0e0e] border-y border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <SectionHeading
              badge="Live Timetable"
              title="Weekly Class"
              highlight="Schedule"
              description="Browse the schedule by day or view the full 7-day master timetable."
              align="left"
              className="mb-0 max-w-2xl"
            />

            {/* View Mode Toggle */}
            <div className="mt-6 md:mt-0 flex items-center gap-2 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
              <button
                onClick={() => setViewMode("daily")}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'daily' ? 'bg-orange-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Daily View
              </button>
              <button
                onClick={() => setViewMode("full")}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'full' ? 'bg-orange-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Master Matrix
              </button>
            </div>
          </div>

          {/* Daily View Mode */}
          {viewMode === 'daily' && (
            <div>
              {/* Day of week buttons */}
              <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                {daysOfWeek.map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      activeDay === day
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Day's Class Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scheduleTimetable.map((slot, idx) => {
                  const classItem = slot[activeDay];
                  return (
                    <div
                      key={idx}
                      className="glass-card rounded-2xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-bold text-orange-400 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {slot.time}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-zinc-900 text-zinc-300 border border-zinc-700">
                            {classItem.category}
                          </span>
                        </div>

                        <h4 className="text-xl font-black text-white uppercase font-heading mb-1">
                          {classItem.name}
                        </h4>
                        <p className="text-xs text-zinc-400">
                          Instructor: <strong className="text-zinc-200">{classItem.coach}</strong>
                        </p>
                      </div>

                      <div className="pt-5 mt-5 border-t border-zinc-800/80 space-y-3">
                        <div className="flex items-center justify-between text-xs text-zinc-400">
                          <span>Intensity: <strong className="text-orange-400">{classItem.intensity}</strong></span>
                          <span>Est. Burn: <strong className="text-zinc-200">{classItem.calories}</strong></span>
                        </div>
                        <Button to="/free-trial" variant="glow" size="sm" className="w-full">
                          Book Spot
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Full Schedule Table Mode (Horizontally Scrollable on Mobile) */}
          {viewMode === 'full' && (
            <div className="overflow-x-auto rounded-2xl border border-zinc-800 glass-card">
              <table className="w-full text-left text-sm min-w-[850px]">
                <thead className="bg-black/80 text-xs font-black uppercase tracking-wider text-zinc-300 border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Time Slot</th>
                    {daysOfWeek.map((d) => (
                      <th key={d} className="p-4 text-center">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/70">
                  {scheduleTimetable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="p-4 font-bold text-orange-400 whitespace-nowrap text-xs">
                        {row.time}
                      </td>
                      {daysOfWeek.map((day) => {
                        const cell = row[day];
                        return (
                          <td key={day} className="p-4 text-center">
                            <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/50 transition-all">
                              <p className="font-extrabold text-white text-xs uppercase">{cell.name}</p>
                              <p className="text-[10px] text-zinc-400 mt-0.5">{cell.coach}</p>
                              <span className="inline-block mt-1 text-[9px] font-bold text-orange-400 bg-orange-950/40 px-1.5 py-0.5 rounded">
                                {cell.category}
                              </span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready To Jump Into A Class?"
        subtitle="Book a 1-day free guest pass and experience our high-voltage group classes first hand."
      />

    </div>
  );
}
