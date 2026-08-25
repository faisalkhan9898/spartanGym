import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Heart, Award, CheckCircle2, ChevronRight, Users, Flame, Dumbbell } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { trainersData } from '../data/trainers';

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: "Scientific Precision",
      description: "No fads or pseudoscience. Every workout and nutrition protocol is grounded in verified sports physiology and metabolic science."
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description: "From certified Eleiko Olympic barbells to pristine sanitization standards, we never cut corners on your safety or experience."
    },
    {
      icon: Heart,
      title: "Inclusive & Empowering",
      description: "Whether you're picking up your very first dumbbell or peaking for a powerlifting meet, our doors welcome and respect hard work."
    },
    {
      icon: Award,
      title: "Obsessed With Results",
      description: "We don't sell gym access — we engineer measurable physical transformations with regular composition tracking."
    }
  ];

  const facilityMilestones = [
    { number: "15,000+", label: "Square Feet of Training Turf" },
    { number: "5,000+", label: "Transformations Engineered" },
    { number: "25+", label: "Master Certified Coaches" },
    { number: "100%", label: "Satisfaction Guarantee" }
  ];

  return (
    <div className="pt-24">
      
      {/* Page Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80"
            alt="About Spartans Gym"
            className="w-full h-full object-cover object-center filter brightness-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-500/15 text-yellow-300 border border-yellow-400/40 mb-4 backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-yellow-400" />
            <span>Our Heritage & Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-heading tracking-tight leading-tight">
            More Than A Gym.{' '}
            <span className="text-gradient-yellow block">
              It's A Lifestyle.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Spartans Gym was built to redefine the standard of commercial fitness. We are a sanctuary for those who refuse mediocrity and seek true athletic evolution.
          </p>
        </div>
      </section>


      {/* Story & Philosophy */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-yellow-500/15 text-yellow-300 border border-yellow-400/40">
              <Dumbbell className="w-3.5 h-3.5 text-yellow-400" />
              <span>Founded in 2016</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-heading leading-tight">
              Forged From Passion.{' '}
              <span className="text-gradient-yellow block">
                Engineered For Strength.
              </span>
            </h2>

            <p className="text-zinc-200 text-base leading-relaxed">
              A decade ago, our founders looked around at conventional gyms and saw overcrowded floors, neglected equipment, and cookie-cutter personal training programs that produced zero long-term results.
            </p>

            <p className="text-zinc-300 text-sm leading-relaxed">
              Spartans Gym was engineered as the antidote. We built a high-performance training facility equipped with competition-grade Eleiko plates, calibrated power cages, turf sprint tracks, and infrared recovery suites. But more than equipment, we built an ecosystem of master educators and mentors.
            </p>

            <div className="border-l-2 border-yellow-400 pl-4 py-1 italic text-zinc-200 text-sm font-medium bg-yellow-500/5 rounded-r-lg">
              "We don't believe in quick-fix shortcuts. We believe in progressive consistency, iron discipline, and celebrating every member who steps through our doors."
            </div>

            <div className="pt-2">
              <Button to="/free-trial" variant="primary" size="md" icon={ChevronRight}>
                Experience Spartans Gym Firsthand
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
              alt="Weight training"
              className="rounded-2xl h-72 w-full object-cover border border-zinc-800 shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
              alt="Functional training"
              className="rounded-2xl h-72 w-full object-cover border border-zinc-800 shadow-xl mt-6"
            />
          </div>

        </div>
      </section>


      {/* Facility Milestones */}
      <section className="py-16 bg-[#0E0E10] border-y border-zinc-900 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {facilityMilestones.map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-zinc-800">
              <p className="text-3xl sm:text-4xl font-black text-yellow-400 font-heading mb-1">
                {item.number}
              </p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* Core Values */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Core"
          highlight="Values"
          description="The 4 pillars that define how we train, coach, and support every individual who walks into our facility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 border border-zinc-800 hover:border-yellow-400/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-500/15 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-5 group-hover:bg-yellow-400 group-hover:text-black transition-colors font-bold">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white uppercase font-heading mb-2 group-hover:text-yellow-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* Master Coaching Staff Sneak Peek */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading
            badge="Leadership & Mentors"
            title="World-Class"
            highlight="Master Coaches"
            description="Our team includes former national athletes, CSCS strength coaches, and certified clinical nutritionists."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trainersData.map((t) => (
              <div key={t.id} className="glass-card rounded-xl p-3 border border-zinc-800 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-yellow-400/50 mb-3"
                />
                <h4 className="text-xs font-black text-white uppercase truncate">{t.name}</h4>
                <p className="text-[10px] text-yellow-400 font-bold truncate">{t.specialty}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/trainers" variant="secondary" size="md">
              Meet All Trainers & Book 1-on-1
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

    </div>
  );
}
