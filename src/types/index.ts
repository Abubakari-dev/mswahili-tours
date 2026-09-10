export interface Destination {
  id: string;
  name: string;
  circuit: 'Northern' | 'Southern' | 'Western' | 'Coastal & Islands';
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  bestTime: string;
}

export interface Activity {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge?: string;
  duration: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  bestTime: string;
  location: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  longDescription: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  wildlife?: string[];
  whatToBring?: string[];
  priceFrom: number;
}

export interface PackageTour {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  priceFrom: number;
  featured: boolean;
  image: string;
  badge?: string;
  highlights: string[];
  circuit: string;
  inclusions: string[];
}

export interface TrekkingRoute {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  difficulty: 'Moderate' | 'Challenging' | 'Strenuous' | 'Demanding';
  successRate: number;
  scenery: string;
  image: string;
  badge?: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  photo: string;
  bio: string;
  quote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  trip: string;
  rating: number;
  comment: string;
  avatar?: string;
  date: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  tourType: string;
  travelDate: string;
  travelers: string;
  budgetRange: string;
  message: string;
}
