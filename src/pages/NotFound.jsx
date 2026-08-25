import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-[85vh] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-md w-full text-center space-y-6 glass-card rounded-3xl p-8 sm:p-12 border border-zinc-800 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-20 h-20 rounded-2xl bg-yellow-500/20 border border-yellow-400/40 text-yellow-400 flex items-center justify-center mx-auto shadow-xl">
          <Dumbbell className="w-10 h-10 -rotate-45" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-black text-white font-heading tracking-tight">404</h1>
          <h2 className="text-xl font-bold text-white uppercase">Page Not Found</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            The page you are looking for might have been moved or does not exist. Let's get you back on track to your workout.
          </p>
        </div>

        <div className="pt-2">
          <Button to="/" variant="primary" size="md" icon={ArrowLeft} iconPosition="left">
            Back To Home
          </Button>
        </div>
      </div>
    </div>
  );
}
