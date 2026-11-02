import React, { useEffect } from 'react';
import { activitiesData } from '../data/activities';
import { Button } from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

import imgBalloon    from '../assets/Activity/hot air ballon.jpg';
import imgHotSpring  from '../assets/Activity/hot spring.jpg';
import imgWaterfall  from '../assets/Activity/waterfall.jpg';
import imgHistorical from '../assets/Activity/historical.jpg';
import imgCamping    from '../assets/Activity/camping.jpg';
import imgTour       from '../assets/Activity/tour.jpg';
import imgFishing    from '../assets/Activity/fishing.jpg';
import imgBirds      from '../assets/Activity/bird watching.jpg';
import imgBoat       from '../assets/Activity/boat safari.jpg';
import imgHero from '../assets/IMAGES/Serengeti/Serengeti 1.jpg';

export const Activities: React.FC = () => {
  useEffect(() => {
    document.title = 'Tanzania Safari Activities | Hot Air Balloon, Hiking \u0026 More \u2014 Mswahili Tours';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={imgHero} alt="Tanzania Activities"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns" />
        <div className="absolute inset-0 bg-[#050E1C]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/70 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.35em] uppercase mb-5 animate-fadeInUp stagger-1">
            Experiences · Tanzania
          </p>
          <h1
            className="text-white leading-[1.05] mb-6 animate-fadeInUp stagger-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 500,
              fontStyle: 'italic',
              textShadow: '0 2px 32px rgba(0,0,0,0.40)',
            }}
          >
            Activities
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[16px] max-w-xl mx-auto leading-relaxed mb-10 font-light animate-fadeInUp stagger-3">
            From dawn game drives on the Serengeti to floating above it all in a hot air balloon —
            every activity is guided by local experts who know this land intimately.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-4">
            <Button to="/book" variant="primary" size="lg">Book an Activity</Button>
            <Button to="/tours" variant="outline" size="lg">Browse Tours</Button>
          </div>
        </div>
      </section>

      {/* ══ 2. ACTIVITY CARDS ════════════════════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-14">
            <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Choose Your Adventure
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto" />
          </div>

          <div className="flex flex-col gap-16">
            {activitiesData.map((activity, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={activity.id}
                  className="group flex flex-col lg:flex-row gap-10 lg:gap-14 pb-16 border-b border-[#EAE4D9] last:border-0 last:pb-0">

                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-2xl flex-shrink-0 lg:w-[460px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    style={{ minHeight: 'clamp(260px, 50vw, 500px)' }}>
                    <img src={
                        activity.id === 'hot-air-balloon'       ? imgBalloon
                        : activity.id === 'hot-springs'         ? imgHotSpring
                        : activity.id === 'waterfalls'          ? imgWaterfall
                        : activity.id === 'historical-sites'    ? imgHistorical
                        : activity.id === 'camping'             ? imgCamping
                        : activity.id === 'fishing'             ? imgFishing
                        : activity.id === 'bird-watching'       ? imgBirds
                        : activity.id === 'boat-safari'         ? imgBoat
                        : imgTour
                      } alt={activity.title} loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/55 via-transparent to-transparent" />
                    {activity.badge && (
                      <div className="absolute top-5 left-5">
                        <span className="bg-[#C8A45C] text-[#0F1829] text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full">
                          {activity.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-between flex-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.38em] uppercase mb-3">
                        {activity.category}
                      </p>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                        fontWeight: 500,
                        fontStyle: 'italic',
                        color: '#1B2A4A',
                        lineHeight: 1.1,
                      }}>
                        {activity.title}
                      </h3>
                      <p className="text-[#C8A45C] text-[14px] font-medium mt-2 mb-4">
                        {activity.tagline}
                      </p>
                      <div className="w-10 h-[3px] bg-[#C8A45C] mb-6" />
                      <p className="text-[#4A4035] text-[16px] leading-[1.95] mb-5">
                        {activity.overview}
                      </p>
                      {activity.id === 'waterfalls' || activity.id === 'historical-sites' || activity.id === 'camping'
                        || activity.id === 'cultural-village-tours' || activity.id === 'coffee-tours'
                        || activity.id === 'fishing' || activity.id === 'bird-watching' || activity.id === 'boat-safari' ? (
                        <p className="text-[#4A4035] text-[15px] leading-[1.95]"
                          dangerouslySetInnerHTML={{ __html: activity.longDescription }} />
                      ) : (
                        <p className="text-[#4A4035] text-[15px] leading-[1.95]">
                          {activity.longDescription}
                        </p>
                      )}

                      {/* Hot springs — inline bold names in paragraph */}
                      {activity.id === 'hot-springs' && (
                        <div className="mt-6">
                          <p className="text-[#4A4035] text-[15px] leading-[1.95]">
                            Tanzania is home to several remarkable hot springs. The most notable include{' '}
                            <strong>Kikuletwa (Chemka Hot Springs)</strong> near Moshi/Arusha — warm, crystal-clear water perfect for swimming;{' '}
                            <strong>Maji Moto Kubwa</strong> in Lake Manyara National Park — scalding and sulfuric, ideal for safari sightseeing; and{' '}
                            <strong>Galanos Hot Springs</strong> in Tanga — warm mineral-rich water recommended for nature walks and skin therapy.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-[#EAE4D9]">
                      <div className="flex items-center gap-5">
                        <a href={`/book?activity=${activity.id}`}
                          className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] text-white text-[12px] font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-sm transition-colors duration-200 shadow-[0_2px_10px_rgba(27,42,74,0.18)]">
                          Book Now <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-[#9B8E80] text-[13px]">
                          Best time: <span className="text-[#4A4035] font-medium">{activity.bestTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══ 3. CTA ═══════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">
            Custom Itinerary
          </p>
          <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
            Can't Decide? We'll Help.
          </h2>
          <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto mb-6" />
          <p className="text-[#4A4035] text-[15px] leading-[1.9] max-w-xl mx-auto mb-10">
            Our local experts will combine activities into a seamless itinerary tailored
            exactly to your interests, timeline, and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/book" variant="primary" size="lg">Book Your Safari</Button>
            <Button to="/tours" variant="outline" size="lg">Browse Packages</Button>
          </div>
        </div>
      </section>

    </div>
  );
};
