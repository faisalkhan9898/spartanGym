import React from 'react';

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = 'center', // 'center' | 'left'
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-800 border border-yellow-400/40 mb-4 shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-slate-900 leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-yellow relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
