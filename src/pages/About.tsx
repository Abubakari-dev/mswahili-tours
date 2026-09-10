import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

/* ── Partner logos ──────────────────────────────── */
import imgNgoro    from '../assets/icons/ngoro.jpg';
import imgTanapa   from '../assets/icons/tanapa.jpg';

/* ── Images ──────────────────────────────────────── */
import imgSerengeti  from '../assets/IMAGES/Serengeti/Serengeti 1.jpg';
import imgSerengeti2 from '../assets/IMAGES/Serengeti/Serengeti 2.jpg';

const partners = [
  { name: 'TANAPA',             img: imgTanapa  },
  { name: 'Ngorongoro',         img: imgNgoro   },
];

const values = [
  {
    number: '01',
    title: 'Expert Local Team',
    desc: 'A passionate team of local experts with deep knowledge of Tanzania — turning your travel dreams into seamless, well-crafted journeys from start to finish.',
  },
  {
    number: '02',
    title: 'Unique Adventures',
    desc: 'From the Serengeti to Zanzibar\'s shores, every itinerary is built around you — filled with discovery, beauty, and authentic cultural immersion.',
  },
  {
    number: '03',
    title: 'Positive Impact',
    desc: 'Every journey we create actively supports local communities and wildlife conservation through responsible, sustainable travel practices.',
  },
  {
    number: '04',
    title: 'Certified & Trusted',
    desc: 'Fully licensed by TTB and a member of TTGA, TATO and leading Tanzania tourism bodies — your safety and satisfaction are our guarantee.',
  },
  {
    number: '05',
    title: 'AMREF Medical Cover',
    desc: 'All mountain climbs and remote safaris include AMREF Flying Doctors emergency evacuation coverage for complete peace of mind on every journey.',
  },
  {
    number: '06',
    title: 'Tanzania Specialists',
    desc: 'We operate exclusively in Tanzania — giving us unmatched depth of knowledge of every park, route, and hidden gem this country has to offer.',
  },
];

/* ═══════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════ */
export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Mswahili Tours \u0026 Safaris \u2014 Tanzania Safari Specialists';
  }, []);

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={imgSerengeti} alt="Serengeti safari"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns" />
        <div className="absolute inset-0 bg-[#050E1C]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/70 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.35em] uppercase mb-5 animate-fadeInUp stagger-1">
            Arusha, Tanzania
          </p>
          <h1
            className="text-white leading-[1.05] mb-6 animate-fadeInUp stagger-2"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              textShadow: '0 2px 32px rgba(0,0,0,0.40)',
            }}
          >
            About Us
          </h1>
          <p className="text-white/65 text-[15px] sm:text-[16px] max-w-xl mx-auto leading-relaxed mb-10 font-light animate-fadeInUp stagger-3">
            Your dedicated partners in crafting unforgettable journeys across Tanzania's most iconic landscapes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-4">
            <Button to="/book" variant="primary" size="lg">Plan Your Safari</Button>
            <Button to="/tours" variant="outline" size="lg">Explore Tours</Button>
          </div>
        </div>
      </section>

      {/* ══ 1b. INTRO TEXT ═══════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <p className="text-[#C8A45C] text-[10px] font-bold tracking-[0.45em] uppercase mb-6">
            About Mswahili Tours &amp; Safaris
          </p>

          <h2 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(1.8rem, 4vw, 3.8rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#1B2A4A',
            lineHeight: 1.1,
          }} className="mb-7">
            Your Partners in<br />Unforgettable Journeys
          </h2>

          <div className="w-12 h-[3px] bg-[#C8A45C] mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-[#4A4035] text-[15.5px] leading-[2] mb-10">
            <p>
              Mswahili Tours &amp; Safaris stands out as more than just a tour operator —
              we are your dedicated partners in crafting unforgettable journeys. Nestled in
              the heart of Tanzania's awe-inspiring landscapes, our mission is to transform
              your travel dreams into captivating realities.
            </p>
            <p>
              We take pride in curating experiences that go beyond the ordinary. Whether you
              are captivated by the majestic Serengeti, enticed by the mystical allure of
              Zanzibar, or yearning to stand atop Kilimanjaro, our team is committed to
              delivering a seamless blend of adventure, luxury, and cultural immersion.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/book" variant="primary" size="md">Plan Your Safari</Button>
            <Button to="/tours" variant="outline" size="md">Explore Tours</Button>
          </div>

        </div>
      </section>

      {/* ══ 2. MISSION STATEMENT — full width ════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-20 border-t border-[#EAE4D9]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <div className="w-8 h-[2px] bg-[#C8A45C] mx-auto mb-8" />
          <blockquote style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#1B2A4A',
            lineHeight: 1.55,
          }}>
            "Every journey we craft is a story waiting to be written — one that honours the land, its people, and the wildlife that makes Tanzania the world's greatest safari destination."
          </blockquote>
          <div className="w-8 h-[2px] bg-[#C8A45C] mx-auto mt-8" />
          <p className="text-[#C8A45C] text-[10px] font-bold tracking-[0.35em] uppercase mt-6">
            Mswahili Tours &amp; Safaris · Arusha, Tanzania
          </p>
        </div>
      </section>

      {/* ══ 3. WHY CHOOSE US ═════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Tanzania, Deeply Known
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto mb-6" />
            <p className="text-[#4A4035] text-[14.5px] leading-[1.9] max-w-2xl mx-auto">
              We operate exclusively in Tanzania — giving us unmatched depth of knowledge
              of every park, route, beach, and cultural landmark this extraordinary country has to offer.
            </p>
          </div>

          {/* Two column paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-[#4A4035] text-[15px] leading-[1.95] mb-12">
            <p>
              Our guides are certified, our vehicles maintained to the highest standards, and
              our commitment to responsible tourism means that the communities and ecosystems
              we work within are genuinely better for our presence.
            </p>
            <p>
              Every detail of your journey — from your first enquiry to the moment you land
              back home — is handled by our dedicated team in Arusha. We are not a booking
              platform; we are people who love this country and want you to love it too.
            </p>
          </div>

          {/* Feature row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10 border-t border-[#EAE4D9]">
            {[
              { label: 'Expert Local Guides',    desc: 'Certified, experienced, and passionate about sharing Tanzania with the world.' },
              { label: 'Responsible Tourism',    desc: 'Every journey supports conservation and the communities we work alongside.' },
              { label: 'End-to-End Service',     desc: 'From first enquiry to safe return — our Arusha team handles every detail.' },
            ].map((f) => (
              <div key={f.label} className="flex items-start gap-4">
                <div className="w-1 h-10 bg-[#C8A45C] flex-shrink-0 mt-1 rounded-full" />
                <div>
                  <p className="font-bold text-[#1B2A4A] text-[13.5px] mb-1">{f.label}</p>
                  <p className="text-[#6B6259] text-[13px] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/book" variant="primary" size="md">Plan Your Safari</Button>
          </div>

        </div>
      </section>

      {/* ══ 4. VALUES — numbered list ════════════════ */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14 items-end">
            <div className="lg:col-span-2">
              <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
                What Drives Us
              </p>
              <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                Our Values &amp; Commitments
              </h2>
              <div className="w-10 h-[3px] bg-[#C8A45C] mt-4" />
            </div>
            <div className="text-right hidden lg:block">
              <a href="/book"
                className="inline-flex items-center gap-2 text-[#C8A45C] text-[11px] font-bold tracking-[0.18em] uppercase hover:gap-3 transition-all duration-200">
                Work With Us <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Values — compact rows */}
          <div className="divide-y divide-[#EAE4D9]">
            {values.map((v) => (
              <div key={v.number}
                className="grid grid-cols-1 sm:grid-cols-[60px_200px_1fr] gap-3 sm:gap-6 py-5 items-baseline">
                <p className="text-[#C8A45C]/25 font-bold text-[28px] leading-none select-none hidden sm:block"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                  {v.number}
                </p>
                <h3 className="font-bold text-[#1B2A4A] text-[13px] uppercase tracking-wide flex items-center gap-2 sm:block">
                  <span className="text-[#C8A45C]/30 font-bold text-[20px] sm:hidden" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>{v.number}</span>
                  {v.title}
                </h3>
                <p className="text-[#6B6259] text-[13.5px] leading-[1.75]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 5. FULL BLEED IMAGE BREAK ════════════════ */}
      <div className="relative h-[320px] sm:h-[400px] overflow-hidden">
        <img src={imgSerengeti2} alt="Serengeti plains"
          className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#050E1C]/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-[#C8A45C] text-[10px] font-bold tracking-[0.40em] uppercase mb-4">Ready to Explore?</p>
            <h2 style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.1,
            }}>
              Let's Plan Your Safari
            </h2>
            <div className="mt-8">
              <Button to="/book" variant="primary" size="lg">Plan a Trip</Button>
            </div>
          </div>
        </div>
      </div>

      {/* ══ 6. PARTNERS ══════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20 border-t border-[#EAE4D9] overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center mb-12">
          <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
            Accreditations &amp; Memberships
          </p>
          <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-4"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
            We Are Represented On
          </h2>
          <div className="w-10 h-[3px] bg-[#C8A45C] mx-auto" />
        </div>

        <div className="flex justify-center gap-16">
          {partners.map((p) => (
            <div key={p.name}
              className="flex flex-col items-center justify-center group cursor-default">
              <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-[#E4DDD3] bg-white group-hover:border-[#C8A45C]/60 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <img src={p.img} alt={p.name}
                  className="w-full h-full object-contain p-1.5" />
              </div>
              <p className="mt-2.5 text-[10px] font-bold tracking-wider uppercase text-[#9B8E80] group-hover:text-[#C8A45C] transition-colors duration-300 whitespace-nowrap">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
