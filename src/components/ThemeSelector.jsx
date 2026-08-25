import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

const themes = [
  { id: 'gold', name: 'Spartan Gold', color: '#EAB308', bg: 'bg-yellow-500' },
  { id: 'crimson', name: 'Spartan Crimson', color: '#E11D48', bg: 'bg-rose-600' },
  { id: 'volt', name: 'Cyber Volt', color: '#84CC16', bg: 'bg-lime-500' },
  { id: 'amber', name: 'Fiery Amber', color: '#FF5500', bg: 'bg-orange-500' }
];

export default function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('spartans_theme') || 'gold';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('spartans_theme', activeTheme);
  }, [activeTheme]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-all cursor-pointer shadow-sm"
        aria-label="Customize Theme Palette"
        title="Switch Theme Palette"
      >
        <Palette className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop click */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>

          {/* Palette Popover */}
          <div className="absolute right-0 mt-2 w-52 p-3 rounded-2xl glass-panel border border-zinc-700 shadow-2xl z-50 animate-fade-in">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 px-1">
              Select Theme Color
            </p>
            <div className="space-y-1.5">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTheme === t.id
                      ? 'bg-zinc-800 text-white border border-zinc-700'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3.5 h-3.5 rounded-full ${t.bg} shadow-sm`}></span>
                    <span>{t.name}</span>
                  </div>
                  {activeTheme === t.id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
