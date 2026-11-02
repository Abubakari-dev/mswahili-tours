import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

/* ─── Images ─────────────────────────────────────── */
import imgHero        from '../assets/IMAGES/Serengeti/Serengeti 1.jpg';
import imgSerengeti   from '../assets/SAFARI/Serengeti.jpg';
import imgNgoro       from '../assets/SAFARI/NGORONGORO CREATER.jpg';
import imgTarangire   from '../assets/SAFARI/tarangire.jpg';
import imgRuaha       from '../assets/SAFARI/ruaha 5.jpg';
import imgNyerere     from '../assets/SAFARI/Nyerere.jpg';
import imgArusha      from '../assets/SAFARI/Arusha.jpg';
import imgGombe       from '../assets/SAFARI/GOMBE.jpg';
import imgMahale      from '../assets/SAFARI/MAHALE.jpg';
import imgKatavi      from '../assets/SAFARI/KATAVI.jpg';
import imgSanane      from '../assets/SAFARI/SANANE.jpg';
import imgSaadani     from '../assets/SAFARI/saadani.jpg';
/* ─── Fallback images for parks without dedicated photos ── */
import imgManyara     from '../assets/IMAGES/MANYARA/MANYARA 1.jpg';
import imgMikumi      from '../assets/IMAGES/Serengeti/Serengeti 3.jpg';
import imgMagoroto    from '../assets/SAFARI/MAGOROTO.jpg';
import imgUdzungwa    from '../assets/SAFARI/Udzungwa.jpg';

const circuits = [
  {
    id: 'northern',
    label: 'Northern Circuit',
    desc: 'Tanzania\'s most celebrated safari region — home to the Serengeti, Ngorongoro, and the Great Migration.',
    parks: [
      {
        id: 'serengeti',
        name: 'Serengeti National Park',
        badge: 'Most Popular',
        img: imgSerengeti,
        img2: imgSerengeti,
        short: `The Serengeti is Tanzania's most iconic national park and one of the greatest wildlife spectacles on Earth. Covering 14,763 km² of open savannah, it is home to the world-famous Great Migration — over 1.5 million wildebeest, 250,000 zebra and 500,000 gazelle moving in an endless cycle across the plains in search of fresh grazing.

Beyond the Migration, the Serengeti offers year-round exceptional wildlife viewing. The park shelters the world's largest lion population, resident cheetah families, leopards in acacia trees, and all of the Big Five. Dawn and dusk game drives deliver encounters that simply cannot be replicated anywhere else on Earth.`,
        bestTime: 'June – October for Migration crossings; January – March for calving season',
      },
      {
        id: 'ngorongoro',
        name: 'Ngorongoro Crater',
        badge: 'UNESCO Heritage',
        img: imgNgoro,
        img2: imgNgoro,
        short: `The Ngorongoro Crater is one of the natural wonders of Africa — a vast, intact volcanic caldera stretching 260 km² on the floor, sheltering one of the highest concentrations of wildlife on the continent. Within its ancient walls live an estimated 25,000 large animals, including the rare black rhino, all of the Big Five, and enormous herds of wildebeest, zebra and buffalo.

Designated a UNESCO World Heritage Site, the crater provides a unique self-contained ecosystem where predators and prey coexist in extraordinary density. The views from the crater rim at sunrise — watching the mist lift to reveal the world below — are among the most breathtaking in all of Africa.`,
        bestTime: 'Year-round — the crater is accessible in all seasons',
      },
      {
        id: 'tarangire',
        name: 'Tarangire National Park',
        badge: 'Elephant Country',
        img: imgTarangire,
        img2: imgTarangire,
        short: `Tarangire is Tanzania's best-kept secret — a park of extraordinary character dominated by ancient baobab trees, the winding Tarangire River, and the largest elephant population in northern Tanzania. During the dry season, the river acts as a magnet, drawing thousands of animals to its banks in concentrations that rival anywhere in Africa.

The park is famed for its enormous elephant herds — sometimes numbering over 300 individuals — as well as large numbers of buffalo, wildebeest, zebra and the elusive fringe-eared oryx. Tarangire also offers exceptional bird watching with over 550 recorded species.`,
        bestTime: 'June – October for peak dry season wildlife concentrations',
      },
      {
        id: 'manyara',
        name: 'Lake Manyara National Park',
        badge: 'Scenic Beauty',
        img: imgManyara,
        img2: imgManyara,
        short: `Lake Manyara National Park is one of Tanzania's most scenic and diverse parks, wedged between the dramatic walls of the Great Rift Valley escarpment and the soda shores of Lake Manyara itself. Though compact at just 325 km², its variety is extraordinary — dense groundwater forest, open floodplains, acacia woodlands, and the alkaline lake shore.

Manyara is world-famous for its tree-climbing lions — a behaviour unique to this park and very few other places on Earth — and for the spectacular flocks of flamingos that turn the lake shore pink. Elephants move freely through the forests, hippos wallow in the channels, and the birding is exceptional with over 400 species recorded.`,
        bestTime: 'Year-round; flamingos most visible November – May',
      },
      {
        id: 'arusha',
        name: 'Arusha National Park',
        badge: 'Day Trip Gem',
        img: imgArusha,
        img2: imgArusha,
        short: `Arusha National Park is the closest national park to Arusha city and one of Tanzania's most underrated — a compact but extraordinarily diverse park encompassing the dramatic Ngurdoto Crater, the alkaline Momella Lakes, and the forested slopes of Mount Meru, Tanzania's second highest peak at 4,566 metres.

The park offers a completely different safari experience — here you walk among giraffe and buffalo through montane forest, kayak on the crater lake, and on clear days enjoy one of the finest views of Mount Kilimanjaro. Colobus monkeys swing through the forest canopy, flamingos feed on the alkaline lake shores, and the birdlife is extraordinary.`,
        bestTime: 'Year-round; best Kilimanjaro views in the dry season',
      },
    ],
  },
  {
    id: 'southern',
    label: 'Southern Circuit',
    desc: 'Tanzania\'s wild and largely unexplored south — vast wilderness, remote parks, and walking safaris.',
    parks: [
      {
        id: 'ruaha',
        name: 'Ruaha National Park',
        badge: 'Wild & Remote',
        img: imgRuaha,
        img2: imgRuaha,
        short: `Ruaha is Tanzania's largest national park at over 20,000 km² — a vast, wild wilderness of open miombo woodland, granite kopjes, and the seasonal Great Ruaha River. Its remoteness means visitor numbers are low, giving those who venture here an authentic, unshared experience of Africa at its most raw and undisturbed.

The park supports Tanzania's largest elephant population and one of the highest concentrations of lions on the continent. Buffalo herds of several thousand, greater and lesser kudu, sable antelope and wild dogs add to the remarkable biodiversity. Ruaha is a destination for seasoned safari travellers seeking something beyond the well-trodden northern circuit.`,
        bestTime: 'June – October for the dry season and best game viewing',
      },
      {
        id: 'nyerere',
        name: 'Nyerere National Park',
        badge: 'Africa\'s Largest',
        img: imgNyerere,
        img2: imgNyerere,
        short: `Nyerere National Park — formerly Selous Game Reserve — is the largest protected area in Africa at over 50,000 km², and one of the largest in the world. A UNESCO World Heritage Site, it encompasses a vast mosaic of miombo woodland, open grassland, swamp, and the meandering channels of the Rufiji River — one of the most wildlife-rich waterways on the continent.

Unlike the northern parks, Nyerere offers a wider variety of safari activities: boat safaris on the Rufiji, walking safaris with armed rangers, fly camping, and fly-fishing. The park shelters Africa's largest lion and elephant populations, enormous crocodile and hippo numbers, wild dog, sable antelope and extraordinary birdlife.`,
        bestTime: 'June – October; dry season makes boat safaris particularly spectacular',
      },
      {
        id: 'mikumi',
        name: 'Mikumi National Park',
        badge: 'Southern Gateway',
        img: imgMikumi,
        img2: imgMikumi,
        short: `Mikumi National Park, known as the "Serengeti of the South," is Tanzania's most accessible park from Dar es Salaam — just 283 km away. The Mkata Floodplain at its heart supports abundant wildlife including lion, elephant, buffalo, hippo, giraffe, zebra and wildebeest in an open landscape strikingly similar to the Serengeti.

The park is an ideal option for travellers with limited time who still want a genuine big-game safari experience, and pairs perfectly with a visit to the nearby Udzungwa Mountains for hiking and waterfalls. Wildlife viewing is excellent year-round, with the dry season offering the most concentrated sightings.`,
        bestTime: 'June – October for dry season; accessible year-round',
      },
      {
        id: 'saadani',
        name: 'Saadani National Park',
        badge: 'Beach & Bush',
        img: imgSaadani,
        img2: imgSaadani,
        short: `Saadani National Park is a truly unique destination — the only coastal national park in East Africa where the bush meets the beach. Located on the Indian Ocean coast north of Dar es Salaam, the park offers the extraordinary experience of watching lion, buffalo, elephant and hippo against a backdrop of white sand and turquoise water.

The Wami River, which flows through the park and out to sea, is excellent for boat safaris — with crocodiles, hippos and a remarkable array of water birds. Green turtles nest on the beaches, and the marine area offers good snorkelling and diving just offshore.`,
        bestTime: 'June – February; avoid the long rains of March – May',
      },
    ],
  },
  {
    id: 'western',
    label: 'Western Circuit',
    desc: 'Remote, pristine, and extraordinary — Tanzania\'s western parks offer chimpanzee trekking and untouched wilderness.',
    parks: [
      {
        id: 'gombe',
        name: 'Gombe Stream National Park',
        badge: 'Jane Goodall\'s Home',
        img: imgGombe,
        img2: imgGombe,
        short: `Gombe Stream is Tanzania's smallest national park but arguably its most famous — the site where Dr Jane Goodall began her groundbreaking chimpanzee research in 1960, transforming our understanding of primate behaviour and human evolution. Today, visitors can trek through ancient forest to observe the habituated chimpanzee communities that Goodall first documented over 60 years ago.

Located on the eastern shore of Lake Tanganyika, the world's second deepest lake, Gombe can only be reached by boat — adding to its sense of remoteness and adventure. The forest is also home to olive baboons, red-tailed monkeys, and an extraordinary diversity of forest birds.`,
        bestTime: 'October – May; avoid the wet season June – September',
      },
      {
        id: 'mahale',
        name: 'Mahale Mountains NP',
        badge: 'Chimp Trekking',
        img: imgMahale,
        img2: imgMahale,
        short: `Mahale Mountains National Park is one of the most spectacular and remote wildlife destinations in Africa — a towering range of forested mountains rising directly from the turquoise shore of Lake Tanganyika, home to one of the largest remaining populations of wild chimpanzees on the continent.

There are no roads to Mahale — access is by light aircraft or by boat across the lake, which only adds to the sense of being somewhere truly extraordinary. Tracking the habituated M-group community through ancient forest, watching chimps groom, play and hunt just metres away, is an experience that ranks among the finest in all of Africa.`,
        bestTime: 'May – October; dry season for clearer trekking conditions',
      },
      {
        id: 'katavi',
        name: 'Katavi National Park',
        badge: 'Most Remote',
        img: imgKatavi,
        img2: imgKatavi,
        short: `Katavi is one of Africa's most remote and least visited national parks — a vast, pristine wilderness in western Tanzania that sees only a few hundred visitors each year. What it lacks in tourist infrastructure it more than compensates for in the sheer, unfiltered abundance of its wildlife.

During the dry season, the Katuma River and Katavi floodplains concentrate extraordinary numbers of hippo and crocodile, buffalo herds of several thousand, and lion prides that have never learned to fear humans. Roan and sable antelope, Defassa waterbuck, and wild dog add to the remarkable diversity. Coming here is as close as it gets to seeing Africa as it was a century ago.`,
        bestTime: 'June – October for peak dry season concentrations',
      },
    ],
  },
  {
    id: 'other',
    label: 'Other Reserves',
    desc: 'Unique reserves and game areas offering distinctive experiences beyond the main national park circuits.',
    parks: [
      {
        id: 'sanane',
        name: 'Sanane Game Reserve',
        badge: 'Lake Victoria',
        img: imgSanane,
        img2: imgSanane,
        short: `Sanane Island Game Reserve is a small but charming wildlife sanctuary located on an island in Lake Victoria, just off the shore from Mwanza — Tanzania's second largest city. The reserve is home to hippos, Nile crocodiles, vervet monkeys, olive baboons, and a rich variety of water birds, all set against the vast blue expanse of Africa's largest lake.

A boat trip to Sanane makes for an excellent half-day excursion from Mwanza, combining a wildlife experience with the unique atmosphere of Lake Victoria — its fishing communities, traditional wooden boats, and dramatic sunset light on the water. The reserve is well suited as an add-on to a longer western Tanzania itinerary.`,
        bestTime: 'Year-round; best combined with the dry season western circuit',
      },
      {
        id: 'magoroto',
        name: 'Magoroto Forest Reserve',
        badge: 'Forest Escape',
        img: imgMagoroto,
        img2: imgMagoroto,
        short: `Magoroto Forest Reserve is one of Tanzania's most beautiful and least-known hidden gems — a lush expanse of indigenous coastal forest near the town of Muheza, Tanga Region, characterised by towering trees, gurgling streams, a crater lake, and a remarkable sense of cool, green tranquillity far from the tourist trail.

The reserve is perfect for hiking, birdwatching in the Eastern Arc forest ecosystem, and simply escaping the heat of the coast. A comfortable forest lodge sits within the reserve, making it an ideal overnight retreat. Magoroto pairs well with a visit to the Amboni Caves and the beaches of Tanga for a complete northeastern Tanzania experience.`,
        bestTime: 'Year-round; cooler and greener during the rains',
      },
      {
        id: 'udzungwa',
        name: 'Udzungwa Mountains NP',
        badge: 'Primates & Falls',
        img: imgUdzungwa,
        img2: imgUdzungwa,
        short: `The Udzungwa Mountains are one of Africa's most important biodiversity hotspots — ancient Eastern Arc forests that have remained largely unchanged for millions of years, sheltering an extraordinary concentration of endemic species found nowhere else on Earth. The park is home to six primate species including the Udzungwa red colobus and the Sanje crested mangabey, discovered as recently as 1981.

The park's most spectacular attraction is Sanje Falls — a breathtaking cascade plunging over 170 metres through the forest, widely considered the tallest waterfall in Tanzania. Guided forest trails wind through cathedral-like woodland where birdsong fills the air and the air is cool and moist year-round. An ideal complement to a southern circuit safari.`,
        bestTime: 'June – October; waterfalls at their most spectacular after the rains',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════
   SAFARIS PAGE
═══════════════════════════════════════════════════ */
export const Safaris: React.FC = () => {
  const [activeCircuit, setActiveCircuit] = useState(0);

  useEffect(() => {
    document.title = 'Tanzania Wildlife Safaris | Serengeti, Ngorongoro \u0026 More \u2014 Mswahili Tours';
    window.scrollTo({ top: 0 });
  }, []);

  const circuit = circuits[activeCircuit];

  return (
    <div className="w-full">

      {/* ══ 1. HERO ══════════════════════════════════ */}
      <section className="relative w-full h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img src={imgHero} alt="Tanzania Safari"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns" />
        <div className="absolute inset-0 bg-[#050E1C]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1C]/70 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.35em] uppercase mb-5 animate-fadeInUp stagger-1">
            Tanzania · East Africa
          </p>
          <h1 className="text-white leading-[1.05] mb-6 animate-fadeInUp stagger-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 500, fontStyle: 'italic',
              textShadow: '0 2px 32px rgba(0,0,0,0.40)',
            }}>
            Tanzania Safaris
          </h1>
          <p className="text-white/65 text-[16px] sm:text-[16px] max-w-xl mx-auto leading-relaxed mb-10 font-light animate-fadeInUp stagger-3">
            From the endless plains of the Serengeti to the remote wilderness of Katavi — discover Tanzania's extraordinary national parks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp stagger-4">
            <Button to="/book?type=serengeti-ngorongoro" variant="primary" size="lg">Plan a Safari</Button>
            <Button to="/book?inquiry=true" variant="outline" size="lg">Get a Quote</Button>
          </div>
        </div>
      </section>

      {/* ══ 2. INTRO ═════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20 border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-1">
              <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">Why Tanzania</p>              <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A] leading-snug"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                Africa's Greatest Safari Destination
              </h2>
              <div className="w-10 h-[3px] bg-[#C8A45C] mt-5" />
            </div>
            <div className="lg:col-span-2 space-y-5 text-[#4A4035] text-[16px] leading-[2]">
              <p>
                Tanzania protects almost 40% of its land area in national parks, game reserves and conservation areas — more than almost any other country on Earth. From the world-famous Northern Circuit to the remote western parks where chimpanzees roam lakeside forests, Tanzania offers a safari experience for every type of traveller.
              </p>
              <p>
                Our expert local guides know these landscapes intimately — bringing the bush alive in ways no guidebook can. Every itinerary is tailored to your interests, your pace, and your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. CIRCUIT TABS + PARK CARDS ════════════ */}
      <section className="bg-[#F8F5F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-12">
            <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">Where We Go</p>
            <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
              Tanzania's National Parks &amp; Reserves
            </h2>
            <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mx-auto" />
          </div>

          {/* Circuit tabs — no card, open background */}
          <div className="mb-12">

            <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-5">
              Select a Circuit
            </p>

            <div className="border-b border-[#E4DDD3] mb-8">
              <div className="flex overflow-x-auto pb-0.5 scrollbar-none">
                {circuits.map((c, i) => (
                  <button key={c.id} onClick={() => setActiveCircuit(i)}
                    className={[
                      'px-5 py-3 text-[12.5px] font-bold tracking-[0.18em] uppercase transition-all duration-200 border-b-2 -mb-px whitespace-nowrap',
                      activeCircuit === i
                        ? 'text-[#8B6914] border-[#C8A45C]'
                        : 'text-[#9B8E80] border-transparent hover:text-[#8B6914]',
                    ].join(' ')}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Circuit description */}
            <p className="text-[#4A4035] text-[15px] leading-[1.9] max-w-3xl">
              {circuit.desc}
            </p>

          </div>

          {/* Parks — alternating layout like Activities */}
          <div className="flex flex-col gap-16 mt-12">
            {circuit.parks.map((park, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={park.id}
                  className="group flex flex-col lg:flex-row gap-10 lg:gap-14 pb-16 border-b border-[#EAE4D9] last:border-0 last:pb-0">

                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-2xl flex-shrink-0 lg:w-[460px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    style={{ minHeight: 'clamp(240px, 45vw, 380px)' }}>
                    <img src={park.img} alt={park.name} loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/55 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="bg-[#C8A45C] text-[#0F1829] text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full">
                        {park.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-between flex-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <p className="text-[#C8A45C] text-[12px] font-bold tracking-[0.38em] uppercase mb-3">
                        {circuit.label}
                      </p>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                        fontWeight: 500,
                        fontStyle: 'italic',
                        color: '#1B2A4A',
                        lineHeight: 1.1,
                      }}>
                        {park.name}
                      </h3>
                      <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mb-6" />
                      <p className="text-[#4A4035] text-[16px] leading-[1.95] mb-7 whitespace-pre-line">
                        {park.short}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-5 border-t border-[#EAE4D9]">
                      <div className="flex items-center gap-5">
                        <a href={`/book?type=${park.id}`}
                          className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#0F1829] text-white text-[12px] font-bold tracking-[0.18em] uppercase px-6 py-3 rounded-sm transition-colors duration-200 shadow-[0_2px_10px_rgba(27,42,74,0.18)]">
                          Book Now <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-[#9B8E80] text-[13px]">
                          Best time: <span className="text-[#4A4035] font-medium">{park.bestTime}</span>
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

      {/* ══ 4. CTA ═══════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20 border-t border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-[#C8A45C] text-[12.5px] font-bold tracking-[0.32em] uppercase mb-4">Ready to Go?</p>
              <h2 className="font-bold tracking-[0.08em] uppercase text-[#1B2A4A]"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}>
                Plan Your Perfect Safari
              </h2>
              <div className="w-10 h-[3px] bg-[#C8A45C] mt-4 mb-6" />
              <p className="text-[#4A4035] text-[16px] leading-[1.9]">
                Our expert team will design a bespoke safari itinerary around your interests, budget, and travel dates — from the northern plains to the remote western forests.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button to="/book" variant="primary" size="lg">Plan a Safari</Button>
              <Button to="/book?inquiry=true" variant="outline" size="lg">Ask a Question</Button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
