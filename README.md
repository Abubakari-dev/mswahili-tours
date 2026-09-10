# Mswahili Tours & Safaris

A high-performance, modern web application built for **Mswahili Tours & Safaris Company Limited**, headquartered in Arusha, Tanzania. The platform delivers an elegant digital experience for booking wildlife safaris, Mount Kilimanjaro trekking expeditions, Zanzibar beach holidays, and cultural excursions across East Africa.

---

## Overview

Mswahili Tours & Safaris provides a seamless, responsive portal for international and local travelers. Built with modern web standards, the application features dynamic routing, interactive circuit guides, route comparison tools, and structured inquiry forms.

---

## Key Pages and Features

### 1. Home (`/`)
- Hero banner with quick trip inquiry CTAs.
- Top destinations overview and luxury safari package highlights.
- Mount Kilimanjaro route comparison table.
- Company values, trust accreditations, and lead capture widget.

### 2. Wildlife Safaris (`/safaris`)
- Comprehensive safari itineraries covering Tanzania's Northern Circuit (Serengeti, Ngorongoro Crater, Tarangire, Lake Manyara).
- Circuit filter and category selection (Luxury, Mid-Range, Budget, Family Safaris).
- High-definition image galleries and detailed day-by-day itinerary summaries.

### 3. Mount Kilimanjaro Trekking (`/kilimanjaro`)
- Interactive route guides for Lemosho, Machame, Marangu, and Rongai.
- Altitude profiles, summit success rates, and duration recommendations.
- Acclimatization tips, safety medical protocols, and gear checklists.

### 4. Zanzibar Beach Holidays (`/zanzibar`)
- Coastal itineraries including Stone Town cultural tours, Nungwi/Kendwa beach resorts, and spice farm excursions.
- Safari + Zanzibar combination packages.

### 5. Activities & Day Trips (`/activities`)
- Excursion directory featuring Materuni Waterfalls, Chemka Hot Springs, canoe safaris, and coffee tasting tours.
- Filtering by duration, physical activity level, and location.

### 6. Travel Information (`/travel-info`)
- Essential traveler guides: Visa requirements, Yellow Fever & health guidelines, weather guide across seasons, and packing checklists.
- Frequently Asked Questions (FAQs) for first-time visitors to Tanzania.

### 7. About Us (`/about`)
- Company heritage, local Tanzanian leadership, and ethical tourism practices (KPAP partner, TTB licensed, TATO member).
- Impact statistics, certified guide credentials, and client testimonials.

### 8. Booking & Inquiries (`/book`)
- Multi-step inquiry form with dynamic URL query parameter prefilling.
- Real-time form validation and instant inquiry submission interface.

---

## Tech Stack

- **Frontend Framework:** React 19 & TypeScript 5.8
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4
- **Routing:** React Router 7
- **Icons:** Lucide React & React Icons
- **Form Handling:** React Hook Form

---

## Project Structure

```
mswahili-tours/
├── public/                    # Static assets, logos, and favicons
├── src/
│   ├── assets/                # Optimized destination and route media
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, MobileMenu, SearchModal
│   │   ├── sections/          # BookingWidget, LeadCapture, ScrollToTop, TrekkingTable
│   │   └── ui/                # Reusable UI components (Button, Card, Input, Badge)
│   ├── data/                  # Typed datasets for packages, routes, and activities
│   ├── pages/                 # Page components (Home, Safaris, Kilimanjaro, Zanzibar, etc.)
│   ├── types/                 # TypeScript interfaces and data models
│   ├── App.tsx                # Application router configuration
│   ├── index.css              # Global styles and Tailwind CSS v4 theme setup
│   └── main.tsx               # Application bootstrap entry
├── index.html                 # Main HTML template
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript compilation config
└── vite.config.ts             # Vite configuration settings
```

---

## Getting Started

### Prerequisites

Ensure Node.js (version 18 or higher) and npm are installed on your machine.

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/Abubakari-dev/mswahili-tours.git
cd mswahili-tours
npm install
```

### Development Server

Run the local development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

Build the project for production deployment:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## License & Contact

**Mswahili Tours & Safaris Company Limited**  
Headquarters: Arusha, Tanzania  
Email: info@mswahilitours.co.tz  
Phone: +255 750 877 628  
Website: [mswahilitours.co.tz](https://www.mswahilitours.co.tz)
