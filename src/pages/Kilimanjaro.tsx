import React, { useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Check, ChevronRight } from 'lucide-react';

import imgHero from '../assets/IMAGES/kilimanjaro/kilimanjaro 1.jpg';
import imgK2   from '../assets/IMAGES/kilimanjaro/kilimanjaro 2.jpg';
import imgK3   from '../assets/IMAGES/kilimanjaro/kilimanjaro 3.jpg';
import imgK4   from '../assets/IMAGES/kilimanjaro/kilimanjaro 4.jpg';
import imgK5   from '../assets/IMAGES/kilimanjaro/kilimanjaro 5.jpg';

import routeLemosho  from '../assets/ROUTE/LEMOSHI.jpg';
import routeMachame  from '../assets/ROUTE/MACHAME.jpg';
import routeMarangu  from '../assets/ROUTE/MARANGU.jpg';
import routeRongai   from '../assets/ROUTE/RONGAI.jpg';
import routeShira    from '../assets/ROUTE/Shira.jpg';
import routeUmbwe    from '../assets/ROUTE/umbwe.jpg';
import routeNorthern from '../assets/ROUTE/Northern Circuit.jpg';
import iconSun  from '../assets/icons/sun-svgrepo-com.svg';
import iconMoon from '../assets/icons/moon-svgrepo-com.svg';

/* ─── Route data ──────────────────────────────────── */
const routes = [
  {
    name: 'Machame Route',
    img: routeMachame,
    days: '6 – 7 Days',
    difficulty: 'Moderate – Challenging',
    badge: 'Most Popular',
    desc: `Machame route, also known as the "Whiskey Route," is the most popular trekking route on Mt. Kilimanjaro due to its scenic beauty. The route is challenging and mostly suited for experienced hikers who benefit greatly from its excellent acclimatization profile.

The route starts from the southern part of the mountain, covering around 62 km through montane forest, moorland, and the Shira plateau — which can be muddy in the rainy season and dusty in the dry season. The climb passes close to the Lava Tower before reaching Barranco Huts, where the lower altitude provides an excellent acclimatization opportunity.

From there, hikers cross the steep Barranco Wall and descend to Karanga Camp through the alpine desert. Spending a night at Karanga gives you the best chance of reaching Barafu Camp in good condition, ready for the final push to Uhuru Peak.`,
    highlights: ['Most scenic route', 'Great acclimatization', 'Barranco Wall crossing', 'Diverse terrain zones'],
  },
  {
    name: 'Marangu Route',
    img: routeMarangu,
    days: '5 – 6 Days',
    difficulty: 'Moderate',
    badge: 'Classic Route',
    desc: `On the Marangu Route you will be following the oldest and most reputable path on Mount Kilimanjaro. As the most established route, it is also the only one with permanent shared dormitory huts with bunk beds — making it the preferred choice for those who prefer not to sleep in tents, or for travel during the wettest months.

Also known as the "Coca-Cola Route," Marangu is considered the easiest path up Kilimanjaro given its direct line and gradual slope. Unlike all other routes, the ascending and descending trails are the same path. It is, however, busy and does not traverse as much of the mountain as the western routes.

The Marangu Route takes a minimum of 5 days, though the 6-day option is recommended for better acclimatization. For first-time or less experienced hikers, this route is the best starting point.`,
    highlights: ['Hut accommodation', 'Gentlest gradient', 'Best for beginners', 'Well-established trail'],
  },
  {
    name: 'Lemosho Route',
    img: routeLemosho,
    days: '7 – 8 Days',
    difficulty: 'Moderate',
    badge: 'Most Scenic',
    desc: `Lemosho route starts from Londorossi gate on the western part of the mountain and covers around 70 km. It is preferred by many experienced hikers due to its remoteness, scenery, sunset views, excellent acclimatization and high summit success rate. Climbers encounter less traffic until the route joins the Machame route on the 3rd day.

Starting on the western side and traversing across the most spectacular parts of the mountain — including the Shira plateau, Lava Tower, Arrow Glacier and the Western Breach onto the Kibo caldera floor — the ascent to the summit is a relatively short, steep hike up the Kibo rim. Descent is via the Mweka route.

This route is inherently more adventurous due to the time spent at high altitude and the Western Breach approach. It should only be undertaken by fit individuals with experience at altitude. 8 days is ideal for better acclimatization.`,
    highlights: ['Highest success rate', 'Remote & uncrowded', 'Stunning Shira plateau', 'Full mountain traverse'],
  },
  {
    name: 'Rongai Route',
    img: routeRongai,
    days: '6 – 7 Days',
    difficulty: 'Moderate',
    badge: 'Quieter Path',
    desc: `The Rongai Route approaches Kilimanjaro from the northeastern side, bordering Tanzania and Kenya. Starting from the remote village of Nale Moru, the trail passes through lower farmland slopes and covers 73 km to Uhuru Peak — one of the longest but most successful routes due to its gradual ascent and fewer challenges.

Because of its remote location, Rongai has much lower traffic than other routes, retaining a true sense of unspoilt wilderness and offering a unique northern perspective of the mountain. During the hike you will encounter diverse wildlife, birds, and varied landscapes rarely seen on the busier southern routes.

The 7-day ascent begins on the eastern side of the national park — a relatively dry side with a short forest zone. It skirts the base of Mawenzi with an acclimatisation day at Mawenzi Tarn, then ascends via Gilman's Point to Uhuru Peak. Descent is via the Marangu route. Ideal for those seeking a quieter, more remote experience.`,
    highlights: ['Dry northern approach', 'Best in rainy season', 'Remote & low traffic', 'Mawenzi Tarn views'],
  },
  {
    name: 'Shira Route',
    img: routeShira,
    days: '7 Days',
    difficulty: 'Moderate – Challenging',
    badge: 'Western Approach',
    desc: `The Shira Route is located on the western part of the mountain, a few kilometres from the Lemosho route. Starting from Shira Gate and covering around 56 km to the summit, the trail passes through diverse vegetation zones and the spectacular Shira plateau before joining other trails at Barranco Camp, where a full acclimatization day is provided.

The 7-day ascent via Stella Point is most recommended for summit success. For those wanting a taste of Kilimanjaro National Park and the Shira Plateau without committing to a full climb, a 3-day hike on this route is also an option.

Starting at Morum Barrier on the northwestern side of Kilimanjaro, this trek joins the Machame Route above Shira 2 Camp on day 3, then circumnavigates Kibo to the south before summiting from Barafu via Stella Point. Descent is via the Mweka route. Highly recommended for practiced, experienced hikers.`,
    highlights: ['Shira plateau scenery', 'Stella Point summit', 'Lava tower views', 'Experienced hikers only'],
  },
  {
    name: 'Umbwe Route',
    img: routeUmbwe,
    days: '6 – 7 Days',
    difficulty: 'Very Challenging',
    badge: 'Most Challenging',
    desc: `The Umbwe Route has a well-deserved reputation as the most challenging route to the Kilimanjaro summit. Due to the fast ascent to high altitude, this route does not provide the necessary stages for adequate acclimatization.

The route is less visited compared to others because it has a poor record of altitude sickness — over 60% of hikers on this route experience significant effects. Umbwe is a direct, steep and short route to the summit. Its extreme difficulty makes it suitable only for highly experienced hikers and mountain climbers who are confident in their ability to acclimatize quickly and are specifically looking for a demanding challenge.

Hikers should be fully aware of the level of exertion and danger before booking this route — exactly what a rare breed of climbers is looking for.`,
    highlights: ['Fastest ascent', 'Most direct route', 'Experienced only', 'Maximum challenge'],
  },
  {
    name: 'Northern Circuit',
    img: routeNorthern,
    days: '9 – 10 Days',
    difficulty: 'Moderate',
    badge: 'Longest Route',
    desc: `The Northern Circuit is the newest and longest route on Kilimanjaro, offering the most comprehensive experience of the mountain. Beginning from Londorossi Gate on the western side — the same starting point as Lemosho — it diverges northward after the Shira plateau to circumnavigate the entire northern face of the mountain before approaching the summit from the south.

Covering over 90 km, the Northern Circuit takes 9 to 10 days and boasts the highest summit success rate of all routes due to its exceptional acclimatization profile. The extended time on the mountain allows your body to adjust gradually to altitude, greatly reducing the risk of altitude sickness. You will traverse remote, rarely-visited terrain on the northern slopes — a true wilderness experience that very few climbers ever see.

The route offers diverse and dramatic scenery throughout: lush rainforest, open moorland, the Shira plateau, the alpine desert of the northern slopes, and finally the glaciated summit zone. Descent is via the Mweka route. Ideal for those who want the best possible chance of reaching Uhuru Peak and are willing to invest the extra days for an unmatched Kilimanjaro experience.`,
    highlights: ['Highest success rate', 'Best acclimatization', 'Full mountain circuit', 'Remote north slopes'],
  },
];

/* ═══════════════════════════════════════════════════
   KILIMANJARO PAGE
═══════════════════════════════════════════════════ */
export const Kilimanjaro: React.FC = () => {
  useEffect(() => {
    document.title = 'Mount Kilimanjaro Trekking | Routes, Guides \u0026 Packages \u2014 Mswahili Tours';
    window.scrollTo({ top: 0 });
  }, []);

  const [activeRoute, setActiveRoute] = React.useState(0);

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src={imgK2}
          alt="Mount Kilimanjaro"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns"
        />
        <div className="absolute inset-0 bg-[#050E1C]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/70 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.35em] uppercase mb-5 animate-fadeInUp stagger-1">
            Africa's Highest Peak · 5,895 m
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
            Mount Kilimanjaro
          </h1>
          <p className="text-white/65 text-[15px] sm:text-[16px] max-w-xl mx-auto leading-relaxed mb-10 font-light animate-fadeInUp stagger-3">
            Conquer the Roof of Africa with Mswahili's certified mountain guides — dedicated to leading you safely to Uhuru Peak.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-4">
            <Button to="/book?type=kilimanjaro" variant="primary" size="lg">Book a Climb</Button>
            <Button to="/book?inquiry=true" variant="outline" size="lg">Get a Quote</Button>
          </div>
        </div>
      </section>

      {/* ══ 2. OVERVIEW ══════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
                Overview
              </p>
              <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-4"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                The Roof of Africa
              </h2>
              <div className="w-10 h-[3px] bg-[#C8A45C] mb-7" />
              <div className="space-y-5 text-[#4A4035] text-[15px] leading-[1.95]">
                <p>
                  Mt. Kilimanjaro is one of the world's most accessible high summits and a true definition
                  of natural wonder. Located near Moshi town in northern Tanzania, it stands at
                  <strong> 5,895 m</strong> — the highest freestanding mountain in the world, its
                  snow-capped peak rising dramatically above the surrounding plains.
                </p>
                <p>
                  The mountain is composed of three distinct volcanic cones: <strong>Kibo</strong> (5,895 m),
                  <strong> Mawenzi</strong> (5,149 m), and <strong>Shira</strong> (4,005 m). Kilimanjaro
                  National Park was designated a <strong>UNESCO World Heritage Site</strong> in 1987 and
                  no technical mountaineering experience is required to reach Uhuru Peak.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  'No technical climbing required',
                  'KPAP-certified guides',
                  'High-altitude medical protocols',
                  'AMREF Flying Doctor coverage',
                  'Private mess tents & chef',
                  'UNESCO World Heritage Site',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C8A45C] flex-shrink-0 mt-0.5" />
                    <span className="text-[#4A4035] text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button to="/book?type=kilimanjaro" variant="primary" size="md">Plan Your Climb</Button>
              </div>
            </div>

            {/* Image grid */}
            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl" style={{ height: '280px' }}>
                <img src={imgK4} alt="Kilimanjaro summit approach"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl" style={{ height: '180px' }}>
                  <img src={imgK3} alt="Kilimanjaro trail"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-2xl" style={{ height: '180px' }}>
                  <img src={imgK5} alt="Kilimanjaro landscape"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 3. WHY KILIMANJARO ═══════════════════════ */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#EAE4D9]">
        <div className="w-full px-6 sm:px-12 lg:px-24">

          {/* ── Why Bucket List ── */}
          <div className="mb-16 pb-16 border-b border-[#EAE4D9]">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
              The Ultimate Challenge
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-4"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Why Mt. Kilimanjaro Should Be On Your Bucket List?
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#4A4035] text-[15px] leading-[1.95]">
              <p>
                Many conclude climbing Mount Kilimanjaro to be the highlight experience in Tanzania. As Kilimanjaro
                is one of the world's most accessible high summits in the world, reaching Uhuru Peak is an adventure
                that can be accomplished both by <strong>first-time mountain trekkers</strong> and experienced mountain
                trekking enthusiasts.
              </p>
              <p>
                Climbing Kilimanjaro fits in well with a safari to the rest of Tanzania, and indeed great wildlife
                areas are so accessible by air or road. It would be a great pity not to plan this into your travel,
                even if it is not a full hike but only a single-day hike.
              </p>
            </div>
          </div>

          {/* ── Trekking Routes ── */}
          <div className="mb-10">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
              Choosing Your Path
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-4"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Mt. Kilimanjaro Trekking Routes
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mb-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#4A4035] text-[15px] leading-[1.95]">
            <div className="space-y-5">
              <p>
                Climbing to Uhuru Peak takes <strong>5 to 9 days</strong> depending on the route. The more days,
                the higher the possibility to conquer the summit. We recommend six mountain routes that you can
                choose to reach the summit — <strong>Marangu, Machame, Lemosho, Shira, Rongai, and Umbwe</strong>.
                All routes except Marangu and Rongai descend via Mweka. Each route offers different attractions
                and challenges.
              </p>
              <p>
                Regardless of the route you choose, you must be well prepared for the great challenge of the
                mountain. You need to be fit enough and equipped with all the basic and necessary gear for hiking.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                When you book with us, we will advise and guide you to choose the best route for your successful
                hike. Your fitness level can determine the number of days you should take to conquer Kilimanjaro.
                Taking a <strong>6 to 8-day hike</strong> with enough litres of drinking water greatly increases
                your chances of reaching Uhuru Peak.
              </p>
              <p>
                Normally, many hikers start to feel the hiking effect from <strong>3,000 m above sea level</strong>,
                while few will start feeling the effect before 3,000 m — these are mostly inexperienced hikers.
                Well-prepared and experienced hikers always reach the summit, following the guidelines of our
                highly experienced mountain guides. The longer the days one plans, the higher the chances of
                completing the hike due to a thorough acclimatization period.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button to="/book?type=kilimanjaro" variant="primary" size="md">Plan Your Climb</Button>
          </div>

        </div>
      </section>

      {/* ══ 4. CLIMATE ═══════════════════════════════ */}
      <section className="bg-[#F8F5F0] border-t border-[#EAE4D9] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-3">
              Before You Climb
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Climate &amp; Weather Guide
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto" />
          </div>

          {/* Season strips — no card, full width */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Long Rains',  period: 'Mid-March – Early June',  note: 'Heaviest rainfall season' },
              { label: 'Dry Season',  period: 'July – October',           note: 'Best climbing conditions' },
              { label: 'Short Rains', period: 'November – Mid-January',   note: 'Brief showers, still climbable' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[#C8A45C] text-[10px] font-bold tracking-[0.22em] uppercase mb-2">{s.label}</p>
                <p className="text-[#1B2A4A] font-bold text-[15px] mb-1">{s.period}</p>
                <div className="w-6 h-[2px] bg-[#C8A45C]/50 mx-auto mb-2" />
                <p className="text-[#6B6259] text-[12.5px]">{s.note}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#EAE4D9] mb-12" />

          {/* Temp + description — no card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Temp stats */}
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#C8A45C]/15 flex items-center justify-center flex-shrink-0">
                  <img src={iconSun} alt="Daytime" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[#C8A45C] text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">Daytime</p>
                  <p className="text-[#1B2A4A] font-bold text-[20px]">70° – 90°F</p>
                  <p className="text-[#6B6259] text-[12px]">At 3,000 – 7,000 ft altitude</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1B2A4A]/10 flex items-center justify-center flex-shrink-0">
                  <img src={iconMoon} alt="Night" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[#C8A45C] text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">Night</p>
                  <p className="text-[#1B2A4A] font-bold text-[20px]">50° – 60°F</p>
                  <p className="text-[#6B6259] text-[12px]">Cool, layers recommended</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-2">
              <p className="text-[#4A4035] text-[14.5px] leading-[1.9] mb-6">
                Tanzania enjoys a comfortable climate year-round, though conditions vary significantly by region.
                The tropical coast is hot and humid, while the central plateau is cooler and arid. At the altitudes
                of Kilimanjaro's lower slopes (3,000–7,000 ft), daytime temperatures are very comfortable — warm
                enough for light layers, cool enough to keep your energy up on the trail.
              </p>
              <p className="text-[#6B6259] text-[13px] leading-[1.8] italic border-l-2 border-[#C8A45C]/40 pl-4">
                These are averages — weather can be unpredictable. Check current conditions a few days before
                departure and verify the forecast for each stop on your itinerary, as conditions may vary.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-8 sm:px-16 lg:px-32">
        <hr className="border-t border-[#D6CEBD]" />
      </div>

      {/* ══ 5. ROUTES ════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="w-full px-6 sm:px-12 lg:px-24">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
              Plan Your Summit
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Trekking Routes
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto mb-6" />
            <p className="text-[#4A4035] text-[14.5px] leading-[1.9] max-w-2xl mx-auto">
              Six primary routes lead to Uhuru Peak. Summiting typically takes <strong>5 to 9 days</strong> —
              longer itineraries significantly improve your acclimatization and summit success rate.
            </p>
          </div>

          {/* Route selector — tabs */}
          <div className="bg-[#F8F5F0] rounded-2xl p-6 sm:p-8">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-5">
              Select a Route
            </p>

            {/* Tab strip */}
            <div className="border-b border-[#E4DDD3] mb-8">
              <div className="flex overflow-x-auto pb-0.5 scrollbar-none">
                {routes.map((r, i) => (
                  <button key={r.name} onClick={() => setActiveRoute(i)}
                    className={[
                      'px-4 py-3 text-[11px] font-bold tracking-[0.16em] uppercase transition-all duration-200 border-b-2 -mb-px whitespace-nowrap',
                      activeRoute === i
                        ? 'text-[#8B6914] border-[#C8A45C]'
                        : 'text-[#9B8E80] border-transparent hover:text-[#8B6914]',
                    ].join(' ')}>
                    {r.name.replace(' Route', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Active route content */}
            {(() => {
              const r = routes[activeRoute];
              const isEven = activeRoute % 2 === 0;
              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                  {/* Image card */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(27,42,74,0.10)] border border-[#EAE4D9]">
                      <div className="relative" style={{ height: '420px' }}>
                        <img src={r.img} alt={r.name} loading="lazy"
                          className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 right-4">
                          <span className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full">
                            {r.days}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <h3 className="font-serif text-[24px] font-bold text-[#8B6914] italic mb-1">{r.name}</h3>
                    <div className="w-8 h-[2px] bg-[#C8A45C] mb-5" />
                    <p className="text-[#4A4035] text-[14.5px] leading-[1.9] mb-6 whitespace-pre-line">{r.desc}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-7 pb-6 border-b border-[#E4DDD3]">
                      {r.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C8A45C] flex-shrink-0" />
                          <span className="text-[#4A4035] text-[12.5px]">{h}</span>
                        </div>
                      ))}
                    </div>

                    <a href={`/book?type=kilimanjaro&route=${r.name.split(' ')[0].toLowerCase()}`}
                      className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] text-white text-[10.5px] font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-sm transition-colors duration-200 shadow-[0_2px_10px_rgba(27,42,74,0.18)]">
                      Book This Route <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* ══ 6. COMBINE WITH SAFARI ═══════════════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-24 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-14">
            <p className="text-[#C8A45C] text-[11px] font-bold tracking-[0.32em] uppercase mb-4">
              Extend Your Journey
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Combine Your Climb With a Safari
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto mb-6" />
            <p className="text-[#4A4035] text-[14.5px] leading-[1.9] max-w-2xl mx-auto">
              Tanzania's iconic wildlife parks are just a short drive from Kilimanjaro's base. Make the most
              of your trip by pairing your summit with an unforgettable safari.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {[
              {
                img: imgHero,
                tag: 'Most Popular',
                title: 'Serengeti National Park',
                desc: "Home to the world's greatest wildlife spectacle — the Great Migration. Over 1.5 million wildebeest cross the plains in a dramatic, year-round cycle of life. Exceptional big cat sightings, vast open savannah, and luxury camps make Serengeti the crown jewel of Tanzania safaris.",
              },
              {
                img: imgK5,
                tag: 'UNESCO Heritage',
                title: 'Ngorongoro Crater',
                desc: "The world's largest intact volcanic caldera and a UNESCO World Heritage Site. The crater floor shelters an extraordinary concentration of wildlife year-round — including the rare black rhino, all of the Big Five, and tens of thousands of animals within its stunning 260 km² walls.",
              },
              {
                img: imgK3,
                tag: 'Classic Circuit',
                title: 'Tarangire & Manyara',
                desc: "Tarangire is famous for its enormous elephant herds and ancient baobab trees, especially spectacular during the dry season. Lake Manyara adds tree-climbing lions, flamingo-pink lake shores, and lush groundwater forests — a perfect introduction to Tanzania's Northern Circuit.",
              },
            ].map((item) => (
              <div key={item.title}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-[0_2px_16px_rgba(27,42,74,0.08)] hover:shadow-[0_8px_32px_rgba(27,42,74,0.18)] transition-shadow duration-300"
                style={{ height: '380px' }}>

                {/* Image */}
                <img src={item.img} alt={item.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                {/* Default overlay — title visible always */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/75 via-[#050E1C]/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  <span className="bg-[#C8A45C] text-[#0F1829] text-[9px] font-bold tracking-[0.20em] uppercase px-3 py-1.5 rounded-full mb-3 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-white font-bold text-[17px] leading-snug">{item.title}</h3>
                </div>

                {/* Hover overlay — full content */}
                <div className="absolute inset-0 bg-[#050E1C]/88 flex flex-col justify-center px-7 py-8
                  opacity-0 translate-y-3 transition-all duration-500
                  group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="bg-[#C8A45C] text-[#0F1829] text-[9px] font-bold tracking-[0.20em] uppercase px-3 py-1.5 rounded-full mb-4 self-start">
                    {item.tag}
                  </span>
                  <h3 className="text-white font-bold text-[18px] mb-3 leading-snug">{item.title}</h3>
                  <div className="w-8 h-[2px] bg-[#C8A45C] mb-4" />
                  <p className="text-white/80 text-[13.5px] leading-[1.85]">{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/book" variant="primary" size="md">Plan a Combined Trip</Button>
          </div>

        </div>
      </section>

    </div>
  );
};
