import React, { useState } from 'react';
import { Calculator, ArrowRight, Activity, Flame, Dumbbell } from 'lucide-react';
import Button from './Button';

export default function BmiCalculator() {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('78');
  const [age, setAge] = useState('26');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [recommendedPlan, setRecommendedPlan] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const calculatedBmi = (w / (h * h)).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setCategory('Underweight');
        setRecommendedPlan({
          name: 'Muscle Building & Hypertrophy',
          link: '/programs/muscle-building',
          desc: 'Focus on caloric surplus, protein synthesis, and heavy compound progressive overload.',
          color: 'text-blue-400 bg-blue-950/50 border-blue-800'
        });
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setCategory('Healthy Weight / Ideal');
        setRecommendedPlan({
          name: 'Strength & Functional CrossFit',
          link: '/programs/strength-training',
          desc: 'Peak your athletic conditioning, speed, VO2 max, and 1RM powerlifting metrics.',
          color: 'text-green-400 bg-green-950/50 border-green-800'
        });
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setCategory('Overweight / Bulk Phase');
        setRecommendedPlan({
          name: 'Weight Loss & Shred Protocol',
          link: '/programs/weight-loss',
          desc: 'High-density interval circuits (HIIT) paired with steady deficit nutrition strategies.',
          color: 'text-yellow-400 bg-yellow-950/50 border-yellow-800'
        });
      } else {
        setCategory('High BMI / Obese');
        setRecommendedPlan({
          name: '1-on-1 Personal Transformation',
          link: '/programs/personal-training',
          desc: 'Dedicated metabolic rehabilitation with personalized joint-friendly fat burning routines.',
          color: 'text-red-400 bg-red-950/50 border-red-800'
        });
      }
    }
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-zinc-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Form Inputs */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Fitness Tool</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading uppercase leading-tight mb-2">
            Calculate Your <span className="text-gradient-orange">Body Mass Index</span>
          </h3>
          <p className="text-sm text-zinc-400 mb-6">
            Get instant health metrics and discover which Spartans Gym program matches your body composition goals.
          </p>

          <form onSubmit={calculateBMI} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Height (cm)
                </label>
                <input
                  type="number"
                  min="100"
                  max="250"
                  required
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 font-medium"
                  placeholder="e.g. 175"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  min="30"
                  max="250"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 font-medium"
                  placeholder="e.g. 75"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Age (Years)
                </label>
                <input
                  type="number"
                  min="12"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 font-medium"
                  placeholder="e.g. 26"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 font-medium"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto mt-2">
              Calculate Score Now
            </Button>
          </form>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
          {bmi ? (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Your BMI Result
                </span>
                <span className={`text-xs font-black uppercase px-3 py-1 rounded-full border ${recommendedPlan?.color}`}>
                  {category}
                </span>
              </div>

              <div className="text-5xl font-black text-white font-heading">
                {bmi} <span className="text-sm font-bold text-zinc-400 font-sans">kg/m²</span>
              </div>

              {/* Visual meter */}
              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden flex">
                <div className="w-1/4 bg-blue-500 h-full" title="Underweight (< 18.5)"></div>
                <div className="w-1/4 bg-green-500 h-full" title="Normal (18.5 - 24.9)"></div>
                <div className="w-1/4 bg-yellow-500 h-full" title="Overweight (25 - 29.9)"></div>
                <div className="w-1/4 bg-red-500 h-full" title="Obese (30+)"></div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs font-bold uppercase text-zinc-400 mb-1">
                  Recommended Spartans Gym Program:
                </p>
                <h4 className="text-base font-extrabold text-orange-400 uppercase font-heading">
                  {recommendedPlan?.name}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {recommendedPlan?.desc}
                </p>

                <Button to={recommendedPlan?.link} variant="outline" size="sm" className="mt-4 w-full" icon={ArrowRight}>
                  View Recommended Program
                </Button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 text-zinc-500 space-y-3">
              <Activity className="w-12 h-12 text-orange-500/40 animate-pulse" />
              <h4 className="text-base font-bold text-zinc-300 uppercase font-heading">
                Ready For Evaluation
              </h4>
              <p className="text-xs text-zinc-500 max-w-xs">
                Enter your height and weight on the left to view your body composition score and program roadmap.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
