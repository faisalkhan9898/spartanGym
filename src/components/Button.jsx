import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none select-none cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 border border-orange-500/30 hover:-translate-y-0.5',
    secondary: 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700/80 hover:border-zinc-600 shadow-md hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white shadow-sm hover:shadow-orange-500/30 hover:-translate-y-0.5 font-bold',
    white: 'bg-white text-zinc-950 hover:bg-zinc-100 font-extrabold shadow-lg hover:shadow-white/20 hover:-translate-y-0.5',
    ghost: 'bg-transparent text-zinc-300 hover:text-orange-400 hover:bg-zinc-800/60',
    glow: 'bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 text-white glow-orange hover:glow-orange-lg hover:-translate-y-0.5'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-extrabold',
    xl: 'text-lg px-9 py-4.5 gap-3 font-black tracking-widest'
  };

  const computedClass = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const iconElement = Icon && (
    <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : size === 'xl' ? 'w-6 h-6' : 'w-4 h-4'} transition-transform duration-300 group-hover:translate-x-0.5`} />
  );

  const content = (
    <span className="inline-flex items-center gap-2 group">
      {Icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && iconElement}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={computedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={computedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={computedClass} {...props}>
      {content}
    </button>
  );
}
