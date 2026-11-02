import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Phone, Mail,
  Facebook, Linkedin, Twitter, Instagram,
  Menu, ChevronDown,
} from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import logo from '../../assets/logo.png';

/* ═══════════════════════════════════════════════════
   TOP BAR
═══════════════════════════════════════════════════ */
const TopBar: React.FC = () => (
  <div className="bg-[#C8A45C] border-b border-white/[0.15]">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-9 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <a href="tel:+255750877628"
          className="flex items-center gap-1.5 text-[12px] font-medium text-[#0F1829]/70 hover:text-[#0F1829] transition-colors">
          <Phone className="w-2.5 h-2.5 text-[#0F1829]/70" />
          +255 750 877 628
        </a>
        <div className="w-px h-3 bg-[#0F1829]/20" />
        <a href="mailto:info@mswahilitours.co.tz"
          className="flex items-center gap-1.5 text-[12px] font-medium text-[#0F1829]/70 hover:text-[#0F1829] transition-colors">
          <Mail className="w-2.5 h-2.5 text-[#0F1829]/70" />
          info@mswahilitours.co.tz
        </a>
      </div>
      <div className="flex items-center gap-3">
        {[
          { Icon: Facebook,  href: '#', label: 'Facebook'  },
          { Icon: Instagram, href: '#', label: 'Instagram' },
          { Icon: Twitter,   href: '#', label: 'Twitter'   },
          { Icon: Linkedin,  href: '#', label: 'LinkedIn'  },
        ].map(({ Icon, href, label }) => (
          <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
            className="text-[#0F1829]/60 hover:text-[#0F1829] transition-colors">
            <Icon className="w-3 h-3" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   MAIN NAVBAR
═══════════════════════════════════════════════════ */
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled]                 = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown]     = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const open  = (id: string) => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActiveDropdown(id); };
  const close = ()           => { timeoutRef.current = setTimeout(() => setActiveDropdown(null), 160); };

  const linkCls = ({ isActive, extra }: { isActive: boolean; extra?: boolean }) => [
    'relative flex items-center gap-1',
    'text-[12.5px] font-bold tracking-[0.08em] uppercase',
    'py-1 transition-colors duration-200 select-none whitespace-nowrap',
    'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px]',
    'after:bg-[#C8A45C] after:rounded-full',
    'after:transition-[opacity,transform] after:duration-250 after:origin-center',
    isActive || extra
      ? 'text-[#C8A45C] after:opacity-100 after:scale-x-100'
      : 'text-white/65 hover:text-white after:opacity-0 after:scale-x-0 hover:after:opacity-60 hover:after:scale-x-100',
  ].join(' ');

  const barBg = scrolled
    ? 'bg-[#060D1A]/97 backdrop-blur-xl border-b border-[#C8A45C]/15 shadow-[0_4px_32px_rgba(0,0,0,0.6)]'
    : 'bg-[#070F1C] border-b border-white/[0.07]';
  const barH = scrolled ? 'h-[62px]' : 'h-[74px]';

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 font-nav">
        {/* Top bar */}
        <div className={[
          'overflow-hidden transition-all duration-300',
          !scrolled ? 'max-h-[36px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}>
          <TopBar />
        </div>

        {/* Gold accent line on scroll */}
        <div className={[
          'h-[2px] bg-gradient-to-r from-transparent via-[#C8A45C]/60 to-transparent transition-opacity duration-300',
          scrolled ? 'opacity-100' : 'opacity-0',
        ].join(' ')} />

        {/* Main bar */}
        <header className={`w-full transition-all duration-300 ${barBg} ${barH}`}>
          <div className="max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">

            {/* ── MOBILE brand ── */}
            <div className="flex md:hidden items-center">
              <Link to="/about" className="flex items-center gap-2.5 group">
                <img src={logo} alt="Mswahili Tours"
                  className="w-10 h-10 rounded-xl object-contain ring-2 ring-[#C8A45C]/40 group-hover:ring-[#C8A45C]/80 transition-all" />
                <div className="leading-tight">
                  <p className="font-nav font-bold text-[16px] text-white group-hover:text-[#C8A45C] transition-colors">Mswahili</p>
                  <p className="font-nav italic text-[#C8A45C] text-[12.5px] -mt-0.5">Tours &amp; Safaris</p>
                </div>
              </Link>
            </div>

            {/* ── DESKTOP nav: Logo left | Links right ── */}
            <nav className="hidden md:flex items-center justify-between w-full h-full">

              {/* LOGO — Left */}
              <Link to="/about" aria-label="About Mswahili Tours"
                className="flex items-center gap-3 group select-none flex-shrink-0">
                <div className="relative">
                  <img src={logo} alt="Logo"
                    className={[
                      'object-contain',
                      'ring-2 ring-[#C8A45C]/50 group-hover:ring-[#C8A45C]',
                      'shadow-[0_0_20px_rgba(200,164,92,0.25)]',
                      'group-hover:scale-105 transition-all duration-300',
                      scrolled ? 'w-11 h-11 rounded-full' : 'w-14 h-14 rounded-xl',
                    ].join(' ')}
                  />
                  <div className="absolute inset-0 rounded-full bg-[#C8A45C]/15 blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-nav font-bold text-[18px] lg:text-[20px] text-white group-hover:text-[#C8A45C] transition-colors duration-200 tracking-tight">
                    Mswahili
                  </span>
                  <span className="font-nav italic text-[#C8A45C]/80 text-[13px] font-normal -mt-0.5 tracking-wide">
                    Tours &amp; Safaris
                  </span>
                </div>
              </Link>

              {/* ALL LINKS — Right */}
              <div className="flex items-center gap-4 lg:gap-5">

                <NavLink to="/" className={({ isActive }) => linkCls({ isActive })}>
                  Home
                </NavLink>

                <NavLink to="/safaris" className={({ isActive }) => linkCls({ isActive })}>
                  Safaris
                </NavLink>

                <NavLink to="/kilimanjaro" className={({ isActive }) => linkCls({ isActive })}>
                  Kilimanjaro
                </NavLink>

                <NavLink to="/zanzibar" className={({ isActive }) => linkCls({ isActive })}>
                  Zanzibar
                </NavLink>

                <NavLink to="/activities" className={({ isActive }) => linkCls({ isActive })}>
                  Activities
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => linkCls({ isActive })}>
                  About
                </NavLink>

                <NavLink to="/travel-info" className={({ isActive }) => linkCls({ isActive })}>
                  Travel Info
                </NavLink>

                {/* Divider */}
                <div className="h-4 w-px bg-white/10 mx-1" />

                {/* Plan a Trip CTA */}
                <Link to="/book"
                  className="inline-flex items-center whitespace-nowrap bg-[#C8A45C] hover:bg-[#b8913f] text-[#0F1829] text-[12px] font-bold tracking-[0.14em] uppercase px-5 py-2.5 rounded-sm shadow-[0_2px_14px_rgba(200,164,92,0.30)] hover:shadow-[0_4px_22px_rgba(200,164,92,0.50)] transition-all duration-200">
                  Plan a Trip
                </Link>

              </div>
            </nav>

            {/* Mobile right icons */}
            <div className="flex items-center gap-1 md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu"
                className="w-9 h-9 flex items-center justify-center text-white hover:text-[#C8A45C] transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </header>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => {}}
        onOpenAbout={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

/* ═══════════════════════════════════════════════════
   NAV DROPDOWN
═══════════════════════════════════════════════════ */
const NavDropdown: React.FC<{
  label: string;
  id: string;
  active: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
  linkCls: (args: { isActive: boolean; extra?: boolean }) => string;
  children: React.ReactNode;
}> = ({ label, id, active, onOpen, onClose, linkCls, children }) => (
  <div className="relative flex items-center h-full"
    onMouseEnter={() => onOpen(id)} onMouseLeave={onClose}>
    <button className={linkCls({ isActive: false, extra: active === id })} aria-expanded={active === id}>
      <span>{label}</span>
      <ChevronDown className={[
        'w-3 h-3 text-[#C8A45C]/50 ml-0.5 transition-transform duration-200',
        active === id ? 'rotate-180' : '',
      ].join(' ')} />
    </button>

    {active === id && (
      <div onMouseEnter={() => onOpen(id)} onMouseLeave={onClose}
        className={[
          'absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 z-50',
          'min-w-[255px] bg-[#0D1828]',
          'border border-[#C8A45C]/12 rounded-xl',
          'shadow-[0_8px_32px_rgba(0,0,0,0.40),0_32px_64px_rgba(0,0,0,0.30)]',
          'ring-1 ring-black/30',
          'py-2 px-1.5 animate-fadeIn',
          'before:absolute before:inset-x-6 before:top-0 before:h-[1.5px] before:rounded-full',
          'before:bg-gradient-to-r before:from-transparent before:via-[#C8A45C]/60 before:to-transparent',
        ].join(' ')}
      >
        {children}
      </div>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════
   DROPDOWN ITEM
═══════════════════════════════════════════════════ */
const DropItem: React.FC<{
  to: string;
  title: string;
  desc: string;
  highlight?: boolean;
}> = ({ to, title, desc, highlight = false }) => (
  <Link to={to}
    className={[
      'flex items-start gap-3 px-3 py-2.5 rounded-lg mx-0.5 my-0.5',
      'transition-all duration-200 group',
      highlight
        ? 'bg-[#C8A45C]/10 border border-[#C8A45C]/20 hover:bg-[#C8A45C]/18'
        : 'hover:bg-white/[0.05]',
    ].join(' ')}
  >
    <span className={[
      'mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200',
      highlight ? 'bg-[#C8A45C]' : 'bg-white/20 group-hover:bg-[#C8A45C]',
    ].join(' ')} />
    <div>
      <p className={[
        'text-[13px] font-semibold leading-snug transition-colors duration-200',
        highlight ? 'text-[#C8A45C]' : 'text-white/80 group-hover:text-white',
      ].join(' ')}>
        {title}
      </p>
      <p className="text-[12px] text-white/30 group-hover:text-white/45 leading-snug mt-0.5 transition-colors duration-200">
        {desc}
      </p>
    </div>
  </Link>
);
