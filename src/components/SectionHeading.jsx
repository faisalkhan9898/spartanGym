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
    <div className={`mb-8 sm:mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest bg-yellow-400/20 text-yellow-800 border border-yellow-400/40 mb-3 sm:mb-4 shadow-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500 animate-ping"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase text-slate-900 leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-yellow relative inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
