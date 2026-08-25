import React, { useState } from 'react';
import { Calendar, Clock, Flame, User, Filter, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { scheduleTimetable, daysOfWeek, classCategories } from '../data/classes';

export default function Classes() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center overflow-hidden border-b border-zinc-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-4 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-yellow-400" />
            <span>High-Energy Group Workouts</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Group Class <span className="text-gradient-yellow">Timetable</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Over 50+ coach-led high-intensity sessions every week. CrossFit, Boxing, Olympic lifting, and active mobility recovery.
          </p>
        </div>
      </section>

      {/* Main Timetable Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Day Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedDay === day
                  ? 'bg-yellow-400 text-black font-black shadow-lg shadow-yellow-500/30'
                  : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Classes Grid for Day */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleTimetable.map((slot, idx) => {
            const classInfo = slot[selectedDay];
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-zinc-800 hover:border-yellow-400/60 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-yellow-400 flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {slot.time}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-500/15 text-yellow-300 border border-yellow-400/30">
                      {classInfo.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-heading mb-2">
                    {classInfo.name}
                  </h3>

                  <div className="space-y-1.5 text-xs text-zinc-300 mb-6">
                    <p className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-yellow-400" />
                      Coach: <strong className="text-white">{classInfo.coach}</strong>
                    </p>
                    <p className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-yellow-400" />
                      Burn: <strong className="text-zinc-200">{classInfo.calories}</strong>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                    {classInfo.room}
                  </span>
                  <Button to="/free-trial" variant="primary" size="sm">
                    Book Spot
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready To Jump Into A Group Session?"
        subtitle="Claim your complimentary 1-Day VIP Pass and book any group fitness class on our timetable."
      />
    </div>
  );
}
