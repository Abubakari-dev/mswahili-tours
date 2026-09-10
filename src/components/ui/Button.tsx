import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  className = '',
  children,
  ...props
}) => {
  /* ── Base ─────────────────────────────────────────── */
  const base = [
    'inline-flex items-center justify-center gap-1.5',
    'font-bold tracking-[0.08em] uppercase',
    'rounded-sm select-none cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    // lift + press micro-interaction
    'transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
    'hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]',
    // relative for the shine overlay
    'relative overflow-hidden',
  ].join(' ');

  /* ── Sizes ────────────────────────────────────────── */
  const sizes: Record<string, string> = {
    sm: 'text-[0.65rem] px-5 py-2   min-h-[36px]',
    md: 'text-[0.7rem]  px-6 py-2.5 min-h-[42px]',
    lg: 'text-[0.75rem] px-8 py-3.5 min-h-[50px]',
  };

  /* ── Variants ─────────────────────────────────────── */
  const variants: Record<string, string> = {
    primary: [
      'bg-gradient-to-br from-gold via-gold-light to-gold-dark text-navy',
      'shadow-[0_2px_12px_rgba(200,164,92,0.35)]',
      'hover:shadow-[0_6px_22px_rgba(200,164,92,0.55)]',
      'hover:from-gold-dark hover:via-gold hover:to-gold-light',
    ].join(' '),

    secondary: [
      'bg-navy text-white',
      'shadow-[0_2px_12px_rgba(27,42,74,0.28)]',
      'hover:bg-dark-navy',
      'hover:shadow-[0_6px_22px_rgba(27,42,74,0.42)]',
    ].join(' '),

    outline: [
      'bg-transparent text-gold border border-gold/70',
      'hover:bg-gold hover:text-navy hover:border-gold',
      'hover:shadow-[0_4px_16px_rgba(200,164,92,0.35)]',
    ].join(' '),

    ghost: [
      'bg-transparent text-navy',
      'hover:text-gold hover:bg-gold/10',
    ].join(' '),
  };

  /* ── Shine overlay (pseudo via after in CSS) ─────── */
  // We add a real span so it works without arbitrary CSS
  const shine = (
    <span
      aria-hidden="true"
      className={[
        'absolute inset-0 rounded-[inherit]',
        'bg-gradient-to-r from-transparent via-white/20 to-transparent',
        '-translate-x-full',
        'group-hover:translate-x-full',
        'transition-transform duration-500 ease-in-out',
        'pointer-events-none',
      ].join(' ')}
    />
  );

  const combined = `group ${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combined}>
        {shine}
        {children}
      </Link>
    );
  }

  return (
    <button className={combined} {...props}>
      {shine}
      {children}
    </button>
  );
};
