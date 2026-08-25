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
  const baseStyles = 'inline-flex items-center justify-center font-black uppercase tracking-wider rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none select-none cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-300 hover:to-yellow-500 text-black shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/50 hover:-translate-y-0.5 font-black border border-yellow-300',
    secondary: 'bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-yellow-400/50 shadow-md hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black shadow-sm hover:shadow-yellow-400/40 hover:-translate-y-0.5 font-black',
    white: 'bg-white text-black hover:bg-yellow-50 font-black shadow-lg hover:shadow-white/30 hover:-translate-y-0.5 border border-white',
    ghost: 'bg-transparent text-white hover:text-yellow-300 hover:bg-white/10',
    glow: 'bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black font-black glow-yellow hover:glow-yellow-lg hover:-translate-y-0.5 border border-yellow-200'
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
