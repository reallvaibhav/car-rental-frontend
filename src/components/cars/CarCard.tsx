import React from 'react';
import { ArrowRight, Users, Fuel, Zap, Gauge } from 'lucide-react';
import { Car } from '../../types';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const getFuelIcon = (fuelType: string) => {
    if (fuelType === 'Electric') {
      return <Zap className="h-4 w-4 text-blue-500" />;
    } else if (fuelType === 'Hybrid') {
      return <Zap className="h-4 w-4 text-green-500" />;
    } else {
      return <Fuel className="h-4 w-4 text-amber-500" />;
    }
  };
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 h-full flex flex-col group">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-md">
            ${car.price}/day
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
            {car.category}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900">
            {car.make} {car.model}
          </h3>
          <div className="flex items-center">
            <svg className="h-4 w-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-gray-700 ml-1">{car.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          {car.year} • {car.transmission} • {car.mileage}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">{car.seats} Seats</span>
          </div>
          <div className="flex items-center">
            {getFuelIcon(car.fuelType)}
            <span className="text-sm text-gray-700 ml-2">{car.fuelType}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">{car.transmission}</span>
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm text-gray-700">Insurance</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Link to={`/cars/${car.id}`}>
          <Button variant="outline" fullWidth className="group-hover:border-emerald-500 group-hover:text-emerald-500">
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;