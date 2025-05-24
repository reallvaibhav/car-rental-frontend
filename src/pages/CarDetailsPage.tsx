import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCarById } from '../services/carData';
import { Car } from '../types';
import { ArrowLeft, Calendar, Users, Fuel, Zap, Gauge, Check, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import { locations } from '../services/carData';

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  
  useEffect(() => {
    if (id) {
      const carData = getCarById(id);
      if (carData) {
        setCar(carData);
      } else {
        navigate('/cars');
      }
    }
  }, [id, navigate]);
  
  if (!car) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  const getFuelIcon = (fuelType: string) => {
    if (fuelType === 'Electric') {
      return <Zap className="h-5 w-5 text-blue-500" />;
    } else if (fuelType === 'Hybrid') {
      return <Zap className="h-5 w-5 text-green-500" />;
    } else {
      return <Fuel className="h-5 w-5 text-amber-500" />;
    }
  };
  
  const locationOptions = [
    { value: '', label: 'Select location' },
    ...locations.map(loc => ({ value: loc.id, label: loc.name }))
  ];
  
  return (
    <div className="pt-24 pb-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to results</span>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-[300px] md:h-[400px]">
                <img 
                  src={car.image} 
                  alt={`${car.make} ${car.model}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-md">
                    ${car.price}/day
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {car.make} {car.model}
                  </h1>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 ml-1">{car.rating} / 5</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Gauge className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    {getFuelIcon(car.fuelType)}
                    <span className="ml-2">{car.fuelType}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Vehicle Overview</h2>
                  <p className="text-gray-600 mb-6">
                    The {car.year} {car.make} {car.model} is a {car.category.toLowerCase()} car that offers comfort, reliability, and excellent performance. With {car.seats} seats, {car.transmission.toLowerCase()} transmission, and {car.fuelType.toLowerCase()} engine, it's perfect for {car.category === 'Economy' || car.category === 'Compact' ? 'city driving and daily commutes' : car.category === 'SUV' ? 'family trips and outdoor adventures' : car.category === 'Luxury' ? 'business trips and special occasions' : 'thrill-seekers and driving enthusiasts'}.
                  </p>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-emerald-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-2" />
                      <div>
                        <h4 className="text-amber-800 font-medium mb-1">Important Information</h4>
                        <p className="text-amber-700 text-sm">
                          This vehicle has a mileage policy of {car.mileage}. Please review our rental terms and conditions for complete details before booking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl overflow-hidden shadow-md sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Book This Car</h2>
                
                <div className="space-y-4 mb-6">
                  <Select
                    label="Pickup Location"
                    options={locationOptions}
                    value={selectedLocation}
                    onChange={setSelectedLocation}
                    fullWidth
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pickup Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Return Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-full"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Base rate</span>
                    <span className="text-gray-900">${car.price}.00/day</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Estimated taxes & fees</span>
                    <span className="text-gray-900">${Math.round(car.price * 0.12)}.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total per day</span>
                    <span>${car.price + Math.round(car.price * 0.12)}.00</span>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  disabled={!selectedLocation || !pickupDate || !returnDate}
                >
                  Book Now
                </Button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  By booking, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;