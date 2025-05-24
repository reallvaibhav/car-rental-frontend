import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cars } from '../../services/carData';
import Button from '../ui/Button';
import CarCard from '../cars/CarCard';
import { Link } from 'react-router-dom';

const FeaturedCars: React.FC = () => {
  // Get the top 4 highest rated cars
  const featuredCars = [...cars]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  
  return (
    <section id="cars" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our selection of premium vehicles for your next journey.
              We offer a wide range of cars to suit your needs and preferences.
            </p>
          </div>
          <Link to="/cars">
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0"
            >
              <span>View All</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;