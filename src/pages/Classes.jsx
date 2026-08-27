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
    <div className="pt-24 bg-white text-slate-900">
      {/* Header */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-center overflow-hidden border-b border-slate-900">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 mb-3 sm:mb-4 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-yellow-400" />
            <span>High-Energy Group Workouts</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            Group Class <span className="text-gradient-yellow">Timetable</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300">
            Over 50+ coach-led high-intensity sessions every week. CrossFit, Boxing, Olympic lifting, and active mobility recovery.
          </p>
        </div>
      </section>

      {/* Main Timetable Content */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Day Selector — 7-column grid on mobile, flex on desktop */}
        <div className="w-full max-w-full mb-6 sm:mb-8">
          <div className="grid grid-cols-7 gap-1 sm:flex sm:items-center sm:justify-center sm:gap-2">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`py-2 px-0.5 sm:py-2.5 sm:px-5 rounded-lg sm:rounded-xl text-[10px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider text-center transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center ${
                  selectedDay === day
                    ? 'bg-yellow-400 text-slate-950 font-black shadow-md shadow-yellow-500/30 ring-2 ring-yellow-400'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span className="sm:hidden">{day.slice(0, 3)}</span>
                <span className="hidden sm:inline">{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Classes Grid for Day */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {scheduleTimetable.map((slot, idx) => {
            const classInfo = slot[selectedDay] || { name: 'Open Gym', coach: 'Coach Staff', category: 'General', calories: '400 kcal', room: 'Main Floor' };
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200 border-l-4 border-l-yellow-400 hover:border-yellow-400 transition-all flex flex-col justify-between shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-4">
                    <span className="text-[11px] sm:text-xs font-bold text-yellow-700 flex items-center gap-1 sm:gap-1.5">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {slot.time}
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-yellow-50 text-yellow-800 border border-yellow-200">
                      {classInfo.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-2xl font-black text-slate-900 uppercase font-heading mb-1.5 sm:mb-2 leading-tight">
                    {classInfo.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-3 sm:mb-6 bg-slate-50 p-2.5 rounded-lg sm:bg-transparent sm:p-0">
                    <p className="flex items-center gap-1.5 truncate">
                      <User className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span className="truncate">{classInfo.coach}</span>
                    </p>
                    <p className="flex items-center gap-1.5 justify-end sm:justify-start">
                      <Flame className="w-3.5 h-3.5 text-yellow-600 shrink-0" />
                      <span>{classInfo.calories}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold text-yellow-700 uppercase tracking-wider">
                    {classInfo.room}
                  </span>
                  <Button to="/free-trial" variant="primary" size="sm" className="text-[11px] sm:text-xs px-3.5 py-1.5">
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
