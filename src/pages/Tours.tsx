import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

/* ── Local images ─────────────────────────────────── */
import imgArusha     from '../assets/IMAGES/Arusha/Arusha 1.jpg';
import imgArusha2    from '../assets/IMAGES/Arusha/Arusha 2.jpg';
import imgTarangire  from '../assets/IMAGES/tarangire/tarangire 1.jpg';
import imgTarangire4 from '../assets/IMAGES/tarangire/tarangire 4.jpg';
import imgManyara    from '../assets/IMAGES/MANYARA/MANYARA 1.jpg';
import imgManyara4   from '../assets/IMAGES/MANYARA/manyara 4.jpg';
import imgRuaha      from '../assets/IMAGES/ruaha/ruaha 1.jpg';
import imgSerengeti  from '../assets/IMAGES/Serengeti/Serengeti 3.jpg';
import imgNyerere    from '../assets/IMAGES/Nyerere/Nyerere 1.jpg';
import imgKili       from '../assets/IMAGES/kilimanjaro/kilimanjaro 1.jpg';
import imgKili4      from '../assets/IMAGES/kilimanjaro/kilimanjaro 4.jpg';
import imgNgoro      from '../assets/IMAGES/ngorongoro/ngorongoro 1.jpg';

/* ── Destinations ─────────────────────────────────── */
const destinations = [
  { name: 'Arusha National Park',         image: imgArusha    },
  { name: 'Tarangire National Park',      image: imgTarangire },
  { name: 'Lake Manyara National Park',   image: imgManyara   },
  { name: 'Ruaha National Park',          image: imgRuaha     },
  { name: 'Serengeti National Park',      image: imgSerengeti },
  { name: 'Nyerere National Park',        image: imgNyerere   },
  { name: 'Kilimanjaro National Park',    image: imgKili      },
  { name: 'Ngorongoro Conservation Area', image: imgNgoro     },
];

/* ── Tour packages ────────────────────────────────── */

/* ═══════════════════════════════════════════════════
   TOURS PAGE (Homepage)
═══════════════════════════════════════════════════ */
export const Tours: React.FC = () => {
  useEffect(() => {
    document.title = 'Mswahili Tours & Safaris — Tanzania Safari Specialists';
  }, []);

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src={imgSerengeti}
          alt="Serengeti plains at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns"
        />
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
            Mswahili Tours &amp; Safaris
          </h1>
          <p className="text-white/65 text-[15px] sm:text-[16px] max-w-xl mx-auto leading-relaxed mb-10 font-light animate-fadeInUp stagger-3">
            Africa's leading destination management company — crafting unforgettable journeys across Tanzania's most iconic landscapes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-4">
            <Button to="/book" variant="primary" size="lg">Plan a Trip</Button>
            <Button to="/about" variant="outline" size="lg">About Us</Button>
          </div>
        </div>
      </section>

      {/* ══ 2. WHY TANZANIA ══════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
                Discover Tanzania
              </p>
              <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-4"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                Why Tanzania Safari?
              </h2>
              <div className="w-10 h-[3px] bg-[#C8A45C] mb-7" />
              <p className="text-[#4A4035] text-[15px] leading-[1.95]">
                Tanzania is one of Africa's top safari destinations. This vibrant and beautiful country,
                with exceptional parks and reserves, is blessed with unparalleled game viewing and
                dazzling tropical beaches. From the Great Migration of the Serengeti to the remote parks,
                Tanzania offers superb game viewing than any other safari destination in Africa.
                Almost 40% of the country is protected and set aside for conservation — we are here
                to make your African dreams come true.
              </p>
              <div className="mt-8">
                <Button to="/book" variant="primary" size="md">Plan Your Safari</Button>
              </div>
            </div>

            {/* Image grid — 2x2 improved */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                {/* Left — tall */}
                <div className="overflow-hidden rounded-2xl" style={{ height: '220px' }}>
                  <img src={imgArusha2} alt="Arusha National Park"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Right — tall */}
                <div className="overflow-hidden rounded-2xl" style={{ height: '220px' }}>
                  <img src={imgKili4} alt="Kilimanjaro"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {/* Bottom left */}
                <div className="overflow-hidden rounded-2xl" style={{ height: '220px' }}>
                  <img src={imgManyara4} alt="Lake Manyara"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Bottom right */}
                <div className="overflow-hidden rounded-2xl" style={{ height: '220px' }}>
                  <img src={imgTarangire4} alt="Tarangire"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 3. RECOMMENDED DESTINATIONS ══════════════ */}
      <DestinationsCarousel />

      {/* ══ 5. COMBINE YOUR SAFARI WITH ══════════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
              Extend Your Journey
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Combine Your Safari With...
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                img: imgKili,
                title: 'Mt. Kilimanjaro Trekking',
                body: `Mt. Kilimanjaro is a true definition of natural wonder that every adventurer is dreaming to conquer. At 5,895 m, Kilimanjaro is the highest point in Africa. Climbing to Uhuru peak takes 5 to 9 days depending on the route. The more days, the higher the possibility to conquer the summit. Each route offers different attractions and challenges. You only need to be fit enough and equipped with all the basic and necessary gear for hiking. Let us guide you to the summit.`,
                link: '/book?type=kilimanjaro-trek',
              },
              {
                img: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=80',
                title: 'Zanzibar Island',
                body: `The allure of Zanzibar is timeless and magical. White sands and turquoise waters ring the island, and African, Indian, Arabic and Persian influences intertwine in Stone Town to form a rich cultural backdrop. Whether as post-safari relaxation or as a stand-alone destination, the beaches on Zanzibar offer a quintessential tropical island paradise.`,
                link: '/book?type=zanzibar',
              },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col">
                {/* Image — taller, full rounded */}
                <div className="relative overflow-hidden rounded-2xl mb-7" style={{ height: '420px' }}>
                  <img src={item.img} alt={item.title} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/40 via-transparent to-transparent" />
                  {/* Floating label */}
                  <div className="absolute top-5 left-5">
                    <span className="bg-[#C8A45C] text-[#0F1829] text-[9px] font-bold tracking-[0.20em] uppercase px-3 py-1.5 rounded-full">
                      {i === 0 ? 'Trekking' : 'Beach & Culture'}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-serif text-[22px] font-bold text-[#8B6914] italic mb-3">
                  {item.title}
                </h3>
                <div className="w-8 h-[2px] bg-[#C8A45C] mb-5" />
                <p className="text-[#4A4035] text-[14.5px] leading-[1.9] flex-1">
                  {item.body}
                </p>
                <div className="mt-7">
                  <a href={item.link}
                    className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3 rounded-sm transition-colors duration-200 shadow-[0_2px_12px_rgba(27,42,74,0.20)] hover:shadow-[0_4px_20px_rgba(27,42,74,0.35)]">
                    Explore Packages <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. WEATHER & BEST TIME ═══════════════════ */}
      <WeatherSection />

    </div>
  );
};

/* ═══════════════════════════════════════════════════
   DESTINATIONS CAROUSEL
═══════════════════════════════════════════════════ */
const DestinationsCarousel: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const slidesPerView = 4;
  const totalSlides   = Math.ceil(destinations.length / slidesPerView);

  React.useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % totalSlides), 3500);
    return () => clearInterval(t);
  }, [totalSlides]);

  const visible = destinations.slice(current * slidesPerView, current * slidesPerView + slidesPerView);

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="mb-12 text-center">
          <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-3">
            Explore Tanzania
          </p>
          <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
            Recommended Safari Destinations
          </h2>
          <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto" />
        </div>

        <div key={current} className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
          {visible.map((d, i) => (
            <div key={d.name}
              className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer"
              style={{ animationDelay: `${i * 0.07}s` }}>
              <img src={d.image} alt={d.name} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/75 via-[#050E1C]/10 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-semibold text-[13px] leading-snug group-hover:text-[#C8A45C] transition-colors duration-300">
                  {d.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={[
                'rounded-full transition-all duration-300',
                current === i ? 'w-7 h-2 bg-[#C8A45C]' : 'w-2 h-2 bg-[#C8A45C]/25 hover:bg-[#C8A45C]/50',
              ].join(' ')}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   MONTHLY WEATHER DATA
═══════════════════════════════════════════════════ */
const monthlyWeather = [
  { month: 'JAN', label: 'January',   desc: `January marks the end of the shorter rainy season. Tanzania's short, dry season begins, lasting a few months. High temperatures are generally in the 80s°F while lows range from the upper 50s to low 70s°F. Expect clear, sunny days — ideal for game viewing.` },
  { month: 'FEB', label: 'February',  desc: `February is one of the best months to visit Tanzania. Firmly in the dry season with long sunny days and excellent game viewing. Temperatures in the low 80s°F. Calving season in the Serengeti — a spectacular time to witness predator-prey interactions.` },
  { month: 'MAR', label: 'March',     desc: `March marks the beginning of the long rains (masika), which run through May. Rain tends to fall in heavy afternoon showers. Parks remain open and wildlife is abundant. Lush green landscapes provide dramatic photography backdrops.` },
  { month: 'APR', label: 'April',     desc: `April is the peak of the long rains. Many luxury camps close for maintenance. However, Southern Circuit parks and Zanzibar diving remain popular. Low season rates offer significant discounts for those willing to brave occasional heavy showers.` },
  { month: 'MAY', label: 'May',       desc: `May sees the tail end of the long rains. The bush is lush and green, tourist numbers are very low. Wildlife concentrates around permanent water making for excellent, uncrowded game viewing. Temperatures are mild, ranging from the mid-60s to high 70s°F.` },
  { month: 'JUN', label: 'June',      desc: `June marks the start of the dry season and the beginning of the Great Migration river crossings in the northern Serengeti. Temperatures cool down, especially at altitude. Excellent game viewing as animals gather around waterholes.` },
  { month: 'JUL', label: 'July',      desc: `July is peak safari season. Dry, clear weather makes for outstanding game viewing. The Great Migration is in full swing with dramatic Mara River crossings. This is the busiest month — book well in advance.` },
  { month: 'AUG', label: 'August',    desc: `August continues the prime dry season. Game viewing is at its absolute best. Large concentrations of wildlife gather around water sources. The Wildebeest Migration crossing continues. Days are warm and sunny, nights are cool.` },
  { month: 'SEP', label: 'September', desc: `September is still excellent for safari. The dry season continues, vegetation is sparse and animals are easy to spot. Wildebeest begin their return south. Temperatures are warm and comfortable with fewer crowds than July–August.` },
  { month: 'OCT', label: 'October',   desc: `October sees the beginning of the short rains (vuli), usually light and brief. The landscape begins to green up. Wildlife remains plentiful as wildebeest begin returning to the southern Serengeti. A good shoulder season with fewer tourists.` },
  { month: 'NOV', label: 'November',  desc: `November is a transitional month with short rains that can be unpredictable. The wildebeest calving season begins in the southern Serengeti. The bush greens up beautifully and birdlife is spectacular. Some lodges offer shoulder season rates.` },
  { month: 'DEC', label: 'December',  desc: `December is popular, particularly between Christmas and New Year. The short rains typically taper off by mid-December. The Serengeti fills with wildebeest calves by late December. Warm and humid — light clothing with a rain layer is advisable.` },
];

/* ═══════════════════════════════════════════════════
   WEATHER SECTION
═══════════════════════════════════════════════════ */
const WeatherSection: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const current = monthlyWeather[active];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
            Planning Your Trip
          </p>
          <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
            Best Time &amp; Weather Guide
          </h2>
          <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto mb-5" />
          <p className="text-[#4A4035] text-[14.5px] leading-[1.9] max-w-2xl mx-auto">
            Tanzania is accessible all year round. Each season offers a unique safari experience —
            from the dramatic Great Migration to lush green landscapes and budget-friendly lodges.
          </p>
        </div>

        {/* ── Season cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {[
            { season: 'Dry Season',   months: 'June – October',        label: 'Peak Season',     desc: 'Best game viewing, Great Migration crossings, clear skies.', color: 'border-[#C8A45C]/40 bg-[#C8A45C]/05', badge: 'bg-[#C8A45C] text-[#0F1829]' },
            { season: 'Green Season', months: 'December – March',      label: 'Great Value',      desc: 'Lush landscapes, newborn calves, fewer crowds.', color: 'border-[#1B2A4A]/10 bg-[#F8F5F0]', badge: 'bg-[#1B2A4A] text-white' },
            { season: 'Low Season',   months: 'Mid-March – June, Nov', label: 'Budget Friendly',  desc: 'Discounted rates, quiet parks, dramatic scenery.', color: 'border-[#1B2A4A]/10 bg-[#F8F5F0]', badge: 'bg-[#1B2A4A] text-white' },
          ].map((s) => (
            <div key={s.season}
              className={`border rounded-2xl px-6 py-5 hover:shadow-[0_4px_20px_rgba(27,42,74,0.08)] transition-shadow duration-300 ${s.color}`}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="font-bold text-[#1B2A4A] text-[15px]">{s.season}</p>
                <span className={`flex-shrink-0 text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ${s.badge}`}>
                  {s.label}
                </span>
              </div>
              <p className="text-[#C8A45C] text-[11.5px] font-semibold mb-2">{s.months}</p>
              <p className="text-[#6B6259] text-[13px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Month tabs ── */}
        <div className="bg-[#F8F5F0] rounded-2xl p-6 sm:p-8">
          <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-5">
            Monthly Weather Details
          </p>

          {/* Tabs */}
          <div className="border-b border-[#E4DDD3] mb-7">
            <div className="flex overflow-x-auto pb-0.5 scrollbar-none">
              {monthlyWeather.map((m, i) => (
                <button key={m.month} onClick={() => setActive(i)}
                  className={[
                    'px-3.5 py-2.5 text-[10.5px] font-bold tracking-[0.18em] uppercase transition-all duration-200 border-b-2 -mb-px',
                    active === i
                      ? 'text-[#8B6914] border-[#C8A45C]'
                      : 'text-[#9B8E80] border-transparent hover:text-[#8B6914]',
                  ].join(' ')}>
                  {m.month}
                </button>
              ))}
            </div>
          </div>

          {/* Month content */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#8B6914] italic mb-4">
              Tanzania weather in {current.label}
            </h3>
            <p className="text-[#4A4035] text-[14.5px] leading-[1.9]">{current.desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
