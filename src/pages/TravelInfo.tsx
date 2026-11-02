import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

import imgHero from '../assets/IMAGES/Serengeti/Serengeti 4.jpg';

/* ─── Sections ───────────────────────────────────── */
const sections: {
  id: string;
  label: string;
  title: string;
  paragraphs: { heading?: string; text: string }[];
}[] = [
  {
    id: 'visa',
    label: 'Visa',
    title: 'Visa Requirements',
    paragraphs: [
      {
        text: 'Most visitors to Tanzania require a visa to enter. The good news is that Tanzania operates a straightforward tourist visa system that can be obtained online in advance or on arrival at major entry points.',
      },
      {
        heading: 'Standard Tourist Visa',
        text: 'Citizens of the UK, USA, Canada, Australia, EU, and most other countries can obtain a single-entry tourist visa on arrival or apply online at the Tanzania Immigration portal. The standard tourist visa costs USD 50 and is valid for 90 days.',
      },
      {
        heading: 'East Africa Multi-Country Visa',
        text: 'If you plan to visit Tanzania, Kenya and Uganda in the same trip, you can apply for a shared East Africa Tourist Visa (USD 100) which grants multiple entries across all three countries.',
      },
      {
        heading: 'Visa on Arrival',
        text: 'Available at Julius Nyerere International Airport (DAR), Kilimanjaro International Airport (JRO), and Zanzibar International Airport (ZNZ), as well as major land border crossings.',
      },
      {
        heading: 'Visa-Free Countries',
        text: 'Citizens of some African Union member states may enter Tanzania visa-free. Always check the latest requirements with the Tanzanian Embassy or official immigration website before travel.',
      },
    ],
  },
  {
    id: 'besttime',
    label: 'Best Time',
    title: 'Best Time to Visit',
    paragraphs: [
      {
        text: 'Tanzania is a year-round destination — but the season you choose will significantly shape your experience, whether you are planning a safari, a Kilimanjaro climb, or a beach holiday on Zanzibar.',
      },
      {
        heading: 'Dry Season (June – October)',
        text: 'The best overall time for wildlife safaris. Vegetation is sparse, animals concentrate around water sources, and game viewing is at its most spectacular. The Great Migration Mara River crossings happen in July and August. This is also the ideal season for climbing Kilimanjaro.',
      },
      {
        heading: 'Short Dry Season (January – February)',
        text: 'A second excellent window for safaris, particularly in the Serengeti where the wildebeest calving season takes place — one of the most dramatic wildlife events in Africa. Zanzibar is sunny and dry.',
      },
      {
        heading: 'Long Rains (March – May)',
        text: 'The heaviest rainfall of the year. Many luxury camps in the northern parks close for maintenance. Southern Circuit parks (Ruaha, Nyerere) and Zanzibar diving remain excellent. Significant discounts available.',
      },
      {
        heading: 'Short Rains (November – December)',
        text: 'Brief afternoon showers, generally manageable. Landscapes are lush and green, birdlife is exceptional, and the parks are less crowded. A good shoulder season option with reduced rates.',
      },
    ],
  },
  {
    id: 'health',
    label: 'Health',
    title: 'Health & Vaccinations',
    paragraphs: [
      {
        text: 'Tanzania requires that all travellers arriving from yellow fever-endemic countries present a valid Yellow Fever vaccination certificate. Even if not required, we strongly recommend getting vaccinated as a precaution.',
      },
      {
        heading: 'Yellow Fever (Required)',
        text: 'Mandatory if arriving from a yellow fever-endemic country — most of sub-Saharan Africa and parts of South America.',
      },
      {
        heading: 'Malaria Prevention',
        text: 'Tanzania is a malaria zone. Consult your doctor about appropriate antimalarial medication (atovaquone-proguanil, doxycycline, or mefloquine) at least 4–6 weeks before departure. Use DEET-based insect repellent and sleep under treated mosquito nets.',
      },
      {
        heading: 'Other Recommended Vaccinations',
        text: 'Hepatitis A & B, Typhoid, and Rabies (if trekking or in remote areas) are all strongly recommended. Follow current COVID-19 entry requirements.',
      },
      {
        heading: 'Travel Insurance',
        text: 'Comprehensive travel insurance including medical evacuation is essential. We include AMREF Flying Doctors emergency evacuation coverage with all Kilimanjaro climbs and remote safari packages.',
      },
    ],
  },
  {
    id: 'packing',
    label: 'Packing',
    title: 'What to Pack',
    paragraphs: [
      {
        text: 'Packing the right gear makes a significant difference to your comfort and enjoyment — especially for a Kilimanjaro climb or a remote bush safari.',
      },
      {
        heading: 'Safari Packing List',
        text: 'Neutral-coloured clothing (khaki, olive, beige) — avoid bright colours. Long-sleeved shirts and trousers for evening insect protection. Lightweight fleece for early morning game drives. Wide-brimmed hat, high-SPF sunscreen, binoculars (8×42 recommended), camera with telephoto lens, closed-toe shoes, and DEET-based insect repellent.',
      },
      {
        heading: 'Kilimanjaro Packing List',
        text: 'Layering is essential — temperatures range from tropical at the base to below freezing at the summit. You will need: waterproof outer shell jacket and trousers, down mid-layer, moisture-wicking base layers, warm hat and balaclava, insulated gloves, gaiters, waterproof hiking boots (broken in), trekking poles, headlamp, and a sleeping bag rated to at least -10°C.',
      },
      {
        heading: 'Zanzibar',
        text: 'Light tropical clothing, swimwear, a rash guard for snorkelling, reef-safe sunscreen, modest clothing for Stone Town (covered shoulders and knees), and sandals or flip-flops.',
      },
    ],
  },
  {
    id: 'money',
    label: 'Money',
    title: 'Money & Currency',
    paragraphs: [
      {
        text: 'The official currency of Tanzania is the Tanzanian Shilling (TZS). However, US Dollars are widely accepted for major transactions including safari packages, hotel bills, and park fees.',
      },
      {
        heading: 'US Dollars',
        text: 'Accepted almost universally for tourist services. Bring clean, unmarked bills printed after 2006 — older or damaged notes are frequently rejected. USD 100 bills often attract better exchange rates.',
      },
      {
        heading: 'ATMs & Cards',
        text: 'ATMs are available in Arusha, Dar es Salaam, Moshi, and Stone Town. Visa and Mastercard are accepted at larger hotels and lodges, but many smaller establishments are cash-only. Inform your bank of travel plans to avoid card blocks.',
      },
      {
        heading: 'Tipping Guide',
        text: 'Tipping is customary and important. Recommended amounts: safari guide USD 15–20/day, camp staff USD 5–10/day, Kilimanjaro guide USD 20–25/day, porter USD 8–12/day, driver USD 10–15/day.',
      },
    ],
  },
  {
    id: 'gettinghere',
    label: 'Getting Here',
    title: 'Getting to Tanzania',
    paragraphs: [
      {
        text: 'Tanzania is well-connected to major international hubs with several entry points depending on your destination.',
      },
      {
        heading: 'Kilimanjaro International Airport (JRO)',
        text: 'The main gateway for the Northern Circuit (Serengeti, Ngorongoro, Tarangire) and Kilimanjaro trekking. Direct flights from Amsterdam (KLM), Doha (Qatar Airways), Dubai (Flydubai), Nairobi, and Addis Ababa.',
      },
      {
        heading: 'Dar es Salaam — Julius Nyerere (DAR)',
        text: "Tanzania's largest international airport, serving the Southern Circuit and connecting to Zanzibar. Direct flights from London (British Airways), Amsterdam (KLM), Dubai (Emirates), Istanbul (Turkish Airlines), and numerous African cities.",
      },
      {
        heading: 'Zanzibar International Airport (ZNZ)',
        text: 'Receives direct flights from Dubai, Doha, Istanbul, and European charter routes. A 20-minute ferry from Dar es Salaam is also a popular option.',
      },
      {
        heading: 'Domestic Connections',
        text: 'Coastal Aviation, Air Excel, Auric Air and Precision Air operate regular scheduled flights between all major airstrips within Tanzania. Charter flights can be arranged by our team to suit any itinerary.',
      },
    ],
  },
  {
    id: 'safety',
    label: 'Safety',
    title: 'Safety & Security',
    paragraphs: [
      {
        text: 'Tanzania is one of the safest countries in Africa for travellers, with a reputation for political stability, peaceful communities, and a welcoming attitude towards visitors. Millions of tourists visit Tanzania each year without incident.',
      },
      {
        heading: 'General Safety',
        text: 'Exercise normal travel awareness as you would in any unfamiliar destination. Keep valuables secure, avoid displaying expensive jewellery or electronics in crowded areas, and use reputable taxis or your hotel\'s recommended transport.',
      },
      {
        heading: 'Safari Safety',
        text: 'Always follow your guide\'s instructions in national parks. Do not leave your vehicle in game areas without permission, maintain a safe distance from wildlife, and never feed animals.',
      },
      {
        heading: 'Kilimanjaro',
        text: 'The primary risk on Kilimanjaro is altitude sickness (AMS). Our certified guides monitor all climbers daily using pulse oximeters and will make descent decisions in the interest of your safety. Follow the guide\'s pace, stay well hydrated, and never ignore symptoms.',
      },
      {
        heading: 'Emergency Contacts',
        text: 'Tanzania Police — 112. AMREF Flying Doctors — +254 20 6000 090. Our 24/7 emergency line is available to all clients during their journey.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════
   TRAVEL INFO PAGE
═══════════════════════════════════════════════════ */
export const TravelInfo: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    document.title = 'Tanzania Travel Information | Visa, Health, Packing \u0026 More \u2014 Mswahili Tours';
    window.scrollTo({ top: 0 });
  }, []);

  const current = sections[active];

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={imgHero} alt="Travel Information"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns" />
        <div className="absolute inset-0 bg-[#050E1C]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/70 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.35em] uppercase mb-5 animate-fadeInUp stagger-1">
            Plan Your Journey
          </p>
          <h1 className="text-white leading-[1.05] mb-6 animate-fadeInUp stagger-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 500, fontStyle: 'italic',
              textShadow: '0 2px 32px rgba(0,0,0,0.40)',
            }}>
            Travel Information
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[16px] max-w-xl mx-auto leading-relaxed mb-10 font-light animate-fadeInUp stagger-3">
            Everything you need to know before your Tanzania adventure — visa, health, packing, money, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-4">
            <Button to="/book" variant="primary" size="lg">Plan a Trip</Button>
            <Button to="/book?inquiry=true" variant="outline" size="lg">Ask a Question</Button>
          </div>
        </div>
      </section>

      {/* ══ 2. CONTENT ═══════════════════════════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="mb-12">
            <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">
              Practical Guide
            </p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Before You Travel
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4" />
          </div>

          {/* Tab strip */}
          <div className="border-b border-[#E4DDD3] mb-12">
            <div className="flex overflow-x-auto pb-0.5 scrollbar-none">
              {sections.map((s, i) => (
                <button key={s.id} onClick={() => setActive(i)}
                  className={[
                    'px-4 py-3 text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-200 border-b-2 -mb-px whitespace-nowrap',
                    active === i
                      ? 'text-[#8B6914] border-[#C8A45C]'
                      : 'text-[#9B8E80] border-transparent hover:text-[#8B6914]',
                  ].join(' ')}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">

            {/* ── Main content ── */}
            <div>
              <h3 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-5"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}>
                {current.title}
              </h3>
              <div className="w-8 h-[2px] bg-[#C8A45C] mb-8" />

              <div className="space-y-7">
                {current.paragraphs.map((p, i) => (
                  <div key={i}>
                    {p.heading && (
                      <p className="font-bold text-[#1B2A4A] text-[15px] uppercase tracking-wide mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45C] flex-shrink-0" />
                        {p.heading}
                      </p>
                    )}
                    <p className="text-[#4A4035] text-[15px] leading-[1.95]">
                      {p.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5 lg:sticky lg:top-[120px]">

              {/* Topic nav */}
              <div className="bg-white rounded-2xl border border-[#EAE4D9] p-6">
                <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.32em] uppercase mb-4">
                  All Topics
                </p>
                <div className="space-y-1">
                  {sections.map((s, i) => (
                    <button key={s.id} onClick={() => setActive(i)}
                      className={[
                        'w-full text-left px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-200 flex items-center gap-2.5',
                        active === i
                          ? 'bg-[#C8A45C]/10 text-[#8B6914]'
                          : 'text-[#6B6259] hover:bg-[#F8F5F0] hover:text-[#1B2A4A]',
                      ].join(' ')}>
                      <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-transform ${active === i ? 'text-[#C8A45C]' : 'text-[#C8A45C]/30'}`} />
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1B2A4A] rounded-2xl p-6">
                <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.32em] uppercase mb-3">
                  Ready to Book?
                </p>
                <p className="text-white/60 text-[14px] leading-relaxed mb-5">
                  Our team is available 7 days a week to answer travel questions and help plan your perfect Tanzania journey.
                </p>
                <Button to="/book" variant="primary" size="md">Plan a Trip</Button>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
