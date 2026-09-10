# Mswahili Tours & Safaris - Luxury Tanzania Travel Portal

A high-performance, modern React + TypeScript + Vite + Tailwind CSS v4 web application for **Mswahili Tours & Safaris Company Limited** (headquartered in Arusha, Tanzania).

## 🌟 Features & Pages

- **Home (`/`)**: Hero banner, floating booking widget, top destinations, featured luxury safari packages, Kilimanjaro route comparison table, why choose us, and lead capture.
- **Destinations (`/destinations`)**: Full interactive circuit guide across **Northern Circuit**, **Southern Circuit**, **Western Circuit**, and **Coastal & Islands**.
- **Tours & Packages (`/tours`)**: Comprehensive catalog of safari packages, high-altitude Kilimanjaro routes, and featured East African experiences.
- **Travel Info (`/travel-info`)**: Vital travel facts, visa guidelines, health/safety requirements, 4-season weather breakdown, packing checklists, and transportation options.
- **About Us (`/about`)**: Company heritage, local leadership, ethical values (KPAP partner, TTB licensed, TATO member), team bios, and animated impact stats.
- **Book Your Safari (`/book`)**: Pre-filled multi-step inquiry form with dynamic search param prefilling, real-time validation, and trust badges.
- **404 Not Found (`/`)**: Off-trail guidance back to camp.

## 📁 Project Architecture & Structure

```
D:/mswahili-tours/
├── public/                    # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, MobileMenu, SearchModal
│   │   ├── sections/          # BookingWidget, LeadCapture, ScrollToTop, StatCounter, TrekkingTable
│   │   └── ui/                # Badge, Button, Card, Input, SectionHeading, Select
│   ├── data/                  # Strongly typed data models (destinations, packages, routes, team, etc.)
│   ├── pages/                 # Home, Destinations, Tours, TravelInfo, About, Book, NotFound
│   ├── types/                 # TypeScript interface definitions
│   ├── App.tsx                # React Router v7 routes & layout
│   ├── index.css              # Tailwind CSS v4 theme configuration
│   └── main.tsx               # Application entry point
├── index.html                 # HTML template with Fraunces & Montserrat fonts
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript compilation settings
└── vite.config.ts             # Vite build & alias configurations
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## 🛠️ Tech Stack

- **React 19** & **TypeScript 5.8**
- **Vite 6** & **Tailwind CSS v4**
- **React Router 7**
- **React Hook Form**
- **Lucide React** & **React Icons**
