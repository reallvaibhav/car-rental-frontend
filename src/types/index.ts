export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  category: CarCategory;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  image: string;
  features: string[];
  available: boolean;
  rating: number;
  mileage: string;
}

export type CarCategory = 'Economy' | 'Compact' | 'SUV' | 'Luxury' | 'Sports';

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
}

export interface BookingDate {
  pickup: Date | null;
  dropoff: Date | null;
}

export interface FilterState {
  category: CarCategory | '';
  priceRange: [number, number];
  seats: number | null;
  transmission: 'Automatic' | 'Manual' | '';
  sortBy: 'price-low' | 'price-high' | 'rating' | '';
}