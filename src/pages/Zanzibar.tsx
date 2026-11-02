import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { ChevronRight, Check } from 'lucide-react';

/* ─── Images ─────────────────────────────────────── */
import imgHero      from '../assets/IMAGES/zanzibar/zanzibar.jpg';
import imgBeach     from '../assets/IMAGES/zanzibar/kwendwa.jpg';
import imgStoneTown from '../assets/IMAGES/zanzibar/stone.jpg';
import imgSpice     from '../assets/IMAGES/zanzibar/Spice Island.jpg';
import imgDiving    from '../assets/IMAGES/zanzibar/Mnemba.jpg';
import imgDhow      from '../assets/IMAGES/zanzibar/Sunset Dhow Cruises.jpg';
import imgNungwi    from '../assets/IMAGES/zanzibar/zanzibar 2.jpg';
import imgJozani    from '../assets/IMAGES/zanzibar/Jozani Chwaka.jpg';
import imgZanzibar5 from '../assets/IMAGES/zanzibar/zanzibari  5.jpg';
import imgZanzibar4 from '../assets/IMAGES/zanzibar/zanzibar 4.jpg';
import imgKili2     from '../assets/IMAGES/kilimanjaro/kilimanjaro 2.jpg';
import imgSerengeti from '../assets/IMAGES/Serengeti/Serengeti 1.jpg';
import imgZanzibar  from '../assets/IMAGES/zanzibar/zanzibar 1.jpg';

/* ─── Experiences tabs ───────────────────────────── */
const tabs = [
  {
    id: 'beaches',
    label: 'Beaches',
    img: imgBeach,
    title: 'Nungwi & Kendwa',
    sub: 'Northern Coast · White Sand',
    body: `Nungwi and Kendwa sit at the very northern tip of Zanzibar, where the Indian Ocean meets the Zanzibar Channel in a wash of extraordinary turquoise. These are the island's most celebrated shores — powdery white sand, warm shallow waters, and a lively atmosphere that comes alive at sunset with beach bars, fire dancers and the glow of lanterns reflecting off the sea.

Unlike much of Zanzibar's coastline, Nungwi and Kendwa are blessed with a tidal pattern that keeps the water deep even at low tide, meaning you can swim, snorkel or simply wade in at any hour of the day. The coral reefs just offshore teem with sea turtles, colourful reef fish and gentle rays — a snorkeller's paradise accessible without a boat.`,
  },
  {
    id: 'stonetown',
    label: 'Stone Town',
    img: imgStoneTown,
    title: 'Stone Town',
    sub: 'UNESCO Heritage · Swahili Culture',
    body: `Stone Town is one of the most extraordinary places in Africa — a UNESCO World Heritage Site and the living, breathing soul of Zanzibar. Its narrow coral-stone alleyways wind between centuries-old merchant houses adorned with the island's iconic hand-carved brass-studded doorways, each one a masterpiece of Swahili, Arab and Indian craftsmanship.

Lose yourself in the labyrinth of the old medina, past fragrant spice stalls, bustling fish markets and the imposing walls of the Old Fort — the oldest standing building on Zanzibar. As evening falls, make your way to Forodhani Gardens Night Market on the seafront, where local vendors grill fresh octopus, lobster and Zanzibar pizza over open charcoal fires as traditional wooden dhows glide silently past in the harbour.`,
  },
  {
    id: 'diving',
    label: 'Diving',
    img: imgDiving,
    title: 'Mnemba Atoll & Reefs',
    sub: 'Indian Ocean · Marine Sanctuary',
    body: `Beneath the turquoise surface of the Indian Ocean surrounding Zanzibar lies one of the most biodiverse marine ecosystems on the planet. Mnemba Atoll, a protected marine sanctuary just off the northeast coast, is the jewel of Zanzibar diving — a pristine ring of coral teeming with hawksbill sea turtles, spinner dolphins, white-tip reef sharks, and over 300 species of tropical fish moving in vivid, kaleidoscopic shoals.

Visibility regularly exceeds 20 metres, and the warm 27°C water means no wetsuit is needed. Whether you are drifting over shallow gardens of staghorn coral on your first snorkel, or descending the dramatic outer wall of the atoll on a technical dive, these waters offer a depth of wonder that is genuinely hard to leave. PADI courses are available for all levels right on the island.`,
  },
  {
    id: 'spice',
    label: 'Spice Farms',
    img: imgSpice,
    title: 'The Spice Island',
    sub: 'Heritage Tours · Local Culture',
    body: `Long before Zanzibar was known for its beaches, it was known for its spices. For centuries, the island was the world's largest producer of cloves, and the trade in cinnamon, vanilla, nutmeg, cardamom and black pepper drew merchant ships from Arabia, India and Persia to its shores — shaping its culture, its architecture and its cuisine in ways that endure to this day.

A spice farm tour is one of the most sensory experiences Zanzibar offers. Walk through lush, fragrant plantations with a local guide who will place raw spices directly in your hands — snap open a vanilla pod, crush a cardamom seed, peel back cinnamon bark straight from the tree. The tour typically ends with a traditional Zanzibari lunch cooked with the very spices you have just harvested, served on banana leaves beneath the shade of a coconut palm.`,
  },
  {
    id: 'dhow',
    label: 'Dhow Sailing',
    img: imgDhow,
    title: 'Sunset Dhow Cruises',
    sub: 'Indian Ocean · Traditional Sailing',
    body: `There are few experiences in East Africa as quietly magnificent as sailing the Indian Ocean aboard a traditional Zanzibari dhow. These hand-built wooden vessels have plied these waters for over a thousand years, their triangular lateen sails catching the same monsoon winds that once carried Arab and Persian traders to these shores laden with gold, ivory and spice.

Your dhow glides silently out of Stone Town harbour as the muezzin's call drifts across the water and the old city's minarets catch the last light of afternoon. The vessel anchors at a remote sandbank barely above the surface of the sea — you wade ashore into warm, knee-deep water while the crew grills freshly caught fish, octopus and prawns over charcoal on the deck. As the sun dissolves into the horizon in a slow bloom of amber and rose, there is nowhere else on Earth you would rather be.`,
  },
  {
    id: 'forest',
    label: 'Jozani Forest',
    img: imgJozani,
    title: 'Red Colobus Monkeys',
    sub: 'Jozani National Park · Wildlife',
    body: `Deep in the heart of Zanzibar, far from the beach bars and spice markets, lies one of East Africa's most intimate wildlife sanctuaries. Jozani Chwaka Bay National Park is the island's only national park and the last stronghold on Earth of the Zanzibar red colobus — a striking, rust-furred monkey found absolutely nowhere else in the world, its population numbering just a few thousand individuals.

Guided trails wind through ancient coral rag forest, where shafts of light filter through a canopy alive with birdsong and the rustle of colobus troops moving overhead, close enough to hear their breath. The forest gives way to a remarkable mangrove boardwalk that floats above a tidal ecosystem of extraordinary richness — mudskippers, fiddler crabs and wading birds picking through the roots as the tide pulls in from the bay. It is a side of Zanzibar that most visitors never see, and one that stays with you long after you leave.`,
  },
];

/* ═══════════════════════════════════════════════════
   BEST TIME SECTION
═══════════════════════════════════════════════════ */
const seasons = [
  { label: 'Jun – Oct',  full: 'June – October',      badge: 'Peak Season', desc: 'Dry skies, calm seas and perfect underwater visibility — the best all-round time to visit. Beaches are at their finest, diving is exceptional, and the weather is reliably sunny with low humidity.', best: true  },
  { label: 'Dec – Feb',  full: 'December – February',  badge: 'Great Value', desc: 'Warm and mostly sunny with only occasional brief showers. The island buzzes with festive energy. Excellent diving with warm water and good visibility across the reefs.', best: false },
  { label: 'Mar – May',  full: 'March – May',           badge: 'Low Season',  desc: 'Long rains (Masika) bring heavy afternoon showers. Lush green landscapes, very low prices and beautifully quiet beaches — ideal for budget-conscious travellers.', best: false },
  { label: 'November',   full: 'November',              badge: 'Short Rains', desc: 'Brief Vuli showers between long spells of sunshine. Good shoulder season rates, a quiet island, and a beautifully green landscape after the rains.', best: false },
];

const BestTimeSection: React.FC<{ imgNungwi: string; imgDiving: string; imgDhow: string }> = ({ imgNungwi, imgDiving, imgDhow }) => (
  <section className="bg-white py-16 sm:py-24 border-t border-[#EAE4D9]">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* Left — season list */}
        <div>
          <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">When to Visit</p>
          <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] mb-4"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
            Best Time for Zanzibar
          </h2>
          <div className="w-10 h-[3px] bg-[#C8A45C] mb-8" />

          <div className="space-y-3">
            {seasons.map((s) => (
              <div key={s.full}
                className={`flex items-start gap-4 px-5 py-4 rounded-xl border ${
                  s.best ? 'bg-[#C8A45C]/08 border-[#C8A45C]/30' : 'bg-[#F8F5F0] border-[#EAE4D9]'
                }`}>
                <span className={`flex-shrink-0 mt-0.5 text-[11px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full whitespace-nowrap ${
                  s.best ? 'bg-[#C8A45C] text-[#0F1829]' : 'bg-[#1B2A4A] text-white'
                }`}>
                  {s.badge}
                </span>
                <div>
                  <p className="font-bold text-[#1B2A4A] text-[14px] mb-1">{s.full}</p>
                  <p className="text-[#6B6259] text-[14px] leading-[1.75]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image stack */}
        <div className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-2xl" style={{ height: '300px' }}>
            <img src={imgNungwi} alt="Zanzibar beach"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-2xl" style={{ height: '180px' }}>
              <img src={imgDiving} alt="Diving"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-2xl" style={{ height: '180px' }}>
              <img src={imgDhow} alt="Dhow sailing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <p className="text-[#6B6259] text-[13px] italic border-l-2 border-[#C8A45C]/40 pl-4 mt-1 leading-relaxed">
            Ocean temperature stays at 25–29°C year-round — swimming and snorkelling are always on the menu.
          </p>
        </div>

      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   ZANZIBAR PAGE
═══════════════════════════════════════════════════ */
export const Zanzibar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    document.title = 'Zanzibar Island Holidays | Beaches, Stone Town \u0026 Diving \u2014 Mswahili Tours';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={imgHero} alt="Zanzibar"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns" />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-[#050E1C]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/90 via-[#050E1C]/20 to-transparent" />

        {/* Gold top accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45C]/60 to-transparent" />

        {/* Center content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          {/* Eyebrow with line */}
          <div className="flex items-center justify-center gap-4 mb-6 animate-fadeInUp stagger-1">
            <div className="h-px w-12 bg-[#C8A45C]/70" />
            <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.50em] uppercase">
              The Spice Island · Indian Ocean
            </p>
            <div className="h-px w-12 bg-[#C8A45C]/70" />
          </div>

          {/* Main title */}
          <h1
            className="text-white mb-6 animate-fadeInUp stagger-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 10vw, 8rem)',
              fontWeight: 500,
              fontStyle: 'italic',
              lineHeight: 0.9,
              textShadow: '0 4px 40px rgba(0,0,0,0.30)',
            }}
          >
            Zanzibar
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-7 animate-fadeInUp stagger-3">
            <div className="h-px w-16 bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45C]" />
            <div className="h-px w-16 bg-white/20" />
          </div>

          {/* Subtitle */}
          <p className="text-white/60 text-[16px] sm:text-[18px] max-w-lg mx-auto leading-relaxed font-light mb-10 animate-fadeInUp stagger-3">
            White sands, turquoise waters, and centuries of Swahili culture — Africa's most magical island escape.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-4">
            <Button to="/book?type=zanzibar" variant="primary" size="lg">Plan Your Trip</Button>
            <Button to="/book?inquiry=true" variant="outline" size="lg">Get a Quote</Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3 opacity-30">
          <div className="w-px h-14 bg-white" />
          <span className="text-white text-[11px] tracking-[0.4em] uppercase">Scroll</span>
        </div>
      </section>

      {/* ══ 2. OVERVIEW — editorial full-width ═══════ */}
      <section className="bg-[#F8F5F0] py-20 sm:py-28 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Top — heading + text + highlights + button */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start mb-12">
            <div>
              <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">Overview</p>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.7rem, 4vw, 3.2rem)',
                fontWeight: 500,
                fontStyle: 'italic',
                color: '#1B2A4A',
                lineHeight: 1.1,
              }}>
                Africa's Island<br />Paradise
              </h2>
              <div className="w-10 h-[3px] bg-[#C8A45C] mt-5" />
            </div>

            <div className="space-y-5 text-[#4A4035] text-[16px] leading-[2]">
              <p>
                Zanzibar is a semi-autonomous archipelago lying off the sun-drenched coast of Tanzania —
                an island world comprising the main island of Unguja alongside Pemba, Mafia and dozens of
                smaller coral gems scattered across the Indian Ocean. For centuries, African, Arab, Indian
                and Persian traders have woven their cultures into a single, extraordinary Swahili civilisation,
                one you can feel in every carved doorway, taste in every spice, and hear in every melody
                drifting through the harbour breeze.
              </p>
              <p>
                At its heart stands <strong>Stone Town</strong> — the island's historic capital and a UNESCO
                World Heritage Site. Step beyond its labyrinthine alleys and the island reveals itself in full:
                powdery white beaches, centuries-old spice plantations heavy with the scent of clove and cinnamon,
                rare wildlife found nowhere else on Earth, and warm crystalline waters among the finest diving
                destinations in the Indian Ocean.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                {['UNESCO Stone Town', 'World-class diving', 'Pristine beaches', 'Swahili culture', 'Spice farm tours', 'Red colobus monkeys'].map((item) => (
                  <div key={item}
                    className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45C] flex-shrink-0" />
                    <span className="text-[#4A4035] text-[14px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button to="/book?type=zanzibar" variant="primary" size="md">Plan Your Zanzibar Trip</Button>
              </div>
            </div>
          </div>

          {/* Bottom — images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="overflow-hidden rounded-2xl" style={{ height: '260px' }}>
              <img src={imgBeach} alt="Zanzibar beach"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-2xl" style={{ height: '260px' }}>
              <img src={imgStoneTown} alt="Stone Town"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-2xl" style={{ height: '260px' }}>
              <img src={imgSpice} alt="Spice farm"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </section>

      {/* ══ 3. EXPERIENCES ═══════════════════════════ */}
      {/* ══ 3. EXPERIENCES ═══════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6 mb-12">
            <div>
              <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-3">What to Do</p>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 500,
                fontStyle: 'italic',
                color: '#1B2A4A',
                lineHeight: 1.1,
              }}>
                Zanzibar Experiences
              </h2>
            </div>
            <div className="w-10 h-[3px] bg-[#C8A45C] lg:mb-2" />
          </div>

          {/* Tab strip — open, no card */}
          <div className="border-b border-[#EAE4D9] mb-12">
            <div className="flex overflow-x-auto pb-0.5 scrollbar-none">
              {tabs.map((t, i) => (
                <button key={t.id} onClick={() => setActiveTab(i)}
                  className={[
                    'px-5 py-3.5 text-[12.5px] font-bold tracking-[0.18em] uppercase transition-all duration-200 border-b-2 -mb-px whitespace-nowrap',
                    activeTab === i
                      ? 'text-[#8B6914] border-[#C8A45C]'
                      : 'text-[#9B8E80] border-transparent hover:text-[#1B2A4A]',
                  ].join(' ')}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active content */}
          {(() => {
            const t = tabs[activeTab];
            const isEven = activeTab % 2 === 0;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">

                {/* Image — full height, no inner card border */}
                <div className={`group overflow-hidden rounded-2xl ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  style={{ height: 'clamp(280px, 40vw, 520px)' }}>
                  <img src={t.img} alt={t.title} loading="lazy"
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700" />
                </div>

                {/* Text */}
                <div className={`flex flex-col justify-center py-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.40em] uppercase mb-4">{t.sub}</p>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    color: '#1B2A4A',
                    lineHeight: 1.1,
                  }} className="mb-1">
                    {t.title}
                  </h3>
                  <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mb-7" />
                  <p className="text-[#4A4035] text-[16px] leading-[2] mb-8 whitespace-pre-line">
                    {t.body}
                  </p>
                  <div>
                    <a href="/book?type=zanzibar"
                      className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] text-white text-[12px] font-bold tracking-[0.18em] uppercase px-7 py-3.5 rounded-sm transition-colors duration-200 shadow-[0_2px_14px_rgba(27,42,74,0.20)] hover:shadow-[0_4px_22px_rgba(27,42,74,0.35)]">
                      Book This Experience <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* ══ 4. BEST TIME ═════════════════════════════ */}
      <BestTimeSection imgNungwi={imgNungwi} imgDiving={imgDiving} imgDhow={imgDhow} />

      {/* ══ 5. COMBINE ═══════════════════════════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-24 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-14">
            <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">Extend Your Journey</p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Combine Zanzibar With a Safari
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto mb-6" />
            <p className="text-[#4A4035] text-[15px] leading-[1.9] max-w-2xl mx-auto">
              Zanzibar pairs perfectly with Tanzania's world-famous safari circuit. Track the Big Five on the savannah, then unwind on a pristine Indian Ocean beach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: imgKili2,
                badge: 'Trekking',
                title: 'Mt. Kilimanjaro',
                desc: "Conquer Africa's highest peak at 5,895 m, then recover on Zanzibar's beaches — the ultimate Tanzania adventure combination.",
                link: '/kilimanjaro',
              },
              {
                img: imgSerengeti,
                badge: 'Wildlife',
                title: 'Tanzania Safari Circuit',
                desc: 'Serengeti, Ngorongoro, Tarangire — witness the Great Migration and the Big Five, then fly to Zanzibar for the perfect beach finale.',
                link: '/book?type=safari-zanzibar',
              },
            ].map((item) => (
              <div key={item.title} className="group flex flex-col">
                <div className="relative overflow-hidden rounded-2xl mb-7" style={{ height: '380px' }}>
                  <img src={item.img} alt={item.title} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/40 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-[#C8A45C] text-[#0F1829] text-[11px] font-bold tracking-[0.20em] uppercase px-3 py-1.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-[22px] font-bold text-[#8B6914] italic mb-3">{item.title}</h3>
                <div className="w-8 h-[2px] bg-[#C8A45C] mb-5" />
                <p className="text-[#4A4035] text-[15px] leading-[1.9] flex-1">{item.desc}</p>
                <div className="mt-7">
                  <a href={item.link}
                    className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] text-white text-[12.5px] font-bold tracking-[0.15em] uppercase px-7 py-3 rounded-sm transition-colors duration-200 shadow-[0_2px_12px_rgba(27,42,74,0.20)]">
                    Explore Packages <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
