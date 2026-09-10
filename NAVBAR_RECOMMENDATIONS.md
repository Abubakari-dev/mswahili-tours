# Mswahili Tours & Safaris — Navbar & Page Structure Recommendations

Uchambuzi na mapendekezo ya muundo wa **Navbar (Menyu Kuu)** na **Kurasa (Pages)** za kuongeza ili kuboresha uzoefu wa mtumiaji (User Experience) na kuongeza uwezekano wa wateja kukata kozi/booking.

---

## 1. Tathmini ya Hali ya Sasa (Current Navbar & Routes)

### Link Zinazoonekana Sasa Kwenye Navbar:
- **Home** (`/`)
- **Kilimanjaro** (`/kilimanjaro`)
- **Zanzibar** (`/zanzibar`)
- **Activities** (`/activities`)
- **Plan a Trip** (CTA Button `/book`)

> [!NOTE]
> **Mapungufu Yaliyopo:**
> - **Kukosekana kwa Link ya "Safaris":** Mswahili Tours inatoa huduma za Safaris (Serengeti, Ngorongoro, Tarangire), lakini wateja hawaoni link ya Safaris kwenye Menyu Kuu.
> - **About Us ipo kwenye Logo pekee:** Wateja wengi hawajui kwamba kubofya Logo kunaenda ukurasa wa *About Us*.
> - **Kukosekana kwa Day Trips & Useful Travel Info:** Hakuna sehemu ya haraka inayotenganisha safari za siku 1 (excursions) na taarifa za maandalizi ya safari (Visa, Health, Gear lists).

---

## 2. Pendekezo la Muundo Mpya wa Navbar (Proposed Navigation)

Navbar inayopendekezwa inatumia **Dropdown Menus** za kisasa ili isijae kupita kiasi lakini impe mtumiaji uwezo wa kufika popote kwa mbofyo mmoja.

```
[ LOGO ]   Home | Safaris ▾ | Kilimanjaro ▾ | Zanzibar | Day Trips ▾ | About Us   [ Search ] [ Plan a Trip ]
```

### Mchanganuo wa Menyu na Yaliyomo:

| Jina la Link | Aina | Yaliyomo & Kurasa Ndogo (Sub-links) |
| :--- | :--- | :--- |
| **Home** | Direct Link | Ukurasa Mkuu |
| **Safaris** | Dropdown ▾ | - Serengeti National Park<br>- Ngorongoro Crater Safari<br>- Tarangire & Lake Manyara<br>- Budget & Luxury Packages |
| **Kilimanjaro** | Dropdown ▾ | - Trekking Routes (Lemosho, Machame, Marangu, Rongai)<br>- Climbing Gear & Preparation Guide |
| **Zanzibar** | Direct Link | Beach Holidays, Stone Town, Spice Tours |
| **Day Trips & Excursions** | Dropdown ▾ | - Materuni Waterfalls & Coffee Tour<br>- Chemka Hot Springs (Kikuletwa)<br>- Arusha National Park Day Trip |
| **About Us** | Direct Link | Mswahili Story, KPAP Certification, Client Reviews |
| **Plan a Trip** | CTA Button | Form ya Maombi / Booking (`/book`) |

---

## 3. Kurasa Mpya za Muhimu Zaidi Kuongeza Kwenye Project (Priority Pages)

> [!IMPORTANT]
> **1. `Safaris.tsx` (Tanzania Wildlife Safaris)**
> - **Sababu:** Serengeti na Ngorongoro ndizo kivutio namba 1 cha utalii Tanzania. Kuwa na ukurasa wa kujitegemea wa Safaris utaongeza mauzo na miongozo ya vifurushi vya wanyamapori.

> [!TIP]
> **2. `TravelInfo.tsx` au `FAQ.tsx` (Useful Travel Information)**
> - **Sababu:** Watalii wa kimataifa huuliza maswali kabla ya kusafiri: *"Msimu gani ni mzuri?"*, *"Nahitaji chanjo gani?"*, *"Nipake nini kwenye begi la Kilimanjaro?"*. Ukurasa huu unajenga uaminifu na kusaidia uwekaji wa tovuti kwenye Google (SEO).

---

## 4. Hatua Zilizopendekezwa Za Kufuata (Next Steps)

1. **Hatua ya 1:** Kuboresha `Navbar.tsx` na `MobileMenu.tsx` ili ziwe na Dropdowns za **Safaris**, **Kilimanjaro Routes**, na **Day Trips**.
2. **Hatua ya 2:** Kuunda ukurasa mpya wa **`Safaris.tsx`** kwa ajili ya vifurushi vya Mbuga za Wanyama.
3. **Hatua ya 3:** Kuunda ukurasa wa **`TravelInfo.tsx`** kwa ajili ya miongozo ya wasafiri na maswali yanayoulizwa mara kwa mara (FAQs).
