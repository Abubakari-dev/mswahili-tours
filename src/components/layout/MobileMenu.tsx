import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navLinks = [
    { name: 'Home',             path: '/'            },
    { name: 'Safaris',          path: '/safaris'     },
    { name: 'Kilimanjaro',      path: '/kilimanjaro' },
    { name: 'Zanzibar',         path: '/zanzibar'    },
    { name: 'Activities',       path: '/activities'  },
    { name: 'About Us',         path: '/about'       },
    { name: 'Travel Info',      path: '/travel-info' },
  ];

  return (
    <div
      id="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fixed inset-0 z-50 md:hidden flex flex-col font-nav bg-[#0B1323] text-white overflow-y-auto"
    >
      {/* ── Top bar ─────────────────────────────── */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link to="/" onClick={onClose} className="flex items-center gap-3 group">
          <img src={logo} alt="Mswahili Tours"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#C8A45C]/50 group-hover:ring-[#C8A45C] transition-all" />
          <div className="leading-tight">
            <p className="font-nav font-bold text-white text-[16px] group-hover:text-[#C8A45C] transition-colors">Mswahili</p>
            <p className="font-nav italic text-[#C8A45C] text-[12.5px] -mt-0.5">Tours &amp; Safaris</p>
          </div>
        </Link>
        <button onClick={onClose} aria-label="Close menu"
          className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 border border-white/10 transition-all">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* ── Nav links ───────────────────────────── */}
      <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
        {navLinks.map((link) => (
          <NavLink key={link.name} to={link.path} onClick={onClose}
            className={({ isActive }) => [
              'text-[17px] font-semibold py-3.5 px-4 rounded-xl transition-all duration-200',
              isActive
                ? 'text-[#C8A45C] bg-[#C8A45C]/10'
                : 'text-white/75 hover:text-white hover:bg-white/5',
            ].join(' ')}>
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* ── Bottom CTA ──────────────────────────── */}
      <div className="px-6 pb-8 pt-4 space-y-4 border-t border-white/10">
        <Link to="/book" onClick={onClose}
          className="block w-full text-center py-4 rounded-xl bg-[#C8A45C] hover:bg-[#b8913f] text-[#0F1829] font-bold tracking-[0.12em] uppercase text-[14px] transition-colors duration-200 shadow-[0_4px_16px_rgba(200,164,92,0.30)]">
          Plan a Trip
        </Link>

        <div className="flex flex-col gap-2">
          <a href="tel:+255750877628"
            className="flex items-center gap-2.5 text-[13px] text-white/45 hover:text-[#C8A45C] transition-colors py-1">
            <Phone className="w-3.5 h-3.5 text-[#C8A45C]" />
            +255 750 877 628
          </a>
          <a href="mailto:info@mswahilitours.co.tz"
            className="flex items-center gap-2.5 text-[13px] text-white/45 hover:text-[#C8A45C] transition-colors py-1">
            <Mail className="w-3.5 h-3.5 text-[#C8A45C]" />
            info@mswahilitours.co.tz
          </a>
        </div>
      </div>
    </div>
  );
};
