import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1323] border-t border-white/8 text-white/60">

      {/* ── Gold top line ─────────────────────────── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C8A45C]/50 to-transparent" />

      {/* ── Main content ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-10">

          {/* ── Col 1: Brand ─────────────────────── */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <img src={logo} alt="Mswahili Tours"
                className="w-10 h-10 rounded-full object-cover shadow-[0_2px_12px_rgba(200,164,92,0.35)] group-hover:scale-105 transition-transform duration-300" />
              <div className="leading-tight">
                <p className="font-serif font-bold text-[17px] text-white group-hover:text-[#C8A45C] transition-colors duration-200 tracking-tight">
                  Mswahili
                </p>
                <p className="font-serif italic text-[#C8A45C]/80 text-[13px] -mt-0.5">
                  Tours &amp; Safaris
                </p>
              </div>
            </Link>

            <p className="text-[14px] text-white/50 leading-[1.8] max-w-[260px]">
              Luxury safaris, mountain expeditions and tropical Zanzibar getaways — authentically Tanzanian, owned and operated since 2015.
            </p>

            <p className="text-[13px] font-serif italic text-[#C8A45C]/70">
              "Discover Africa, Live the Experience"
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { href: 'https://instagram.com', label: 'Instagram', icon: <FaInstagram size={13} /> },
                { href: 'https://facebook.com',  label: 'Facebook',  icon: <FaFacebookF  size={12} /> },
                { href: 'https://twitter.com',   label: 'Twitter',   icon: <FaXTwitter   size={12} /> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/50 hover:text-[#C8A45C] hover:border-[#C8A45C]/40 hover:bg-[#C8A45C]/10 transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Explore ───────────────────── */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.25em] uppercase text-white mb-5 pb-3 border-b border-white/10">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/safaris',     label: 'Tanzania Safaris'  },
                { to: '/kilimanjaro', label: 'Kilimanjaro'       },
                { to: '/zanzibar',    label: 'Zanzibar Island'   },
                { to: '/activities',  label: 'Activities'        },
                { to: '/about',       label: 'About Us'          },
                { to: '/travel-info', label: 'Travel Information'},
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}
                    className="text-[14px] text-white/50 hover:text-[#C8A45C] hover:translate-x-1 transition-all duration-200 inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Safaris ───────────────────── */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.25em] uppercase text-white mb-5 pb-3 border-b border-white/10">
              Popular Safaris
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/safaris#serengeti',   label: 'Serengeti Safari'        },
                { to: '/safaris#ngorongoro',  label: 'Ngorongoro Crater'       },
                { to: '/safaris#tarangire',   label: 'Tarangire Park'          },
                { to: '/kilimanjaro',         label: 'Kilimanjaro Trekking'    },
                { to: '/zanzibar',            label: 'Zanzibar Beach Holiday'  },
                { to: '/book',                label: 'Custom Safari'           },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to}
                    className="text-[14px] text-white/50 hover:text-[#C8A45C] hover:translate-x-1 transition-all duration-200 inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ───────────────────── */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.25em] uppercase text-white mb-5 pb-3 border-b border-white/10">
              Contact Us
            </h4>
            <div className="space-y-4 mb-7">
              {[
                { icon: <MapPin className="w-3.5 h-3.5 text-[#C8A45C] flex-shrink-0 mt-0.5" />, text: 'Saba Saba Junction, Arusha, Tanzania', href: null },
                { icon: <Phone className="w-3.5 h-3.5 text-[#C8A45C] flex-shrink-0" />,         text: '+255 750 877 628',                  href: 'tel:+255750877628' },
                { icon: <Mail  className="w-3.5 h-3.5 text-[#C8A45C] flex-shrink-0" />,         text: 'info@mswahilitours.co.tz',          href: 'mailto:info@mswahilitours.co.tz' },
              ].map(({ icon, text, href }) => (
                <div key={text} className="flex items-start gap-2.5">
                  {icon}
                  {href ? (
                    <a href={href} className="text-[14px] text-white/50 hover:text-[#C8A45C] transition-colors duration-200">
                      {text}
                    </a>
                  ) : (
                    <span className="text-[14px] text-white/50">{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/book"
              className="inline-flex items-center bg-[#C8A45C] hover:bg-[#b8913f] text-[#0F1829] text-[12px] font-bold tracking-[0.16em] uppercase px-5 py-2.5 rounded-sm transition-colors duration-200 shadow-[0_2px_12px_rgba(200,164,92,0.25)]">
              Plan a Trip →
            </Link>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-white/35">
            © {year} Mswahili Tours &amp; Safaris Company Limited. All Rights Reserved.
          </p>
          <p className="text-[12.5px] text-[#C8A45C]/50 uppercase tracking-widest">
            Tanzania Tourist Board Licensed Operator
          </p>
        </div>
      </div>

    </footer>
  );
};
