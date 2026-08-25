import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Home, Compass, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center space-y-6 glass-card rounded-3xl p-8 sm:p-12 border border-zinc-800 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-20 h-20 rounded-2xl bg-orange-600/20 border border-orange-500/40 text-orange-500 flex items-center justify-center mx-auto shadow-xl">
          <Dumbbell className="w-10 h-10 -rotate-45" />
        </div>

        <div className="space-y-2">
          <p className="text-6xl sm:text-7xl font-black text-white font-heading text-gradient-orange">
            404
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-heading">
            Page Dropped The Barbell
          </h1>
          <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or doesn't exist in our workout routine.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="glow" size="md" icon={Home}>
            Return Home
          </Button>
          <Button to="/programs" variant="secondary" size="md" icon={Compass}>
            Explore Programs
          </Button>
        </div>

      </div>
    </div>
  );
}
