import { Car, Location } from '../types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'Downtown',
    address: '123 Main Street',
    city: 'San Francisco',
  },
  {
    id: '2',
    name: 'Airport Terminal',
    address: 'International Airport',
    city: 'San Francisco',
  },
  {
    id: '3',
    name: 'Marina District',
    address: '789 Bay Street',
    city: 'San Francisco',
  },
  {
    id: '4',
    name: 'Financial District',
    address: '456 Market Street',
    city: 'San Francisco',
  },
];

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2023,
    price: 45,
    category: 'Economy',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Bluetooth', 'USB Port', 'Backup Camera', 'Cruise Control'],
    available: true,
    rating: 4.3,
    mileage: 'Unlimited',
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 50,
    category: 'Compact',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Apple CarPlay', 'Android Auto', 'Backup Camera', 'Keyless Entry'],
    available: true,
    rating: 4.5,
    mileage: 'Unlimited',
  },
  {
    id: '3',
    make: 'Ford',
    model: 'Explorer',
    year: 2023,
    price: 85,
    category: 'SUV',
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Third Row Seating', 'Panoramic Sunroof', 'Navigation', 'Heated Seats'],
    available: true,
    rating: 4.7,
    mileage: 'Unlimited',
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2023,
    price: 120,
    category: 'Luxury',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Leather Seats', 'Premium Sound System', 'Navigation', 'Driver Assistance'],
    available: true,
    rating: 4.9,
    mileage: 'Unlimited',
  },
  {
    id: '5',
    make: 'BMW',
    model: 'i4',
    year: 2023,
    price: 110,
    category: 'Luxury',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Electric',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Fast Charging', 'Premium Sound System', 'Navigation', 'Driver Assistance'],
    available: true,
    rating: 4.8,
    mileage: 'Unlimited',
  },
  {
    id: '6',
    make: 'Porsche',
    model: '911',
    year: 2023,
    price: 200,
    category: 'Sports',
    seats: 2,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Sport Mode', 'Premium Sound System', 'Navigation', 'Performance Tires'],
    available: true,
    rating: 5.0,
    mileage: '150 miles/day',
  },
  {
    id: '7',
    make: 'Chevrolet',
    model: 'Suburban',
    year: 2023,
    price: 95,
    category: 'SUV',
    seats: 8,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Third Row Seating', 'Apple CarPlay', 'Android Auto', 'Backup Camera'],
    available: true,
    rating: 4.6,
    mileage: 'Unlimited',
  },
  {
    id: '8',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 100,
    category: 'Luxury',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Electric',
    image: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: ['Autopilot', 'Premium Sound System', 'Navigation', 'Fast Charging'],
    available: true,
    rating: 4.9,
    mileage: 'Unlimited',
  },
];

// Filter cars by category
export const getCarsByCategory = (category: string): Car[] => {
  if (!category) return cars;
  return cars.filter(car => car.category === category);
};

// Get car by ID
export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

// Filter and sort cars
export const filterCars = (
  categoryFilter: string,
  priceRange: [number, number],
  seatsFilter: number | null,
  transmissionFilter: string,
  sortBy: string
): Car[] => {
  let filtered = [...cars];

  // Apply category filter
  if (categoryFilter) {
    filtered = filtered.filter(car => car.category === categoryFilter);
  }

  // Apply price range filter
  filtered = filtered.filter(
    car => car.price >= priceRange[0] && car.price <= priceRange[1]
  );

  // Apply seats filter
  if (seatsFilter) {
    filtered = filtered.filter(car => car.seats >= seatsFilter);
  }

  // Apply transmission filter
  if (transmissionFilter) {
    filtered = filtered.filter(car => car.transmission === transmissionFilter);
  }

  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return filtered;
};